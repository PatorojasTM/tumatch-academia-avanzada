/* ==========================================================
   TuMatch Inmobiliario — Academia Avanzada · Core compartido
   Comprador Primera Vivienda · 7 talleres avanzados
   - Alternativas con posición aleatoria por cada intento
   - Bloqueo 10 min tras 5 errores acumulados en módulo (mensaje específico)
   - Bloqueo 10 min tras 5 intentos fallidos de prueba final (mensaje específico)
   - Botón claro "Siguiente módulo →" al aprobar cada módulo
   ========================================================== */

(function(){
  'use strict';

  /* ---------- util ---------- */
  function shuffle(a){ const x = a.slice(); for (let i=x.length-1;i>0;i--){ const j = Math.floor(Math.random()*(i+1)); [x[i],x[j]] = [x[j],x[i]]; } return x; }
  function pickQuestions(bank, n){ return shuffle(bank).slice(0, n); }
  function makeShuffledOpts(q){
    // Devuelve [{text, originalIdx}] en orden aleatorio, manteniendo trazabilidad al correcto
    return shuffle(q.opts.map((_, i) => i)).map(i => ({text: q.opts[i], originalIdx: i}));
  }

  function buildWhy(correctIdx, opts, whyCorrect, whyWrong){
    const correctLetter = String.fromCharCode(65 + correctIdx);
    const correctText = opts[correctIdx];
    let html = `<div class="qfb-correct"><strong>✓ ${correctLetter}) ${correctText}</strong> — ${whyCorrect}</div>`;
    html += `<div class="qfb-wrong-list"><strong>✗ Por qué las otras no:</strong>`;
    (whyWrong||[]).forEach((reason, i) => {
      if (i === correctIdx || !reason) return;
      const letter = String.fromCharCode(65 + i);
      html += `<span class="qfb-wrong-item"><strong>${letter})</strong> ${opts[i]} — ${reason}</span>`;
    });
    html += `</div>`;
    return html;
  }

  /* ---------- init ---------- */
  function init(config){
    const TALLER_SLUG       = config.slug;
    const MODULE_NAMES      = config.moduleNames;
    const TOTAL_MODULES     = Object.keys(MODULE_NAMES).length;
    const FINAL_MODULE      = TOTAL_MODULES + 1;
    const CONCLUSION_MODULE = TOTAL_MODULES + 2;
    const quizBank          = config.quizBank;
    const finalQuestions    = config.finalQuestions;
    const goldRules         = config.goldRules || [];
    const STORAGE_PREFIX    = 'tumatch_' + TALLER_SLUG + '_v1';
    const CERT_STORAGE_KEY  = 'tumatch_cert_name_' + TALLER_SLUG;
    const LOCKOUT_KEY       = 'tumatch_' + TALLER_SLUG + '_lockout';
    const LOCKOUT_REASON_KEY= 'tumatch_' + TALLER_SLUG + '_lockout_reason';
    const WRONG_COUNT_KEY   = 'tumatch_' + TALLER_SLUG + '_wrong';       // errores módulo
    const FINAL_FAIL_KEY    = 'tumatch_' + TALLER_SLUG + '_final_fail';  // intentos fallidos prueba final
    const MAX_WRONG         = 5;
    const MAX_FINAL_FAIL    = 5;
    const LOCKOUT_MS        = 10 * 60 * 1000;
    const QUIZ_QUESTIONS_PER_ATTEMPT = 5;
    const FINAL_SHOWN = 10;

    const LOCKOUT_MESSAGES = {
      module: {
        title: 'Paciencia · el taller se bloqueó por 10 minutos',
        body:  'Es clave leer con tiempo y estudiar lo que aquí se entrega para que tengas buenos resultados. Usa estos 10 minutos para repasar el módulo. Vuelve a intentarlo cuando el contador llegue a 0:00.'
      },
      final: {
        title: 'Prueba final bloqueada por 10 minutos',
        body:  'Aprovecha de revisar los módulos para que puedas superar esta prueba y tener tu certificado de cumplimiento. Las preguntas rotan del banco de 50, así que el próximo intento mostrará una selección distinta. Vuelve a intentarlo cuando el contador llegue a 0:00.'
      }
    };

    function defaultState(){ return { current:0, unlocked:1, completedModules:[], finalPassed:false, lastFinalAttempt:null }; }
    let state = defaultState();
    function save(){ try { localStorage.setItem(STORAGE_PREFIX, JSON.stringify(state)); } catch(e){} }
    function load(){ try{ const s = localStorage.getItem(STORAGE_PREFIX); if (s){ state = Object.assign(defaultState(), JSON.parse(s)); } }catch(e){} }

    /* ---------- lockout ---------- */
    function getWrongCount(){ try { return parseInt(localStorage.getItem(WRONG_COUNT_KEY)||'0',10) || 0; } catch(e){ return 0; } }
    function setWrongCount(n){ try { localStorage.setItem(WRONG_COUNT_KEY, String(n)); } catch(e){} }
    function clearWrongCount(){ try { localStorage.removeItem(WRONG_COUNT_KEY); } catch(e){} }

    function getFinalFailCount(){ try { return parseInt(localStorage.getItem(FINAL_FAIL_KEY)||'0',10) || 0; } catch(e){ return 0; } }
    function setFinalFailCount(n){ try { localStorage.setItem(FINAL_FAIL_KEY, String(n)); } catch(e){} }
    function clearFinalFailCount(){ try { localStorage.removeItem(FINAL_FAIL_KEY); } catch(e){} }

    function getLockoutUntil(){ try { return parseInt(localStorage.getItem(LOCKOUT_KEY)||'0',10) || 0; } catch(e){ return 0; } }
    function getLockoutReason(){ try { return localStorage.getItem(LOCKOUT_REASON_KEY) || 'module'; } catch(e){ return 'module'; } }
    function setLockout(ts, reason){
      try { localStorage.setItem(LOCKOUT_KEY, String(ts)); } catch(e){}
      try { localStorage.setItem(LOCKOUT_REASON_KEY, reason || 'module'); } catch(e){}
    }
    function clearLockout(){
      try { localStorage.removeItem(LOCKOUT_KEY); } catch(e){}
      try { localStorage.removeItem(LOCKOUT_REASON_KEY); } catch(e){}
    }
    function isLocked(){ return getLockoutUntil() > Date.now(); }

    function incWrong(){
      const n = getWrongCount() + 1;
      setWrongCount(n);
      if (n >= MAX_WRONG){
        setLockout(Date.now() + LOCKOUT_MS, 'module');
        clearWrongCount();
      }
      return n;
    }

    function incFinalFail(){
      const n = getFinalFailCount() + 1;
      setFinalFailCount(n);
      if (n >= MAX_FINAL_FAIL){
        setLockout(Date.now() + LOCKOUT_MS, 'final');
        clearFinalFailCount();
      }
      return n;
    }

    function formatCountdown(ms){
      const s = Math.max(0, Math.ceil(ms/1000));
      const m = Math.floor(s/60); const r = s%60;
      return m + ':' + String(r).padStart(2,'0');
    }

    function renderLockoutBox(){
      const until = getLockoutUntil();
      const left = until - Date.now();
      const reason = getLockoutReason();
      const msg = LOCKOUT_MESSAGES[reason] || LOCKOUT_MESSAGES.module;
      return `<div class="lockout-box">
        <div class="lockout-icon">⏱️</div>
        <div class="lockout-title">${msg.title}</div>
        <div class="lockout-text">${msg.body}</div>
        <div class="lockout-timer" id="lockoutTimer">${formatCountdown(left)}</div>
        <div class="lockout-hint">Puedes navegar los módulos y repasar contenido mientras esperas.</div>
      </div>`;
    }

    function updateLockoutTimers(){
      if (!isLocked()) return;
      const el = document.getElementById('lockoutTimer');
      if (el) el.textContent = formatCountdown(getLockoutUntil() - Date.now());
    }

    setInterval(() => {
      if (isLocked()){ updateLockoutTimers(); }
      else {
        const modN = state.current;
        if (modN >= 1 && modN <= TOTAL_MODULES){
          const gate = document.getElementById(`quiz-${modN}`);
          if (gate && gate.querySelector('.lockout-box')){ mountQuizGate(modN); }
        } else if (modN === FINAL_MODULE){
          const c = document.getElementById('final-quiz');
          if (c && c.querySelector('.lockout-box')) { mountFinalTest(false); }
        }
      }
    }, 1000);

    /* ---------- nav ---------- */
    const quizState = {};

    function show(id){
      document.querySelectorAll('.module').forEach(m => m.classList.remove('active'));
      const el = document.getElementById(id);
      if (el) el.classList.add('active');
      window.scrollTo({top:0, behavior:'smooth'});
    }

    function goToModule(n){
      if (n >= 1 && n <= TOTAL_MODULES && n > state.unlocked) return;
      state.current = n; save();
      if (n === 0) show('mod-0');
      else if (n >= 1 && n <= TOTAL_MODULES) { show('mod-'+n); mountQuizGate(n); }
      else if (n === FINAL_MODULE) { show('mod-final'); mountFinalTest(false); }
      else if (n === CONCLUSION_MODULE) { show('mod-done'); mountConclusion(); }
      renderNav(); updateProgress();
    }

    function startModule(n){ goToModule(n); }

    function renderNav(){
      const nav = document.getElementById('modnavInner'); if (!nav) return;
      let html = '';
      for (let i = 1; i <= TOTAL_MODULES; i++){
        const locked = i > state.unlocked;
        const active = state.current === i ? 'active' : '';
        const done = state.completedModules.includes(i) ? 'done' : '';
        html += `<button class="modnav-btn ${active} ${done} ${locked?'locked':''}" ${locked?'disabled':''} onclick="TMApp.goToModule(${i})"><span class="mod-n">Módulo ${i}</span><span class="mod-name">${MODULE_NAMES[i]}</span></button>`;
      }
      const finalLocked = state.unlocked <= TOTAL_MODULES;
      html += `<button class="modnav-btn ${state.current === FINAL_MODULE?'active':''} ${state.finalPassed?'done':''} ${finalLocked?'locked':''}" ${finalLocked?'disabled':''} onclick="TMApp.goToModule(${FINAL_MODULE})"><span class="mod-n">Prueba Final</span><span class="mod-name">10 preguntas · 10/10</span></button>`;
      const concLocked = !state.finalPassed;
      html += `<button class="modnav-btn ${state.current === CONCLUSION_MODULE?'active':''} ${concLocked?'locked':''}" ${concLocked?'disabled':''} onclick="TMApp.goToModule(${CONCLUSION_MODULE})"><span class="mod-n">Certificado ★</span><span class="mod-name">Reglas de oro + descarga</span></button>`;
      nav.innerHTML = html;
    }

    function updateProgress(){
      const done = state.completedModules.length;
      const pct = Math.min(100, Math.round((done / TOTAL_MODULES) * 100));
      const fill = document.getElementById('progressFill');
      const num = document.getElementById('progressNum');
      if (fill) fill.style.width = pct + '%';
      if (num) num.textContent = `${done} / ${TOTAL_MODULES}`;
    }

    /* ---------- quiz módulo (opciones aleatorizadas) ---------- */
    function mountQuizGate(modN){
      const gate = document.getElementById(`quiz-${modN}`); if (!gate) return;
      if (isLocked()){ gate.innerHTML = renderLockoutBox(); return; }
      if (state.completedModules.includes(modN)) { gate.innerHTML = renderQuizDone(modN); return; }
      if (!quizState[modN]) {
        const picked = pickQuestions(quizBank[modN], QUIZ_QUESTIONS_PER_ATTEMPT).map(q => ({
          ...q, shuffledOpts: makeShuffledOpts(q)
        }));
        quizState[modN] = { questions: picked, idx: 0, correctCount: 0, answered: false };
      }
      renderQuizGate(modN);
    }

    function renderQuizGate(modN){
      const gate = document.getElementById(`quiz-${modN}`);
      const qs = quizState[modN]; if (!qs) return;
      const q = qs.questions[qs.idx]; if (!q) return;
      const total = qs.questions.length;
      const dots = Array.from({length: total}, (_, i) => {
        const cls = i < qs.idx ? 'done' : (i === qs.idx ? 'current' : '');
        return `<div class="qp-dot ${cls}"></div>`;
      }).join('');
      const wrong = getWrongCount();
      const wrongBadge = wrong > 0 ? `<div class="wrong-tracker">Errores acumulados: <strong>${wrong} / ${MAX_WRONG}</strong> · si llegas a ${MAX_WRONG}, el taller se bloquea 10 minutos</div>` : '';
      gate.innerHTML = `
        <div class="quiz-gate-head">
          <div class="quiz-icon">📝</div>
          <div><div class="quiz-title">Quiz · Módulo ${modN} · ${MODULE_NAMES[modN]}</div></div>
        </div>
        <div class="quiz-sub">Responde 5 correctas (rotan de un banco de 20). Si fallas, la pregunta se reemplaza automáticamente y las alternativas se reordenan.</div>
        ${wrongBadge}
        <div class="quiz-progress-wrap">
          <span class="quiz-progress-label">Pregunta ${qs.idx + 1} de ${total}</span>
          <div class="quiz-progress">${dots}</div>
        </div>
        <div class="quiz-q">
          <div class="quiz-q-label">Pregunta ${qs.idx + 1}</div>
          <div class="quiz-q-text">${q.q}</div>
          <div class="quiz-opts" id="quiz-opts-${modN}">
            ${q.shuffledOpts.map((opt, i) => `<button class="quiz-opt" onclick="TMApp.answerQuestion(${modN}, ${i})"><span class="opt-letter">${String.fromCharCode(65+i)}</span><span>${opt.text}</span></button>`).join('')}
          </div>
          <div class="quiz-feedback" id="quiz-fb-${modN}"></div>
          <div class="quiz-next" id="quiz-next-${modN}"></div>
        </div>
      `;
    }

    function answerQuestion(modN, shuffledIdx){
      const qs = quizState[modN]; if (!qs || qs.answered) return;
      const q = qs.questions[qs.idx];
      const originalIdx = q.shuffledOpts[shuffledIdx].originalIdx;
      const correct = originalIdx === q.correct;
      qs.answered = true;
      const opts = document.querySelectorAll(`#quiz-opts-${modN} .quiz-opt`);
      const correctShuffledIdx = q.shuffledOpts.findIndex(o => o.originalIdx === q.correct);
      opts.forEach((btn, i) => {
        btn.classList.add('disabled');
        if (i === correctShuffledIdx) btn.classList.add('correct');
        if (i === shuffledIdx && !correct) btn.classList.add('wrong');
      });
      const fb = document.getElementById(`quiz-fb-${modN}`);
      fb.classList.add('show', correct ? 'correct' : 'wrong');
      const richWhy = buildWhy(q.correct, q.opts, q.whyCorrect, q.whyWrong);
      fb.innerHTML = `<div class="quiz-feedback-title">${correct ? '✓ Correcto' : '✗ Incorrecto — revisa por qué:'}</div><div class="quiz-feedback-body">${richWhy}</div>`;
      const nextBox = document.getElementById(`quiz-next-${modN}`);
      if (correct){
        qs.correctCount += 1;
        if (qs.idx === qs.questions.length - 1) nextBox.innerHTML = `<button class="btn btn-success" onclick="TMApp.finishQuiz(${modN})">✓ Completar módulo ${modN} (+20 pts) →</button>`;
        else nextBox.innerHTML = `<button class="btn btn-primary" onclick="TMApp.nextQuestion(${modN})">Siguiente pregunta →</button>`;
      } else {
        const total = incWrong();
        if (total >= MAX_WRONG){
          nextBox.innerHTML = '';
          const gate = document.getElementById(`quiz-${modN}`);
          if (gate) gate.innerHTML = renderLockoutBox();
          return;
        }
        nextBox.innerHTML = `<div class="quiz-wrong-tally">Errores acumulados: <strong>${total} / ${MAX_WRONG}</strong> · a los ${MAX_WRONG} se bloquea 10 min</div><button class="btn btn-ghost" onclick="TMApp.retryQuestion(${modN})">↻ Intentar otra pregunta del banco</button>`;
      }
    }

    function nextQuestion(modN){ const qs = quizState[modN]; qs.idx += 1; qs.answered = false; renderQuizGate(modN); }
    function retryQuestion(modN){
      const qs = quizState[modN];
      const used = qs.questions.map(x => x.q);
      const rest = quizBank[modN].filter(x => !used.includes(x.q));
      if (rest.length > 0) {
        const fresh = rest[Math.floor(Math.random()*rest.length)];
        qs.questions[qs.idx] = { ...fresh, shuffledOpts: makeShuffledOpts(fresh) };
      } else {
        // Si agotamos el banco, rehacemos la pregunta actual con nuevo shuffle
        qs.questions[qs.idx].shuffledOpts = makeShuffledOpts(qs.questions[qs.idx]);
      }
      qs.answered = false; renderQuizGate(modN);
    }

    function finishQuiz(modN){
      if (!state.completedModules.includes(modN)) state.completedModules.push(modN);
      if (modN >= state.unlocked) state.unlocked = Math.min(modN + 1, FINAL_MODULE);
      clearWrongCount();
      save(); renderNav(); updateProgress();
      const nextN = modN + 1;
      const isLast = nextN > TOTAL_MODULES;
      const label = isLast ? 'Ir a la Prueba Final →' : `Ir al Módulo ${nextN} · ${MODULE_NAMES[nextN]} →`;
      const target = isLast ? FINAL_MODULE : nextN;
      document.getElementById(`quiz-${modN}`).innerHTML = `
        <div class="quiz-done quiz-done-big">
          <span class="quiz-done-icon">🎉</span>
          <div class="quiz-done-title">¡Módulo ${modN} aprobado!</div>
          <div class="quiz-score"><span class="quiz-score-n">5/5</span><span class="quiz-score-lbl">+20 puntos · Dominio del módulo</span></div>
          <div class="quiz-done-text">Desbloqueaste el siguiente contenido. Continúa con el aprendizaje.</div>
          <button class="btn btn-primary btn-big" onclick="TMApp.goToModule(${target})">${label}</button>
          <div class="quiz-done-sub"><button class="btn btn-ghost btn-small" onclick="TMApp.retakeQuiz(${modN})">↻ Repetir quiz de este módulo</button></div>
        </div>`;
    }

    function renderQuizDone(modN){
      const nextN = modN + 1;
      const isLast = nextN > TOTAL_MODULES;
      const label = isLast ? 'Ir a la Prueba Final →' : `Ir al Módulo ${nextN} · ${MODULE_NAMES[nextN]} →`;
      const target = isLast ? FINAL_MODULE : nextN;
      return `
        <div class="quiz-done quiz-done-big">
          <span class="quiz-done-icon">✅</span>
          <div class="quiz-done-title">Módulo ${modN} ya aprobado</div>
          <div class="quiz-done-text">Ya completaste este módulo. Puedes continuar con el siguiente o repetir el quiz para afianzar.</div>
          <button class="btn btn-primary btn-big" onclick="TMApp.goToModule(${target})">${label}</button>
          <div class="quiz-done-sub"><button class="btn btn-ghost btn-small" onclick="TMApp.retakeQuiz(${modN})">↻ Repetir quiz</button></div>
        </div>`;
    }

    function retakeQuiz(modN){
      const idx = state.completedModules.indexOf(modN);
      if (idx >= 0) state.completedModules.splice(idx, 1);
      save(); delete quizState[modN];
      renderNav(); updateProgress(); mountQuizGate(modN);
    }

    /* ---------- prueba final (opciones aleatorizadas + lockout intentos) ---------- */
    const finalState = { questions:null, answers:{}, submitted:false };

    function mountFinalTest(forceRetake){
      const c = document.getElementById('final-quiz'); if (!c) return;
      if (isLocked()){ c.innerHTML = renderLockoutBox(); return; }
      if (state.finalPassed && !forceRetake){ renderFinalApproved(); return; }
      if (!finalState.questions || finalState.submitted || forceRetake){
        const picked = pickQuestions(finalQuestions, FINAL_SHOWN);
        finalState.questions = picked.map(q => ({ ...q, shuffledOpts: makeShuffledOpts(q) }));
        finalState.answers = {}; finalState.submitted = false;
      }
      renderFinalTest();
    }

    function renderFinalApproved(){
      const c = document.getElementById('final-quiz'); if (!c) return;
      c.innerHTML = `
        <div class="final-result">
          <span class="final-result-icon">🏆</span>
          <h3>Prueba final aprobada</h3>
          <p class="final-result-lead">Aprobaste con 10/10. Accede a las reglas de oro y al certificado oficial.</p>
          <div class="final-score-big">10/10</div>
          <div class="final-actions">
            <button class="btn btn-primary btn-big" onclick="TMApp.unlockConclusion()">Ver reglas de oro y certificado →</button>
            <button class="btn btn-ghost" onclick="TMApp.retryFinal()">↻ Repetir prueba con preguntas nuevas</button>
          </div>
        </div>`;
    }

    function renderFinalTest(){
      const c = document.getElementById('final-quiz');
      const fails = getFinalFailCount();
      const failBadge = fails > 0 ? `<div class="wrong-tracker">Intentos fallidos de la prueba final: <strong>${fails} / ${MAX_FINAL_FAIL}</strong> · a los ${MAX_FINAL_FAIL} se bloquea 10 min</div>` : '';
      c.innerHTML = `
        <div class="final-brief">
          <strong>Requisito de aprobación:</strong> 10/10 preguntas correctas. Las preguntas rotan del banco de 50 y las alternativas se reordenan en cada intento. Si fallas la prueba 5 veces (sin sacar 10/10), el acceso se bloquea por 10 minutos.
        </div>
        ${failBadge}
      ` + finalState.questions.map((q, qi) => `
        <div class="quiz-gate quiz-gate-final">
          <div class="quiz-q-label quiz-q-label-final">Pregunta ${qi+1} de ${FINAL_SHOWN}</div>
          <div class="quiz-q-text quiz-q-text-final">${q.q}</div>
          <div class="quiz-opts">
            ${q.shuffledOpts.map((opt, i) => `
              <button class="quiz-opt ${finalState.answers[qi] === i ? 'active-opt' : ''}" onclick="TMApp.finalAnswer(${qi}, ${i})">
                <span class="opt-letter">${String.fromCharCode(65+i)}</span>
                <span>${opt.text}</span>
              </button>
            `).join('')}
          </div>
        </div>`).join('') + `
        <div class="final-submit-wrap">
          <button class="btn btn-primary btn-big" onclick="TMApp.submitFinal()">📊 Entregar prueba final</button>
        </div>`;
    }

    function finalAnswer(qi, i){
      if (finalState.submitted) return;
      finalState.answers[qi] = i;
      // Sólo repinta botones (no el resto) para preservar scroll
      const group = document.querySelectorAll(`.quiz-gate-final`)[qi];
      if (group){
        group.querySelectorAll('.quiz-opt').forEach((btn, idx) => {
          btn.classList.toggle('active-opt', idx === i);
        });
      }
    }

    function submitFinal(){
      const missing = finalState.questions.length - Object.keys(finalState.answers).length;
      if (missing > 0){ alert(`Te faltan ${missing} pregunta(s) por responder.`); return; }
      let correct = 0;
      finalState.questions.forEach((q, qi) => {
        const sel = finalState.answers[qi];
        const orig = q.shuffledOpts[sel].originalIdx;
        if (orig === q.correct) correct++;
      });
      const passed = correct === FINAL_SHOWN;
      finalState.submitted = true;
      if (!passed){
        incFinalFail();
      } else {
        clearFinalFailCount();
      }
      if (isLocked()){
        document.getElementById('final-quiz').innerHTML = renderLockoutBox();
        return;
      }
      const fails = getFinalFailCount();
      document.getElementById('final-quiz').innerHTML = `
        <div class="final-result">
          <span class="final-result-icon">${passed ? '🏆' : '📚'}</span>
          <h3>${passed ? '¡Prueba final aprobada!' : 'Aún no alcanzas el 10/10'}</h3>
          <div class="final-score-big ${passed?'passed':'failed'}">${correct}/${FINAL_SHOWN}</div>
          <p class="final-result-lead">${passed ? 'Excelente. Puedes ver las reglas de oro y descargar tu certificado oficial.' : `Requieres 10 respuestas correctas. Intentos fallidos acumulados: ${fails} / ${MAX_FINAL_FAIL}. Repasa los módulos del taller y vuelve a intentar — las preguntas y alternativas rotan.`}</p>
          <div class="final-actions">
            ${passed
              ? `<button class="btn btn-primary btn-big" onclick="TMApp.unlockConclusion()">Ver reglas de oro y certificado →</button>`
              : `<button class="btn btn-primary btn-big" onclick="TMApp.retryFinal()">↻ Repetir prueba (preguntas nuevas)</button>`}
            <button class="btn btn-light" onclick="TMApp.reviewFinal()">🔍 Revisar respuestas</button>
          </div>
        </div>`;
      if (passed){
        state.finalPassed = true;
        state.lastFinalAttempt = { correct, date: new Date().toISOString() };
        save(); renderNav(); updateProgress();
      }
    }

    function retryFinal(){
      if (isLocked()){ mountFinalTest(false); return; }
      finalState.submitted = false; finalState.questions = null; mountFinalTest(true);
    }

    function reviewFinal(){
      const c = document.getElementById('final-quiz');
      c.innerHTML = finalState.questions.map((q, qi) => {
        const sel = finalState.answers[qi];
        const orig = sel !== undefined ? q.shuffledOpts[sel].originalIdx : -1;
        const ok = orig === q.correct;
        const richWhy = buildWhy(q.correct, q.opts, q.whyCorrect, q.whyWrong);
        return `
          <div class="quiz-gate quiz-gate-final">
            <div class="quiz-q-label ${ok?'ok':'ko'}">${ok ? '✓ Correcta' : '✗ Incorrecta'} · Pregunta ${qi+1}</div>
            <div class="quiz-q-text quiz-q-text-final">${q.q}</div>
            <div class="review-correct"><strong>Correcta:</strong> ${q.opts[q.correct]}</div>
            ${!ok && orig !== -1 ? `<div class="review-yours"><strong>Tu respuesta:</strong> ${q.opts[orig]}</div>` : ''}
            <div class="quiz-feedback show ${ok?'correct':'wrong'}"><div class="quiz-feedback-body">${richWhy}</div></div>
          </div>`;
      }).join('') + `
        <div class="final-submit-wrap">
          ${state.finalPassed ? `<button class="btn btn-primary btn-big" onclick="TMApp.unlockConclusion()">Ver reglas de oro y certificado →</button>` : `<button class="btn btn-primary btn-big" onclick="TMApp.retryFinal()">↻ Repetir prueba</button>`}
        </div>`;
    }

    function unlockConclusion(){ goToModule(CONCLUSION_MODULE); }

    function mountConclusion(){
      const el = document.getElementById('gold-rules');
      if (el) el.innerHTML = goldRules.map(r => `<div class="gold-rule"><div class="gold-rule-n">${String(r.n).padStart(2,'0')}</div><div><div class="gold-rule-title">${r.title}</div><div class="gold-rule-text">${r.text}</div></div></div>`).join('');
      mountCertificate();
    }

    function mountCertificate(){
      const list = document.getElementById('tmCertModules');
      if (list) list.innerHTML = Object.keys(MODULE_NAMES).map(k => `<li><span class="cert-mod-n">${String(k).padStart(2,'0')}</span><span>${MODULE_NAMES[k]}</span></li>`).join('');
      const dateEl = document.getElementById('tmCertDate');
      if (dateEl){
        const d = new Date();
        const meses = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
        dateEl.textContent = `Santiago, ${d.getDate()} de ${meses[d.getMonth()]} de ${d.getFullYear()}`;
      }
      const saved = localStorage.getItem(CERT_STORAGE_KEY);
      if (saved){ const inp = document.getElementById('tmCertNameInput'); if (inp) inp.value = saved; updateCertName(saved); }
    }

    function updateCertName(v){
      const name = (v||'').trim();
      const el = document.getElementById('tmCertName');
      if (el) el.textContent = name || '_______________________________';
      try { localStorage.setItem(CERT_STORAGE_KEY, name); } catch(e) {}
    }

    function printCertificate(){
      const name = (document.getElementById('tmCertName')?.textContent || '').trim();
      if (!name || name.startsWith('_')){ alert('Ingresa tu nombre completo antes de imprimir.'); document.getElementById('tmCertNameInput')?.focus(); return; }
      document.body.classList.add('printing-cert');
      window.print();
      setTimeout(() => document.body.classList.remove('printing-cert'), 800);
    }

    function loadScriptOnce(src){
      return new Promise((res, rej) => {
        window._tmLoaded = window._tmLoaded || {};
        if (window._tmLoaded[src]) return res();
        const s = document.createElement('script');
        s.src = src; s.onload = () => { window._tmLoaded[src] = true; res(); };
        s.onerror = () => rej(new Error('script')); document.head.appendChild(s);
      });
    }

    async function downloadCertificate(btn){
      const name = (document.getElementById('tmCertName')?.textContent || '').trim();
      if (!name || name.startsWith('_')){ alert('Ingresa tu nombre completo.'); document.getElementById('tmCertNameInput')?.focus(); return; }
      const original = btn.innerHTML; btn.disabled = true; btn.innerHTML = '⏳ Generando...';
      try{
        await loadScriptOnce('https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js');
        const el = document.getElementById('tmCert');
        const canvas = await html2canvas(el, { scale: 2, backgroundColor: '#FAF8F4', useCORS: true, allowTaint: true });
        const link = document.createElement('a');
        const safe = name.replace(/[^\w\sáéíóúÁÉÍÓÚñÑ-]/g,'').replace(/\s+/g,'_').slice(0,40) || 'corredor';
        link.download = `Certificado_TuMatch_${TALLER_SLUG}_${safe}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
      } catch(e){ alert('No se pudo descargar. Verifica tu conexión.'); }
      finally { btn.disabled = false; btn.innerHTML = original; }
    }

    function restart(){
      if (!confirm('¿Reiniciar el taller y perder todo el avance?')) return;
      state = defaultState(); save();
      clearWrongCount(); clearFinalFailCount(); clearLockout();
      window.location.reload();
    }

    function renderResumeBanner(){
      const banner = document.getElementById('resumeBanner');
      const btn = document.getElementById('resumeBannerBtn');
      const txt = document.getElementById('resumeBannerText');
      const startBtn = document.getElementById('heroStartBtn');
      if (!banner || !btn) return;
      const done = state.completedModules.length;
      const hasProgress = done > 0 || state.current > 1 || state.finalPassed;
      if (!hasProgress){ banner.style.display = 'none'; return; }
      banner.style.display = 'flex';
      if (startBtn) startBtn.textContent = 'Reiniciar desde el principio';
      let target, label;
      if (state.finalPassed){ target = CONCLUSION_MODULE; label = 'Completaste el taller. Tu certificado está disponible.'; btn.textContent = 'Ver certificado →'; }
      else if (state.unlocked > TOTAL_MODULES){ target = FINAL_MODULE; label = `Completaste los ${TOTAL_MODULES} módulos. Falta la prueba final.`; btn.textContent = 'Ir a prueba final →'; }
      else { target = state.unlocked; label = `Llevas ${done} de ${TOTAL_MODULES}. Siguiente: Módulo ${target} · ${MODULE_NAMES[target]}.`; btn.textContent = `Continuar en Módulo ${target} →`; }
      if (txt) txt.textContent = label;
      btn.onclick = () => goToModule(target);
    }

    /* ---------- theme ---------- */
    const LOGO_LIGHT = 'assets/tumatch_horizontal_positivo.jpg';
    const LOGO_DARK = 'assets/tumatch_horizontal_negativo.jpg';
    function currentThemeEffective(){ const s = document.documentElement.getAttribute('data-theme'); if (s === 'dark' || s === 'light') return s; return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'; }
    function applyLogoForTheme(t){ const src = t === 'dark' ? LOGO_DARK : LOGO_LIGHT; ['brandLogoImg','heroLogoImg'].forEach(id => { const i = document.getElementById(id); if (i && !i.src.endsWith(src)) i.src = src; }); }
    function initTheme(){
      applyLogoForTheme(currentThemeEffective());
      const btn = document.getElementById('themeToggle'); if (!btn) return;
      btn.addEventListener('click', () => {
        const eff = currentThemeEffective();
        const next = eff === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        try { localStorage.setItem('tumatch_theme', next); } catch(e){}
        applyLogoForTheme(next);
      });
    }

    function init(){
      load(); initTheme(); renderNav(); updateProgress(); renderResumeBanner();
      if (state.current === 0) show('mod-0');
      else goToModule(state.current);
    }

    window.TMApp = { init, goToModule, startModule, restart, answerQuestion, nextQuestion, retryQuestion, finishQuiz, retakeQuiz, finalAnswer, submitFinal, retryFinal, reviewFinal, unlockConclusion, updateCertName, printCertificate, downloadCertificate };

    document.addEventListener('DOMContentLoaded', () => window.TMApp.init());
  }

  window.TMTaller = { init: init };
})();
