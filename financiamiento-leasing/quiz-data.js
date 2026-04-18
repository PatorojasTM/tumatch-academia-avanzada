/* Taller Avanzado 02 · Financiamiento Hipotecario y Leasing Habitacional
   Banco de preguntas — 7 submódulos × 20 + 50 finales = 190 preguntas
   Fuentes: CMF, SBIF, Banco Central de Chile, Ley 19.281, ABIF, SERNAC */

window.TALLER_CONFIG = {
  slug: "financiamiento-leasing",
  moduleNames: {
    "1": "Mutuo hipotecario en Chile",
    "2": "Tasa fija, variable y CAE",
    "3": "Leasing habitacional · Ley 19.281",
    "4": "Mutuarias, bancos y cooperativas",
    "5": "Scoring, renta y DICOM",
    "6": "Seguros hipotecarios · licitación CMF",
    "7": "Pre-aprobación estratégica"
  },
  certTitle: "Financiamiento Hipotecario y Leasing",
  certSubtitle: "Taller Avanzado 02 · Academia TuMatch",
  quizBank: {
    "1": [
      {
        q: "En Chile, el mutuo hipotecario expresado en UF protege principalmente a:",
        opts: [
          "Ambos por igual, sin preferencia económica",
          "Solo a la AFP que administra el fondo",
          "El deudor, porque la UF baja en períodos de deflación",
          "El prestamista, porque la UF se reajusta diariamente con IPC"
        ],
        correct: 3,
        whyCorrect: "La UF se reajusta diariamente según IPC mensual. Esto transfiere el riesgo inflacionario al deudor y protege al prestamista. Es un mecanismo propio del sistema chileno desde 1967.",
        whyWrong: [
          "En la práctica el deudor asume el riesgo inflacionario, desigualmente.",
          "La AFP no administra el mutuo; son bancos, mutuarias y cooperativas.",
          "La UF no baja salvo en deflación sostenida; en 50 años ha caído en &lt; 1% de los meses.",
          ""
        ]
      },
      {
        q: "El mutuo endosable se diferencia del mutuo bancario no endosable principalmente porque:",
        opts: [
          "Tiene tasa siempre variable",
          "Solo lo emite BancoEstado",
          "Puede cederse a compañías de seguros u otros agentes del mercado financiero, regulado por DFL 251 y CMF",
          "No puede cederse nunca a terceros"
        ],
        correct: 2,
        whyCorrect: "El mutuo endosable está diseñado para ser cedido (endosado) por su emisor original (mutuaria) a compañías de seguros. Es un instrumento de fondeo por calce activo-pasivo y está regulado por el DFL 251 y la CMF.",
        whyWrong: [
          "Puede ser fija, variable o mixta indistintamente.",
          "Lo emiten mutuarias (Tanner, Metlife, Consorcio) y algunos bancos.",
          "",
          "Lo opuesto a su definición — el endoso es su característica principal."
        ]
      },
      {
        q: "La Unidad de Fomento (UF) se reajusta:",
        opts: [
          "Cada 6 meses según TPM",
          "Mensualmente el día 9",
          "Anualmente con IPC observado",
          "Diariamente desde el día 10 del mes hasta el día 9 del siguiente, según IPC del mes anterior"
        ],
        correct: 3,
        whyCorrect: "El Banco Central publica la UF diariamente entre el día 10 y el día 9 del mes siguiente, aplicando el IPC publicado por el INE del mes anterior. Es una interpolación geométrica diaria.",
        whyWrong: ["La UF se reajusta con IPC, no con TPM.", "No es mensual: es diario dentro del mes.", "Se reajusta diariamente, no anualmente.", ""]
      },
      {
        q: "El organismo que regula y fiscaliza los créditos hipotecarios en Chile es:",
        opts: ["CMF (Comisión para el Mercado Financiero), que absorbió las funciones de SVS y SBIF en 2019", "Banco Central", "MINVU", "SERNAC"],
        correct: 0,
        whyCorrect: "La CMF, creada por la Ley 21.000 y operativa desde 2019, fiscaliza bancos, mutuarias, cooperativas de ahorro y crédito y compañías de seguros que participan del mercado hipotecario.",
        whyWrong: [
          "",
          "El BCCh define TPM y política monetaria, no fiscaliza entidades.",
          "MINVU gestiona subsidios habitacionales, no el mercado hipotecario privado.",
          "SERNAC protege al consumidor financiero pero no regula el instrumento."
        ]
      },
      {
        q: "Un mutuo hipotecario endosable suele tener como plazo máximo típico:",
        opts: ["Indefinido", "25-30 años", "5 años", "50 años"],
        correct: 1,
        whyCorrect: "El plazo máximo del mutuo endosable en Chile es típicamente 25 a 30 años, limitado por la edad del deudor al vencimiento (+75 años habitual) y por el calce que necesita la compañía de seguros cesionaria.",
        whyWrong: [
          "Los mutuos siempre tienen plazo determinado.",
          "",
          "Demasiado corto para un crédito hipotecario.",
          "Plazo superior no es operativo en Chile."
        ]
      },
      {
        q: "La diferencia principal entre crédito hipotecario en UF vs pesos radica en:",
        opts: [
          "El pesos es ilegal",
          "Solo en el nombre del producto",
          "Solo los bancos pueden emitir en UF",
          "UF se reajusta con IPC (tasa suele ser 4-6%); pesos incorpora inflación esperada en la tasa (tasa suele ser 10-14%)"
        ],
        correct: 3,
        whyCorrect: "La diferencia es económica: en UF el deudor asume inflación real y la tasa es la tasa real; en pesos el banco asume inflación esperada (incorporada en la tasa) y el deudor paga una tasa nominal más alta.",
        whyWrong: [
          "Los créditos en pesos existen pero son marginales.",
          "Es una diferencia estructural, no cosmética.",
          "Las mutuarias y cooperativas también emiten en UF.",
          ""
        ]
      },
      {
        q: "En Chile, los créditos hipotecarios en UF representan aproximadamente del stock hipotecario:",
        opts: ["50%", "10%", "~95% (la casi totalidad)", "20%"],
        correct: 2,
        whyCorrect: "Según informes CMF 2025, más del 95% del stock hipotecario chileno está denominado en UF. El stock en pesos nominales es residual y concentrado en promociones específicas.",
        whyWrong: ["El peso en pesos es mucho menor al 50%.", "El stock en UF es dominante, no residual.", "", "Muy por debajo de la cifra real."]
      },
      {
        q: "El porcentaje máximo habitual que un banco financia sobre el valor de la propiedad (LTV · loan-to-value) es:",
        opts: ["Típicamente 80% sin subsidio; hasta 90% con subsidio DS1 o alto scoring", "50% siempre", "Indefinido", "100% en cualquier caso"],
        correct: 0,
        whyCorrect: "La norma prudencial bancaria en Chile fija un LTV máximo típico de 80% (financiamiento del 80% del valor tasación). Con subsidio DS1 o scoring excepcional puede llegar a 90%. Valores mayores quedan como norma excepcional.",
        whyWrong: [
          "",
          "El 50% es muy conservador; refleja un cliente con mucho ahorro.",
          "Siempre hay límite prudencial regulado por CMF.",
          "Los créditos al 100% son casi inexistentes por riesgo regulatorio."
        ]
      },
      {
        q: "La tasación del inmueble la realiza:",
        opts: ["El comprador", "El vendedor", "Un tasador independiente contratado por el banco, registrado en CMF", "El corredor de propiedades"],
        correct: 2,
        whyCorrect: "La tasación la efectúa un tasador independiente registrado en CMF, contratado por el banco. El valor de tasación suele ser conservador (habitualmente entre 90-105% del precio pactado) y define el monto máximo a financiar.",
        whyWrong: [
          "El comprador contrata la compra, no la tasación bancaria.",
          "El vendedor no puede tasar su propiedad.",
          "",
          "El corredor estima precio de mercado, no tasa oficialmente para crédito."
        ]
      },
      {
        q: "Un mutuo hipotecario puede ser prepagado por el deudor:",
        opts: [
          "Solo con autorización CMF",
          "Sí, conforme al artículo 10 de la Ley 18.010 (ley de operaciones de crédito), con comisión de prepago limitada",
          "Solo los primeros 3 meses",
          "Nunca"
        ],
        correct: 1,
        whyCorrect: "La Ley 18.010 permite el prepago total o parcial. La comisión está limitada a 1,5 meses de interés sobre el monto prepagado en créditos no reajustables, y a 3 meses de interés en créditos reajustables (UF).",
        whyWrong: [
          "No requiere autorización CMF; la ley lo regula directamente.",
          "",
          "No hay restricción temporal; se puede prepagar cuando el deudor elija.",
          "Prepagar está expresamente permitido por ley."
        ]
      },
      {
        q: "La hipoteca que garantiza el mutuo se inscribe en:",
        opts: ["La Notaría", "La Superintendencia", "El Registro Civil", "El Conservador de Bienes Raíces (CBR) de la comuna donde está la propiedad"],
        correct: 3,
        whyCorrect: "La hipoteca se constituye por escritura pública y se inscribe en el Registro de Hipotecas y Gravámenes del CBR. Solo con la inscripción tiene efectos frente a terceros (Art. 2.410 CC).",
        whyWrong: [
          "La notaría otorga la escritura pero no inscribe la hipoteca.",
          "La Superintendencia (CMF) no inscribe hipotecas.",
          "El Registro Civil registra personas y actos vitales, no inmuebles.",
          ""
        ]
      },
      {
        q: "En caso de incumplimiento grave del deudor, el acreedor hipotecario puede:",
        opts: [
          "No hacer nada legal",
          "Quedarse con la propiedad automáticamente",
          "Solo cobrar dividendos futuros",
          "Iniciar juicio ejecutivo hipotecario según Art. 434 CPC y, tras el remate, pagarse con el producto"
        ],
        correct: 3,
        whyCorrect: "El acreedor debe demandar ejecutivamente en juicio hipotecario. La propiedad se remata en subasta pública (Código de Procedimiento Civil, art. 434 y ss.) y el acreedor se paga con el producto del remate, con privilegio del Art. 2.477 CC.",
        whyWrong: [
          "Tiene remedios legales ejecutivos.",
          "La dación en pago directa sin remate está prohibida (Art. 2.397 CC — cláusula comisoria pactada).",
          "Sin remate no hay recuperación del crédito.",
          ""
        ]
      },
      {
        q: "El impuesto de Timbres y Estampillas aplicado a un mutuo hipotecario se calcula sobre:",
        opts: [
          "El monto financiado, con tasa 0,8% anual proporcional al plazo, tope 0,8% (Ley 21.420 y DL 3.475)",
          "Ninguno — no aplica",
          "El precio de la propiedad",
          "El valor UF"
        ],
        correct: 0,
        whyCorrect: "El impuesto de timbres grava los documentos de crédito. La tasa es 0,066% mensual hasta 12 meses (total 0,8% anual); en mutuos a plazo largo aplica tope 0,8%. Primera vivienda con subsidio DS1 tiene exención parcial.",
        whyWrong: [
          "",
          "Sí aplica; está en el DL 3.475.",
          "El impuesto grava el crédito, no el precio total.",
          "El impuesto no aplica sobre UF, sobre el monto del crédito."
        ]
      },
      {
        q: "La exención del impuesto de Timbres para primera vivienda con subsidio aplica hasta:",
        opts: [
          "Propiedades DS1 hasta UF 2.200 (valor vivienda) tienen exención parcial o total según tramo",
          "No existe exención",
          "Solo viviendas sociales",
          "Todas las primeras viviendas sin límite"
        ],
        correct: 0,
        whyCorrect: "El DL 3.475 y sus modificaciones contemplan exención/rebaja para operaciones con subsidio estatal. Los montos exactos se actualizan en las leyes de presupuesto; en 2025-2026 el tope referencial ronda UF 2.200.",
        whyWrong: [
          "",
          "Sí existe, aunque con topes.",
          "No se limita solo a vivienda social; incluye DS1 hasta cierto tramo.",
          "Tiene requisitos (subsidio y tope UF)."
        ]
      },
      {
        q: "Un crédito hipotecario estándar en Chile incluye como componentes del dividendo mensual:",
        opts: [
          "Solo capital e interés",
          "Solo capital",
          "Capital + interés + seguros obligatorios (desgravamen + incendio + sismo) + contribuciones (si las paga el banco)",
          "Solo seguros"
        ],
        correct: 2,
        whyCorrect: "El dividendo bancario incluye típicamente capital, interés, seguros de desgravamen, incendio y sismo, y en algunos productos contribuciones y gastos operacionales. La CMF obliga a desglosar todos los componentes.",
        whyWrong: ["Incompleto — omite seguros obligatorios legales.", "Omite interés.", "", "El dividendo incluye capital e interés como base."]
      },
      {
        q: "Al momento de firmar la escritura pública de compraventa con mutuo hipotecario, el notario retiene habitualmente:",
        opts: [
          "Nada",
          "Solo la comisión del corredor",
          "El precio (pagado con el crédito) mientras se inscribe la escritura y la hipoteca en CBR, para entregar al vendedor una vez verificado",
          "Todo el precio"
        ],
        correct: 2,
        whyCorrect: "En la práctica chilena, el banco desembolsa el crédito contra la inscripción efectiva en el CBR. El notario (o el banco) retiene los fondos en cuenta vista hasta la verificación. Es una protección para el comprador y el banco.",
        whyWrong: ["El precio no se libera hasta que la hipoteca esté inscrita.", "", "La comisión del corredor se paga separadamente del precio.", ""]
      },
      {
        q: "El plazo de inscripción de la escritura en el Conservador de Bienes Raíces toma típicamente:",
        opts: ["6 meses", "2 años", "1 día", "10 a 45 días hábiles según carga del CBR y comuna"],
        correct: 3,
        whyCorrect: "La inscripción toma en promedio 10 a 45 días hábiles según la comuna. Comunas densas (Santiago, Providencia, Las Condes) son más lentas. CBR Santiago suele tomar 25-40 días hábiles.",
        whyWrong: ["Demasiado lento; el plazo real es menor.", "Fuera de rango operativo real.", "Imposible por procesos legales.", ""]
      },
      {
        q: "En caso de siniestro total de la propiedad hipotecada, el seguro de incendio paga al:",
        opts: [
          "Deudor directamente",
          "La Municipalidad",
          "Acreedor hipotecario (banco) hasta el saldo del crédito, y el excedente al deudor",
          "La compañía de seguros"
        ],
        correct: 2,
        whyCorrect: "El seguro se toma a favor del banco como acreedor preferente. En caso de siniestro, la aseguradora paga primero el saldo del crédito al banco y el excedente al deudor asegurado.",
        whyWrong: [
          "El banco tiene prioridad por cláusula de acreedor preferente.",
          "No tiene participación legal en el siniestro.",
          "",
          "La aseguradora es quien paga, pero no es la receptora."
        ]
      },
      {
        q: "El plazo entre pre-aprobación bancaria y firma de escritura pública en Chile suele ser:",
        opts: [
          "5 años",
          "Variable sin límite",
          "60 a 120 días (pre-aprobación vigente habitualmente 60-90 días, más evaluación de la propiedad)",
          "7 días"
        ],
        correct: 2,
        whyCorrect: "La pre-aprobación bancaria tiene vigencia típica de 60-90 días. Si se demora más, el banco re-evalúa. El proceso completo pre-aprobación → visitas → oferta → tasación → escritura suele durar 60-120 días.",
        whyWrong: [
          "Fuera de la vigencia razonable de pre-aprobación.",
          "Sí hay plazos típicos aunque varían.",
          "",
          "Imposible completar el proceso en ese plazo."
        ]
      },
      {
        q: "Cuando una propiedad ya tiene hipoteca inscrita del vendedor, al momento de vender:",
        opts: [
          "La hipoteca se elimina por presentir",
          "No se puede vender nunca",
          "Se alza la hipoteca simultáneamente con la nueva (tracto sucesivo): el banco del vendedor recibe el saldo del precio y firma el alzamiento",
          "El comprador asume la deuda automáticamente"
        ],
        correct: 2,
        whyCorrect: "La operación coordina alzamiento de hipoteca vendedor + nueva hipoteca comprador. En la notaría, parte del precio (normalmente todo el crédito comprador) se paga directamente al banco del vendedor, que firma el alzamiento. Se inscribe simultáneamente.",
        whyWrong: [
          "No se elimina sola; requiere acto notarial.",
          "Es una operación estándar en el 40% de las ventas.",
          "",
          "El comprador NO asume la deuda vieja; se paga."
        ]
      }
    ],
    "2": [
      {
        q: "La diferencia principal entre tasa nominal y CAE es:",
        opts: [
          "La tasa nominal es solo el interés; la CAE incorpora interés + seguros + comisiones + gastos + impuesto de timbres",
          "Son sinónimos",
          "La CAE es siempre más baja",
          "La CAE solo se usa en leasing"
        ],
        correct: 0,
        whyCorrect: "La CAE (Carga Anual Equivalente) es la tasa que refleja el costo total anual del crédito incluyendo todos los cargos asociados. Está regulada por el Reglamento de la Ley 19.496 y su difusión es obligatoria.",
        whyWrong: [
          "",
          "Son conceptos distintos con cifras distintas.",
          "Siempre es mayor o igual a la tasa nominal.",
          "Aplica a todo producto de crédito al consumidor, incluido hipotecario."
        ]
      },
      {
        q: "La CAE siempre es:",
        opts: [
          "Mayor o igual que la tasa nominal, porque incorpora más costos",
          "Igual para todos los bancos",
          "Indeterminable",
          "Menor que la tasa nominal"
        ],
        correct: 0,
        whyCorrect: "Por construcción matemática, la CAE es ≥ tasa nominal, ya que adiciona seguros, comisiones y otros gastos. Si CAE = tasa nominal, no hay costos adicionales (muy raro).",
        whyWrong: ["", "Varía por banco según estructura de cargos.", "Es calculable por ley.", "Matemáticamente imposible: la CAE añade costos."]
      },
      {
        q: "La tasa fija en un crédito hipotecario en UF significa que:",
        opts: [
          "La UF no se reajusta",
          "El dividendo es idéntico en pesos cada mes",
          "El banco decide cambiarla",
          "La tasa de interés se mantiene constante durante toda la vida del crédito, aunque el dividendo en pesos varía con la UF"
        ],
        correct: 3,
        whyCorrect: "La tasa fija mantiene la tasa nominal constante. El dividendo en UF es idéntico; en pesos varía porque la UF se reajusta. El deudor tiene certeza sobre la tasa, no sobre el monto en pesos.",
        whyWrong: ["La UF siempre se reajusta con IPC.", "El dividendo en pesos cambia con la UF.", "El banco no puede modificarla unilateralmente.", ""]
      },
      {
        q: "La TPM (Tasa de Política Monetaria) es fijada por:",
        opts: [
          "El Ministerio de Hacienda",
          "Los bancos privados por consenso",
          "El Consejo del Banco Central de Chile en sus reuniones mensuales",
          "La CMF"
        ],
        correct: 2,
        whyCorrect: "El Consejo del BCCh (5 miembros) fija la TPM en reuniones periódicas (aproximadamente mensuales). Su objetivo es mantener la inflación en 3% ± 1pp a 2 años.",
        whyWrong: [
          "Hacienda gestiona política fiscal, no monetaria.",
          "Los bancos no pueden fijar colectivamente la tasa de política.",
          "",
          "La CMF regula el mercado financiero, no fija política monetaria."
        ]
      },
      {
        q: "Un alza de 100 puntos base en la TPM (1 pp) típicamente impacta las tasas hipotecarias en UF a los:",
        opts: ["15 días", "No impacta", "2 a 4 meses, porque el fondeo de largo plazo es menos sensible que el fondeo corto", "2 años"],
        correct: 2,
        whyCorrect: "Los bancos fondean a largo plazo con instrumentos distintos a la TPM (letras, bonos). El traspaso a tasas hipotecarias en UF es parcial y diferido: ~40-60% del alza se traspasa en 2-4 meses.",
        whyWrong: ["Muy rápido para el fondeo hipotecario.", "Sí impacta aunque con rezago.", "", "Mucho más lento que la transmisión real."]
      },
      {
        q: "Una tasa variable hipotecaria se reajusta típicamente según:",
        opts: [
          "El dólar",
          "Un índice de referencia como TAB (Tasa Activa Bancaria) o, en menor medida, TPM + spread",
          "El precio del cobre",
          "La opinión del ejecutivo"
        ],
        correct: 1,
        whyCorrect: "La tasa variable chilena se ata habitualmente a la TAB (publicada por ABIF a 90/180/360 días) con un spread. Algunos productos usan TPM + spread fijo.",
        whyWrong: [
          "El tipo de cambio no es referencia estándar.",
          "",
          "El cobre no se relaciona con tasas hipotecarias.",
          "El ajuste está fórmula-linked, no discrecional."
        ]
      },
      {
        q: "En el mercado chileno, la tasa fija representa aproximadamente del mercado hipotecario nuevo:",
        opts: ["20%", "5%", "50%", "~78% (dominante en primera vivienda)"],
        correct: 3,
        whyCorrect: "Según estadísticas ABIF 2025, la tasa fija representa aproximadamente 78% de los créditos hipotecarios nuevos. El comprador chileno privilegia certidumbre sobre costo potencialmente menor.",
        whyWrong: ["Muy por debajo de la participación real.", "Casi inexistente — la realidad es dominancia.", "Es más que la mitad.", ""]
      },
      {
        q: "Cuando una tasa nominal es 4,80% y la CAE es 5,42%, el diferencial corresponde a:",
        opts: [
          "Seguros obligatorios + comisiones + impuesto de timbres + gastos operacionales",
          "Tipo de cambio",
          "Ninguno — son sinónimos",
          "Error del banco"
        ],
        correct: 0,
        whyCorrect: "El 0,62 pp adicional refleja los costos asociados al crédito: seguros de desgravamen/incendio/sismo, comisiones de administración, impuesto de timbres y gastos notariales/inscripción si se incluyen.",
        whyWrong: ["", "No aplica a créditos en UF.", "Son distintos por definición.", "Es por construcción regulatoria, no error."]
      },
      {
        q: "Una tasa mixta con periodo fijo de 5 años y luego variable es ideal para:",
        opts: [
          "Cliente que proyecta vender o refinanciar dentro de 5 años (ej. inversionista o carrera laboral creciente)",
          "Cualquier perfil",
          "Postulante DS49",
          "Cliente que comprará y mantendrá la propiedad 25 años"
        ],
        correct: 0,
        whyCorrect: "La tasa mixta es de nicho: perfiles con horizonte corto/medio. Si proyectas vender o refinanciar antes de que inicie la fase variable, capturas la tasa baja fija sin riesgo posterior.",
        whyWrong: [
          "",
          "No es producto universal; tiene nicho claro.",
          "DS49 usa instrumentos diferentes (no mutuo bancario).",
          "Para horizonte largo la fija pura es más conservadora."
        ]
      },
      {
        q: "Si un cliente pide '¿cuál es la tasa más baja del mercado hoy?', la respuesta correcta del corredor es:",
        opts: [
          "Derivar al banco sin análisis",
          "Explicar que depende del perfil (renta, pie, plazo, banco) y usar la calculadora TuMatch con sus datos reales + CMF para comparar",
          "Decir 3,5% siempre",
          "Dar una cifra de memoria"
        ],
        correct: 1,
        whyCorrect: "La tasa depende del perfil y la institución. El corredor profesional nunca responde con cifra de memoria; simula con datos reales en la Calculadora TuMatch y consulta el comparador CMF (www.cmfchile.cl).",
        whyWrong: [
          "Abdicar de la asesoría es antiprofesional.",
          "",
          "Una cifra específica sin contexto es errónea.",
          "Invita a error si cambiaron las tasas."
        ]
      },
      {
        q: "El spread de un crédito hipotecario sobre la TPM típicamente es:",
        opts: ["Negativo", "1,5 a 2,5 pp en UF (premio por plazo y riesgo crediticio)", "10 pp", "0,1 pp"],
        correct: 1,
        whyCorrect: "Los bancos cobran un premio sobre la TPM que refleja costo de fondeo de largo plazo, riesgo de crédito y margen. Históricamente 1,5 a 2,5 pp en UF para mutuo hipotecario estándar.",
        whyWrong: [
          "Financieramente inviable para el banco.",
          "",
          "Excesivo; corresponde a crédito de consumo o usura.",
          "Spread demasiado bajo, inviable económicamente."
        ]
      },
      {
        q: "Si la TPM sube 0,5 pp, un cliente con crédito a tasa fija:",
        opts: ["Paga más mensual", "Pierde el crédito", "Paga menos", "No cambia su dividendo (mantiene tasa fija)"],
        correct: 3,
        whyCorrect: "La tasa fija protege al deudor de las variaciones de la TPM. El dividendo en UF se mantiene; solo cambia en pesos por reajuste UF, que es otro factor.",
        whyWrong: ["Tasa fija no varía con TPM.", "No hay efecto sobre la vigencia del crédito.", "Tampoco baja — es fija.", ""]
      },
      {
        q: "Una CAE de 5,8% vs 6,2% para el mismo crédito UF 3.000 a 25 años significa una diferencia de:",
        opts: ["Despreciable", "Un millón de pesos", "Cien pesos", "Aproximadamente UF 140 a 200 a lo largo del crédito (millones de pesos)"],
        correct: 3,
        whyCorrect: "0,4 pp sobre UF 3.000 a 25 años (simplificando) representa ~UF 170 de diferencia acumulada en costos. A UF $39.000 ≈ $6,6 millones. Por eso siempre comparar CAE, no tasa nominal.",
        whyWrong: ["La diferencia es material y debe medirse.", "Subestima significativamente el costo acumulado.", "Subestima radicalmente el impacto.", ""]
      },
      {
        q: "La Ley 19.496 (protección al consumidor) obliga al banco a:",
        opts: [
          "Solo informar la tasa nominal",
          "Informar claramente la CAE y entregar hoja resumen estandarizada al consumidor",
          "Ocultar la CAE",
          "Omitir seguros"
        ],
        correct: 1,
        whyCorrect: "La Ley 19.496 (y el Reglamento sobre Información al Consumidor Financiero) obliga a la entrega de la hoja resumen estandarizada con CAE claramente destacada y desglose de todos los costos.",
        whyWrong: [
          "Tasa sola es insuficiente legalmente.",
          "",
          "La omisión de CAE constituye infracción sancionable.",
          "Los seguros obligatorios deben estar informados."
        ]
      },
      {
        q: "Cuando un banco ofrece 'tasa 3,99%' con letra chica de 'excluyendo seguros y comisiones', el corredor debe:",
        opts: [
          "Confiar ciegamente",
          "Pedir la CAE oficial y hoja resumen estandarizada antes de comparar con otros bancos",
          "Rechazar de plano",
          "Aceptar como dato final"
        ],
        correct: 1,
        whyCorrect: "La tasa anunciada sin CAE es marketing. Solo la hoja resumen estandarizada muestra el costo real. Siempre compara sobre CAE para tomar decisión informada.",
        whyWrong: [
          "La promesa publicitaria sin documento suele ser engañosa.",
          "",
          "Rechazar sin pedir documento es apresurado; exige hoja resumen.",
          "La cifra sola es incompleta para decidir."
        ]
      },
      {
        q: "El 'Spread de tasa' en un mismo banco entre dos clientes depende principalmente de:",
        opts: ["Scoring crediticio, monto, plazo, relación previa con el banco, y negociación", "Edad de los hijos", "Género", "Color de ojos"],
        correct: 0,
        whyCorrect: "Los bancos diferencian spread según riesgo: scoring, monto (tickets grandes negocian mejor), plazo, y vínculo comercial (cross-sell). Un buen corredor negocia estos parámetros.",
        whyWrong: ["", "Irrelevante al spread.", "Prohibido discriminar por género (Ley 20.609).", "Irrelevante y discriminatorio."]
      },
      {
        q: "La 'tasa referencial' que un ejecutivo da por teléfono antes de presentar la carpeta es:",
        opts: ["Fija y definitiva", "Ilegal", "Indicativa; la tasa final depende del análisis y puede variar hasta 0,5 pp", "Vinculante como contrato"],
        correct: 2,
        whyCorrect: "La tasa referencial es indicativa para orientar al cliente. La tasa final la define el banco tras evaluar carpeta completa; puede variar típicamente hasta 0,5 pp.",
        whyWrong: ["Tasa sin evaluación no puede ser definitiva.", "Es práctica legal y útil.", "", "No es vinculante sin carpeta evaluada."]
      },
      {
        q: "La TAB (Tasa Activa Bancaria) publicada por ABIF se usa principalmente para:",
        opts: ["Calcular el dólar", "Medir el IPC", "Fijar la UF", "Ser el índice de referencia de tasas variables hipotecarias (90/180/360 días)"],
        correct: 3,
        whyCorrect: "La TAB es el promedio ponderado de tasas activas del sistema bancario. Se publica a 30, 90, 180 y 360 días y es el índice estándar para tasas variables hipotecarias.",
        whyWrong: ["Ninguna relación con divisas.", "IPC lo mide el INE.", "La UF se calcula con IPC, no con TAB.", ""]
      },
      {
        q: "Un crédito hipotecario en UF a 25 años con tasa 5,0% tiene dividendo inicial típicamente cercano a:",
        opts: ["UF 20", "UF 5,8 a 6,1 por cada UF 1.000 de capital (regla 5,85‰ aproximada)", "UF 100", "UF 0,5 por mes"],
        correct: 1,
        whyCorrect: "La tabla de anualidades para tasa 5% a 25 años da ~5,84 UF mensual por UF 1.000 de capital. Es útil para calcular de memoria: capital × 0,00585 = dividendo mensual aprox.",
        whyWrong: ["Demasiado alto para ese capital/plazo/tasa.", "", "Exagerado; sería imposible económicamente.", "Muy bajo; no cubre amortización."]
      },
      {
        q: "La principal razón por la que un cliente debe preferir un banco con CAE 5,3% sobre otro con CAE 5,7% (mismo monto y plazo), aunque el segundo ofrezca 'mejor servicio', es:",
        opts: [
          "La CAE es irrelevante",
          "No hay razón económica",
          "El servicio importa más que el dinero",
          "La diferencia en 25 años supera típicamente UF 150 a 250 (millones de pesos) — prioridad económica"
        ],
        correct: 3,
        whyCorrect: "Para un crédito UF 3.000 a 25 años, 0,4 pp de diferencia en CAE suma ~UF 170. El 'mejor servicio' rara vez compensa esa cifra. Escoger por CAE es decisión económica correcta.",
        whyWrong: ["La CAE es el indicador decisivo.", "El ahorro es material y medible.", "En decisiones de largo plazo, el costo domina al servicio.", ""]
      }
    ],
    "3": [
      {
        q: "La ley que regula el leasing habitacional en Chile es:",
        opts: ["Ley 19.496", "Ley 19.281 de 1993, sobre arrendamiento con promesa de compraventa de viviendas", "Ley 20.040", "Ley 18.010"],
        correct: 1,
        whyCorrect: "La Ley 19.281, promulgada en 1993, establece el marco del contrato de arrendamiento con promesa de compraventa de viviendas. Regula las sociedades inmobiliarias de leasing, CAAPC y condiciones de la opción de compra.",
        whyWrong: [
          "La Ley 19.496 es protección al consumidor general.",
          "",
          "No existe con ese número.",
          "La Ley 18.010 regula operaciones de crédito en general, no leasing."
        ]
      },
      {
        q: "En un contrato de leasing habitacional, la propiedad durante la vigencia está a nombre de:",
        opts: [
          "Un tercero",
          "El cliente arrendatario",
          "La sociedad inmobiliaria de leasing, hasta que el cliente ejerza la opción de compra final",
          "MINVU"
        ],
        correct: 2,
        whyCorrect: "La Ley 19.281 establece que la propiedad permanece en la sociedad de leasing durante el contrato. El cliente es arrendatario-promitente-comprador. La transferencia se hace efectiva al ejercer la opción de compra.",
        whyWrong: [
          "No participa un tercero en la titularidad.",
          "No adquiere el dominio sino la expectativa de adquirirlo.",
          "",
          "MINVU gestiona subsidios; no adquiere propiedades privadas."
        ]
      },
      {
        q: "La Cuenta de Ahorro de Arrendamiento con Promesa de Compra (CAAPC) es:",
        opts: [
          "Un fondo mutuo",
          "Una cuenta de ahorro regulada donde el cliente acumula al menos 10-20% del precio como condición del leasing",
          "Una AFP",
          "Una cuenta corriente"
        ],
        correct: 1,
        whyCorrect: "La CAAPC es un producto regulado por la Ley 19.281. El cliente acumula en ella el ahorro mínimo exigido (habitualmente 10-20% del precio) y puede complementar con subsidio DS1 T2/T3.",
        whyWrong: [
          "No es un fondo mutuo; es una cuenta de ahorro para vivienda.",
          "",
          "No es un producto previsional.",
          "No es cuenta corriente; su uso es específico."
        ]
      },
      {
        q: "El plazo típico de un contrato de leasing habitacional en Chile es:",
        opts: ["2 años", "Indefinido", "10 a 25 años", "50 años"],
        correct: 2,
        whyCorrect: "Según la Ley 19.281 y la práctica de las sociedades de leasing (Tanner, ForUm, Caja Los Andes), el plazo típico es 10-25 años.",
        whyWrong: ["Demasiado corto.", "El contrato siempre tiene plazo determinado.", "", "Fuera de rango operativo."]
      },
      {
        q: "Una sociedad de leasing habitacional operativa reconocida en Chile 2026 es:",
        opts: ["Santander Habitacional", "Banco de Chile Leasing", "BCI Hipotecario", "Tanner Leasing Habitacional"],
        correct: 3,
        whyCorrect: "Tanner es la sociedad de leasing habitacional líder del mercado chileno, junto con ForUm y Caja Los Andes. Los bancos no constituyen sociedades de leasing por sí mismas bajo la Ley 19.281.",
        whyWrong: [
          "Similar: no constituye sociedad de leasing habitacional.",
          "Los bancos no operan como sociedades de leasing bajo Ley 19.281.",
          "Mismo caso: no es sociedad de leasing.",
          ""
        ]
      },
      {
        q: "La principal ventaja del leasing frente al crédito bancario para un comprador con ingresos informales es:",
        opts: [
          "No requiere ahorro",
          "Scoring más flexible: acepta clientes sin F22 bien estructurado, con Dicom cerrado y/o empleo reciente",
          "Es más barato",
          "Tasa siempre menor"
        ],
        correct: 1,
        whyCorrect: "El leasing evalúa de forma distinta al banco: pondera capacidad de pago actual y estabilidad operativa sobre historial formal. Es la puerta alternativa para perfiles que el banco rechaza.",
        whyWrong: [
          "Requiere ahorro mínimo CAAPC (10-20%).",
          "",
          "La tasa de leasing es típicamente 1-1,8 pp más alta que crédito bancario.",
          "Lo contrario suele ser cierto."
        ]
      },
      {
        q: "La tasa típica de un leasing habitacional en UF en 2026 oscila entre:",
        opts: ["20%", "Negativa", "UF + 5,9% a 7,1% (aproximadamente 1-1,8 pp sobre crédito bancario)", "2% y 3%"],
        correct: 2,
        whyCorrect: "Datos 2025-2026 de las principales sociedades: Tanner UF+6,0-6,8%, ForUm UF+5,9-6,5%, Caja Los Andes UF+6,1-6,9%. Siempre por encima del crédito bancario por mayor riesgo asumido.",
        whyWrong: ["Excesivo, no corresponde al mercado actual.", "Económicamente inviable.", "", "Muy por debajo del mercado real."]
      },
      {
        q: "Al final del contrato de leasing, la opción de compra se ejerce:",
        opts: [
          "Por un valor residual simbólico (habitualmente ≈ 1 UF), porque las rentas ya amortizaron el capital",
          "No existe opción",
          "Por el precio original",
          "Por un precio de mercado"
        ],
        correct: 0,
        whyCorrect: "El diseño económico del leasing prevé que las rentas mensuales amortizan capital + interés + seguros. Al término, queda un valor residual simbólico (1 UF habitual) para ejercer la opción de compra.",
        whyWrong: ["", "La opción es esencial al contrato.", "Ya se pagó en rentas.", "No es precio de mercado; es simbólico."]
      },
      {
        q: "El DS1 (Subsidio para sectores medios) es compatible con leasing habitacional en:",
        opts: [
          "Sí, especialmente en DS1 Tramo 2 y Tramo 3 para financiar parte del ahorro CAAPC",
          "Solo viviendas usadas",
          "Solo vivienda nueva",
          "No, son excluyentes"
        ],
        correct: 0,
        whyCorrect: "El DS1 T2/T3 permite usar el subsidio para completar el ahorro CAAPC exigido por la sociedad de leasing. Tanner y Caja Los Andes tienen convenios formales con MINVU para esta combinación.",
        whyWrong: ["", "Ambas son compatibles; depende de cada sociedad.", "Ambas modalidades son elegibles.", "Son compatibles por diseño regulatorio."]
      },
      {
        q: "La desventaja del leasing que el corredor debe explicar honestamente al cliente es:",
        opts: [
          "No hay desventajas",
          "Siempre se pierde la propiedad",
          "Durante el contrato, la propiedad no está a nombre del cliente; no puede hipotecarla ni venderla; y tasa es más alta que crédito bancario",
          "El cliente debe pagar doble"
        ],
        correct: 2,
        whyCorrect: "Es clave la honestidad: durante el leasing, el cliente es arrendatario con promesa. No tiene dominio formal. Si necesita vender o hipotecar, debe primero ejercer opción de compra o ceder el contrato.",
        whyWrong: [
          "Hay desventajas que el cliente debe conocer.",
          "Solo se pierde si incumple; no por defecto.",
          "",
          "El cliente paga una sola renta periódica."
        ]
      },
      {
        q: "Si el cliente incumple gravemente el pago en un leasing habitacional:",
        opts: [
          "La sociedad puede iniciar restitución del inmueble; la CAAPC suele devolverse en la medida en que corresponda según contrato",
          "Nada pasa",
          "Pierde todo lo pagado",
          "Va preso"
        ],
        correct: 0,
        whyCorrect: "La Ley 19.281 permite restitución del inmueble por incumplimiento grave. El saldo de la CAAPC suele devolverse al cliente si el contrato y reglamento lo permiten. Los pagos imputados a renta no se reintegran.",
        whyWrong: ["", "Sí hay consecuencias jurídicas.", "La CAAPC tiene protecciones legales.", "Incumplimiento civil no es delito; no hay prisión."]
      },
      {
        q: "Al firmar un leasing habitacional, el notario también:",
        opts: [
          "No hace registro",
          "Solo firma",
          "No interviene",
          "Interviene: el contrato se eleva a escritura pública y se inscribe en el CBR como arrendamiento con promesa"
        ],
        correct: 3,
        whyCorrect: "La Ley 19.281 exige escritura pública. La sociedad de leasing mantiene la propiedad inscrita a su nombre, pero el contrato se inscribe en el Registro de Propiedad del CBR junto con la promesa de compraventa.",
        whyWrong: [
          "Sí hay inscripción en CBR.",
          "El notario autoriza el instrumento público; hay más formalidades.",
          "Es obligatoria la intervención notarial.",
          ""
        ]
      },
      {
        q: "El leasing habitacional para un migrante con residencia definitiva reciente (menos de 2 años) es:",
        opts: [
          "Inaccesible",
          "Solo para chilenos",
          "Opción muy viable: sociedades de leasing evalúan más flexibilidad de historial que bancos",
          "Solo con pie 50%"
        ],
        correct: 2,
        whyCorrect: "Las sociedades de leasing evalúan capacidad actual y estabilidad operativa. Aceptan migrantes con residencia definitiva y menos años de historial bancario chileno. Es ruta frecuente para este perfil.",
        whyWrong: ["Es una de las rutas principales.", "Basta con RUT chileno y residencia definitiva.", "", "Pie habitual 10-20%, no 50%."]
      },
      {
        q: "La ventaja tributaria del leasing habitacional para el cliente persona natural es:",
        opts: [
          "No hay",
          "Exención total",
          "Limitada para persona natural; las rentas no son deducibles como gasto (a diferencia del leasing empresarial). Ahorra impuesto de timbres sobre parte del crédito",
          "Crédito fiscal completo"
        ],
        correct: 2,
        whyCorrect: "La persona natural no puede deducir renta de leasing en primera vivienda (uso habitacional). Sin embargo, sí hay ahorros en impuesto de timbres sobre la financiación y, en DS1 T2/T3, exenciones específicas.",
        whyWrong: [
          "Hay ventajas limitadas pero existen.",
          "Las exenciones son parciales, no totales.",
          "",
          "El crédito fiscal aplica a empresas, no personas."
        ]
      },
      {
        q: "El seguro de desgravamen en un leasing habitacional:",
        opts: [
          "Solo voluntario",
          "Solo a mayores de 60",
          "No aplica",
          "Sí aplica: cubre el saldo del contrato si fallece el arrendatario-promitente-comprador"
        ],
        correct: 3,
        whyCorrect: "El seguro de desgravamen es obligatorio en leasing como en mutuo. Cubre el saldo del contrato si fallece el cliente. Habitualmente cedido a compañía de seguros (en leasing endosado).",
        whyWrong: ["Es obligatorio.", "No hay restricción etaria así; existen condiciones de aseguramiento.", "Es obligatorio, no opcional.", ""]
      },
      {
        q: "Un cliente DS49 (vulnerable, sin crédito) típicamente accede a vivienda vía:",
        opts: [
          "Leasing habitacional",
          "Compraventa al contado",
          "Mutuo hipotecario",
          "Subsidio DS49 directo que financia el 100% (sin crédito ni leasing): MINVU entrega vivienda social"
        ],
        correct: 3,
        whyCorrect: "DS49 (Fondo Solidario de Elección de Vivienda) entrega subsidio total para sectores vulnerables con RSH bajo. No combina con leasing ni crédito bancario. Es vivienda social directa.",
        whyWrong: ["DS49 no se combina con leasing.", "No aplica por perfil económico.", "DS49 no contempla crédito bancario; es subsidio directo.", ""]
      },
      {
        q: "La sociedad ForUm Servicios Financieros está respaldada por:",
        opts: ["El Estado", "AFP Provida", "BancoEstado", "El grupo financiero Euroamerica (propietario histórico, ha tenido cambios societarios)"],
        correct: 3,
        whyCorrect: "ForUm Servicios Financieros ha operado históricamente ligado al grupo Euroamerica, con capitales privados. No es estatal ni del sistema bancario tradicional.",
        whyWrong: ["No es empresa estatal.", "Las AFP no operan sociedades de leasing.", "Sin relación de propiedad.", ""]
      },
      {
        q: "Una diferencia clave entre leasing habitacional y arriendo tradicional es:",
        opts: [
          "En leasing existe promesa de compraventa con opción futura; en arriendo simple no hay transferencia futura del dominio",
          "El arriendo es más caro",
          "No hay diferencia",
          "El leasing es ilegal"
        ],
        correct: 0,
        whyCorrect: "El leasing es contrato mixto: arrendamiento + promesa de compraventa. El arriendo puro es solo cesión de uso. La diferencia jurídica es la promesa y la acumulación de capital en la CAAPC.",
        whyWrong: ["", "Depende del caso; no es criterio general.", "La diferencia es jurídica y económica.", "Es legal y regulado."]
      },
      {
        q: "Un leasing habitacional puede traspasarse (ceder el contrato) a un tercero:",
        opts: [
          "Nunca",
          "Libremente",
          "Sí, con autorización de la sociedad de leasing y cumpliendo requisitos (scoring del nuevo cedente)",
          "Solo a familiares"
        ],
        correct: 2,
        whyCorrect: "La cesión del contrato de leasing habitacional es posible con autorización de la sociedad propietaria, que evaluará al nuevo arrendatario-promitente-comprador como si fuera cliente nuevo.",
        whyWrong: ["La cesión está contemplada contractualmente.", "No es libre; requiere evaluación.", "", "No se limita a familiares."]
      },
      {
        q: "El consejo profesional del corredor para un cliente ideal para leasing (perfil bancario complejo) es:",
        opts: [
          "Ocultar esta opción",
          "Obligar al leasing",
          "Presentar leasing como Plan A cuando el perfil no pasará banco; no esperar 3 rechazos bancarios para recién mencionarlo",
          "Nunca recomendar"
        ],
        correct: 2,
        whyCorrect: "El corredor profesional reconoce el perfil y recomienda la vía más eficiente. Esperar 3 rechazos bancarios desgasta al cliente y daña la relación. Si el perfil indica leasing, proponerlo de frente.",
        whyWrong: ["Ocultar opciones es mala práctica.", "Forzar sin asesorar es antiético.", "", "Es una opción legítima que debe considerarse."]
      }
    ],
    "4": [
      {
        q: "En Chile, los bancos comerciales representan aproximadamente del stock hipotecario total:",
        opts: ["~78% (mayoría absoluta)", "30%", "50%", "10%"],
        correct: 0,
        whyCorrect: "Según estadísticas CMF 2025, los bancos concentran ~78% del stock hipotecario. Mutuarias ~15%, cooperativas ~5%, sociedades de leasing ~2%.",
        whyWrong: ["", "Subestima el peso bancario.", "No es dominante.", "Muy bajo vs realidad."]
      },
      {
        q: "BancoEstado es líder en primera vivienda principalmente porque:",
        opts: [
          "Tiene convenios MINVU para subsidios DS1/DS49, scoring flexible para funcionarios públicos, y es único banco con programa habitacional estatal",
          "Tiene más sucursales",
          "Ofrece la menor tasa siempre",
          "Es el más antiguo"
        ],
        correct: 0,
        whyCorrect: "BancoEstado tiene rol estatal asignado para operaciones con subsidio habitacional. Su convenio con MINVU y su base de clientes funcionarios públicos le dan liderazgo natural en primera vivienda.",
        whyWrong: [
          "",
          "Las sucursales ayudan pero no son el diferencial clave.",
          "Las tasas varían por perfil; no es siempre el más bajo.",
          "La antigüedad no es factor diferenciador aquí."
        ]
      },
      {
        q: "Una mutuaria como Tanner se diferencia de un banco en:",
        opts: [
          "Emite mutuo endosable (transferible a compañías de seguros) y no recibe depósitos del público",
          "Tiene tasa siempre mayor",
          "Solo opera en regiones",
          "No emite mutuos"
        ],
        correct: 0,
        whyCorrect: "Las mutuarias no captan depósitos; fondean emitiendo mutuos endosables que se ceden a compañías de seguros o inversores institucionales. Están reguladas por DFL 251 y CMF.",
        whyWrong: ["", "Puede ser competitiva según perfil.", "Tanner opera a nivel nacional.", "Su negocio principal es emitir mutuo hipotecario."]
      },
      {
        q: "Las cooperativas de ahorro y crédito (como Coopeuch) son reguladas por:",
        opts: ["CMF + DAES (Departamento de Asociatividad y Economía Social, ex-DECOOP)", "Ninguno", "Solo MINVU", "Banco Central"],
        correct: 0,
        whyCorrect: "Las cooperativas están reguladas prudencialmente por la CMF (al superar cierto volumen) y supervisadas también por DAES en lo cooperativo. Son actores legítimos del mercado hipotecario.",
        whyWrong: ["", "Sí tienen supervisión específica.", "MINVU no regula instituciones financieras.", "El BCCh no supervisa bancos ni cooperativas."]
      },
      {
        q: "Presentar al cliente a 3 bancos en paralelo vs un solo banco:",
        opts: [
          "Eleva la probabilidad de aprobación de ~55% (uno) a ~88% (tres) y da poder de negociación de tasa",
          "Es ilegal",
          "No tiene impacto",
          "Reduce la probabilidad de aprobación"
        ],
        correct: 0,
        whyCorrect: "Multiplicar canales reduce riesgo de rechazo único. Además, tener múltiples ofertas reales permite al corredor negociar mejor tasa con el preferido — práctica estándar profesional.",
        whyWrong: ["", "Es práctica legítima y recomendada.", "Hay impacto medible en conversión.", "Lo contrario: la paraleliza múltiples evaluaciones."]
      },
      {
        q: "Santander, en primera vivienda, se distingue típicamente por:",
        opts: [
          "Exigir pie 40%",
          "Tasa siempre más alta",
          "No evaluar independientes",
          "Buen producto para empleados dependientes con renta regular y trayectoria, evaluación relativamente rápida y tasa competitiva en tickets UF 2.500+"
        ],
        correct: 3,
        whyCorrect: "Santander tiene perfil comercial fuerte en empleados dependientes de gran empresa. Su scoring estandarizado y plazos de evaluación cortos lo hacen atractivo para ese segmento.",
        whyWrong: ["Pie típico 10-20%, como resto del mercado.", "Tiene tasas competitivas para perfil ideal.", "Sí evalúa independientes con F22.", ""]
      },
      {
        q: "Coopeuch como cooperativa ofrece a socios:",
        opts: [
          "Scoring más humano que considera antigüedad en la cooperativa y aportes, además de tasa competitiva para perfiles habituales",
          "Misma evaluación que cualquier banco",
          "Tasas siempre iguales",
          "Ninguna diferencia"
        ],
        correct: 0,
        whyCorrect: "Coopeuch pondera la antigüedad de los socios y los aportes históricos. Esto favorece a clientes que han operado consistentemente con la cooperativa, dando un scoring más orientado a relación.",
        whyWrong: ["", "Tiene diferencias de evaluación.", "Varían por perfil.", "Sí hay diferenciación."]
      },
      {
        q: "Para un cliente con Dicom cerrado pero capacidad de pago actual, la ruta recomendada es:",
        opts: [
          "BancoEstado primero",
          "Solo efectivo",
          "Tanner Leasing y Caja Los Andes Leasing como primera opción; Tanner Mutuo o banco tradicional como segunda según monto",
          "Ningún banco"
        ],
        correct: 2,
        whyCorrect: "Con Dicom (aunque cerrado), los bancos tradicionales pueden poner trabas. Las sociedades de leasing son la vía más eficiente para este perfil, con evaluación más flexible.",
        whyWrong: [
          "BancoEstado suele ser más estricto con historial Dicom.",
          "Imposible para un inmueble de UF 2.000+.",
          "",
          "Hay opciones específicas (leasing)."
        ]
      },
      {
        q: "Metlife como mutuaria se especializa en:",
        opts: [
          "Mutuos endosables para tickets UF 3.000+ con tasa muy competitiva para perfiles de alto scoring",
          "Créditos de consumo",
          "Seguros de auto",
          "Tarjetas"
        ],
        correct: 0,
        whyCorrect: "Metlife, a través de su filial hipotecaria, emite mutuos endosables para tickets hipotecarios medios y altos. Su cesión a compañías de seguros (incluida ella misma) le da fondeo competitivo para estos tickets.",
        whyWrong: ["", "No es su negocio hipotecario principal.", "Es otra unidad de negocio.", "No emite tarjetas."]
      },
      {
        q: "Una cooperativa de ahorro y crédito puede tener límite a su crecimiento hipotecario por:",
        opts: [
          "Prohibiciones laborales",
          "Falta de clientes",
          "Falta de tecnología",
          "Restricciones prudenciales CMF basadas en su patrimonio y ratio de capital; no son bancos plenos"
        ],
        correct: 3,
        whyCorrect: "Las cooperativas con supervisión CMF deben cumplir ratios de capital similares a bancos aunque adaptados. Esto limita su crecimiento en créditos grandes comparado con bancos de mayor patrimonio.",
        whyWrong: ["No aplica.", "Muchas cooperativas tienen gran base.", "La tecnología no es el cuello.", ""]
      },
      {
        q: "La principal razón para NO presentar al cliente a un solo banco es:",
        opts: [
          "Porque es ilegal",
          "Por cobrar más comisión",
          "La probabilidad de aprobación baja a ~55% — se pierde ~33 pp vs presentar a 3",
          "Comodidad"
        ],
        correct: 2,
        whyCorrect: "Estadísticamente, la aprobación por 3 bancos paralelo es ~88% vs 55% por uno solo. Presentar a uno le quita al cliente 33 pp de probabilidad — es negligencia profesional.",
        whyWrong: [
          "Es legítimo, solo que sub-óptimo.",
          "El corredor cobra por operación cerrada, no por banco evaluado.",
          "",
          "La comodidad del corredor no justifica perjudicar al cliente."
        ]
      },
      {
        q: "Un corredor que siempre presenta al mismo banco por 'preferencia personal' incurre en:",
        opts: [
          "Conflicto de interés potencial: debe priorizar la mejor opción para su cliente, no la relación preferencial",
          "Cumplimiento ético",
          "Práctica obligatoria",
          "Buena práctica"
        ],
        correct: 0,
        whyCorrect: "El deber fiduciario profesional del corredor es con su cliente. Priorizar la relación con un banco sobre el interés del cliente es conflicto de interés. La ética profesional obliga a presentar múltiples opciones.",
        whyWrong: ["", "Es falta ética profesional.", "Ninguna ley obliga a preferencia.", "Es contrario al interés del cliente."]
      },
      {
        q: "El principal criterio para elegir entre mutuaria (Tanner/Metlife) y banco comercial para un cliente con F22 sólido es:",
        opts: [
          "Solo el nombre",
          "El logo del banco",
          "CAE final ofrecida, velocidad de evaluación y flexibilidad con la documentación",
          "La sucursal más cercana"
        ],
        correct: 2,
        whyCorrect: "Para un perfil idóneo, ambos tienen productos competitivos. La decisión se basa en el CAE final, plazos de evaluación/desembolso y flexibilidad documental. Se compara post pre-aprobaciones.",
        whyWrong: ["Irrelevante.", "Es marketing; no decisional.", "", "Irrelevante hoy con operación online."]
      },
      {
        q: "BancoEstado es el único banco con:",
        opts: [
          "Sucursales",
          "Crédito hipotecario",
          "Convenio formal exclusivo histórico con MINVU para operar subsidios habitacionales a escala nacional",
          "ATMs"
        ],
        correct: 2,
        whyCorrect: "BancoEstado tiene un rol estatal asignado en la operación del subsidio habitacional. Mientras otros bancos pueden aplicar subsidios, BancoEstado es el referente operativo principal por convenio MINVU.",
        whyWrong: ["Todos los bancos tienen sucursales.", "Todos emiten crédito hipotecario.", "", "Todos tienen ATMs."]
      },
      {
        q: "Un cliente funcionario público en primera vivienda se evalúa más favorablemente en:",
        opts: [
          "BancoEstado y Coopeuch (y en menor medida Capual) por convenios y scoring adaptado a la estabilidad del empleo público",
          "Cualquier banco por igual",
          "Ningún banco",
          "Solo privados"
        ],
        correct: 0,
        whyCorrect: "BancoEstado y cooperativas orientadas a sector público (Coopeuch, Capual) tienen scoring que valoriza la estabilidad del empleo estatal. Suelen ofrecer mejores condiciones a este perfil.",
        whyWrong: ["", "Hay diferencias relevantes por perfil.", "Todos los bancos evalúan.", "También ofrecen evaluación, solo que sin sesgo pro-público."]
      },
      {
        q: "La velocidad típica de pre-aprobación de un banco comercial es:",
        opts: ["5 a 15 días hábiles desde ingreso de carpeta completa", "6 meses", "Años", "1 día"],
        correct: 0,
        whyCorrect: "Con carpeta completa y scoring estándar, los bancos comerciales responden pre-aprobación en 5-15 días. Plazos más cortos requieren ejecutivo dedicado o banca preferencial.",
        whyWrong: ["", "Excesivamente lento, sería disfuncional.", "Nunca tarda años.", "Imposible con evaluación real."]
      },
      {
        q: "Una mutuaria presenta ventaja frente a banco comercial cuando:",
        opts: [
          "El cliente es dependiente",
          "Siempre",
          "Nunca",
          "El cliente tiene F22 como independiente, buena capacidad pero poco 'calce' con scoring bancario estandarizado"
        ],
        correct: 3,
        whyCorrect: "Las mutuarias evalúan caso a caso y son más flexibles con perfiles atípicos (independientes, profesionales liberales, ingresos variables). Su ventaja se activa justamente cuando banco tradicional duda.",
        whyWrong: [
          "Para dependientes estándar el banco es primero.",
          "Para dependientes estándar, bancos son competitivos.",
          "Tiene nicho específico de ventaja.",
          ""
        ]
      },
      {
        q: "La estrategia del corredor al recibir 3 ofertas hipotecarias distintas para el mismo cliente es:",
        opts: [
          "Elegir la primera",
          "Comparar CAE y condiciones; presentar al banco preferido las mejores ofertas de los otros 2 para negociar",
          "Por orden alfabético",
          "Elegir la más rápida"
        ],
        correct: 1,
        whyCorrect: "Tener múltiples ofertas es palanca de negociación. Un banco matchea o mejora la tasa rival si tú presentas la oferta alternativa formalmente. Es la técnica estándar de negociación hipotecaria.",
        whyWrong: ["Subóptimo económicamente.", "", "No es criterio económico.", "La velocidad no es el único factor."]
      },
      {
        q: "Cuando un cliente tiene relación preexistente con un banco (cuenta corriente, CuentaRUT, etc.), ese banco tiende a:",
        opts: ["Cobrar más caro", "Ofrecer tasa preferencial (típicamente 0,1-0,3 pp menor) y evaluación más rápida", "Ignorarlo", "Rechazarlo"],
        correct: 1,
        whyCorrect: "Los bancos premian el cross-sell: clientes con relación previa tienen scoring más favorable (conocen su comportamiento) y tasa ligeramente preferencial. Es factor real a considerar.",
        whyWrong: ["Al contrario: el cross-sell premia.", "", "Son clientes de alta prioridad.", "La preexistencia facilita evaluación."]
      },
      {
        q: "La sociedad 'Caja Los Andes' ofrece leasing habitacional principalmente a:",
        opts: [
          "Afiliados y pensionados con convenio que incluye condiciones preferenciales + convenio MINVU para DS1 T2/T3",
          "Público general sin restricciones",
          "Empresarios",
          "Solo no-afiliados"
        ],
        correct: 0,
        whyCorrect: "Caja Los Andes opera leasing habitacional con condiciones preferenciales a afiliados y pensionados, y tiene convenio con MINVU que facilita combinar con DS1 T2/T3. Es ruta frecuente para este perfil.",
        whyWrong: ["", "Tiene foco en afiliados.", "No es su foco comercial.", "Al contrario: prioriza afiliados."]
      }
    ],
    "5": [
      {
        q: "La 'regla de oro' de carga financiera máxima en Chile establece que el dividendo no debería superar:",
        opts: ["50% de la renta líquida", "70%", "25% de la renta líquida (excepcionalmente 30% con scoring excepcional y patrimonio)", "10%"],
        correct: 2,
        whyCorrect: "La norma prudencial bancaria y la práctica de evaluación limitan la carga financiera a ~25% de la renta líquida. Valores mayores requieren justificación y scoring excepcional.",
        whyWrong: ["Inaceptable por riesgo de incumplimiento.", "Fuera de cualquier norma prudencial.", "", "Muy conservador; se puede más."]
      },
      {
        q: "Para un empleado dependiente, los documentos de renta exigidos habitualmente son:",
        opts: [
          "Solo un comprobante",
          "Solo CI",
          "F22",
          "3 últimas liquidaciones de sueldo + contrato de trabajo vigente + certificado de cotizaciones AFP (12 meses)"
        ],
        correct: 3,
        whyCorrect: "El banco valida ingreso reciente (liquidaciones), estabilidad (contrato indefinido vigente) y regularidad (cotizaciones AFP). Si falta alguno, el scoring se resiente.",
        whyWrong: ["No alcanza para scoring completo.", "Insuficiente para evaluar renta.", "F22 aplica a independientes, no dependientes.", ""]
      },
      {
        q: "Para un independiente (boletas/pyme), los documentos de renta son:",
        opts: ["Ninguno", "F22 últimos 2 años + carpeta tributaria SII + boletas últimos 12 meses + cartola banco 6 meses", "Solo CI", "Solo tarjeta"],
        correct: 1,
        whyCorrect: "El banco valida ingresos demostrables vía F22 (declaración anual del SII), regularidad con boletas mensuales y respaldo con cartolas. Sin F22 con utilidades, difícil acceder a crédito.",
        whyWrong: ["No se puede evaluar sin documentos.", "", "Insuficiente para evaluación tributaria.", "Irrelevante para scoring."]
      },
      {
        q: "El DICOM afecta el scoring hipotecario principalmente cuando:",
        opts: [
          "Nunca",
          "Solo si el cliente es menor",
          "Siempre",
          "Hay morosidades vigentes no pagadas o protestos (cheques/pagaré) vigentes. Morosidades cerradas tienen impacto menor"
        ],
        correct: 3,
        whyCorrect: "DICOM vigente bloquea la mayoría de evaluaciones bancarias. Morosidades cerradas (pagadas) pueden pasar, aunque el scoring puede verse afectado por haber existido historial.",
        whyWrong: ["Sí afecta y es relevante.", "No tiene relación con la edad.", "Morosidades cerradas tienen impacto mucho menor.", ""]
      },
      {
        q: "La Ley 19.628 modificada por la Ley 20.575 establece que los datos Dicom caducan en:",
        opts: ["5 años desde el pago de la morosidad (para morosidades cerradas)", "Nunca", "20 años", "1 año"],
        correct: 0,
        whyCorrect: "La Ley 20.575 (2012) estableció que los datos económicos-financieros negativos caducan a los 5 años desde el hecho (morosidad cerrada). Antes era más amplio.",
        whyWrong: ["", "Sí caducan por ley.", "Excesivo; no corresponde.", "Es más largo."]
      },
      {
        q: "El 'pie' mínimo típico que exige el banco para primera vivienda sin subsidio es:",
        opts: ["20% del valor tasación (LTV 80%)", "5%", "50%", "0%"],
        correct: 0,
        whyCorrect: "Con LTV 80%, el cliente aporta 20% como pie más gastos operacionales. Con subsidio DS1 o scoring excepcional, puede reducirse a 10-15%.",
        whyWrong: ["", "Solo con subsidio y scoring excepcional.", "Muy conservador; no es norma.", "Imposible por norma prudencial."]
      },
      {
        q: "Un cliente con renta líquida individual $1.200.000 sin pareja, pie de 15% y Dicom limpio puede aspirar a crédito hipotecario de aproximadamente:",
        opts: ["Imposible sin aval", "UF ~1.500 (dividendo max $300.000 → UF 7,7 → capital ~UF 1.500 a 25 años y tasa 5%)", "UF 5.000", "UF 100"],
        correct: 1,
        whyCorrect: "Con carga 25% × $1.200.000 = $300.000. A UF $39.000, eso son UF 7,7 mensuales. A 25 años y tasa 5%, capital amortizable ≈ UF 1.500. Cálculo de memoria: dividendo/(0,00585) ≈ capital UF.",
        whyWrong: ["Sí puede aspirar con ese perfil.", "", "Imposible con esa renta.", "No se sostiene; sub-estima capacidad."]
      },
      {
        q: "El 'Registro Social de Hogares' (RSH) es relevante para el scoring hipotecario solo cuando:",
        opts: [
          "El cliente postula a subsidios habitacionales (DS1, DS49, DS19); sirve para validar tramo de vulnerabilidad",
          "Nunca",
          "Siempre",
          "Solo si es extranjero"
        ],
        correct: 0,
        whyCorrect: "El RSH es el instrumento de focalización de subsidios MINVU. Solo relevante si el cliente postula a subsidio. Para crédito puro sin subsidio no es factor bancario.",
        whyWrong: ["", "Es relevante para la ruta subsidiada.", "Solo en postulación a subsidios.", "Aplica igual a todos."]
      },
      {
        q: "Un 'aval solidario' o codeudor en crédito hipotecario:",
        opts: [
          "Responde por la deuda junto al deudor principal; refuerza el scoring y puede ampliar monto aprobado",
          "Solo familiares",
          "No existe",
          "Es automático"
        ],
        correct: 0,
        whyCorrect: "El codeudor solidario responde simultáneamente por la obligación. Su renta, antigüedad y Dicom se suman al deudor principal, elevando el scoring conjunto y el monto viable.",
        whyWrong: ["", "No se limita a familiares; puede ser pareja, socio, etc.", "Es figura clásica de garantía.", "Siempre voluntario y consensuado."]
      },
      {
        q: "El certificado 'Deudas SBIF' (ahora emitido por CMF) muestra:",
        opts: [
          "Solo créditos de consumo",
          "Solo hipotecarios",
          "Todas las deudas vigentes del deudor con el sistema financiero regulado (bancos, cooperativas, mutuarias)",
          "Ingresos"
        ],
        correct: 2,
        whyCorrect: "El certificado de deudas CMF (ex-SBIF) lista las obligaciones vigentes en el sistema financiero: consumo, hipotecario, comercial. Es insumo clave del scoring.",
        whyWrong: ["Incluye todas las modalidades.", "Incluye también consumo y comercial.", "", "No muestra ingresos."]
      },
      {
        q: "La 'antigüedad laboral mínima' exigida para dependiente típicamente es:",
        opts: ["1 día", "10 años", "3 meses", "6 meses de contrato indefinido (algunos bancos exigen 12 meses)"],
        correct: 3,
        whyCorrect: "La mayoría de bancos exige 6 meses de contrato indefinido como mínimo. Algunos exigen 12 meses. Con contrato a plazo fijo, la evaluación es más rigurosa.",
        whyWrong: ["Imposible por norma bancaria.", "Excesivo; no aplica.", "Algunos aceptan pero no es el estándar.", ""]
      },
      {
        q: "Un cliente con boletas de honorarios y SIN F22 (menos de 1 año declarado) es elegible principalmente para:",
        opts: [
          "Banco comercial tradicional",
          "Ninguna opción",
          "Subsidio DS49",
          "Leasing habitacional (Tanner, ForUm, Caja Los Andes) que evalúa capacidad actual sin exigir 2 años de F22"
        ],
        correct: 3,
        whyCorrect: "Sin F22 demostrable, los bancos rechazan. El leasing evalúa capacidad actual y estabilidad operativa, aceptando este perfil con mayor pie o aval si es necesario.",
        whyWrong: ["Sin F22 los bancos habitualmente rechazan.", "Hay opciones.", "DS49 requiere RSH bajo; otro objetivo.", ""]
      },
      {
        q: "El 'thin file' (historial crediticio escaso) afecta el scoring porque:",
        opts: [
          "No afecta",
          "Siempre es positivo",
          "El banco no puede predecir comportamiento por ausencia de historial; scoring se baja por precaución",
          "Es ilegal"
        ],
        correct: 2,
        whyCorrect: "Sin historial, el scoring bancario no tiene base predictiva. Se castiga por precaución. Recomendación: construir historial con tarjeta manejada bien 12+ meses antes de postular.",
        whyWrong: ["Tiene impacto negativo sobre scoring.", "Al contrario: penaliza el scoring.", "", "Es condición fáctica, no legal."]
      },
      {
        q: "Para reforzar el scoring antes de postular a crédito, un cliente puede:",
        opts: [
          "Pedir préstamo al banco enemigo",
          "No pagar nada",
          "Pedir más créditos rápidos",
          "Pagar todo Dicom cerrado, pedir certificados de cierre, ordenar documentos tributarios, reducir deuda de tarjeta a &lt; 30% del cupo"
        ],
        correct: 3,
        whyCorrect: "La preparación pre-postulación suma: Dicom limpio con certificados, cartolas ordenadas, F22 impecable y ratio de utilización de crédito bajo. Preparar al cliente 60-90 días antes eleva la probabilidad.",
        whyWrong: ["Tener muchos créditos abiertos perjudica.", "Asegura el rechazo.", "Empeora el scoring sobreendeudando.", ""]
      },
      {
        q: "La 'tasa de aprobación esperada' para un corredor profesional con clientes correctamente pre-calificados es:",
        opts: ["1%", "10%", "≥ 75%, porque filtra antes de presentar; los no calificados se redirigen a leasing o diferimiento", "100%"],
        correct: 2,
        whyCorrect: "El corredor profesional filtra clientes: quienes no califican se derivan a leasing o se prepara el scoring antes. Tasa de aprobación de clientes presentados ≥ 75% es estándar profesional.",
        whyWrong: ["Refleja ausencia de filtro.", "Irrealmente bajo, refleja mal filtro.", "", "100% es estadísticamente imposible."]
      },
      {
        q: "Un cliente con pareja (ambos declaran) puede combinar rentas líquidas para scoring porque:",
        opts: [
          "Nunca",
          "Si el crédito lo firman ambos como deudores solidarios (no solo avales), los ingresos suman para determinar carga financiera",
          "Siempre",
          "Solo si está casado"
        ],
        correct: 1,
        whyCorrect: "La suma de ingresos requiere que ambos firmen como deudores (acreedores del crédito). El matrimonio no es necesario, ser conviviente civil o de hecho con deuda compartida basta.",
        whyWrong: ["Es práctica estándar.", "", "Requiere formalización como deudor.", "No exige matrimonio."]
      },
      {
        q: "La 'plataforma.cl' (Boletín Comercial) contiene información:",
        opts: [
          "Ninguna",
          "Solo oficial SII",
          "Solo del deudor",
          "Registros de morosidad comercial más amplios que Equifax; consultada por bancos al evaluar"
        ],
        correct: 3,
        whyCorrect: "Plataforma.cl agrega registros de morosidad comercial (letras, pagarés protestados, cheques protestados) además de Dicom. Los bancos lo consultan junto con Equifax.",
        whyWrong: ["Sí tiene registros.", "No es información SII; es comercial.", "No limitada a uno; consolida terceros.", ""]
      },
      {
        q: "El 'score' que manejan los bancos (ej. Equifax Score) va de:",
        opts: [
          "Aproximadamente 0 a 1.000 (rangos típicos: sobre 700 buena probabilidad aprobación, bajo 550 difícil)",
          "0 a 10",
          "Negativo",
          "No existe"
        ],
        correct: 0,
        whyCorrect: "Los scores crediticios se calibran habitualmente 0-1.000 (o similar escala). Sobre 700 considerado bueno, sobre 800 excelente, bajo 550 complicado. Cada banco ajusta su umbral.",
        whyWrong: ["", "Escala demasiado gruesa.", "No corresponde; no aplica escala negativa.", "Existe y se usa."]
      },
      {
        q: "Un cliente que quiere comprar con ahorro 0 y sin subsidio es:",
        opts: [
          "Elegible con tasa alta",
          "Inelegible prácticamente: la norma prudencial exige LTV &lt; 100%; sin pie ni subsidio no aplica",
          "Elegible con aval",
          "Elegible automáticamente"
        ],
        correct: 1,
        whyCorrect: "La norma prudencial CMF limita LTV ≤ 90% (con subsidio) o ≤ 80% (sin subsidio). Sin ahorro ni subsidio, no hay ruta formal. Alternativas: ahorrar, postular subsidio o combinar.",
        whyWrong: ["No hay producto 100% LTV comercial.", "", "Aval no completa LTV 100%.", "Nunca hay financiamiento 100% de facto."]
      },
      {
        q: "El scoring para un migrante con residencia definitiva reciente (menos de 2 años) se maneja:",
        opts: [
          "Más conservador en banca tradicional; leasing habitacional suele ser mejor ruta en esta ventana",
          "Igual que chileno",
          "Imposible",
          "Solo con ahorro 50%"
        ],
        correct: 0,
        whyCorrect: "El scoring bancario se basa en historial. Migrante con historial corto tiene scoring bajo en banca tradicional, aunque tenga buen empleo. Leasing habitacional evalúa capacidad actual y es ruta más eficiente.",
        whyWrong: [
          "",
          "Hay diferencia por falta de historial.",
          "Es elegible vía leasing y algunos bancos.",
          "Pie habitual 10-20%, aunque más pie mejora condiciones."
        ]
      }
    ],
    "6": [
      {
        q: "El seguro de desgravamen en un crédito hipotecario cubre:",
        opts: [
          "Solo a la propiedad",
          "No es obligatorio",
          "El saldo del crédito si fallece el deudor, transfiriendo la propiedad libre de gravamen a los herederos",
          "Solo cesantía"
        ],
        correct: 2,
        whyCorrect: "El desgravamen es seguro de vida del deudor: paga el saldo al fallecer. Los herederos reciben la propiedad sin deuda. Es obligatorio y está regulado por la CMF.",
        whyWrong: ["Cubre al deudor, no a la propiedad física.", "Es obligatorio por ley.", "", "La cesantía es otro seguro distinto y opcional."]
      },
      {
        q: "El seguro de incendio en hipoteca cubre:",
        opts: ["Robo", "Daños físicos por incendio, rayo, explosión y daños conexos", "Terremoto", "Cesantía"],
        correct: 1,
        whyCorrect: "El incendio estándar cubre fuego, rayo, explosión y daños derivados (agua de bomberos). Terremoto y robo son coberturas separadas/adicionales.",
        whyWrong: ["El robo es cobertura hogar opcional.", "", "El terremoto tiene póliza adicional específica.", "No es seguro de protección al trabajo."]
      },
      {
        q: "La 'Licitación CMF' de seguros hipotecarios permite al cliente:",
        opts: [
          "Elegir la compañía de seguros ganadora de la licitación CMF en lugar de la recomendada por el banco, ahorrando típicamente 20-40%",
          "Ninguna ventaja",
          "Pagar menos tasa",
          "Omitir los seguros"
        ],
        correct: 0,
        whyCorrect: "Desde 2012, la CMF obliga a licitar seguros hipotecarios. El cliente tiene derecho a elegir la compañía ganadora. Ahorro típico vs seguro comercial del banco: 20-40% en primas.",
        whyWrong: [
          "",
          "Hay beneficio concreto y significativo.",
          "No afecta la tasa del crédito, sí la prima del seguro.",
          "Los seguros obligatorios no se omiten."
        ]
      },
      {
        q: "El costo total de los seguros hipotecarios en un crédito UF 3.000 a 25 años representa aproximadamente:",
        opts: ["8-12% del costo total del crédito (puede llegar a UF 200-350 acumulados)", "50%", "1% del total", "Despreciable"],
        correct: 0,
        whyCorrect: "Seguros (desgravamen + incendio + sismo) suman ~8-12% del costo total acumulado del crédito. En UF 3.000 a 25 años, pueden ser UF 200-350. Es rubro material para ahorrar.",
        whyWrong: ["", "Sobrestima radicalmente.", "Subestima significativamente el peso.", "Es rubro material a optimizar."]
      },
      {
        q: "El seguro de sismo en Chile es:",
        opts: [
          "No obligatorio",
          "Solo en el norte",
          "Obligatorio en zonas sísmicas y requerido por el banco como complemento al incendio",
          "Voluntario siempre"
        ],
        correct: 2,
        whyCorrect: "Por la sismicidad chilena, el seguro de sismo es exigido por el banco como parte del paquete hipotecario. Es estándar y regulado.",
        whyWrong: ["Sí es obligatorio en hipoteca.", "Aplica en todo Chile.", "", "Es condición de crédito."]
      },
      {
        q: "La prima anual de un seguro de desgravamen depende principalmente de:",
        opts: ["El cobre", "La comuna", "El color del banco", "Edad del deudor, saldo del crédito, estado de salud (a veces cuestionario médico)"],
        correct: 3,
        whyCorrect: "El desgravamen ajusta prima por edad (a más edad, más cara), saldo (a más saldo, más cara) y salud (con cuestionario médico para tickets altos).",
        whyWrong: ["Sin relación.", "La comuna afecta incendio/sismo, no desgravamen.", "Irrelevante.", ""]
      },
      {
        q: "Un cliente de 55 años comparado con uno de 30 años tiene prima de desgravamen aproximadamente:",
        opts: ["Gratis", "2-4x más cara, por mayor expectativa de siniestro a mayor edad", "Más barata", "Igual"],
        correct: 1,
        whyCorrect: "La prima de desgravamen sube con la edad. Un cliente de 55 años paga típicamente 2-4x la prima de uno de 30 años por el mismo monto.",
        whyWrong: ["Nunca gratis en desgravamen.", "", "Imposible; la edad la encarece.", "Depende fuertemente de edad."]
      },
      {
        q: "Los seguros licitados CMF se renuevan cada:",
        opts: ["100 años", "1 a 3 años (según bases de licitación); al término se re-licita y puede cambiar aseguradora ganadora", "Nunca", "Día"],
        correct: 1,
        whyCorrect: "Las licitaciones CMF tienen vigencia 1-3 años. Al término, se re-licita y la aseguradora puede cambiar. Esto introduce competencia periódica y baja primas.",
        whyWrong: ["Finitas.", "", "Son cíclicas.", "No es diario."]
      },
      {
        q: "Si el cliente omite el seguro de incendio, el banco:",
        opts: [
          "No pasa nada",
          "Lo felicita",
          "No se entera",
          "Considera incumplimiento contractual grave: puede exigir contratación o acelerar el crédito"
        ],
        correct: 3,
        whyCorrect: "El contrato hipotecario exige seguros vigentes. Su ausencia constituye incumplimiento. El banco puede exigir reposición y, ante negativa, acelerar el crédito.",
        whyWrong: ["Genera incumplimiento.", "Nunca.", "Los seguros son auditables; el banco verifica.", ""]
      },
      {
        q: "El seguro de cesantía / incapacidad laboral para deudores hipotecarios:",
        opts: [
          "Es obligatorio",
          "No existe",
          "Es gratuito",
          "Es opcional; paga dividendos si hay cesantía involuntaria o incapacidad médica (habitualmente 3-12 meses de dividendos)"
        ],
        correct: 3,
        whyCorrect: "La cesantía es cobertura opcional. Paga dividendos temporalmente si el deudor queda cesante involuntariamente (contrato indefinido) o sufre incapacidad. Útil para empleados sin colchón de emergencia.",
        whyWrong: ["Es opcional.", "Existe y se ofrece.", "Tiene prima como cualquier seguro.", ""]
      },
      {
        q: "El seguro de desgravamen puede omitirse:",
        opts: [
          "Siempre",
          "Solo con aval",
          "Solo en situaciones muy excepcionales (ej. edades altas con bajas sumas); es obligatorio en la práctica",
          "A gusto del cliente"
        ],
        correct: 2,
        whyCorrect: "La práctica bancaria chilena exige desgravamen. Omitirlo es inviable salvo excepciones. Los bancos tienen cierta flexibilidad en adultos mayores con sumas pequeñas.",
        whyWrong: ["Es la norma.", "Aval no reemplaza desgravamen.", "", "La opción está acotada."]
      },
      {
        q: "Un cliente fumador puede tener prima de desgravamen:",
        opts: ["Menor", "Igual", "Gratis", "Más alta por mayor expectativa de siniestro (según cuestionario médico y tarifas de compañía)"],
        correct: 3,
        whyCorrect: "El cuestionario médico pregunta tabaquismo. Las aseguradoras tarifan más alto a fumadores por mayor mortalidad. Diferencia típica puede ser 10-20% sobre prima estándar.",
        whyWrong: ["El tabaquismo encarece.", "Discrimina por tarifa actuarial.", "Es tarificación comercial.", ""]
      },
      {
        q: "El 'seguro de tasa' o 'seguro de prepago' es:",
        opts: [
          "Obligatorio siempre",
          "Producto comercial opcional que permite prepagar sin multa si bajan tasas; raramente conviene vs la multa esperada",
          "Recomendado siempre",
          "Gratis"
        ],
        correct: 1,
        whyCorrect: "Producto nicho. La prima suele exceder la multa esperada de prepago (1,5-3 meses de interés). Solo conviene con convicción fuerte de caída de tasas en horizonte corto.",
        whyWrong: ["No es obligatorio.", "", "No conviene por defecto.", "Tiene prima."]
      },
      {
        q: "El banco debe ofrecer al cliente la opción de:",
        opts: [
          "No tener seguros",
          "Solo su aseguradora",
          "Seguro extranjero",
          "Contratar los seguros obligatorios con compañía licitada CMF o la que él prefiera, no solo la del banco"
        ],
        correct: 3,
        whyCorrect: "El cliente tiene derecho a elegir la aseguradora, dentro del marco regulatorio. La licitación CMF es el instrumento que habilita esta elección con tarifas competitivas.",
        whyWrong: ["Son obligatorios.", "No puede obligar; CMF lo prohíbe.", "Debe ser aseguradora autorizada en Chile.", ""]
      },
      {
        q: "El seguro de incendio y sismo para un departamento en condominio puede estar cubierto por:",
        opts: [
          "Puede haber póliza del edificio (copropiedad) para estructura común; el banco habitualmente exige adicional al dividendo para cobertura unit-specific",
          "Siempre por la comunidad",
          "Solo el comprador",
          "Nunca"
        ],
        correct: 0,
        whyCorrect: "Muchos condominios tienen póliza colectiva de edificio por ley de copropiedad. El banco a veces la acepta si cumple condiciones; otras veces exige adicional. Depende de póliza y banco.",
        whyWrong: ["", "No es automático; depende de póliza.", "La copropiedad también puede cubrir.", "Puede cubrirse por copropiedad."]
      },
      {
        q: "La SERNAC Financiero puede:",
        opts: [
          "Fijar tasas",
          "Multar al cliente",
          "Emitir créditos",
          "Recibir reclamos del cliente sobre seguros abusivos o prácticas indebidas de la banca"
        ],
        correct: 3,
        whyCorrect: "SERNAC Financiero (parte de SERNAC) recibe reclamos y mediación sobre prácticas financieras. Puede iniciar procedimientos voluntarios colectivos (ley 21.081).",
        whyWrong: ["No fija precios; la CMF y mercado lo hacen.", "No multa al cliente.", "No es emisor.", ""]
      },
      {
        q: "Un seguro hipotecario pagado mes a mes frente a anual:",
        opts: [
          "Siempre más barato anual",
          "Sin diferencia",
          "Habitualmente la prima mensual tiene recargo por fraccionamiento (~2-5% anual), pero es la forma estándar incorporada al dividendo",
          "Solo anual"
        ],
        correct: 2,
        whyCorrect: "La prima fraccionada (mensual) suele tener recargo por costos administrativos y tiempo-valor del dinero. El prepago anual, si la compañía lo permite, ahorra ese porcentaje.",
        whyWrong: ["Pagar mensual suele ser más caro.", "Hay diferencia económica real.", "", "Ambas formas están disponibles usualmente."]
      },
      {
        q: "En caso de siniestro cubierto, la aseguradora paga al banco primero. El excedente (si lo hay):",
        opts: ["Se entrega al deudor asegurado", "Lo retiene la aseguradora", "Va al Fisco", "Al corredor"],
        correct: 0,
        whyCorrect: "El banco como acreedor preferente cobra saldo pendiente. Lo que sobra (si la suma asegurada supera el saldo) le corresponde al deudor asegurado.",
        whyWrong: ["", "No puede retenerlo; su obligación es pagar.", "El Fisco no es parte.", "El corredor no es parte del seguro."]
      },
      {
        q: "Un cliente con condiciones médicas preexistentes (hipertensión, diabetes) puede:",
        opts: [
          "Pagar menos",
          "Nunca tener seguro",
          "Omitir el seguro",
          "Acceder a desgravamen con prima mayor o, si riesgo alto, exclusión de esas causas en la cobertura (rechazo de siniestro por esa causa específica)"
        ],
        correct: 3,
        whyCorrect: "El suscriptor médico ajusta: puede aceptar con prima mayor (sobreprima actuarial) o con exclusiones específicas (ej. excluir muerte por evento cardiovascular). Lo clave es declarar todo, no ocultar (anula la póliza).",
        whyWrong: ["Nunca más barato por preexistencia.", "Sí puede acceder, aunque con condiciones.", "Genera incumplimiento.", ""]
      },
      {
        q: "La suma asegurada mínima del seguro de incendio típicamente es:",
        opts: [
          "UF 1",
          "El costo de la pintura",
          "El valor de tasación del inmueble (no el precio ni el crédito) o el saldo del crédito, según banco",
          "UF 10"
        ],
        correct: 2,
        whyCorrect: "El estándar es cubrir el valor de tasación (reconstrucción) para evitar infraseguro. Algunos bancos aceptan por el saldo del crédito; lo óptimo es por tasación.",
        whyWrong: ["Subaseguro grave.", "Irrelevante.", "", "Subaseguro grave."]
      }
    ],
    "7": [
      {
        q: "La pre-aprobación bancaria es:",
        opts: [
          "Una evaluación formal previa donde el banco compromete monto máximo, tasa referencial y condiciones, con carta vinculante y vigencia típica 60-90 días",
          "Un trámite obligatorio",
          "Una opinión verbal sin valor",
          "Solo marketing"
        ],
        correct: 0,
        whyCorrect: "La pre-aprobación es un compromiso condicional del banco tras analizar la carpeta. Tiene vigencia, monto y tasa referencial. Permite al cliente buscar propiedades con certeza financiera.",
        whyWrong: ["", "No es obligatorio; es facultativo pero recomendado.", "Es formal y documentada.", "Es herramienta financiera real."]
      },
      {
        q: "Un comprador con pre-aprobación en mano vs sin ella:",
        opts: [
          "Es peor",
          "Solo sirve para firmar",
          "No hay diferencia",
          "Tiene poder de negociación mucho mayor frente al vendedor; cierra 3x más rápido"
        ],
        correct: 3,
        whyCorrect: "El vendedor prefiere comprador pre-aprobado porque reduce riesgo de caída post-oferta. Tasa de cierre con pre-aprobación es ~3x la de quien 'está viendo'.",
        whyWrong: ["Al contrario, posiciona mejor.", "Sirve para negociar, no solo firmar.", "La diferencia es operativamente decisiva.", ""]
      },
      {
        q: "La carpeta mínima para pre-aprobación bancaria incluye (lista obligatoria):",
        opts: [
          "CI + comprobante de domicilio + liquidaciones 3 meses (o F22) + cartolas 6 meses + certificado Dicom + certificado AFP + certificado deudas CMF",
          "Nada",
          "Solo CI",
          "Solo F22"
        ],
        correct: 0,
        whyCorrect: "La carpeta estándar evalúa identidad, domicilio, renta, comportamiento financiero, historial y deudas. Falta documentación = scoring bajo y plazos extendidos.",
        whyWrong: ["", "Impide pre-aprobación.", "Insuficiente.", "Incompleto (aplica solo a independientes)."]
      },
      {
        q: "Si el cliente resiste dar carpeta diciendo 'primero quiero ver propiedades', el corredor debe:",
        opts: [
          "Forzarlo",
          "Explicar que sin pre-aprobación puede perder propiedades frente a compradores calificados; ayudar con checklist de carpeta y tareas pequeñas",
          "Aceptar y mostrar",
          "Desentenderse"
        ],
        correct: 1,
        whyCorrect: "La objeción es emocional. Se responde con marco: \"Podemos ver propiedades, pero sin pre-aprobación te frustrarás si te la ganan. La carpeta es 3 días de esfuerzo y te cambia la posición competitiva.\"",
        whyWrong: ["La presión no funciona aquí.", "", "Mala asignación de tiempo del corredor.", "Abdica del servicio profesional."]
      },
      {
        q: "La vigencia típica de una carta de pre-aprobación es:",
        opts: ["Ilimitada", "60 a 90 días hábiles; vence y exige re-evaluación", "5 años", "1 día"],
        correct: 1,
        whyCorrect: "La pre-aprobación se emite con vigencia explícita. Vencida, el banco re-evalúa. Por eso la cadena pre-aprobación → elección propiedad → oferta debe ocurrir dentro de 60 días.",
        whyWrong: ["Ninguna carta es ilimitada.", "", "Fuera de todo plazo operativo.", "Imposible evaluar en 1 día."]
      },
      {
        q: "Presentar al cliente en 3 bancos en paralelo (pre-aprobación múltiple) es:",
        opts: [
          "Ilegal",
          "Estrategia recomendada: eleva probabilidad aprobación a ~88% y habilita negociación de tasa entre las ofertas",
          "Sin efecto",
          "Desleal"
        ],
        correct: 1,
        whyCorrect: "Es práctica estándar profesional. La paralelización incrementa probabilidad, reduce tiempo total y habilita negociación de tasa entre bancos.",
        whyWrong: ["Es legítimo y legal.", "", "Tiene efecto medible.", "Al contrario: sirve a los intereses del cliente."]
      },
      {
        q: "El certificado de cotizaciones AFP sirve para:",
        opts: [
          "Solo para mujeres",
          "Validar regularidad de cotizaciones previsionales = regularidad del empleo (12 meses típicos)",
          "Ninguna validación",
          "Jubilación solamente"
        ],
        correct: 1,
        whyCorrect: "Las cotizaciones consistentes demuestran estabilidad laboral y regularidad de ingreso. Banco cruza liquidaciones con AFP para detectar inconsistencias.",
        whyWrong: ["Aplica a todo trabajador dependiente.", "", "Es insumo clave.", "Se usa con múltiples fines."]
      },
      {
        q: "Si el cliente tiene morosidad Dicom vigente (ej. $200.000 no pagados), la recomendación antes de postular es:",
        opts: [
          "Ignorar y postular igual",
          "Rechazar al cliente",
          "Pagar, exigir certificado de cierre del acreedor, esperar 30-45 días para que se refleje en Dicom, luego postular",
          "Usar aval"
        ],
        correct: 2,
        whyCorrect: "La morosidad vigente bloquea. Se paga, se pide certificado de cierre formal y se espera la actualización en bureau (Equifax/plataforma.cl). Solo entonces se postula.",
        whyWrong: ["Causa rechazo seguro.", "Puede trabajarse con el cliente.", "", "El aval no resuelve morosidad vigente."]
      },
      {
        q: "El banco emite pre-aprobación tras analizar la carpeta en:",
        opts: ["Años", "Meses", "5 a 15 días hábiles habituales (varía por banco y ticket)", "Horas"],
        correct: 2,
        whyCorrect: "Con carpeta completa, la pre-aprobación se emite en 5-15 días hábiles. Plazos fuera de rango indican algún problema en documentación o scoring.",
        whyWrong: ["Fuera de lo operativo.", "Excesivo; indicaría problema.", "", "Raramente en horas (excepto productos preferenciales)."]
      },
      {
        q: "Si el cliente cambia de empleo durante la vigencia de la pre-aprobación, debe:",
        opts: [
          "No avisar al banco",
          "Nada pasa",
          "Informar al banco y re-evaluar: el cambio afecta antigüedad (si pierde condición indefinida puede bajar monto o tasa)",
          "Ocultar"
        ],
        correct: 2,
        whyCorrect: "La pre-aprobación se basa en condiciones actuales. Cambio material (empleo, renta) obliga a re-evaluar. Ocultar es incumplimiento contractual y puede anular la pre-aprobación.",
        whyWrong: ["Es incumplimiento grave.", "Sí tiene impacto financiero.", "", "Constituye mala fe."]
      },
      {
        q: "La carpeta tributaria SII se descarga desde:",
        opts: ["Ninguna parte", "Banco", "Notaría", "sii.cl con ClaveTributaria del contribuyente — disponible online inmediata"],
        correct: 3,
        whyCorrect: "La carpeta tributaria es un documento electrónico del SII descargable con ClaveTributaria. El cliente lo genera él mismo en 5 minutos y contiene F22 + situación tributaria.",
        whyWrong: ["Está disponible online.", "El banco la recibe, no la emite.", "La notaría no emite documentos tributarios.", ""]
      },
      {
        q: "Para un postulante DS1 que necesita usar subsidio con crédito, la pre-aprobación debe:",
        opts: [
          "Omitir el subsidio",
          "No mezclar",
          "Esperar",
          "Incluir explícitamente el subsidio en la estructura: banco financia el 80-90% + subsidio + pie; requiere coordinación con MINVU"
        ],
        correct: 3,
        whyCorrect: "La pre-aprobación con subsidio considera el certificado de subsidio como parte del pie. Se estructura: crédito + subsidio + ahorro propio = 100%. Requiere coordinación.",
        whyWrong: ["Pierde un componente esencial.", "Es el punto: combinar para completar.", "Hay momentos coordinados.", ""]
      },
      {
        q: "El certificado RSH se obtiene en:",
        opts: ["Notaría", "Portal RSH (registrosocial.gob.cl) con ClaveÚnica del postulante, o en Municipalidad", "Banco", "MINVU solo"],
        correct: 1,
        whyCorrect: "El Registro Social de Hogares se consulta en registrosocial.gob.cl con ClaveÚnica. También se puede actualizar en el municipio. Es imprescindible para postular a subsidios.",
        whyWrong: ["La notaría no emite RSH.", "", "No es un producto bancario.", "MINVU usa RSH pero no lo emite; lo emite MIDESO."]
      },
      {
        q: "El momento óptimo para iniciar la carpeta del cliente es:",
        opts: [
          "Nunca",
          "Después de elegir propiedad",
          "En la primera o segunda reunión: quitas fricción, ganas tiempo y filtras compradores no reales",
          "Cuando se firma escritura"
        ],
        correct: 2,
        whyCorrect: "Anticipar la carpeta acelera todo el ciclo. En la reunión de discovery ya puede iniciarse: el cliente se siente acompañado y demostrará seriedad.",
        whyWrong: ["Abdica del servicio.", "Demasiado tarde; pierdes oportunidad.", "", "Todo ya debería estar firmado."]
      },
      {
        q: "La carta de pre-aprobación bancaria incluye habitualmente:",
        opts: ["Solo la tasa", "Solo el nombre", "Monto máximo del crédito, tasa referencial, CAE estimada, plazo, seguros y vigencia", "Nada escrito"],
        correct: 2,
        whyCorrect: "La carta vinculante (condicional) muestra todos los parámetros claves. Es instrumento de negociación con el vendedor y con otros bancos para mejorar tasa.",
        whyWrong: ["Incluye más parámetros.", "Incluye términos financieros.", "", "Es documento escrito con respaldo."]
      },
      {
        q: "Si un cliente sin Dicom pero con 'thin file' (sin historial) postula, el banco:",
        opts: [
          "Evalúa con precaución y puede exigir scoring adicional (aval o pie mayor) — conviene 'construir' historial 12 meses antes con tarjeta bien manejada",
          "Lo rechaza sin evaluar",
          "Aprueba inmediatamente",
          "Lo aprueba al 100% LTV"
        ],
        correct: 0,
        whyCorrect: "Sin historial, el banco no tiene base predictiva. Recomienda patrón: abrir tarjeta 12 meses antes, usar y pagar puntual. Construye historial positivo.",
        whyWrong: ["", "Puede evaluar con condiciones.", "No aprueba sin evaluar.", "LTV máximo es 80-90% con condiciones."]
      },
      {
        q: "El 'ejecutivo hipotecario' del banco es:",
        opts: [
          "Un intermediario comercial",
          "Asesor asignado para guiar la operación dentro del banco: prepara y defiende el caso ante comité de crédito",
          "Vendedor externo",
          "Inspector"
        ],
        correct: 1,
        whyCorrect: "El ejecutivo hipotecario del banco actúa como sponsor interno del caso. Prepara documentación, defiende condiciones y comunica decisiones. Relación de confianza con él acelera.",
        whyWrong: ["Es empleado bancario.", "", "No externo; interno.", "No inspecciona; asesora comercialmente."]
      },
      {
        q: "Tener relación con el ejecutivo hipotecario (red de corredor con bancos aliados) permite:",
        opts: [
          "Canales rápidos, tasa preferencial pactada por volumen, y soporte en casos complejos (ej. negociación con comité de crédito)",
          "Nada",
          "Omitir documentos",
          "Violar reglas"
        ],
        correct: 0,
        whyCorrect: "El corredor con red establecida tiene tiempos más cortos, tasas ligeramente preferentes por el volumen de derivaciones y apoyo en casos complejos. Construir relaciones es activo profesional.",
        whyWrong: ["", "Tiene valor operativo medible.", "La documentación es igual.", "Contrario a la ética profesional."]
      },
      {
        q: "La 'tasación bancaria' se realiza en qué momento:",
        opts: [
          "Después de pre-aprobación y elegida la propiedad: el banco contrata tasador registrado CMF para valorar el inmueble específico",
          "Nunca",
          "A gusto del cliente",
          "Antes de pre-aprobación"
        ],
        correct: 0,
        whyCorrect: "La pre-aprobación se da sobre la capacidad del cliente. Una vez elegido el inmueble, se tasa específicamente. La tasación define monto máximo financiable (80-90% del valor tasación).",
        whyWrong: ["", "Es paso obligatorio.", "Lo contrata y paga el banco.", "La pre-aprobación es sobre el cliente, no sobre inmueble."]
      },
      {
        q: "Si el valor tasación del inmueble es menor al precio pactado, el corredor debe:",
        opts: [
          "Ignorar",
          "Re-negociar precio con el vendedor o elevar pie del cliente para cubrir la diferencia; el banco solo financia sobre tasación",
          "Mentir al banco",
          "Inventar"
        ],
        correct: 1,
        whyCorrect: "El banco financia sobre valor tasación, no sobre precio. Si precio > tasación, la diferencia la asume el cliente como pie extra. Mejor renegociar precio o aceptar más pie.",
        whyWrong: ["Genera caída de operación.", "", "Constituye fraude.", "Deviene en rechazo y pérdida de negocio."]
      }
    ]
  },
  finalQuestions: [
    {
      q: "La UF se reajusta:",
      opts: ["Diariamente entre el día 10 y el día 9 del mes siguiente según IPC mes anterior", "Cada 6 meses", "Nunca", "Anualmente"],
      correct: 0,
      whyCorrect: "Es interpolación geométrica diaria del IPC del mes anterior, publicada por el Banco Central.",
      whyWrong: ["", "No es semestral.", "Se reajusta con IPC.", "No es anual."]
    },
    {
      q: "El mutuo endosable se diferencia por:",
      opts: ["Tasa variable fija", "Puede cederse a compañías de seguros", "No puede cederse", "Solo BancoEstado lo emite"],
      correct: 1,
      whyCorrect: "Está diseñado para ser cedido (endosado) a compañías de seguros por las mutuarias.",
      whyWrong: ["Puede ser fija, variable o mixta.", "", "Su esencia es el endoso.", "Lo emiten mutuarias y algunos bancos."]
    },
    {
      q: "La CAE incluye:",
      opts: ["Nada", "Solo seguros", "Tasa + seguros + comisiones + impuesto timbres + gastos operacionales", "Solo tasa nominal"],
      correct: 2,
      whyCorrect: "Refleja costo total anual del crédito incluyendo todos los cargos.",
      whyWrong: ["Existe por ley.", "Es tasa total.", "", "Es más amplia."]
    },
    {
      q: "La licitación CMF de seguros permite al cliente:",
      opts: ["Omitir seguros", "Pagar menos tasa", "Ninguna ventaja", "Elegir aseguradora ganadora y ahorrar 20-40% en primas"],
      correct: 3,
      whyCorrect: "Desde 2012, los bancos deben licitar los seguros y el cliente tiene derecho a elegir la ganadora.",
      whyWrong: ["Son obligatorios.", "Afecta prima, no tasa.", "Hay ventaja material.", ""]
    },
    {
      q: "El leasing habitacional se rige por:",
      opts: ["Ley 19.281 de 1993", "Ley 18.010", "Ley 19.496", "Ley 20.040"],
      correct: 0,
      whyCorrect: "Establece el marco del arrendamiento con promesa de compraventa.",
      whyWrong: ["", "Regula crédito general.", "Regula protección al consumidor.", "Inexistente."]
    },
    {
      q: "La CAAPC es:",
      opts: ["AFP", "Fondo mutuo", "Cuenta corriente", "Cuenta de ahorro regulada para acumular ≥10-20% del precio en leasing"],
      correct: 3,
      whyCorrect: "Es parte obligatoria del leasing habitacional bajo Ley 19.281.",
      whyWrong: ["No es previsional.", "No es fondo.", "No es cuenta corriente.", ""]
    },
    {
      q: "En leasing, la propiedad durante el contrato está a nombre de:",
      opts: ["Sociedad de leasing hasta ejercer opción de compra", "MINVU", "Un tercero", "Cliente"],
      correct: 0,
      whyCorrect: "Cliente es arrendatario-promitente-comprador.",
      whyWrong: ["", "MINVU no adquiere.", "No hay tercero.", "Dominio llega al final."]
    },
    {
      q: "El 'pie' típico en primera vivienda sin subsidio es:",
      opts: ["50%", "20% del valor tasación (LTV 80%)", "0%", "5%"],
      correct: 1,
      whyCorrect: "Norma prudencial bancaria limita LTV a ~80%.",
      whyWrong: ["Conservador; no norma.", "", "Imposible por LTV.", "Demasiado bajo."]
    },
    {
      q: "La carga financiera máxima recomendada es:",
      opts: ["25% de la renta líquida", "10%", "50%", "70%"],
      correct: 0,
      whyCorrect: "Norma prudencial y práctica bancaria chilena.",
      whyWrong: ["", "Muy conservador.", "Insostenible.", "Inaplicable."]
    },
    {
      q: "La Ley 20.575 estableció que los datos Dicom caducan en:",
      opts: ["20 años", "1 año", "5 años desde pago", "Nunca"],
      correct: 2,
      whyCorrect: "Modificó la Ley 19.628 acotando vigencia de datos negativos.",
      whyWrong: ["Irrealmente largo.", "Es mayor.", "", "Sí caducan."]
    },
    {
      q: "Presentar al cliente en 3 bancos eleva probabilidad de aprobación de:",
      opts: ["99% a 100%", "Sin efecto", "~55% a ~88%", "10% a 30%"],
      correct: 2,
      whyCorrect: "Multiplicación de canales reduce riesgo de rechazo único.",
      whyWrong: ["Fuera de rangos reales.", "Hay efecto medible.", "", "Parámetros incorrectos."]
    },
    {
      q: "Tanner es:",
      opts: ["Mutuaria y sociedad de leasing habitacional líder", "AFP", "Cooperativa", "Banco"],
      correct: 0,
      whyCorrect: "Opera mutuo endosable y leasing bajo Ley 19.281.",
      whyWrong: ["", "No es AFP.", "No es cooperativa.", "No es banco."]
    },
    {
      q: "BancoEstado lidera primera vivienda porque:",
      opts: ["Más sucursales", "Convenios MINVU y scoring flexible para funcionarios públicos", "Tasa más baja siempre", "Más antigüedad"],
      correct: 1,
      whyCorrect: "Rol estatal asignado para operar subsidios habitacionales.",
      whyWrong: ["No es el diferencial clave.", "", "Tasas varían por perfil.", "No es el diferencial."]
    },
    {
      q: "Coopeuch es:",
      opts: ["Cooperativa de ahorro y crédito regulada por CMF y DAES", "Mutuaria", "Caja de compensación", "Banco"],
      correct: 0,
      whyCorrect: "Cooperativa con scoring que valoriza antigüedad y aportes.",
      whyWrong: ["", "Estructura societaria distinta.", "Caja es otra figura.", "Banco no."]
    },
    {
      q: "El seguro de desgravamen cubre:",
      opts: ["Saldo del crédito si fallece el deudor", "No es obligatorio", "Solo a la propiedad", "Solo cesantía"],
      correct: 0,
      whyCorrect: "Seguro de vida del deudor; obligatorio.",
      whyWrong: ["", "Es obligatorio.", "Cubre al deudor.", "Otro seguro."]
    },
    {
      q: "El seguro de sismo en Chile es:",
      opts: ["Opcional", "Obligatorio en hipoteca por sismicidad del país", "Solo en norte", "No existe"],
      correct: 1,
      whyCorrect: "Exigido por el banco como estándar.",
      whyWrong: ["Es exigido.", "", "Aplica en todo Chile.", "Sí existe."]
    },
    {
      q: "Un cliente con F22 sólido y ingresos independientes prefiere:",
      opts: ["Solo banco", "Banca + mutuaria (ej. Tanner, Metlife) en paralelo", "Subsidio DS49", "Ninguno"],
      correct: 1,
      whyCorrect: "Mutuarias evalúan caso a caso y son más flexibles con perfiles atípicos.",
      whyWrong: ["Limita opciones.", "", "DS49 es otro perfil.", "Hay opciones viables."]
    },
    {
      q: "La pre-aprobación tiene vigencia típica de:",
      opts: ["1 día", "5 años", "60 a 90 días", "Ilimitada"],
      correct: 2,
      whyCorrect: "Vencida requiere re-evaluación.",
      whyWrong: ["Inviable.", "Fuera de plazo.", "", "Ninguna es ilimitada."]
    },
    {
      q: "Un cliente con Dicom cerrado pero capacidad actual va a:",
      opts: ["Ningún financiamiento", "Al contado", "Tanner Leasing / Caja Los Andes Leasing como primera opción", "Solo banco tradicional"],
      correct: 2,
      whyCorrect: "Leasing evalúa capacidad actual con más flexibilidad.",
      whyWrong: ["Hay opciones.", "Imposible por tamaño del ticket.", "", "Bancos suelen rechazar."]
    },
    {
      q: "La tasación bancaria la realiza:",
      opts: ["El vendedor", "Un tasador independiente registrado CMF contratado por el banco", "El corredor", "El comprador"],
      correct: 1,
      whyCorrect: "Tasación oficial es por tasador externo CMF.",
      whyWrong: ["No puede autotasarse.", "", "Estima precio, no tasa oficial.", "No contrata la tasación."]
    },
    {
      q: "Un mutuo hipotecario se inscribe en:",
      opts: ["Registro de Hipotecas y Gravámenes del CBR", "Registro Civil", "CMF", "Notaría"],
      correct: 0,
      whyCorrect: "La hipoteca se perfecciona por inscripción en CBR.",
      whyWrong: ["", "No registra inmuebles.", "No registra hipotecas.", "Otorga escritura."]
    },
    {
      q: "La TPM la fija:",
      opts: ["Hacienda", "Consejo del Banco Central", "CMF", "ABIF"],
      correct: 1,
      whyCorrect: "BCCh tiene autonomía constitucional para política monetaria.",
      whyWrong: ["Hacienda gestiona política fiscal.", "", "Regula mercado.", "Es gremio bancario."]
    },
    {
      q: "La tasa fija chilena domina el mercado hipotecario nuevo con aproximadamente:",
      opts: ["~78%", "50%", "5%", "20%"],
      correct: 0,
      whyCorrect: "Comprador chileno prefiere certidumbre.",
      whyWrong: ["", "Menos que la mitad.", "Casi inexistente.", "Muy bajo."]
    },
    {
      q: "Al término del leasing, la opción de compra se ejerce por:",
      opts: ["No hay opción", "Precio original", "Valor residual simbólico (~1 UF)", "Precio de mercado"],
      correct: 2,
      whyCorrect: "Rentas ya amortizaron el capital.",
      whyWrong: ["Es esencial.", "Ya se pagó.", "", "No es mercado."]
    },
    {
      q: "Sin pie ni subsidio, el cliente es:",
      opts: ["Con aval", "Prácticamente inelegible (LTV ≤ 90% con subsidio; ≤ 80% sin)", "Elegible con tasa alta", "Elegible"],
      correct: 1,
      whyCorrect: "Norma prudencial fija LTV máximo.",
      whyWrong: ["Aval no completa.", "", "No existe 100% LTV.", "No aplica."]
    },
    {
      q: "La 'plataforma.cl' es:",
      opts: ["Boletín Comercial con registros de morosidad consultados por bancos", "Inexistente", "Solo del deudor", "Solo SII"],
      correct: 0,
      whyCorrect: "Complementa Dicom/Equifax en evaluación crediticia.",
      whyWrong: ["", "Existe y se usa.", "Consolida terceros.", "No es SII."]
    },
    {
      q: "Un crédito hipotecario en Chile incluye en el dividendo:",
      opts: ["Solo capital", "Capital + interés + seguros obligatorios (+ contribuciones si las paga banco)", "Solo interés", "Solo seguros"],
      correct: 1,
      whyCorrect: "CMF obliga a desglosar todos los componentes.",
      whyWrong: ["Falta interés y seguros.", "", "Omite seguros.", "Falta capital e interés."]
    },
    {
      q: "Si el cliente omite el seguro de incendio:",
      opts: ["No se entera", "Recibe premio", "Nada pasa", "Incumplimiento contractual grave; banco puede acelerar crédito"],
      correct: 3,
      whyCorrect: "Contrato hipotecario exige seguros vigentes.",
      whyWrong: ["Es auditable.", "Absurdo.", "Genera incumplimiento.", ""]
    },
    {
      q: "El impuesto de Timbres y Estampillas sobre el crédito hipotecario es:",
      opts: ["50%", "No aplica", "0,066% mensual hasta tope 0,8% anual (DL 3.475)", "10%"],
      correct: 2,
      whyCorrect: "Primera vivienda con subsidio tiene exención parcial o total hasta cierto tope UF.",
      whyWrong: ["Absurdo.", "Sí aplica.", "", "Muy alto."]
    },
    {
      q: "Un migrante con residencia definitiva reciente (<2 años) tiene mejor acceso a:",
      opts: ["Subsidio DS49", "Leasing habitacional por scoring más flexible con historial corto", "Ningún financiamiento", "Solo banco"],
      correct: 1,
      whyCorrect: "Leasing evalúa capacidad actual y estabilidad operativa.",
      whyWrong: ["DS49 es otro perfil.", "", "Hay opciones.", "Banca tradicional penaliza por historial corto."]
    },
    {
      q: "El 'thin file' (historial crediticio escaso) afecta porque:",
      opts: ["Sin historial, banco no puede predecir comportamiento y baja scoring por precaución", "Siempre positivo", "No afecta", "Solo en consumo"],
      correct: 0,
      whyCorrect: "Construir historial con tarjeta 12 meses antes eleva el scoring.",
      whyWrong: ["", "Penaliza.", "Sí afecta.", "Afecta a todo crédito."]
    },
    {
      q: "El certificado de deudas CMF muestra:",
      opts: ["Solo hipotecario", "Todas las deudas vigentes con el sistema financiero regulado", "Ingresos", "Solo consumo"],
      correct: 1,
      whyCorrect: "Insumo clave del scoring bancario.",
      whyWrong: ["Incluye también consumo.", "", "No muestra ingresos.", "Incluye todas."]
    },
    {
      q: "Las mutuarias se distinguen de los bancos en:",
      opts: [
        "No reciben depósitos; fondean con mutuos endosables cedidos a compañías de seguros",
        "Solo emiten tarjetas",
        "Reciben depósitos del público",
        "No operan"
      ],
      correct: 0,
      whyCorrect: "Estructura de negocio diferente regulada por DFL 251 y CMF.",
      whyWrong: ["", "Su núcleo es mutuo hipotecario.", "No captan depósitos.", "Sí operan activamente."]
    },
    {
      q: "La tasa de leasing habitacional vs crédito bancario suele ser:",
      opts: ["Menor", "3-4 pp menor", "Igual", "1-1,8 pp mayor, por mayor riesgo asumido"],
      correct: 3,
      whyCorrect: "Costo de flexibilidad crediticia.",
      whyWrong: ["Al contrario.", "Subestima.", "Hay diferencia sistemática.", ""]
    },
    {
      q: "El co-deudor solidario en crédito hipotecario:",
      opts: ["Solo observa", "Responde junto al deudor principal; su renta suma y refuerza scoring", "Solo familiares", "No existe"],
      correct: 1,
      whyCorrect: "Figura clásica de garantía que amplía monto viable.",
      whyWrong: ["Responde solidariamente.", "", "Puede ser pareja, socio, etc.", "Es figura jurídica vigente."]
    },
    {
      q: "Un cliente con pareja que firman como deudores solidarios:",
      opts: ["Suma rentas para determinar carga financiera; eleva monto viable", "Solo si casados", "Resta rentas", "Ninguna"],
      correct: 0,
      whyCorrect: "Práctica estándar de evaluación bancaria conjunta.",
      whyWrong: ["", "Pueden ser convivientes.", "Las rentas se suman.", "Hay efecto claro."]
    },
    {
      q: "La carga financiera sostenible considera además del dividendo:",
      opts: [
        "Todas las cuotas mensuales del cliente (dividendo + tarjetas + créditos consumo + pensiones alimenticias)",
        "Solo el dividendo",
        "Solo el arriendo",
        "Nada más"
      ],
      correct: 0,
      whyCorrect: "La regla del 25% se aplica al total de cargas mensuales, no solo al dividendo hipotecario.",
      whyWrong: ["", "Subestima compromisos.", "Arriendo cesará al comprar.", "Otros compromisos cuentan."]
    },
    {
      q: "El ejecutivo hipotecario del banco es:",
      opts: ["Vendedor informal", "Empleado del banco que sponsorea el caso ante comité de crédito", "Externo", "Inspector"],
      correct: 1,
      whyCorrect: "Relación con él acelera la operación.",
      whyWrong: ["Formal.", "", "Es interno.", "No inspecciona."]
    },
    {
      q: "La tasa mixta (5 años fija + variable) conviene a:",
      opts: ["Horizonte 25+ años", "Cliente que proyecta vender o refinanciar en 5 años", "DS49", "Cualquier perfil"],
      correct: 1,
      whyCorrect: "Producto de nicho con horizonte medio.",
      whyWrong: ["Para horizonte largo la fija pura es más conservadora.", "", "Incompatible con perfil.", "No universal."]
    },
    {
      q: "El seguro de cesantía hipotecario es:",
      opts: ["Gratuito", "Obligatorio", "No existe", "Opcional; paga dividendos si hay cesantía involuntaria"],
      correct: 3,
      whyCorrect: "Cobertura opcional relevante para empleados sin colchón de emergencia.",
      whyWrong: ["Tiene prima.", "Es opcional.", "Existe.", ""]
    },
    {
      q: "La 'hoja resumen estandarizada' del crédito hipotecario (por Ley 19.496):",
      opts: ["Es opcional", "Es marketing", "No existe", "Documento obligatorio con CAE, costos totales y desglose, entregado previo a firma"],
      correct: 3,
      whyCorrect: "SERNAC puede sancionar su omisión.",
      whyWrong: ["Es obligatorio.", "Es formal.", "Es obligatorio legal.", ""]
    },
    {
      q: "El 'spread sobre TPM' en crédito hipotecario típico es:",
      opts: ["Negativo", "0,1 pp", "10 pp", "1,5 a 2,5 pp en UF"],
      correct: 3,
      whyCorrect: "Refleja costo fondeo largo plazo, riesgo y margen.",
      whyWrong: ["Imposible económicamente.", "Inviable.", "Usura.", ""]
    },
    {
      q: "Si el valor tasación < precio pactado, el cliente debe:",
      opts: ["Renegociar precio o aumentar pie; banco solo financia sobre tasación", "Mentir", "Abandonar operación", "Ignorar"],
      correct: 0,
      whyCorrect: "El banco financia sobre valor tasación, no precio.",
      whyWrong: ["", "Fraude.", "Hay solución.", "Genera caída."]
    },
    {
      q: "El prepago de crédito hipotecario tiene comisión máxima de:",
      opts: ["10%", "Ninguna", "1,5 meses interés (no reajustable) o 3 meses interés (UF), según Ley 18.010", "50%"],
      correct: 2,
      whyCorrect: "Ley 18.010 limita la comisión máxima.",
      whyWrong: ["Fuera de ley.", "Sí hay comisión aunque limitada.", "", "Imposible por ley."]
    },
    {
      q: "La preparación pre-postulación ideal antes de solicitar crédito es:",
      opts: [
        "Nada",
        "Solicitar rápido",
        "Solicitar más créditos",
        "60-90 días antes: pagar Dicom, obtener certificados cierre, ordenar F22 y cartolas, reducir uso tarjeta a <30% cupo"
      ],
      correct: 3,
      whyCorrect: "Un corredor profesional prepara el scoring antes de presentar.",
      whyWrong: ["Peor el scoring.", "Sin preparación baja probabilidad.", "Sobreendeudamiento.", ""]
    },
    {
      q: "Si el cliente cambia de empleo durante vigencia de pre-aprobación:",
      opts: ["Informar al banco y re-evaluar, especialmente si pierde contrato indefinido", "No importa", "Ocultar", "No informar"],
      correct: 0,
      whyCorrect: "Ocultar es incumplimiento grave que puede anular la pre-aprobación.",
      whyWrong: ["", "Sí afecta.", "Mala fe.", "Incumplimiento."]
    },
    {
      q: "En caso de siniestro total, la aseguradora paga:",
      opts: ["Al banco (acreedor preferente) hasta saldo; excedente al deudor", "Al deudor", "Al corredor", "Al Fisco"],
      correct: 0,
      whyCorrect: "Cláusula estándar de acreedor preferente.",
      whyWrong: ["", "No primero.", "No es parte.", "No es parte."]
    },
    {
      q: "La carpeta tributaria SII se descarga en:",
      opts: ["Banco", "sii.cl con ClaveTributaria", "Notaría", "MINVU"],
      correct: 1,
      whyCorrect: "Documento electrónico inmediato.",
      whyWrong: ["El banco la recibe.", "", "No la emite.", "No la emite."]
    },
    {
      q: "Combinando DS1 + leasing en tramos 2/3, el beneficio es:",
      opts: ["Usar subsidio para financiar CAAPC, bajando pie efectivo del cliente", "Vivienda gratuita", "Ninguno", "Tasa 0"],
      correct: 0,
      whyCorrect: "Tanner y Caja Los Andes tienen convenios formales con MINVU para esta combinación.",
      whyWrong: ["", "Requiere pago.", "Existe beneficio.", "No hay tasa 0."]
    },
    {
      q: "La suma asegurada mínima del seguro de incendio es:",
      opts: ["Valor de tasación o saldo del crédito", "UF 10", "UF 1", "Costo pintura"],
      correct: 0,
      whyCorrect: "Evita infraseguro.",
      whyWrong: ["", "Infraseguro grave.", "Infraseguro grave.", "Irrelevante."]
    }
  ],
  goldRules: [
    {
      n: 1,
      title: "Siempre compara CAE, no tasa nominal",
      text: "La tasa nominal es marketing; la CAE es el costo real. Diferencias de 0,4 pp suman UF 150-250 en 25 años. Siempre pide la hoja resumen estandarizada obligatoria (Ley 19.496)."
    },
    {
      n: 2,
      title: "Presenta al cliente en 3 bancos, no en uno",
      text: "Probabilidad de aprobación sube de 55% a 88%. Tener 3 ofertas te da poder de negociación de tasa con el banco preferido."
    },
    {
      n: 3,
      title: "Pre-aprobación antes de mostrar propiedades",
      text: "Sin pre-aprobación, el cliente pierde propiedades frente a compradores calificados. No es opcional; es el filtro de seriedad."
    },
    {
      n: 4,
      title: "Leasing como plan A o plan B, no último recurso",
      text: "Para perfiles con ingresos informales, Dicom cerrado o migrante reciente, el leasing es ruta eficiente — no plan de rescate tardío."
    },
    {
      n: 5,
      title: "Nunca ocultes el CAE ni las condiciones reales",
      text: "La honestidad construye el referido. Mentir sobre tasa, plazo o seguros te mata profesionalmente al primer descubrimiento."
    },
    {
      n: 6,
      title: "Siempre licita los seguros",
      text: "El cliente puede elegir aseguradora licitada CMF en lugar del paquete del banco. Ahorro típico: UF 75-150 en el ciclo."
    },
    {
      n: 7,
      title: "Domina la carpeta tributaria y Dicom antes del banco",
      text: "Revisa equifax.cl + plataforma.cl con el cliente. Paga morosidades cerradas pendientes. Construye scoring antes de postular."
    },
    {
      n: 8,
      title: "La carga financiera límite es 25% de la renta líquida",
      text: "Forzar al 30-35% es receta de incumplimiento. Un cliente estresado financieramente no refiere."
    },
    {
      n: 9,
      title: "Explica UF honestamente",
      text: "Dividendo se pacta en UF y varía en pesos con inflación. Muestra proyección a 6 y 12 meses con IPC esperado. No digas 'es fijo' en pesos."
    },
    {
      n: 10,
      title: "Usa la Calculadora TuMatch en cada reunión",
      text: "Tres escenarios simulados en 3 minutos transforman el sueño abstracto en números concretos. El cliente pasa de 'no sé si puedo' a 'este es mi plan'."
    }
  ]
};
