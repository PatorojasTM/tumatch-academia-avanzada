/* ==========================================================
   TuMatch Inmobiliario — Academia Avanzada · Core compartido
   Comprador Primera Vivienda · 6 talleres avanzados
   Incluye bloqueo de 10 min tras 5 errores acumulados
   ========================================================== */

(function(){
  'use strict';

  /* ---------- util ---------- */
  function shuffle(a){ const x = a.slice(); for (let i=x.length-1;i>0;i--){ const j = Math.floor(Math.random()*(i+1)); [x[i],x[j]] = [x[j],x[i]]; } return x; }
  function pickQuestions(bank, n){ return shuffle(bank).slice(0, n); }

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
    const MODULE_NAMES      = config.moduleNames;           // { 1:'...', 2:'...', ... 7:'...' }
    const TOTAL_MODULES     = Object.keys(MODULE_NAMES).length;
    const FINAL_MODULE      = TOTAL_MODULES + 1;
    const CONCLUSION_MODULE = TOTAL_MODULES + 2;
    const quizBank          = config.quizBank;              // { 1:[...], 2:[...], ... 7:[...] }
    const finalQuestions    = config.finalQuestions;        // banco de 50 preguntas
    const goldRules         = config.goldRules || [];
    const certTitle         = config.certTitle || 'Taller Avanzado';
    const certSubtitle      = config.certSubtitle || 'Academia de Corredores TuMatch';
    const certBody          = config.certBody || '';
    const STORAGE_PREFIX    = 'tumatch_' + TALLER_SLUG + '_v1';
    const CERT_STORAGE_KEY  = 'tumatch_cert_name_' + TALLER_SLUG;
    const LOCKOUT_KEY       = 'tumatch_' + TALLER_SLUG + '_lockout';
    const WRONG_COUNT_KEY   = 'tumatch_' + TALLER_SLUG + '_wrong';
    const MAX_WRONG         = 5;
    const LOCKOUT_MS        = 10 * 60 * 1000; // 10 minutos

    const QUIZ_QUESTIONS_PER_ATTEMPT = 5;
    const FINAL_SHOWN = 10;

    function defaultState(){ return { current:0, unlocked:1, completedModules:[], finalPassed:false, lastFinalAttempt:null }; }
    let state = defaultState();
    function save(){ try { localStorage.setItem(STORAGE_PREFIX, JSON.stringify(state)); } catch(e){} }
    function load(){ try{ const s = localStorage.getItem(STORAGE_PREFIX); if (s){ state = Object.assign(defaultState(), JSON.parse(s)); } }catch(e){} }

    /* ---------- lockout ---------- */
    function getWrongCount(){ try { return parseInt(localStorage.getItem(WRONG_COUNT_KEY)||'0',10) || 0; } catch(e){ return 0; } }
    function setWrongCount(n){ try { localStorage.setItem(WRONG_COUNT_KEY, String(n)); } catch(e){} }
    function clearWrongCount(){ try { localStorage.removeItem(WRONG_COUNT_KEY); } catch(e){} }
    function getLockoutUntil(){ try { return parseInt(localStorage.getItem(LOCKOUT_KEY)||'0',10) || 0; } catch(e){ return 0; } }
    function setLockout(ts){ try { localStorage.setItem(LOCKOUT_KEY, String(ts)); } catch(e){} }
    function clearLockout(){ try { localStorage.removeItem(LOCKOUT_KEY); } catch(e){} }
    function isLocked(){ return getLockoutUntil() > Date.now(); }

    function incWrong(){
      const n = getWrongCount() + 1;
      setWrongCount(n);
      if (n >= MAX_WRONG){
        setLockout(Date.now() + LOCKOUT_MS);
        clearWrongCount();
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
      return `<div class="lockout-box">
        <div class="lockout-icon">⏱️</div>
        <div class="lockout-title">Taller bloqueado por 10 minutos</div>
        <div class="lockout-text">Acumulaste ${MAX_WRONG} errores en los quiz. Usa este tiempo para repasar el contenido.</div>
        <div class="lockout-timer" id="lockoutTimer">${formatCountdown(left)}</div>
        <div class="lockout-hint">Podrás reintentar cuando el contador llegue a 0:00. Puedes navegar por los módulos mientras tanto.</div>
      </div>`;
    }

    function updateLockoutTimers(){
      if (!isLocked()) return;
      const el = document.getElementById('lockoutTimer');
      if (el) el.textContent = formatCountdown(getLockoutUntil() - Date.now());
      const bar = document.getElementById('globalLockoutBar');
      const barTimer = document.getElementById('globalLockoutTimer');
      if (bar && barTimer){ bar.style.display = 'flex'; barTimer.textContent = formatCountdown(getLockoutUntil() - Date.now()); }
    }

    setInterval(() => {
      if (isLocked()){ updateLockoutTimers(); }
      else {
        const bar = document.getElementById('globalLockoutBar');
        if (bar) bar.style.display = 'none';
        // Re-renderizar quiz actual si está mostrando lockout
        const modN = state.current;
        if (modN >= 1 && modN <= TOTAL_MODULES){
          const gate = document.getElementById(`quiz-${modN}`);
          if (gate && gate.querySelector('.lockout-box')){ mountQuizGate(modN); }
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

    /* ---------- quiz module ---------- */
    function mountQuizGate(modN){
      const gate = document.getElementById(`quiz-${modN}`); if (!gate) return;
      if (isLocked()){ gate.innerHTML = renderLockoutBox(); return; }
      if (state.completedModules.includes(modN)) { gate.innerHTML = renderQuizDone(modN); return; }
      if (!quizState[modN]) {
        const picked = pickQuestions(quizBank[modN], QUIZ_QUESTIONS_PER_ATTEMPT);
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
        <div class="quiz-sub">Responde 5 correctas (rotan de un banco de 20). Si fallas, la pregunta se reemplaza automáticamente.</div>
        ${wrongBadge}
        <div class="quiz-progress-wrap">
          <span class="quiz-progress-label">Pregunta ${qs.idx + 1} de ${total}</span>
          <div class="quiz-progress">${dots}</div>
        </div>
        <div class="quiz-q">
          <div class="quiz-q-label">Pregunta ${qs.idx + 1}</div>
          <div class="quiz-q-text">${q.q}</div>
          <div class="quiz-opts" id="quiz-opts-${modN}">
            ${q.opts.map((opt, i) => `<button class="quiz-opt" onclick="TMApp.answerQuestion(${modN}, ${i})"><span class="opt-letter">${String.fromCharCode(65+i)}</span><span>${opt}</span></button>`).join('')}
          </div>
          <div class="quiz-feedback" id="quiz-fb-${modN}"></div>
          <div class="quiz-next" id="quiz-next-${modN}"></div>
        </div>
      `;
    }

    function answerQuestion(modN, optIdx){
      const qs = quizState[modN]; if (!qs || qs.answered) return;
      const q = qs.questions[qs.idx];
      const correct = optIdx === q.correct;
      qs.answered = true;
      const opts = document.querySelectorAll(`#quiz-opts-${modN} .quiz-opt`);
      opts.forEach((btn, i) => {
        btn.classList.add('disabled');
        if (i === q.correct) btn.classList.add('correct');
        if (i === optIdx && !correct) btn.classList.add('wrong');
      });
      const fb = document.getElementById(`quiz-fb-${modN}`);
      fb.classList.add('show', correct ? 'correct' : 'wrong');
      const richWhy = buildWhy(q.correct, q.opts, q.whyCorrect, q.whyWrong);
      fb.innerHTML = `<div class="quiz-feedback-title">${correct ? '✓ Correcto' : '✗ Incorrecto — revisa por qué:'}</div><div class="quiz-feedback-body">${richWhy}</div>`;
      const nextBox = document.getElementById(`quiz-next-${modN}`);
      if (correct){
        qs.correctCount += 1;
        if (qs.idx === qs.questions.length - 1) nextBox.innerHTML = `<button class="btn btn-success" onclick="TMApp.finishQuiz(${modN})">Completar módulo ${modN} (+20 pts) →</button>`;
        else nextBox.innerHTML = `<button class="btn btn-primary" onclick="TMApp.nextQuestion(${modN})">Siguiente pregunta →</button>`;
      } else {
        const total = incWrong();
        if (total >= MAX_WRONG){ nextBox.innerHTML = `<button class="btn btn-ghost" onclick="TMApp.showLockout(${modN})">Ver estado del bloqueo →</button>`; }
        else { nextBox.innerHTML = `<div class="quiz-wrong-tally">Errores acumulados: <strong>${total} / ${MAX_WRONG}</strong></div><button class="btn btn-ghost" onclick="TMApp.retryQuestion(${modN})">↻ Intentar otra pregunta del banco</button>`; }
      }
    }

    function showLockout(modN){ mountQuizGate(modN); }

    function nextQuestion(modN){ const qs = quizState[modN]; qs.idx += 1; qs.answered = false; renderQuizGate(modN); }
    function retryQuestion(modN){
      const qs = quizState[modN];
      const used = qs.questions.map(x => x.q);
      const rest = quizBank[modN].filter(x => !used.includes(x.q));
      if (rest.length > 0) qs.questions[qs.idx] = rest[Math.floor(Math.random()*rest.length)];
      qs.answered = false; renderQuizGate(modN);
    }

    function finishQuiz(modN){
      if (!state.completedModules.includes(modN)) state.completedModules.push(modN);
      if (modN >= state.unlocked) state.unlocked = Math.min(modN + 1, FINAL_MODULE);
      // reset contador de errores al completar con éxito un módulo
      clearWrongCount();
      save(); renderNav(); updateProgress();
      const nextN = modN + 1;
      const label = nextN > TOTAL_MODULES ? 'Ir a la Prueba Final →' : `Ir al Módulo ${nextN} →`;
      const target = nextN > TOTAL_MODULES ? FINAL_MODULE : nextN;
      document.getElementById(`quiz-${modN}`).innerHTML = `
        <div class="quiz-done">
          <span class="quiz-done-icon">🎉</span>
          <div class="quiz-done-title">Módulo ${modN} aprobado (+20 puntos)</div>
          <div class="quiz-score"><span class="quiz-score-n">5/5</span><span class="quiz-score-lbl">Dominio del módulo</span></div>
          <div class="quiz-done-text">Desbloqueaste el siguiente contenido.</div>
          <button class="btn btn-primary" onclick="TMApp.goToModule(${target})">${label}</button>
        </div>`;
    }

    function renderQuizDone(modN){
      const nextN = modN + 1;
      const label = nextN > TOTAL_MODULES ? 'Ir a la Prueba Final →' : `Ir al Módulo ${nextN} →`;
      const target = nextN > TOTAL_MODULES ? FINAL_MODULE : nextN;
      return `
        <div class="quiz-done">
          <span class="quiz-done-icon">✅</span>
          <div class="quiz-done-title">Módulo ${modN} ya aprobado</div>
          <div class="quiz-done-text">Ya completaste este módulo. Puedes continuar o repetir el quiz.</div>
          <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center">
            <button class="btn btn-primary" onclick="TMApp.goToModule(${target})">${label}</button>
            <button class="btn btn-ghost" onclick="TMApp.retakeQuiz(${modN})">↻ Repetir quiz</button>
          </div>
        </div>`;
    }

    function retakeQuiz(modN){
      const idx = state.completedModules.indexOf(modN);
      if (idx >= 0) state.completedModules.splice(idx, 1);
      save(); delete quizState[modN];
      renderNav(); updateProgress(); mountQuizGate(modN);
    }

    /* ---------- final ---------- */
    const finalState = { questions:null, answers:{}, submitted:false };

    function mountFinalTest(forceRetake){
      const c = document.getElementById('final-quiz'); if (!c) return;
      if (isLocked()){ c.innerHTML = renderLockoutBox(); return; }
      if (state.finalPassed && !forceRetake){ renderFinalApproved(); return; }
      if (!finalState.questions || finalState.submitted || forceRetake){
        const picked = pickQuestions(finalQuestions, FINAL_SHOWN);
        finalState.questions = picked.map(q => ({ ...q, shuffledOpts: shuffle(q.opts.map((_, i) => i)).map(i => ({text: q.opts[i], originalIdx: i})) }));
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
          <p style="color:var(--slate);font-size:15px;line-height:1.7;max-width:560px;margin:12px auto 6px">Aprobaste con 10/10. Accede a las reglas de oro y al certificado.</p>
          <div class="final-score-big">10/10</div>
          <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
            <button class="btn btn-primary" onclick="TMApp.unlockConclusion()">Ver reglas de oro y certificado →</button>
            <button class="btn btn-ghost" onclick="TMApp.retryFinal()">↻ Repetir prueba con preguntas nuevas</button>
          </div>
        </div>`;
    }

    function renderFinalTest(){
      const c = document.getElementById('final-quiz');
      const wrong = getWrongCount();
      const wrongBadge = wrong > 0 ? `<div class="wrong-tracker">Errores acumulados: <strong>${wrong} / ${MAX_WRONG}</strong></div>` : '';
      c.innerHTML = wrongBadge + finalState.questions.map((q, qi) => `
        <div class="quiz-gate" style="margin-top:22px;padding:28px">
          <div class="quiz-q-label" style="color:var(--coral);font-size:12px;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:12px">Pregunta ${qi+1} de ${FINAL_SHOWN}</div>
          <div class="quiz-q-text" style="color:var(--white);font-size:16.5px;font-weight:600;line-height:1.55;margin-bottom:20px">${q.q}</div>
          <div class="quiz-opts">
            ${q.shuffledOpts.map((opt, i) => `
              <button class="quiz-opt ${finalState.answers[qi] === i ? 'active-opt' : ''}" style="${finalState.answers[qi] === i ? 'background:rgba(232,93,74,.18);border-color:var(--coral);color:#FFF3F0' : ''}" onclick="TMApp.finalAnswer(${qi}, ${i})">
                <span class="opt-letter">${String.fromCharCode(65+i)}</span>
                <span>${opt.text}</span>
              </button>
            `).join('')}
          </div>
        </div>`).join('') + `
        <div style="margin-top:28px;display:flex;justify-content:center">
          <button class="btn btn-primary" style="padding:16px 34px;font-size:15px" onclick="TMApp.submitFinal()">📊 Entregar prueba final</button>
        </div>`;
    }

    function finalAnswer(qi, i){ if (finalState.submitted) return; finalState.answers[qi] = i; renderFinalTest(); }

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
      // Si falla: suma errores (hasta MAX_WRONG = bloqueo)
      if (!passed){
        // por cada respuesta incorrecta sumamos 1 error hasta el máximo
        const errores = FINAL_SHOWN - correct;
        const actual = getWrongCount();
        let acumulado = actual;
        for (let i=0;i<errores;i++){
          acumulado = acumulado + 1;
          if (acumulado >= MAX_WRONG){ setLockout(Date.now() + LOCKOUT_MS); acumulado = 0; break; }
        }
        setWrongCount(acumulado);
      } else { clearWrongCount(); }

      document.getElementById('final-quiz').innerHTML = `
        <div class="final-result">
          <span class="final-result-icon">${passed ? '🏆' : (isLocked()?'⏱️':'📚')}</span>
          <h3>${passed ? '¡Prueba final aprobada!' : (isLocked()?'Taller bloqueado por 10 minutos':'Sigue estudiando')}</h3>
          <div class="final-score-big">${correct}/${FINAL_SHOWN}</div>
          <p style="color:var(--slate);font-size:15px;line-height:1.7;max-width:560px;margin:0 auto 20px">${passed ? 'Dominas el taller avanzado. Accede a las reglas de oro y al certificado.' : (isLocked()?'Acumulaste 5 errores. Repasa el contenido mientras esperas 10 minutos.':'Necesitas 10/10 para aprobar. Las preguntas rotan del banco de 50.')}</p>
          <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
            ${passed ? `<button class="btn btn-primary" onclick="TMApp.unlockConclusion()">Ver reglas de oro →</button>` : (isLocked() ? '' : `<button class="btn btn-primary" onclick="TMApp.retryFinal()">↻ Repetir prueba</button>`)}
            <button class="btn btn-light" onclick="TMApp.reviewFinal()">🔍 Revisar respuestas</button>
          </div>
        </div>`;
      if (passed){
        state.finalPassed = true;
        state.lastFinalAttempt = { questions: finalState.questions, answers: {...finalState.answers}, correct, date: new Date().toISOString() };
        save(); renderNav(); updateProgress();
      }
      updateLockoutTimers();
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
          <div class="quiz-gate" style="margin-top:22px;padding:28px">
            <div class="quiz-q-label" style="color:${ok ? 'var(--green)' : 'var(--red)'}">${ok ? '✓ Correcta' : '✗ Incorrecta'} · Pregunta ${qi+1}</div>
            <div class="quiz-q-text" style="color:var(--white)">${q.q}</div>
            <div style="background:rgba(22,163,74,.12);border:1px solid rgba(22,163,74,.4);border-radius:10px;padding:14px 16px;color:#BBF7D0;margin-bottom:10px;margin-top:16px"><strong style="color:#5DE0A8">Correcta:</strong> ${q.opts[q.correct]}</div>
            ${!ok && orig !== -1 ? `<div style="background:rgba(220,38,38,.1);border:1px solid rgba(220,38,38,.35);border-radius:10px;padding:14px 16px;color:#FECACA;margin-bottom:10px"><strong style="color:#F87171">Tu respuesta:</strong> ${q.opts[orig]}</div>` : ''}
            <div class="quiz-feedback show ${ok?'correct':'wrong'}" style="margin-top:10px"><div class="quiz-feedback-body">${richWhy}</div></div>
          </div>`;
      }).join('') + `
        <div style="margin-top:28px;display:flex;justify-content:center;gap:10px;flex-wrap:wrap">
          ${state.finalPassed ? `<button class="btn btn-primary" onclick="TMApp.unlockConclusion()">Ver reglas de oro →</button>` : `<button class="btn btn-primary" onclick="TMApp.retryFinal()">↻ Repetir</button>`}
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
      clearWrongCount(); clearLockout();
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
      // Intro global lockout bar
      if (isLocked()){ updateLockoutTimers(); }
      if (state.current === 0) show('mod-0');
      else goToModule(state.current);
    }

    window.TMApp = { init, goToModule, startModule, restart, answerQuestion, nextQuestion, retryQuestion, finishQuiz, retakeQuiz, finalAnswer, submitFinal, retryFinal, reviewFinal, unlockConclusion, updateCertName, printCertificate, downloadCertificate, showLockout };

    document.addEventListener('DOMContentLoaded', () => window.TMApp.init());
  }

  window.TMTaller = { init: init };
})();
