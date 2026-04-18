const fs = require('fs');
const vm = require('vm');
const path = require('path');
const src = fs.readFileSync(path.join(__dirname, '..', 'psicologia-cliente-comprador', 'app.js'), 'utf8');

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
function getSec(re){
  const m = re.exec(src);
  const start = m.index + m[0].length - 1;
  const end = scanBal(src, start);
  return vm.runInNewContext('(' + src.slice(start, end) + ')', {});
}
const qb = getSec(/const\s+quizBank\s*=\s*\{/);
const fq = getSec(/const\s+finalQuestions\s*=\s*\[/);
const all = [];
Object.values(qb).forEach(arr => arr.forEach(q => all.push(q)));
fq.forEach(q => all.push(q));
const d = {}; let issues = 0;
all.forEach(q => {
  d[q.correct] = (d[q.correct] || 0) + 1;
  if (!q.opts || !q.opts[q.correct]) issues++;
  if (q.whyWrong && q.whyWrong.length !== q.opts.length) issues++;
});
console.log('psicologia', 'preguntas=', all.length, 'dist=', JSON.stringify(d), 'issues=', issues);
