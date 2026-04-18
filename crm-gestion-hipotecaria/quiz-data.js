/* Taller 03 · Comisiones, Contratos y Gestión Hipotecaria en CRM
   Banco: 7 submódulos × 20 + 50 finales = 190 preguntas
   Fuentes: Contrato Freelance TuMatch SpA, CChC, SII, SERNAC */

window.TALLER_CONFIG = {
  slug: "crm-gestion-hipotecaria",
  moduleNames: {
    "1": "Contrato Freelance y comisiones TuMatch",
    "2": "Comisión al cliente · CChC",
    "3": "CRM TuMatch · arquitectura",
    "4": "Perfilamiento hipotecario en CRM",
    "5": "Solicitud de datos y documentos",
    "6": "Pipeline y cierre-negocio",
    "7": "Reportes, KPIs e ingresos"
  },
  certTitle: "Comisiones, Contratos y CRM Hipotecario",
  certSubtitle: "Taller Avanzado 03 · Academia TuMatch",
  quizBank: {
    "1": [
      {
        q: "Según Cláusula Cuarta del Contrato Freelance TuMatch, la comisión por referido/lead de comprador es:",
        opts: ["25% de la comisión bruta generada por la operación de compraventa", "10%", "0%", "50%"],
        correct: 0,
        whyCorrect: "Lo establece textualmente la letra a) de la Cláusula Cuarta. Se paga solo con referir un lead que termine en compraventa cerrada.",
        whyWrong: ["", "No corresponde al contrato.", "El referido sí genera comisión.", "No corresponde; ese porcentaje está fuera del tramo referido."]
      },
      {
        q: "La comisión por referido/lead de arrendatario según contrato es:",
        opts: ["40%", "10%", "25% de la comisión bruta generada por la operación de arriendo", "50%"],
        correct: 2,
        whyCorrect: "Igual que el referido comprador (letra b de la Cláusula Cuarta), 25% aplicado a la comisión bruta del arriendo cerrado.",
        whyWrong: ["Corresponde a gestión integral, no referido.", "No corresponde.", "", "Refleja el total de comisión al cliente, no del corredor."]
      },
      {
        q: "La comisión por gestión comercial integral CON Team Leader es típicamente:",
        opts: ["50%", "25%", "30% base, pudiendo alcanzar hasta 40% (o 60% si incluye lado arrendador)", "10%"],
        correct: 2,
        whyCorrect: "La Cláusula Cuarta letra c) establece que el remanente se distribuye según participación efectiva, con tope de 40% estándar o 60% cuando se incluya la parte arrendadora.",
        whyWrong: ["No corresponde al tramo con TL.", "Corresponde a referido, no gestión integral.", "", "Demasiado bajo."]
      },
      {
        q: "En modalidad Autónoma (Anexo N°1 · sin TL), la comisión por gestión comercial integral es:",
        opts: ["70%", "50%", "25%", "35% base, pudiendo alcanzar hasta 45% (o 65% con lado arrendador)"],
        correct: 3,
        whyCorrect: "El Anexo N°1 eleva los topes +5 pp respecto a modalidad con TL, en reconocimiento a la gestión autónoma completa.",
        whyWrong: ["Fuera de los rangos contractuales.", "No corresponde a modalidad autónoma.", "Corresponde a referido con TL.", ""]
      },
      {
        q: "El tope máximo de la comisión del corredor autónomo cuando la operación cubre vendedor + arrendatario + comprador + contribución arrendador es:",
        opts: ["80%", "40%", "65%", "100%"],
        correct: 2,
        whyCorrect: "El Anexo N°1 fija tope máximo de 65% cuando el corredor autónomo interviene en todos los lados incluida la contribución al lado arrendador.",
        whyWrong: ["Fuera del rango contractual.", "Corresponde a tope con TL sin arrendador.", "", "No se alcanza el 100%."]
      },
      {
        q: "Para que la comisión sea exigible, deben cumplirse copulativamente:",
        opts: [
          "Solo firma y pago",
          "Solo entrega",
          "(i) contrato/promesa firmado + (ii) empresa recibió pago de comisión + (iii) entrega formal del inmueble",
          "Solo firma del contrato"
        ],
        correct: 2,
        whyCorrect: "Los tres requisitos son copulativos según Cláusula Cuarta. Ninguno por separado genera derecho a pago.",
        whyWrong: ["Falta el tercer requisito.", "Falta firma y pago.", "", "Insuficiente."]
      },
      {
        q: "La multa por desviar operaciones por fuera del sistema TuMatch es:",
        opts: ["No hay multa", "100 UF", "10 UF", "1.000 UF, sin perjuicio de otras acciones legales"],
        correct: 3,
        whyCorrect: "Establecida en la Cláusula Séptima como consecuencia de conductas que evaden el pago de comisión.",
        whyWrong: ["Sí existe multa.", "Muy por debajo.", "Muy por debajo.", ""]
      },
      {
        q: "Para acceder a modalidad Autónoma (Anexo N°1) el corredor debe:",
        opts: [
          "Acreditar al menos 1 negocio cerrado en TuMatch en el año en curso o año anterior",
          "Ser mayor de 50",
          "Tener 5 años",
          "No requiere nada"
        ],
        correct: 0,
        whyCorrect: "Es el requisito de elegibilidad establecido en el Segundo del Anexo N°1.",
        whyWrong: ["", "No es requisito etario.", "No es requisito etario.", "Requiere acreditación."]
      },
      {
        q: "La duración inicial del contrato freelance TuMatch es:",
        opts: ["10 años", "1 año", "1 mes, renovable automáticamente por periodos iguales", "Indefinido"],
        correct: 2,
        whyCorrect: "La Cláusula Quinta fija duración inicial de 1 mes con renovación automática salvo aviso escrito con 5 días de anticipación.",
        whyWrong: ["Fuera del contrato.", "No es la duración inicial.", "", "Tiene duración definida por contrato."]
      },
      {
        q: "Si el contrato termina, las propiedades captadas durante la vigencia:",
        opts: [
          "Son del cliente",
          "Se pierden",
          "Permanecen como exclusivas de TuMatch SpA, manteniéndose vigentes las obligaciones de comisión",
          "Se quedan con el corredor"
        ],
        correct: 2,
        whyCorrect: "La Cláusula Quinta in fine protege la captación empresarial incluso después del término contractual.",
        whyWrong: ["No les pertenecen.", "Son activo de TuMatch.", "", "Contraviene el contrato."]
      },
      {
        q: "El contrato freelance TuMatch es jurídicamente:",
        opts: [
          "Mandato gratuito",
          "Contrato de trabajo",
          "Arrendamiento",
          "Prestación de servicios profesionales intangibles (Art. 2.006 y sgtes. del Código Civil)"
        ],
        correct: 3,
        whyCorrect: "La Cláusula Tercera lo califica expresamente como prestación de servicios intangibles, sin vínculo laboral.",
        whyWrong: ["Es remunerado.", "Se excluye expresamente.", "Naturaleza jurídica distinta.", ""]
      },
      {
        q: "Un corredor con TL que cubre captación + gestión + cierre de una operación compraventa UF 3.500 gana aproximadamente:",
        opts: ["~UF 28 (40% de UF 70 comisión bruta lado cliente) ≈ $1.092.000", "Nada", "UF 100", "$100.000"],
        correct: 0,
        whyCorrect: "Ejemplo: 2% de UF 3.500 = UF 70 comisión bruta. 40% del techo con TL = UF 28. A UF $39.000 son $1.092.000.",
        whyWrong: ["", "La operación genera comisión.", "Fuera de rango.", "Muy por debajo."]
      },
      {
        q: "Si un corredor autónomo cubre una operación integral (hasta 65%) sobre compraventa UF 3.500 con ambos lados, su techo es aproximadamente:",
        opts: ["UF 10", "UF 5", "UF 200", "UF 91 (65% de UF 140) ≈ $3.549.000"],
        correct: 3,
        whyCorrect: "Comisión bruta total = 2%+2% = 4% = UF 140. 65% del techo autónomo = UF 91 ≈ $3.549.000.",
        whyWrong: ["Subestima radicalmente.", "Irreal.", "Excede el tope.", ""]
      },
      {
        q: "La relación contractual entre TuMatch SpA y el Corredor es:",
        opts: ["Subordinada", "Dependiente", "Jerárquica", "Autónoma e independiente, sin vínculo laboral ni subordinación (Cláusula Tercera)"],
        correct: 3,
        whyCorrect: "La autonomía e independencia están expresamente declaradas en Cláusula Tercera para evitar que se interprete como contrato de trabajo.",
        whyWrong: ["Se excluye expresamente.", "Se excluye expresamente.", "No configurado jerárquicamente.", ""]
      },
      {
        q: "La confidencialidad del contrato subsiste:",
        opts: ["También después del término de la relación contractual", "Solo durante vigencia", "No subsiste", "Hasta 1 año"],
        correct: 0,
        whyCorrect: "Cláusula Segunda: \"Esta obligación de confidencialidad subsistirá aún después del término de la relación contractual.\"",
        whyWrong: ["", "Abarca también post-término.", "Sí subsiste.", "Extensión mayor."]
      },
      {
        q: "Las controversias del contrato se resuelven mediante:",
        opts: [
          "Ninguna jurisdicción",
          "Juzgado civil",
          "SERNAC",
          "Arbitraje conforme a reglas del Centro Nacional de Arbitraje de la Cámara de Comercio de Santiago, con árbitro arbitrador"
        ],
        correct: 3,
        whyCorrect: "Cláusula Décima. Es cláusula arbitral comprehensiva para toda controversia derivada del contrato.",
        whyWrong: ["No se aplica.", "No es la jurisdicción pactada.", "Es protección al consumidor, no relación comercial entre prestadores.", ""]
      },
      {
        q: "El Corredor que opera bajo modalidad autónoma (sin TL) debe:",
        opts: [
          "Solo vender",
          "Solo facturar",
          "Ningún reporte",
          "Mantener estándares TuMatch, gestionar cartera proactivamente, reportar a Coordinación/Dirección General y cumplir protocolos internos"
        ],
        correct: 3,
        whyCorrect: "Artículo Quinto del Anexo N°1 detalla las responsabilidades del corredor autónomo.",
        whyWrong: ["Reduce el rol.", "Hay más obligaciones.", "Debe reportar.", ""]
      },
      {
        q: "Un lead registrado en WhatsApp y no en CRM TuMatch:",
        opts: [
          "Es preferible",
          "Es válido para comisión",
          "Siempre se paga",
          "Puede no calificar como lead aportado por el corredor según la trazabilidad del sistema — debe registrarse en CRM"
        ],
        correct: 3,
        whyCorrect: "El Comunicado de Comisiones señala que el lead debe ser registrado en el CRM o formularios habilitados y el corredor debe identificarse como referente al momento del registro.",
        whyWrong: ["Al revés: registrarlo en CRM es condición.", "La trazabilidad exige registro en sistema.", "Depende de trazabilidad.", ""]
      },
      {
        q: "Si una operación se firma pero el cliente no paga la comisión a TuMatch, la comisión del corredor:",
        opts: ["Se paga 50%", "Se paga igual", "Se incrementa", "No es exigible (requisito copulativo ii: empresa debe haber recibido el pago)"],
        correct: 3,
        whyCorrect: "La Cláusula Cuarta es clara: los tres requisitos son copulativos. Sin pago recibido por la empresa no hay comisión exigible.",
        whyWrong: ["No hay proporcionalidad; es todo o nada según condición.", "Contradice requisito legal.", "Ninguna lógica contractual.", ""]
      },
      {
        q: "El corredor recibe liquidación de comisiones según contrato:",
        opts: ["Ninguna", "Anualmente", "Semanalmente", "Mensualmente tras cumplimiento de los tres requisitos copulativos de la Cláusula Cuarta"],
        correct: 3,
        whyCorrect: "La práctica es liquidación mensual conforme a las condiciones cumplidas. Cada operación se liquida cuando cumple los tres requisitos.",
        whyWrong: ["Hay liquidación.", "No es anual.", "No es semanal.", ""]
      }
    ],
    "2": [
      {
        q: "La sugerencia CChC de comisión en compraventa estándar es:",
        opts: ["2% + IVA del precio a cada parte (comprador y vendedor)", "5%", "0,5%", "10%"],
        correct: 0,
        whyCorrect: "Es la referencia de mercado y sugerencia CChC, totalizando 4% bruto de la operación distribuido entre ambas partes.",
        whyWrong: ["", "Muy alto.", "Muy bajo.", "Excesivo."]
      },
      {
        q: "En arriendo residencial estándar, la comisión sugerida es:",
        opts: ["1 canon", "50% del primer canon + IVA a cada parte", "3 cánones", "0%"],
        correct: 1,
        whyCorrect: "Totaliza 100% del primer canon bruto, distribuido entre arrendador y arrendatario.",
        whyWrong: ["Subestima.", "", "Excesivo.", "Exige pago de arriendos completos."]
      },
      {
        q: "La administración de arriendos típicamente se cobra:",
        opts: ["6% a 10% del canon mensual + IVA", "1 canon anual", "50%", "No se cobra"],
        correct: 0,
        whyCorrect: "Rango estándar del mercado chileno para administración continua. Se paga cada mes sobre canon cobrado.",
        whyWrong: ["", "Fuera de práctica habitual.", "Demasiado alto.", "Es servicio remunerado."]
      },
      {
        q: "Si el cliente es persona natural, el corredor emite:",
        opts: ["Nada", "Boleta de honorarios electrónica con retención 12,25% (2026)", "Solo recibo", "Factura IVA"],
        correct: 1,
        whyCorrect: "Es el documento tributario que corresponde a servicios profesionales cuando el cliente no es contribuyente IVA.",
        whyWrong: ["Es infracción SII.", "", "No sirve tributariamente.", "No corresponde a prestador persona natural sin giro IVA."]
      },
      {
        q: "Si el cliente es empresa con giro, el corredor emite:",
        opts: ["Factura electrónica con IVA 19%", "Nada", "Ticket", "Boleta honorarios"],
        correct: 0,
        whyCorrect: "La empresa usará el IVA como crédito fiscal. La factura es obligatoria para servicios gravados con IVA.",
        whyWrong: ["", "Infracción.", "No sirve tributariamente.", "No corresponde cuando cliente es contribuyente IVA."]
      },
      {
        q: "La comisión debe pactarse:",
        opts: ["Nunca", "Por escrito en la Orden de Compra/Encargo antes de iniciar la gestión", "Verbalmente", "Al cierre"],
        correct: 1,
        whyCorrect: "El documento escrito protege al corredor y al cliente. Define porcentaje, quién paga y condiciones de exigibilidad.",
        whyWrong: ["Genera disputas.", "", "Riesgo legal.", "Demasiado tarde."]
      },
      {
        q: "La retención de honorarios por servicios profesionales en Chile (2026) es:",
        opts: ["25%", "12,25% (se aumenta gradualmente hasta 17% según calendario legal)", "0%", "10%"],
        correct: 1,
        whyCorrect: "La reforma tributaria estableció el aumento gradual hasta 17%. Para 2026 aplica 12,25% (verificar calendario oficial).",
        whyWrong: ["Corresponde a tope proyectado futuro.", "", "No aplica.", "No corresponde."]
      },
      {
        q: "El corredor persona natural sin giro IVA puede optar por:",
        opts: [
          "Ninguna",
          "Evasión",
          "Boleta honorarios con retención",
          "Inscribirse como giro propio (empresa individual o SpA) para optimización tributaria a partir de cierto ingreso"
        ],
        correct: 3,
        whyCorrect: "Sobre cierto umbral (aproximadamente 13,5 UTA/año) es financieramente óptimo crear giro o sociedad para tributar al 25% sobre utilidades con derecho a retiros.",
        whyWrong: ["Sí hay opciones.", "Ilegal.", "Sí está disponible.", ""]
      },
      {
        q: "El código de giro SII para agentes inmobiliarios es:",
        opts: ["683200 (agentes inmobiliarios) o 683100 (actividades inmobiliarias)", "521000", "100", "999999"],
        correct: 0,
        whyCorrect: "Son los códigos CIIU 4.0 chilenos para la actividad. Se selecciona al iniciar actividades en SII.",
        whyWrong: ["", "Corresponde a retail.", "Corresponde a otra actividad.", "No existe."]
      },
      {
        q: "La comisión al cliente se cobra en:",
        opts: ["Nunca", "Al iniciar gestión", "Al firmar escritura pública (compraventa) o contrato arriendo + entrega", "Mensual"],
        correct: 2,
        whyCorrect: "Se cobra cuando la operación se concreta jurídicamente y la entrega material se ha efectuado.",
        whyWrong: ["Implicaría no cobrar.", "Riesgo de cobrar sin resultado.", "", "No corresponde a compraventa."]
      },
      {
        q: "La orden de compra/encargo escrita debe especificar:",
        opts: [
          "Nada",
          "Solo precio",
          "Solo nombre",
          "Partes, servicio, porcentaje y base de cálculo, condiciones de exigibilidad, vigencia y cláusulas arbitrales si aplica"
        ],
        correct: 3,
        whyCorrect: "Es contrato de prestación de servicios que define todos los parámetros del acuerdo.",
        whyWrong: ["Documento formal.", "Incompleto.", "Insuficiente.", ""]
      },
      {
        q: "El IVA sobre comisión del corredor es:",
        opts: ["12,25%", "0%", "Exento", "19% sobre el valor neto del servicio"],
        correct: 3,
        whyCorrect: "Tasa general del IVA en Chile. Aplica en factura emitida por corredor contribuyente IVA.",
        whyWrong: ["Es retención honorarios, no IVA.", "No es la tasa.", "Exención no estándar.", ""]
      },
      {
        q: "Una negociación típica del cliente es:",
        opts: [
          "Nunca negocia",
          "Ignorar",
          "Ofrecer doble",
          "Pedir rebaja de comisión (ej. 1,5% vs 2%) — el corredor puede ceder puntualmente o mantener estándar según criterio profesional"
        ],
        correct: 3,
        whyCorrect: "El corredor tiene derecho a mantener su estándar. Ceder puntualmente por volumen o relación es decisión comercial legítima.",
        whyWrong: ["Negocian.", "No responder es mala práctica.", "Excepcional.", ""]
      },
      {
        q: "La comisión de tasación profesional (servicio separado) ronda:",
        opts: ["No se cobra", "UF 3 a 8 (casas/departamentos estándar)", "UF 100", "UF 50"],
        correct: 1,
        whyCorrect: "Es servicio distinto a corretaje. Se pacta contrato específico y entrega de informe técnico.",
        whyWrong: ["Es servicio pagado.", "", "Excesivo.", "Excesivo."]
      },
      {
        q: "Un cliente que se niega a firmar orden de encargo antes de ver propiedades:",
        opts: [
          "Se le cobra doble",
          "Se conversa y, si insiste, se calificabajo — el servicio profesional requiere formalización",
          "Ninguna",
          "Se le muestran igual"
        ],
        correct: 1,
        whyCorrect: "Sin orden de encargo, riesgo de gestión impaga. El corredor profesional formaliza antes de comprometer tiempo significativo.",
        whyWrong: ["Injusto.", "", "Abdica del servicio.", "Mala práctica comercial."]
      },
      {
        q: "Cuando la comisión se pacta en UF (no en pesos), el cliente:",
        opts: ["Paga siempre lo mismo", "No paga", "Menos", "Paga el valor actualizado de la UF al momento del pago efectivo"],
        correct: 3,
        whyCorrect: "La UF se reajusta diariamente con IPC. Al pactar en UF, el monto en pesos se determina al momento del pago.",
        whyWrong: ["Es reajustable.", "Debe pagar.", "No es reducción.", ""]
      },
      {
        q: "Si el cliente no paga la comisión, el corredor:",
        opts: [
          "Puede iniciar cobro judicial con la orden de encargo firmada como título ejecutivo (con cláusula arbitral si aplica)",
          "Pierde",
          "No hace nada",
          "Acude a SERNAC"
        ],
        correct: 0,
        whyCorrect: "La orden de encargo firmada es título que permite demandar. Si tiene cláusula arbitral se usa arbitraje.",
        whyWrong: ["", "Hay ruta legal.", "Negligencia.", "SERNAC es del cliente."]
      },
      {
        q: "El corredor debe guardar documentación tributaria por:",
        opts: ["6 años (prescripción tributaria general) — regla SII estándar", "1 mes", "1 año", "Nunca"],
        correct: 0,
        whyCorrect: "Es la regla de prescripción ordinaria del SII para fiscalización de impuestos.",
        whyWrong: ["", "Insuficiente legal.", "Insuficiente.", "Responsabilidad fiscal."]
      },
      {
        q: "La factura electrónica se emite desde:",
        opts: ["Google Docs", "WhatsApp", "sii.cl con Clave Tributaria o software certificado integrado", "Papel"],
        correct: 2,
        whyCorrect: "SII obliga a usar factura electrónica desde 2018 para todos los contribuyentes IVA.",
        whyWrong: ["No sirve.", "No sirve.", "", "Ilegal desde hace años."]
      },
      {
        q: "Un corredor con ingresos anuales superiores a ~UF 400 (13,5 UTA referencial) suele optimizar tributariamente:",
        opts: [
          "Creando SpA o empresa individual para tributar sobre utilidades con 25% y planificación de retiros",
          "Manteniéndose persona natural",
          "Evadiendo",
          "Dejando de facturar"
        ],
        correct: 0,
        whyCorrect: "Sobre cierto umbral conviene arquitectura societaria. Tributación 25% sobre utilidades + crédito por retiros puede ser más eficiente que honorarios gravados a tasa marginal.",
        whyWrong: ["", "Pierde optimización.", "Ilegal.", "Infracción."]
      }
    ],
    "3": [
      {
        q: "La sección 'perfil-comprador-section' del CRM TuMatch permite:",
        opts: [
          "Solo nombre",
          "Solo foto",
          "Nada útil",
          "Registrar 30+ campos estructurados: arquetipo, renta, ahorro, RSH, Dicom, bancos, zona, urgencia, canal"
        ],
        correct: 3,
        whyCorrect: "Es el motor del CRM. Campos completos permiten matching, seguimiento profesional y derivación bancaria sin fricciones.",
        whyWrong: ["Subestima.", "Insuficiente para gestión.", "Al contrario: es crítico.", ""]
      },
      {
        q: "El 'cierre-negocio' del CRM administra:",
        opts: ["Marketing", "No existe", "Workflow de 9 hitos desde oferta aceptada hasta entrega material del inmueble", "Solo facturación"],
        correct: 2,
        whyCorrect: "Checklist estructurado que asegura trazabilidad legal y exigibilidad de comisión.",
        whyWrong: ["No es su función.", "Es sección clave.", "", "Incompleto."]
      },
      {
        q: "El tag de temperatura 🔥/🌡️/❄️ sirve para:",
        opts: [
          "Solo color",
          "Estética",
          "Nada",
          "Priorizar agenda diaria del corredor (caliente prioritario, tibio ciclo 21 días, frío sistema automatizado)"
        ],
        correct: 3,
        whyCorrect: "Es la herramienta central de asignación de tiempo del corredor profesional.",
        whyWrong: ["Hay reglas detrás.", "Es funcional.", "Herramienta estratégica.", ""]
      },
      {
        q: "La calculadora hipotecaria integrada en CRM permite:",
        opts: ["Geolocalizar", "Ninguna", "Simular dividendo, escenarios tasa/plazo/pie/subsidio y exportar PDF con propuesta", "Cocina"],
        correct: 2,
        whyCorrect: "Herramienta central para anclar al cliente en primera reunión con cifras concretas.",
        whyWrong: ["No pertinente.", "Central en el flujo.", "", "Absurdo."]
      },
      {
        q: "El pipeline visual del CRM muestra:",
        opts: [
          "Agenda",
          "Leads agrupados por etapa del embudo (captación → discovery → pre-aprobación → visitas → oferta → cierre)",
          "Contabilidad",
          "Solo lista"
        ],
        correct: 1,
        whyCorrect: "Identifica cuellos de botella y prioriza acciones por etapa.",
        whyWrong: ["Separado.", "", "Separado.", "Insuficiente."]
      },
      {
        q: "El histórico de interacciones del lead sirve para:",
        opts: ["Retomar contacto con contexto en 60 segundos; base para trazabilidad profesional", "Facturar", "Vigilancia", "Denunciar"],
        correct: 0,
        whyCorrect: "Antes de llamar revisas 60 segundos el histórico. Parece pro y el cliente lo nota.",
        whyWrong: ["", "No es su función.", "No es su función.", "Absurdo."]
      },
      {
        q: "Los reportes por canal del CRM sirven para:",
        opts: ["Pedir referidos", "Medir conversión y ciclo por canal de origen, decidir dónde invertir tiempo/dinero", "Decorar", "Nada"],
        correct: 1,
        whyCorrect: "Permite decisiones de inversión trimestrales basadas en datos propios.",
        whyWrong: ["Es otro módulo.", "", "Funcional no estética.", "Es fundamental."]
      },
      {
        q: "Los recordatorios automáticos post-firma (30/90/180 días) sirven para:",
        opts: ["Pedir referidos, chequear satisfacción y mantener relación con ex-clientes", "Nada", "Marketing masivo", "Spam"],
        correct: 0,
        whyCorrect: "Mecanismo sistemático de postventa que multiplica referidos y NPS.",
        whyWrong: ["", "Es clave para Sistema de Referidos.", "No es masivo.", "Bien usado no es spam."]
      },
      {
        q: "La actualización ideal del CRM es:",
        opts: ["Anual", "Nunca", "1 vez al cierre", "Diaria — 20 minutos al final de cada día de trabajo"],
        correct: 3,
        whyCorrect: "Sin ritual diario, CRM se desactualiza en 2 semanas.",
        whyWrong: ["Inútil.", "CRM no sirve.", "Se pierde histórico.", ""]
      },
      {
        q: "Los documentos del lead (CI, liquidaciones, F22) deben:",
        opts: ["Nunca", "Solo WhatsApp", "Solo papel", "Subirse al CRM para centralización y ser enviados a bancos en lote"],
        correct: 3,
        whyCorrect: "Centralización reduce fricción y acelera pre-aprobación bancaria.",
        whyWrong: ["Crítico para gestión.", "Se pierden.", "Obsoleto.", ""]
      },
      {
        q: "El canal de origen del lead debe registrarse con:",
        opts: ["Sólo 'lead'", "Solo color", "Nada", "Especificidad: referido_juan_perez / linkedin / portal_pi / instagram_reel_abril"],
        correct: 3,
        whyCorrect: "Solo con canal específico se calculan tasas de conversión por fuente.",
        whyWrong: ["Vago para análisis.", "No es funcional.", "Sin data no hay decisión.", ""]
      },
      {
        q: "El match automático cliente-propiedad del CRM funciona mejor cuando:",
        opts: ["Nunca", "La ficha del cliente está completa: arquetipo + capacidad UF + zonas + urgencia", "Al azar", "Hay poca data"],
        correct: 1,
        whyCorrect: "Datos completos habilitan matching algorítmico; datos vacíos lo degradan a búsqueda manual.",
        whyWrong: ["Es su ventaja.", "", "No es al azar.", "Al contrario."]
      },
      {
        q: "La sección 'Documentos del lead' protege legalmente al corredor porque:",
        opts: [
          "Oculta datos",
          "No protege",
          "Solo estética",
          "Evidencia todo lo aportado por el cliente para trazabilidad en caso de disputa o fiscalización"
        ],
        correct: 3,
        whyCorrect: "La trazabilidad documental es respaldo legal en caso de reclamo o fiscalización CMF/SII.",
        whyWrong: ["No oculta; evidencia.", "Protege.", "Funcional.", ""]
      },
      {
        q: "La seguridad de los datos del CRM TuMatch se rige por:",
        opts: [
          "Nada",
          "Ley 19.628 de protección de datos personales y Reglamento de Protección de Datos (en implementación)",
          "Solo privacidad web",
          "Ninguna regulación"
        ],
        correct: 1,
        whyCorrect: "Los datos personales están protegidos por normativa chilena con sanciones por uso indebido.",
        whyWrong: ["Hay marco legal.", "", "Más específico.", "Hay marco vigente."]
      },
      {
        q: "Los reportes de conversión por corredor permiten a la empresa:",
        opts: ["Nada", "Nada", "Despedir", "Identificar best practices, apoyar desempeño y asignar mejor las derivaciones"],
        correct: 3,
        whyCorrect: "Data-driven management eleva el estándar colectivo.",
        whyWrong: ["Es útil.", "Es útil.", "No es el fin.", ""]
      },
      {
        q: "Integrar WhatsApp con el CRM permite:",
        opts: ["Registrar conversaciones en el histórico del lead automáticamente, sin perder trazabilidad", "Ignorar", "Nada", "Spam"],
        correct: 0,
        whyCorrect: "Integración necesaria para que WhatsApp (canal principal) genere histórico en CRM.",
        whyWrong: ["", "Es lo opuesto.", "Esencial.", "No es su uso."]
      },
      {
        q: "La 'ficha de propiedad' en CRM incluye típicamente:",
        opts: ["Dirección, ROL, tasación referencial, estado legal, fotos, zonas, comparables", "Solo fotos", "Nada", "Solo dirección"],
        correct: 0,
        whyCorrect: "Ficha completa permite presentar al cliente y al banco con toda la data.",
        whyWrong: ["", "Incompleto.", "Central.", "Insuficiente."]
      },
      {
        q: "El reporte NPS del CRM se calcula con:",
        opts: ["Encuesta post-firma al cliente: escala 0-10 · Promotores (9-10) - Detractores (0-6)", "Solo redes", "Opinión del corredor", "Nada"],
        correct: 0,
        whyCorrect: "Es metodología estándar de medición de satisfacción; umbral ≥ 8 habilita pedir referidos con legitimidad.",
        whyWrong: ["", "Muestra segada.", "No es sesgado subjetivo.", "Requiere medición."]
      },
      {
        q: "El pipeline del corredor profesional típico tiene:",
        opts: ["5 leads", "Ninguno", "100-200 leads activos + 300+ históricos para reactivación", "2 leads"],
        correct: 2,
        whyCorrect: "Para cerrar 25 operaciones/año con conversión 12%, necesitas pipeline activo de 200 leads.",
        whyWrong: ["Insuficiente.", "No hay operaciones.", "", "Inviable."]
      },
      {
        q: "El CRM se vuelve activo de carrera porque:",
        opts: [
          "Se borra",
          "Acumula histórico, reputación, documentos y referidos que acompañan al corredor — aunque cambie de oficina",
          "Solo hoy",
          "No es activo"
        ],
        correct: 1,
        whyCorrect: "Es tu memoria operativa y tu patrimonio profesional a largo plazo.",
        whyWrong: ["Es propio del usuario.", "", "Crece con el tiempo.", "Es activo central."]
      }
    ],
    "4": [
      {
        q: "El campo 'Tramo RSH' del perfil-comprador sirve para:",
        opts: ["Marketing", "Nada", "Estadística", "Determinar el subsidio aplicable (DS1 T1/T2/T3 · DS49 · DS19)"],
        correct: 3,
        whyCorrect: "El RSH determina la vulnerabilidad económica y el tramo del subsidio al que puede postular el cliente.",
        whyWrong: ["No es marketing.", "Es crítico.", "Es decisional.", ""]
      },
      {
        q: "La 'Capacidad estimada crédito (UF)' se llena a partir de:",
        opts: ["Solo Dicom", "Solo F22", "Output de Calculadora Hipotecaria TuMatch con renta + pie + Dicom + subsidio", "Adivinación"],
        correct: 2,
        whyCorrect: "La calculadora combina todas las variables y entrega capital máximo amortizable dada la carga 25%.",
        whyWrong: ["Insuficiente.", "Insuficiente.", "", "Impreciso."]
      },
      {
        q: "El campo 'Bancos a presentar (3)' es estratégico porque:",
        opts: [
          "Es estético",
          "No importa",
          "Es solo texto",
          "Fuerza la disciplina profesional de presentar a 3 en paralelo (probabilidad 88% vs 55% uno)"
        ],
        correct: 3,
        whyCorrect: "La casilla obliga al corredor a planificar la estrategia de 3 bancos.",
        whyWrong: ["Es decisional.", "Es clave.", "Tiene propósito.", ""]
      },
      {
        q: "El Dicom/morosidades se registra con:",
        opts: ["Detalle: Limpio / Cerradas X (con certificados adjuntos) / Vigentes (con plan de pago)", "Solo color", "Solo 'sí'", "Nada"],
        correct: 0,
        whyCorrect: "La granularidad permite preparar scoring antes de postular.",
        whyWrong: ["", "No es código visual.", "Insuficiente.", "Se pierde info."]
      },
      {
        q: "El campo 'Renta líquida pareja' se registra cuando:",
        opts: [
          "Solo si casados",
          "Nunca",
          "Hay deudor solidario (matrimonio o convivencia con compromiso); suma rentas para carga financiera",
          "Siempre"
        ],
        correct: 2,
        whyCorrect: "La suma de rentas exige firma como deudores solidarios, independiente de estado civil.",
        whyWrong: ["Puede ser convivencia civil.", "Se usa cuando aplica.", "", "Solo si hay deudor solidario."]
      },
      {
        q: "El campo 'Ahorro disponible (pie)' incluye:",
        opts: ["Solo AFC", "Solo efectivo", "Dinero en cuenta + AFC (si aplica) + cuenta de ahorro vivienda + cartera líquida", "Nada"],
        correct: 2,
        whyCorrect: "Cualquier activo líquido que el cliente pueda aportar como pie.",
        whyWrong: ["Incompleto.", "Subestima.", "", "Agregado."]
      },
      {
        q: "El campo 'Antigüedad laboral' para un dependiente recién cambiado a empleo indefinido se registra:",
        opts: [
          "Con detalle del cambio (ej. 8 meses en empresa actual, indefinido desde hace 3 meses) para evitar rechazo por antigüedad",
          "Oculta",
          "Nunca",
          "Como indefinida"
        ],
        correct: 0,
        whyCorrect: "Tragamillas del scoring bancario. Antigüedad insuficiente = rechazo.",
        whyWrong: ["", "Desinforma.", "Incumplimiento.", "Falta especificidad."]
      },
      {
        q: "El campo 'Urgencia' se llena con:",
        opts: ["Nada", "Color", "Alta/baja", "Nivel específico + motivo: Alta (arriendo termina 90 días · embarazo), Media, Baja (sin deadline)"],
        correct: 3,
        whyCorrect: "El motivo concreto define plan de acción del corredor.",
        whyWrong: ["No útil.", "Nada funcional.", "Demasiado vago.", ""]
      },
      {
        q: "El campo 'Canal origen' se llena:",
        opts: ["Solo 'lead'", "Adivinando", "Nada", "Específicamente: referido_juan_gomez / linkedin_post_marzo / portal_pi_ficha_987"],
        correct: 3,
        whyCorrect: "Específicamente para reportes por canal posterior.",
        whyWrong: ["Imposible de analizar.", "Error humano.", "Se pierde data.", ""]
      },
      {
        q: "El campo 'Propiedad objetivo (UF)' se define por:",
        opts: ["Solo precio", "Al azar", "Capacidad crédito + pie + subsidio (si aplica) = tope UF propiedad", "Sueño del cliente"],
        correct: 2,
        whyCorrect: "Capacidad realista, no aspiracional.",
        whyWrong: ["Incompleto.", "No metódico.", "", "Irreal."]
      },
      {
        q: "El campo 'Zona preferida' se llena con:",
        opts: [
          "Solo RM",
          "Solo 'Santiago'",
          "2-3 comunas específicas con sub-zonas (ej. La Florida norte / Ñuñoa poniente) para matching fino",
          "Ninguna"
        ],
        correct: 2,
        whyCorrect: "Granularidad habilita match preciso con cartera.",
        whyWrong: ["Insuficiente.", "Vago.", "", "No es útil."]
      },
      {
        q: "Para un postulante a DS1 T3, el campo 'Postulará subsidio' se llena con:",
        opts: ["Sí · DS1 T3 (RSH entre 50-60%, en tramitación / aprobado / pendiente) + monto esperado UF", "No", "Solo 'sí'", "Tal vez"],
        correct: 0,
        whyCorrect: "Detalle permite estructurar pie = subsidio + ahorro.",
        whyWrong: ["", "Incorrecto.", "Falta contexto.", "No es decisional."]
      },
      {
        q: "Los documentos del perfil (CI, liquidaciones) se suben:",
        opts: ["Nunca", "Al CRM en la sección documentos del lead, centralizados", "Solo banco", "Al WhatsApp"],
        correct: 1,
        whyCorrect: "Centralización reduce fricción y evita pérdida.",
        whyWrong: ["Incumplimiento.", "", "Se pierde trazabilidad.", "Se pierden."]
      },
      {
        q: "El campo 'Deudas vigentes otros bancos' se llena desde:",
        opts: ["Invento", "Certificado deudas CMF del cliente · adjunto al perfil", "Memoria", "No se llena"],
        correct: 1,
        whyCorrect: "Documento oficial; evitar estimaciones.",
        whyWrong: ["Fraude.", "", "No es confiable.", "Dato crítico."]
      },
      {
        q: "El perfil-comprador-section se completa:",
        opts: [
          "Al cierre",
          "Progresivamente: primer contacto = básicos; discovery = profundidad; pre-aprobación = carpeta completa",
          "Solo fotos",
          "Nunca"
        ],
        correct: 1,
        whyCorrect: "Es proceso progresivo alineado con el avance del embudo.",
        whyWrong: ["Tarde.", "", "No sirve.", "Inservible."]
      },
      {
        q: "Un cliente con pareja conviviente civil se registra como:",
        opts: ["Conviviente civil con detalle si firmará como deudor solidario", "Soltero", "Casado", "Ninguno"],
        correct: 0,
        whyCorrect: "Estado real afecta suma de rentas y responsabilidad civil.",
        whyWrong: ["", "Desinforma al banco.", "Impreciso.", "Desinforma."]
      },
      {
        q: "Si el cliente es independiente (F22 insuficiente), el perfil debe incluir:",
        opts: [
          "Ignorar",
          "Solo F22",
          "Nada",
          "Fecha de inicio boletas + último F22 presentado + utilidad tributable + plan para completar 2 años de F22"
        ],
        correct: 3,
        whyCorrect: "Transparencia permite planificar ruta (leasing, ahorro extra, aval).",
        whyWrong: ["Abdica.", "Insuficiente para plan.", "Falta contexto.", ""]
      },
      {
        q: "El campo 'Próxima acción + fecha' activa:",
        opts: ["Nada", "Recordatorio automático en la agenda; obliga al corredor a cerrar el loop", "Spam", "Marketing"],
        correct: 1,
        whyCorrect: "Sistema de productividad personal del corredor.",
        whyWrong: ["Es activo.", "", "No es spam.", "No es marketing."]
      },
      {
        q: "El perfil completo de un cliente hasta pre-aprobación bancaria debería estar en:",
        opts: ["6 meses", "Nunca", "3 años", "3 a 5 días hábiles tras la primera reunión (si el cliente coopera)"],
        correct: 3,
        whyCorrect: "Plazo estándar profesional para armar carpeta completa y postular a 3 bancos.",
        whyWrong: ["Fuera de plazo.", "No hay servicio.", "Inoperante.", ""]
      },
      {
        q: "Si tras 14 días el cliente no entrega documentos, el corredor debe:",
        opts: [
          "Presionar",
          "Esperar 6 meses",
          "Abandonar sin aviso",
          "Conversación honesta: ¿sigue vigente el proyecto? — calificar temprano, no invertir 6 meses con alto riesgo de no cierre"
        ],
        correct: 3,
        whyCorrect: "Calificación temprana protege el tiempo del corredor.",
        whyWrong: ["Mala relación.", "Malgasto.", "Unprofesional.", ""]
      }
    ],
    "5": [
      {
        q: "La primera reunión con el cliente debe terminar con:",
        opts: ["Muestra de propiedades", "Script de solicitud de carpeta + checklist por WhatsApp + compromiso de plazo", "Nada", "Contrato firmado"],
        correct: 1,
        whyCorrect: "Transforma la reunión en acción. El cliente se siente profesionalmente acompañado.",
        whyWrong: ["Prematuro sin pre-aprobación.", "", "Pasivo.", "Demasiado tarde aún."]
      },
      {
        q: "El script profesional de solicitud de carpeta usa tono:",
        opts: [
          "Servicial + explicativo: 'para que te ofrezcan la mejor tasa en 2 semanas necesitamos armar...'",
          "Autoritario",
          "Burocrático",
          "Amenazante"
        ],
        correct: 0,
        whyCorrect: "Enmarca la carpeta como beneficio al cliente (mejor tasa), no como requisito para el corredor.",
        whyWrong: ["", "Rompe rapport.", "Enfría la relación.", "Daña la relación."]
      },
      {
        q: "El checklist estándar del dependiente incluye:",
        opts: [
          "CI + comprobante domicilio + 3 liquidaciones + contrato + cotizaciones AFP 12 meses + cartolas 6 meses + Dicom + deudas CMF + RSH si aplica",
          "Solo F22",
          "Solo CI",
          "Nada"
        ],
        correct: 0,
        whyCorrect: "Lista completa para pre-aprobación profesional.",
        whyWrong: ["", "Es independiente.", "Insuficiente.", "Ninguna gestión."]
      },
      {
        q: "El checklist del independiente añade:",
        opts: ["Nada", "Solo Dicom", "F22 últimos 2 años + carpeta tributaria SII + boletas honorarios 12 meses + cartola banco 6 meses", "Solo CI"],
        correct: 2,
        whyCorrect: "Banco exige demostrar ingresos tributariamente validados 2 años.",
        whyWrong: ["Rechazo seguro.", "Insuficiente.", "", "Insuficiente."]
      },
      {
        q: "El plazo razonable para ingresar carpeta completa a bancos es:",
        opts: ["Mismo día", "3 a 5 días hábiles tras primera reunión (con cliente cooperativo)", "Nunca", "1 mes"],
        correct: 1,
        whyCorrect: "Plazo estándar profesional; más extenso reduce probabilidad de cierre.",
        whyWrong: ["Imposible.", "", "Sin gestión.", "Muy lento."]
      },
      {
        q: "Si el cliente se atora con un documento específico (ej. certificado AFP), el corredor debe:",
        opts: ["Abandonar", "Agendar 15 min de videollamada para hacerlo juntos paso a paso", "Mentir", "Presionar"],
        correct: 1,
        whyCorrect: "Acompañamiento en el punto de fricción convierte molestia en servicio percibido.",
        whyWrong: ["Unprofesional.", "", "Ilegal.", "Daña la relación."]
      },
      {
        q: "El certificado AFP con cotizaciones 12 meses se descarga desde:",
        opts: ["Sernac", "Imposible", "afp.cl (portal oficial AFP) con ClaveÚnica o de la propia AFP", "Banco"],
        correct: 2,
        whyCorrect: "Descarga inmediata online.",
        whyWrong: ["No emite.", "Es accesible.", "", "No lo emite."]
      },
      {
        q: "La Carpeta Tributaria SII es:",
        opts: ["Pagada", "En papel", "Imposible", "Gratuita y electrónica, generada en sii.cl con ClaveTributaria del contribuyente"],
        correct: 3,
        whyCorrect: "Documento electrónico inmediato.",
        whyWrong: ["Gratuita.", "Electrónica.", "Es accesible.", ""]
      },
      {
        q: "El certificado RSH se obtiene desde:",
        opts: ["registrosocial.gob.cl con ClaveÚnica · o municipalidad", "MINVU", "Banco", "Notaría"],
        correct: 0,
        whyCorrect: "Plataforma oficial MIDESO que emite el certificado.",
        whyWrong: ["", "Usa pero no emite.", "No emite.", "No emite."]
      },
      {
        q: "El certificado deudas CMF (ex-SBIF) se obtiene:",
        opts: ["Imposible", "Desde CMF para el propio titular, con ClaveÚnica, o desde la app de bancos aliados", "Solo papel", "En banco competidor"],
        correct: 1,
        whyCorrect: "Documento público para el titular; los bancos también lo consultan.",
        whyWrong: ["Es accesible.", "", "Es electrónico.", "No lo emite competidor."]
      },
      {
        q: "Si el cliente tiene morosidad Dicom vigente, antes de postular al banco debe:",
        opts: [
          "Cambiar de país",
          "Postular igual",
          "Pagar, exigir certificado de cierre, esperar 30-45 días para actualización en bureau, luego postular",
          "Ignorar"
        ],
        correct: 2,
        whyCorrect: "Rechazo seguro si no se limpia antes. Certificado de cierre es evidencia de pago.",
        whyWrong: ["Absurdo.", "Rechazo seguro.", "", "Rechazo."]
      },
      {
        q: "El comprobante de domicilio válido para el banco es:",
        opts: [
          "Certificado municipal",
          "Boleta servicio (luz/agua/gas/internet) de los últimos 3 meses a nombre del cliente o cónyuge",
          "Solo luz",
          "Cualquiera"
        ],
        correct: 1,
        whyCorrect: "Acepta cualquier servicio básico; certificado municipal no es documento financiero.",
        whyWrong: ["Municipal no cumple rol bancario.", "", "Más amplio.", "No cualquiera."]
      },
      {
        q: "Si el cliente vive con familia y no tiene cuentas a su nombre:",
        opts: [
          "Solo casados",
          "No se puede",
          "Se acepta contrato arriendo vigente + declaración jurada + boleta a nombre del titular del arriendo",
          "Nunca"
        ],
        correct: 2,
        whyCorrect: "Flexibilidad documental para este perfil frecuente (jóvenes).",
        whyWrong: ["Discriminatorio.", "Hay solución.", "", "Inflexible."]
      },
      {
        q: "La documentación debe enviarse al banco en formato:",
        opts: ["Fotos borrosas", "WhatsApp", "Papel", "PDF digital (original escaneado legible) · múltiples bancos en paralelo mismo día"],
        correct: 3,
        whyCorrect: "Formato estándar. PDF legible evita idas y vueltas.",
        whyWrong: ["Rechazo por legibilidad.", "Informal.", "Lento.", ""]
      },
      {
        q: "Si el cliente entrega liquidación con bono variable no constante:",
        opts: ["Se ignora", "No sirve", "Se incluye todo", "El banco pondera solo la parte fija y un % del variable probado con historial 6+ meses"],
        correct: 3,
        whyCorrect: "Política prudencial: ingresos variables no se ponderan al 100% por riesgo de volatilidad.",
        whyWrong: ["Se pondera.", "Sí sirve parcialmente.", "Sobreestima.", ""]
      },
      {
        q: "Un cliente con honorarios de emprendedor reciente (< 12 meses de boletas) debe:",
        opts: [
          "Rendirse",
          "Esperar",
          "Acumular al menos 12 meses de boletas antes de postular a banco · mientras, considerar leasing habitacional",
          "Mentir"
        ],
        correct: 2,
        whyCorrect: "Sin F22 con utilidades los bancos rechazan; leasing es alternativa real.",
        whyWrong: ["Hay ruta.", "Pasividad.", "", "Fraude."]
      },
      {
        q: "La contraseña SII del cliente (ClaveTributaria) debe:",
        opts: [
          "Ser usada por el cliente mismo; el corredor guía pero no ingresa con credenciales ajenas",
          "Pasársela al corredor",
          "Publicarla",
          "Olvidarla"
        ],
        correct: 0,
        whyCorrect: "Seguridad y buenas prácticas: el corredor no maneja credenciales personales del cliente.",
        whyWrong: ["", "Violación seguridad.", "Violación máxima.", "No funcional."]
      },
      {
        q: "El envío de la carpeta a 3 bancos en paralelo se registra en CRM:",
        opts: ["No se registra", "Marginal", "Solo al cierre", "Con fecha de envío a cada banco, ejecutivo asignado y plazo esperado de respuesta"],
        correct: 3,
        whyCorrect: "Registro en CRM permite seguimiento profesional de los 3 canales.",
        whyWrong: ["Pérdida trazabilidad.", "Pierdes poder de negociación.", "Tarde.", ""]
      },
      {
        q: "Un cliente que entrega carpeta pero pidió no contactar al banco aún, se debe:",
        opts: ["Forzar", "Ignorar", "Enviar igual", "Respetar; archivar carpeta en CRM y agendar reactivación cuando el cliente dé luz verde"],
        correct: 3,
        whyCorrect: "Respeto del consentimiento es esencial. Documentar para reactivar.",
        whyWrong: ["Daña la relación.", "Contra el cliente.", "Violación consentimiento.", ""]
      },
      {
        q: "El plazo de respuesta típico del banco tras ingreso de carpeta completa es:",
        opts: ["1 día", "1 año", "Nunca", "5 a 15 días hábiles para pre-aprobación estándar"],
        correct: 3,
        whyCorrect: "Plazo operativo estándar; más tiempo indica problema en scoring o documentación.",
        whyWrong: ["Raro.", "Absurdo.", "Hay respuesta.", ""]
      }
    ],
    "6": [
      {
        q: "El hito 1 del cierre-negocio es:",
        opts: ["Escritura", "Entrega", "Oferta aceptada (oferta escrita firmada + respuesta del vendedor)", "Promesa"],
        correct: 2,
        whyCorrect: "Inicia el pipeline formal de cierre-negocio. Se documenta en CRM.",
        whyWrong: ["Es hito 7.", "Es hito 9.", "", "Es hito 5."]
      },
      {
        q: "El hito 'pre-compromiso / reserva' del cierre-negocio establece:",
        opts: ["Entrega inmediata", "Seña (3-5% del precio habitual) como compromiso previo a promesa", "Nada", "Cierre total"],
        correct: 1,
        whyCorrect: "La seña consolida la intención mientras se prepara promesa.",
        whyWrong: ["Prematuro.", "", "Tiene propósito.", "Aún falta promesa."]
      },
      {
        q: "La tasación bancaria ocurre en el hito:",
        opts: ["1", "Nunca", "3 (tras pre-compromiso, banco contrata tasador CMF independiente)", "9"],
        correct: 2,
        whyCorrect: "Secuencia lógica: pre-compromiso asegura negocio; tasación asegura valor para banco.",
        whyWrong: ["Prematuro.", "Es hito obligatorio.", "", "Demasiado tarde."]
      },
      {
        q: "La promesa de compraventa se firma:",
        opts: [
          "Nunca",
          "En WhatsApp",
          "En el notario",
          "Sí, se eleva a escritura pública ante notario con cláusulas de condiciones suspensivas, multas y plazos"
        ],
        correct: 3,
        whyCorrect: "Es contrato formal firmado ante notario. Puede ser instrumento privado autorizado ante notario también.",
        whyWrong: ["Es hito 5.", "Informal; no vinculante plena.", "No válida.", ""]
      },
      {
        q: "Si la propiedad del vendedor tiene hipoteca previa, el hito 6 requiere:",
        opts: ["Alzamiento de hipoteca vendedor simultáneo con nueva hipoteca comprador en notaría", "Opcional", "Ignorar", "Prohibido"],
        correct: 0,
        whyCorrect: "El banco del vendedor recibe el saldo y firma el alzamiento; se inscribe junto a la nueva hipoteca.",
        whyWrong: ["", "Obligatorio si hay hipoteca previa.", "Se cae la operación.", "Operación estándar."]
      },
      {
        q: "El hito 'escritura de compraventa definitiva' requiere:",
        opts: ["Solo abogado", "Solo comprador", "Solo vendedor", "Partes + notario + banco comprador + recursos disponibles para pago"],
        correct: 3,
        whyCorrect: "Acto complejo. El banco desembolsa contra inscripción.",
        whyWrong: ["Notario es el oficio.", "Insuficiente.", "Insuficiente.", ""]
      },
      {
        q: "La inscripción en CBR toma típicamente:",
        opts: ["Horas", "6 meses", "Años", "10 a 45 días hábiles según comuna (Santiago 25-40)"],
        correct: 3,
        whyCorrect: "Es el cuello de botella habitual del proceso. Comunas grandes son más lentas.",
        whyWrong: ["Imposible.", "Fuera de rango.", "Raro.", ""]
      },
      {
        q: "La entrega material del inmueble (hito 9) se documenta con:",
        opts: ["WhatsApp", "Nada", "Acta de entrega firmada por ambas partes + inventario si aplica", "Solo foto"],
        correct: 2,
        whyCorrect: "Documento formal que deja constancia del estado de entrega. Clave para exigibilidad de comisión.",
        whyWrong: ["Informal.", "Sin evidencia legal.", "", "Insuficiente legal."]
      },
      {
        q: "La exigibilidad de la comisión del corredor TuMatch requiere:",
        opts: [
          "Solo entrega",
          "Solo firma",
          "Nada",
          "(i) contrato/promesa firmado + (ii) empresa recibió pago comisión + (iii) entrega formal (Cláusula Cuarta)"
        ],
        correct: 3,
        whyCorrect: "Tres requisitos copulativos. Documentación de los 9 hitos del CRM es respaldo para hacer valer la cláusula.",
        whyWrong: ["Falta pago a empresa.", "Insuficiente.", "Sí hay requisitos.", ""]
      },
      {
        q: "Si la promesa tiene condición suspensiva de pre-aprobación bancaria y no se cumple:",
        opts: ["La promesa queda sin efecto; partes recuperan seña según cláusula pactada", "Nada", "Se cierra igual", "Multa máxima"],
        correct: 0,
        whyCorrect: "La condición no cumplida libera a las partes. La cláusula pactada define devolución de seña.",
        whyWrong: ["", "Sí hay efecto.", "Contradice condición.", "Depende cláusula."]
      },
      {
        q: "La cláusula de multa típica en promesa por incumplimiento injustificado es:",
        opts: ["50%", "10 UF", "Sin multa", "El doble o triple de la seña entregada · o monto específico pactado"],
        correct: 3,
        whyCorrect: "Rango estándar del mercado chileno. Protege al cumplidor.",
        whyWrong: ["Fuera de estándar.", "Irrisorio.", "Sin protección.", ""]
      },
      {
        q: "El banco desembolsa el crédito hipotecario al vendedor:",
        opts: [
          "Directamente en efectivo",
          "Nunca",
          "Tras la inscripción efectiva de la escritura y hipoteca en CBR, en cuenta vista del vendedor",
          "Antes de la escritura"
        ],
        correct: 2,
        whyCorrect: "Protección al banco: solo paga contra hipoteca inscrita.",
        whyWrong: ["Prohibido antilavado.", "Es el mecanismo.", "", "Riesgo al banco."]
      },
      {
        q: "El rol del corredor en la firma de escritura es:",
        opts: ["Firmar él", "No participa", "Ignorar", "Coordinar notario, banco, vendedor y comprador; revisar minuta; acompañar firma y entrega"],
        correct: 3,
        whyCorrect: "Rol central: asegura que todos lleguen con documentos correctos.",
        whyWrong: ["No es parte de la compraventa.", "Sí participa.", "Abdica.", ""]
      },
      {
        q: "La 'minuta de escritura' es:",
        opts: ["Opcional", "Borrador de la escritura que notario comparte a las partes para revisión previa a firma", "Un apunte", "Nada"],
        correct: 1,
        whyCorrect: "Revisión previa evita errores. Notario acepta observaciones.",
        whyWrong: ["Esencial.", "", "Es formal.", "Documento clave."]
      },
      {
        q: "Si el comprador descubre un vicio redhibitorio tras la entrega:",
        opts: ["Paga más", "Pierde", "Nada", "Tiene acciones legales por vicios ocultos (Art. 1.858 y sgtes. CC) en plazos establecidos"],
        correct: 3,
        whyCorrect: "Protección legal estándar: rebaja de precio o rescisión.",
        whyWrong: ["Contra derecho.", "Protección existe.", "Hay acciones.", ""]
      },
      {
        q: "El acto de entrega debe incluir:",
        opts: [
          "Acta + entrega de llaves + documentos técnicos (manuales, boletas servicios, planos si aplica) + estado de cuentas",
          "Solo llave",
          "Solo documentos",
          "Nada"
        ],
        correct: 0,
        whyCorrect: "Entrega completa protege al comprador. Buenas prácticas profesionales.",
        whyWrong: ["", "Incompleto.", "Incompleto.", "No es entrega."]
      },
      {
        q: "Si hay cuentas pendientes del vendedor (luz, agua, gas) al momento de entrega:",
        opts: [
          "Se liquidan en el acto de entrega o se retienen del precio por el notario/banco hasta aclaración",
          "Problema del comprador",
          "El banco paga",
          "Nada"
        ],
        correct: 0,
        whyCorrect: "Protección al comprador. El vendedor responde por cuentas de su periodo.",
        whyWrong: ["", "Transferencia de deudas indebida.", "El banco no absorbe deudas ajenas.", "Responsabilidad del vendedor."]
      },
      {
        q: "La trazabilidad de los 9 hitos en CRM es importante porque:",
        opts: [
          "Protege al corredor, al cliente y a TuMatch en caso de disputa; sirve para hacer exigible la comisión",
          "Solo color",
          "Nada",
          "Estadística"
        ],
        correct: 0,
        whyCorrect: "Documentación es respaldo legal y económico.",
        whyWrong: ["", "Es sustancial.", "Es fundamental.", "Funcional."]
      },
      {
        q: "El tiempo típico entre promesa y escritura definitiva es:",
        opts: ["6 meses", "30 a 60 días (condicionado por banco, subsidio, alzamiento hipoteca, etc.)", "1 año", "1 día"],
        correct: 1,
        whyCorrect: "Plazo operativo estándar. Puede extenderse si hay alzamiento complejo.",
        whyWrong: ["Raro.", "", "Excesivo.", "Imposible."]
      },
      {
        q: "El desembolso de comisión al corredor ocurre:",
        opts: [
          "Nunca",
          "Al firmar oferta",
          "Al visitar",
          "Al cumplir los tres requisitos copulativos del Contrato Cláusula Cuarta (firma + pago empresa + entrega)"
        ],
        correct: 3,
        whyCorrect: "Es la condición contractual explícita.",
        whyWrong: ["Es exigible.", "Prematuro.", "Prematuro.", ""]
      }
    ],
    "7": [
      {
        q: "La tasa de conversión global objetivo del corredor profesional TuMatch es:",
        opts: ["1%", "≥ 12% (leads calificados → operaciones cerradas)", "100%", "70%"],
        correct: 1,
        whyCorrect: "25+ operaciones/año exigen pipeline activo ~200 leads. 12% de conversión es estándar profesional.",
        whyWrong: ["Subestima.", "", "Imposible.", "Irrealmente alto."]
      },
      {
        q: "La tasa de conversión de red caliente debería ser:",
        opts: ["2%", "≥ 30% (bajo esto, revisar calidad del servicio)", "10%", "50% siempre"],
        correct: 1,
        whyCorrect: "Red caliente tiene confianza previa; conversión menor indica problemas en servicio.",
        whyWrong: ["Indicativo crítico de mala gestión.", "", "Insuficiente.", "No siempre alcanzable."]
      },
      {
        q: "El ciclo promedio lead→escritura en red caliente es:",
        opts: ["20 años", "60-90 días", "1 día", "5 años"],
        correct: 1,
        whyCorrect: "Confianza previa acelera discovery y decisión.",
        whyWrong: ["Absurdo.", "", "Imposible.", "Inviable."]
      },
      {
        q: "El ticket promedio del primera vivienda en RM 2026 oscila:",
        opts: ["UF 10", "UF 20.000", "UF 100", "UF 2.500 a 4.000"],
        correct: 3,
        whyCorrect: "Rango de primera vivienda considerando combinaciones DS1, capacidad de pie y zonas populares.",
        whyWrong: ["Fuera de rango.", "Excede primera vivienda estándar.", "Imposible.", ""]
      },
      {
        q: "La comisión neta promedio por operación cerrada ronda:",
        opts: ["UF 1", "UF 20 a 35 (según lado y tramo % gestión)", "UF 200", "UF 0"],
        correct: 1,
        whyCorrect: "Ejemplo: 2% de UF 3.000 = UF 60; 35% gestión autónoma = UF 21.",
        whyWrong: ["Irrealmente bajo.", "", "Irrealmente alto.", "No es gratuito."]
      },
      {
        q: "El % de referidos en pipeline activo saludable es:",
        opts: ["5%", "1%", "Nada", "≥ 40% (indica Sistema de Referidos funcionando)"],
        correct: 3,
        whyCorrect: "Pareto inmobiliario: 60-80% de operaciones de carrera provienen de red caliente.",
        whyWrong: ["Indica sistema ausente.", "Ausente.", "Sistema deficiente.", ""]
      },
      {
        q: "El NPS mínimo para solicitar referidos con legitimidad es:",
        opts: ["0", "≥ 8 (escala 0-10) en encuesta post-firma", "1", "Cualquiera"],
        correct: 1,
        whyCorrect: "Umbral de servicio excelente. Bajo 8, primero resolver fricción detectada.",
        whyWrong: ["Sin referencia.", "", "Insuficiente.", "Umbral existe."]
      },
      {
        q: "Un forecast anual del corredor autónomo con 20 operaciones/año UF 3.000 promedio y 35% gestión es:",
        opts: ["~UF 420 comisión neta anual ≈ $16.380.000 brutos antes de retención", "$0", "$100M", "$1M"],
        correct: 0,
        whyCorrect: "Cálculo: 20 ops × 2% UF 3.000 = UF 1.200 bruto TuMatch. 35% = UF 420 corredor.",
        whyWrong: ["", "Fuera de escala.", "Irrealmente alto.", "Irrealmente bajo."]
      },
      {
        q: "El corredor con ingresos > ~UF 400 al año (13,5 UTA referencial) debe considerar:",
        opts: [
          "Evadir",
          "Nada",
          "Dejar de facturar",
          "Constituir empresa individual o SpA para optimización tributaria (25% vs tasa marginal honorarios)"
        ],
        correct: 3,
        whyCorrect: "Optimización legítima con asesoría contable.",
        whyWrong: ["Ilegal.", "Pierde optimización.", "Infracción SII.", ""]
      },
      {
        q: "La retención de honorarios 2026 es:",
        opts: ["12,25% (aumento gradual programado hasta 17%)", "0%", "25%", "10%"],
        correct: 0,
        whyCorrect: "Calendario reforma tributaria.",
        whyWrong: ["", "No se retiene.", "Excesivo.", "Incorrecto."]
      },
      {
        q: "El reporte de conversión por canal muestra:",
        opts: ["Qué canal (referido, LinkedIn, portal, inbound) genera más cierres y con qué ciclo", "Nada", "Solo leads", "Marketing"],
        correct: 0,
        whyCorrect: "Base para decisión de inversión de tiempo/dinero.",
        whyWrong: ["", "Es decisional.", "Más granular.", "Es interno."]
      },
      {
        q: "El reporte de ciclo promedio por etapa identifica:",
        opts: ["Cuellos de botella (discovery lento / pre-aprobación lenta / visitas lentas)", "Solo cierre", "Nada", "Solo volumen"],
        correct: 0,
        whyCorrect: "Enfoca la mejora continua.",
        whyWrong: ["", "Incompleto.", "Funcional.", "Superficial."]
      },
      {
        q: "Si la conversión de pre-aprobación a oferta baja del 70%, indica:",
        opts: ["Normal", "Solo estadística", "Ignorar", "Problemas en calificación previa o en selección de propiedades — revisar discovery y match"],
        correct: 3,
        whyCorrect: "Alertas de reporte permiten actuar temprano.",
        whyWrong: ["Es indicador.", "Es actuable.", "Perjudica.", ""]
      },
      {
        q: "El reporte de pipeline activo del corredor top genera:",
        opts: ["5 leads", "Pocos leads", "100-200 leads activos en distintas etapas", "1 lead"],
        correct: 2,
        whyCorrect: "Para cerrar 25 ops/año con ~12% conversión.",
        whyWrong: ["Insuficiente.", "Insuficiente.", "", "Imposible."]
      },
      {
        q: "La planificación anual de ingresos del corredor profesional usa:",
        opts: ["Forecast del CRM (pipeline × probabilidad × ticket × comisión %) actualizado mensual", "Memoria", "Nada", "Invento"],
        correct: 0,
        whyCorrect: "Metodología estándar para proyectar ingresos y flujo.",
        whyWrong: ["", "No confiable.", "Sin control.", "Sin rigor."]
      },
      {
        q: "Un PPM (Pago Provisional Mensual) del corredor persona natural corresponde a:",
        opts: ["Impuesto nuevo", "Retención sobre boletas de honorarios que se abona a cuenta del impuesto anual", "Nada", "Fondo mutuo"],
        correct: 1,
        whyCorrect: "Mecanismo SII para provisionar impuesto anual.",
        whyWrong: ["No es impuesto adicional.", "", "Es funcional.", "No es inversión."]
      },
      {
        q: "Si el corredor proyecta ingreso bajo, en el F22 anual:",
        opts: ["Paga más", "No declara", "Ninguna diferencia", "Puede recuperar retenciones excedentes"],
        correct: 3,
        whyCorrect: "La devolución de impuestos es aplicación de PPM + retención frente a impuesto real.",
        whyWrong: ["Al revés si retuvieron demás.", "Debe declarar.", "Hay ajuste.", ""]
      },
      {
        q: "La diferencia entre comisión bruta y comisión neta del corredor es:",
        opts: [
          "Ninguna",
          "La neta es más alta",
          "Comisión bruta es lo que cobra TuMatch al cliente; comisión neta del corredor es su % según gestión menos retenciones",
          "Igual"
        ],
        correct: 2,
        whyCorrect: "Bruta → cliente paga a TuMatch; de ahí se distribuye al corredor según tramo contractual menos retención.",
        whyWrong: ["Son distintas.", "Lógicamente imposible.", "", "Neta < bruta."]
      },
      {
        q: "Un corredor con pipeline saludable lleva en el CRM:",
        opts: ["Estado actualizado de cada etapa, próxima acción con fecha, documentos subidos y temperatura", "Nada", "Memoria", "Solo nombres"],
        correct: 0,
        whyCorrect: "Sin actualización no hay gestión profesional.",
        whyWrong: ["", "Sin gestión.", "Se pierde.", "Insuficiente."]
      },
      {
        q: "La reunión semanal del equipo TuMatch sirve para:",
        opts: [
          "Solo admin",
          "Analizar casos reales, compartir objeciones frecuentes, discutir tasas actuales y elevar estándar colectivo",
          "Café",
          "Ninguna"
        ],
        correct: 1,
        whyCorrect: "Elevación continua del estándar colectivo mediante learning compartido.",
        whyWrong: ["Tiene valor.", "", "Desperdicio.", "Es estratégico."]
      }
    ]
  },
  finalQuestions: [
    {
      q: "La comisión por referido de comprador según Contrato TuMatch es:",
      opts: ["25% de la comisión bruta de la compraventa", "50%", "0%", "10%"],
      correct: 0,
      whyCorrect: "Letra a) de la Cláusula Cuarta.",
      whyWrong: ["", "Fuera de tramo.", "Sí se paga.", "No corresponde."]
    },
    {
      q: "La comisión por gestión comercial integral CON TL (modalidad estándar) es:",
      opts: ["10%", "50%", "30% base, hasta 40% u 60% según alcance", "20%"],
      correct: 2,
      whyCorrect: "Cláusula Cuarta letra c) del Contrato.",
      whyWrong: ["Insuficiente.", "Fuera.", "", "Fuera."]
    },
    {
      q: "En modalidad Autónoma (sin TL · Anexo N°1), la gestión integral base sube a:",
      opts: ["30%", "35%", "60%", "45%"],
      correct: 1,
      whyCorrect: "Artículo Tercero del Anexo N°1 — +5 pp sobre con TL.",
      whyWrong: ["Corresponde con TL.", "", "Es máximo con arrendador.", "Es el máximo, no base."]
    },
    {
      q: "La multa por desviar operaciones del sistema TuMatch es:",
      opts: ["Ninguna", "100 UF", "10 UF", "1.000 UF sin perjuicio de otras acciones"],
      correct: 3,
      whyCorrect: "Cláusula Séptima del Contrato.",
      whyWrong: ["Existe.", "Muy bajo.", "Muy bajo.", ""]
    },
    {
      q: "Los tres requisitos copulativos para exigir comisión son:",
      opts: ["(i) firma + (ii) empresa recibió pago + (iii) entrega formal del inmueble", "Solo entrega", "Solo pago", "Solo firma"],
      correct: 0,
      whyCorrect: "Condiciones copulativas de Cláusula Cuarta.",
      whyWrong: ["", "Falta firma y pago.", "Falta entrega.", "Insuficiente."]
    },
    {
      q: "La comisión al cliente sugerida CChC en compraventa estándar es:",
      opts: ["0,5%", "10%", "2% + IVA a cada parte", "1%"],
      correct: 2,
      whyCorrect: "Sugerencia CChC estándar de mercado.",
      whyWrong: ["Subestima.", "Excesivo.", "", "Subestima."]
    },
    {
      q: "La comisión al cliente en arriendo residencial es:",
      opts: ["1 canon", "50% del primer canon + IVA a cada parte", "0%", "3 cánones"],
      correct: 1,
      whyCorrect: "Totaliza 100% bruto primer canon.",
      whyWrong: ["Subestima.", "", "Es servicio remunerado.", "Excesivo."]
    },
    {
      q: "Si el cliente es persona natural, el corredor emite:",
      opts: ["Nada", "Ticket", "Factura", "Boleta de honorarios con retención 12,25% (2026)"],
      correct: 3,
      whyCorrect: "Documento SII correspondiente a servicios profesionales.",
      whyWrong: ["Infracción.", "Sin valor.", "No corresponde.", ""]
    },
    {
      q: "Si el cliente es empresa, el corredor emite:",
      opts: ["Nada", "Boleta", "Factura electrónica con IVA 19%", "Recibo"],
      correct: 2,
      whyCorrect: "IVA crédito fiscal para la empresa; factura correcta.",
      whyWrong: ["Infracción.", "No corresponde.", "", "Sin valor."]
    },
    {
      q: "El tag de temperatura del CRM sirve para:",
      opts: ["Nada", "Priorizar agenda diaria", "Decorar", "Estética"],
      correct: 1,
      whyCorrect: "Herramienta central de gestión de tiempo.",
      whyWrong: ["Crítico.", "", "No es decoración.", "Es operativo."]
    },
    {
      q: "El perfil-comprador-section registra:",
      opts: ["30+ campos estructurados para matching y derivación bancaria", "Foto", "Solo nombre", "Nada"],
      correct: 0,
      whyCorrect: "Motor del CRM para gestión hipotecaria.",
      whyWrong: ["", "Insuficiente.", "Subestima.", "Al contrario."]
    },
    {
      q: "El cierre-negocio del CRM administra:",
      opts: ["Solo fechas", "Facturación", "9 hitos desde oferta aceptada a entrega material", "Marketing"],
      correct: 2,
      whyCorrect: "Workflow estructurado y auditable.",
      whyWrong: ["Más complejo.", "Solo parte.", "", "No."]
    },
    {
      q: "El campo 'Tramo RSH' se usa para:",
      opts: ["Nada", "Estadística", "Marketing", "Determinar subsidio aplicable (DS1 T1/T2/T3, DS49, DS19)"],
      correct: 3,
      whyCorrect: "Instrumento MIDESO de focalización.",
      whyWrong: ["Crítico.", "Es decisional.", "No marketing.", ""]
    },
    {
      q: "El campo 'Dicom/morosidades' se registra con:",
      opts: ["Color", "Solo sí/no", "Detalle: Limpio / Cerradas con certificados / Vigentes con plan", "Nada"],
      correct: 2,
      whyCorrect: "Granularidad permite preparar scoring antes de postular.",
      whyWrong: ["No código visual.", "Insuficiente.", "", "Pérdida de info."]
    },
    {
      q: "El script de solicitud de carpeta usa tono:",
      opts: ["Servicial: 'para que te ofrezcan la mejor tasa...'", "Autoritario", "Burocrático", "Amenazante"],
      correct: 0,
      whyCorrect: "Enmarca carpeta como beneficio al cliente.",
      whyWrong: ["", "Rompe rapport.", "Enfría.", "Daña."]
    },
    {
      q: "El checklist de dependiente incluye (mín):",
      opts: ["Solo CI", "Solo F22", "CI + domicilio + liquidaciones + contrato + AFP + cartolas + Dicom + deudas CMF", "Nada"],
      correct: 2,
      whyCorrect: "Lista completa para pre-aprobación.",
      whyWrong: ["Insuficiente.", "Es independiente.", "", "Sin gestión."]
    },
    {
      q: "El plazo para ingresar carpeta a bancos es:",
      opts: ["1 mes", "3-5 días hábiles", "Nunca", "Mismo día"],
      correct: 1,
      whyCorrect: "Estándar profesional.",
      whyWrong: ["Lento.", "", "Sin gestión.", "Imposible."]
    },
    {
      q: "El hito 1 del cierre-negocio es:",
      opts: ["Entrega", "Oferta aceptada", "Escritura", "Promesa"],
      correct: 1,
      whyCorrect: "Inicia el pipeline formal.",
      whyWrong: ["Es hito 9.", "", "Es hito 7.", "Es hito 5."]
    },
    {
      q: "La hipoteca se inscribe en:",
      opts: ["Conservador de Bienes Raíces (CBR) del inmueble", "SII", "Notaría", "Registro Civil"],
      correct: 0,
      whyCorrect: "Sin inscripción no hay efectos frente a terceros.",
      whyWrong: ["", "No registra hipotecas.", "Otorga escritura.", "No registra inmuebles."]
    },
    {
      q: "Si hay hipoteca previa, el alzamiento ocurre:",
      opts: ["Simultáneo con nueva hipoteca (notaría · mismo día)", "Antes", "Después", "Nunca"],
      correct: 0,
      whyCorrect: "Tracto sucesivo estándar.",
      whyWrong: ["", "Ineficiente.", "Riesgo.", "Operación estándar."]
    },
    {
      q: "La entrega material se documenta con:",
      opts: ["Acta firmada + llaves + documentos técnicos + estado de cuentas", "Nada", "Foto", "WhatsApp"],
      correct: 0,
      whyCorrect: "Buenas prácticas profesionales.",
      whyWrong: ["", "Sin respaldo.", "Insuficiente.", "Informal."]
    },
    {
      q: "La conversión global objetivo es:",
      opts: ["1%", "70%", "≥ 12%", "100%"],
      correct: 2,
      whyCorrect: "Permite ~25 ops/año con pipeline 200.",
      whyWrong: ["Sub.", "Irreal.", "", "Imposible."]
    },
    {
      q: "La conversión red caliente debe ser:",
      opts: ["2%", "≥ 30%", "10%", "50%"],
      correct: 1,
      whyCorrect: "Confianza previa acelera.",
      whyWrong: ["Crítico.", "", "Bajo.", "No siempre."]
    },
    {
      q: "El ciclo red caliente es:",
      opts: ["20 años", "1 día", "60-90 días", "5 años"],
      correct: 2,
      whyCorrect: "Tiempo estándar.",
      whyWrong: ["Absurdo.", "Imposible.", "", "Inviable."]
    },
    {
      q: "La comisión neta por operación ronda:",
      opts: ["UF 20-35", "UF 0", "UF 1", "UF 200"],
      correct: 0,
      whyCorrect: "Ejemplo 35% de UF 60.",
      whyWrong: ["", "No gratuito.", "Bajo.", "Alto."]
    },
    {
      q: "El % referidos saludable en pipeline es:",
      opts: ["≥ 40%", "1%", "5%", "Nada"],
      correct: 0,
      whyCorrect: "Sistema de Referidos funcionando.",
      whyWrong: ["", "Ausente.", "Sin sistema.", "Deficiente."]
    },
    {
      q: "El NPS mínimo para pedir referidos es:",
      opts: ["≥ 8", "1", "Cualquiera", "0"],
      correct: 0,
      whyCorrect: "Excelencia exige umbral.",
      whyWrong: ["", "Insuficiente.", "Sin umbral.", "Sin referencia."]
    },
    {
      q: "Un corredor >UF 400 al año debe:",
      opts: ["Dejar facturar", "Considerar giro empresa / SpA para optimizar", "Evadir", "Nada"],
      correct: 1,
      whyCorrect: "Optimización legítima.",
      whyWrong: ["Infracción.", "", "Ilegal.", "Pierde."]
    },
    {
      q: "La retención honorarios 2026 es:",
      opts: ["0%", "10%", "25%", "12,25%"],
      correct: 3,
      whyCorrect: "Calendario tributario.",
      whyWrong: ["Retiene.", "Incorrecto.", "Excesivo.", ""]
    },
    {
      q: "El código SII de agente inmobiliario es:",
      opts: ["521000", "100", "683200 o 683100", "999999"],
      correct: 2,
      whyCorrect: "CIIU 4.0 Chile.",
      whyWrong: ["Retail.", "Otra.", "", "No existe."]
    },
    {
      q: "La confidencialidad del Contrato Freelance subsiste:",
      opts: ["No", "1 año", "También después del término", "Solo vigencia"],
      correct: 2,
      whyCorrect: "Cláusula Segunda.",
      whyWrong: ["Sí subsiste.", "Mayor.", "", "Más amplia."]
    },
    {
      q: "Las controversias se resuelven por:",
      opts: ["Ninguno", "Arbitraje CAM Santiago", "SERNAC", "Juzgado civil"],
      correct: 1,
      whyCorrect: "Cláusula Décima.",
      whyWrong: ["Sí hay.", "", "No aplica.", "No pactado."]
    },
    {
      q: "La relación contractual es:",
      opts: ["Arrendamiento", "Laboral", "Mandato gratuito", "Prestación servicios autónoma (Art. 2.006 CC)"],
      correct: 3,
      whyCorrect: "Cláusula Tercera.",
      whyWrong: ["No.", "Excluida.", "Remunerado.", ""]
    },
    {
      q: "El ritual diario de actualización del CRM es:",
      opts: ["20 minutos al final del día", "1 vez al cierre", "Anual", "Nunca"],
      correct: 0,
      whyCorrect: "Disciplina profesional.",
      whyWrong: ["", "Tarde.", "Inútil.", "Inservible."]
    },
    {
      q: "El pipeline profesional TuMatch maneja:",
      opts: ["2 leads", "5 leads", "Nada", "100-200 activos"],
      correct: 3,
      whyCorrect: "Exigencia de volumen.",
      whyWrong: ["Bajo.", "Bajo.", "Imposible.", ""]
    },
    {
      q: "El canal origen se registra con:",
      opts: ["Especificidad: referido_juan / linkedin_post_x", "Solo 'lead'", "Adivinando", "Nada"],
      correct: 0,
      whyCorrect: "Análisis posterior.",
      whyWrong: ["", "Inservible.", "Error.", "Pérdida."]
    },
    {
      q: "Un lead no registrado en CRM:",
      opts: ["No importa", "Vale igual", "Puede no calificar para comisión por falta de trazabilidad", "Vale más"],
      correct: 2,
      whyCorrect: "Comunicado de comisiones exige registro.",
      whyWrong: ["Es crítico.", "Exige registro.", "", "Depende trazabilidad."]
    },
    {
      q: "La sección 'documentos del lead' permite:",
      opts: ["Centralizar carpeta completa para enviar a bancos en lote", "Publicar", "Eliminar", "Nada"],
      correct: 0,
      whyCorrect: "Reduce fricción.",
      whyWrong: ["", "Privado.", "Inverso.", "Útil."]
    },
    {
      q: "El forecast anual corredor autónomo 20 ops x UF 3.000 x 35% es:",
      opts: ["$1M", "$0", "$100M", "~UF 420 ≈ $16,4M"],
      correct: 3,
      whyCorrect: "Cálculo contractual.",
      whyWrong: ["Bajo.", "Fuera.", "Excesivo.", ""]
    },
    {
      q: "El corredor modalidad autónoma requiere:",
      opts: ["Nada", "1 negocio TuMatch en año en curso o anterior", "50 años", "5 años"],
      correct: 1,
      whyCorrect: "Requisito Art. 2 Anexo N°1.",
      whyWrong: ["Requiere.", "", "No etario.", "No etario."]
    },
    {
      q: "Un lead referido y cerrado solo por referirlo paga al corredor:",
      opts: ["10%", "25% de la comisión bruta", "0%", "50%"],
      correct: 1,
      whyCorrect: "Cláusula Cuarta letra a).",
      whyWrong: ["Bajo.", "", "Sí.", "Alto."]
    },
    {
      q: "La orden de compra/encargo al cliente debe:",
      opts: ["No importa", "Estar escrita antes de iniciar gestión", "Al cierre", "Verbal"],
      correct: 1,
      whyCorrect: "Protege a ambas partes.",
      whyWrong: ["Importante.", "", "Tarde.", "Riesgo."]
    },
    {
      q: "Si el cliente no paga comisión, el corredor debe:",
      opts: ["Cobrar judicialmente (arbitraje si pactado) con orden encargo", "Renunciar", "Nada", "SERNAC"],
      correct: 0,
      whyCorrect: "Orden de encargo es título ejecutivo.",
      whyWrong: ["", "Ruta legal.", "Negligencia.", "Protege cliente."]
    },
    {
      q: "El histórico de interacciones del lead permite:",
      opts: ["Vigilancia", "Denunciar", "Retomar contacto con contexto en 60 segundos", "Facturar"],
      correct: 2,
      whyCorrect: "Servicio profesional.",
      whyWrong: ["Mal uso.", "Absurdo.", "", "No es función."]
    },
    {
      q: "La calculadora integrada al CRM ancla al cliente porque:",
      opts: ["Nada", "Reloj", "Convierte sueño abstracto en cifra concreta de dividendo/capital", "Es divertida"],
      correct: 2,
      whyCorrect: "Reduce ansiedad de incertidumbre.",
      whyWrong: ["Crítica.", "No es reloj.", "", "No es juego."]
    },
    {
      q: "El tiempo entre promesa y escritura definitiva es:",
      opts: ["30-60 días", "1 año", "6 meses", "1 día"],
      correct: 0,
      whyCorrect: "Plazo operativo con banco/alzamiento.",
      whyWrong: ["", "Excesivo.", "Raro.", "Imposible."]
    },
    {
      q: "La tasación bancaria la realiza:",
      opts: ["Cliente", "Corredor", "Vendedor", "Tasador independiente CMF contratado por banco"],
      correct: 3,
      whyCorrect: "Tasación oficial para crédito.",
      whyWrong: ["No contrata.", "Estima.", "No puede.", ""]
    },
    {
      q: "Si vicio redhibitorio post-entrega, el comprador puede:",
      opts: ["Devolver nulo", "Nada", "Iniciar acciones por vicios ocultos (Art. 1.858 CC)", "Pagar más"],
      correct: 2,
      whyCorrect: "Protección legal.",
      whyWrong: ["Hay acciones.", "Existe.", "", "Contra derecho."]
    },
    {
      q: "El comprobante domicilio válido es:",
      opts: ["Nada", "Boleta servicio últimos 3 meses", "Solo luz", "Cualquier papel"],
      correct: 1,
      whyCorrect: "Estándar bancario.",
      whyWrong: ["Obligatorio.", "", "Más amplio.", "No cualquiera."]
    },
    {
      q: "El acta de entrega incluye idealmente:",
      opts: ["Acta + llaves + documentos técnicos + estado cuentas", "Nada", "WhatsApp", "Llave"],
      correct: 0,
      whyCorrect: "Entrega profesional.",
      whyWrong: ["", "No válido.", "Informal.", "Incompleto."]
    }
  ],
  goldRules: [
    {
      n: 1,
      title: "Conoce tus 7 tramos de comisión de memoria",
      text: "25% referido · 30% gestión con TL · 35% sin TL · 40% con TL total · 45% sin TL total · 60% con TL + arrendador · 65% sin TL + arrendador."
    },
    {
      n: 2,
      title: "Exigibilidad copulativa: firma + pago empresa + entrega",
      text: "Ninguna operación es comisión hasta cumplir los tres requisitos de la Cláusula Cuarta. Documenta los 9 hitos en CRM."
    },
    {
      n: 3,
      title: "Nunca operes fuera del sistema TuMatch",
      text: "La multa por desvío es 1.000 UF más acciones legales. No vale el riesgo jamás."
    },
    {
      n: 4,
      title: "Orden de encargo escrita antes de gestionar",
      text: "Protege tu tiempo, tu comisión y la relación con el cliente. Pacta porcentaje, exigibilidad y jurisdicción."
    },
    {
      n: 5,
      title: "Emite siempre documento tributario",
      text: "Boleta honorarios (persona natural) o factura electrónica (empresa). El que cobra sin documento es invisible profesionalmente."
    },
    {
      n: 6,
      title: "Llena el perfil-comprador-section completo",
      text: "Sin los 30+ campos, el CRM no trabaja para ti. Invierte 10 minutos por lead y multiplica tu match y seguimiento."
    },
    {
      n: 7,
      title: "Tag de temperatura del lead desde el primer día",
      text: "🔥 caliente agenda hoy · 🌡️ tibio ciclo 21 días · ❄️ frío sistema automatizado. Sin priorización, pierdes horas."
    },
    {
      n: 8,
      title: "Ritual diario: 20 minutos de CRM al cerrar tu día",
      text: "Sin actualización diaria, el CRM se desactualiza en 2 semanas. Con ritual, se convierte en tu activo de carrera."
    },
    {
      n: 9,
      title: "Checklist de carpeta en primera reunión",
      text: "El cliente que entrega carpeta en 3-5 días es serio. Si tarda 14+ días sin motivo, calificalo bajo. Protege tu tiempo."
    },
    {
      n: 10,
      title: "Mide tus KPIs mensuales",
      text: "Conversión, ciclo, ticket, comisión promedio, % referidos y NPS. Sin medir, no mejoras. Con medición, eres corredor profesional."
    }
  ]
};
