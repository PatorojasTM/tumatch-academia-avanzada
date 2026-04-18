/* Taller 02 · Financiamiento Hipotecario y Leasing Habitacional
   Inicializador — usa el core compartido app-core.js y los datos de quiz-data.js */
(function(){
  if (!window.TMTaller || !window.TALLER_CONFIG){
    console.error('Faltan dependencias: app-core.js o quiz-data.js');
    return;
  }
  window.TMTaller.init({
    slug: window.TALLER_CONFIG.slug,
    moduleNames: window.TALLER_CONFIG.moduleNames,
    quizBank: window.TALLER_CONFIG.quizBank,
    finalQuestions: window.TALLER_CONFIG.finalQuestions,
    goldRules: window.TALLER_CONFIG.goldRules,
    certTitle: window.TALLER_CONFIG.certTitle,
    certSubtitle: window.TALLER_CONFIG.certSubtitle,
  });
})();
