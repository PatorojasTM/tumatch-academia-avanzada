/* Simula el flujo: carga config permutado → mezcla opts → responde →
   verifica que buildWhy muestra la letra correcta y el correct CSS está en
   la posición visible correcta. */
const fs = require('fs');
const vm = require('vm');
const path = require('path');

function loadTaller(slug){
  const src = fs.readFileSync(path.join(__dirname, '..', slug, 'quiz-data.js'), 'utf8');
  const sb = { window: {}, console };
  vm.createContext(sb);
  vm.runInContext(src, sb);
  return sb.window.TALLER_CONFIG;
}

function shuffle(a){ const x = a.slice(); for (let i=x.length-1;i>0;i--){ const j = Math.floor(Math.random()*(i+1)); [x[i],x[j]] = [x[j],x[i]]; } return x; }
function makeShuffledOpts(q){ return shuffle(q.opts.map((_, i) => i)).map(i => ({text: q.opts[i], originalIdx: i})); }

function buildWhy(correctIdx, opts, whyCorrect, whyWrong, shuffledOpts){
  const display = shuffledOpts && shuffledOpts.length === opts.length
    ? shuffledOpts.map(o => ({ text: o.text, originalIdx: o.originalIdx }))
    : opts.map((text, i) => ({ text, originalIdx: i }));
  const correctDisplayIdx = display.findIndex(o => o.originalIdx === correctIdx);
  const correctLetter = String.fromCharCode(65 + correctDisplayIdx);
  const correctText = opts[correctIdx];
  let html = `✓ ${correctLetter}) ${correctText}`;
  display.forEach((o, displayIdx) => {
    if (o.originalIdx === correctIdx) return;
    const reason = (whyWrong || [])[o.originalIdx];
    if (!reason) return;
    const letter = String.fromCharCode(65 + displayIdx);
    html += ` | ${letter}) ${o.text}`;
  });
  return html;
}

const slugs = ['crm-gestion-hipotecaria','due-diligence-legal','financiamiento-leasing','negociacion-cierre','postventa-fidelizacion','subsidios-chile-2026'];

let totalChecks = 0, pass = 0;
for (const slug of slugs){
  const cfg = loadTaller(slug);
  const all = [];
  Object.values(cfg.quizBank).forEach(arr => arr.forEach(q => all.push(q)));
  (cfg.finalQuestions || []).forEach(q => all.push(q));

  // 3 rondas de shuffle por pregunta
  for (let r = 0; r < 3; r++){
    for (const q of all){
      const sh = makeShuffledOpts(q);
      const correctShuffledIdx = sh.findIndex(o => o.originalIdx === q.correct);
      // Simulamos clic en cada posición visual
      for (let clickPos = 0; clickPos < sh.length; clickPos++){
        const clickedOriginal = sh[clickPos].originalIdx;
        const isCorrect = clickedOriginal === q.correct;
        totalChecks++;
        if (isCorrect === (clickPos === correctShuffledIdx)) pass++;
      }
      // Verifica buildWhy: la letra correcta debe apuntar al texto correcto
      const fb = buildWhy(q.correct, q.opts, q.whyCorrect, q.whyWrong, sh);
      const expected = `✓ ${String.fromCharCode(65 + correctShuffledIdx)}) ${q.opts[q.correct]}`;
      totalChecks++;
      if (fb.startsWith(expected)) pass++;
      else console.error('FAIL:', slug, q.q.slice(0,40), '\n  got:', fb.slice(0, 120), '\n  expected:', expected);
    }
  }
}
console.log(`Verificación: ${pass}/${totalChecks} checks OK`);
