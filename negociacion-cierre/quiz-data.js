/* Taller 06 · Negociación y Cierre · Banco v1
   Fuentes: Código Civil Chile, Art. 1.554, 1.803, 1.805, 1.535; Fisher-Ury "Getting to Yes" */
window.TALLER_CONFIG = {
  slug: "negociacion-cierre",
  moduleNames: {
    "1": "Fundamentos negociación · Fisher-Ury",
    "2": "Oferta, contraoferta y tempo",
    "3": "Promesa compraventa · Art. 1.554 CC",
    "4": "Arras, multas y cláusulas penales",
    "5": "Escritura pública y mutuo",
    "6": "Caídas y contingencias",
    "7": "Entrega material y acta"
  },
  certTitle: "Negociación y Cierre",
  certSubtitle: "Taller Avanzado 06 · Academia TuMatch",
  quizBank: {
    "1": [
      {
        q: "El método Principled de Fisher-Ury (Harvard 1981) se basa en:",
        opts: ["Manipular", "Separar personas, centrar en intereses, generar opciones, usar criterios objetivos", "Imponer posición", "Engañar"],
        correct: 1,
        whyCorrect: "Cuatro principios centrales.",
        whyWrong: ["Antiético.", "", "No.", "Antiético."]
      },
      {
        q: "BATNA es:",
        opts: ["Ningún", "Banco", "Best Alternative To Negotiated Agreement (alternativa si no hay acuerdo)", "Oferta"],
        correct: 2,
        whyCorrect: "Poder relativo del negociador.",
        whyWrong: ["Existe.", "No.", "", "No."]
      },
      {
        q: "ZOPA es:",
        opts: ["Banco", "Sin sentido", "Zone Of Possible Agreement (intersección precios min vendedor / max comprador)", "Ley"],
        correct: 2,
        whyCorrect: "Donde el acuerdo es posible.",
        whyWrong: ["No.", "Existe.", "", "No."]
      },
      {
        q: "Interés vs posición:",
        opts: ["Interés es lo mismo", "No importa", "Son iguales", "Posición es 'quiero X'; interés es 'por qué' (motivación subyacente)"],
        correct: 3,
        whyCorrect: "Clave para desatorar negociación.",
        whyWrong: ["Lo opuesto.", "Crítico.", "Distintos.", ""]
      },
      {
        q: "Una opción creativa en compraventa es:",
        opts: ["Imposible", "Solo precio", "Sin posibilidad", "Incluir muebles, diferir entrega, pago diferido, parte en UF parte en pesos"],
        correct: 3,
        whyCorrect: "Expande ZOPA.",
        whyWrong: ["Posible.", "Limitado.", "Existe.", ""]
      },
      {
        q: "Separar personas del problema significa:",
        opts: ["Atacar", "No llevar ego a la mesa; foco en el asunto objetivo", "Ignorar", "Culpar"],
        correct: 1,
        whyCorrect: "Reduce escalada.",
        whyWrong: ["Daña.", "", "Abdica.", "Contraproducente."]
      },
      {
        q: "Criterios objetivos incluyen:",
        opts: ["Color", "Nada", "Capricho", "Tasación, comparables, avalúo, índices oficiales"],
        correct: 3,
        whyCorrect: "Anclaje racional.",
        whyWrong: ["Irrelevante.", "Hay.", "No.", ""]
      },
      {
        q: "Escuchar activamente al vendedor te revela:",
        opts: ["Secretos", "Solo precio", "Nada", "Intereses ocultos (mudanza, urgencia, rango aceptable) que permiten crear valor"],
        correct: 3,
        whyCorrect: "Oro para el negociador.",
        whyWrong: ["No manipulación.", "Mucho más.", "Hay.", ""]
      },
      {
        q: "El poder en negociación viene de:",
        opts: ["Agresividad", "Gritar", "BATNA: entre mejor alternativa, más poder real", "Mentir"],
        correct: 2,
        whyCorrect: "Fundamento del método.",
        whyWrong: ["No.", "Antiprofesional.", "", "Antiético."]
      },
      {
        q: "Si tu cliente tiene mejor alternativa (otra propiedad aceptable):",
        opts: ["Igual", "Fortalece; puedes negociar con más tranquilidad", "Debilita", "Obliga"],
        correct: 1,
        whyCorrect: "BATNA alto = más poder.",
        whyWrong: ["Depende.", "", "Al contrario.", "No."]
      },
      {
        q: "Una negociación competitiva pura (win-lose):",
        opts: ["Inferior a principled en transacciones de largo plazo o con repercusión reputacional", "Siempre gana", "Ideal", "Única vía"],
        correct: 0,
        whyCorrect: "Daña relaciones y referidos.",
        whyWrong: ["", "No siempre.", "Mala.", "Hay mejores."]
      },
      {
        q: "La preparación previa a negociar incluye:",
        opts: ["Nada", "Solo precio", "Improvisar", "Investigar intereses, tasación, comparables, BATNA propio y del otro"],
        correct: 3,
        whyCorrect: "Inversión que decide resultado.",
        whyWrong: ["Necesaria.", "Insuficiente.", "Mala.", ""]
      },
      {
        q: "Hacer la primera oferta en compraventa:",
        opts: ["Siempre evítalo", "Sin efecto", "Con ancla fundamentada (tasación + comparables) puede marcar el marco de la negociación", "Nunca"],
        correct: 2,
        whyCorrect: "Efecto anclaje.",
        whyWrong: ["Hay casos.", "Tiene efecto.", "", "Depende."]
      },
      {
        q: "Cuando el otro hace una oferta muy baja:",
        opts: ["Aceptas", "Ofendes", "Pides fundamento técnico y contrarrestas con comparables + tasación", "Abandonas"],
        correct: 2,
        whyCorrect: "Respuesta profesional.",
        whyWrong: ["Inaceptable.", "Mala.", "", "Prematuro."]
      },
      {
        q: "Si el vendedor dice 'es mi precio final':",
        opts: ["Aceptas", "Exploras si hay intereses detrás no cubiertos (plazo, condiciones) para crear valor", "Te vas", "Peleas"],
        correct: 1,
        whyCorrect: "Opciones creativas.",
        whyWrong: ["Sin intentar.", "", "Antes explora.", "Improductivo."]
      },
      {
        q: "Una concesión en negociación debe:",
        opts: ["Nunca", "Intercambiarse por algo de valor similar; nunca gratis", "Darse libre", "Siempre ceder"],
        correct: 1,
        whyCorrect: "Reciprocidad estructurada.",
        whyWrong: ["No.", "", "Mala.", "Indulgente."]
      },
      {
        q: "El corredor en la negociación representa:",
        opts: ["Formalmente uno de los lados; debe declarar representación y mantener ética", "Ninguno", "Al banco", "Ambos"],
        correct: 0,
        whyCorrect: "Transparencia profesional.",
        whyWrong: ["", "Representa.", "No.", "Depende contrato."]
      },
      {
        q: "Doble representación (ambas partes):",
        opts: ["Posible con consentimiento informado escrito de ambas partes; requiere máxima transparencia", "Normal", "Libre", "Prohibida"],
        correct: 0,
        whyCorrect: "Riesgo ético que debe documentarse.",
        whyWrong: ["", "Requiere cuidados.", "No libre.", "Posible con requisitos."]
      },
      {
        q: "Si se atora la negociación sobre precio:",
        opts: ["Buscar otras variables (plazo, entrega, condiciones, muebles) para desatar", "Acabar", "Mentir", "Rigidez"],
        correct: 0,
        whyCorrect: "Opciones creativas.",
        whyWrong: ["", "Mala.", "Antiético.", "Mala práctica."]
      },
      {
        q: "El cierre principled se caracteriza por:",
        opts: ["Pierdes", "Ganas todo", "Trampa", "Acuerdo donde ambas partes sienten que ganaron valor real"],
        correct: 3,
        whyCorrect: "Acuerdo sostenible.",
        whyWrong: ["No.", "Lose para otro.", "No.", ""]
      }
    ],
    "2": [
      {
        q: "La oferta escrita debe incluir:",
        opts: ["Nada", "Solo precio", "Precio + plazo respuesta + condiciones suspensivas + validez + modo de pago", "Firma"],
        correct: 2,
        whyCorrect: "Elementos formales.",
        whyWrong: ["Sin contrato.", "Insuficiente.", "", "Incompleto."]
      },
      {
        q: "El plazo de respuesta típico en oferta primera vivienda es:",
        opts: ["10 min", "Un mes", "48 a 72 horas habituales", "1 día"],
        correct: 2,
        whyCorrect: "Permite análisis sin urgencia fabricada.",
        whyWrong: ["Demasiado corto.", "Excesivo.", "", "Insuficiente."]
      },
      {
        q: "La contraoferta:",
        opts: ["Nunca", "Solo verbal", "Siempre", "Modificación de la oferta original; inicia nueva negociación formal"],
        correct: 3,
        whyCorrect: "Respuesta estándar.",
        whyWrong: ["Es natural.", "Debe ser escrita.", "Depende.", ""]
      },
      {
        q: "El tempo entre oferta y contraoferta:",
        opts: ["Inmediato siempre", "Irrelevante", "Años", "Comunica seriedad o desespero; mantener ritmo profesional"],
        correct: 3,
        whyCorrect: "Coreografía comunicacional.",
        whyWrong: ["Agresivo.", "Importa.", "Imposible.", ""]
      },
      {
        q: "La seña / reserva habitual en compraventa es:",
        opts: ["50%", "0%", "100%", "3-5% del precio pactado"],
        correct: 3,
        whyCorrect: "Práctica estándar.",
        whyWrong: ["Fuera.", "Sin reserva no hay seriedad.", "Fuera.", ""]
      },
      {
        q: "Una oferta con condiciones ambiguas:",
        opts: ["Abre puerta a disputas; condiciones siempre específicas y verificables", "Mejor", "Ilegal", "Vale"],
        correct: 0,
        whyCorrect: "Riesgo interpretativo.",
        whyWrong: ["", "Al contrario.", "Legal pero mala.", "Problemas."]
      },
      {
        q: "Si el vendedor acepta parcialmente (contraoferta):",
        opts: ["Acuerdo", "Sin efecto", "Litigio", "No hay acuerdo aún; es nueva oferta que el comprador acepta/rechaza"],
        correct: 3,
        whyCorrect: "Principio de correspondencia.",
        whyWrong: ["No hay.", "Tiene.", "No.", ""]
      },
      {
        q: "La oferta vinculante entrega al vendedor:",
        opts: ["Libertad", "Tiempo ilimitado", "Nada", "Obligación de responder en el plazo antes del vencimiento"],
        correct: 3,
        whyCorrect: "Efecto temporal.",
        whyWrong: ["Limitada.", "Hay plazo.", "Hay obligación.", ""]
      },
      {
        q: "Una contraoferta demasiado alta (anclaje extremo):",
        opts: ["Irrelevante", "Funciona siempre", "Puede cerrar la conversación; requiere sensibilidad al mercado", "Ideal"],
        correct: 2,
        whyCorrect: "Límites del anclaje.",
        whyWrong: ["Relevante.", "No siempre.", "", "Riesgoso."]
      },
      {
        q: "El corredor al recibir contraoferta del vendedor:",
        opts: ["Oculta", "Rechaza", "La transmite formalmente al comprador con fundamentos y recomendación", "Acepta"],
        correct: 2,
        whyCorrect: "Servicio profesional.",
        whyWrong: ["Fraude.", "No prejuicio.", "", "Sin analizar no."]
      },
      {
        q: "Una oferta válida solo 24 horas:",
        opts: ["Ilegal", "Puede ser percibida como presión si no hay razón objetiva", "Normal", "Absurda"],
        correct: 1,
        whyCorrect: "Sensibilidad al contexto.",
        whyWrong: ["No ilegal.", "", "Depende.", "No."]
      },
      {
        q: "Ofertas vinculantes múltiples por un comprador:",
        opts: ["Ilegal", "Bien", "Sin riesgo", "Si hay aceptación simultánea puede comprometerse doble; riesgo real"],
        correct: 3,
        whyCorrect: "Cuidado jurídico.",
        whyWrong: ["No ilegal per se.", "Riesgoso.", "Hay.", ""]
      },
      {
        q: "Ofertas múltiples para el vendedor (varios compradores):",
        opts: ["Prohibido", "Sin regla", "Puede negociar con todas, aceptar la mejor una vez decidida", "Solo acepta una"],
        correct: 2,
        whyCorrect: "Mercado libre.",
        whyWrong: ["Legal.", "Hay.", "", "Sí puede negociar."]
      },
      {
        q: "Si el vendedor acepta fuera del plazo:",
        opts: ["Nulo", "Sin efecto", "Ya no es aceptación; es contraoferta (oferta cruzada)", "Vinculante"],
        correct: 2,
        whyCorrect: "Efecto temporal.",
        whyWrong: ["Transformación.", "Tiene efecto.", "", "No."]
      },
      {
        q: "La condición 'sujeto a pre-aprobación bancaria':",
        opts: ["Debe indicar banco, monto mínimo, plazo y ruta de verificación", "Vago", "Nada", "Solo firma"],
        correct: 0,
        whyCorrect: "Especificidad legal.",
        whyWrong: ["", "Específico.", "Crítico.", "Insuficiente."]
      },
      {
        q: "El anclaje numérico inicial:",
        opts: ["Sin efecto", "Siempre error", "Influye la ZOPA final estadísticamente; usar con fundamento", "Sin relevancia"],
        correct: 2,
        whyCorrect: "Fenómeno validado.",
        whyWrong: ["Tiene.", "Herramienta.", "", "Relevante."]
      },
      {
        q: "La urgencia fabricada:",
        opts: ["Prohibida", "Sin efecto", "Efectiva", "Funciona corto plazo pero daña reputación; no usar en transacciones grandes"],
        correct: 3,
        whyCorrect: "Ética profesional.",
        whyWrong: ["No prohibida pero mala práctica.", "Tiene efecto corto.", "Daña.", ""]
      },
      {
        q: "Un vendedor que pide 'contra-oferta mejor':",
        opts: ["Abandonar", "Oportunidad para pedir su rango y proponer variables creativas", "Frustrante", "Peleable"],
        correct: 1,
        whyCorrect: "Exploración.",
        whyWrong: ["Prematuro.", "", "Oportunidad.", "Improductivo."]
      },
      {
        q: "El precio pactado en UF vs en pesos:",
        opts: ["Iguales", "Sin diferencia", "UF se reajusta con IPC · en compraventa estándar se pacta en UF", "Pesos preferible"],
        correct: 2,
        whyCorrect: "Práctica chilena.",
        whyWrong: ["Distintos.", "Hay.", "", "Raro."]
      },
      {
        q: "La mejor oferta suele estar:",
        opts: ["Al comienzo", "Al final siempre", "En un rango negociado con respeto y fundamento técnico", "Imprevisible"],
        correct: 2,
        whyCorrect: "Negociación madura.",
        whyWrong: ["Depende.", "No siempre.", "", "Analizable."]
      }
    ],
    "3": [
      {
        q: "La promesa se rige por:",
        opts: ["Ley 18.010", "CMF", "Art. 1.554 del Código Civil", "Ley 19.281"],
        correct: 2,
        whyCorrect: "Norma específica.",
        whyWrong: ["Créditos.", "No.", "", "Es leasing."]
      },
      {
        q: "La promesa debe ser:",
        opts: ["Escrita (privada con firmas autorizadas o escritura pública)", "Verbal o escrita", "Verbal", "Silencio"],
        correct: 0,
        whyCorrect: "Requisito solemnidad.",
        whyWrong: ["", "Escrita.", "Nula.", "Absurdo."]
      },
      {
        q: "Plazo o condición que fije época del contrato definitivo:",
        opts: ["Nunca", "Requisito esencial del Art. 1.554 CC", "Innecesario", "Opcional"],
        correct: 1,
        whyCorrect: "Requisito de validez.",
        whyWrong: ["Siempre requerido.", "", "Es esencial.", "Opcional."]
      },
      {
        q: "Identificación del contrato futuro en la promesa:",
        opts: ["Vaga", "Genérica", "Opcional", "Tal que solo falten declaraciones o tradición"],
        correct: 3,
        whyCorrect: "Especificidad requerida.",
        whyWrong: ["Problema.", "Insuficiente.", "Requerida.", ""]
      },
      {
        q: "Cosa lícita en la promesa:",
        opts: ["Cualquiera", "Prohibida", "No importa", "Objeto lícito · no enajenable o gravado inejecutablemente"],
        correct: 3,
        whyCorrect: "Requisito sustantivo.",
        whyWrong: ["No cualquiera.", "No permitida en objetos ilícitos.", "Importa.", ""]
      },
      {
        q: "Condición suspensiva 'pre-aprobación bancaria' se cumple cuando:",
        opts: ["Al solicitar", "Nunca", "El banco emite carta pre-aprobación por monto y plazo específico", "Depende cliente"],
        correct: 2,
        whyCorrect: "Hito objetivo.",
        whyWrong: ["Insuficiente.", "Hay hito.", "", "Objetivo."]
      },
      {
        q: "Condición suspensiva 'alzamiento hipoteca vendedor':",
        opts: ["Irrelevante", "Automática", "No existe", "Se cumple al obtener certificado de alzamiento del banco vendedor"],
        correct: 3,
        whyCorrect: "Hito documental.",
        whyWrong: ["Crítica.", "No automática.", "Existe.", ""]
      },
      {
        q: "Si una condición suspensiva no se cumple en plazo:",
        opts: ["Ignorar", "Se cierra", "La promesa queda sin efecto (si así se pactó) y partes recuperan seña", "Multa"],
        correct: 2,
        whyCorrect: "Régimen de condiciones.",
        whyWrong: ["No.", "No necesariamente.", "", "Depende."]
      },
      {
        q: "La promesa por instrumento privado:",
        opts: ["Válida", "Siempre suficiente", "Requiere firmas autorizadas ante notario para alcance probatorio", "Nunca"],
        correct: 2,
        whyCorrect: "Formalización.",
        whyWrong: ["Requiere formalización.", "Hay exigencias.", "", "Es posible."]
      },
      {
        q: "La promesa inscribible en CBR:",
        opts: ["Obligatorio", "No se inscribe como regla · salvo leasing habitacional u otros casos especiales", "Siempre", "Nunca"],
        correct: 1,
        whyCorrect: "Distinto de la compraventa definitiva.",
        whyWrong: ["No es obligatoria.", "", "Generalmente no.", "Hay excepciones."]
      },
      {
        q: "Plazo típico entre promesa y escritura:",
        opts: ["1 día", "1 hora", "30 a 60 días", "5 años"],
        correct: 2,
        whyCorrect: "Plazo operativo.",
        whyWrong: ["Imposible.", "Imposible.", "", "Fuera."]
      },
      {
        q: "Si el vendedor no comparece a la firma de escritura pactada en promesa:",
        opts: ["Incumplimiento que activa cláusula penal si existe o indemnización", "Ignorar", "Nada", "Pierde casa"],
        correct: 0,
        whyCorrect: "Responsabilidad contractual.",
        whyWrong: ["", "No.", "Hay consecuencia.", "Medida extrema."]
      },
      {
        q: "Si el comprador no comparece:",
        opts: ["Sin efecto", "Nada", "Incumplimiento recíproco · puede perder seña o asumir multa según pactado", "Libre"],
        correct: 2,
        whyCorrect: "Simetría contractual.",
        whyWrong: ["Tiene.", "Consecuencia.", "", "No."]
      },
      {
        q: "La promesa con 'condición potestativa pura':",
        opts: ["Siempre nula", "Art. 1.478 CC limita validez de condiciones que dependen de voluntad del deudor", "Válida", "Libre"],
        correct: 1,
        whyCorrect: "Régimen de condiciones.",
        whyWrong: ["No siempre.", "", "Hay limitación.", "Hay reglas."]
      },
      {
        q: "La promesa con plazo indefinido:",
        opts: ["Sin problema", "Libre", "Válida", "Plazo razonable o condición que fije época · 1.554 CC exige delimitación"],
        correct: 3,
        whyCorrect: "Requisito esencial.",
        whyWrong: ["Hay problema.", "Hay requisito.", "Requiere.", ""]
      },
      {
        q: "Multa en promesa:",
        opts: ["Ilegal", "Prohibida", "Sin efecto", "Válida como cláusula penal (Art. 1.535 CC) dentro de los límites"],
        correct: 3,
        whyCorrect: "Fundamento legal.",
        whyWrong: ["Legal.", "No prohibida.", "Tiene.", ""]
      },
      {
        q: "La cesión del contrato de promesa:",
        opts: ["Libre", "Prohibida", "Posible si se pactó o con consentimiento de ambas partes", "Nunca"],
        correct: 2,
        whyCorrect: "Pacto o consenso.",
        whyWrong: ["No libre.", "No prohibida.", "", "Es posible."]
      },
      {
        q: "Si en promesa se pactó 'entrega 60 días' y se atrasa:",
        opts: ["Rompe todo", "Inmodificable", "Se puede ampliar de mutuo acuerdo mediante anexo a la promesa", "Sin efecto"],
        correct: 2,
        whyCorrect: "Flexibilidad consensual.",
        whyWrong: ["No rompe.", "Flexible.", "", "Hay solución."]
      },
      {
        q: "Si un inmueble objeto de promesa se destruye:",
        opts: ["Se aplican reglas de riesgo; contrato puede resolverse", "Compra igual", "Irrelevante", "Multa enorme"],
        correct: 0,
        whyCorrect: "Teoría de riesgos.",
        whyWrong: ["", "No.", "Hay reglas.", "Depende."]
      },
      {
        q: "Promesa con firma privada sin autorización notarial:",
        opts: ["Siempre válida", "Puede tener problemas probatorios · mejor con firmas autorizadas", "Nula", "Plena valor"],
        correct: 1,
        whyCorrect: "Prueba legal.",
        whyWrong: ["Hay riesgo.", "", "No nula automático.", "Débil."]
      }
    ],
    "4": [
      {
        q: "Arras confirmatorias (por defecto):",
        opts: ["Autorizan retracto", "Ilegales", "Libres", "Parte anticipada del precio; no autorizan retractarse"],
        correct: 3,
        whyCorrect: "Presunción legal.",
        whyWrong: ["No.", "Legales.", "No libres.", ""]
      },
      {
        q: "Arras penitenciales (Art. 1.803 CC):",
        opts: ["Autorizan retracto · comprador pierde arras · vendedor restituye el doble", "Sin efecto", "Prohibidas", "Igual a confirmatorias"],
        correct: 0,
        whyCorrect: "Figura clásica.",
        whyWrong: ["", "Tienen.", "Válidas.", "Distintas."]
      },
      {
        q: "Para que sean penitenciales, las arras deben:",
        opts: ["Nunca", "Pactarse expresamente como tales; de lo contrario son confirmatorias", "Siempre", "Solo entregarse"],
        correct: 1,
        whyCorrect: "Requisito expreso.",
        whyWrong: ["Hay condiciones.", "", "Condicional.", "Insuficiente."]
      },
      {
        q: "Cláusula penal típica (Art. 1.535 CC):",
        opts: ["Ilegal", "Siempre nula", "Sin efecto", "Multa estipulada por incumplimiento como indemnización previa"],
        correct: 3,
        whyCorrect: "Válida con límites.",
        whyWrong: ["Legal.", "Puede ser válida.", "Tiene.", ""]
      },
      {
        q: "El monto de cláusula penal habitual en promesa:",
        opts: ["10%", "Doble o triple de la seña · o monto específico pactado", "100%", "Sin límite"],
        correct: 1,
        whyCorrect: "Práctica de mercado.",
        whyWrong: ["Muy bajo.", "", "Excesivo.", "Hay límites legales."]
      },
      {
        q: "Si la cláusula penal es excesiva (Art. 1.544 CC):",
        opts: ["Válida siempre", "Inmutable", "Puede reducirse judicialmente por lesión enorme", "Libre"],
        correct: 2,
        whyCorrect: "Protección jurídica.",
        whyWrong: ["Hay revisión.", "Hay revisión.", "", "Hay límite."]
      },
      {
        q: "Seña de reserva pre-promesa:",
        opts: ["Irrelevante", "Sin efecto", "Pago simbólico reserva propiedad mientras se elabora la promesa", "Ilegal"],
        correct: 2,
        whyCorrect: "Práctica común.",
        whyWrong: ["Tiene.", "Tiene.", "", "Legal."]
      },
      {
        q: "Si cae condición suspensiva, la seña:",
        opts: ["Se multa", "Se devuelve al comprador según lo pactado", "Se pierde", "Irrelevante"],
        correct: 1,
        whyCorrect: "Protección del comprador.",
        whyWrong: ["No multa.", "", "No injusto.", "Relevante."]
      },
      {
        q: "Las arras se entregan:",
        opts: ["Nunca", "Solo al firmar escritura", "Al firmar la promesa, como garantía del compromiso", "Al final"],
        correct: 2,
        whyCorrect: "Momento típico.",
        whyWrong: ["Existen.", "Tarde.", "", "Al inicio."]
      },
      {
        q: "Cláusula que prohíbe retracto bajo cualquier circunstancia:",
        opts: ["Libre", "Sin efecto", "Puede ser revisada si es abusiva (Ley 19.496)", "Válida siempre"],
        correct: 2,
        whyCorrect: "Protección consumidor.",
        whyWrong: ["Hay revisión.", "Tiene.", "", "Hay límite."]
      },
      {
        q: "Un retracto justificado (condición suspensiva incumplida):",
        opts: ["Ejecución", "Multa", "Proceso", "Libera sin penalidad; sólo devolución de seña"],
        correct: 3,
        whyCorrect: "Régimen de condiciones.",
        whyWrong: ["No.", "No.", "Mecánico.", ""]
      },
      {
        q: "Un retracto injustificado sin arras penitenciales:",
        opts: ["Ilegal", "Genera incumplimiento · ejecución cláusula penal o indemnización", "Libre", "Sin consecuencia"],
        correct: 1,
        whyCorrect: "Responsabilidad contractual.",
        whyWrong: ["No ilegal pero con costo.", "", "Hay.", "Hay."]
      },
      {
        q: "Las arras se imputan al precio:",
        opts: ["Si son confirmatorias, se imputan al precio total al firmar escritura", "Nunca", "Libre", "Siempre retorno"],
        correct: 0,
        whyCorrect: "Mecanismo estándar.",
        whyWrong: ["", "Sí se imputa.", "Hay regla.", "No siempre retorno."]
      },
      {
        q: "Vendedor que se retracta con arras penitenciales:",
        opts: ["Multa mayor", "Debe restituir el doble de las arras al comprador", "Queda libre", "Sin costo"],
        correct: 1,
        whyCorrect: "Art. 1.803 CC.",
        whyWrong: ["Es la regla.", "", "Tiene.", "Tiene costo."]
      },
      {
        q: "Comprador que se retracta con arras penitenciales:",
        opts: ["Pierde las arras", "Multa extra", "Sin efecto", "Sin costo"],
        correct: 0,
        whyCorrect: "Art. 1.803 CC.",
        whyWrong: ["", "No adicional.", "Hay.", "Tiene."]
      },
      {
        q: "La multa convencional se puede pactar:",
        opts: ["Nula", "Libremente sin límite", "Sujeta a límites de Art. 1.544 CC (no excesiva vs obligación principal)", "Imposible"],
        correct: 2,
        whyCorrect: "Control de razonabilidad.",
        whyWrong: ["No nula.", "Hay límite.", "", "Posible."]
      },
      {
        q: "La cláusula penal indemniza:",
        opts: ["Gratuita", "Ninguna indemnización", "Daños y perjuicios por incumplimiento · sustituye prueba detallada", "Otro concepto"],
        correct: 2,
        whyCorrect: "Función específica.",
        whyWrong: ["No.", "Sí.", "", "Específica."]
      },
      {
        q: "Si la cláusula penal y daño real difieren:",
        opts: ["Reajustable", "Siempre real", "Generalmente se aplica cláusula; reducible si excesiva", "Siempre cláusula"],
        correct: 2,
        whyCorrect: "Flexibilidad judicial.",
        whyWrong: ["Según ley.", "Depende.", "", "Hay ajuste."]
      },
      {
        q: "La cláusula 'ambos renuncian a retractarse':",
        opts: ["Depende · no siempre oponible; análisis caso a caso", "Nula", "Libre", "Válida"],
        correct: 0,
        whyCorrect: "Depende contexto.",
        whyWrong: ["", "No automático.", "Hay control.", "Análisis."]
      },
      {
        q: "La cláusula 'vendedor paga todo':",
        opts: ["Normal", "Puede considerarse abusiva y revisable", "Ilegal", "Legal"],
        correct: 1,
        whyCorrect: "Equilibrio contractual.",
        whyWrong: ["Cuestionable.", "", "No ilegal per se.", "Revisable."]
      }
    ],
    "5": [
      {
        q: "La escritura pública se otorga:",
        opts: ["Ante notario con presencia de partes o representantes", "Privada", "Digital", "En comisaría"],
        correct: 0,
        whyCorrect: "Acto solemne.",
        whyWrong: ["", "No.", "No.", "No."]
      },
      {
        q: "El notario revisa:",
        opts: ["Solo firmas", "Nada", "Minuta, identidades, capacidad, documentos, hipotecas, alzamientos", "Precio"],
        correct: 2,
        whyCorrect: "Rol fedatario.",
        whyWrong: ["Más amplio.", "Revisa.", "", "Más."]
      },
      {
        q: "La minuta es:",
        opts: ["Foto", "Anexo", "Acta", "Borrador de la escritura que se revisa antes de firmar"],
        correct: 3,
        whyCorrect: "Documento previo.",
        whyWrong: ["No.", "Otro.", "No.", ""]
      },
      {
        q: "El banco desembolsa al vendedor:",
        opts: ["Tras inscripción efectiva en CBR, en cuenta vista", "Nunca", "Directo", "Antes de firma"],
        correct: 0,
        whyCorrect: "Protección al banco y al comprador.",
        whyWrong: ["", "Se paga.", "Prohibido antilavado.", "Riesgo."]
      },
      {
        q: "La hipoteca inscrita en CBR:",
        opts: ["Perfecciona la garantía frente a terceros (Art. 2.410 CC)", "Parcial", "Sin efecto", "Nula"],
        correct: 0,
        whyCorrect: "Principio publicidad.",
        whyWrong: ["", "Plena.", "Tiene efecto.", "No nula."]
      },
      {
        q: "Si el CBR observa la escritura:",
        opts: ["Nulidad", "Pago", "Fin", "Se subsana y reingresa; plazo corre desde reingreso"],
        correct: 3,
        whyCorrect: "Mecanismo estándar.",
        whyWrong: ["Subsanable.", "No pago.", "Hay ruta.", ""]
      },
      {
        q: "Tracto sucesivo al comprar con hipoteca vendedor:",
        opts: ["Separado", "Imposible", "Se alza simultáneamente con nueva hipoteca en misma firma", "Nula"],
        correct: 2,
        whyCorrect: "Operación estándar.",
        whyWrong: ["No separado.", "Posible.", "", "No nula."]
      },
      {
        q: "La escritura compraventa incluye típicamente:",
        opts: ["Nada", "Solo monto", "Solo nombre", "Partes, precio, forma de pago, inmueble, deslindes, cláusulas accesorias"],
        correct: 3,
        whyCorrect: "Contenido formal.",
        whyWrong: ["Requerido.", "Incompleto.", "Insuficiente.", ""]
      },
      {
        q: "Gastos notariales y de inscripción habitualmente:",
        opts: ["Fisco", "Comprador los asume, salvo pacto contrario", "Banco paga", "Vendedor"],
        correct: 1,
        whyCorrect: "Práctica estándar.",
        whyWrong: ["No.", "", "Cliente.", "Habitual."]
      },
      {
        q: "Impuesto de timbres sobre crédito hipotecario:",
        opts: ["10%", "100%", "No aplica", "0,8% máximo anual sobre monto financiado (DL 3.475) con exención parcial DS1"],
        correct: 3,
        whyCorrect: "Norma tributaria.",
        whyWrong: ["Fuera.", "Absurdo.", "Aplica.", ""]
      },
      {
        q: "Si el comprador no concurre a la escritura:",
        opts: ["Nada", "Sin efecto", "Válida", "Incumplimiento grave; ejecución cláusula penal si existe"],
        correct: 3,
        whyCorrect: "Responsabilidad contractual.",
        whyWrong: ["Hay consecuencia.", "Hay.", "Requiere firma.", ""]
      },
      {
        q: "Presencia del cónyuge no dueño al vender:",
        opts: ["Nunca", "Libre", "Ilegal", "Requerida en régimen de sociedad conyugal; otorga autorización"],
        correct: 3,
        whyCorrect: "Código Civil.",
        whyWrong: ["Requerida.", "Régimen.", "Legal requerirla.", ""]
      },
      {
        q: "Un menor de edad no puede:",
        opts: ["Contratar", "Nunca", "Todo", "Otorgar escritura compraventa sin representación legal"],
        correct: 3,
        whyCorrect: "Capacidad.",
        whyWrong: ["Limitada.", "Excepción.", "No todo.", ""]
      },
      {
        q: "Apoderado (mandatario) firma:",
        opts: ["Con poder notarial vigente e idóneo para la operación", "Sin poder", "Libremente", "Nunca"],
        correct: 0,
        whyCorrect: "Representación.",
        whyWrong: ["", "No.", "Con poder.", "Sí."]
      },
      {
        q: "Fondos en cuenta vista del notario se liberan:",
        opts: ["Antes", "Nunca", "Una vez verificada la inscripción en CBR", "Siempre"],
        correct: 2,
        whyCorrect: "Protección.",
        whyWrong: ["Riesgo.", "Se libera.", "", "Hay condición."]
      },
      {
        q: "La rapidez de la inscripción depende de:",
        opts: ["Voluntad", "Solo banco", "Aleatorio", "Comuna, carga del CBR y observaciones menores a subsanar"],
        correct: 3,
        whyCorrect: "Factores operativos.",
        whyWrong: ["Factores.", "No solo.", "No aleatorio.", ""]
      },
      {
        q: "Un error menor en escritura:",
        opts: ["Nulidad", "Se corrige con escritura complementaria", "Fin", "Ignorar"],
        correct: 1,
        whyCorrect: "Mecanismo notarial.",
        whyWrong: ["No nulidad.", "", "Hay corrección.", "No ignorar."]
      },
      {
        q: "Una declaración falsa en escritura:",
        opts: ["Sin efecto", "Válida", "Genera responsabilidad penal y civil; vicio del consentimiento", "Libre"],
        correct: 2,
        whyCorrect: "Gravedad.",
        whyWrong: ["Hay efecto.", "No válida.", "", "Delito."]
      },
      {
        q: "El número de repertorio de la escritura:",
        opts: ["Irrelevante", "Identificador único en notaría · útil para buscar copia", "Opcional", "Decorativo"],
        correct: 1,
        whyCorrect: "Control interno notarial.",
        whyWrong: ["Relevante.", "", "Obligatorio.", "Formal."]
      },
      {
        q: "Copia autorizada de escritura se obtiene:",
        opts: ["CBR", "SII", "Nunca", "En la notaría donde se otorgó · cualquier parte o quien tenga interés"],
        correct: 3,
        whyCorrect: "Acceso legal.",
        whyWrong: ["Notaría.", "No.", "Se obtiene.", ""]
      }
    ],
    "6": [
      {
        q: "Una caída de operación en primera vivienda ocurre en:",
        opts: ["100%", "50%", "0%", "10-20% de los casos según sector"],
        correct: 3,
        whyCorrect: "Estadística de mercado.",
        whyWrong: ["Falso.", "Fuera.", "Existe.", ""]
      },
      {
        q: "Si banco rechaza condición DS1:",
        opts: ["Apelar o probar otro banco adherido al DS1/DS116", "Fin", "Ignorar", "Multa"],
        correct: 0,
        whyCorrect: "Plan B.",
        whyWrong: ["", "Hay ruta.", "No ignorar.", "No multa."]
      },
      {
        q: "Si tasación bancaria es baja:",
        opts: ["Renegociar precio con vendedor o aumentar pie del comprador", "Nulo", "Banco paga diferencia", "Rompe operación"],
        correct: 0,
        whyCorrect: "Ajuste.",
        whyWrong: ["", "Hay ajuste.", "No cubre diferencia.", "Hay ruta."]
      },
      {
        q: "Subsidio rechazado:",
        opts: ["Apelar o plan B leasing + siguiente llamado", "Rechazar cliente", "Demandar", "Nada"],
        correct: 0,
        whyCorrect: "Resolución alternativa.",
        whyWrong: ["", "Hay rutas.", "No procede.", "Hay."]
      },
      {
        q: "Alzamiento hipoteca vendedor atrasa:",
        opts: ["Fin", "Coordinar con banco vendedor, ampliar plazo o pago parcial como garantía", "Nuevo banco", "Multa"],
        correct: 1,
        whyCorrect: "Gestión.",
        whyWrong: ["Gestionable.", "", "No suele.", "No multa."]
      },
      {
        q: "Dicom que aparece tarde:",
        opts: ["Multa", "Ignorar", "Imposible solución", "Pagar y pedir cierre, reingresar al banco actualizado"],
        correct: 3,
        whyCorrect: "Gestión documental.",
        whyWrong: ["No multa.", "No ignorar.", "Hay ruta.", ""]
      },
      {
        q: "Vendedor se arrepiente:",
        opts: ["Nada", "Demandar sin estudio", "Libre", "Activar cláusula penal / arras penitenciales; reasignar comprador"],
        correct: 3,
        whyCorrect: "Mecanismo contractual.",
        whyWrong: ["Hay acción.", "Primero cláusula.", "Responde.", ""]
      },
      {
        q: "Certificado CBR con observación menor:",
        opts: ["Inmutable", "Abogado subsana; ampliar plazo promesa si necesario", "Imposible", "Fin"],
        correct: 1,
        whyCorrect: "Subsanable.",
        whyWrong: ["Subsanable.", "", "Posible.", "Flexibilidad."]
      },
      {
        q: "El corredor comunica contingencia al cliente:",
        opts: ["48 horas antes mínimo; proactividad construye confianza", "Después", "Nunca", "Día X"],
        correct: 0,
        whyCorrect: "Servicio profesional.",
        whyWrong: ["", "Tarde.", "Mala.", "Temprano."]
      },
      {
        q: "Plan B al banco rechaza:",
        opts: ["Presentar el caso a los otros 2 bancos pre-aprobados", "Nulo", "Nuevo cliente", "Nada"],
        correct: 0,
        whyCorrect: "Estrategia de 3 bancos.",
        whyWrong: ["", "Hay.", "No abandonar cliente.", "Hay."]
      },
      {
        q: "Si la operación cae definitivamente:",
        opts: ["Pérdida total", "Cortar", "Culpar", "Mantener relación · posible referido · reactivar en 3-6 meses"],
        correct: 3,
        whyCorrect: "Relación largo plazo.",
        whyWrong: ["Hay valor.", "Malo.", "Improductivo.", ""]
      },
      {
        q: "Multa por caída unilateral:",
        opts: ["Ilegal", "Se ejecuta cláusula penal pactada en promesa · o vía indemnización", "Libre", "Sin efecto"],
        correct: 1,
        whyCorrect: "Contractual.",
        whyWrong: ["Legal.", "", "No libre.", "Tiene."]
      },
      {
        q: "Pérdida de vigencia pre-aprobación:",
        opts: ["Sin efecto", "Acelera", "Automática", "Se requiere re-evaluación bancaria · puede bajar monto o subir tasa"],
        correct: 3,
        whyCorrect: "Condición temporal.",
        whyWrong: ["Tiene.", "No acelera.", "No automática.", ""]
      },
      {
        q: "Subsidio que expira antes de escritura:",
        opts: ["Nada", "Automático", "Se extiende", "Solicitar prórroga SERVIU con justificación antes del vencimiento"],
        correct: 3,
        whyCorrect: "Mecanismo administrativo.",
        whyWrong: ["Hay acción.", "No automático.", "Hay solicitud.", ""]
      },
      {
        q: "Si comprador cambia de empleo en vigencia pre-aprobación:",
        opts: ["Oculto", "Informar al banco; re-evaluación puede ajustar condiciones", "Sin efecto", "Multa"],
        correct: 1,
        whyCorrect: "Transparencia.",
        whyWrong: ["Incumplimiento.", "", "Hay.", "No multa."]
      },
      {
        q: "Si comprador se enferma gravemente:",
        opts: ["Fin", "Posible causal de fuerza mayor; evaluar con abogado", "Caso fortuito", "Multa"],
        correct: 1,
        whyCorrect: "Evaluación jurídica.",
        whyWrong: ["Hay análisis.", "", "Posible.", "No multa automática."]
      },
      {
        q: "Problema de alzamiento hipoteca por deuda no pagada del vendedor:",
        opts: ["Retener del precio lo necesario para pagar directo al banco vendedor", "Fin", "Juicio", "Comprador paga"],
        correct: 0,
        whyCorrect: "Mecanismo estándar.",
        whyWrong: ["", "Solución.", "No primero.", "No."]
      },
      {
        q: "Si aparece reivindicación durante proceso:",
        opts: ["Continuar", "Detener operación hasta resolver jurídicamente", "Ignorar", "Multa"],
        correct: 1,
        whyCorrect: "Riesgo grave.",
        whyWrong: ["Mala.", "", "Grave.", "No multa."]
      },
      {
        q: "La cláusula 'fuerza mayor' en promesa:",
        opts: ["Sin efecto", "Innecesaria", "Siempre nula", "Protege ante eventos imprevisibles insuperables"],
        correct: 3,
        whyCorrect: "Instrumento preventivo.",
        whyWrong: ["Tiene.", "Útil.", "Legal.", ""]
      },
      {
        q: "Mantener relación con cliente post-caída:",
        opts: ["Irrelevante", "Imposible", "Dañino", "Construye oportunidad futura y posibles referidos"],
        correct: 3,
        whyCorrect: "Largo plazo.",
        whyWrong: ["Valor.", "Posible.", "Al contrario.", ""]
      }
    ],
    "7": [
      {
        q: "La entrega material es:",
        opts: ["Nada", "Jurídica", "Notarial solo", "Acto operativo: llaves + inventario + estado + acta firmada"],
        correct: 3,
        whyCorrect: "Acto físico formal.",
        whyWrong: ["Requerida.", "Es física.", "Notaría es anterior.", ""]
      },
      {
        q: "El acta de entrega incluye:",
        opts: ["Fecha, partes, inventario, estado, lecturas servicios, observaciones, firmas", "Solo foto", "Nada", "Nombre"],
        correct: 0,
        whyCorrect: "Documento completo.",
        whyWrong: ["", "Insuficiente.", "Requerido.", "Insuficiente."]
      },
      {
        q: "Lecturas de servicios al entregar:",
        opts: ["Irrelevantes", "Solo luz", "No", "Medidor luz, agua, gas · base para cuentas futuras"],
        correct: 3,
        whyCorrect: "Protege comprador.",
        whyWrong: ["Crítico.", "Todos.", "Es funcional.", ""]
      },
      {
        q: "Gastos comunes al día:",
        opts: ["Banco paga", "Certificado actualizado del administrador al momento de entrega", "Asumir", "Ignorar"],
        correct: 1,
        whyCorrect: "Protección.",
        whyWrong: ["No.", "", "Requerido.", "No."]
      },
      {
        q: "Contribuciones según periodo:",
        opts: ["Vendedor paga su porción del año; comprador desde su periodo", "Banco", "Ninguno", "Comprador paga todo"],
        correct: 0,
        whyCorrect: "Proporcionalidad.",
        whyWrong: ["", "No.", "Alguien.", "Proporcional."]
      },
      {
        q: "Llaves originales, copias y especiales:",
        opts: ["Solo principal", "Entregar todas las existentes · requisito del acta", "Solo una", "Ninguna"],
        correct: 1,
        whyCorrect: "Completitud.",
        whyWrong: ["Todas.", "", "Todas.", "Todas."]
      },
      {
        q: "Controles (alarma, portón, TV):",
        opts: ["Ninguno", "Irrelevante", "Solo alarma", "Entregar con instrucciones · listar en acta"],
        correct: 3,
        whyCorrect: "Funcionalidad.",
        whyWrong: ["Todos.", "Requerido.", "Todos.", ""]
      },
      {
        q: "Propiedad nueva: manual del hogar:",
        opts: ["Entregar: planos, garantías, instrucciones, proveedores", "Solo planos", "Ninguno", "Irrelevante"],
        correct: 0,
        whyCorrect: "Estándar.",
        whyWrong: ["", "Completo.", "Completo.", "Requerido."]
      },
      {
        q: "Fotos del estado al entregar:",
        opts: ["Evitar", "Fundamentales para evidenciar vicios aparentes o mejoras", "Irrelevantes", "Ilegales"],
        correct: 1,
        whyCorrect: "Evidencia.",
        whyWrong: ["Esenciales.", "", "Relevantes.", "Legales."]
      },
      {
        q: "Detalle memorable post-entrega:",
        opts: ["Canasta, nota manuscrita, tarjeta · construye NPS y referidos", "Sin efecto", "Ilegal", "Prohibido"],
        correct: 0,
        whyCorrect: "Experiencia memorable.",
        whyWrong: ["", "Efecto real.", "Legal.", "Recomendado."]
      },
      {
        q: "Entrega con propiedad sucia:",
        opts: ["Mejor", "Observación en acta · vendedor debe regularizar o se descuenta", "Normal", "Ignorar"],
        correct: 1,
        whyCorrect: "Estándar profesional.",
        whyWrong: ["No.", "", "Cuidado.", "Se resuelve."]
      },
      {
        q: "Si encuentra vicio aparente al entregar:",
        opts: ["Fin", "Se anota en acta y se pacta plazo de reparación", "Cancela", "Ignora"],
        correct: 1,
        whyCorrect: "Cláusula de reparación.",
        whyWrong: ["No se pierde.", "", "Primero.", "Se anota."]
      },
      {
        q: "Sin acta de entrega firmada:",
        opts: ["Ok", "Innecesaria", "Mejor", "Riesgo de disputa futura; siempre firmar"],
        correct: 3,
        whyCorrect: "Protección.",
        whyWrong: ["Problema.", "Esencial.", "Al revés.", ""]
      },
      {
        q: "Fecha de entrega pactada en promesa:",
        opts: ["Irrelevante", "Nunca", "Libre", "Se cumple estrictamente · modificación por consenso escrito"],
        correct: 3,
        whyCorrect: "Contractual.",
        whyWrong: ["Relevante.", "Existe.", "No libre.", ""]
      },
      {
        q: "Entrega retrasada por banco (inscripción CBR lenta):",
        opts: ["Fin", "Multa", "Incumplimiento vendedor", "Ampliar plazo por fuerza mayor operativa de común acuerdo"],
        correct: 3,
        whyCorrect: "Flexibilidad.",
        whyWrong: ["No fin.", "No multa.", "No vendedor.", ""]
      },
      {
        q: "La propiedad debe entregarse con:",
        opts: ["Vacía", "Llena", "Lo pactado en promesa: muebles, artefactos, jardín, etc.", "Lo que sea"],
        correct: 2,
        whyCorrect: "Según pacto.",
        whyWrong: ["Depende.", "Depende.", "", "No."]
      },
      {
        q: "Si el vendedor deja deuda de gas:",
        opts: ["Nadie", "Automático", "Comprador paga", "Vendedor regulariza o se retiene del precio"],
        correct: 3,
        whyCorrect: "Protección.",
        whyWrong: ["Alguien.", "No.", "Injusto.", ""]
      },
      {
        q: "NPS del cliente post-entrega:",
        opts: ["Irrelevante", "Encuesta 0-10 en días siguientes · base para referidos", "Nunca", "Solo rico"],
        correct: 1,
        whyCorrect: "Medición.",
        whyWrong: ["Esencial.", "", "Se hace.", "Todos."]
      },
      {
        q: "Un cliente con NPS 10 es:",
        opts: ["Ningún dato", "Neutro", "Promotor · prospecto ideal de referido", "Detractor"],
        correct: 2,
        whyCorrect: "NPS.",
        whyWrong: ["Es dato.", "No.", "", "No."]
      },
      {
        q: "La entrega exitosa termina con:",
        opts: ["Nada", "Solo firma", "Agradecimiento del corredor + solicitud formal de referidos tras el alivio final", "Marketing"],
        correct: 2,
        whyCorrect: "Pico emocional.",
        whyWrong: ["Hay más.", "Oportunidad.", "", "No es marketing."]
      }
    ]
  },
  finalQuestions: [
    {
      q: "Principled negotiation (Fisher-Ury) se basa en:",
      opts: ["Separar personas, centrar intereses, opciones, criterios", "Manipulación", "Azar", "Imposición"],
      correct: 0,
      whyCorrect: "Estándar mundial.",
      whyWrong: ["", "Antiético.", "No.", "No."]
    },
    {
      q: "BATNA es:",
      opts: ["Nada", "Banco", "Mejor alternativa si no hay acuerdo", "Precio"],
      correct: 2,
      whyCorrect: "Poder relativo.",
      whyWrong: ["Existe.", "No.", "", "No."]
    },
    {
      q: "ZOPA es:",
      opts: ["Intersección precios min vendedor / max comprador", "Ley", "Banco", "Sin sentido"],
      correct: 0,
      whyCorrect: "Zona de acuerdo posible.",
      whyWrong: ["", "No.", "No.", "Existe."]
    },
    {
      q: "Promesa se rige por:",
      opts: ["18.010", "Art. 1.554 CC", "19.281", "CMF"],
      correct: 1,
      whyCorrect: "Norma.",
      whyWrong: ["Créditos.", "", "Leasing.", "No."]
    },
    {
      q: "Plazo entre promesa y escritura:",
      opts: ["5 años", "30-60 días", "1 hora", "1 día"],
      correct: 1,
      whyCorrect: "Operativo.",
      whyWrong: ["Fuera.", "", "Imposible.", "Imposible."]
    },
    {
      q: "Arras confirmatorias (por defecto):",
      opts: ["Ilegales", "Parte anticipada del precio", "Retracto", "Libres"],
      correct: 1,
      whyCorrect: "Presunción legal.",
      whyWrong: ["Legales.", "", "No.", "No."]
    },
    {
      q: "Arras penitenciales:",
      opts: ["Prohibidas", "Iguales", "Sin efecto", "Retracto: comprador pierde · vendedor restituye doble"],
      correct: 3,
      whyCorrect: "Art. 1.803 CC.",
      whyWrong: ["Válidas.", "Distintas.", "Tienen.", ""]
    },
    {
      q: "Cláusula penal típica:",
      opts: ["100%", "Ilegal", "10%", "Doble/triple de la seña o monto pactado"],
      correct: 3,
      whyCorrect: "Práctica.",
      whyWrong: ["Excesivo.", "Legal.", "Bajo.", ""]
    },
    {
      q: "Escritura se otorga:",
      opts: ["Comisaría", "Privada", "Digital", "Ante notario"],
      correct: 3,
      whyCorrect: "Solemne.",
      whyWrong: ["No.", "No.", "No.", ""]
    },
    {
      q: "Banco desembolsa al vendedor:",
      opts: ["Antes", "Nunca", "Directo", "Tras inscripción CBR"],
      correct: 3,
      whyCorrect: "Protección.",
      whyWrong: ["Riesgo.", "Se paga.", "Prohibido.", ""]
    },
    {
      q: "Gastos notariales:",
      opts: ["Banco", "Vendedor", "Comprador habitual", "Fisco"],
      correct: 2,
      whyCorrect: "Práctica.",
      whyWrong: ["Cliente.", "Habitual.", "", "No."]
    },
    {
      q: "Caída de operación en primera vivienda:",
      opts: ["100%", "50%", "0%", "10-20%"],
      correct: 3,
      whyCorrect: "Estadística.",
      whyWrong: ["Falso.", "Fuera.", "Existe.", ""]
    },
    {
      q: "Si banco rechaza:",
      opts: ["Fin", "Plan B a otros bancos pre-aprobados", "Ignorar", "Multa"],
      correct: 1,
      whyCorrect: "Estrategia.",
      whyWrong: ["Hay ruta.", "", "No.", "No multa."]
    },
    {
      q: "Tasación baja precio:",
      opts: ["Nulo", "Rompe", "Renegociar o aumentar pie", "Banco paga"],
      correct: 2,
      whyCorrect: "Ajuste.",
      whyWrong: ["Ajuste.", "Hay ruta.", "", "No cubre."]
    },
    {
      q: "Vendedor arrepiente con arras penitenciales:",
      opts: ["Multa extra", "Libre", "Restituye doble de las arras", "Sin costo"],
      correct: 2,
      whyCorrect: "Art. 1.803.",
      whyWrong: ["Es regla.", "Tiene.", "", "Tiene."]
    },
    {
      q: "Comprador arrepiente con arras penitenciales:",
      opts: ["Sin costo", "Sin efecto", "Pierde las arras", "Multa extra"],
      correct: 2,
      whyCorrect: "Art. 1.803.",
      whyWrong: ["Tiene.", "Hay.", "", "No."]
    },
    {
      q: "Entrega material:",
      opts: ["Nada", "Notarial sola", "Operativa: llaves + inventario + acta", "Jurídica"],
      correct: 2,
      whyCorrect: "Acto formal.",
      whyWrong: ["Requerida.", "Antes.", "", "Física."]
    },
    {
      q: "Acta de entrega:",
      opts: ["Fecha, partes, inventario, estado, firmas", "Solo nombre", "Nada", "Foto"],
      correct: 0,
      whyCorrect: "Documento.",
      whyWrong: ["", "No.", "Requerido.", "No."]
    },
    {
      q: "Lecturas de servicios al entregar:",
      opts: ["Solo luz", "Luz, agua, gas · base para cuentas", "No", "Irrelevantes"],
      correct: 1,
      whyCorrect: "Protege.",
      whyWrong: ["Todos.", "", "Funcional.", "Crítico."]
    },
    {
      q: "NPS promotor:",
      opts: ["Nada", "Neutro", "Cliente 9-10", "Detractor"],
      correct: 2,
      whyCorrect: "Promotor.",
      whyWrong: ["Dato.", "No.", "", "No."]
    },
    {
      q: "Gastos comunes al día al entregar:",
      opts: ["Banco", "Ignorar", "Certificado administrador", "Asumir"],
      correct: 2,
      whyCorrect: "Protección.",
      whyWrong: ["No.", "No.", "", "Requerido."]
    },
    {
      q: "Llaves, copias y controles:",
      opts: ["Solo una", "Solo principal", "Todos entregados con acta", "Ninguna"],
      correct: 2,
      whyCorrect: "Completo.",
      whyWrong: ["Todas.", "Todos.", "", "Todas."]
    },
    {
      q: "Condición suspensiva 'pre-aprobación bancaria':",
      opts: ["Depende", "Nunca", "Al solicitar", "Banco emite carta pre-aprobación"],
      correct: 3,
      whyCorrect: "Hito objetivo.",
      whyWrong: ["Objetivo.", "Hay.", "Insuficiente.", ""]
    },
    {
      q: "Si condición suspensiva no se cumple:",
      opts: ["Promesa sin efecto si pactado", "Ignorar", "Multa", "Cerrada"],
      correct: 0,
      whyCorrect: "Régimen.",
      whyWrong: ["", "No.", "No.", "Depende."]
    },
    {
      q: "Alzamiento hipoteca vendedor:",
      opts: ["Separado", "Nula", "Imposible", "Simultáneo nueva hipoteca en firma"],
      correct: 3,
      whyCorrect: "Estándar.",
      whyWrong: ["No.", "No nula.", "Posible.", ""]
    },
    {
      q: "Cláusula penal excesiva:",
      opts: ["Inmutable", "Válida", "Libre", "Reducible por lesión enorme Art. 1.544 CC"],
      correct: 3,
      whyCorrect: "Revisión.",
      whyWrong: ["Hay.", "Hay.", "Hay.", ""]
    },
    {
      q: "Firma del cónyuge en sociedad conyugal:",
      opts: ["Requerida por CC", "Libre", "Ilegal", "Nunca"],
      correct: 0,
      whyCorrect: "Régimen.",
      whyWrong: ["", "No libre.", "Legal.", "Requerida."]
    },
    {
      q: "Menor sin representación:",
      opts: ["Todo", "Puede", "No puede sin representación legal", "Nunca"],
      correct: 2,
      whyCorrect: "Capacidad.",
      whyWrong: ["No.", "Limitada.", "", "Excepción."]
    },
    {
      q: "Apoderado con poder:",
      opts: ["Nunca", "Libremente", "Firma con poder notarial vigente e idóneo", "Sin poder"],
      correct: 2,
      whyCorrect: "Representación.",
      whyWrong: ["Sí.", "Con poder.", "", "No."]
    },
    {
      q: "Contraoferta:",
      opts: ["Nueva oferta que requiere aceptación", "Inmutable", "Silencio", "Acuerdo"],
      correct: 0,
      whyCorrect: "Nueva negociación.",
      whyWrong: ["", "Hay.", "Hay.", "No."]
    },
    {
      q: "Seña habitual:",
      opts: ["50%", "100%", "3-5% del precio", "0%"],
      correct: 2,
      whyCorrect: "Estándar.",
      whyWrong: ["Fuera.", "Fuera.", "", "Mala."]
    },
    {
      q: "Plazo respuesta oferta:",
      opts: ["Un mes", "10 min", "Sin plazo", "48-72 hrs"],
      correct: 3,
      whyCorrect: "Estándar.",
      whyWrong: ["Fuera.", "Corto.", "Necesario.", ""]
    },
    {
      q: "Método principled vs competitivo:",
      opts: ["Principled es más sostenible para transacciones con referido futuro", "Iguales", "Ninguno", "Competitivo mejor"],
      correct: 0,
      whyCorrect: "Largo plazo.",
      whyWrong: ["", "Distintos.", "Hay.", "No."]
    },
    {
      q: "Interés detrás de la posición 'quiero 3.500':",
      opts: ["Razón subyacente (mudanza, retiro, emergencia) que permite crear valor", "Ego", "Fantasía", "Nada"],
      correct: 0,
      whyCorrect: "Clave negociación.",
      whyWrong: ["", "No solo.", "Real.", "Hay."]
    },
    {
      q: "Opciones creativas expanden:",
      opts: ["Sin efecto", "Prohibidas", "ZOPA · habilitan acuerdos cuando precio no cede", "Nada"],
      correct: 2,
      whyCorrect: "Herramienta.",
      whyWrong: ["Tienen.", "No.", "", "Herramienta."]
    },
    {
      q: "Criterio objetivo para anclar:",
      opts: ["Capricho", "Color", "Tasación, avalúo, comparables, índices oficiales", "Ninguno"],
      correct: 2,
      whyCorrect: "Racional.",
      whyWrong: ["No.", "No.", "", "Hay."]
    },
    {
      q: "Si la promesa carece de plazo o condición:",
      opts: ["Válida", "Irrelevante", "Libre", "Nula por no cumplir Art. 1.554 CC"],
      correct: 3,
      whyCorrect: "Requisito.",
      whyWrong: ["Es nula.", "Crítico.", "No libre.", ""]
    },
    {
      q: "Cesión de promesa:",
      opts: ["Posible con pacto o consentimiento", "Libre", "Nunca", "Prohibida"],
      correct: 0,
      whyCorrect: "Consenso.",
      whyWrong: ["", "No libre.", "Posible.", "No prohibida."]
    },
    {
      q: "Retracto injustificado sin arras penitenciales:",
      opts: ["Ilegal", "Libre", "Sin efecto", "Cláusula penal o indemnización"],
      correct: 3,
      whyCorrect: "Responsabilidad.",
      whyWrong: ["Costo.", "Tiene.", "Hay.", ""]
    },
    {
      q: "Fondos retenidos por notario:",
      opts: ["Siempre libres", "Nunca", "Antes", "Se liberan tras inscripción CBR"],
      correct: 3,
      whyCorrect: "Protección.",
      whyWrong: ["Condición.", "Se libera.", "Riesgo.", ""]
    },
    {
      q: "Error menor en escritura:",
      opts: ["Ignorar", "Nulidad", "Fin", "Escritura complementaria"],
      correct: 3,
      whyCorrect: "Subsanable.",
      whyWrong: ["No.", "No.", "Hay.", ""]
    },
    {
      q: "Fuerza mayor en promesa:",
      opts: ["Nula", "Protege ante eventos imprevisibles insuperables", "Innecesaria", "Sin efecto"],
      correct: 1,
      whyCorrect: "Prevención.",
      whyWrong: ["Legal.", "", "Útil.", "Tiene."]
    },
    {
      q: "Antes de firmar escritura, el corredor:",
      opts: ["Nada", "Revisa minuta con partes, coordina banco, verifica alzamiento", "Delega", "Solo espera"],
      correct: 1,
      whyCorrect: "Rol activo.",
      whyWrong: ["Activo.", "", "Acompaña.", "Más."]
    },
    {
      q: "Vendedor atraso entrega:",
      opts: ["Fin", "Nulo", "Multa automática", "Extender plazo de común acuerdo o activar cláusula penal"],
      correct: 3,
      whyCorrect: "Flexibilidad.",
      whyWrong: ["Hay opciones.", "Depende.", "No automática.", ""]
    },
    {
      q: "Comprador cambia de empleo en vigencia pre-aprobación:",
      opts: ["Sin efecto", "Informar al banco; re-evaluación", "Multa", "Oculto"],
      correct: 1,
      whyCorrect: "Transparencia.",
      whyWrong: ["Hay.", "", "No.", "Incumplimiento."]
    },
    {
      q: "Dicom aparece tarde:",
      opts: ["Multa", "Ignorar", "Pagar + certificado cierre + reingresar", "Imposible"],
      correct: 2,
      whyCorrect: "Gestión.",
      whyWrong: ["No.", "No.", "", "Hay ruta."]
    },
    {
      q: "Detalle post-entrega (nota, canasta):",
      opts: ["Construye NPS y referidos a futuro", "Sin efecto", "Prohibido", "Ilegal"],
      correct: 0,
      whyCorrect: "Experiencia.",
      whyWrong: ["", "Real.", "Recomendado.", "Legal."]
    },
    {
      q: "NPS mínimo para pedir referido:",
      opts: ["5", "8", "0", "Cualquiera"],
      correct: 1,
      whyCorrect: "Umbral.",
      whyWrong: ["Insuficiente.", "", "Sin.", "Sin."]
    },
    {
      q: "Momento óptimo para pedir referido:",
      opts: ["En cualquier momento", "Después de entrega con alivio emocional del cliente", "Al firmar oferta", "Nunca"],
      correct: 1,
      whyCorrect: "Pico emocional.",
      whyWrong: ["Momentos específicos.", "", "Prematuro.", "Ocasión."]
    },
    {
      q: "Contingencia por cambios tasa del banco:",
      opts: ["Ignorar", "Verificar condiciones y negociar con ejecutivo + alternativas", "Abandonar", "Aceptar"],
      correct: 1,
      whyCorrect: "Gestión.",
      whyWrong: ["Actuar.", "", "No.", "No siempre."]
    }
  ],
  goldRules: [
    {
      n: 1,
      title: "Separar personas del problema",
      text: "No llevas ego ni del cliente ni tuyo a la mesa. Foco en el asunto objetivo. Principled negotiation Fisher-Ury."
    },
    {
      n: 2,
      title: "Intereses, no posiciones",
      text: "La posición es 'quiero X'. El interés es por qué. Descubrir el por qué abre opciones creativas que no tocan precio."
    },
    {
      n: 3,
      title: "Conoce BATNA propio y ajeno",
      text: "BATNA alto = más poder. Si tu cliente tiene mejor alternativa real, negocias sin presión."
    },
    {
      n: 4,
      title: "Oferta escrita y profesional",
      text: "Precio + plazo + condiciones + validez. Fundamentada en tasación + comparables. Nunca improvisada."
    },
    {
      n: 5,
      title: "Promesa cumple Art. 1.554 CC",
      text: "Escrita, con plazo o condición, identificación específica, cosa lícita. Sin estos requisitos, nula."
    },
    {
      n: 6,
      title: "Arras: confirmatorias o penitenciales",
      text: "Por defecto son confirmatorias. Para retracto debe pactarse expresamente. Léelas antes de firmar."
    },
    {
      n: 7,
      title: "Anticipa contingencias 48 horas antes",
      text: "Banco, subsidio, alzamiento, Dicom, CBR. El corredor profesional avisa temprano, no el día de la firma."
    },
    {
      n: 8,
      title: "Plan B siempre preparado",
      text: "3 bancos + leasing + subsidio + reasignar propiedad. Sin plan B, un rechazo tira la operación."
    },
    {
      n: 9,
      title: "Entrega con acta + inventario",
      text: "Fecha, partes, estado, lecturas, firmas. Sin acta hay disputa futura. Con acta el comprador se siente protegido."
    },
    {
      n: 10,
      title: "Detalle memorable post-entrega",
      text: "Nota manuscrita, canasta, tarjeta. Construye NPS y futuros referidos durante años. Bajo costo, alto retorno."
    }
  ]
};
