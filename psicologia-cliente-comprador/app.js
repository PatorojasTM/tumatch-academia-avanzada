/* ==========================================================
   TuMatch Inmobiliario — Taller Avanzado
   "En la Mente del Cliente Comprador"
   Taller avanzado sobre Comprador Primera Vivienda
   ========================================================== */

const MODULE_NAMES = {
  1:'Quién es y de dónde viene',
  2:'Redes calientes y tibias',
  3:'CRM TuMatch como herramienta de cliente',
  4:'Preguntas clave · Método SPIN',
  5:'Psicología profunda y urgencia',
  6:'Empatía clínica y escucha activa',
  7:'Objeciones LAARC + biblioteca',
};
const TOTAL_MODULES = 7;
const FINAL_MODULE = TOTAL_MODULES + 1;
const CONCLUSION_MODULE = TOTAL_MODULES + 2;

/* ---------- HELPER: arma el HTML del feedback con explicación de cada alternativa ---------- */
function buildWhy(correctIdx, opts, whyCorrect, whyWrong, shuffledOpts){
  const display = shuffledOpts && shuffledOpts.length === opts.length
    ? shuffledOpts.map(o => ({ text: o.text, originalIdx: o.originalIdx }))
    : opts.map((text, i) => ({ text, originalIdx: i }));
  const correctDisplayIdx = display.findIndex(o => o.originalIdx === correctIdx);
  const correctLetter = String.fromCharCode(65 + correctDisplayIdx);
  const correctText = opts[correctIdx];
  let html = `<div class="qfb-correct"><strong>✓ ${correctLetter}) ${correctText}</strong> — ${whyCorrect}</div>`;
  html += `<div class="qfb-wrong-list"><strong>✗ Por qué las otras no:</strong>`;
  display.forEach((o, displayIdx) => {
    if (o.originalIdx === correctIdx) return;
    const reason = (whyWrong || [])[o.originalIdx];
    if (!reason) return;
    const letter = String.fromCharCode(65 + displayIdx);
    html += `<span class="qfb-wrong-item"><strong>${letter})</strong> ${o.text} — ${reason}</span>`;
  });
  html += `</div>`;
  return html;
}

/* Fisher-Yates sobre índices para mezclar opciones manteniendo trazabilidad al correcto */
function makeShuffledOpts(q){
  const idx = q.opts.map((_, i) => i);
  for (let i = idx.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [idx[i], idx[j]] = [idx[j], idx[i]];
  }
  return idx.map(i => ({ text: q.opts[i], originalIdx: i }));
}

/* ---------- BANCO DE PREGUNTAS POR MÓDULO (20 por módulo) ---------- */
const quizBank = {
  "1": [
    {
      q: "Según el estudio Ipsos Monitor de Vivienda 2025, ¿qué proporción del mercado de comprador chileno corresponde a primera vivienda?",
      opts: ["30%", "10%", "Cerca del 56% — el segmento más grande del mercado", "Menos del 5%"],
      correct: 2,
      whyCorrect: "56,11% del mercado son primer comprador. Es donde se juega la rentabilidad de tu cartera.",
      whyWrong: [
        "30% subestima el peso real; lleva a sub-invertir en este perfil.",
        "Subestima radicalmente el peso del segmento — perderías la mayoría del mercado.",
        "",
        "No corresponde a ningún dato confiable del Monitor 2025."
      ]
    },
    {
      q: "El arquetipo más numeroso del primer comprador en Chile 2025-2026 es:",
      opts: [
        "Jubilado que vende y compra menor",
        "Estudiante universitario sin ingresos",
        "Joven profesional 28-35 que sale del arriendo",
        "Inversionista mayor de 60"
      ],
      correct: 2,
      whyCorrect: "El joven profesional 28-35 con 5+ años arrendando y capacidad de ahorro es la mayoría de tu cartera.",
      whyWrong: [
        "Es comprador segundario, no de primera vivienda.",
        "Sin ingresos no califica para crédito ni subsidio.",
        "",
        "Inversionista mayor 60 ya tiene patrimonio — no es primera vivienda."
      ]
    },
    {
      q: "Una 'Familia DS49' difiere de una 'Pareja DS1 Tramo 3' principalmente en:",
      opts: [
        "RSH (40% más vulnerable vs hasta 60%), capacidad de ahorro, tipo de propiedad accesible y forma de financiamiento",
        "No hay diferencia, son lo mismo",
        "Solo en edad",
        "Solo en barrio elegido"
      ],
      correct: 0,
      whyCorrect: "Cada arquetipo se trabaja distinto. DS49 requiere acompañamiento educativo intenso (hasta 950 UF, sin crédito); DS1 T3 negocia hasta 2.200 UF con banca tradicional.",
      whyWrong: [
        "",
        "Son perfiles, requisitos y montos completamente distintos.",
        "La edad no determina el tramo de subsidio; el RSH y los ingresos sí.",
        "El barrio puede coincidir; la diferencia esencial es el RSH y la capacidad financiera."
      ]
    },
    {
      q: "Las redes calientes son:",
      opts: [
        "Anuncios pagados en redes sociales",
        "Leads comprados a portales como Yapo o Portal Inmobiliario",
        "Llamadas en frío al azar",
        "Familia, amigos, ex-clientes, vecinos — personas que ya te conocen y confían"
      ],
      correct: 3,
      whyCorrect: "Red caliente = confianza ya construida. Convierte 3-5x más rápido que un lead frío.",
      whyWrong: [
        "Los anuncios pagados producen leads tibios o fríos, no calientes.",
        "Los portales generan leads fríos, no calientes — no hay relación previa.",
        "Llamadas en frío son el extremo opuesto: ninguna relación previa.",
        ""
      ]
    },
    {
      q: "Las redes tibias (Capa B del Círculo de Influencia) corresponden a:",
      opts: [
        "Proveedores de servicios personales sin vínculo profesional",
        "Contactos profesionales ocasionales, clientes antiguos, conexiones de LinkedIn y del ecosistema profesional — reconocen al corredor pero no mantienen vínculo estrecho",
        "El núcleo familiar directo exclusivamente",
        "Personas completamente desconocidas por el corredor"
      ],
      correct: 1,
      whyCorrect: "La Capa B requiere Cultivo Relacional sostenido. Su conversión a Capa A es un proceso de mediano plazo con alto retorno profesional.",
      whyWrong: [
        "Carecen de contexto profesional relevante para la relación comercial.",
        "",
        "El núcleo familiar corresponde a la Capa A (Red Primaria).",
        "Los contactos sin reconocimiento mutuo pertenecen al canal frío, no a la Capa B."
      ]
    },
    {
      q: "Según Ipsos 2025, ¿qué prioriza el chileno al comprar primera vivienda más que el promedio mundial?",
      opts: ["Sectores con baja delincuencia (46% lo prioriza)", "Cercanía al mar", "Decoración minimalista", "Lujo y acabados premium"],
      correct: 0,
      whyCorrect: "Seguridad del barrio (46%) supera el promedio global. Es el primer filtro emocional del cliente chileno actual.",
      whyWrong: [
        "",
        "Solo aplica a un segmento muy reducido geográficamente.",
        "No es un dato medido por Ipsos como prioridad mayoritaria.",
        "El segmento primera vivienda raramente busca lujo; busca seguridad y funcionalidad."
      ]
    },
    {
      q: "Un comprador migrante con sueño cumplido (residencia definitiva en Chile) requiere del corredor:",
      opts: [
        "Tratamiento exactamente igual al local",
        "Educación adicional sobre el sistema chileno (RSH, subsidios, banca, notaría) + sensibilidad cultural",
        "Rechazo por mayor riesgo",
        "Cobrarle comisión doble"
      ],
      correct: 1,
      whyCorrect: "Educación + sensibilidad cultural. Es un cliente con altísima fidelidad y referidor a su comunidad si lo guías bien.",
      whyWrong: [
        "Ignora la barrera de información del sistema chileno y el contexto cultural.",
        "",
        "Es discriminatorio y además factible: residencia definitiva permite acceder a subsidios y crédito.",
        "Es ilegal y antiético cobrar diferente por nacionalidad."
      ]
    },
    {
      q: "El 'trabajador independiente' como arquetipo de primer comprador presenta como reto principal:",
      opts: [
        "No tiene ningún reto",
        "Falta de cédula",
        "Demostrar ingresos estables al banco con F22 + carpeta tributaria de 2+ años",
        "No puede usar subsidios"
      ],
      correct: 2,
      whyCorrect: "Sin contrato indefinido, debe convencer al banco con F22 + utilidades demostrables 2 años. Por eso necesita un corredor con red bancaria.",
      whyWrong: [
        "Tiene retos específicos para acreditar ingresos.",
        "La cédula es independiente del régimen tributario.",
        "",
        "Sí puede acceder a DS1 según RSH."
      ]
    },
    {
      q: "Un 'inbound TuMatch' como canal de origen del lead representa:",
      opts: [
        "Llamada en frío",
        "Familia del corredor",
        "Lead tibio calificado: ya conoce la marca y ha mostrado interés activo en la plataforma",
        "Lead frío sin filtro"
      ],
      correct: 2,
      whyCorrect: "Inbound TuMatch viene con autoeducación previa: conoce subsidios, calculadora, contenido. Convierte 15-25%, mucho mejor que portales.",
      whyWrong: [
        "Es lo opuesto: viene por autocontacto del cliente.",
        "Familia es red caliente, distinta categoría.",
        "",
        "No es frío: ya hubo interacción digital con la marca."
      ]
    },
    {
      q: "El ciclo típico de venta de un lead red caliente vs lead frío de portal es:",
      opts: ["Frío más rápido por urgencia", "No hay diferencia medible", "Caliente: 30-60 días · Frío: 4-9 meses", "Igual en ambos"],
      correct: 2,
      whyCorrect: "La confianza ya construida acorta el discovery, la pre-aprobación y la decisión. Por eso la red caliente es el canal #1 de rentabilidad.",
      whyWrong: [
        "El frío necesita construir confianza desde cero, lo que toma meses.",
        "Está medido y validado en miles de operaciones inmobiliarias.",
        "",
        "La diferencia es enorme: un orden de magnitud."
      ]
    },
    {
      q: "El 'pareja consolidando' (30-38 años) tiene como palanca emocional principal:",
      opts: ["Estatus social", "Inversión a largo plazo", "Especulación", "Estabilidad para los hijos + barrio con buenos colegios"],
      correct: 3,
      whyCorrect: "Esta etapa de vida prioriza familia, colegios y vecindario seguro por sobre cualquier otro factor. Tu guion debe enfatizar ese eje.",
      whyWrong: [
        "No es la palanca dominante en este arquetipo.",
        "Buscan vivir, no rentabilizar — distinto a inversionista.",
        "Speculación es lenguaje de inversionista, no de pareja con hijos.",
        ""
      ]
    },
    {
      q: "Un comprador con RSH bajo el 40% más vulnerable y ahorro mínimo de 30 UF típicamente postula a:",
      opts: ["Leasing habitacional", "Crédito puro de banco privado", "DS1 Tramo 3", "DS49 (Fondo Solidario, sin crédito hipotecario)"],
      correct: 3,
      whyCorrect: "DS49 está diseñado exactamente para ese perfil: vulnerabilidad + ahorro mínimo + sin endeudamiento bancario.",
      whyWrong: [
        "Leasing requiere capacidad de renta significativa.",
        "Sin ahorro suficiente y con vulnerabilidad alta, banco rechazaría.",
        "DS1 T3 requiere mayor capacidad financiera y RSH más alto.",
        ""
      ]
    },
    {
      q: "La diferencia entre arquetipo 'joven profesional' y 'pareja consolidando' que cambia el guion del corredor es:",
      opts: [
        "Composición del decisor (individuo vs pareja con hijos) y palanca emocional (estatus/independencia vs estabilidad familiar)",
        "Edad solamente",
        "Ninguna",
        "Color de la propiedad"
      ],
      correct: 0,
      whyCorrect: "En pareja consolidando vendes a 2 (o 3) personas con voz; el guion incluye colegios, barrio seguro, espacio. En joven profesional vendes a uno y el foco es independencia/inversión.",
      whyWrong: [
        "",
        "La edad es solo 1 variable; importan los decisores y la motivación.",
        "Hay diferencias cualitativas significativas en el guion comercial.",
        "Irrelevante para el perfilamiento del cliente."
      ]
    },
    {
      q: "En la matriz de canales de origen, el ROI más alto en términos de tiempo invertido vs operaciones cerradas suele venir de:",
      opts: ["Volanteo en la calle", "Portales inmobiliarios", "Email masivo", "Red caliente: familia, amigos y referidos de ex-clientes"],
      correct: 3,
      whyCorrect: "Red caliente convierte 30-50% en 30-60 días, sin costo monetario. Es el canal Pareto: 20% del esfuerzo, 80% del resultado.",
      whyWrong: [
        "Bajísima conversión y desgaste físico alto.",
        "Portales convierten 2-5% y exigen meses de seguimiento.",
        "Conversión casi nula y daña reputación de marca.",
        ""
      ]
    },
    {
      q: "El segmento migrante con residencia definitiva en Chile como comprador primera vivienda está creciendo porque:",
      opts: [
        "No tiene acceso a subsidios",
        "Es discriminado por bancos",
        "No está creciendo",
        "Familias ya consolidadas con 4+ años de residencia, ahorro acumulado y deseo de echar raíces formales"
      ],
      correct: 3,
      whyCorrect: "Migrantes con residencia definitiva acceden a banca, subsidios DS1/DS49 según RSH y representan un segmento creciente y de altísima fidelidad.",
      whyWrong: [
        "Sí accede según vulnerabilidad y antigüedad de RUT.",
        "Tiene acceso pleno con residencia definitiva (RUT chileno).",
        "Está creciendo según data del INE y bancos privados.",
        ""
      ]
    },
    {
      q: "En el primer contacto telefónico, la pregunta diagnóstica más útil para detectar el arquetipo es:",
      opts: [
        "¿Hace cuánto que arriendan y qué los hizo decidir comprar este año?",
        "¿Qué auto tienes?",
        "¿Cuánto ganas?",
        "¿Cuál es tu signo zodiacal?"
      ],
      correct: 0,
      whyCorrect: "En 2 frases obtienes: madurez del proceso (años arrendando), gatillo (qué los hizo decidir) y urgencia (¿este año?). Define todo el guion siguiente.",
      whyWrong: ["", "Irrelevante para perfilamiento de comprador.", "Demasiado directa al inicio; rompe rapport.", "Irrelevante y poco profesional."]
    },
    {
      q: "Un lead sin urgencia clara captado desde un portal inmobiliario debe ser:",
      opts: [
        "Descartado de inmediato",
        "Contactado con frecuencia diaria",
        "Trabajado con la misma intensidad que un caliente",
        "Calificado y, en ausencia de urgencia o ventana temporal definida, incorporado al flujo de Cultivo Relacional de largo plazo"
      ],
      correct: 3,
      whyCorrect: "Sin urgencia ni deadline, no amerita el tiempo prioritario del corredor. Se integra al flujo sistemático de Cultivo Relacional y se reactiva cuando exhiba señales de madurez.",
      whyWrong: [
        "Descartarlo implica renunciar a un contacto que puede madurar hacia estado tibio.",
        "El contacto telefónico reiterado sin motivo deteriora la imagen profesional.",
        "Invertir tiempo prioritario en un lead sin madurez compromete la productividad del corredor.",
        ""
      ]
    },
    {
      q: "En una conversación con un comprador independiente (boletas), el dato bancario más relevante a recolectar es:",
      opts: [
        "Su platillo favorito",
        "Número de Instagram",
        "La marca de su computador",
        "Carpeta tributaria SII (F22 últimos 2 años + boletas mensuales)"
      ],
      correct: 3,
      whyCorrect: "F22 con utilidades líquidas demostrables 2+ años es el documento que el banco requiere para evaluar capacidad real de pago.",
      whyWrong: ["No tiene relación con calificación bancaria.", "Irrelevante para evaluación crediticia.", "Datos personales no relevantes.", ""]
    },
    {
      q: "El 'arquetipo migrante con sueño cumplido' valora especialmente del corredor:",
      opts: [
        "Promesas vacías",
        "Visitas nocturnas",
        "Comisión más baja",
        "Paciencia para explicar el sistema chileno (notaría, conservador, subsidios) sin paternalismo"
      ],
      correct: 3,
      whyCorrect: "Educar con respeto el sistema desconocido construye lealtad enorme. Este segmento refiere intensamente a su comunidad cuando se siente bien tratado.",
      whyWrong: [
        "Nunca debes prometer lo que no puedes cumplir.",
        "No es necesario ni típico.",
        "No es la motivación principal; valoran asesoría profesional.",
        ""
      ]
    },
    {
      q: "La forma más profesional de registrar el origen del lead en CRM al ingresarlo es:",
      opts: [
        "Solo marcar 'lead'",
        "No registrarlo",
        "En un papel",
        "Etiquetar canal específico (referido_juan / linkedin / portal_pi / instagram_post_x)"
      ],
      correct: 3,
      whyCorrect: "Solo con el canal etiquetado puedes calcular conversión por origen y decidir dónde duplicar tu inversión el próximo trimestre.",
      whyWrong: [
        "Demasiado vago para análisis posterior.",
        "Sin origen, jamás aprenderás qué canal funciona.",
        "Se pierde, no escala y no permite reportes.",
        ""
      ]
    }
  ],
  "2": [
    {
      q: "La segmentación de la Pirámide de los 100 del Círculo de Influencia del corredor se estructura en:",
      opts: [
        "Capa A (20 primarios) + Capa B (50 medios, cultivo relacional) + Capa C (30 dormidos, reactivación)",
        "100 leads adquiridos vía campañas pagadas",
        "100 piezas publicitarias anuales",
        "Exclusivamente núcleo familiar"
      ],
      correct: 0,
      whyCorrect: "La estructura 20 / 50 / 30 es la base operativa del Marketing Relacional. La Capa A genera rentabilidad inmediata; la Capa C representa oportunidades dormidas de alto valor.",
      whyWrong: [
        "",
        "Los leads adquiridos pertenecen al canal frío, no al Círculo de Influencia personal.",
        "La publicidad es un canal distinto al Sistema de Referidos.",
        "El Círculo de Influencia es significativamente más amplio que el núcleo familiar."
      ]
    },
    {
      q: "La cadencia profesional recomendada para el cultivo relacional de un contacto de Capa B (tibio) es:",
      opts: [
        "Contacto diario",
        "Un contacto anual",
        "Ciclos de 21 días con contenido de valor profesional (80% formativo · 20% comercial)",
        "Ningún contacto planificado"
      ],
      correct: 2,
      whyCorrect: "El ciclo de 21 días mantiene presencia sostenida sin saturar al contacto. La proporción 80/20 es el estándar validado en marketing de contenidos B2C.",
      whyWrong: [
        "Una cadencia diaria produce saturación y bloqueo del canal.",
        "Una frecuencia anual produce olvido de la marca personal del corredor.",
        "",
        "La ausencia de cultivo relacional degrada al contacto tibio hasta estado frío."
      ]
    },
    {
      q: "La solicitud profesional de referido a un cliente satisfecho debe realizarse:",
      opts: [
        "Nunca, por razones de etiqueta profesional",
        "Mediante presión explícita o insistencia",
        "Mediante pago monetario al referidor",
        "Tras un hito de valor entregado, con acotación numérica específica: '¿Se te ocurren una o dos personas en tu círculo en una situación similar?'"
      ],
      correct: 3,
      whyCorrect: "La solicitud en el momento de valor entregado se apoya en el principio de reciprocidad (Cialdini). La acotación numérica facilita el recuerdo cognitivo.",
      whyWrong: [
        "La ausencia de solicitud formal reduce significativamente el volumen de referidos recibidos.",
        "La presión degrada la relación profesional y compromete la reputación del corredor.",
        "El pago directo puede constituir una práctica antiética y, en ciertos marcos regulatorios, ilegal.",
        ""
      ]
    },
    {
      q: "Un contacto de Capa B que recibe cultivo relacional sostenido durante seis meses presenta una tasa de conversión:",
      opts: [
        "Inferior a la del lead frío",
        "Aproximadamente tres a cinco veces superior a la del mismo periodo sobre un lead frío",
        "Nula: no hay diferencia respecto al contacto frío",
        "Equivalente al cien por ciento"
      ],
      correct: 1,
      whyCorrect: "El cultivo relacional sostenido consolida autoridad profesional antes de que exista necesidad transaccional. Al momento de la decisión, el corredor es el referente espontáneo.",
      whyWrong: [
        "Los estudios comparativos muestran el efecto inverso.",
        "",
        "Existe un impacto medible y significativo en la conversión relativa.",
        "Ningún canal presenta una conversión del 100% en términos reales."
      ]
    },
    {
      q: "Los contenidos de mayor valor para un ciclo de cultivo relacional sobre Capa B incluyen:",
      opts: [
        "Memes o contenido humorístico irrelevante",
        "Simulaciones de la Calculadora TuMatch, novedades de subsidios, casos de estudio autorizados, guías técnicas, actualización UF y oportunidades segmentadas por zona",
        "Envío exclusivo de precios sin contexto",
        "Difusión masiva indiscriminada de propiedades"
      ],
      correct: 1,
      whyCorrect: "Educar con contenido útil y contextual consolida la autoridad profesional del corredor. En el momento de decisión, el contacto recuerda quién lo acompañó sin pedir nada a cambio.",
      whyWrong: [
        "El contenido irrelevante deteriora la percepción profesional.",
        "",
        "Comunicar sólo precios convierte al corredor en una cotización, no en asesor.",
        "La difusión masiva sin curaduría es percibida como invasiva y daña la marca personal."
      ]
    },
    {
      q: "El rendimiento comparado entre un cliente captado por derivación (Capa A) y un lead frío es, en promedio:",
      opts: [
        "Inferior la derivación",
        "La captación por derivación convierte 3 a 5 veces más rápido y presenta menor resistencia a la negociación",
        "Diferencia no medible",
        "Equivalente"
      ],
      correct: 1,
      whyCorrect: "La confianza transferida por el referidor acelera el discovery, la pre-aprobación bancaria y la decisión final. Por esto, el Sistema de Referidos tiene el mejor ROI del corredor.",
      whyWrong: [
        "Lo contrario al efecto medido empíricamente.",
        "",
        "Está validado por estudios de conversión y duración de ciclo de venta.",
        "Los datos comparativos muestran diferencias significativas y consistentes."
      ]
    },
    {
      q: "El protocolo profesional de reactivación de un contacto de Capa C (dormido, +12 meses) consiste en:",
      opts: [
        "Envío masivo a toda la Capa C simultáneamente",
        "Bloqueo del contacto en redes sociales",
        "Propuesta comercial directa en el primer mensaje",
        "Mensaje personal con motivo concreto y verificable + propuesta de valor no transaccional"
      ],
      correct: 3,
      whyCorrect: "La reactivación efectiva requiere humanización, contextualización y propuesta de valor sin exigencia inmediata. La personalización supera ampliamente cualquier campaña masiva.",
      whyWrong: [
        "El envío masivo se percibe como impersonal y presenta bajas tasas de apertura.",
        "El bloqueo cierra definitivamente la posibilidad de reactivación.",
        "La propuesta transaccional prematura compromete la posibilidad de reactivación.",
        ""
      ]
    },
    {
      q: "El error más frecuente del corredor en la gestión de su Pirámide de los 100 es:",
      opts: [
        "Dedicar atención preferente a la Capa A",
        "Ejecutar reactivaciones periódicas",
        "Solicitar referidos tras hitos de valor",
        "Concentrar la totalidad del esfuerzo operativo en la Capa B e ignorar las oportunidades latentes en Capas A y C"
      ],
      correct: 3,
      whyCorrect: "La Capa B genera sensación de actividad pero la rentabilidad real se concentra en la Capa A (conversión inmediata) y en la Capa C (oportunidades latentes recuperables).",
      whyWrong: [
        "La atención a la Capa A es una práctica correcta, no un error.",
        "Las reactivaciones son parte del protocolo profesional.",
        "La solicitud formal de referidos es una mejor práctica reconocida.",
        ""
      ]
    },
    {
      q: "La meta operativa mensual de contactos a la Capa A (Top 20) establecida por el estándar TuMatch es:",
      opts: ["Contactar la totalidad de los veinte cada mes", "Al menos ocho contactos (40% de la capa)", "Cien contactos", "Cero contactos"],
      correct: 1,
      whyCorrect: "Ocho contactos mensuales sostienen la presencia profesional sin generar sensación de saturación. Contactar la totalidad de la capa cada mes resulta invasivo.",
      whyWrong: [
        "Produce saturación y deteriora la relación profesional.",
        "",
        "Operativamente inviable y contraproducente para el vínculo.",
        "La ausencia de contacto degrada la Capa A hacia estado frío."
      ]
    },
    {
      q: "El primer mensaje de reactivación hacia un contacto de Capa C debe contener como mínimo:",
      opts: [
        "Únicamente emojis o elementos gráficos",
        "Una solicitud de datos de contacto actualizados",
        "Un motivo concreto y verificable de la reactivación, complementado con contenido de valor sin exigencia de reciprocidad",
        "Una propuesta comercial explícita"
      ],
      correct: 2,
      whyCorrect: "La conjunción motivo + valor entregado activa el principio de reciprocidad. La transacción aparece en una interacción posterior, nunca en el mensaje de reactivación.",
      whyWrong: [
        "La comunicación sin mensaje articulado no genera apertura.",
        "Se percibe como invasivo y no aporta valor al contacto.",
        "",
        "La propuesta comercial anticipada compromete la reactivación."
      ]
    },
    {
      q: "La proporción óptima entre contenido formativo y comercial en el Cultivo Relacional es:",
      opts: ["100% contenido comercial", "100% formativo sin componente comercial", "80% formativo / 20% comercial", "Distribución equitativa 50/50"],
      correct: 2,
      whyCorrect: "La proporción 80/20 es el estándar validado en marketing de contenidos: construye autoridad profesional sin saturar y habilita conversiones en los momentos estratégicos.",
      whyWrong: [
        "Transforma el canal en publicidad invasiva y reduce la apertura.",
        "Impide la concreción de operaciones en los momentos de valor entregado.",
        "",
        "Una distribución simétrica se percibe como excesivamente comercial."
      ]
    },
    {
      q: "La ventaja principal de un cliente captado por derivación (Sistema de Referidos) frente a un lead frío es:",
      opts: [
        "El referido paga honorarios superiores",
        "No presenta ventajas diferenciales",
        "El referido presenta menor exigencia de servicio",
        "La confianza transferida por el referidor reduce la barrera inicial y acelera significativamente el proceso"
      ],
      correct: 3,
      whyCorrect: "El referidor actúa como validador de la credibilidad profesional del corredor. El proceso comienza con un componente emocional positivo ya resuelto.",
      whyWrong: [
        "Los honorarios aplicables son idénticos; la ventaja radica en velocidad y conversión.",
        "Las ventajas diferenciales están ampliamente documentadas.",
        "La exigencia de servicio suele ser equivalente o superior por confianza ya depositada.",
        ""
      ]
    },
    {
      q: "La clasificación de temperatura del lead (🔥/🌡️/❄️) en el CRM TuMatch tiene como finalidad:",
      opts: [
        "Carecer de utilidad práctica",
        "Un propósito meramente estético",
        "Generar reportes anuales exclusivamente",
        "Priorizar la agenda operativa diaria del corredor según el estado de cada contacto"
      ],
      correct: 3,
      whyCorrect: "La segmentación por temperatura es el principal instrumento de gestión de tiempo: calientes reciben atención inmediata, tibios siguen el ciclo relacional y fríos un flujo de largo plazo.",
      whyWrong: [
        "Es la herramienta central de priorización diaria del corredor.",
        "Su función es estrictamente operativa.",
        "Su uso es cotidiano, no exclusivo de reportería anual.",
        ""
      ]
    },
    {
      q: "Los principales gatilladores para la reactivación exitosa de un contacto de Capa C son:",
      opts: [
        "Cambios vitales del contacto (matrimonio, nacimiento de hijo, cambio laboral) o cambios macroeconómicos relevantes (nuevo subsidio, variación de tasas)",
        "La inacción prolongada del corredor",
        "La elevación del precio de servicio",
        "La ausencia total de comunicación"
      ],
      correct: 0,
      whyCorrect: "Los eventos biográficos y los cambios estructurales de mercado actúan como detonantes naturales de decisión. El mensaje de reactivación coincide con el momento de apertura.",
      whyWrong: [
        "",
        "La inacción produce desactivación definitiva del contacto.",
        "No guarda relación con la reactivación de contactos.",
        "La ausencia de comunicación impide toda posibilidad de reactivación."
      ]
    },
    {
      q: "El KPI mensual de solicitudes formales de referido establecido por el estándar profesional TuMatch es:",
      opts: [
        "No es un KPI relevante",
        "Cien solicitudes mensuales",
        "Al menos cuatro solicitudes mensuales (referidos pedidos de forma estructurada)",
        "Cero solicitudes"
      ],
      correct: 2,
      whyCorrect: "Cuatro solicitudes mensuales consolidan la generación de referidos como hábito sistemático, distinguiendo al corredor profesional del operador táctico.",
      whyWrong: [
        "Es el indicador más determinante del Sistema de Referidos.",
        "Una cifra inalcanzable que carece de valor práctico.",
        "",
        "La ausencia de solicitudes elimina el flujo estructurado de referidos."
      ]
    },
    {
      q: "Un contenido de alto valor profesional para enviar a contactos de Capa B cada 21 días es:",
      opts: [
        "Un listado de propiedades sin curaduría",
        "Material fotográfico personal no profesional",
        "Una guía técnica breve (formato PDF, 3 páginas) sobre 'Cinco errores frecuentes en la adquisición de primera vivienda'",
        "El logotipo corporativo sin texto complementario"
      ],
      correct: 2,
      whyCorrect: "El contenido formativo aplicado, con recomendaciones accionables, se conserva y comparte. Construye autoridad profesional antes de que exista una transacción.",
      whyWrong: [
        "Sin curaduría profesional, se percibe como publicidad invasiva.",
        "Carece de valor técnico para el receptor y puede deteriorar la marca personal.",
        "",
        "No genera valor ni recordación útil en el receptor."
      ]
    },
    {
      q: "Cuando un contacto de Capa B responde tras un periodo prolongado de cultivo relacional, el protocolo profesional indica:",
      opts: [
        "Ignorar la respuesta como represalia por el silencio previo",
        "Presentar una propuesta transaccional inmediata",
        "Iniciar una conversación exploratoria para identificar el cambio de contexto del contacto antes de formular propuesta",
        "Eliminar al contacto de la base activa"
      ],
      correct: 2,
      whyCorrect: "La respuesta marca un cambio de estado. Antes de proponer es indispensable calificar el momento vital y las nuevas necesidades del contacto.",
      whyWrong: [
        "Constituye una falta grave de profesionalismo y deteriora la relación.",
        "La propuesta prematura compromete el lead recién reactivado.",
        "",
        "Eliminar un contacto que se reactiva equivale a renunciar a una oportunidad concreta."
      ]
    },
    {
      q: "El principio rector de la solicitud de referidos según el estándar TuMatch es:",
      opts: [
        "Solicitar exclusivamente tras un hito de valor entregado y medible (firma, asesoría concreta, problema resuelto)",
        "No solicitar referidos bajo ninguna circunstancia",
        "Solicitar referidos con frecuencia diaria",
        "Compensar económicamente al referidor"
      ],
      correct: 0,
      whyCorrect: "La solicitud posterior al valor entregado opera sobre el principio de reciprocidad y preserva la dignidad profesional del intercambio.",
      whyWrong: [
        "",
        "Sin solicitud estructurada, los referidos se producen de forma errática.",
        "La frecuencia excesiva rompe el principio de reciprocidad y satura al contacto.",
        "La compensación económica puede constituir una práctica antiética y regulatoriamente objetable."
      ]
    },
    {
      q: "Una interacción de cultivo relacional inadecuada para la Capa B es:",
      opts: [
        "Un caso de estudio con testimonio autorizado",
        "Una consulta comercial directa sin entrega previa de valor: '¿Estás pensando en comprar este año?'",
        "Una guía técnica breve sobre errores frecuentes",
        "El envío de una simulación hipotecaria aplicada a un caso de la zona del contacto"
      ],
      correct: 1,
      whyCorrect: "La interrogación comercial sin antecedente de valor entregado rompe la lógica del Cultivo Relacional, en la cual la entrega antecede a la solicitud.",
      whyWrong: [
        "Es un recurso con demostrada efectividad en la construcción de autoridad.",
        "",
        "Constituye un contenido formativo de utilidad alta.",
        "Constituye un contenido de alto valor profesional."
      ]
    },
    {
      q: "El indicador operativo de éxito en la gestión de la red caliente (Capa A) del corredor es:",
      opts: [
        "La cantidad de tarjetas profesionales distribuidas",
        "El número total de seguidores en redes sociales",
        "La tasa de apertura de correos electrónicos",
        "Una tasa de conversión igual o superior al 30% de captados a operación cerrada"
      ],
      correct: 3,
      whyCorrect: "Una conversión bajo el 30% indica deterioro en la calidad del servicio entregado o en la curaduría de la cartera. Es el KPI más significativo de la Capa A.",
      whyWrong: [
        "La distribución física no garantiza recordación ni conversión.",
        "Es una métrica de vanidad sin correlación directa con conversión.",
        "Constituye una métrica operativa, pero no refleja resultados comerciales.",
        ""
      ]
    }
  ],
  "3": [
    {
      q: "El CRM TuMatch (tumatch-leads.vercel.app) sirve principalmente para:",
      opts: [
        "Enviar publicidad masiva",
        "Cobrar facturas",
        "Solo guardar contactos",
        "Pipeline visual + perfil-comprador-section + cierre-negocio + integración con calculadora hipotecaria"
      ],
      correct: 3,
      whyCorrect: "Es tu cuaderno digital de cliente, tu memoria operativa y tu fuente de reportes. Sin CRM, vuelas a ciegas a partir de los 20 leads.",
      whyWrong: ["No es plataforma de marketing masivo.", "No es ERP financiero.", "Subestima el rol; es mucho más que agenda de contactos.", ""]
    },
    {
      q: "En el CRM TuMatch, el campo 'perfil-comprador-section' permite:",
      opts: [
        "Solo calificación visual",
        "Solo guardar nombre",
        "Registrar arquetipo, motivación, miedos, urgencia, capacidad financiera, RSH, subsidio aplicable y red de origen",
        "Solo una foto del cliente"
      ],
      correct: 2,
      whyCorrect: "Perfilamiento estructurado es tu activo de largo plazo. Con esos campos completos puedes hacer match cliente-propiedad en segundos cuando aparece la oportunidad.",
      whyWrong: [
        "Necesitas data, no solo iconos.",
        "Subestima el alcance del perfilamiento.",
        "",
        "La foto sin estructura no permite hacer match ni reportes."
      ]
    },
    {
      q: "La etiqueta de calor del lead en CRM (🔥 caliente / 🌡️ tibio / ❄️ frío) sirve para:",
      opts: [
        "No hay etiquetas",
        "Decoración estética",
        "Solo color visual sin función",
        "Priorizar tu agenda diaria — los calientes reciben llamada hoy, los tibios contenido cada 21 días, los fríos campaña automatizada"
      ],
      correct: 3,
      whyCorrect: "Priorización por temperatura. Sin esta segmentación pierdes horas en leads fríos mientras un caliente espera respuesta y se va con otro corredor.",
      whyWrong: [
        "Sí existen y son la base de la priorización.",
        "Es funcional y orienta acción inmediata.",
        "Detrás del color hay reglas de gestión que dictan tu día.",
        ""
      ]
    },
    {
      q: "La calculadora hipotecaria de TuMatch es útil para anclar al comprador porque:",
      opts: [
        "No sirve para perfilar",
        "Calcula impuestos",
        "Convierte el sueño abstracto ('quiero comprar') en cifras concretas (dividendo, plazo, ingreso requerido) y baja la ansiedad de incertidumbre",
        "Es decorativa"
      ],
      correct: 2,
      whyCorrect: "Cifras = control percibido. El comprador pasa de 'no sé si puedo' a 'esto cuesta esto al mes'. Acelera la confianza.",
      whyWrong: [
        "Es una de las herramientas centrales de perfilamiento.",
        "No es su función; es de simulación crediticia.",
        "",
        "Tiene función operativa, no es decorativa."
      ]
    },
    {
      q: "El registro mínimo de un lead en CRM TuMatch debe incluir:",
      opts: [
        "Solo teléfono",
        "Nombre + canal de origen + arquetipo + capacidad estimada + urgencia + próxima acción + fecha de seguimiento",
        "Solo nombre y RUT",
        "Solo email"
      ],
      correct: 1,
      whyCorrect: "7 campos en 5 minutos. Sin esos datos, el seguimiento es improvisación. Con esos datos, tu CRM trabaja para ti incluso fuera de línea.",
      whyWrong: ["Insuficiente para gestión profesional.", "", "Falta el contexto comercial para hacer seguimiento útil.", "Igual de incompleto."]
    },
    {
      q: "La etapa 'cierre-negocio' del CRM te ayuda a:",
      opts: [
        "Llevar la operación desde la oferta aceptada hasta la firma de escritura con checklist de hitos y documentos",
        "Nada práctico",
        "Cobrar al cliente",
        "Enviar email automático"
      ],
      correct: 0,
      whyCorrect: "Checklist visible = cero promesas olvidadas con el cliente. La operación de compra-venta tiene 9 etapas y sin checklist se cae alguna.",
      whyWrong: [
        "",
        "Es una de las etapas más críticas para evitar caída de operación.",
        "No es módulo de cobranza.",
        "Es más que automatización: es trazabilidad de hitos."
      ]
    },
    {
      q: "El reporte por canal del CRM (red caliente, tibia, fría, inbound) sirve para:",
      opts: [
        "Tomar foto",
        "Decidir dónde invertir tiempo y dinero el próximo trimestre — cierras donde tienes mejor conversión",
        "Decoración del dashboard",
        "Imprimir"
      ],
      correct: 1,
      whyCorrect: "Decisión basada en data. El corredor que mide su tasa por canal sabe en 90 días dónde duplicar esfuerzo. El que no mide repite el mismo año.",
      whyWrong: ["No es para visualización pasiva, es para acción.", "", "Es decisión estratégica, no estética.", "Es para análisis, no soporte físico."]
    },
    {
      q: "La actualización del CRM debe hacerse:",
      opts: [
        "Diariamente, idealmente al final de cada día (20 min de ritual)",
        "Cuando se acuerde el corredor",
        "Una vez al año",
        "Solo cuando cierra una operación"
      ],
      correct: 0,
      whyCorrect: "Sin ritual diario, el CRM se desactualiza en 2 semanas y deja de servir. 20 min al día = activo de carrera.",
      whyWrong: [
        "",
        "La irregularidad mata la utilidad del CRM.",
        "Insuficiente; el contexto se pierde.",
        "Pierdes la trazabilidad de las etapas previas al cierre."
      ]
    },
    {
      q: "El error más mortal en gestión de leads de un corredor es:",
      opts: ["Medir conversión", "Tener leads solo en WhatsApp y memoria, sin sistema de seguimiento", "Pedir referidos", "Usar CRM"],
      correct: 1,
      whyCorrect: "A los 25 leads colapsa la memoria, se cae el seguimiento, llamas tarde y pierdes la operación. CRM no es opcional.",
      whyWrong: ["Medir es buena práctica.", "", "Pedir referidos es deseable.", "Usar CRM es lo correcto."]
    },
    {
      q: "Un campo crítico para detectar arquetipo de comprador en el CRM es:",
      opts: [
        "Restaurante favorito",
        "Color favorito",
        "Origen del lead + situación familiar + motivación principal + capacidad financiera estimada",
        "Hobby"
      ],
      correct: 2,
      whyCorrect: "Estos cuatro campos te permiten identificar arquetipo en 60 segundos al revisar la ficha antes de cualquier reunión.",
      whyWrong: ["No aporta a la decisión de compra.", "Sin valor comercial.", "", "Sin relación con perfil de comprador."]
    },
    {
      q: "El histórico de interacciones del CRM (llamadas, mails, reuniones) te permite:",
      opts: [
        "Sentirte vigilado",
        "Antes de retomar contacto, leer el contexto de la última conversación en 60 segundos y retomar con precisión",
        "Espiar al cliente",
        "Subir tu factura"
      ],
      correct: 1,
      whyCorrect: "Recordar exactamente lo que se habló y prometió hace 3 meses te hace ver profesional y construye confianza. Sin histórico, repites preguntas y pierdes credibilidad.",
      whyWrong: ["Es para servicio, no vigilancia.", "", "No es espionaje; es servicio profesional.", "No es módulo financiero."]
    },
    {
      q: "El match cliente-propiedad automático del CRM funciona mejor cuando:",
      opts: [
        "Falta información del cliente",
        "La ficha está completa con arquetipo + capacidad + zonas preferidas + urgencia",
        ">El cliente no quiere comprar",
        "Hay solo nombre y teléfono"
      ],
      correct: 1,
      whyCorrect: "Sin esos campos llenos, el matching es manual y lento. Con la ficha completa, en segundos identificas qué propiedad de tu cartera calza.",
      whyWrong: ["A más datos faltantes, peor el match.", "", "Sin intención no aplica el match.", "Insuficiente para hacer match útil."]
    },
    {
      q: "Un caso donde el CRM TuMatch te salva una operación es:",
      opts: [
        "Cuando duermes la siesta",
        "Cuando ignoras al cliente",
        "Cuando el cliente vuelve después de 6 meses y revisas su ficha en 30 segundos: arquetipo, motivación, lo último prometido, lo que dejaste pendiente",
        "Cuando facturas"
      ],
      correct: 2,
      whyCorrect: "Esa memoria operativa es lo que distingue al pro del aficionado. Cliente que se siente recordado se siente valorado.",
      whyWrong: ["Sin relación con CRM.", "Lo opuesto al uso correcto.", "", "No es función de CRM."]
    },
    {
      q: "La integración del CRM con la calculadora hipotecaria permite:",
      opts: [
        "Bloquear al cliente",
        "Cobrar comisión automática",
        "Nada útil",
        "Generar PDF con escenarios de dividendo personalizado para entregar al cliente, anclando la conversación"
      ],
      correct: 3,
      whyCorrect: "PDF con datos del cliente eleva la percepción de profesionalismo y deja material físico que el cliente comparte con su pareja/familia, multiplicando el alcance.",
      whyWrong: ["Lo opuesto a la función.", "No tiene módulo de cobranza automática.", "Es función central de la integración.", ""]
    },
    {
      q: "En el pipeline visual del CRM, identificar dónde se atascan tus leads ('cuello de botella') sirve para:",
      opts: [
        "Detectar el paso del proceso donde pierdes más leads y reforzar tu técnica ahí (pre-aprobación, visitas, oferta)",
        "Premiarte",
        "Estética del dashboard",
        "Castigar al cliente"
      ],
      correct: 0,
      whyCorrect: "Si el 60% se pierde en pre-aprobación bancaria, sabes que necesitas otro banco aliado. Si en visitas, mejorar tu curatoría.",
      whyWrong: ["", "No es de gamificación.", "Es funcional, no estético.", "No tiene relación con el cliente."]
    },
    {
      q: "El registro de objeciones recibidas en cada lead te permite:",
      opts: [
        "Subir tu factura",
        "Ignorar al cliente",
        "Olvidarlas",
        "Identificar patrones (¿qué objeción aparece en 80% de tus reuniones?) y preparar respuestas estandarizadas LAARC"
      ],
      correct: 3,
      whyCorrect: "Patrones de objeción = mejora continua de tu pitch. Si 'consultarlo en familia' aparece en 70% de tus casos, prepara una respuesta de 5 estrellas para esa.",
      whyWrong: ["Sin relación con CRM.", "Las objeciones merecen ser escuchadas.", "Las objeciones repetidas son oro de mejora.", ""]
    },
    {
      q: "Un CRM bien usado se convierte en activo de carrera porque:",
      opts: [
        "Solo sirve hoy",
        "No tiene valor real",
        "Lo borra el corredor jefe",
        "Te acompaña aunque cambies de oficina o ciudad — tus leads, tu histórico, tu reputación digital"
      ],
      correct: 3,
      whyCorrect: "Tus 300 leads bien gestionados son patrimonio profesional. Si cambias de oficina, tu cartera viaja contigo.",
      whyWrong: [
        "Su valor crece con el tiempo, no desaparece.",
        "Es uno de los activos más valiosos del corredor.",
        "Es propio del corredor que lo gestiona.",
        ""
      ]
    },
    {
      q: "La diferencia entre tener leads en WhatsApp vs en el CRM TuMatch es:",
      opts: [
        "WhatsApp es conversación temporal; CRM es sistema de seguimiento, segmentación, reportes y persistencia profesional",
        "WhatsApp permite reportes",
        "CRM es peor",
        "Ninguna"
      ],
      correct: 0,
      whyCorrect: "WhatsApp es canal; CRM es sistema. No son intercambiables; el CRM organiza lo que pasa en WhatsApp.",
      whyWrong: [
        "",
        "WhatsApp no permite reportes estructurados.",
        "Es objetivamente mejor para gestión.",
        "La diferencia es sustancial y operativamente crítica."
      ]
    },
    {
      q: "Un corredor que cierra 25 operaciones al año tiene típicamente en su CRM:",
      opts: ["100-200 leads activos en distintas etapas + 300+ históricos para reactivación", "Ninguno", "10 leads activos", "2 leads"],
      correct: 0,
      whyCorrect: "La tasa de cierre típica es 15-25% del pipeline activo. Para 25 operaciones, necesitas pipeline de 100-200 leads activos.",
      whyWrong: ["", "Sin pipeline no hay operaciones.", "Insuficiente para llegar a 25 operaciones.", "Imposible cerrar 25 con tan poco volumen."]
    },
    {
      q: "La forma profesional de etiquetar la próxima acción de un lead en CRM es:",
      opts: [
        "'Llamar el martes 22/04 a las 11:00 para confirmar reunión sobre subsidio DS49' (acción + fecha + objetivo)",
        "'Llamarlo en algún momento'",
        "'Pendiente'",
        "'Después'"
      ],
      correct: 0,
      whyCorrect: "Acción + fecha + objetivo = ejecutable y medible. Sin esto, las acciones se postergan y los leads se enfrían.",
      whyWrong: ["", "Demasiado vago para ser ejecutable.", "Sin contexto ni fecha; no se ejecutará.", "Vago e infinito; no genera acción."]
    }
  ],
  "4": [
    {
      q: "El método SPIN (Neil Rackham, 1988) ordena las preguntas en:",
      opts: [
        "Problema → Solución directa",
        "Situación → Problema → Implicación → Necesidad-Beneficio",
        "Solo respuestas, sin preguntas",
        "No hay orden"
      ],
      correct: 1,
      whyCorrect: "S-P-I-N. El orden importa: primero entiendes contexto, luego dolor, luego consecuencias, luego propones beneficio.",
      whyWrong: [
        "Saltarse contexto e implicación entrega soluciones desalineadas.",
        "",
        "SPIN es un método de preguntas, no de afirmaciones.",
        "Ignorar el orden produce consultoría sin escucha."
      ]
    },
    {
      q: "Una pregunta de Situación correcta para un comprador primerizo es:",
      opts: [
        "¿Te gusta la casa?",
        "¿Vas a comprar?",
        "¿Hace cuánto que arriendan? ¿Cuánto pagan hoy de arriendo? ¿Cómo está tu capacidad de ahorro mensual?",
        "¿Cuánto ganas exactamente?"
      ],
      correct: 2,
      whyCorrect: "Situación = mapa del cliente. Sin contexto sólido, las preguntas siguientes flotan.",
      whyWrong: [
        "No es de Situación; es opinión sobre una propiedad puntual.",
        "Cerrada sí/no; no perfila.",
        "",
        "Demasiado directa al inicio; rompe rapport."
      ]
    },
    {
      q: "Una pregunta de Problema correcta es:",
      opts: [
        "¿Qué te ha frenado hasta ahora para dejar de arrendar? ¿Qué te frustra del mercado actual?",
        "¿Por qué hablas?",
        "¿Eres pobre?",
        "¿Cuánto tienes en el banco?"
      ],
      correct: 0,
      whyCorrect: "Problema = dolor del cliente. Aquí el corredor escucha más que habla; cada dolor identificado te entrega un argumento de venta posterior.",
      whyWrong: ["", "Sin sentido.", "Ofensiva y rompe rapport.", "Es Situación, no Problema."]
    },
    {
      q: "Una pregunta de Implicación es:",
      opts: [
        "Solo emocional sin proyección",
        "¿Cuánto tienes ahorrado?",
        "Solo precio del subsidio",
        "¿Qué pasa si en 2 años todavía estás arrendando? ¿Cuánto habrás pagado en arriendo perdido? ¿Cómo afecta a tu familia esa incertidumbre?"
      ],
      correct: 3,
      whyCorrect: "Implicación = el cliente conecta el dolor con consecuencias. Aquí el cliente se vende a sí mismo la urgencia.",
      whyWrong: ["Sin proyección, no es Implicación.", "Es Situación, no Implicación.", "No conecta dolor con consecuencias.", ""]
    },
    {
      q: "Una pregunta de Necesidad-Beneficio cierra con:",
      opts: [
        "Solo escritura",
        "¿Cómo cambiaría tu día a día si en 6 meses estuvieras pagando dividendo en tu propia propiedad en lugar de arriendo?",
        "¿Compras o no?",
        "Solo precio"
      ],
      correct: 1,
      whyCorrect: "Necesidad-Beneficio = cliente proyecta vida futura con la solución. El cierre nace aquí, no en el cierre formal.",
      whyWrong: ["Tema operativo, no de proyección emocional.", "", "Cerrada presional, no proyectiva.", "No proyecta beneficio; es transaccional."]
    },
    {
      q: "Tres errores comunes en el discovery del primera vivienda son:",
      opts: [
        "Ninguno",
        "Asentir con la cabeza",
        "Hablar más que escuchar, hacer preguntas cerradas (sí/no), saltar a propuesta sin entender contexto",
        "Mirar a los ojos"
      ],
      correct: 2,
      whyCorrect: "Hablar de más + cerradas + saltar. Si saliste de la primera reunión sin 25 datos del cliente, perdiste la oportunidad.",
      whyWrong: ["Sí hay errores frecuentes y sistemáticos.", "Es buena práctica de validación.", "", "Es buena práctica de escucha."]
    },
    {
      q: "La regla de oro del SPIN aplicado al primera vivienda es:",
      opts: [
        "20% el corredor habla, 80% el cliente habla. El cliente sale sintiéndose escuchado, no presionado.",
        "Vender ya en primera reunión",
        "No hablar nunca",
        "Hablar todo el tiempo"
      ],
      correct: 0,
      whyCorrect: "20/80. El cliente que se siente escuchado regresa, refiere y firma. Esta regla cambia carreras.",
      whyWrong: ["", "Presión rompe la confianza.", "Tampoco; necesitas hacer preguntas estratégicas.", "Saturarías y no perfilarías."]
    },
    {
      q: "Una pregunta proyectiva en SPIN es:",
      opts: [
        "¿En qué banco estás?",
        "Si en 6 meses estuvieran viviendo en su casa, ¿qué sería lo primero que harían un domingo?",
        "¿Cuántos baños quieres?",
        "¿Cuál es tu RUT?"
      ],
      correct: 1,
      whyCorrect: "Activa imaginación de futuro y crea conexión emocional con la solución. Es la pregunta más poderosa del cierre suave.",
      whyWrong: ["Es Situación.", "", "Es comparativa o de Situación, no proyectiva.", "Datos básicos, no proyectivos."]
    },
    {
      q: "Cuando un cliente dice 'no estoy seguro de comprar este año', el corredor TuMatch responde con:",
      opts: [
        "'Decídete ahora o pierdes la oportunidad'",
        "'No me importa'",
        "'Te vas a arrepentir'",
        "Pregunta de Implicación: '¿Qué pasa si en 2 años todavía estás arrendando?'"
      ],
      correct: 3,
      whyCorrect: "La Implicación lleva al cliente a calcular las consecuencias de la inacción y se vende a sí mismo la urgencia.",
      whyWrong: ["Presión rompe rapport y huye el cliente.", "Falta de empatía: pierdes el lead.", "Manipulación emocional, no profesional.", ""]
    },
    {
      q: "En SPIN, las preguntas de Situación deben:",
      opts: [
        "Ser pocas pero profundas",
        "No hacerse",
        "Ser eficientes y respetuosas; muchas preguntas básicas se sienten como interrogatorio",
        "Llenar toda la reunión"
      ],
      correct: 2,
      whyCorrect: "Demasiada Situación cansa al cliente. La data básica obtenla en formulario o pre-llamada; en reunión profundiza en Problema, Implicación y Beneficio.",
      whyWrong: ["Pueden ser pocas pero eficientes; profundidad va en P y N.", "Algunas son indispensables.", "", "Saturas y rompes rapport."]
    },
    {
      q: "Una pregunta comparativa útil en discovery es:",
      opts: [
        "¿Eres mejor que tu pareja?",
        "Entre departamento en La Florida o casa en Buin, ¿qué pesa más para ustedes?",
        "¿Cuál te gusta más, el rojo o el azul?",
        "¿Yo o el otro corredor?"
      ],
      correct: 1,
      whyCorrect: "Hace pensar al cliente en alternativas reales y revela criterios de decisión profundos. Útil para barriar opciones.",
      whyWrong: ["Ofensiva y sin valor profesional.", "", "Sin valor para perfilamiento.", "Inapropiada y poco profesional."]
    },
    {
      q: "Si el cliente responde a tu pregunta de Implicación con un silencio largo, debes:",
      opts: [
        "Cambiar de tema",
        "Repetir la pregunta",
        "Llenar el silencio inmediatamente",
        "Esperar 3-5 segundos: el cliente está procesando y dará la respuesta más valiosa después del silencio"
      ],
      correct: 3,
      whyCorrect: "El silencio es estratégico. Las respuestas más profundas aparecen tras el primer silencio. Llenarlo te roba el oro.",
      whyWrong: ["Pierdes la oportunidad emocional.", "Lo presiona; pierde profundidad.", "Pierdes la respuesta más valiosa.", ""]
    },
    {
      q: "Un error en SPIN es saltarse la fase de:",
      opts: [
        "Necesidad-Beneficio",
        "Implicación — saltar de Problema a Necesidad-Beneficio impide que el cliente conecte dolor con consecuencias",
        "Situación",
        "Cierre formal"
      ],
      correct: 1,
      whyCorrect: "Sin Implicación, el cliente no sufre el dolor presente; entonces tu beneficio futuro suena lejano y no urgente.",
      whyWrong: [
        "No es la fase típicamente saltada en discovery.",
        "",
        "Necesaria, pero la más saltada con éxito relativo es Implicación.",
        "No es parte de SPIN; es etapa posterior."
      ]
    },
    {
      q: "En SPIN, la pregunta '¿Cómo afectaría a tu pareja seguir arrendando otros 2 años?' es:",
      opts: ["Situación", "Saludo", "Implicación — conecta el dolor con consecuencias en otra persona relevante", "Cierre"],
      correct: 2,
      whyCorrect: "Es típica Implicación: extiende la consecuencia al círculo del cliente, ampliando el peso emocional.",
      whyWrong: ["No mapea contexto; ya asume problema.", "No es saludo.", "", "No es cierre comercial."]
    },
    {
      q: "La pregunta '¿Cuántas personas viven con ustedes?' es:",
      opts: ["Necesidad-Beneficio", "Implicación", "Situación — datos básicos para entender contexto", "Reproche"],
      correct: 2,
      whyCorrect: "Es típica Situación: dato básico de contexto familiar.",
      whyWrong: ["No proyecta beneficio futuro.", "No conecta dolor con consecuencias.", "", "No tiene tono de reproche."]
    },
    {
      q: "En SPIN, la mayor cantidad de preguntas se concentra en:",
      opts: [
        "Problema + Implicación — donde el cliente articula su dolor y proyecta consecuencias",
        "Necesidad-Beneficio",
        "Saludos iniciales",
        "Situación"
      ],
      correct: 0,
      whyCorrect: "Problema + Implicación es donde construyes el caso emocional y racional para que el cliente quiera la solución.",
      whyWrong: ["", "La N viene después del trabajo de P + I; pocas preguntas necesarias.", "No es estratégico.", "Saturar con Situación cansa."]
    },
    {
      q: "Si el cliente parece distraído durante el discovery, lo correcto es:",
      opts: [
        "Pausar empáticamente: '¿Hay algo más que esté ocupando tu mente ahora? ¿Prefieres que retomemos en otro momento?'",
        "Bromear",
        "Insistir y acelerar",
        "Ignorar y seguir"
      ],
      correct: 0,
      whyCorrect: "Validación + flexibilidad. Un cliente distraído no procesará tu mensaje; o lo recuperas o reagendas. Vender a media máquina daña la operación.",
      whyWrong: [
        "",
        "Disminuye el peso de la conversación profesional.",
        "Acelerar empeora la situación; pierdes al cliente.",
        "Falta total de empatía; pierdes el lead."
      ]
    },
    {
      q: "En una pareja con desacuerdo sobre comprar, las preguntas SPIN se hacen:",
      opts: [
        "Solo al hombre",
        "A cada uno por separado, mostrando interés genuino en la voz de ambos antes de buscar terreno común",
        "No hacer preguntas",
        "Solo a quien decide pagar"
      ],
      correct: 1,
      whyCorrect: "En decisiones familiares cada voz importa. Validar a ambos por separado los hace sentir escuchados y abre el camino al acuerdo.",
      whyWrong: ["Discriminación: ambos deciden y refieren.", "", "Sin SPIN no hay perfilamiento.", "Asume jerarquía; ofensivo y poco profesional."]
    },
    {
      q: "Una respuesta del cliente que valida que estás en buen SPIN es:",
      opts: [
        "'¿Cuándo terminamos?'",
        "'Wow, no había pensado en eso así. Tienes razón.'",
        "'No quiero hablar más'",
        "'Llevo apurado, dame solo precio'"
      ],
      correct: 1,
      whyCorrect: "Esta señal indica que el cliente conectó dolor con consecuencias por sí mismo. Es señal de que SPIN funcionó: el cliente se vendió la urgencia solo.",
      whyWrong: [
        "Señal de que la conversación es aburrida o invasiva.",
        "",
        "Quiere terminar; mal SPIN.",
        "Quiere transacción rápida; SPIN no se está produciendo."
      ]
    },
    {
      q: "La diferencia entre una pregunta abierta y cerrada en SPIN es:",
      opts: [
        "La abierta es agresiva",
        "Abierta invita a respuesta extensa con detalles ('¿Qué te frustra del mercado actual?'); Cerrada pide sí/no ('¿Tienes RSH?')",
        "La cerrada es para pareja",
        "Ninguna"
      ],
      correct: 1,
      whyCorrect: "En SPIN, las cerradas se usan para confirmar datos puntuales; las abiertas son la mayoría de la conversación de discovery.",
      whyWrong: ["La abierta invita; no es agresiva.", "", "No tiene relación con tipo de cliente.", "La diferencia es estructural y crítica."]
    }
  ],
  "5": [
    {
      q: "Según una encuesta de Zillow (2024), el porcentaje de compradores que reconoce haber llorado durante el proceso de compra es:",
      opts: ["0%", "50% del total · 65% Gen Z · 61% Millennials", "5%", "100%"],
      correct: 1,
      whyCorrect: "50% llora. No es exageración: es la decisión más cara y emocional de su vida. Validar el peso es parte del oficio.",
      whyWrong: ["Niega evidencia empírica clara.", "", "Subestima la magnitud emocional real.", "Sobre-optimista; no todos lloran."]
    },
    {
      q: "La curva emocional típica del comprador primerizo va por las fases:",
      opts: [">10 fases distintas", "Solo miedo", "Solo alegría", "Idealización → Confusión → Miedo → Decisión → Alivio → Duda post-cierre"],
      correct: 3,
      whyCorrect: "6 fases. Conocerlas te permite anticipar y acompañar. La duda post-cierre es real — un mensaje del corredor 48h después evita el remordimiento.",
      whyWrong: ["Sobre-complica un proceso medido.", "Ignora las fases positivas (idealización, alivio).", "Subestima la complejidad emocional.", ""]
    },
    {
      q: "El sesgo de 'aversión a la pérdida' (Kahneman) en el comprador primerizo significa:",
      opts: [
        "Solo en mujeres",
        "No existe",
        "El dolor de perder algo se siente ~2x más que el placer de ganarlo — el cliente teme más equivocarse que ganar la oportunidad",
        "Solo en hombres"
      ],
      correct: 2,
      whyCorrect: "Loss aversion ≈ 2x. Por eso paraliza tanto. Estrategia: bajar la sensación de riesgo (data, comparables, garantías) más que subir la del beneficio.",
      whyWrong: ["Aplica a todos por igual.", "Está validado por Premio Nobel y miles de estudios.", "", "Aplica a todos los seres humanos por igual."]
    },
    {
      q: "FOMO (Fear Of Missing Out) en mercado inmobiliario produce:",
      opts: [
        "Decisiones impulsivas en mercados al alza Y parálisis en mercados a la baja — ambas son el mismo sesgo",
        "Calma absoluta",
        "No tiene efecto",
        "Solo lo bueno"
      ],
      correct: 0,
      whyCorrect: "FOMO = arma de doble filo. El corredor profesional usa la urgencia genuina y rechaza la urgencia construida.",
      whyWrong: ["", "Lo opuesto al efecto real.", "Está medido y documentado en behavioral finance.", "Es destructivo si se manipula."]
    },
    {
      q: "En el mapa de Maslow aplicado al primera vivienda, la necesidad central es:",
      opts: [
        "Aventura y exploración",
        "Lujo y autorrealización",
        "Estatus solamente",
        "Seguridad (estabilidad económica + protección física) + Pertenencia (barrio, comunidad)"
      ],
      correct: 3,
      whyCorrect: "Seguridad + Pertenencia. El cliente no compra metros: compra dónde dormirá tranquilo y dónde criará a sus hijos.",
      whyWrong: ["No aplica a este perfil.", "Demasiado alto en la pirámide para primera vivienda.", "Estatus es secundario; seguridad es lo central.", ""]
    },
    {
      q: "La diferencia entre urgencia genuina y urgencia construida es:",
      opts: [
        "Solo el precio",
        "No hay diferencia",
        "Genuina = arriendo termina, embarazo, traslado, separación. Construida = 'compra hoy o se va' sin sustento real",
        "Es lo mismo"
      ],
      correct: 2,
      whyCorrect: "Genuina mueve, construida quema. Validar urgencia real es ético; inventarla mata la confianza al primer descubrimiento.",
      whyWrong: ["No tiene relación con precio.", "La diferencia es ética y operativamente crítica.", "", "Confunde manipulación con servicio."]
    },
    {
      q: "El termómetro de urgencia de TuMatch ordena:",
      opts: [
        "Necesidad real (deadline duro) > Deseo activo (timing flexible) > Impulso (reacción a estímulo)",
        "Solo deseo",
        "Solo impulso",
        "Solo en 1 nivel"
      ],
      correct: 0,
      whyCorrect: "3 niveles. Te dice cuánto tiempo invertir y cómo agendar. Un 'impulso' que no escala a 'deseo' en 30 días no es prioritario.",
      whyWrong: ["", "Falta diferenciación entre niveles.", "Solo impulso no es estrategia.", "Insuficiente para priorizar."]
    },
    {
      q: "El sesgo de 'anclaje' en el primera vivienda se manifiesta cuando:",
      opts: [
        "Solo en casas usadas",
        "El primer precio que ve el cliente marca su referencia mental para todo lo siguiente",
        "No existe",
        "Solo en propiedades caras"
      ],
      correct: 1,
      whyCorrect: "Por eso el corredor ancla con calculadora hipotecaria + comparables reales: si no anclas tú, el cliente ancla con un anuncio aleatorio.",
      whyWrong: [
        "Aplica a nuevas y usadas por igual.",
        "",
        "Es uno de los sesgos más documentados en behavioral economics.",
        "Aplica a cualquier rango de precios."
      ]
    },
    {
      q: "El 'efecto dotación' en visitas a propiedades hace que:",
      opts: [
        "Pierda interés",
        "Nada",
        "Una vez que el cliente se imagina viviendo allí, sobrevalora la propiedad y resiste compararla con otras",
        "Pierda dinero"
      ],
      correct: 2,
      whyCorrect: "Por eso activar visualización en visitas ('imaginen el desayuno aquí') es técnica probada. Es el sesgo que sutilmente cierra ventas.",
      whyWrong: ["Lo contrario: aumenta el deseo.", "Tiene efecto medible y validado.", "", "No tiene relación con dinero perdido."]
    },
    {
      q: "La 'prueba social' como sesgo significa:",
      opts: [
        "Solo en redes sociales",
        "Solo en jóvenes",
        "El cliente confía más cuando ve que otros como él ya tomaron la misma decisión (testimonios, casos reales)",
        "No existe"
      ],
      correct: 2,
      whyCorrect: "Por eso casos reales con permiso o testimonios concretos de tu cartera tienen un peso enorme en la decisión. Cialdini lo documentó.",
      whyWrong: [
        "Aplica fuera de redes sociales también.",
        "Aplica a todas las edades por igual.",
        "",
        "Es uno de los 6 principios de Cialdini, validado."
      ]
    },
    {
      q: "En la fase de 'duda post-cierre', el corredor profesional debe:",
      opts: [
        "Cobrar más",
        "Llamar 10 veces al día",
        "Olvidarse del cliente",
        "Enviar mensaje proactivo 48-72h después: 'Tomaste la decisión correcta, los datos así lo confirman'"
      ],
      correct: 3,
      whyCorrect: "La duda post-cierre es real (también llamada 'remordimiento del comprador'). Un mensaje confirmador en el momento correcto cierra la fase emocional bien.",
      whyWrong: ["No es ético cobrar adicional sin servicio adicional.", "Acoso, no profesionalismo.", "Pierdes el cliente y futuros referidos.", ""]
    },
    {
      q: "El principio de reciprocidad (Cialdini) aplicado al corredor inmobiliario establece que:",
      opts: [
        "Al entregar valor profesional de forma previa y sin contraprestación (simulaciones, guías técnicas, asesorías puntuales), el cliente desarrolla un impulso natural a retribuir con confianza y con la decisión de compra",
        "No constituye un principio relevante para el rubro",
        "Consiste en solicitar favores personales",
        "Consiste en cobrar por cada interacción"
      ],
      correct: 0,
      whyCorrect: "Por esta razón el Cultivo Relacional con 80% de contenido formativo construye una cuenta de reciprocidad: al llegar el momento de decidir, el cliente recuerda al corredor que aportó valor sin pedir nada a cambio.",
      whyWrong: [
        "",
        "Está científicamente documentado por Cialdini en numerosos estudios experimentales.",
        "No se trata de manipulación sino de construcción estructurada de relación profesional.",
        "Es exactamente lo opuesto al principio de reciprocidad."
      ]
    },
    {
      q: "Un cliente con 'miedo paralizante' debe trabajarse con:",
      opts: [
        "Bajar la sensación de riesgo: comparables, plan B, segunda opinión, datos. La calma se contagia",
        "Ignorarlo",
        "Más presión y urgencia",
        "Burlas"
      ],
      correct: 0,
      whyCorrect: "Miedo no se vence con presión: se vence con información que reduce incertidumbre. La calma del corredor es contagiosa.",
      whyWrong: ["", "Pierde el lead.", "Empeora el miedo y huye el cliente.", "Daña la confianza y reputación."]
    },
    {
      q: "En la curva emocional, la fase de 'decisión' (punto de quiebre) requiere del corredor:",
      opts: [
        "Vacaciones",
        "Pasividad",
        "Presencia activa: el corredor que está físicamente o telefónicamente presente en ese momento gana la operación",
        "Ausencia"
      ],
      correct: 2,
      whyCorrect: "El cliente no se queda solo en el momento del salto. Tu presencia comunica seguridad y reduce el costo emocional de decidir.",
      whyWrong: ["Mal momento para no estar.", "Pasividad = abandono percibido.", "", "Pérdida casi segura de la operación."]
    },
    {
      q: "El 'sesgo de confirmación' del comprador primerizo significa:",
      opts: ["Confirma todo", "No existe", "Solo escucha lo que confirma su idea previa; ignora data que la contradice", "Cuestiona todo"],
      correct: 2,
      whyCorrect: "Por eso primero validas su idea ('entiendo por qué piensas eso') y después contrastas con dato. Si solo contradices, el cliente se cierra.",
      whyWrong: ["Es lo opuesto al sesgo.", "Es uno de los sesgos más estudiados.", "", "No corresponde al sesgo de confirmación."]
    },
    {
      q: "La 'dotación emocional' al barrio donde el cliente creció genera:",
      opts: [
        "Indecisión total",
        "Resistencia a comprar en otra zona aunque económicamente convenga, por apego identitario al barrio de origen",
        "Nada",
        "Aceptación universal"
      ],
      correct: 1,
      whyCorrect: "Por eso preguntar '¿en qué barrio creciste?' es información valiosa. Si la oferta económica está fuera de su zona afectiva, prepara argumentos de pertenencia futura.",
      whyWrong: ["No genera indecisión; genera preferencia clara.", "", "Genera resistencia psicológica medible.", "Lo opuesto: genera resistencia."]
    },
    {
      q: "En cliente con FOMO ascendente (mercado al alza), el corredor profesional:",
      opts: [
        "Niega el mercado",
        "Valida la urgencia genuina si la hay (subsidio que expira, propiedad con varias ofertas) y rechaza inventar urgencia falsa",
        "Refuerza el FOMO sin medida",
        "Le miente"
      ],
      correct: 1,
      whyCorrect: "FOMO genuino acelera; FOMO inventado destruye reputación. La línea ética es clara.",
      whyWrong: ["Pierdes credibilidad técnica.", "", "Manipulación que destruye relación de largo plazo.", "Es ilegal y antiético."]
    },
    {
      q: "La frase de Carl Rogers 'escuchar es una de las fuerzas más poderosas para el cambio' aplica al corretaje porque:",
      opts: [
        "Es metáfora poética",
        "No aplica",
        "Solo aplica a psicoterapia",
        "El cliente que se siente escuchado profundamente confía y decide; el que se siente vendido se cierra y huye"
      ],
      correct: 3,
      whyCorrect: "Aplica directamente. El método clínico de escucha activa traducido a corretaje es lo que distingue al pro del intermediario.",
      whyWrong: ["Es ciencia validada, no metáfora.", "Aplica a cualquier relación humana de confianza.", "Aplica más allá de la consulta clínica.", ""]
    },
    {
      q: "En la fase de 'confusión' del comprador primerizo, el corredor TuMatch:",
      opts: [
        "Acumula tecnicismos",
        "Acelera con más información",
        "Le grita",
        "Simplifica: usa calculadora hipotecaria + 1 sola decisión a la vez. Reduce la sobrecarga cognitiva"
      ],
      correct: 3,
      whyCorrect: "Confusión se cura con simplificación, no con más data. Un cliente confundido no decide; un cliente claro avanza.",
      whyWrong: ["Pierdes al cliente en jerga incomprensible.", "Empeora la confusión.", "Pérdida total del cliente.", ""]
    },
    {
      q: "La validación emocional ('entiendo que esto te angustia') sirve para:",
      opts: [
        "Aumentar el miedo",
        "Cerrar la operación inmediatamente",
        "Bajar la guardia y abrir la conversación racional posterior — sin validación, los números no entran",
        "Manipular"
      ],
      correct: 2,
      whyCorrect: "Primero emoción, después lógica. Cliente con miedo activo no procesa números. Validar abre el cerebro racional.",
      whyWrong: ["Lo opuesto: la calma.", "No es cierre directo; es preparación para conversación racional.", "", "Es servicio, no manipulación."]
    }
  ],
  "6": [
    {
      q: "La escucha activa fue conceptualizada principalmente por:",
      opts: ["Carl Rogers (psicología humanista, 1957)", "Steve Jobs", "Sigmund Freud", "Ningún psicólogo"],
      correct: 0,
      whyCorrect: "Carl Rogers — 1957. Postuló 3 condiciones: aceptación incondicional, congruencia y empatía. Base de la psicoterapia humanista.",
      whyWrong: ["", "Steve Jobs no fue psicólogo.", "Freud trabajó en psicoanálisis con otra metodología.", "Está claramente atribuida a Rogers."]
    },
    {
      q: "Los 5 niveles de escucha (Stephen Covey) son:",
      opts: ["Ignorar → Fingir → Selectiva → Atenta → Empática", "Tres: oír, escuchar, comprender", "Solo uno: oír", "Diez niveles distintos"],
      correct: 0,
      whyCorrect: "Solo el nivel 5 (empática) genera confianza profunda. Los corredores promedio se quedan en 'atenta' (escuchan palabras); los de élite suben a empática (escuchan emoción).",
      whyWrong: ["", "Es un modelo de 5 niveles, no 3.", "Subestima el modelo de Covey.", "Sobre-complica un modelo claro."]
    },
    {
      q: "El parafraseo en escucha activa es:",
      opts: [
        "Interrumpir constantemente",
        "Repetir como loro las palabras exactas",
        "Resumir con tus palabras lo que el cliente dijo: 'Entonces lo que más te preocupa es...' — confirma comprensión y baja defensas",
        "Callar siempre"
      ],
      correct: 2,
      whyCorrect: "Parafraseo = espejo verbal. El cliente al escucharse sintetizado siente que SÍ lo entendiste.",
      whyWrong: [
        "Interrumpir es lo opuesto a escucha activa.",
        "Repetir literal molesta y suena robótico.",
        "",
        "No es solo silencio; debes devolver comprensión."
      ]
    },
    {
      q: "El silencio estratégico de 3 segundos después de una pregunta sirve para:",
      opts: [
        "Dar espacio al cliente a profundizar — la respuesta más valiosa suele aparecer después del primer silencio",
        "Incomodar al cliente",
        "Cerrar la reunión",
        "Apurar la decisión"
      ],
      correct: 0,
      whyCorrect: "3 segundos. El cliente da una respuesta superficial; el corredor calla; el cliente complementa con la verdadera. La mayoría rellena el silencio y se pierde el oro.",
      whyWrong: ["", "No es para incomodar; es para dar espacio.", "No es cierre; es discovery profundo.", "Lo opuesto al efecto buscado."]
    },
    {
      q: "La validación emocional ('entiendo que esto te angustia, es la decisión más grande de tu vida') logra:",
      opts: ["Bajar la guardia y abrir la conversación racional posterior", "Cerrar al instante", "Aumentar el miedo", "Manipular"],
      correct: 0,
      whyCorrect: "Primero emoción, después lógica. Un cliente con miedo activo no procesa números. Si validas y reconoces, baja la guardia.",
      whyWrong: ["", "No es cierre técnico; es preparación emocional.", "Lo opuesto: produce calma y apertura.", "Es empatía genuina, no manipulación."]
    },
    {
      q: "La comunicación no verbal en una reunión con primer comprador influye aproximadamente:",
      opts: ["~55% en la percepción de confianza (Mehrabian) — postura, tono, contacto visual, ritmo", "100%", "No influye", "0%"],
      correct: 0,
      whyCorrect: "~55% no verbal según Mehrabian. El cliente decide si confía antes de procesar tu argumento. Postura abierta, tono cálido, ritmo pausado hacen más que el mejor PowerPoint.",
      whyWrong: [
        "",
        "Sobreestima; las palabras también importan (~7%).",
        "Está medido y documentado.",
        "Subestima radicalmente la importancia de lo no verbal."
      ]
    },
    {
      q: "Empatía con un comprador migrante (latinoamericano con residencia definitiva) requiere:",
      opts: [
        "Tratar igual que a un local",
        "Rechazo por mayor riesgo",
        "Reconocer la barrera de información (sistema chileno desconocido), validar el sueño cumplido y educar sin paternalismo",
        "Comisión doble"
      ],
      correct: 2,
      whyCorrect: "Educar sin paternalismo. El migrante valora muchísimo a quien lo guía con respeto.",
      whyWrong: [
        "Ignora el contexto cultural y la barrera informativa.",
        "Discriminación; ilegal y antiético.",
        "",
        "Ilegal cobrar diferente por nacionalidad."
      ]
    },
    {
      q: "En el modelo de Carl Rogers, las 3 condiciones para generar cambio profundo son:",
      opts: ["Negociación dura", "Hablar mucho + presionar + cerrar", "Aceptación incondicional + congruencia + empatía", "Solo escuchar"],
      correct: 2,
      whyCorrect: "Las 3 condiciones de Rogers son la base de la psicología humanista y han sido validadas por décadas en clínica y luego en negocios.",
      whyWrong: ["No es el modelo Rogers.", "Lo opuesto al método rogeriano.", "", "Es una de las condiciones, pero faltan dos."]
    },
    {
      q: "La 'congruencia' en el modelo Rogers significa:",
      opts: [
        "Que el corredor sea genuino y consistente entre lo que piensa, siente y dice — sin máscaras",
        "Negar lo que sientes",
        "Que el corredor finja",
        "Cobrar más"
      ],
      correct: 0,
      whyCorrect: "El cliente detecta falsedad inmediatamente. Congruencia genera confianza profunda; máscara genera desconfianza inconsciente.",
      whyWrong: ["", "Es lo opuesto: ser honesto contigo mismo.", "Lo opuesto a la congruencia.", "Sin relación con el concepto."]
    },
    {
      q: "El contacto visual ideal en una reunión de discovery es:",
      opts: [
        "100% mirando al cliente",
        "Mirando el techo",
        "70% del tiempo contacto visual + 30% mirar referencias (planos, calculadora, tablet)",
        "0% — incómodo"
      ],
      correct: 2,
      whyCorrect: "70/30. Demuestra atención sin generar incomodidad por mirada penetrante.",
      whyWrong: [
        "Mirada fija intimida y genera resistencia.",
        "Comunicación cero.",
        "",
        "Falta de mirada se interpreta como falta de interés o deshonestidad."
      ]
    },
    {
      q: "Una pareja con desacuerdo sobre comprar requiere del corredor:",
      opts: [
        "Acelerar el cierre",
        "Tomar partido por uno",
        "Solo escuchar al hombre",
        "No tomar partido. Pregunta a cada uno por separado: '¿qué es lo más importante para ti?' Resume y muestra terreno común"
      ],
      correct: 3,
      whyCorrect: "En decisiones familiares cada voz cuenta. Validar a ambos abre el camino al acuerdo.",
      whyWrong: [
        "Acelerar antes de resolver el desacuerdo es muerte de la operación.",
        "Tomar partido garantiza perder a uno de los dos.",
        "Discriminación; ilegal y poco profesional.",
        ""
      ]
    },
    {
      q: "Un cliente con 'miedo paralizante' requiere del corredor:",
      opts: [
        "Burlarse del miedo",
        "Acelerar",
        "Bajar la sensación de riesgo: comparables, plan B, segunda opinión, contraste con datos. La calma se contagia",
        "Empuje con beneficios"
      ],
      correct: 2,
      whyCorrect: "Miedo se cura con información que reduce incertidumbre, no con presión. La calma del corredor es contagiosa.",
      whyWrong: ["Daña reputación y se pierde el lead.", "Empeora el miedo.", "", "Empeora el miedo y huye el cliente."]
    },
    {
      q: "La técnica de 'espejo emocional' en escucha activa consiste en:",
      opts: [
        "Imitar la voz del cliente",
        "Mirar al espejo",
        "Reflejar la emoción del cliente con tu lenguaje verbal y no verbal: si está angustiado, hablas pausado y validas; si está entusiasmado, acompañas el ritmo",
        "Burlarse"
      ],
      correct: 2,
      whyCorrect: "Espejo emocional construye sintonía rápida. El cliente percibe que estás 'en su frecuencia' antes de decidir si confiar.",
      whyWrong: ["Imitar suena robótico y artificial.", "Sin sentido literal.", "", "Falta total de profesionalismo."]
    },
    {
      q: "Un nivel 4 de escucha (atenta) en Covey significa:",
      opts: [
        "No prestar atención",
        "Escuchar empáticamente",
        "Escuchar las palabras con foco — captas datos pero pierdes la emoción y el subtexto",
        "Escuchar todo perfecto"
      ],
      correct: 2,
      whyCorrect: "Es buen escuchador 'promedio'. Pero el salto profesional está en el nivel 5 (empática).",
      whyWrong: ["Es un nivel real de escucha, atento.", "Es nivel 5, distinto.", "", "Sobreestima; queda por debajo del nivel 5."]
    },
    {
      q: "En reunión de discovery, el ritmo del habla del corredor debe ser:",
      opts: [
        "Robótico",
        "Acelerado para no aburrir",
        "Susurrante",
        "Pausado, calmo, con pausas naturales — comunica seguridad y permite procesar al cliente"
      ],
      correct: 3,
      whyCorrect: "Ritmo pausado comunica autoridad y permite al cliente procesar sin abrumarlo. Acelerado se interpreta como ansiedad/presión.",
      whyWrong: ["Sin calidez ni autoridad.", "Ansiedad percibida; el cliente se pone alerta.", "Suena raro y poco profesional.", ""]
    },
    {
      q: "Un comprador angustiado por el monto del pie debe ser respondido con:",
      opts: [
        "'Igual te vas a endeudar'",
        "Ignorar el comentario",
        "Validación: 'Es totalmente entendible — el pie es la barrera más concreta que sienten los primer comprador' + plan: 'veamos qué subsidios podrían reducirlo'",
        "'No tienes alternativa'"
      ],
      correct: 2,
      whyCorrect: "Validación + plan concreto. La angustia se responde con empatía y solución, no con presión.",
      whyWrong: ["Falta de empatía; pierdes al cliente.", "Daño a la confianza.", "", "Manipulación emocional negativa."]
    },
    {
      q: "El silencio empático (no rellenar el silencio del cliente que está procesando emoción) sirve para:",
      opts: [
        "Incomodar",
        "Cerrar la conversación",
        "Dar espacio para que el cliente exprese lo que está sintiendo, especialmente lo difícil de decir",
        "Cobrar"
      ],
      correct: 2,
      whyCorrect: "El silencio empático es generoso: dice 'estoy contigo, no tengo prisa'. Da espacio a lo importante.",
      whyWrong: ["Lo opuesto al efecto.", "Lo opuesto: abre conversación.", "", "Sin relación."]
    },
    {
      q: "En una reunión presencial, la postura corporal abierta del corredor (hombros relajados, no cruzado de brazos, cuerpo orientado al cliente) comunica:",
      opts: ["Disponibilidad, escucha y confianza — no verbal del 55% de Mehrabian en acción", "Cansancio", "Aburrimiento", "Agresividad"],
      correct: 0,
      whyCorrect: "Postura abierta es lectura inmediata e inconsciente del cliente. Brazos cruzados se leen como cierre o resistencia.",
      whyWrong: ["", "Cansancio se lee distinto (postura caída).", "Lo opuesto a aburrimiento.", "Lo opuesto a agresión."]
    },
    {
      q: "Una frase plantilla útil para validar emoción del cliente con miedo es:",
      opts: [
        "'Entiendo que esto te angustia — es la decisión más grande de tu vida; tiene todo el sentido sentirlo así'",
        "'No es para tanto'",
        "'Supéralo'",
        "'Eres débil'"
      ],
      correct: 0,
      whyCorrect: "Validación específica + universalización ('cualquiera lo sentiría así'). Quita la sensación de ser raro o débil.",
      whyWrong: ["", "Minimiza y pierde al cliente.", "Falta brutal de empatía.", "Insulto."]
    },
    {
      q: "La diferencia clave entre escucha activa y escucha pasiva es:",
      opts: [
        "Activa cobra más",
        "Activa: parafrasea, valida, pregunta para profundizar. Pasiva: solo deja hablar sin devolver comprensión",
        "Pasiva es mejor",
        "Ninguna"
      ],
      correct: 1,
      whyCorrect: "En escucha activa devuelves al cliente que lo entendiste. Es la diferencia entre escuchar y oír.",
      whyWrong: ["No tiene relación con honorarios.", "", "Es objetivamente menos efectiva en discovery.", "La diferencia es estructural y operativa."]
    }
  ],
  "7": [
    {
      q: "El método LAARC para manejo de objeciones es:",
      opts: [
        "Discutir hasta ganar",
        "Solo responder rápido",
        "Solo escuchar",
        "Listen (Escuchar) → Acknowledge (Reconocer) → Assess (Evaluar) → Respond (Responder) → Confirm (Confirmar)"
      ],
      correct: 3,
      whyCorrect: "L-A-A-R-C. Versión avanzada del LAER. El paso 'Confirm' al final ('¿Resolví tu inquietud?') distingue al profesional.",
      whyWrong: ["Lo opuesto al método; escala el conflicto.", "Saltar pasos pierde la operación.", "Es 5 pasos, no 1.", ""]
    },
    {
      q: "Ante la objeción 'Necesito pensarlo / consultarlo con la familia', el corredor TuMatch:",
      opts: [
        "Presiona",
        "Insulta",
        "Valida ('claro, es una decisión familiar') + pregunta ('¿qué información específica necesitarían?') + ofrece acompañar la conversación familiar",
        "Se va sin más"
      ],
      correct: 2,
      whyCorrect: "Validar + indagar + acompañar. 'Pensarlo' suele ser miedo no resuelto. Pregunta qué falta saber.",
      whyWrong: ["Presión rompe la relación y huye el cliente.", "Pierde reputación.", "", "Pierde el lead innecesariamente."]
    },
    {
      q: "Ante la objeción 'Es mucho dinero, prefiero seguir arrendando', la respuesta TuMatch incluye:",
      opts: [
        "Burla",
        "Decir que sí",
        "Calcular el arriendo perdido a 5/10 años, mostrar diferencia entre dividendo y arriendo, simular construcción de patrimonio en calculadora hipotecaria",
        "Solo bajar precio"
      ],
      correct: 2,
      whyCorrect: "Visualizar el costo del NO comprar. La calculadora hipotecaria hace tangible el costo de la inacción.",
      whyWrong: ["Daña reputación profesional.", "Renuncias al servicio sin valor.", "", "No es la solución; es educación financiera."]
    },
    {
      q: "Ante 'El banco me va a rechazar', la respuesta correcta es:",
      opts: [
        "Esperar 6 meses",
        "Mentir y prometer",
        "Decir 'tienes razón, vete'",
        "Pre-evaluar capacidad con calculadora hipotecaria + revisar Dicom + presentar 2-3 bancos en paralelo, jamás uno solo"
      ],
      correct: 3,
      whyCorrect: "Pre-evaluación + 2-3 bancos paralelos multiplica la probabilidad de aprobación. La pre-evaluación quita el miedo del rechazo abstracto.",
      whyWrong: ["Pérdida del lead por inacción.", "Mentir destruye reputación de carrera.", "Lo opuesto al servicio profesional.", ""]
    },
    {
      q: "La biblioteca complementaria recomendada para profundizar en el cliente comprador incluye lecturas como:",
      opts: [
        "Solo audiolibros sin contenido",
        "Solo TikTok",
        "SPIN Selling (Rackham), Influencia (Cialdini), Pre-Suasión (Cialdini), La era de la empatía (de Waal), Pensar rápido pensar despacio (Kahneman)",
        "Ninguna lectura necesaria"
      ],
      correct: 2,
      whyCorrect: "5 lecturas estructurales. Te dan vocabulario psicológico para nombrar lo que el cliente siente.",
      whyWrong: [
        "No tiene contenido formativo profundo.",
        "TikTok aporta entretenimiento; no formación estructural.",
        "",
        "La formación es ventaja competitiva."
      ]
    },
    {
      q: "Recursos audiovisuales recomendados para el corredor son:",
      opts: [
        "Solo memes",
        "Solo radio AM",
        "Nada audiovisual",
        "Entrevistas a Carl Rogers en YouTube, charlas TED de Brené Brown sobre vulnerabilidad, podcast 'Pivote Inmobiliario', Ipsos Monitor de Vivienda anual"
      ],
      correct: 3,
      whyCorrect: "Video + audio = formación continua. 30 min/semana en el auto cambia tu carrera.",
      whyWrong: ["Sin valor formativo.", "Limita radicalmente las fuentes.", "Imposible crecer sin formación.", ""]
    },
    {
      q: "El cierre real del manejo de objeciones (paso 'Confirm') consiste en:",
      opts: [
        "Despedir al cliente",
        "Pasar al precio",
        "Asumir que se resolvió",
        "Preguntar explícitamente: '¿Esa respuesta resolvió tu inquietud?' o '¿Quedó algo todavía dándote vueltas?'"
      ],
      correct: 3,
      whyCorrect: "Confirmar = nunca asumir. Una objeción sin confirmación queda viva en la mente del cliente y reaparece al firmar.",
      whyWrong: ["Pérdida innecesaria del lead.", "Salto sin cerrar la objeción anterior.", "Asumir es el error que pierde firmas en último minuto.", ""]
    },
    {
      q: "Ante 'Quiero ver más propiedades antes de decidir', el corredor LAARC:",
      opts: [
        "Le exige decidirse hoy",
        "L: escucha. A: 'tiene sentido comparar'. A: '¿qué te falta ver específicamente?'. R: 'te propongo 3 propiedades adicionales muy curadas'. C: '¿te hace sentido?'",
        "Le miente diciendo que no hay más",
        "Se enoja"
      ],
      correct: 1,
      whyCorrect: "LAARC completo: validar + indagar específico + propuesta concreta + confirmar. Es la única forma de avanzar respetando el ritmo del cliente.",
      whyWrong: ["Presión rompe el rapport y huye.", "", "Mentir destruye carrera.", "Pérdida total de profesionalismo."]
    },
    {
      q: "Ante 'No me gusta el barrio que me propones', la respuesta LAARC incluye:",
      opts: [
        "L+A: 'tiene total sentido'. A: '¿qué específicamente no te calza: seguridad, conectividad, colegios?'. R: 'replanteamos: con tu capacidad UF X y subsidio Y, los barrios viables son A, B, C — te llevo a recorrerlos un sábado'. C: '¿te hace sentido?'",
        "'Tendrás que aceptarlo'",
        "Le insiste con el mismo barrio",
        "Se va"
      ],
      correct: 0,
      whyCorrect: "Indagar específico, replantear opciones reales, ofrecer experiencia de barrio. Cliente conecta con barrio recorriéndolo, no en mapa.",
      whyWrong: ["", "Falta de servicio; pérdida del lead.", "Insistencia sin escuchar = pérdida del lead.", "Pérdida innecesaria."]
    },
    {
      q: "Ante 'El subsidio no me alcanza', el corredor LAARC:",
      opts: [
        "Le sube precio",
        "Revisa contigo: 1) tramo correcto según RSH, 2) combinación con Subsidio al Crédito (0,61–1,16% descuento en tasa), 3) propiedades en zonas DS19. Entrega 3 alternativas concretas en 48h",
        "Le dice 'es lo que hay'",
        "Le ofrece menos"
      ],
      correct: 1,
      whyCorrect: "Revisión técnica completa + alternativas concretas. Muchas veces el cliente subestima cuánto subsidio puede acceder.",
      whyWrong: ["Antiético y poco profesional.", "", "Falta de servicio profesional; pérdida.", "Lo opuesto al servicio."]
    },
    {
      q: "El paso 'Acknowledge' en LAARC consiste en:",
      opts: [
        "Reconocer la objeción sin defenderte ni discutir: 'Entiendo perfectamente esa preocupación, es muy razonable'",
        "Discutir con el cliente",
        "Burlarse",
        "Ignorar"
      ],
      correct: 0,
      whyCorrect: "Reconocer baja la guardia del cliente. Defenderse o discutir activa la confrontación y rompe el rapport.",
      whyWrong: ["", "Lo opuesto al método; pierde la operación.", "Falta de profesionalismo.", "Lo opuesto al método."]
    },
    {
      q: "El paso 'Assess' en LAARC consiste en:",
      opts: [
        "Asumir que entendiste todo",
        "Evaluar si la objeción es real o si esconde otra cosa más profunda — preguntar: '¿lo que más te preocupa es X o también hay algo más detrás?'",
        "Solo escuchar",
        "Solo asentir"
      ],
      correct: 1,
      whyCorrect: "La pregunta 'Assess' descubre si la objeción explícita esconde una más profunda (miedo financiero, conflicto familiar, mala experiencia previa).",
      whyWrong: ["Asumir te lleva a responder a la objeción equivocada.", "", "Falta el paso clave de indagar.", "Falta el paso clave de indagar."]
    },
    {
      q: "Una objeción 'oculta' típica detrás de 'necesito pensarlo' es:",
      opts: [
        "El corredor le cae mal",
        "Solo precio",
        "Miedo a equivocarse + falta de confianza en el corredor + necesidad de aprobación de un tercero (pareja/padres)",
        "No hay nada oculto"
      ],
      correct: 2,
      whyCorrect: "Miedo + falta de confianza + influencia externa. Por eso 'pensarlo' se trabaja con información que reduce miedo + acompañar la conversación familiar.",
      whyWrong: [
        "Es posible pero raramente la causa principal.",
        "Reduce a 1 sola variable; no es así.",
        "",
        "Subestima la complejidad; suele haber algo detrás."
      ]
    },
    {
      q: "Ante una objeción agresiva del cliente ('todos los corredores son iguales'), la respuesta LAARC profesional es:",
      opts: [
        "Cortar la reunión",
        "L: escucha sin defender. A: 'entiendo, debe haber tenido alguna experiencia que justifica eso'. A: '¿qué le pasó específicamente?' R: explicar tu protocolo distinto. C: '¿te tranquiliza este enfoque?'",
        "Discutir y defender el gremio",
        "Insultar de vuelta"
      ],
      correct: 1,
      whyCorrect: "Detrás de la generalización hay una mala experiencia concreta. Indagar + diferenciarte por protocolo es la respuesta profesional.",
      whyWrong: [
        "Pierdes la oportunidad de demostrar valor distinto.",
        "",
        "Lo opuesto al método; escala el conflicto.",
        "Pérdida total de profesionalismo y reputación."
      ]
    },
    {
      q: "La 'biblioteca complementaria' del corredor TuMatch debe revisarse a un ritmo de:",
      opts: [
        "Nunca",
        "1 libro al trimestre + 1 charla al mes + Ipsos Monitor anual = formación continua sin saturar",
        "Una vez en la vida",
        "Diariamente"
      ],
      correct: 1,
      whyCorrect: "Ritmo sostenible y aplicable. La formación continua es la ventaja competitiva más subestimada.",
      whyWrong: ["Estancamiento garantizado.", "", "Insuficiente; el conocimiento se desactualiza.", "Imposible mantener; saturación."]
    },
    {
      q: "El estudio Ipsos Monitor de Vivienda 2025 es útil para citarlo al cliente porque:",
      opts: [
        "Eleva tu autoridad técnica con dato oficial: 'según Ipsos, el 46% de los chilenos como tú prioriza seguridad — vamos a verla con data'",
        "Cuesta dinero acceder",
        "Es secreto",
        "No es útil"
      ],
      correct: 0,
      whyCorrect: "Citar fuentes oficiales eleva tu autoridad y diferencia tu pitch del corredor que solo da opinión.",
      whyWrong: ["", "Es de acceso gratuito.", "Es público.", "Es altamente útil para autoridad técnica."]
    },
    {
      q: "En el manejo de una objeción difícil (cliente enojado), la primera reacción del corredor profesional es:",
      opts: [
        "Pegar la vuelta y huir",
        "Defenderse",
        "Discutir",
        "Escucha completa sin interrumpir + respiración profunda + validación: 'entiendo tu molestia'"
      ],
      correct: 3,
      whyCorrect: "Escucha + validación baja el voltaje emocional. Defenderse o discutir escala el conflicto y termina la relación.",
      whyWrong: [
        "Pierdes oportunidad de recuperar la relación.",
        "Escala el conflicto; pierde la operación.",
        "Confrontación abierta = pérdida garantizada.",
        ""
      ]
    },
    {
      q: "Una buena charla TED para corredor inmobiliario es:",
      opts: [
        "Solo memes virales",
        "Solo TED en inglés sin subtítulos",
        "Brené Brown — 'El poder de la vulnerabilidad' (sobre por qué la empatía requiere arriesgarse a ser vulnerable)",
        "No hay charlas útiles"
      ],
      correct: 2,
      whyCorrect: "Brené Brown ha cambiado la forma en que líderes y corredores entienden la empatía. Disponible en español con subtítulos.",
      whyWrong: ["Sin valor formativo.", "Disponibles con subtítulos en español.", "", "Hay decenas de charlas útiles para el oficio."]
    },
    {
      q: "El paso 'Confirm' en LAARC se ejecuta:",
      opts: [
        "Solo si el cliente lo pide",
        "Después de cada respuesta a una objeción específica — para asegurar que efectivamente la respuesta resolvió la inquietud",
        "Una sola vez al final del año",
        "Solo en el contrato final"
      ],
      correct: 1,
      whyCorrect: "Cada objeción merece su propio Confirm. Es lo que distingue al pro: cierra el bucle, no asume.",
      whyWrong: [
        "Es responsabilidad del corredor, no del cliente.",
        "",
        "Insuficiente; debe ser por objeción.",
        "Demasiado tarde; las objeciones se cierran cuando aparecen."
      ]
    },
    {
      q: "La diferencia entre LAER y LAARC es:",
      opts: [
        "LAARC añade el segundo 'A' (Assess) y el 'C' (Confirm) — más profundo y profesional que LAER",
        "LAARC es peor",
        "Ninguna",
        "LAER es de Carl Rogers"
      ],
      correct: 0,
      whyCorrect: "LAARC es la evolución profesional del LAER, con 2 pasos adicionales que cierran mejor las objeciones complejas.",
      whyWrong: ["", "Es objetivamente más completo.", "Hay diferencia clara: 5 pasos vs 4.", "LAER no es de Rogers; es metodología comercial moderna."]
    }
  ]
};

const finalQuestions = [
  {
    q: "El comprador primera vivienda en Chile representa aproximadamente del mercado de viviendas:",
    opts: ["56% — el segmento dominante", "10%", "100%", "2%"],
    correct: 0,
    whyCorrect: "56,11% según Ipsos Monitor de Vivienda 2025.",
    whyWrong: ["", "Subestima radicalmente.", "Sobreestima.", "Subestima radicalmente."]
  },
  {
    q: "El método SPIN ordena las preguntas en:",
    opts: ["Solo abiertas", "Sin orden", "Problema → Solución", "Situación → Problema → Implicación → Necesidad-Beneficio"],
    correct: 3,
    whyCorrect: "S-P-I-N. Diseñado por Neil Rackham (1988).",
    whyWrong: ["No es solo formato; es secuencia.", "El orden importa.", "Salta pasos clave.", ""]
  },
  {
    q: "El porcentaje de compradores que reconoce llorar durante el proceso es (Zillow):",
    opts: ["100%", "5%", "50% (65% Gen Z, 61% Millennials)", "0%"],
    correct: 2,
    whyCorrect: "50% confirma la magnitud emocional.",
    whyWrong: ["Sobre-optimista.", "Subestima.", "", "Niega evidencia."]
  },
  {
    q: "La pirámide de los 100 (red caliente/tibia) se compone de:",
    opts: ["50/50", "100 fríos", "Top 20 + 50 medios + 30 dormidos", "Sin estructura"],
    correct: 2,
    whyCorrect: "20 / 50 / 30. Concentra esfuerzo en top 20 y reactiva los 30 dormidos.",
    whyWrong: ["Falta diferenciación de estados.", "Confunde fríos con red personal.", "", "Sin estructura no hay gestión."]
  },
  {
    q: "El sesgo de aversión a la pérdida (Kahneman) significa:",
    opts: ["Perder duele ~2x más que ganar — el primera vivienda lo siente intensamente", "No existe", "Igual al deseo", "Solo en mujeres"],
    correct: 0,
    whyCorrect: "Loss aversion ≈ 2x. Estrategia: bajar la sensación de riesgo.",
    whyWrong: ["", "Está validado por Premio Nobel.", "No es igual al deseo.", "Aplica universalmente."]
  },
  {
    q: "La escucha activa fue desarrollada principalmente por:",
    opts: ["Freud", "Cialdini", "Maslow", "Carl Rogers (1957) — psicología humanista"],
    correct: 3,
    whyCorrect: "Carl Rogers con sus 3 condiciones: aceptación, congruencia, empatía.",
    whyWrong: ["Distinto método.", "Es de persuasión, no escucha activa.", "Es de motivación, no escucha.", ""]
  },
  {
    q: "El método LAARC para objeciones es:",
    opts: ["Solo escuchar", "Solo precio", "Solo discutir", "Listen → Acknowledge → Assess → Respond → Confirm"],
    correct: 3,
    whyCorrect: "L-A-A-R-C. El paso Confirm distingue al profesional.",
    whyWrong: ["Solo escuchar es 1/5 del método.", "Tema irrelevante al método.", "Lo opuesto al método.", ""]
  },
  {
    q: "La calculadora hipotecaria TuMatch sirve principalmente para:",
    opts: ["Decoración", "Cobrar", "Imprimir", "Convertir el sueño abstracto en cifras concretas y bajar la ansiedad de incertidumbre"],
    correct: 3,
    whyCorrect: "Cifras = control percibido. Acelera la confianza.",
    whyWrong: ["Es funcional.", "No es módulo financiero.", "No es soporte físico.", ""]
  },
  {
    q: "El error #1 de discovery en primera vivienda es:",
    opts: ["Sonreír", "Escuchar", "Anotar", "Hablar más que escuchar — saltar a propuesta sin entender contexto"],
    correct: 3,
    whyCorrect: "Regla 20/80. Cliente habla 80%, corredor 20%.",
    whyWrong: ["Es buena práctica.", "Es buena práctica.", "Es buena práctica.", ""]
  },
  {
    q: "Ante 'consultarlo con la familia', el corredor profesional:",
    opts: ["Presiona", "Valida + pregunta qué información específica falta + ofrece acompañar la conversación familiar", "Cancela", "Insulta"],
    correct: 1,
    whyCorrect: "Validar + indagar + acompañar. Es miedo no resuelto disfrazado.",
    whyWrong: ["Pierde rapport.", "", "Pierde el lead.", "Pierde reputación."]
  },
  {
    q: "Un contacto de Capa B sometido a cultivo relacional sostenido durante seis meses con contenido de valor presenta una tasa de conversión:",
    opts: ["Nula", "Inferior a la del lead frío", "Tres a cinco veces superior a la de un lead frío equivalente", "Equivalente a la de un lead frío"],
    correct: 2,
    whyCorrect: "El cultivo relacional sostenido construye autoridad profesional y posiciona al corredor como referente en el momento de decisión.",
    whyWrong: [
      "Niega un efecto ampliamente medido en marketing relacional.",
      "Contradice la evidencia empírica disponible.",
      "",
      "Los estudios de conversión muestran diferencias significativas."
    ]
  },
  {
    q: "Los chilenos al comprar primera vivienda priorizan más que el promedio mundial:",
    opts: ["Sectores con baja delincuencia (46%)", "Color", "Tamaño", "Lujo"],
    correct: 0,
    whyCorrect: "Seguridad del barrio. Primer filtro emocional del cliente chileno (Ipsos 2025).",
    whyWrong: ["", "No es prioridad medida.", "No es prioridad medida.", "No corresponde a primer comprador."]
  },
  {
    q: "La cadencia óptima para el cultivo relacional de un contacto de Capa B es:",
    opts: ["Sin contacto programado", "Diaria", "Anual", "Ciclos de 21 días con contenido 80% formativo / 20% comercial"],
    correct: 3,
    whyCorrect: "El ciclo de 21 días mantiene la presencia profesional sin saturar al contacto.",
    whyWrong: ["Equivale a renunciar al contacto.", "Produce saturación y bloqueo del canal.", "Una cadencia anual produce pérdida de recordación.", ""]
  },
  {
    q: "La comunicación no verbal influye en la percepción de confianza aproximadamente:",
    opts: ["~55% (Mehrabian)", "0%", "100%", "Solo en niños"],
    correct: 0,
    whyCorrect: "Mehrabian: postura, tono, contacto visual.",
    whyWrong: ["", "Subestima radicalmente.", "Sobreestima; las palabras también cuentan.", "Aplica universalmente."]
  },
  {
    q: "En SPIN, la pregunta '¿Qué pasa si en 2 años todavía estás arrendando?' es de:",
    opts: ["Situación", "Cierre", "Implicación", "Necesidad-Beneficio"],
    correct: 2,
    whyCorrect: "Conecta dolor con consecuencias futuras.",
    whyWrong: ["No mapea contexto.", "No es cierre.", "", "No proyecta beneficio."]
  },
  {
    q: "Un comprador migrante con residencia definitiva accede a subsidios chilenos:",
    opts: ["Solo después de 20 años", "Sí, según RSH y antigüedad de RUT (DS49, DS1, DS19)", "No accede", "Solo si paga impuesto adicional"],
    correct: 1,
    whyCorrect: "Residencia definitiva permite acceder al sistema de subsidios chileno como cualquier residente.",
    whyWrong: ["No corresponde a la normativa.", "", "Niega acceso real.", "No existe tal impuesto."]
  },
  {
    q: "El cierre real del manejo LAARC de objeciones es el paso:",
    opts: ["Confirm — preguntar explícitamente si la respuesta resolvió la inquietud", "Listen", "Acknowledge", "Assess"],
    correct: 0,
    whyCorrect: "Confirm cierra el bucle. Sin él, la objeción queda viva.",
    whyWrong: ["", "Es paso 1, no cierre.", "Es paso 2.", "Es paso 3."]
  },
  {
    q: "En la curva emocional del primera vivienda, después de 'Decisión' viene:",
    opts: ["Alivio (catarsis al firmar) seguido de Duda post-cierre 48-72h después", "Confusión", "Miedo", "Idealización"],
    correct: 0,
    whyCorrect: "Después de la decisión hay alivio, y luego puede aparecer la duda post-cierre que el corredor debe atender proactivamente.",
    whyWrong: ["", "Es fase anterior.", "Es fase anterior.", "Es la primera fase, no posterior."]
  },
  {
    q: "Un contacto dormido (1+ año sin contacto) se reactiva con:",
    opts: ["Pedir compra inmediata", "Mensaje personal con motivo concreto y honesto + valor sin pedir nada a cambio", "Bloqueo", "Email masivo"],
    correct: 1,
    whyCorrect: "Personalización + reciprocidad. La activación humana supera cualquier campaña.",
    whyWrong: ["Quema el contacto definitivamente.", "", "Cierra puerta.", "Impersonal y bajo open rate."]
  },
  {
    q: "El registro mínimo de un lead en CRM TuMatch incluye:",
    opts: ["Nombre + canal + arquetipo + capacidad + urgencia + próxima acción + fecha + etiqueta de calor", "Solo RUT", "Solo email", "Solo nombre"],
    correct: 0,
    whyCorrect: "7-8 campos críticos en 5 minutos. Sin esto, el seguimiento es improvisación.",
    whyWrong: ["", "Insuficiente para gestión.", "Insuficiente para gestión.", "Insuficiente para gestión."]
  }
];

const goldRules = [
  {n:1,title:'Conoce el arquetipo antes que la propiedad',text:'5 arquetipos del comprador primera vivienda Chile: joven profesional, pareja consolidando, trabajador independiente, familia DS49/DS1, migrante con sueño cumplido. Cada uno se trabaja distinto.'},
  {n:2,title:'Red caliente primero, siempre',text:'Una captación de red caliente vale 3-5 leads fríos. Antes de pagar publicidad, activa tu pirámide de 100: top 20 + 50 medios + 30 dormidos.'},
  {n:3,title:'Nutre tibios cada 21 días',text:'80% educativo + 20% oferta. Calculadora, novedades de subsidios, casos reales, valor UF, oportunidades de zona. La autoridad se construye antes de la transacción.'},
  {n:4,title:'CRM TuMatch como tu memoria operativa',text:'7 campos en 5 minutos por lead: nombre, canal, arquetipo, capacidad, urgencia, próxima acción, fecha. Sin CRM vuelas a ciegas a partir de los 20 contactos.'},
  {n:5,title:'SPIN: 20% hablas, 80% escucha el cliente',text:'Situación → Problema → Implicación → Necesidad-Beneficio. El cliente que se siente escuchado regresa, refiere y firma. El presionado huye.'},
  {n:6,title:'Valida la emoción antes de los números',text:'50% de los compradores llora durante el proceso. Si minimizas la emoción, el cliente se siente incomprendido. Primero empatía, después datos.'},
  {n:7,title:'Baja el riesgo más que infles el beneficio',text:'La aversión a la pérdida (Kahneman) duele 2x más que el placer de ganar. Comparables, calculadora, plan B financiero — herramientas anti-miedo.'},
  {n:8,title:'Carl Rogers en cada reunión',text:'Aceptación incondicional + congruencia + empatía. Parafraseo, silencio de 3 segundos, validación emocional. La fórmula tiene 70 años y nadie la supera.'},
  {n:9,title:'LAARC en cada objeción',text:'Listen → Acknowledge → Assess → Respond → Confirm. El paso Confirm ("¿resolví tu inquietud?") es el que distingue al profesional del intermediario.'},
  {n:10,title:'Formación continua como ventaja competitiva',text:'30 min/semana: SPIN Selling, Influencia, Pensar rápido pensar despacio, Carl Rogers, Ipsos Monitor anual. Los corredores top nunca dejan de leer.'},
];

/* ---------- STATE + STORAGE ---------- */
const STORE_KEY = 'tumatch_taller_en_la_mente_del_cliente_v1';
const defaultState = () => ({ current: 0, unlocked: 1, completedModules: [], finalPassed: false, lastFinalAttempt: null, quizProgress: {} });
let state = defaultState();

function save(){ try{ localStorage.setItem(STORE_KEY, JSON.stringify(state)); }catch(e){} }
function load(){ try{ const raw = localStorage.getItem(STORE_KEY); if (raw) state = Object.assign(defaultState(), JSON.parse(raw)); }catch(e){} }
function shuffle(arr){ const a = arr.slice(); for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]];} return a; }
function pickQuestions(bank, n){ return shuffle(bank).slice(0, n); }

/* ---------- TEST MODE: visor completo del banco de preguntas ---------- */
function isTestMode(){
  try {
    const params = new URLSearchParams(window.location.search);
    const mode = params.get('mode');
    return mode === 'test' || mode === 'admin';
  } catch(e){ return false; }
}

function renderTestModeBar(){
  if (!isTestMode()) return;
  if (document.getElementById('testModeBar')) return;
  const bar = document.createElement('div');
  bar.id = 'testModeBar';
  bar.innerHTML = `
    <div class="tm-bar-inner">
      <span class="tm-bar-label">🔧 Modo Test/Admin activo</span>
      <div class="tm-bar-actions">
        <button class="tm-bar-btn" onclick="openTestViewer()">👁 Ver banco completo de preguntas</button>
        <button class="tm-bar-btn" onclick="unlockAllModules()">🔓 Desbloquear todos los módulos</button>
        <button class="tm-bar-btn" onclick="resetProgressAdmin()">↻ Reset progreso</button>
      </div>
    </div>`;
  document.body.appendChild(bar);
}

function unlockAllModules(){
  state.unlocked = FINAL_MODULE + 1;
  state.completedModules = [1,2,3,4,5,6,7];
  state.finalPassed = true;
  save();
  if (typeof App !== 'undefined' && App.goToModule) App.goToModule(state.current || 0);
  alert('Todos los módulos desbloqueados. Certificado habilitado.');
}

function resetProgressAdmin(){
  if (!confirm('¿Reset de progreso completo?')) return;
  state = defaultState(); save(); window.location.reload();
}

function openTestViewer(){
  let overlay = document.getElementById('testViewerOverlay');
  if (overlay){ overlay.style.display = 'flex'; return; }
  overlay = document.createElement('div');
  overlay.id = 'testViewerOverlay';
  const moduleButtons = [];
  for (let i = 1; i <= TOTAL_MODULES; i++){
    moduleButtons.push(`<button class="tv-tab" data-tv-mod="${i}" onclick="showTestModule(${i})">Módulo ${i} <span class="tv-tab-count">${quizBank[i].length}</span></button>`);
  }
  moduleButtons.push(`<button class="tv-tab" data-tv-mod="final" onclick="showTestModule('final')">Prueba Final <span class="tv-tab-count">${finalQuestions.length}</span></button>`);

  overlay.innerHTML = `
    <div class="tv-dialog">
      <div class="tv-header">
        <div>
          <div class="tv-title">🔧 Visor del Banco de Preguntas</div>
          <div class="tv-sub">Modo test · todas las preguntas del taller con respuesta correcta y explicación de cada alternativa</div>
        </div>
        <button class="tv-close" onclick="closeTestViewer()" aria-label="Cerrar">✕</button>
      </div>
      <div class="tv-tabs">${moduleButtons.join('')}</div>
      <div class="tv-stats" id="tvStats"></div>
      <div class="tv-body" id="tvBody"></div>
    </div>`;
  document.body.appendChild(overlay);
  showTestModule(1);
}

function closeTestViewer(){
  const overlay = document.getElementById('testViewerOverlay');
  if (overlay) overlay.style.display = 'none';
}

function showTestModule(modKey){
  document.querySelectorAll('.tv-tab').forEach(t => t.classList.toggle('active', t.dataset.tvMod == String(modKey)));
  const body = document.getElementById('tvBody');
  const stats = document.getElementById('tvStats');
  if (!body) return;
  let questions, title;
  if (modKey === 'final'){
    questions = finalQuestions;
    title = 'Prueba Final · banco de ' + questions.length + ' preguntas (10 mostradas por intento, requiere 10/10)';
  } else {
    questions = quizBank[modKey];
    title = `Módulo ${modKey}: ${MODULE_NAMES[modKey]} · banco de ${questions.length} preguntas (5 por intento, rotativas)`;
  }
  if (stats) stats.innerHTML = `<div class="tv-section-title">${title}</div>`;
  body.innerHTML = questions.map((q, i) => {
    const correctLetter = String.fromCharCode(65 + q.correct);
    const optsHtml = q.opts.map((opt, j) => {
      const letter = String.fromCharCode(65 + j);
      const isCorrect = j === q.correct;
      const reason = isCorrect ? q.whyCorrect : (q.whyWrong && q.whyWrong[j] ? q.whyWrong[j] : '');
      return `<div class="tv-opt ${isCorrect?'tv-opt-correct':'tv-opt-wrong'}">
        <div class="tv-opt-head"><span class="tv-opt-letter">${letter}</span> <span class="tv-opt-text">${opt}</span> ${isCorrect?'<span class="tv-opt-badge">✓ CORRECTA</span>':''}</div>
        ${reason ? `<div class="tv-opt-reason">${isCorrect?'<strong>✓ Por qué es correcta:</strong>':'<strong>✗ Por qué no:</strong>'} ${reason}</div>` : ''}
      </div>`;
    }).join('');
    return `<div class="tv-q-card">
      <div class="tv-q-num">Pregunta ${i+1} de ${questions.length} · Correcta: ${correctLetter}</div>
      <div class="tv-q-text">${q.q}</div>
      <div class="tv-opts">${optsHtml}</div>
    </div>`;
  }).join('');
  const dlg = document.querySelector('.tv-dialog');
  if (dlg) dlg.scrollTop = 0;
}

/* ---------- APP ---------- */
const App = (function(){
  const QUIZ_QUESTIONS_PER_ATTEMPT = 5;
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
    const nav = document.getElementById('modnavInner');
    if (!nav) return;
    let html = '';
    for (let i = 1; i <= TOTAL_MODULES; i++){
      const locked = i > state.unlocked;
      const active = state.current === i ? 'active' : '';
      const done = state.completedModules.includes(i) ? 'done' : '';
      html += `<button class="modnav-btn ${active} ${done} ${locked?'locked':''}" ${locked?'disabled':''} onclick="App.goToModule(${i})">
        <span class="mod-n">Módulo ${i}</span>
        <span class="mod-name">${MODULE_NAMES[i]}</span>
      </button>`;
    }
    const finalLocked = state.unlocked <= TOTAL_MODULES;
    html += `<button class="modnav-btn ${state.current === FINAL_MODULE?'active':''} ${state.finalPassed?'done':''} ${finalLocked?'locked':''}" ${finalLocked?'disabled':''} onclick="App.goToModule(${FINAL_MODULE})">
      <span class="mod-n">Prueba Final</span>
      <span class="mod-name">10 preguntas · 10/10</span>
    </button>`;
    const concLocked = !state.finalPassed;
    html += `<button class="modnav-btn ${state.current === CONCLUSION_MODULE?'active':''} ${concLocked?'locked':''}" ${concLocked?'disabled':''} onclick="App.goToModule(${CONCLUSION_MODULE})">
      <span class="mod-n">Certificado ★</span>
      <span class="mod-name">Reglas de oro + descarga</span>
    </button>`;
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

  function mountQuizGate(modN){
    const gate = document.getElementById(`quiz-${modN}`);
    if (!gate) return;
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
    const qs = quizState[modN];
    if (!qs) return;
    const q = qs.questions[qs.idx];
    if (!q) return;
    const total = qs.questions.length;
    const dots = Array.from({length: total}, (_, i) => {
      const cls = i < qs.idx ? 'done' : (i === qs.idx ? 'current' : '');
      return `<div class="qp-dot ${cls}"></div>`;
    }).join('');
    gate.innerHTML = `
      <div class="quiz-gate-head">
        <div class="quiz-icon">📝</div>
        <div><div class="quiz-title">Quiz · Módulo ${modN}</div></div>
      </div>
      <div class="quiz-sub">Necesitas 5 correctas para desbloquear el siguiente módulo. Si fallas, la pregunta rota del banco de 20.</div>
      <div class="quiz-progress-wrap">
        <span class="quiz-progress-label">Pregunta ${qs.idx + 1} de ${total}</span>
        <div class="quiz-progress">${dots}</div>
      </div>
      <div class="quiz-q">
        <div class="quiz-q-label">Pregunta ${qs.idx + 1}</div>
        <div class="quiz-q-text">${q.q}</div>
        <div class="quiz-opts" id="quiz-opts-${modN}">
          ${q.shuffledOpts.map((opt, i) => `<button class="quiz-opt" onclick="App.answerQuestion(${modN}, ${i})"><span class="opt-letter">${String.fromCharCode(65+i)}</span><span>${opt.text}</span></button>`).join('')}
        </div>
        <div class="quiz-feedback" id="quiz-fb-${modN}"></div>
        <div class="quiz-next" id="quiz-next-${modN}"></div>
      </div>
    `;
  }

  function answerQuestion(modN, shuffledIdx){
    const qs = quizState[modN];
    if (!qs || qs.answered) return;
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
    const richWhy = buildWhy(q.correct, q.opts, q.whyCorrect, q.whyWrong, q.shuffledOpts);
    fb.innerHTML = `<div class="quiz-feedback-title">${correct ? '✓ Correcto' : '✗ Incorrecto — revisa por qué:'}</div><div class="quiz-feedback-body">${richWhy}</div>`;
    const nextBox = document.getElementById(`quiz-next-${modN}`);
    if (correct){
      qs.correctCount += 1;
      if (qs.idx === qs.questions.length - 1) nextBox.innerHTML = `<button class="btn btn-success" onclick="App.finishQuiz(${modN})">Completar módulo ${modN} →</button>`;
      else nextBox.innerHTML = `<button class="btn btn-primary" onclick="App.nextQuestion(${modN})">Siguiente pregunta →</button>`;
    } else {
      nextBox.innerHTML = `<button class="btn btn-ghost" onclick="App.retryQuestion(${modN})">↻ Intentar otra pregunta del banco</button>`;
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
      qs.questions[qs.idx].shuffledOpts = makeShuffledOpts(qs.questions[qs.idx]);
    }
    qs.answered = false; renderQuizGate(modN);
  }

  function finishQuiz(modN){
    if (!state.completedModules.includes(modN)) state.completedModules.push(modN);
    if (modN >= state.unlocked) state.unlocked = Math.min(modN + 1, FINAL_MODULE);
    save(); renderNav(); updateProgress();
    const nextN = modN + 1;
    const label = nextN > TOTAL_MODULES ? 'Ir a la Prueba Final →' : `Ir al Módulo ${nextN} →`;
    const target = nextN > TOTAL_MODULES ? FINAL_MODULE : nextN;
    document.getElementById(`quiz-${modN}`).innerHTML = `
      <div class="quiz-done">
        <span class="quiz-done-icon">🎉</span>
        <div class="quiz-done-title">Módulo ${modN} aprobado</div>
        <div class="quiz-score"><span class="quiz-score-n">5/5</span><span class="quiz-score-lbl">Dominio del módulo</span></div>
        <div class="quiz-done-text">Has desbloqueado el siguiente contenido.</div>
        <button class="btn btn-primary" onclick="App.goToModule(${target})">${label}</button>
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
          <button class="btn btn-primary" onclick="App.goToModule(${target})">${label}</button>
          <button class="btn btn-ghost" onclick="App.retakeQuiz(${modN})">↻ Repetir quiz</button>
        </div>
      </div>`;
  }

  function retakeQuiz(modN){
    const idx = state.completedModules.indexOf(modN);
    if (idx >= 0) state.completedModules.splice(idx, 1);
    save(); delete quizState[modN];
    renderNav(); updateProgress(); mountQuizGate(modN);
  }

  /* ---------- FINAL ---------- */
  const FINAL_SHOWN = 10;
  const finalState = { questions:null, answers:{}, submitted:false };

  function mountFinalTest(forceRetake){
    if (state.finalPassed && !forceRetake){ renderFinalApproved(); return; }
    if (!finalState.questions || finalState.submitted || forceRetake){
      const picked = pickQuestions(finalQuestions, FINAL_SHOWN);
      finalState.questions = picked.map(q => ({ ...q, shuffledOpts: shuffle(q.opts.map((_, i) => i)).map(i => ({text: q.opts[i], originalIdx: i})) }));
      finalState.answers = {}; finalState.submitted = false;
    }
    renderFinalTest();
  }

  function renderFinalApproved(){
    const c = document.getElementById('final-quiz');
    if (!c) return;
    c.innerHTML = `
      <div class="final-result">
        <span class="final-result-icon">🏆</span>
        <h3>Prueba final aprobada</h3>
        <p style="color:var(--slate);font-size:15px;line-height:1.7;max-width:560px;margin:12px auto 6px">Aprobaste con 10/10. Accede a las reglas de oro y al certificado.</p>
        <div class="final-score-big">10/10</div>
        <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
          <button class="btn btn-primary" onclick="App.unlockConclusion()">Ver reglas de oro y certificado →</button>
          <button class="btn btn-ghost" onclick="App.retryFinal()">↻ Repetir prueba con preguntas nuevas</button>
        </div>
      </div>`;
  }

  function renderFinalTest(){
    const c = document.getElementById('final-quiz');
    c.innerHTML = finalState.questions.map((q, qi) => `
      <div class="quiz-gate" style="margin-top:22px;padding:28px">
        <div class="quiz-q-label" style="color:var(--coral);font-size:12px;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:12px">Pregunta ${qi+1} de ${FINAL_SHOWN}</div>
        <div class="quiz-q-text" style="color:var(--white);font-size:16.5px;font-weight:600;line-height:1.55;margin-bottom:20px">${q.q}</div>
        <div class="quiz-opts">
          ${q.shuffledOpts.map((opt, i) => `
            <button class="quiz-opt ${finalState.answers[qi] === i ? 'active-opt' : ''}" style="${finalState.answers[qi] === i ? 'background:rgba(232,93,74,.18);border-color:var(--coral);color:#FFF3F0' : ''}" onclick="App.finalAnswer(${qi}, ${i})">
              <span class="opt-letter">${String.fromCharCode(65+i)}</span>
              <span>${opt.text}</span>
            </button>
          `).join('')}
        </div>
      </div>`).join('') + `
      <div style="margin-top:28px;display:flex;justify-content:center">
        <button class="btn btn-primary" style="padding:16px 34px;font-size:15px" onclick="App.submitFinal()">📊 Entregar prueba final</button>
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
    document.getElementById('final-quiz').innerHTML = `
      <div class="final-result">
        <span class="final-result-icon">${passed ? '🏆' : '📚'}</span>
        <h3>${passed ? '¡Prueba final aprobada!' : 'Sigue estudiando'}</h3>
        <div class="final-score-big">${correct}/${FINAL_SHOWN}</div>
        <p style="color:var(--slate);font-size:15px;line-height:1.7;max-width:560px;margin:0 auto 20px">${passed ? 'Ya estás en la mente del cliente comprador primera vivienda. Accede a las reglas de oro y al certificado.' : 'Necesitas 10/10 para aprobar. Revisa los módulos y vuelve a intentar — las preguntas rotan del banco.'}</p>
        <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
          ${passed ? `<button class="btn btn-primary" onclick="App.unlockConclusion()">Ver reglas de oro →</button>` : `<button class="btn btn-primary" onclick="App.retryFinal()">↻ Repetir prueba</button>`}
          <button class="btn btn-light" onclick="App.reviewFinal()">🔍 Revisar respuestas</button>
        </div>
      </div>`;
    if (passed){
      state.finalPassed = true;
      state.lastFinalAttempt = { questions: finalState.questions, answers: {...finalState.answers}, correct, date: new Date().toISOString() };
      save(); renderNav(); updateProgress();
    }
  }

  function retryFinal(){ finalState.submitted = false; finalState.questions = null; mountFinalTest(true); }

  function reviewFinal(){
    const c = document.getElementById('final-quiz');
    c.innerHTML = finalState.questions.map((q, qi) => {
      const sel = finalState.answers[qi];
      const orig = sel !== undefined ? q.shuffledOpts[sel].originalIdx : -1;
      const ok = orig === q.correct;
      const richWhy = buildWhy(q.correct, q.opts, q.whyCorrect, q.whyWrong, q.shuffledOpts);
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
        ${state.finalPassed ? `<button class="btn btn-primary" onclick="App.unlockConclusion()">Ver reglas de oro →</button>` : `<button class="btn btn-primary" onclick="App.retryFinal()">↻ Repetir</button>`}
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
    const saved = localStorage.getItem('tumatch_cert_name_en_la_mente_del_cliente');
    if (saved){ const inp = document.getElementById('tmCertNameInput'); if (inp) inp.value = saved; updateCertName(saved); }
  }

  function updateCertName(v){
    const name = (v||'').trim();
    const el = document.getElementById('tmCertName');
    if (el) el.textContent = name || '_______________________________';
    try { localStorage.setItem('tumatch_cert_name_en_la_mente_del_cliente', name); } catch(e) {}
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
      link.download = `Certificado_TuMatch_EnLaMenteDelCliente_${safe}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch(e){ alert('No se pudo descargar. Verifica tu conexión.'); }
    finally { btn.disabled = false; btn.innerHTML = original; }
  }

  function restart(){
    if (!confirm('¿Reiniciar el taller y perder todo el avance?')) return;
    state = defaultState(); save();
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

  const LOGO_LIGHT = 'assets/tumatch_horizontal_positivo.jpg';
  const LOGO_DARK = 'assets/tumatch_horizontal_negativo.jpg';
  function currentThemeEffective(){ const s = document.documentElement.getAttribute('data-theme'); if (s === 'dark' || s === 'light') return s; return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'; }
  function applyLogoForTheme(t){ const src = t === 'dark' ? LOGO_DARK : LOGO_LIGHT; ['brandLogoImg','heroLogoImg'].forEach(id => { const i = document.getElementById(id); if (i && !i.src.endsWith(src)) i.src = src; }); }
  function initTheme(){
    applyLogoForTheme(currentThemeEffective());
    const btn = document.getElementById('themeToggle');
    if (!btn) return;
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
    renderTestModeBar();
    if (state.current === 0) show('mod-0');
    else goToModule(state.current);
  }

  return { init, goToModule, startModule, restart, answerQuestion, nextQuestion, retryQuestion, finishQuiz, retakeQuiz, finalAnswer, submitFinal, retryFinal, reviewFinal, unlockConclusion, updateCertName, printCertificate, downloadCertificate };
})();

document.addEventListener('DOMContentLoaded', () => App.init());
