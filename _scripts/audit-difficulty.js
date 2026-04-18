/* Audita los bancos de preguntas para detectar "tells" que delatan la correcta:
   1. Correcta es >=2x la longitud promedio de las otras (length giveaway)
   2. Correcta contiene palabras tecnicas/especificas (pp, %, UF, Art., Ley, etc)
      que los distractores no tienen (specificity giveaway)
   3. Distractores absurdos o muy cortos (<= 3 caracteres o "No", "Nada", "Todo") */
const fs = require('fs');
const vm = require('vm');
const path = require('path');

function loadAll(){
  const slugs = ['crm-gestion-hipotecaria','due-diligence-legal','financiamiento-leasing','negociacion-cierre','postventa-fidelizacion','subsidios-chile-2026'];
  const out = [];
  for (const slug of slugs){
    const src = fs.readFileSync(path.join(__dirname, '..', slug, 'quiz-data.js'), 'utf8');
    const sb = { window: {}, console };
    vm.createContext(sb);
    vm.runInContext(src, sb);
    const cfg = sb.window.TALLER_CONFIG;
    Object.entries(cfg.quizBank).forEach(([mod, arr]) => arr.forEach((q, i) => out.push({slug, mod, i, q})));
    (cfg.finalQuestions || []).forEach((q, i) => out.push({slug, mod:'final', i, q}));
  }
  // psicologia embebida
  const psiSrc = fs.readFileSync(path.join(__dirname, '..', 'psicologia-cliente-comprador', 'app.js'), 'utf8');
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
  }
  function getSec(re){ const m = re.exec(psiSrc); const start = m.index + m[0].length - 1; const end = scanBal(psiSrc, start); return vm.runInNewContext('(' + psiSrc.slice(start, end) + ')', {}); }
  const qb = getSec(/const\s+quizBank\s*=\s*\{/);
  const fq = getSec(/const\s+finalQuestions\s*=\s*\[/);
  Object.entries(qb).forEach(([mod, arr]) => arr.forEach((q, i) => out.push({slug:'psicologia-cliente-comprador', mod, i, q})));
  fq.forEach((q, i) => out.push({slug:'psicologia-cliente-comprador', mod:'final', i, q}));
  return out;
}

const all = loadAll();
console.log('Total preguntas:', all.length);

/* 1) length giveaway */
const lengthFlags = [];
for (const {slug, mod, i, q} of all){
  const cLen = q.opts[q.correct].length;
  const others = q.opts.filter((_, k) => k !== q.correct).map(o => o.length);
  const avgOther = others.reduce((a,b)=>a+b,0) / others.length;
  if (cLen >= avgOther * 2 && cLen > 30){
    lengthFlags.push({slug, mod, i, q, ratio: (cLen/avgOther).toFixed(1)});
  }
}

/* 2) trivial distractor */
const trivialFlags = [];
const trivialPatterns = /^(no|si|nada|ninguna?|todas?|siempre|nunca|0%|100%|no existe|no se paga|imposible|absurdo|infinito|\?+|\-+|inventado)$/i;
for (const {slug, mod, i, q} of all){
  const triv = q.opts.filter((o, k) => k !== q.correct && (o.length < 6 || trivialPatterns.test(o.trim())));
  if (triv.length >= 2){
    trivialFlags.push({slug, mod, i, q, triv});
  }
}

console.log(`\n=== ${lengthFlags.length} preguntas con GIVEAWAY POR LONGITUD (correcta >= 2x avg otras) ===`);
lengthFlags.slice(0, 15).forEach(f => {
  console.log(`  [${f.slug}/${f.mod}#${f.i+1}] ratio=${f.ratio}x | "${f.q.q.slice(0,70)}..."`);
});
if (lengthFlags.length > 15) console.log(`  ... y ${lengthFlags.length - 15} mas`);

console.log(`\n=== ${trivialFlags.length} preguntas con DISTRACTORES TRIVIALES (>=2 opts no-correcta de <6 chars o "no"/"nada"/"siempre") ===`);
trivialFlags.slice(0, 15).forEach(f => {
  console.log(`  [${f.slug}/${f.mod}#${f.i+1}] triv=${JSON.stringify(f.triv)} | "${f.q.q.slice(0,70)}..."`);
});
if (trivialFlags.length > 15) console.log(`  ... y ${trivialFlags.length - 15} mas`);

console.log('\n=== RESUMEN ===');
const byTaller = {};
for (const f of lengthFlags) byTaller[f.slug] = (byTaller[f.slug] || {len:0, triv:0, __proto__:null});
for (const f of lengthFlags) { byTaller[f.slug] = byTaller[f.slug] || {len:0, triv:0}; byTaller[f.slug].len++; }
for (const f of trivialFlags){ byTaller[f.slug] = byTaller[f.slug] || {len:0, triv:0}; byTaller[f.slug].triv++; }
Object.entries(byTaller).forEach(([s, v]) => console.log(`  ${s.padEnd(32)} longitud=${v.len}  trivial=${v.triv}`));
