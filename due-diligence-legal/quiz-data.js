/* Taller 05 · Due Diligence Legal y Técnica · Banco v1 */
window.TALLER_CONFIG = {
  slug: "due-diligence-legal",
  moduleNames: {
    "1": "ROL SII y contribuciones",
    "2": "CBR · Conservador de Bienes Raíces",
    "3": "Estudio de títulos 10 años",
    "4": "DOM y certificados municipales",
    "5": "Tasación técnica CMF",
    "6": "Vicios redhibitorios y Ley 19.472",
    "7": "Copropiedad · Ley 21.442"
  },
  certTitle: "Due Diligence Legal y Técnica",
  certSubtitle: "Taller Avanzado 05 · Academia TuMatch",
  quizBank: {
    "1": [
      {
        q: "El ROL SII identifica:",
        opts: ["La propiedad fiscalmente (avalúo, destino, superficie)", "El corredor", "Al dueño", "El banco"],
        correct: 0,
        whyCorrect: "Es la identificación tributaria de cada propiedad.",
        whyWrong: ["", "No aplica.", "El CBR lo hace.", "No aplica."]
      },
      {
        q: "El avalúo fiscal se consulta en:",
        opts: ["CBR", "sii.cl", "Notaría", "MINVU"],
        correct: 1,
        whyCorrect: "SII mantiene el registro de avalúos.",
        whyWrong: ["CBR es dominio.", "", "No emite.", "MINVU política."]
      },
      {
        q: "Las contribuciones impagas al momento de compra:",
        opts: ["SII perdona", "Nadie paga", "Pueden generar corresponsabilidad del comprador del año en curso", "Las paga el banco"],
        correct: 2,
        whyCorrect: "Responsabilidad solidaria parcial.",
        whyWrong: ["No perdona.", "Alguien paga.", "", "No."]
      },
      {
        q: "La exención contribuciones primera vivienda aplica:",
        opts: ["Nunca", "Siempre", "Solo nueva", "Si el avalúo es menor al tope exención (varía anualmente por DFL 1 / ley)"],
        correct: 3,
        whyCorrect: "Política de apoyo al primera vivienda.",
        whyWrong: ["Aplica.", "Hay tope.", "Ambas pueden.", ""]
      },
      {
        q: "Tesorería General de la República cobra:",
        opts: ["Corretaje", "Nada", "Contribuciones impositivas territoriales (impuesto territorial)", "IVA"],
        correct: 2,
        whyCorrect: "Administra impuestos al bien raíz.",
        whyWrong: ["Privado.", "Cobra.", "", "SII."]
      },
      {
        q: "Un certificado de avalúo fiscal se usa para:",
        opts: ["Decorar", "Comprar auto", "Nada", "Respaldar transferencias, sucesiones y validaciones tributarias"],
        correct: 3,
        whyCorrect: "Documento oficial SII.",
        whyWrong: ["No decorativo.", "Irrelevante.", "Funcional.", ""]
      },
      {
        q: "Si una propiedad tiene uso mixto (habitacional + comercial):",
        opts: ["Nada", "No cambia nada", "Gratis", "Puede tener avalúo diferenciado y contribuciones más altas"],
        correct: 3,
        whyCorrect: "Destino influye en el avalúo y en las exenciones.",
        whyWrong: ["Relevante.", "Influye.", "No.", ""]
      },
      {
        q: "Antes de firmar promesa, el corredor verifica contribuciones en:",
        opts: ["Notaría", "sii.cl + tesoreria.cl", "SERNAC", "Registro Civil"],
        correct: 1,
        whyCorrect: "Plataformas oficiales.",
        whyWrong: ["No emite esto.", "", "No.", "No."]
      },
      {
        q: "La superficie del inmueble según SII puede diferir de la del DOM por:",
        opts: [
          "Imposible",
          "Sólo en regiones",
          "Nunca",
          "Diferencia entre superficie construida declarada y superficie regularizada · ampliaciones sin permiso"
        ],
        correct: 3,
        whyCorrect: "Situación frecuente en vivienda usada.",
        whyWrong: ["Frecuente.", "No zonal.", "Sí difiere.", ""]
      },
      {
        q: "El destino inscrito en SII (habitacional, comercial, mixto) importa porque:",
        opts: ["Solo estético", "No importa", "Nunca", "Afecta contribuciones, permisos municipales y seguros"],
        correct: 3,
        whyCorrect: "Condiciona el régimen tributario y urbanístico.",
        whyWrong: ["Fondo.", "Importa.", "Sí importa.", ""]
      },
      {
        q: "Si se detecta deuda en contribuciones:",
        opts: ["Nada", "Se factura", "Se descuenta del precio o se regulariza antes de la firma", "Se ignora"],
        correct: 2,
        whyCorrect: "Protege al comprador.",
        whyWrong: ["Se resuelve.", "No es factura.", "", "Genera problema."]
      },
      {
        q: "El ROL es esencial para:",
        opts: ["Marketing", "Decorar", "Identificar fiscalmente la propiedad en cualquier trámite", "Nada"],
        correct: 2,
        whyCorrect: "ID oficial.",
        whyWrong: ["Trámites.", "No decorativo.", "", "Crítico."]
      },
      {
        q: "El impuesto territorial se paga:",
        opts: ["Al comprar", "Al contado único", "En cuatro cuotas trimestrales (abril, junio, septiembre, noviembre)", "Mensual"],
        correct: 2,
        whyCorrect: "Calendario Tesorería.",
        whyWrong: ["No solo al comprar.", "Fraccionado.", "", "Trimestral."]
      },
      {
        q: "SII puede retasar el avalúo fiscal cada:",
        opts: ["Nunca", "Semana", "4 años aproximadamente en retasación masiva", "Siempre"],
        correct: 2,
        whyCorrect: "Proceso periódico reglado.",
        whyWrong: ["Hay retasación.", "Fuera.", "", "Hay retasación."]
      },
      {
        q: "Un cliente que compra propiedad con mora contribuciones no debe:",
        opts: ["Firmar sin regularización o retención del saldo para cubrir deuda", "Pagar", "Abandonar", "Demandar"],
        correct: 0,
        whyCorrect: "Protección del comprador.",
        whyWrong: ["", "Se debe resolver.", "Innecesario.", "Primero negociar."]
      },
      {
        q: "El rol del corredor en contribuciones es:",
        opts: ["Demandar", "Ninguno", "Pagar", "Verificar estado y asegurar regularización previa o retención"],
        correct: 3,
        whyCorrect: "Parte del servicio profesional.",
        whyWrong: ["No.", "Hay rol.", "No es responsable.", ""]
      },
      {
        q: "El certificado de avalúo fiscal se solicita en:",
        opts: ["Banco", "sii.cl online con ClaveTributaria o CI", "Registro Civil", "SERVIU"],
        correct: 1,
        whyCorrect: "Portal SII.",
        whyWrong: ["No emite.", "", "No.", "No."]
      },
      {
        q: "El avalúo fiscal vs el valor comercial:",
        opts: ["Iguales", "Sin relación", "Fiscal mayor", "Avalúo es para tributación · comercial refleja mercado · habitualmente comercial > fiscal"],
        correct: 3,
        whyCorrect: "Son conceptos distintos.",
        whyWrong: ["Son distintos.", "Hay relación.", "Al revés.", ""]
      },
      {
        q: "Las contribuciones las paga quien:",
        opts: [
          "Nadie",
          "El que vive",
          "Es propietario al 1 de enero de cada año cuotas 1 a 4 · si se transfiere, nuevo dueño paga desde su periodo",
          "El arrendatario"
        ],
        correct: 2,
        whyCorrect: "Regla de proporcionalidad en transferencias.",
        whyWrong: ["Alguien.", "Propietario.", "", "No arriendo."]
      },
      {
        q: "Si propiedad tiene avalúo menor a tope exención:",
        opts: ["Sin impuesto nunca", "Imposible", "Paga igual", "Exención total o parcial según régimen vigente"],
        correct: 3,
        whyCorrect: "Beneficio tributario.",
        whyWrong: ["Hay casos.", "Común.", "Hay exención.", ""]
      }
    ],
    "2": [
      {
        q: "El CBR es:",
        opts: ["SII", "Registro público de la propiedad inmueble (uno por jurisdicción)", "Notaría", "Banco"],
        correct: 1,
        whyCorrect: "Art. 695 CC y Reglamento del Conservador.",
        whyWrong: ["Tributo.", "", "Distintas funciones.", "No."]
      },
      {
        q: "Sin inscripción en CBR, la hipoteca:",
        opts: ["Ilegal", "No produce efectos frente a terceros (Art. 2.410 CC)", "Es válida plena", "Depende notario"],
        correct: 1,
        whyCorrect: "Principio de publicidad registral.",
        whyWrong: ["No ilegal, solo ineficaz a terceros.", "", "Insuficiente.", "No depende."]
      },
      {
        q: "El certificado de dominio vigente muestra:",
        opts: ["Quién es el actual dueño inscrito", "Avalúo", "Arriendo", "IVA"],
        correct: 0,
        whyCorrect: "Certificación registral.",
        whyWrong: ["", "SII.", "No.", "No."]
      },
      {
        q: "El certificado de hipotecas y gravámenes lista:",
        opts: ["Precios", "Deudas garantizadas con la propiedad + restricciones", "Nada", "Vecinos"],
        correct: 1,
        whyCorrect: "Cargas registradas sobre el inmueble.",
        whyWrong: ["No.", "", "Crítico.", "Irrelevante."]
      },
      {
        q: "Las prohibiciones que aparecen en CBR incluyen:",
        opts: ["Subsidio DS1 (5 años), embargos, medidas precautorias, servidumbres gravosas", "Solo Airbnb", "Nada", "Solo impuestos"],
        correct: 0,
        whyCorrect: "Todo acto que limita la disposición.",
        whyWrong: ["", "No específico.", "Hay.", "Más amplio."]
      },
      {
        q: "La copia de inscripción con notas marginales muestra:",
        opts: ["Arriendo", "Historia reciente de la propiedad (anotaciones y actos)", "Colores", "Contribuciones"],
        correct: 1,
        whyCorrect: "Histórico registral.",
        whyWrong: ["Otro.", "", "No.", "Fiscal."]
      },
      {
        q: "El CBR competente es:",
        opts: ["Registro Civil", "SII", "El de la jurisdicción donde está ubicada la propiedad", "Cualquiera"],
        correct: 2,
        whyCorrect: "Territorialidad.",
        whyWrong: ["No.", "No.", "", "No cualquiera."]
      },
      {
        q: "Certificados CBR deben tener fecha:",
        opts: ["10 años", "Sin fecha", "Antigua", "Cercana a la firma (habitualmente < 30 días)"],
        correct: 3,
        whyCorrect: "Evita cambios posteriores no reflejados.",
        whyWrong: ["Imposible.", "Requerida.", "Obsoleto.", ""]
      },
      {
        q: "El plazo típico de emisión de certificado CBR es:",
        opts: ["6 meses", "Años", "Horas", "1 a 3 días hábiles"],
        correct: 3,
        whyCorrect: "Tiempo operativo.",
        whyWrong: ["Fuera.", "Absurdo.", "Varía por comuna.", ""]
      },
      {
        q: "Si aparece prohibición 'subsidio DS1 5 años vigente':",
        opts: ["Ignorar", "Irrelevante", "Se salta", "La propiedad no puede transferirse sin autorización SERVIU y devolución subsidio"],
        correct: 3,
        whyCorrect: "Cláusula legal de subsidio.",
        whyWrong: ["Problema serio.", "Relevante.", "No.", ""]
      },
      {
        q: "Una hipoteca previa vigente al momento de comprar:",
        opts: ["Se alza simultáneamente con la nueva hipoteca en notaría (tracto sucesivo)", "Se asume", "Nada", "Imposibilita"],
        correct: 0,
        whyCorrect: "Operación estándar.",
        whyWrong: ["", "No automáticamente.", "Hay procedimiento.", "No imposibilita."]
      },
      {
        q: "Los litigios que afectan la propiedad se ven en:",
        opts: ["Redes", "Certificado de litigios CBR + causas en el Poder Judicial", "Ninguno", "SII"],
        correct: 1,
        whyCorrect: "Registro específico.",
        whyWrong: ["No.", "", "Existen canales.", "No."]
      },
      {
        q: "El costo aproximado por certificado CBR (2026) ronda:",
        opts: ["Gratis", "$50.000", "$100", "$3.000 a $6.000 por certificado"],
        correct: 3,
        whyCorrect: "Arancel estándar.",
        whyWrong: ["No gratis.", "Excesivo.", "Subestima.", ""]
      },
      {
        q: "Los certificados online del CBR Santiago se obtienen en:",
        opts: ["Wikipedia", "cbrs.cl (Conservador Bienes Raíces Santiago)", "Sí, plataforma digital con ClaveÚnica o por portal", "Solo papel"],
        correct: 2,
        whyCorrect: "Modernización registral.",
        whyWrong: ["No oficial.", "", "", "Hay digital."]
      },
      {
        q: "Una medida precautoria inscrita en CBR:",
        opts: ["Bloquea disposición hasta resolución judicial", "Sin efecto", "Ignorar", "Automática"],
        correct: 0,
        whyCorrect: "Bloquea transferencia.",
        whyWrong: ["", "Tiene efecto.", "No.", "Requiere orden."]
      },
      {
        q: "Para un cliente comprador, los certificados mínimos a revisar son:",
        opts: ["Ninguno", "Solo precio", "Sólo avalúo", "Dominio vigente + hipotecas/gravámenes + prohibiciones e interdicciones"],
        correct: 3,
        whyCorrect: "Núcleo mínimo.",
        whyWrong: ["Incompleto.", "Insuficiente.", "Insuficiente.", ""]
      },
      {
        q: "La inscripción de compraventa en CBR tras escritura demora:",
        opts: ["Años", "1 hora", "10 a 45 días hábiles según comuna", "1 año"],
        correct: 2,
        whyCorrect: "Procesamiento administrativo.",
        whyWrong: ["Excesivo.", "Imposible.", "", "Fuera."]
      },
      {
        q: "La inscripción simultánea de alzamiento + nueva hipoteca requiere:",
        opts: ["Nada", "Solo banco nuevo", "Solo vendedor", "Coordinación notaría + banco anterior + banco nuevo + CBR"],
        correct: 3,
        whyCorrect: "Operación con múltiples partes.",
        whyWrong: ["Coordinación.", "Más partes.", "Más partes.", ""]
      },
      {
        q: "Si el CBR rechaza la inscripción por observación:",
        opts: ["Fin de operación", "Se subsana y reingresa · el plazo corre desde reingreso", "Automático", "Nada"],
        correct: 1,
        whyCorrect: "Mecanismo estándar.",
        whyWrong: ["Hay ruta.", "", "No automático.", "Subsanable."]
      },
      {
        q: "La servidumbre (derecho real) también se inscribe en CBR:",
        opts: ["A veces", "No", "Sí, junto con otros gravámenes y derechos", "Nunca"],
        correct: 2,
        whyCorrect: "Publicidad registral.",
        whyWrong: ["Se inscribe.", "Se inscribe.", "", "Se inscribe."]
      }
    ],
    "3": [
      {
        q: "El estudio de títulos revisa típicamente:",
        opts: ["1 día", "10 años (prescripción adquisitiva extraordinaria Art. 2.511 CC)", "1 año", "100 años"],
        correct: 1,
        whyCorrect: "Plazo ley.",
        whyWrong: ["Imposible.", "", "Insuficiente.", "Excesivo."]
      },
      {
        q: "El tracto sucesivo se refiere a:",
        opts: ["Colectivo", "Continuidad de transferencias sin saltos ni quiebres", "Pasado remoto", "Futuro"],
        correct: 1,
        whyCorrect: "Continuidad registral.",
        whyWrong: ["No.", "", "No.", "No."]
      },
      {
        q: "Una escritura con vicio de forma puede generar:",
        opts: ["Nada", "Exención", "Nulidad absoluta oponible a terceros (Art. 1.682 CC)", "Comisión"],
        correct: 2,
        whyCorrect: "Nulidad por vicio formal.",
        whyWrong: ["Riesgo grave.", "No.", "", "Irrelevante."]
      },
      {
        q: "Una sucesión por causa de muerte sin posesión efectiva inscrita:",
        opts: ["Sin efecto", "Indiferente", "Válida", "Bloquea la enajenación de la propiedad hasta inscribir la posesión efectiva"],
        correct: 3,
        whyCorrect: "Requisito previo a cualquier disposición hereditaria inmueble.",
        whyWrong: ["Bloquea.", "Es crítica.", "Bloquea.", ""]
      },
      {
        q: "Si un heredero queda omitido en la sucesión, puede:",
        opts: ["Automático", "Ir preso", "Reclamar su cuota posteriormente; riesgo para compradores", "Nada"],
        correct: 2,
        whyCorrect: "Acción de petición de herencia.",
        whyWrong: ["No automático.", "No.", "", "Hay acción."]
      },
      {
        q: "Las hipotecas no alzadas en la cadena histórica son:",
        opts: ["Riesgo: pueden re-ejecutarse si el banco lo hace valer", "Sin efecto", "Pagadas", "Ignoradas"],
        correct: 0,
        whyCorrect: "Todo gravamen no alzado subsiste.",
        whyWrong: ["", "Tienen efecto.", "No necesariamente.", "No se ignoran."]
      },
      {
        q: "El estudio de títulos lo realiza:",
        opts: ["Abogado especialista", "Corredor", "Notario", "Cliente"],
        correct: 0,
        whyCorrect: "Dictamen jurídico profesional.",
        whyWrong: ["", "No es suficiente.", "No es su rol.", "No evalúa solo."]
      },
      {
        q: "Una observación 'menor' en títulos se resuelve:",
        opts: ["Juicio siempre", "Imposible", "Subsanación previa a la firma (pueden ser correcciones, ratificaciones)", "Se ignora"],
        correct: 2,
        whyCorrect: "Subsanación administrativa/notarial.",
        whyWrong: ["Raro requerir juicio.", "Es posible.", "", "No."]
      },
      {
        q: "Si aparece observación 'reivindicatoria potencial':",
        opts: ["Inventar", "Pagar más", "Ignorar", "Detener operación y evaluar con abogado; puede ser prohibitiva"],
        correct: 3,
        whyCorrect: "Vicio grave.",
        whyWrong: ["Fraude.", "No resuelve.", "Grave.", ""]
      },
      {
        q: "El costo estándar de un estudio de títulos es:",
        opts: ["Gratis", "$5 millones", "$150.000 a $400.000 según abogado y complejidad", "$0"],
        correct: 2,
        whyCorrect: "Rango profesional.",
        whyWrong: ["No.", "Excesivo.", "", "Hay costo."]
      },
      {
        q: "La prescripción adquisitiva ordinaria corre en:",
        opts: ["5 años con buena fe y justo título (Art. 2.508 CC)", "1 año", "50 años", "Nunca"],
        correct: 0,
        whyCorrect: "Bienes raíces.",
        whyWrong: ["", "Muy corto.", "Fuera.", "Existe."]
      },
      {
        q: "La prescripción adquisitiva extraordinaria (sin título justo) es:",
        opts: ["10 años (Art. 2.511 CC)", "Inmediata", "Nunca", "100 años"],
        correct: 0,
        whyCorrect: "Para los casos sin justo título.",
        whyWrong: ["", "No.", "Hay plazo.", "Fuera."]
      },
      {
        q: "Una adjudicación notarial por división:",
        opts: ["Automática", "No se inscribe", "Nula", "Se inscribe en CBR como adquisición del adjudicatario"],
        correct: 3,
        whyCorrect: "Modo de adquirir.",
        whyWrong: ["Requiere inscripción.", "Se inscribe.", "Es válida.", ""]
      },
      {
        q: "La fusión de lotes (incorporación predial) en el CBR:",
        opts: ["Se realiza con autorización DOM y nueva inscripción", "Imposible", "Nunca", "Libre"],
        correct: 0,
        whyCorrect: "Operación regulada.",
        whyWrong: ["", "Es posible.", "Se puede.", "Requiere trámite."]
      },
      {
        q: "Una escritura con firma falsa en cadena:",
        opts: ["Sin impacto", "Sin efecto", "Ok", "Genera nulidad absoluta de todos los actos posteriores sobre la propiedad"],
        correct: 3,
        whyCorrect: "Vicio grave.",
        whyWrong: ["Grave.", "Tiene efecto.", "Nula.", ""]
      },
      {
        q: "Un abogado que aprueba título con observación 'no grave' típicamente:",
        opts: ["Rechaza todo", "Nunca", "Ignora", "Emite informe con observación subsanable y recomendaciones"],
        correct: 3,
        whyCorrect: "Práctica profesional.",
        whyWrong: ["No siempre.", "Lo hace.", "No ignora.", ""]
      },
      {
        q: "Una propiedad con título 'limpio 10 años':",
        opts: ["No existe", "Imposible", "Garantiza 100%", "Indica que el abogado no encontró observaciones en la cadena decenal"],
        correct: 3,
        whyCorrect: "Resultado profesional.",
        whyWrong: ["Existe.", "Es común.", "Reduce riesgo.", ""]
      },
      {
        q: "El riesgo reivindicatorio post-compra es:",
        opts: ["Automático", "Irrelevante", "Posible si hubo vicio en la cadena; por eso el estudio es imprescindible", "Nunca"],
        correct: 2,
        whyCorrect: "Riesgo real.",
        whyWrong: ["No automático.", "Muy relevante.", "", "Existe."]
      },
      {
        q: "Si el cliente quiere saltarse el estudio de títulos:",
        opts: ["Se acepta", "El corredor profesional lo explica: riesgo económico mucho mayor al costo del estudio", "No importa", "Se le cobra más"],
        correct: 1,
        whyCorrect: "Asesoría profesional.",
        whyWrong: ["Mala práctica.", "", "Importa.", "No es el punto."]
      },
      {
        q: "Una donación inscrita en la cadena:",
        opts: ["Ignorar", "Nula", "Válida pero con regla de inoficiosidad si afecta legítima de herederos", "Ilegal"],
        correct: 2,
        whyCorrect: "Hay condiciones.",
        whyWrong: ["Tiene reglas.", "Es válida.", "", "No ilegal."]
      }
    ],
    "4": [
      {
        q: "DOM significa:",
        opts: ["Dirección de Obras Municipales", "Registro Civil", "SII", "Nada"],
        correct: 0,
        whyCorrect: "Oficina municipal que regula edificación.",
        whyWrong: ["", "Otra.", "Otra.", "Específico."]
      },
      {
        q: "La Recepción Final Municipal certifica:",
        opts: ["Avalúo", "Obra terminada y conforme a la normativa urbanística", "Precio", "Venta"],
        correct: 1,
        whyCorrect: "Validación técnica.",
        whyWrong: ["Tributo.", "", "Fiscal.", "No."]
      },
      {
        q: "Sin Recepción Final:",
        opts: ["Imposible", "Menor precio", "Sin problema", "Problemas para tasar, inscribir y calificar bancariamente"],
        correct: 3,
        whyCorrect: "Puede obstaculizar el crédito.",
        whyWrong: ["Con trámite se arregla.", "Hay problema.", "Hay problema.", ""]
      },
      {
        q: "El CIP (Certificado de Informaciones Previas) muestra:",
        opts: ["Avalúo", "Precio", "Dueño", "Normas urbanísticas del predio (usos, alturas, frentes)"],
        correct: 3,
        whyCorrect: "Define qué se puede construir.",
        whyWrong: ["Otro.", "No.", "Otro certificado.", ""]
      },
      {
        q: "El Número Municipal es:",
        opts: ["Clave", "Dirección oficial del inmueble asignada por la municipalidad", "Precio", "Teléfono"],
        correct: 1,
        whyCorrect: "Identificación territorial.",
        whyWrong: ["No.", "", "No.", "No."]
      },
      {
        q: "Una ampliación sin permiso es:",
        opts: ["Irregular; debe regularizarse en DOM (Ley 20.898 facilita el proceso)", "Automática", "Legal", "Nula"],
        correct: 0,
        whyCorrect: "Regularización posible.",
        whyWrong: ["", "Hay procedimiento.", "No.", "No nula."]
      },
      {
        q: "La Ley 20.898 (2016) facilita:",
        opts: ["Regularización de construcciones menores sin permiso (micro-radicación)", "Solo DS1", "Impuestos", "Nada"],
        correct: 0,
        whyCorrect: "Normativa específica.",
        whyWrong: ["", "No.", "No.", "Facilita."]
      },
      {
        q: "Antes de firmar con propiedad ampliada sin permiso:",
        opts: ["Negociar que el vendedor regularice o descuente del precio y el comprador asuma regularización", "Denunciar", "Ignorar", "Pagar más"],
        correct: 0,
        whyCorrect: "Negociación comercial.",
        whyWrong: ["", "Primero negociar.", "No ignorar.", "No es el punto."]
      },
      {
        q: "El certificado de no expropiación verifica:",
        opts: ["Precio", "Que el predio no está en plan de expropiación municipal", "Uso", "Dueño"],
        correct: 1,
        whyCorrect: "Protección al comprador.",
        whyWrong: ["No.", "", "No.", "Otro."]
      },
      {
        q: "La línea oficial (deslinde) se obtiene en:",
        opts: ["DOM de la municipalidad", "CBR", "Banco", "SII"],
        correct: 0,
        whyCorrect: "Deslinde legal.",
        whyWrong: ["", "Registro.", "No.", "Fiscal."]
      },
      {
        q: "Deuda aseo y ornato:",
        opts: ["El banco paga", "Irrelevante", "Se paga al municipio · puede ser responsabilidad compartida si no regularizada", "Automática"],
        correct: 2,
        whyCorrect: "Responsabilidad municipal.",
        whyWrong: ["Municipio.", "Relevante.", "", "No."]
      },
      {
        q: "La patente comercial pendiente en el domicilio:",
        opts: ["Ilegal", "Siempre afecta", "Puede afectar si la propiedad fue usada como negocio · verificar al comprar", "No afecta"],
        correct: 2,
        whyCorrect: "Depende del caso.",
        whyWrong: ["No ilegal.", "No siempre.", "", "Puede afectar."]
      },
      {
        q: "Deudas de servicios (luz, agua, gas):",
        opts: ["Ilegales", "Sin efecto", "Automáticas", "Se regularizan al momento de la entrega o se retienen del precio"],
        correct: 3,
        whyCorrect: "Protección al comprador.",
        whyWrong: ["No ilegales.", "Hay efecto.", "No automáticas.", ""]
      },
      {
        q: "Si la DOM no tiene Recepción Final de una ampliación, la tasación bancaria:",
        opts: ["Ignora", "Solo considera la superficie regularizada, no la ampliación · banco financia sobre eso", "Considera todo", "No existe"],
        correct: 1,
        whyCorrect: "Metodología estándar.",
        whyWrong: ["No ignora.", "", "No toda.", "Existe."]
      },
      {
        q: "Un departamento en edificio con subsidios DS1 reservados requiere además:",
        opts: ["Solo dinero", "Calificación MINVU del comprador si reserva uno DS1; regulación DS19", "Nada", "Nada"],
        correct: 1,
        whyCorrect: "Proyecto mixto.",
        whyWrong: ["Hay calificación.", "", "Hay trámite.", "Hay trámites."]
      },
      {
        q: "El Número Municipal se consulta en:",
        opts: ["Municipalidad (DOM) · también en mapa oficial de la comuna", "Registro Civil", "Notaría", "CBR"],
        correct: 0,
        whyCorrect: "Canal municipal.",
        whyWrong: ["", "No.", "No.", "Otro registro."]
      },
      {
        q: "Antes de firmar, revisar plan regulador comunal por:",
        opts: ["Nunca", "Nada", "Cambios de uso o alturas que puedan afectar el valor futuro", "Solo curiosidad"],
        correct: 2,
        whyCorrect: "Diligencia profesional.",
        whyWrong: ["Relevante.", "Importante.", "", "Crítico."]
      },
      {
        q: "El plan regulador comunal lo define:",
        opts: ["Municipio con aprobación del plan por autoridad competente", "Estado", "Dueño", "SII"],
        correct: 0,
        whyCorrect: "Instrumento local.",
        whyWrong: ["", "No.", "No.", "No."]
      },
      {
        q: "Una propiedad en zona de conservación histórica:",
        opts: ["Más barata", "Normal", "Tiene restricciones adicionales para remodelación y demolición", "Sin restricción"],
        correct: 2,
        whyCorrect: "Ley 17.288 Monumentos.",
        whyWrong: ["No necesariamente.", "Tiene restricciones.", "", "Tiene."]
      },
      {
        q: "El corredor debe avisar al cliente sobre restricciones urbanísticas porque:",
        opts: ["Nada", "Marketing", "Aburrido", "Afectan el uso, remodelación y valor futuro de la propiedad"],
        correct: 3,
        whyCorrect: "Asesoría profesional.",
        whyWrong: ["Relevante.", "Funcional.", "Crítico.", ""]
      }
    ],
    "5": [
      {
        q: "La tasación bancaria la realiza:",
        opts: ["Corredor", "Tasador independiente registrado CMF contratado por el banco", "Cliente", "Vendedor"],
        correct: 1,
        whyCorrect: "Imparcialidad.",
        whyWrong: ["Estima.", "", "No contrata.", "No."]
      },
      {
        q: "El método de comparables usa:",
        opts: ["Nada", "Adivinación", "Tarot", "Valores recientes de propiedades similares en la zona"],
        correct: 3,
        whyCorrect: "Método mercado.",
        whyWrong: ["Hay método.", "No.", "No.", ""]
      },
      {
        q: "El método de costo calcula:",
        opts: ["Costo de reposición + valor terreno - depreciación", "Renta", "Precio mercado", "Imposible"],
        correct: 0,
        whyCorrect: "Método costo.",
        whyWrong: ["", "Otro método.", "Otro.", "Existe."]
      },
      {
        q: "El método de capitalización de renta se usa para:",
        opts: ["Vivienda", "Nada", "Comprar auto", "Inversión con renta demostrable"],
        correct: 3,
        whyCorrect: "Propiedades que generan renta.",
        whyWrong: ["Residencial suele usar comparables.", "Hay método.", "No.", ""]
      },
      {
        q: "Si precio pactado > valor tasación:",
        opts: ["Sin problema", "Banco sube crédito", "Automático", "Banco financia sobre tasación; cliente cubre diferencia o renegocia precio"],
        correct: 3,
        whyCorrect: "Norma bancaria.",
        whyWrong: ["Hay problema.", "No sube.", "No.", ""]
      },
      {
        q: "El valor tasación es típicamente:",
        opts: ["Conservador (90-105% del precio pactado)", "Precio mercado total", "10%", "Variable salvaje"],
        correct: 0,
        whyCorrect: "Criterio bancario prudencial.",
        whyWrong: ["", "Más conservador.", "No.", "No salvaje."]
      },
      {
        q: "Un informe de tasación incluye:",
        opts: ["Metodología, fotos, comparables, terreno, construcción, depreciación, valor final", "Solo foto", "Nada", "Solo precio"],
        correct: 0,
        whyCorrect: "Documento técnico.",
        whyWrong: ["", "Incompleto.", "Requerido.", "Incompleto."]
      },
      {
        q: "La tasación bancaria tiene vigencia típica:",
        opts: ["90 a 180 días", "5 años", "Indefinida", "1 día"],
        correct: 0,
        whyCorrect: "Plazo razonable de validez.",
        whyWrong: ["", "Fuera.", "Finita.", "Imposible."]
      },
      {
        q: "Si la tasación baja mucho por observación DOM:",
        opts: ["Resolver observación (regularizar) y solicitar re-tasación", "Aceptar", "Ignorar", "Imposible"],
        correct: 0,
        whyCorrect: "Ruta profesional.",
        whyWrong: ["", "No aceptar sin intentar.", "Hay ruta.", "Posible."]
      },
      {
        q: "El tasador CMF se registra en:",
        opts: ["SERNAC", "CMF (Comisión para el Mercado Financiero)", "Colegio", "Banco"],
        correct: 1,
        whyCorrect: "Registro oficial.",
        whyWrong: ["No.", "", "No.", "No es registro oficial."]
      },
      {
        q: "Un tasador independiente evita:",
        opts: ["Trabajar", "Conflicto de interés (el banco contrata pero tasación es técnica independiente)", "Imparcialidad", "Nada"],
        correct: 1,
        whyCorrect: "Principio básico.",
        whyWrong: ["Trabaja.", "", "Al contrario: busca imparcialidad.", "Objetivo."]
      },
      {
        q: "Los comparables usados deben ser:",
        opts: ["Antiguos", "Ninguno", "Azar", "Recientes (últimos 3-6 meses), en la misma zona y tipología similar"],
        correct: 3,
        whyCorrect: "Fiabilidad del método.",
        whyWrong: ["Desactualizados.", "Necesarios.", "No.", ""]
      },
      {
        q: "La depreciación considera:",
        opts: ["Ubicación", "Color", "Antigüedad, estado de mantención, obsolescencia funcional", "Nada"],
        correct: 2,
        whyCorrect: "Factores técnicos.",
        whyWrong: ["Incompleto.", "No.", "", "Funcional."]
      },
      {
        q: "Una propiedad con ampliación no regularizada:",
        opts: ["Mismo valor", "Más valor", "Imposible", "Se tasa sobre la superficie regularizada; la ampliación puede no sumar valor"],
        correct: 3,
        whyCorrect: "Criterio bancario.",
        whyWrong: ["Menos valor.", "Al contrario.", "Se tasa.", ""]
      },
      {
        q: "El valor del terreno se estima con:",
        opts: ["Azar", "Nada", "UF", "Comparables de terrenos vacíos en la zona (método mercado)"],
        correct: 3,
        whyCorrect: "Método estándar.",
        whyWrong: ["No.", "Hay método.", "No.", ""]
      },
      {
        q: "El informe de tasación se entrega típicamente en:",
        opts: ["7 a 15 días hábiles desde la visita", "1 año", "Horas", "Indefinido"],
        correct: 0,
        whyCorrect: "Plazo operativo.",
        whyWrong: ["", "Fuera.", "Raro.", "Hay plazo."]
      },
      {
        q: "Un cliente puede pedir re-tasación si:",
        opts: ["Hay observación DOM resuelta o comparables nuevos relevantes", "Nunca", "Siempre", "A gusto"],
        correct: 0,
        whyCorrect: "Casos específicos.",
        whyWrong: ["", "Se puede.", "No siempre.", "Hay criterios."]
      },
      {
        q: "El corredor que entiende tasación:",
        opts: ["Nada", "Irrelevante", "Negocia mejor con el vendedor y anticipa escenarios al cliente", "Menos valor"],
        correct: 2,
        whyCorrect: "Diferenciación profesional.",
        whyWrong: ["Relevante.", "Importante.", "", "Más valor."]
      },
      {
        q: "Si el tasador observa problemas técnicos (estructura, humedad):",
        opts: ["Los consigna en el informe y el banco puede condicionar o rechazar", "Ignora", "No importa", "Garantiza valor"],
        correct: 0,
        whyCorrect: "Función del informe.",
        whyWrong: ["", "Los anota.", "Importa.", "Advierte."]
      },
      {
        q: "La tasación fiscal (SII) vs tasación bancaria:",
        opts: ["Conceptos distintos: SII es para impuesto; bancaria es comercial técnica", "Fiscal mayor", "No hay diferencia", "Iguales"],
        correct: 0,
        whyCorrect: "Distintos.",
        whyWrong: ["", "Al revés.", "Hay diferencia.", "Son distintas."]
      }
    ],
    "6": [
      {
        q: "Los vicios redhibitorios están en:",
        opts: ["Ley 19.472", "Art. 1.858 y sgtes. Código Civil", "Ley 19.496", "Solo jurisprudencia"],
        correct: 1,
        whyCorrect: "Cuerpo normativo específico.",
        whyWrong: ["Otra ley.", "", "Otra.", "Hay código."]
      },
      {
        q: "Plazo prescripción acción redhibitoria (rescisión) vivienda:",
        opts: ["Nunca", "5 años", "1 mes", "1 año desde entrega"],
        correct: 3,
        whyCorrect: "Art. 1.866 CC.",
        whyWrong: ["Hay plazo.", "Fuera.", "Fuera.", ""]
      },
      {
        q: "Plazo acción quanti minoris (rebaja precio) vivienda:",
        opts: ["10 años", "Nunca", "6 meses desde entrega", "1 día"],
        correct: 2,
        whyCorrect: "Art. 1.866 CC.",
        whyWrong: ["Fuera.", "Hay plazo.", "", "Fuera."]
      },
      {
        q: "La Ley 19.472 protege al:",
        opts: ["Comprador de vivienda nueva frente a vicios de construcción", "Vendedor", "Banco", "Constructor"],
        correct: 0,
        whyCorrect: "Calidad de la construcción.",
        whyWrong: ["", "No.", "No.", "No."]
      },
      {
        q: "Garantía estructural Ley 19.472 es:",
        opts: ["1 año", "3 años", "Indefinida", "10 años desde recepción municipal"],
        correct: 3,
        whyCorrect: "Art. 18 letra a).",
        whyWrong: ["Fuera.", "Otros vicios.", "Finita.", ""]
      },
      {
        q: "Garantía de instalaciones (elec., agua, gas):",
        opts: ["5 años desde recepción municipal", "1 año", "10 años", "1 mes"],
        correct: 0,
        whyCorrect: "Art. 18 letra b).",
        whyWrong: ["", "Fuera.", "Estructural.", "Fuera."]
      },
      {
        q: "Garantía de terminaciones:",
        opts: ["3 años desde recepción municipal", "10 años", "1 día", "1 mes"],
        correct: 0,
        whyCorrect: "Art. 18 letra c).",
        whyWrong: ["", "Estructural.", "Imposible.", "Fuera."]
      },
      {
        q: "Un vicio oculto conocido por el vendedor y no declarado:",
        opts: ["Puede generar responsabilidad adicional (Art. 1.859 CC)", "Normal", "Irrelevante", "Sin efecto"],
        correct: 0,
        whyCorrect: "Agravante.",
        whyWrong: ["", "Hay efecto.", "Relevante.", "Tiene efecto."]
      },
      {
        q: "Para reclamar vicio, el comprador debe:",
        opts: ["Denunciar por escrito al vendedor/constructor antes del plazo de prescripción", "Nada", "Nunca", "Esperar"],
        correct: 0,
        whyCorrect: "Requisito procesal.",
        whyWrong: ["", "Hay que actuar.", "Hay denuncia.", "No."]
      },
      {
        q: "Vicios aparentes al momento de entrega:",
        opts: ["Ley 19.472", "No son vicios ocultos; el comprador debe exigir reparación en el acta de entrega", "Cubiertos", "Redhibitorios"],
        correct: 1,
        whyCorrect: "Diferencia crítica.",
        whyWrong: ["Tampoco.", "", "No cubierto.", "No son redhibitorios."]
      },
      {
        q: "El acta de entrega con inventario:",
        opts: ["Es opcional", "Protege al comprador dejando constancia del estado y posibles vicios aparentes", "Solo foto", "Inútil"],
        correct: 1,
        whyCorrect: "Documento clave.",
        whyWrong: ["Esencial.", "", "No solo foto.", "Es útil."]
      },
      {
        q: "La garantía Ley 19.472 la asume:",
        opts: ["El Estado", "El comprador", "El banco", "La primera inmobiliaria que vendió (constructora)"],
        correct: 3,
        whyCorrect: "Responsabilidad del constructor.",
        whyWrong: ["No.", "No.", "No.", ""]
      },
      {
        q: "La acción Ley 19.472 puede ejercerse:",
        opts: [
          "Solo con abogado",
          "Nunca",
          "Solo por el primer comprador",
          "También por compradores sucesivos dentro del plazo si el vicio se manifiesta"
        ],
        correct: 3,
        whyCorrect: "Protección reforzada.",
        whyWrong: ["No requiere.", "Es posible.", "Más amplio.", ""]
      },
      {
        q: "Un vicio estructural grave genera:",
        opts: ["Nada", "Solo inconveniente", "Multa", "Obligación del constructor de reparar + indemnizaciones según resultado"],
        correct: 3,
        whyCorrect: "Responsabilidad integral.",
        whyWrong: ["Hay efecto.", "Es grave.", "Más amplio.", ""]
      },
      {
        q: "El corredor al entregar la vivienda debe:",
        opts: ["Callar", "Pagar", "Nada", "Informar los plazos de garantía legal y documentar el estado en acta de entrega"],
        correct: 3,
        whyCorrect: "Servicio profesional.",
        whyWrong: ["Mala fe.", "No le corresponde.", "Hay deber.", ""]
      },
      {
        q: "Los vicios conocidos por el comprador al comprar:",
        opts: ["Siguen cubiertos", "No son redhibitorios (asumió el riesgo)", "Cubiertos siempre", "Anulan venta"],
        correct: 1,
        whyCorrect: "Principio jurídico.",
        whyWrong: ["No.", "", "No.", "No."]
      },
      {
        q: "La garantía DFL 2 para primera vivienda:",
        opts: ["Nada", "Cubre vicios", "Es otro instrumento tributario distinto a Ley 19.472", "No existe"],
        correct: 2,
        whyCorrect: "DFL 2 es régimen tributario, distinto de calidad.",
        whyWrong: ["Existe.", "No cubre vicios.", "", "Existe."]
      },
      {
        q: "El cliente que descubre vicio tarde:",
        opts: ["Puede reclamar si está dentro del plazo de prescripción aplicable", "Pierde", "Siempre pierde", "Nada"],
        correct: 0,
        whyCorrect: "Plazos ley.",
        whyWrong: ["", "Puede.", "Hay plazos.", "Hay acción."]
      },
      {
        q: "Las fuentes para sustentar un vicio redhibitorio son:",
        opts: ["Solo palabra", "Nada", "Informes técnicos + fotos + actas + peritajes", "WhatsApp"],
        correct: 2,
        whyCorrect: "Prueba legal.",
        whyWrong: ["Insuficiente.", "Hay fuentes.", "", "No."]
      },
      {
        q: "La mediación antes de juicio en vicios es:",
        opts: ["Innecesaria", "Ilegal", "Vía recomendada: CChC, SERNAC Construcción y otras instancias", "Automática"],
        correct: 2,
        whyCorrect: "Resolución alternativa.",
        whyWrong: ["Muy útil.", "Legal.", "", "No automática."]
      }
    ],
    "7": [
      {
        q: "La Ley 21.442 regula:",
        opts: ["Arriendo", "Hipotecas", "Copropiedad inmobiliaria (reemplazó la Ley 19.537)", "Subsidios"],
        correct: 2,
        whyCorrect: "Normativa vigente desde 2022.",
        whyWrong: ["No.", "No.", "", "No."]
      },
      {
        q: "El Reglamento de Copropiedad se inscribe en:",
        opts: ["Notaría solo", "Municipio", "CBR", "SII"],
        correct: 2,
        whyCorrect: "Publicidad registral.",
        whyWrong: ["Notaría otorga, CBR inscribe.", "No.", "", "Fiscal."]
      },
      {
        q: "Los gastos comunes los fija:",
        opts: ["Dueño", "La asamblea de copropietarios y el presupuesto anual", "Libremente", "Municipio"],
        correct: 1,
        whyCorrect: "Órgano máximo de la comunidad.",
        whyWrong: ["No.", "", "No.", "No."]
      },
      {
        q: "El fondo de reserva mínimo en la Ley 21.442 es:",
        opts: ["0", "Al menos 5% de los gastos comunes", "Variable libre", "No existe"],
        correct: 1,
        whyCorrect: "Obligación legal.",
        whyWrong: ["Hay mínimo.", "", "Tiene mínimo.", "Existe."]
      },
      {
        q: "El administrador de copropiedad:",
        opts: ["Municipio", "Persona designada por asamblea con funciones ejecutivas", "Dueño", "Notario"],
        correct: 1,
        whyCorrect: "Rol ejecutivo.",
        whyWrong: ["No.", "", "No.", "No."]
      },
      {
        q: "Un comprador de departamento hereda:",
        opts: ["Solo fotos", "Solo metros", "Nada", "Derechos y obligaciones del régimen de copropiedad, incluidas deudas de gastos comunes"],
        correct: 3,
        whyCorrect: "Situación sui generis.",
        whyWrong: ["No.", "Más.", "Hay heredación.", ""]
      },
      {
        q: "El certificado de gastos comunes al día:",
        opts: ["Debe solicitarse antes de firmar · el administrador lo emite", "Solo nuevos", "Nunca", "Irrelevante"],
        correct: 0,
        whyCorrect: "Protección al comprador.",
        whyWrong: ["", "Cualquier departamento.", "Se debe.", "Crítico."]
      },
      {
        q: "Una derrama no pagada se traspasa:",
        opts: ["Al banco", "Puede cobrarse al comprador si no se regularizó · siempre verificar antes", "Al notario", "Al vendedor"],
        correct: 1,
        whyCorrect: "Obligación real sobre el inmueble.",
        whyWrong: ["No.", "", "No.", "Ambos potencialmente."]
      },
      {
        q: "Airbnb en un edificio depende de:",
        opts: ["No importa", "El reglamento de copropiedad; muchos edificios prohíben arriendo corta estadía", "Solo ley", "Libertad absoluta"],
        correct: 1,
        whyCorrect: "Régimen privado.",
        whyWrong: ["Importa.", "", "Depende reglamento.", "No libertad."]
      },
      {
        q: "Las mascotas en copropiedad:",
        opts: ["Sin ley", "Sin regla", "Siempre prohibidas", "Reguladas por el reglamento; la Ley 21.135 limita prohibiciones absolutas"],
        correct: 3,
        whyCorrect: "Ley tenencia responsable.",
        whyWrong: ["Hay ley.", "Hay regla.", "Hay límites.", ""]
      },
      {
        q: "La asamblea ordinaria de copropietarios se convoca:",
        opts: ["Nunca", "Cada 5 años", "Solo por juez", "Al menos una vez al año (ordinaria)"],
        correct: 3,
        whyCorrect: "Regla ley.",
        whyWrong: ["Obligatoria.", "Fuera.", "Fuera.", ""]
      },
      {
        q: "Una asamblea extraordinaria se convoca por:",
        opts: ["Solo banco", "Nunca", "Situaciones específicas del reglamento o por decisión del administrador/copropietarios", "Libertad"],
        correct: 2,
        whyCorrect: "Gestión extraordinaria.",
        whyWrong: ["No.", "Se convoca.", "", "Hay reglas."]
      },
      {
        q: "El quórum para modificar reglamento es:",
        opts: ["Típicamente mayoría calificada según la Ley 21.442", "Todos", "1 persona", "Mayoría simple"],
        correct: 0,
        whyCorrect: "Protección de minoritarios.",
        whyWrong: ["", "No.", "No.", "Calificada."]
      },
      {
        q: "El cobro judicial de gastos comunes impagos:",
        opts: [
          "Solo con juicio ordinario",
          "Solo arbitraje",
          "No existe",
          "Procede por vía ejecutiva con el acta de deuda certificada por el administrador"
        ],
        correct: 3,
        whyCorrect: "Procedimiento específico.",
        whyWrong: ["Es ejecutivo.", "No solo arbitraje.", "Existe.", ""]
      },
      {
        q: "Las obras comunes mayores requieren:",
        opts: ["Aprobación de asamblea con quórum según el reglamento y ley", "Nada", "Solo un copropietario", "Solo administrador"],
        correct: 0,
        whyCorrect: "Regla mínima.",
        whyWrong: ["", "Requiere.", "No.", "No solo."]
      },
      {
        q: "La Ley 21.442 fortaleció:",
        opts: ["Solo administrador", "Solo dueños", "Derechos del copropietario minoritario, transparencia y administración", "Nada"],
        correct: 2,
        whyCorrect: "Modernización regulatoria.",
        whyWrong: ["No solo.", "Balance.", "", "Avanzó."]
      },
      {
        q: "Un departamento con uso comercial permitido:",
        opts: ["Irrelevante", "Debe estar autorizado por reglamento + DOM + patente municipal", "Libre", "Sin requisitos"],
        correct: 1,
        whyCorrect: "Multiples regulaciones.",
        whyWrong: ["Tiene requisitos.", "", "No libre.", "Los hay."]
      },
      {
        q: "El corredor debe entregar al comprador copia del:",
        opts: ["Sólo Dicom", "Reglamento de copropiedad para revisión antes de firmar", "Nada", "Solo foto"],
        correct: 1,
        whyCorrect: "Debida diligencia.",
        whyWrong: ["No es relevante.", "", "Debe.", "Insuficiente."]
      },
      {
        q: "Un fondo operacional (Ley 21.442) es:",
        opts: ["Recursos para gastos extraordinarios menores, distinto del fondo de reserva", "No existe", "Inútil", "Igual al reserva"],
        correct: 0,
        whyCorrect: "Instrumento adicional.",
        whyWrong: ["", "Existe.", "Útil.", "Distinto."]
      },
      {
        q: "La antigüedad del edificio impacta:",
        opts: ["Imposible medir", "Solo color", "Nada", "Gastos comunes históricos, estado de mantenimiento, fondo disponible"],
        correct: 3,
        whyCorrect: "Factor real.",
        whyWrong: ["Se mide.", "No es solo estética.", "Impacta.", ""]
      }
    ]
  },
  finalQuestions: [
    {
      q: "El CBR inscribe:",
      opts: ["Personas", "Actos sobre inmuebles (compraventas, hipotecas, gravámenes)", "Nada", "Autos"],
      correct: 1,
      whyCorrect: "Registro público.",
      whyWrong: ["Otro.", "", "Registra.", "No."]
    },
    {
      q: "ROL SII identifica:",
      opts: ["Corredor", "Dueño", "Banco", "Propiedad fiscalmente"],
      correct: 3,
      whyCorrect: "Tributario.",
      whyWrong: ["No.", "CBR.", "No.", ""]
    },
    {
      q: "Estudio de títulos revisa:",
      opts: ["1 año", "10 años (prescripción extraordinaria)", "100 años", "1 día"],
      correct: 1,
      whyCorrect: "Plazo ley.",
      whyWrong: ["Insuficiente.", "", "Excesivo.", "Imposible."]
    },
    {
      q: "Ley 19.472 garantía estructural:",
      opts: ["1 año", "Indefinida", "3 años", "10 años"],
      correct: 3,
      whyCorrect: "Art 18 a.",
      whyWrong: ["Fuera.", "Finita.", "Terminaciones.", ""]
    },
    {
      q: "Ley 19.472 garantía instalaciones:",
      opts: ["5 años", "1 mes", "10 años", "1 año"],
      correct: 0,
      whyCorrect: "Art 18 b.",
      whyWrong: ["", "Fuera.", "Estructural.", "Fuera."]
    },
    {
      q: "Ley 19.472 garantía terminaciones:",
      opts: ["1 mes", "3 años", "10 años", "1 día"],
      correct: 1,
      whyCorrect: "Art 18 c.",
      whyWrong: ["Fuera.", "", "Estructural.", "Imposible."]
    },
    {
      q: "Vicio redhibitorio acción rescisión:",
      opts: ["1 año desde entrega", "Nunca", "5 años", "1 mes"],
      correct: 0,
      whyCorrect: "Art 1.866 CC.",
      whyWrong: ["", "Hay.", "Fuera.", "Fuera."]
    },
    {
      q: "Vicio redhibitorio acción quanti minoris:",
      opts: ["10 años", "Nunca", "6 meses desde entrega", "1 día"],
      correct: 2,
      whyCorrect: "Art 1.866 CC.",
      whyWrong: ["Fuera.", "Hay.", "", "Fuera."]
    },
    {
      q: "Certificado dominio vigente muestra:",
      opts: ["Contribución", "Arriendo", "Avalúo", "Dueño inscrito"],
      correct: 3,
      whyCorrect: "CBR.",
      whyWrong: ["No.", "No.", "SII.", ""]
    },
    {
      q: "Certificado hipotecas y gravámenes:",
      opts: ["Precios", "Cargas sobre la propiedad", "Nada", "Dueños"],
      correct: 1,
      whyCorrect: "Gravámenes.",
      whyWrong: ["No.", "", "Funcional.", "Otro."]
    },
    {
      q: "Ley 21.442 regula:",
      opts: ["Subsidios", "Hipoteca", "Copropiedad inmobiliaria", "Arriendo"],
      correct: 2,
      whyCorrect: "Copropiedad.",
      whyWrong: ["No.", "No.", "", "No."]
    },
    {
      q: "Fondo de reserva mínimo:",
      opts: ["50%", "Libre", "5% de gastos comunes", "0"],
      correct: 2,
      whyCorrect: "Ley 21.442.",
      whyWrong: ["Excesivo.", "Hay mínimo.", "", "Hay."]
    },
    {
      q: "Tasación la realiza:",
      opts: ["Corredor", "Tasador CMF independiente", "Cliente", "Vendedor"],
      correct: 1,
      whyCorrect: "Imparcialidad.",
      whyWrong: ["Estima.", "", "No.", "No."]
    },
    {
      q: "Método tasación residencial:",
      opts: ["Azar", "Renta solamente", "Nada", "Comparables · mercado"],
      correct: 3,
      whyCorrect: "Método principal.",
      whyWrong: ["No.", "Inversión.", "Hay.", ""]
    },
    {
      q: "Si precio > tasación:",
      opts: ["Banco sube", "Ok", "Automático", "Cliente aporta diferencia o renegocia"],
      correct: 3,
      whyCorrect: "Norma bancaria.",
      whyWrong: ["No sube.", "Hay problema.", "No.", ""]
    },
    {
      q: "Recepción Final DOM certifica:",
      opts: ["Obra terminada conforme normativa", "Avalúo", "Precio", "Venta"],
      correct: 0,
      whyCorrect: "Validación técnica.",
      whyWrong: ["", "No.", "Fiscal.", "No."]
    },
    {
      q: "Sin Recepción Final:",
      opts: ["Nada", "Mejor precio", "Imposible", "Problemas tasación y crédito"],
      correct: 3,
      whyCorrect: "Puede bloquear.",
      whyWrong: ["Problema.", "No.", "Con trámite se arregla.", ""]
    },
    {
      q: "Ampliación sin permiso:",
      opts: ["Normal", "Nula", "Irregular · Ley 20.898 facilita regularizar", "Legal"],
      correct: 2,
      whyCorrect: "Regularización.",
      whyWrong: ["Hay procedimiento.", "No nula.", "", "No."]
    },
    {
      q: "CIP muestra:",
      opts: ["Nada", "Precio", "Normas urbanísticas del predio", "Dueño"],
      correct: 2,
      whyCorrect: "Define usos.",
      whyWrong: ["Es funcional.", "No.", "", "Otro."]
    },
    {
      q: "Reglamento copropiedad se inscribe:",
      opts: ["CBR", "SII", "Municipio", "Notaría solo"],
      correct: 0,
      whyCorrect: "Publicidad registral.",
      whyWrong: ["", "No.", "No.", "CBR."]
    },
    {
      q: "Airbnb en edificio depende:",
      opts: ["Reglamento copropiedad", "Ley única", "Libre", "Nada"],
      correct: 0,
      whyCorrect: "Régimen privado.",
      whyWrong: ["", "No solo.", "Reglamento.", "Depende."]
    },
    {
      q: "Gastos comunes no pagados por vendedor:",
      opts: ["Automático", "Pueden cobrarse al comprador", "Ignorar", "Banco"],
      correct: 1,
      whyCorrect: "Obligación real.",
      whyWrong: ["No automático.", "", "Verificar.", "No."]
    },
    {
      q: "Prohibición DS1 post-compra:",
      opts: ["5 años desde inscripción", "10 años", "Indefinida", "Ninguna"],
      correct: 0,
      whyCorrect: "Antiespeculación.",
      whyWrong: ["", "Fuera.", "Finita.", "Hay."]
    },
    {
      q: "Estudio títulos lo hace:",
      opts: ["Cliente", "Corredor", "Notario", "Abogado especialista"],
      correct: 3,
      whyCorrect: "Dictamen profesional.",
      whyWrong: ["No.", "Insuficiente.", "Otro rol.", ""]
    },
    {
      q: "Línea oficial se obtiene en:",
      opts: ["DOM", "Banco", "CBR", "SII"],
      correct: 0,
      whyCorrect: "Municipal.",
      whyWrong: ["", "No.", "Otro.", "No."]
    },
    {
      q: "Acta de entrega incluye:",
      opts: ["Nada", "Foto", "Acta + llaves + estado + documentos técnicos", "WhatsApp"],
      correct: 2,
      whyCorrect: "Buenas prácticas.",
      whyWrong: ["Sin respaldo.", "Insuficiente.", "", "Informal."]
    },
    {
      q: "La tasación bancaria tiene vigencia:",
      opts: ["90-180 días", "5 años", "1 día", "Indefinida"],
      correct: 0,
      whyCorrect: "Operativo.",
      whyWrong: ["", "Fuera.", "Imposible.", "Finita."]
    },
    {
      q: "Vicio oculto conocido por vendedor no declarado:",
      opts: ["Genera responsabilidad adicional", "Irrelevante", "Nada", "Normal"],
      correct: 0,
      whyCorrect: "Agravante.",
      whyWrong: ["", "Relevante.", "Efectos.", "Hay."]
    },
    {
      q: "Vicios aparentes al entregar:",
      opts: ["Redhibitorios", "Ley 19.472", "No son vicios ocultos · exigir en acta entrega", "Cubiertos"],
      correct: 2,
      whyCorrect: "Diferencia crítica.",
      whyWrong: ["No.", "Tampoco.", "", "No."]
    },
    {
      q: "Antes de firmar promesa, certificados CBR:",
      opts: ["Sin fecha", "Fecha < 30 días", "Obsoletos", "10 años"],
      correct: 1,
      whyCorrect: "Vigente.",
      whyWrong: ["Requerida.", "", "No sirve.", "Imposible."]
    },
    {
      q: "Deudas servicios básicos:",
      opts: ["Automáticas", "Ilegales", "Sin efecto", "Regularizar o retener del precio"],
      correct: 3,
      whyCorrect: "Protección.",
      whyWrong: ["No.", "No.", "Hay.", ""]
    },
    {
      q: "Patente comercial pendiente afecta:",
      opts: ["Ilegal", "Nunca", "Puede afectar si la propiedad se usó como negocio", "Siempre"],
      correct: 2,
      whyCorrect: "Verificar.",
      whyWrong: ["No ilegal.", "Puede.", "", "No siempre."]
    },
    {
      q: "Número Municipal es:",
      opts: ["Teléfono", "Dirección oficial", "Clave", "Precio"],
      correct: 1,
      whyCorrect: "Oficial.",
      whyWrong: ["No.", "", "No.", "No."]
    },
    {
      q: "Plan regulador comunal define:",
      opts: ["Precios", "Dueños", "Contribuciones", "Usos, alturas, zonificación del territorio comunal"],
      correct: 3,
      whyCorrect: "Instrumento urbano.",
      whyWrong: ["No.", "No.", "Otro.", ""]
    },
    {
      q: "Propiedad en zona conservación histórica:",
      opts: ["Restricciones para remodelar/demoler (Ley 17.288)", "Sin reglas", "Más barata", "Normal"],
      correct: 0,
      whyCorrect: "Monumentos nacionales.",
      whyWrong: ["", "Hay.", "No necesariamente.", "No normal."]
    },
    {
      q: "La línea oficial delimita:",
      opts: ["Nada", "El deslinde legal del predio", "Municipio", "Pasillo"],
      correct: 1,
      whyCorrect: "Delimita.",
      whyWrong: ["Importa.", "", "No.", "No."]
    },
    {
      q: "Costo estudio títulos:",
      opts: ["$0", "$5M", "Gratis", "$150.000 a $400.000 según abogado"],
      correct: 3,
      whyCorrect: "Profesional.",
      whyWrong: ["Hay costo.", "Excesivo.", "No.", ""]
    },
    {
      q: "Hipoteca anterior no alzada:",
      opts: ["Pagada", "Subsiste · riesgo", "Ignorada", "Sin efecto"],
      correct: 1,
      whyCorrect: "Todo gravamen subsiste.",
      whyWrong: ["No automático.", "", "No.", "Tiene."]
    },
    {
      q: "Comparables tasación deben ser:",
      opts: ["Recientes (3-6 meses), misma zona y tipología", "Azar", "Antiguos", "Irrelevantes"],
      correct: 0,
      whyCorrect: "Fiabilidad.",
      whyWrong: ["", "No.", "No.", "Son relevantes."]
    },
    {
      q: "Fondo operacional (Ley 21.442):",
      opts: ["Gastos extraordinarios menores, distinto del de reserva", "Inútil", "No existe", "Igual reserva"],
      correct: 0,
      whyCorrect: "Instrumento propio.",
      whyWrong: ["", "Útil.", "Existe.", "Distinto."]
    },
    {
      q: "Asamblea ordinaria copropiedad:",
      opts: ["Solo juez", "Al menos 1 vez al año", "Nunca", "Cada 5 años"],
      correct: 1,
      whyCorrect: "Ley.",
      whyWrong: ["Fuera.", "", "Obligatoria.", "Fuera."]
    },
    {
      q: "Derrama pendiente:",
      opts: ["Puede cobrarse al comprador", "Al vendedor", "Notario", "Al banco"],
      correct: 0,
      whyCorrect: "Obligación real.",
      whyWrong: ["", "Potencial.", "No.", "No."]
    },
    {
      q: "Un tasador CMF:",
      opts: ["Colegio", "SERNAC", "Registrado en CMF", "Banco"],
      correct: 2,
      whyCorrect: "Registro oficial.",
      whyWrong: ["No.", "No.", "", "No."]
    },
    {
      q: "Método costo tasación:",
      opts: ["Costo reposición + terreno - depreciación", "Renta", "Nada", "Precio"],
      correct: 0,
      whyCorrect: "Método costo.",
      whyWrong: ["", "Otro.", "Existe.", "Otro."]
    },
    {
      q: "Quórum modificar reglamento copropiedad:",
      opts: ["Calificada según Ley 21.442", "Todos", "Simple", "1 persona"],
      correct: 0,
      whyCorrect: "Protección.",
      whyWrong: ["", "No.", "No.", "No."]
    },
    {
      q: "Cobro gastos comunes impagos:",
      opts: ["No existe", "Arbitraje", "Vía ejecutiva con acta administrador", "Ordinario"],
      correct: 2,
      whyCorrect: "Procedimiento específico.",
      whyWrong: ["Existe.", "No.", "", "Ejecutiva."]
    },
    {
      q: "Ampliación no regularizada y tasación:",
      opts: ["Mismo valor", "Más valor", "Imposible", "Tasa solo superficie regularizada"],
      correct: 3,
      whyCorrect: "Criterio bancario.",
      whyWrong: ["Menos.", "Al revés.", "Se tasa.", ""]
    },
    {
      q: "Certificado no expropiación verifica:",
      opts: ["Precio", "Dueño", "Predio no en plan de expropiación", "Uso"],
      correct: 2,
      whyCorrect: "Protección comprador.",
      whyWrong: ["No.", "Otro.", "", "No."]
    },
    {
      q: "Acción reivindicatoria post compra:",
      opts: ["Automática", "Nunca", "Irrelevante", "Posible si hay vicio en cadena · por eso estudio"],
      correct: 3,
      whyCorrect: "Riesgo real.",
      whyWrong: ["No automática.", "Existe.", "Muy relevante.", ""]
    },
    {
      q: "Sucesión sin posesión efectiva inscrita:",
      opts: ["Sin efecto", "Indiferente", "Bloquea enajenación hasta inscribir", "Válida"],
      correct: 2,
      whyCorrect: "Requisito previo.",
      whyWrong: ["Bloquea.", "Crítica.", "", "Bloquea."]
    }
  ],
  goldRules: [
    {
      n: 1,
      title: "Sin CBR no hay propiedad",
      text: "Dominio vigente + hipotecas + prohibiciones. Certificados siempre con fecha reciente (<30 días)."
    },
    {
      n: 2,
      title: "Estudio de títulos 10 años obligatorio",
      text: "Abogado profesional. Observaciones se resuelven antes de la promesa o se abandona la operación."
    },
    {
      n: 3,
      title: "ROL SII y contribuciones al día antes de firmar",
      text: "Si hay deuda, regularización o retención del precio. Nunca asumir riesgo fiscal del vendedor."
    },
    {
      n: 4,
      title: "DOM: Recepción Final y regularizaciones",
      text: "Sin Recepción Final hay problemas para tasar e inscribir. Ampliaciones sin permiso: regularizar o descontar precio."
    },
    {
      n: 5,
      title: "Tasación determina monto crédito",
      text: "Banco financia sobre tasación, no precio. Si precio > tasación, aporta pie adicional o renegocia."
    },
    {
      n: 6,
      title: "Ley 19.472 garantías: 3-5-10 años",
      text: "Terminaciones 3 años · instalaciones 5 · estructural 10, desde recepción municipal. Avisa siempre al comprador."
    },
    {
      n: 7,
      title: "Vicios redhibitorios tienen plazo",
      text: "Rescisión 1 año · rebaja 6 meses desde entrega (Art. 1.866 CC). Después prescribe."
    },
    {
      n: 8,
      title: "Copropiedad Ley 21.442",
      text: "Reglamento + gastos al día + fondo de reserva ≥ 5%. Léelo antes de firmar departamento."
    },
    {
      n: 9,
      title: "Acta de entrega con inventario",
      text: "Protege al comprador. Fotos, estado, documentos técnicos. Clave para reclamar vicios aparentes y exigir Ley 19.472."
    },
    {
      n: 10,
      title: "Due diligence es activo del corredor",
      text: "Un cliente bien protegido refiere. Un cliente con sorpresa post-firma te daña profesionalmente para siempre."
    }
  ]
};
