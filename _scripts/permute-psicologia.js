#!/usr/bin/env node
/* Permuta las alternativas del banco de `psicologia-cliente-comprador/app.js`.
   Archivo especial: el banco está embebido como `const quizBank = {...}` y
   `const finalQuestions = [...]`. Usamos escaneo balanceado de llaves para
   extraer, evaluar, permutar y reinsertar solo esas secciones. */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

function prng(seed){
  let s = seed >>> 0;
  return () => { s = (Math.imul(s, 1664525) + 1013904223) >>> 0; return s / 0x100000000; };
}
function hashStr(str){
  let h = 2166136261 >>> 0;
  for (let i = 0; i < str.length; i++){
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return h;
}
function shuffleIndices(n, seed){
  const idx = Array.from({length:n}, (_,i)=>i);
  const rnd = prng(seed);
  for (let i = n - 1; i > 0; i--){
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

/* Escanea desde `start` (debe apuntar a '{' o '[') y devuelve el índice justo
   después del carácter de cierre balanceado, respetando strings simples/dobles/back-tick. */
function scanBalanced(src, start){
  const open = src[start];
  const close = open === '{' ? '}' : open === '[' ? ']' : null;
  if (!close) throw new Error('scanBalanced requires { or [');
  let depth = 0;
  let i = start;
  let inStr = null;
  let inLine = false, inBlock = false;
  while (i < src.length){
    const c = src[i]; const n = src[i+1];
    if (inLine){ if (c === '\n') inLine = false; i++; continue; }
    if (inBlock){ if (c === '*' && n === '/'){ inBlock = false; i += 2; continue; } i++; continue; }
    if (inStr){
      if (c === '\\'){ i += 2; continue; }
      if (c === inStr) inStr = null;
      i++; continue;
    }
    if (c === '/' && n === '/'){ inLine = true; i += 2; continue; }
    if (c === '/' && n === '*'){ inBlock = true; i += 2; continue; }
    if (c === '"' || c === "'" || c === '`'){ inStr = c; i++; continue; }
    if (c === open) depth++;
    else if (c === close){ depth--; if (depth === 0) return i + 1; }
    i++;
  }
  throw new Error('Unbalanced');
}

function findSection(src, declRegex){
  const m = declRegex.exec(src);
  if (!m) return null;
  const openIdx = m.index + m[0].length - 1; // último char del match es '{' o '['
  const endIdx = scanBalanced(src, openIdx);
  return { start: m.index, end: endIdx, openIdx, valueStart: openIdx, valueEnd: endIdx };
}

function evalLiteral(src, start, end){
  // Envolvemos en paréntesis para que `{...}` se interprete como objeto
  const expr = '(' + src.slice(start, end) + ')';
  const sandbox = {};
  vm.createContext(sandbox);
  return vm.runInContext(expr, sandbox);
}

const filePath = path.join(__dirname, '..', 'psicologia-cliente-comprador', 'app.js');
let src = fs.readFileSync(filePath, 'utf8');

// Reemplaza primero finalQuestions, después quizBank (de atrás hacia adelante
// para no invalidar índices)
const sections = [
  { name: 'finalQuestions', re: /const\s+finalQuestions\s*=\s*\[/, permute: (v, prefix) => v.map((q, i) => permuteQuestion(q, hashStr(`${prefix}:final:q${i}:${q.q}`))) },
  { name: 'quizBank',       re: /const\s+quizBank\s*=\s*\{/,       permute: (v, prefix) => {
      const out = {};
      Object.entries(v).forEach(([k, arr]) => {
        out[k] = arr.map((q, i) => permuteQuestion(q, hashStr(`${prefix}:m${k}:q${i}:${q.q}`)));
      });
      return out;
    } },
];

const prefix = 'psicologia-cliente-comprador';
const tallies = {};

for (const sec of sections){
  const loc = findSection(src, sec.re);
  if (!loc){ console.warn('  ! sección no encontrada:', sec.name); continue; }
  const value = evalLiteral(src, loc.valueStart, loc.valueEnd);

  // tally before
  const before = {};
  if (sec.name === 'quizBank'){
    Object.values(value).forEach(arr => arr.forEach(q => { before[q.correct] = (before[q.correct]||0)+1; }));
  } else {
    value.forEach(q => { before[q.correct] = (before[q.correct]||0)+1; });
  }

  const permuted = sec.permute(value, prefix);

  const after = {};
  if (sec.name === 'quizBank'){
    Object.values(permuted).forEach(arr => arr.forEach(q => { after[q.correct] = (after[q.correct]||0)+1; }));
  } else {
    permuted.forEach(q => { after[q.correct] = (after[q.correct]||0)+1; });
  }
  tallies[sec.name] = { before, after };

  const newLiteral = serialize(permuted, 0);
  src = src.slice(0, loc.valueStart) + newLiteral + src.slice(loc.valueEnd);
}

fs.writeFileSync(filePath, src, 'utf8');
console.log('✓ psicologia-cliente-comprador/app.js');
Object.entries(tallies).forEach(([k, v]) => {
  console.log(`   ${k}: antes ${JSON.stringify(v.before)}  →  después ${JSON.stringify(v.after)}`);
});
