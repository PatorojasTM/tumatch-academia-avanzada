#!/usr/bin/env node
/* Permuta las alternativas de cada pregunta para que `correct` quede
   distribuido de forma uniforme (0/1/2/3) y no siempre en la posición B.
   - Evalúa cada archivo fuente en un sandbox (soporta helpers tipo Q()).
   - Permuta opts + whyWrong manteniendo la trazabilidad al correcto.
   - Reescribe el archivo como JS literal con comentario-header preservado.
*/
const fs = require('fs');
const path = require('path');
const vm = require('vm');

function prng(seed){
  let s = seed >>> 0;
  return () => {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
    return s / 0x100000000;
  };
}
function hashStr(str){
  let h = 2166136261 >>> 0;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return h;
}
function shuffleIndices(n, seed){
  const idx = Array.from({length:n}, (_,i)=>i);
  const rnd = prng(seed);
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [idx[i], idx[j]] = [idx[j], idx[i]];
  }
  return idx;
}

function permuteQuestion(q, seed){
  const n = q.opts.length;
  const perm = shuffleIndices(n, seed);
  const newOpts = perm.map(i => q.opts[i]);
  const newWhyWrong = Array.isArray(q.whyWrong)
    ? perm.map(i => q.whyWrong[i] !== undefined ? q.whyWrong[i] : '')
    : undefined;
  const newCorrect = perm.indexOf(q.correct);
  const out = { q: q.q, opts: newOpts, correct: newCorrect, whyCorrect: q.whyCorrect };
  if (newWhyWrong) out.whyWrong = newWhyWrong;
  return out;
}

function permuteBank(bank, prefix){
  const out = {};
  Object.entries(bank).forEach(([k, arr]) => {
    out[k] = arr.map((q, i) =>
      permuteQuestion(q, hashStr(`${prefix}:m${k}:q${i}:${q.q}`))
    );
  });
  return out;
}
function permuteFinalArr(arr, prefix){
  return arr.map((q, i) =>
    permuteQuestion(q, hashStr(`${prefix}:final:q${i}:${q.q}`))
  );
}

/* Serializador JS-literal consciente del formato (arrays cortos en una línea). */
function serialize(val, indent){
  indent = indent || 0;
  const pad = '  '.repeat(indent);
  const pad1 = '  '.repeat(indent + 1);
  if (val === null) return 'null';
  if (val === undefined) return 'undefined';
  if (typeof val === 'boolean') return String(val);
  if (typeof val === 'number') return String(val);
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

function processFile(filePath){
  const src = fs.readFileSync(filePath, 'utf8');
  const sandbox = { window: {}, console };
  vm.createContext(sandbox);
  try {
    vm.runInContext(src, sandbox);
  } catch (e) {
    console.error('Error ejecutando', filePath, e.message);
    return;
  }
  const cfg = sandbox.window.TALLER_CONFIG;
  if (!cfg){ console.warn('  ! sin TALLER_CONFIG:', filePath); return; }
  const slug = cfg.slug || path.basename(path.dirname(filePath));

  const originalDist = {};
  const flat = [];
  Object.values(cfg.quizBank || {}).forEach(arr => arr.forEach(q => flat.push(q)));
  (cfg.finalQuestions || []).forEach(q => flat.push(q));
  flat.forEach(q => { originalDist[q.correct] = (originalDist[q.correct]||0)+1; });

  if (cfg.quizBank) cfg.quizBank = permuteBank(cfg.quizBank, slug);
  if (cfg.finalQuestions) cfg.finalQuestions = permuteFinalArr(cfg.finalQuestions, slug);

  const newDist = {};
  const flat2 = [];
  Object.values(cfg.quizBank || {}).forEach(arr => arr.forEach(q => flat2.push(q)));
  (cfg.finalQuestions || []).forEach(q => flat2.push(q));
  flat2.forEach(q => { newDist[q.correct] = (newDist[q.correct]||0)+1; });

  // Cabecera: preservar el primer comentario de bloque
  const headerMatch = src.match(/^(\/\*[\s\S]*?\*\/\s*)/);
  const header = headerMatch ? headerMatch[1] : '';

  const out = header + 'window.TALLER_CONFIG = ' + serialize(cfg, 0) + ';\n';
  fs.writeFileSync(filePath, out, 'utf8');
  console.log(`✓ ${path.relative(process.cwd(), filePath)}`);
  console.log(`   antes: ${JSON.stringify(originalDist)}  →  después: ${JSON.stringify(newDist)}`);
}

const files = [
  'crm-gestion-hipotecaria/quiz-data.js',
  'due-diligence-legal/quiz-data.js',
  'financiamiento-leasing/quiz-data.js',
  'negociacion-cierre/quiz-data.js',
  'postventa-fidelizacion/quiz-data.js',
  'subsidios-chile-2026/quiz-data.js',
].map(f => path.join(__dirname, '..', f));

files.forEach(processFile);
console.log('\nListo.');
