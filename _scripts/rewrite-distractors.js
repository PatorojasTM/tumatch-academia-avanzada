#!/usr/bin/env node
/* Reescribe los distractores de las preguntas "debiles" usando Claude API.
   - Criterio de seleccion: (a) distractor correcto >= 3x longitud promedio de
     las otras opciones, o (b) >=2 distractores triviales (<=6 chars o
     palabras como "Nada", "Nunca", "0%", "Siempre", "No existe").
   - Para cada pregunta seleccionada llama al modelo con un prompt
     estructurado y parsea la respuesta JSON. Reemplaza opts[i] y
     whyWrong[i] donde i != correct.
   - Uso:
       ANTHROPIC_API_KEY=sk-... node _scripts/rewrite-distractors.js
       # opcional: LIMIT=20 (primeras 20)  DRY_RUN=1 (no escribe archivos)
   - Preserva la distribucion de correct ya permutada: solo cambia texto
     de distractores, no el indice correcto. */

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const https = require('https');

const API_KEY = process.env.ANTHROPIC_API_KEY;
if (!API_KEY){ console.error('Falta ANTHROPIC_API_KEY'); process.exit(1); }
const MODEL = process.env.MODEL || 'claude-sonnet-4-6';
const LIMIT = parseInt(process.env.LIMIT || '0', 10);
const DRY_RUN = process.env.DRY_RUN === '1';
const CONCURRENCY = parseInt(process.env.CONCURRENCY || '4', 10);

const SLUG_FILES = {
  'crm-gestion-hipotecaria': 'crm-gestion-hipotecaria/quiz-data.js',
  'due-diligence-legal': 'due-diligence-legal/quiz-data.js',
  'financiamiento-leasing': 'financiamiento-leasing/quiz-data.js',
  'negociacion-cierre': 'negociacion-cierre/quiz-data.js',
  'postventa-fidelizacion': 'postventa-fidelizacion/quiz-data.js',
  'subsidios-chile-2026': 'subsidios-chile-2026/quiz-data.js',
};
const PSI_FILE = 'psicologia-cliente-comprador/app.js';

function scanBal(s, start){
  const open = s[start], close = open === '{' ? '}' : ']';
  let d = 0, i = start, str = null, bl = false, ln = false;
  while (i < s.length){
    const c = s[i], n = s[i+1];
    if (ln){ if (c === '\n') ln = false; i++; continue; }
    if (bl){ if (c === '*' && n === '/'){ bl = false; i += 2; continue; } i++; continue; }
    if (str){ if (c === '\\'){ i += 2; continue; } if (c === str) str = null; i++; continue; }
    if (c === '/' && n === '/'){ ln = true; i += 2; continue; }
    if (c === '/' && n === '*'){ bl = true; i += 2; continue; }
    if (c === '"' || c === "'" || c === '`'){ str = c; i++; continue; }
    if (c === open) d++;
    else if (c === close){ d--; if (d === 0) return i + 1; }
    i++;
  }
  throw new Error('unbalanced');
}

function serialize(val, indent){
  indent = indent || 0;
  const pad = '  '.repeat(indent);
  const pad1 = '  '.repeat(indent + 1);
  if (val === null) return 'null';
  if (val === undefined) return 'undefined';
  if (typeof val === 'boolean' || typeof val === 'number') return String(val);
  if (typeof val === 'string') return JSON.stringify(val);
  if (Array.isArray(val)){
    if (val.length === 0) return '[]';
    const parts = val.map(v => serialize(v, indent + 1));
    const oneLine = '[' + parts.join(', ') + ']';
    if (oneLine.length < 140 && !oneLine.includes('\n')) return oneLine;
    return '[\n' + parts.map(p => pad1 + p).join(',\n') + '\n' + pad + ']';
  }
  if (typeof val === 'object'){
    const entries = Object.entries(val);
    if (entries.length === 0) return '{}';
    const parts = entries.map(([k, v]) => {
      const key = /^[A-Za-z_$][\w$]*$/.test(k) ? k : JSON.stringify(k);
      return key + ': ' + serialize(v, indent + 1);
    });
    return '{\n' + parts.map(p => pad1 + p).join(',\n') + '\n' + pad + '}';
  }
  return JSON.stringify(val);
}

const trivialPatterns = /^(no|si|nada|ninguna?|todas?|siempre|nunca|0%|100%|no existe|no se paga|imposible|absurdo|infinito|\?+|\-+|inventado|sin|libre|otro)$/i;
function isWeak(q){
  const cLen = q.opts[q.correct].length;
  const others = q.opts.filter((_, k) => k !== q.correct).map(o => o.length);
  const avgOther = others.length ? others.reduce((a,b)=>a+b,0) / others.length : 0;
  const ratio = avgOther > 0 ? cLen / avgOther : 999;
  const trivCount = q.opts.filter((o, k) => k !== q.correct && (o.length < 6 || trivialPatterns.test(o.trim()))).length;
  return (cLen > 30 && ratio >= 3) || trivCount >= 2;
}

async function callClaude(payload){
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(payload);
    const req = https.request({
      host: 'api.anthropic.com', path: '/v1/messages', method: 'POST',
      headers: {
        'x-api-key': API_KEY,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
        'content-length': Buffer.byteLength(data),
      }
    }, (res) => {
      let body = '';
      res.on('data', c => body += c);
      res.on('end', () => {
        if (res.statusCode >= 400) return reject(new Error('HTTP ' + res.statusCode + ': ' + body));
        try { resolve(JSON.parse(body)); } catch(e){ reject(e); }
      });
    });
    req.on('error', reject);
    req.write(data); req.end();
  });
}

const PROMPT_SYSTEM = `Eres un experto en diseño de evaluaciones tipo selección múltiple para formación profesional inmobiliaria en Chile.
Tu trabajo: dada una pregunta con su alternativa correcta, generar 3 DISTRACTORES de alta calidad.

Reglas obligatorias:
1. Longitud de cada distractor entre 0.7x y 1.3x la longitud de la correcta (medida en caracteres). Si la correcta usa términos técnicos, el distractor también.
2. Cada distractor debe representar un ERROR PLAUSIBLE que un corredor junior podría cometer. Prohibido: "Nada", "Nunca", "Ninguna", "No existe", "0%", "100%", absurdos, respuestas evidentemente incorrectas.
3. Los 3 distractores deben ser MUTUAMENTE EXCLUYENTES con la correcta (solo una alternativa puede ser correcta).
4. Si la pregunta es numérica (%, UF, $), usar cifras cercanas a la correcta (±20-50% de diferencia), no cifras absurdamente lejanas.
5. Si la pregunta es conceptual/legal, usar conceptos adyacentes del mismo dominio (ej. confundir "contrato de trabajo" con "prestación de servicios" es plausible; confundir con "arrendamiento" no).
6. Para cada distractor entregar una razón corta (1 frase, <=160 chars) explicando por qué está mal, sin revelar la correcta.
7. Respuesta en ESPAÑOL CHILENO técnico, sin jerga regional ni emojis.

Devuelve EXCLUSIVAMENTE un JSON válido con esta forma exacta:
{"distractors": [{"text":"...","why":"..."},{"text":"...","why":"..."},{"text":"...","why":"..."}]}`;

function buildUserPrompt(q, contextSlug){
  return `Contexto del taller: ${contextSlug}
Pregunta: "${q.q}"
Alternativa correcta: "${q.opts[q.correct]}"
Explicación oficial (whyCorrect): "${q.whyCorrect || ''}"
Distractores actuales (de baja calidad, a reemplazar): ${JSON.stringify(q.opts.filter((_,i)=>i!==q.correct))}

Genera 3 distractores NUEVOS según las reglas. Devuelve solo el JSON.`;
}

function parseJsonResponse(resp){
  const block = resp.content && resp.content[0] && resp.content[0].text;
  if (!block) throw new Error('no content');
  const match = block.match(/\{[\s\S]*\}/);
  if (!match) throw new Error('no json in response: ' + block.slice(0,200));
  return JSON.parse(match[0]);
}

async function rewriteQuestion(q, slug){
  const resp = await callClaude({
    model: MODEL,
    max_tokens: 1024,
    system: PROMPT_SYSTEM,
    messages: [{ role: 'user', content: buildUserPrompt(q, slug) }],
  });
  const parsed = parseJsonResponse(resp);
  if (!parsed.distractors || parsed.distractors.length !== 3) throw new Error('invalid distractor count');

  const newOpts = q.opts.slice();
  const newWhyWrong = (q.whyWrong || ['','','','']).slice();
  let di = 0;
  for (let i = 0; i < newOpts.length; i++){
    if (i === q.correct) continue;
    newOpts[i] = parsed.distractors[di].text;
    newWhyWrong[i] = parsed.distractors[di].why;
    di++;
  }
  return { ...q, opts: newOpts, whyWrong: newWhyWrong };
}

async function runWithConcurrency(items, worker, n){
  const out = new Array(items.length);
  let next = 0; let done = 0;
  return new Promise((resolve, reject) => {
    const runOne = () => {
      if (next >= items.length){
        if (done === items.length) resolve(out);
        return;
      }
      const idx = next++;
      worker(items[idx], idx).then(r => { out[idx] = r; done++; process.stdout.write('.'); if (done % 50 === 0) process.stdout.write(` [${done}/${items.length}]\n`); runOne(); }, err => reject(err));
    };
    for (let i = 0; i < n; i++) runOne();
  });
}

/* Carga y guarda de archivos */
function loadStandard(file){
  const full = path.join(__dirname, '..', file);
  const src = fs.readFileSync(full, 'utf8');
  const sb = { window: {}, console };
  vm.createContext(sb);
  vm.runInContext(src, sb);
  return { full, src, cfg: sb.window.TALLER_CONFIG };
}
function saveStandard({full, src, cfg}){
  const headerMatch = src.match(/^(\/\*[\s\S]*?\*\/\s*)/);
  const header = headerMatch ? headerMatch[1] : '';
  fs.writeFileSync(full, header + 'window.TALLER_CONFIG = ' + serialize(cfg, 0) + ';\n');
}
function loadPsi(){
  const full = path.join(__dirname, '..', PSI_FILE);
  let src = fs.readFileSync(full, 'utf8');
  function getSec(re){
    const m = re.exec(src); const start = m.index + m[0].length - 1; const end = scanBal(src, start);
    return { start, end, value: vm.runInNewContext('(' + src.slice(start, end) + ')', {}) };
  }
  return { full, src, quizBank: getSec(/const\s+quizBank\s*=\s*\{/), finalQuestions: getSec(/const\s+finalQuestions\s*=\s*\[/) };
}
function savePsi({full, src, quizBank, finalQuestions}){
  // Reemplazo de atrás hacia adelante
  let out = src;
  out = out.slice(0, finalQuestions.start) + serialize(finalQuestions.value, 0) + out.slice(finalQuestions.end);
  // quizBank esta antes, recalculamos offsets con el src original (no desplazado todavia)
  // Estrategia: hacemos reemplazos ordenados por start descendente
  // Aqui ya reemplazamos finalQuestions; debemos haber ordenado. Hacemos todo de nuevo en orden correcto:
  const segs = [{start: quizBank.start, end: quizBank.end, value: quizBank.value}, {start: finalQuestions.start, end: finalQuestions.end, value: finalQuestions.value}].sort((a,b)=>b.start-a.start);
  let out2 = src;
  for (const s of segs) out2 = out2.slice(0, s.start) + serialize(s.value, 0) + out2.slice(s.end);
  fs.writeFileSync(full, out2);
}

/* Main */
async function main(){
  const targets = [];
  // talleres estandar
  for (const [slug, file] of Object.entries(SLUG_FILES)){
    const loaded = loadStandard(file);
    const banks = loaded.cfg.quizBank || {};
    Object.entries(banks).forEach(([mod, arr]) => arr.forEach((q, i) => {
      if (isWeak(q)) targets.push({kind:'std', slug, mod, i, q, ref: loaded});
    }));
    (loaded.cfg.finalQuestions || []).forEach((q, i) => {
      if (isWeak(q)) targets.push({kind:'std-final', slug, mod:'final', i, q, ref: loaded});
    });
  }
  // psicologia
  const psi = loadPsi();
  Object.entries(psi.quizBank.value).forEach(([mod, arr]) => arr.forEach((q, i) => {
    if (isWeak(q)) targets.push({kind:'psi-bank', slug:'psicologia-cliente-comprador', mod, i, q, ref: psi});
  }));
  psi.finalQuestions.value.forEach((q, i) => {
    if (isWeak(q)) targets.push({kind:'psi-final', slug:'psicologia-cliente-comprador', mod:'final', i, q, ref: psi});
  });

  console.log(`${targets.length} preguntas debiles detectadas.`);
  const slice = LIMIT > 0 ? targets.slice(0, LIMIT) : targets;
  console.log(`Procesando ${slice.length} con concurrencia=${CONCURRENCY} (modelo=${MODEL}) DRY_RUN=${DRY_RUN}`);

  const updated = await runWithConcurrency(slice, async (t) => {
    try {
      const rew = await rewriteQuestion(t.q, t.slug);
      return { t, rew };
    } catch(e){
      console.error('\n  ! err', t.slug, t.mod, t.i, e.message);
      return null;
    }
  }, CONCURRENCY);
  process.stdout.write('\n');

  if (DRY_RUN){
    console.log('\n--- MUESTRA (primeras 3) ---');
    updated.filter(Boolean).slice(0, 3).forEach(({t, rew}) => {
      console.log(`\n[${t.slug}/${t.mod}#${t.i+1}]`);
      console.log('Q:', t.q.q);
      console.log('Correcta (sin cambios):', t.q.opts[t.q.correct]);
      console.log('Distractores nuevos:');
      rew.opts.forEach((o, i) => { if (i !== t.q.correct) console.log('  -', o); });
    });
    return;
  }

  // Aplicar cambios en memoria
  for (const r of updated){
    if (!r) continue;
    const { t, rew } = r;
    if (t.kind === 'std'){ t.ref.cfg.quizBank[t.mod][t.i] = rew; }
    else if (t.kind === 'std-final'){ t.ref.cfg.finalQuestions[t.i] = rew; }
    else if (t.kind === 'psi-bank'){ t.ref.quizBank.value[t.mod][t.i] = rew; }
    else if (t.kind === 'psi-final'){ t.ref.finalQuestions.value[t.i] = rew; }
  }
  // Persistir
  const stdRefs = new Set();
  updated.filter(Boolean).forEach(r => { if (r.t.kind.startsWith('std')) stdRefs.add(r.t.ref); });
  for (const ref of stdRefs) saveStandard(ref);
  const anyPsi = updated.filter(Boolean).some(r => r.t.kind.startsWith('psi'));
  if (anyPsi) savePsi(psi);

  console.log(`\nListo: ${updated.filter(Boolean).length} preguntas reescritas de ${slice.length} intentadas.`);
}

main().catch(e => { console.error(e); process.exit(1); });
