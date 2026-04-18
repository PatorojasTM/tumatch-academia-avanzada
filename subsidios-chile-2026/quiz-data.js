/* Taller 04 · Subsidios Habitacionales Chile 2026
   Banco v1 — ampliable. Fuentes: MINVU, MIDESO, bcn.cl, chileatiende.gob.cl */
window.TALLER_CONFIG = {
  slug: "subsidios-chile-2026",
  moduleNames: {
    "1": "Arquitectura del sistema MINVU",
    "2": "DS49 · Fondo Solidario",
    "3": "DS1 Tramo 1",
    "4": "DS1 Tramo 2 y 3",
    "5": "DS19 · Integración Social",
    "6": "DS116 Subsidio al Crédito y otros",
    "7": "Postulación, documentos y objeciones"
  },
  certTitle: "Subsidios Habitacionales Chile 2026",
  certSubtitle: "Taller Avanzado 04 · Academia TuMatch",
  quizBank: {
    "1": [
      {
        q: "El organismo que diseña la política habitacional en Chile es:",
        opts: ["SERNAC", "MINVU (Ministerio de Vivienda y Urbanismo)", "ABIF", "CMF"],
        correct: 1,
        whyCorrect: "MINVU es el ministerio responsable de diseñar los decretos supremos que regulan subsidios y política habitacional.",
        whyWrong: ["Protección al consumidor.", "", "Gremio bancario.", "Regulador financiero."]
      },
      {
        q: "SERVIU es:",
        opts: ["Órgano regional del MINVU que opera postulaciones y paga subsidios", "ONG", "Banco", "Ministerio"],
        correct: 0,
        whyCorrect: "Servicio de Vivienda y Urbanización — uno por región — ejecuta operativamente los programas del MINVU.",
        whyWrong: ["", "Es estatal.", "No es banco.", "No es ministerio, es servicio regional."]
      },
      {
        q: "El RSH es administrado por:",
        opts: ["MINVU", "MIDESO (Ministerio de Desarrollo Social)", "SERVIU", "Municipio"],
        correct: 1,
        whyCorrect: "El Registro Social de Hogares es instrumento MIDESO que califica vulnerabilidad socioeconómica.",
        whyWrong: ["No lo emite.", "", "Lo usa pero no lo administra.", "Puede actualizarlo, no lo administra."]
      },
      {
        q: "La plataforma oficial para consulta del RSH es:",
        opts: ["registrosocial.gob.cl", "minvu.cl", "sii.cl", "sernac.cl"],
        correct: 0,
        whyCorrect: "Plataforma MIDESO con ClaveÚnica del postulante.",
        whyWrong: ["", "Es MINVU.", "Tributario.", "Protección consumidor."]
      },
      {
        q: "Los llamados a DS49 se abren típicamente:",
        opts: ["Mensualmente", "Anualmente (ventana habitual abril-junio)", "Diariamente", "Cada 5 años"],
        correct: 1,
        whyCorrect: "Ventana anual. Siempre verificar calendario vigente en minvu.cl.",
        whyWrong: ["No es mensual.", "", "Absurdo.", "Fuera de periodicidad."]
      },
      {
        q: "ChileAtiende es:",
        opts: ["Canal integrado de atención ciudadana y consultas de trámites", "Banco", "SII", "SERNAC"],
        correct: 0,
        whyCorrect: "Portal de servicio del Estado para orientación sobre trámites y beneficios.",
        whyWrong: ["", "No es banco.", "Tributario.", "Consumidor."]
      },
      {
        q: "El corredor que orienta a un cliente sobre subsidios debe:",
        opts: ["Solo memoria", "Consultar fuentes oficiales (MINVU, SERVIU, ChileAtiende) y citar montos del llamado vigente", "Inventar", "Ignorar"],
        correct: 1,
        whyCorrect: "Siempre fuentes oficiales; los montos cambian llamado a llamado.",
        whyWrong: ["Desactualiza.", "", "Grave error.", "Abdica."]
      },
      {
        q: "Un cliente con RSH tramo 60% puede postular a:",
        opts: ["DS1 Tramo 1 o Tramo 2 (según condiciones específicas)", "Ningún subsidio", "Solo DS49", "DS19 exclusivamente"],
        correct: 0,
        whyCorrect: "DS1 T1 acepta hasta 60%. T2 hasta 70%. T3 hasta 90%.",
        whyWrong: ["", "Hay rutas disponibles.", "Está sobre el límite de DS49.", "No excluyente."]
      },
      {
        q: "Los DS (Decretos Supremos) habitacionales se consultan legalmente en:",
        opts: ["Blog", "Wikipedia", "bcn.cl (Biblioteca del Congreso Nacional de Chile)", "Redes sociales"],
        correct: 2,
        whyCorrect: "Fuente oficial de legislación chilena.",
        whyWrong: ["No oficial.", "No oficial.", "", "No oficial."]
      },
      {
        q: "Un subsidio MINVU vigente no combinable con otro es:",
        opts: ["DS49 no combina con crédito hipotecario (es subsidio directo sin crédito)", "Ninguno", "Todos combinan", "Todos exclusivos"],
        correct: 0,
        whyCorrect: "DS49 es pago directo al SERVIU por vivienda social.",
        whyWrong: ["", "Hay subsidios.", "No todos.", "No todos exclusivos."]
      },
      {
        q: "La vigencia típica del certificado de subsidio DS1 para comprar vivienda es:",
        opts: ["Ilimitada", "21 meses desde la emisión (con posibilidad de prórroga justificada)", "1 semana", "5 días"],
        correct: 1,
        whyCorrect: "Plazo estándar para utilizar el subsidio.",
        whyWrong: ["Ninguno es ilimitado.", "", "Fuera.", "Imposible."]
      },
      {
        q: "La prohibición de venta típica de vivienda con subsidio DS1 es:",
        opts: ["Ninguna", "5 años desde la inscripción a nombre del subsidiado", "10 años", "Indefinida"],
        correct: 1,
        whyCorrect: "Evita especulación con vivienda subsidiada.",
        whyWrong: ["Hay prohibición.", "", "Mayor que la real.", "Hay plazo."]
      },
      {
        q: "Si el cliente quiere vender antes de los 5 años de subsidio DS1, debe:",
        opts: ["Libremente", "No puede nunca", "Multar", "Solicitar autorización SERVIU y devolver subsidio actualizado"],
        correct: 3,
        whyCorrect: "Procedimiento de desafectación del subsidio.",
        whyWrong: ["No libremente.", "Puede con trámite.", "No es multa.", ""]
      },
      {
        q: "MINVU atiende al corredor profesional:",
        opts: ["Solo notarios", "Nunca", "Solo abogados", "Vía SERVIU regional o ChileAtiende; también informa a inmobiliarias con proyectos DS19"],
        correct: 3,
        whyCorrect: "Canales institucionales de consulta.",
        whyWrong: ["No limitado.", "Es accesible.", "No limitado.", ""]
      },
      {
        q: "El principal valor del corredor para un cliente con potencial subsidio es:",
        opts: [
          "Ninguno",
          "Orientarlo y acompañarlo en postulación + buscar propiedad compatible + derivación bancaria coordinada",
          "Solo venta",
          "Facturar doble"
        ],
        correct: 1,
        whyCorrect: "El servicio integral multiplica el valor percibido.",
        whyWrong: ["Es muy alto.", "", "Es venta asesorada.", "Absurdo."]
      },
      {
        q: "Los bancos adheridos al Subsidio al Crédito Hipotecario DS116 incluyen:",
        opts: ["Solo privados", "Ninguna cooperativa", "Ninguno", "BancoEstado (principal) y convenios con otros bancos según llamado"],
        correct: 3,
        whyCorrect: "BancoEstado lidera históricamente por su rol estatal; la lista varía por llamado.",
        whyWrong: ["También convenios varios.", "Depende llamado.", "Hay bancos.", ""]
      },
      {
        q: "La carpeta de postulación típica a DS1 incluye:",
        opts: ["Solo F22", "Nada", "Solo CI", "CI + RSH + ahorro mínimo + declaración no propietario + certificado CBR + liquidaciones"],
        correct: 3,
        whyCorrect: "Lista mínima de postulación sector medio.",
        whyWrong: ["Incompleto.", "Sin postulación.", "Insuficiente.", ""]
      },
      {
        q: "Si el cliente es rechazado por MINVU en un llamado, puede:",
        opts: ["Ir a otra provincia", "Nada", "Denunciar", "Apelar y volver a postular en el siguiente llamado"],
        correct: 3,
        whyCorrect: "Sin límite de intentos si mantiene requisitos.",
        whyWrong: ["No resuelve.", "Hay apelación.", "No procede.", ""]
      },
      {
        q: "El MINVU publica los resultados de postulación en:",
        opts: ["Redes sociales", "Solo papel", "minvu.cl y SERVIU regional en nómina oficial", "WhatsApp"],
        correct: 2,
        whyCorrect: "Canales oficiales.",
        whyWrong: ["No oficial.", "Digital disponible.", "", "No oficial."]
      },
      {
        q: "El sistema de subsidios chileno es:",
        opts: ["Internacional", "Centralizado en Santiago", "Privado", "Territorializado vía SERVIU regional bajo lineamiento MINVU"],
        correct: 3,
        whyCorrect: "Operación descentralizada con política centralizada.",
        whyWrong: ["Nacional.", "Es descentralizado operativo.", "Estatal.", ""]
      }
    ],
    "2": [
      {
        q: "El DS49 financia hasta:",
        opts: ["~UF 950 (referencial urbano RM 2026, varía por región)", "Ilimitado", "UF 5.000", "UF 500"],
        correct: 0,
        whyCorrect: "Monto típico urbano; rural/extremo mayor. Siempre verifica llamado vigente.",
        whyWrong: ["", "Siempre hay tope.", "Fuera de DS49.", "Subestima."]
      },
      {
        q: "El RSH máximo para postular a DS49 es:",
        opts: ["Sin límite", "40% más vulnerable (tramos 0-40)", "100%", "90%"],
        correct: 1,
        whyCorrect: "Focaliza en sectores vulnerables.",
        whyWrong: ["Sin focalización.", "", "Sin focalización.", "Fuera."]
      },
      {
        q: "El ahorro mínimo DS49 es:",
        opts: ["UF 100", "10 UF en cuenta vivienda", "UF 500", "Cero"],
        correct: 1,
        whyCorrect: "Aporte simbólico de compromiso del postulante.",
        whyWrong: ["Fuera.", "", "Excesivo.", "Existe ahorro."]
      },
      {
        q: "DS49 combina con crédito hipotecario:",
        opts: ["No combina; es pago directo al SERVIU sin crédito bancario", "Siempre", "Solo un banco", "Depende"],
        correct: 0,
        whyCorrect: "Característica distintiva del DS49 — subsidio total.",
        whyWrong: ["", "No.", "No.", "No."]
      },
      {
        q: "El perfil típico DS49 es:",
        opts: ["Inversionista", "Jubilado con patrimonio", "Ejecutivo senior", "Familia vulnerable RSH ≤40%, ahorro irregular, sin acceso a banca"],
        correct: 3,
        whyCorrect: "Focalización de política social.",
        whyWrong: ["Fuera.", "Fuera.", "Fuera.", ""]
      },
      {
        q: "La vivienda DS49 se entrega:",
        opts: ["Libremente", "Inscrita a nombre del subsidiado con prohibición de venta 5 años", "En arriendo", "Nunca"],
        correct: 1,
        whyCorrect: "Garantiza uso habitacional del subsidio.",
        whyWrong: ["Hay restricciones.", "", "Es propiedad.", "Sí se entrega."]
      },
      {
        q: "El corredor en DS49 típicamente:",
        opts: [
          "Gana mucha comisión",
          "Es el único intermediario",
          "No aplica",
          "No genera comisión directa; acompaña al cliente y deriva a otras oportunidades"
        ],
        correct: 3,
        whyCorrect: "Valor profesional en asesoría, no en comisión directa.",
        whyWrong: ["Irreal.", "No exclusivo.", "Puede acompañar.", ""]
      },
      {
        q: "DS49 se postula:",
        opts: ["En llamados anuales publicados por MINVU", "Solo en enero", "Diariamente", "Nunca"],
        correct: 0,
        whyCorrect: "Ventana anual habitual.",
        whyWrong: ["", "Varía.", "No.", "Sí hay postulaciones."]
      },
      {
        q: "Un postulante con vivienda ya inscrita a su nombre NO puede:",
        opts: ["Solo migrantes", "Postular", "Postular a DS49 (requisito: no tener vivienda propia)", "Solo chilenos"],
        correct: 2,
        whyCorrect: "Característica de focalización.",
        whyWrong: ["Aplica a todos.", "Es restricción.", "", "Requisito igual."]
      },
      {
        q: "La construcción en sitio propio con DS49:",
        opts: [
          "Es una modalidad: familia con terreno propio accede a subsidio para construir su casa",
          "No hay variaciones",
          "No existe",
          "Solo en región"
        ],
        correct: 0,
        whyCorrect: "Modalidad específica del DS49.",
        whyWrong: ["", "Hay modalidades.", "Existe.", "Es nacional."]
      },
      {
        q: "Un cliente DS49 rechazado puede:",
        opts: ["Abandonar", "Nunca más postular", "Ir a juicio", "Apelar y volver a postular siguiente llamado"],
        correct: 3,
        whyCorrect: "Sin límite de postulaciones mientras mantenga requisitos.",
        whyWrong: ["Hay oportunidad.", "Puede reintentar.", "No procede.", ""]
      },
      {
        q: "La residencia definitiva es requerida en DS49 para:",
        opts: ["Extranjeros (chilenos no la requieren por ser nacionales)", "No se requiere", "Todos", "Ningún caso"],
        correct: 0,
        whyCorrect: "Aplicación estándar para acceso a subsidios.",
        whyWrong: ["", "Se requiere.", "Chilenos no.", "Sí se requiere."]
      },
      {
        q: "DS49 rural ofrece típicamente:",
        opts: ["Sin subsidio", "Montos superiores al urbano por costos logísticos y aislamiento", "Menos subsidio", "Mismo monto"],
        correct: 1,
        whyCorrect: "Reconoce mayor costo de construcción y transporte en zonas rurales.",
        whyWrong: ["Es inclusivo.", "", "Al contrario.", "Diferenciación."]
      },
      {
        q: "Un migrante con residencia definitiva puede postular a DS49:",
        opts: ["Solo si tiene pareja chilena", "No", "Solo después de 10 años", "Sí, si cumple RSH y demás requisitos"],
        correct: 3,
        whyCorrect: "Política inclusiva.",
        whyWrong: ["No se requiere.", "Puede.", "Requisito legal mínimo.", ""]
      },
      {
        q: "Los resultados DS49 se publican en:",
        opts: ["Nómina oficial en minvu.cl y SERVIU regional", "WhatsApp", "Diario", "Correo privado"],
        correct: 0,
        whyCorrect: "Canales oficiales transparentes.",
        whyWrong: ["", "No oficial.", "No oficial.", "No público."]
      },
      {
        q: "El DS49 atiende principalmente:",
        opts: ["Solo adultos mayores", "Solo migrantes", "Familias vulnerables sin historial bancario ni capacidad de crédito", "Clase media alta"],
        correct: 2,
        whyCorrect: "Política pública de acceso.",
        whyWrong: ["No exclusivo.", "No exclusivo.", "", "Fuera del foco."]
      },
      {
        q: "La vivienda DS49 típica está en:",
        opts: ["Cualquier barrio libremente", "En el extranjero", "Conjuntos habitacionales sociales o sitio propio con proyecto aprobado", "Zonas VIP"],
        correct: 2,
        whyCorrect: "Proyectos definidos por SERVIU.",
        whyWrong: ["No es libre.", "Es Chile.", "", "Fuera del perfil."]
      },
      {
        q: "La familia DS49 acumuló típicamente:",
        opts: ["UF 1.000", "UF 10-15 en cuenta vivienda durante varios años", "UF 500", "Cero"],
        correct: 1,
        whyCorrect: "Esfuerzo progresivo de ahorro.",
        whyWrong: ["Fuera.", "", "Fuera.", "Hay ahorro mínimo."]
      },
      {
        q: "El DS49 se opera operativamente a través de:",
        opts: ["Privado", "Empresas", "Embajadas", "SERVIU regional que adjudica viviendas y paga construcción"],
        correct: 3,
        whyCorrect: "Operación estatal descentralizada.",
        whyWrong: ["Es estatal.", "Estado.", "No aplica.", ""]
      },
      {
        q: "Al corredor que acompaña cliente DS49 le conviene:",
        opts: [
          "Mantener la relación (referirá cuando esté en posición de mercado) y ofrecer asesoría gratuita de orientación",
          "Rechazarlo",
          "Ignorarlo",
          "Cobrar altísimo"
        ],
        correct: 0,
        whyCorrect: "Cultivo relacional de largo plazo.",
        whyWrong: ["", "Daña marca.", "Abdica.", "No hay comisión alta."]
      }
    ],
    "3": [
      {
        q: "DS1 Tramo 1 tiene RSH máximo:",
        opts: ["40%", "60% más vulnerable", "90%", "100%"],
        correct: 1,
        whyCorrect: "Sector medio-vulnerable.",
        whyWrong: ["DS49.", "", "T3.", "Sin focalización."]
      },
      {
        q: "Ahorro mínimo DS1 T1:",
        opts: ["30 UF", "10 UF", "80 UF", "200 UF"],
        correct: 0,
        whyCorrect: "Característica T1.",
        whyWrong: ["", "DS49.", "T3.", "Fuera."]
      },
      {
        q: "Precio vivienda máximo DS1 T1:",
        opts: ["UF 1.600 referencial", "UF 5.000", "UF 950", "UF 2.600"],
        correct: 0,
        whyCorrect: "Sector medio-vulnerable.",
        whyWrong: ["", "Fuera.", "DS49.", "T3."]
      },
      {
        q: "DS1 T1 combina con:",
        opts: ["Solo arriendo", "Crédito hipotecario obligatorio + ahorro + subsidio", "Solo leasing", "Nada"],
        correct: 1,
        whyCorrect: "Estructura de financiamiento estándar.",
        whyWrong: ["No es arriendo.", "", "Puede combinar, no exclusivo.", "Requiere crédito."]
      },
      {
        q: "Un cliente DS1 T1 con renta líquida $1M:",
        opts: ["Puede aspirar a vivienda UF 1.400-1.500 con subsidio + crédito ~UF 700", "Nada", "Accede a T3", "No califica"],
        correct: 0,
        whyCorrect: "Ejemplo típico del tramo.",
        whyWrong: ["", "Hay ruta.", "No corresponde.", "Califica."]
      },
      {
        q: "El perfil típico DS1 T1 es:",
        opts: ["Inversionista", "Jubilado", "Empleado formal joven o pareja con primer hijo, RSH medio-vulnerable", "Ejecutivo"],
        correct: 2,
        whyCorrect: "Focalización.",
        whyWrong: ["Fuera.", "Fuera.", "", "Fuera."]
      },
      {
        q: "La exención impuesto timbres DS1 T1 aplica:",
        opts: ["Parcialmente sobre crédito complementario hasta cierto tope UF", "Nunca", "Total siempre", "Solo con aval"],
        correct: 0,
        whyCorrect: "Beneficio tributario complementario.",
        whyWrong: ["", "Aplica.", "No total.", "No depende aval."]
      },
      {
        q: "La prohibición de venta DS1 T1 es:",
        opts: ["10 años", "Indefinida", "Ninguna", "5 años desde inscripción"],
        correct: 3,
        whyCorrect: "Evita especulación.",
        whyWrong: ["Mayor al real.", "Finita.", "Hay.", ""]
      },
      {
        q: "DS1 T1 es compatible con leasing habitacional:",
        opts: ["No", "Solo DS49", "Ningún caso", "Sí (Tanner, Caja Los Andes)"],
        correct: 3,
        whyCorrect: "Convenios con sociedades de leasing.",
        whyWrong: ["Compatible.", "DS49 no combina con leasing.", "Es compatible.", ""]
      },
      {
        q: "El monto típico del subsidio DS1 T1 es:",
        opts: ["~UF 500-700 según condiciones", "UF 5.000", "Cero", "UF 50"],
        correct: 0,
        whyCorrect: "Rango típico; siempre verificar llamado.",
        whyWrong: ["", "Fuera.", "Sí hay subsidio.", "Subestima."]
      },
      {
        q: "Los llamados DS1 se abren:",
        opts: ["Anuales", "Mensuales", "Semestrales típicamente (marzo y agosto en llamados recientes)", "Nunca"],
        correct: 2,
        whyCorrect: "Ventana habitual.",
        whyWrong: ["DS49 es anual.", "Varía.", "", "Sí hay llamados."]
      },
      {
        q: "Un cliente DS1 T1 con banco pre-aprobado debe mostrar al MINVU:",
        opts: ["Solo Dicom", "Carta pre-aprobación como validación de capacidad crediticia complementaria", "Solo CI", "Nada"],
        correct: 1,
        whyCorrect: "Validación de ruta financiera.",
        whyWrong: ["Incompleto.", "", "Incompleto.", "Debe."]
      },
      {
        q: "Un rechazo DS1 T1 puede apelarse dentro de:",
        opts: ["Plazo establecido en bases del llamado (típicamente 30-45 días)", "1 día", "Nunca", "5 años"],
        correct: 0,
        whyCorrect: "Proceso administrativo reglado.",
        whyWrong: ["", "Fuera.", "Hay apelación.", "Fuera."]
      },
      {
        q: "La vivienda DS1 T1 típicamente es:",
        opts: ["Solo nueva", "Solo casa", "Nueva o usada, dentro del precio máximo del tramo", "Solo departamento"],
        correct: 2,
        whyCorrect: "Flexibilidad típica.",
        whyWrong: ["Flexible.", "Ambas tipologías.", "", "Ambas tipologías."]
      },
      {
        q: "Un cliente DS1 T1 independiente debe demostrar:",
        opts: ["Nada", "Ingresos F22 últimos 2 años + carpeta tributaria para acceder al crédito complementario", "Sin requerimientos", "Solo boleta"],
        correct: 1,
        whyCorrect: "Requisito del banco complementario.",
        whyWrong: ["Requerimiento.", "", "Hay requerimientos.", "Insuficiente."]
      },
      {
        q: "DS1 T1 puede combinarse con DS116:",
        opts: ["No", "Nunca", "Sí; DS116 baja tasa del crédito complementario", "Solo T3"],
        correct: 2,
        whyCorrect: "Complemento compatible.",
        whyWrong: ["Compatible.", "Compatible.", "", "Compatible en todos tramos con condiciones."]
      },
      {
        q: "Una familia DS1 T1 que se muda fuera de la vivienda antes de 5 años:",
        opts: ["Pierde todo", "Sin problema", "Debe autorizar SERVIU y potencialmente devolver subsidio", "Automático"],
        correct: 2,
        whyCorrect: "Control del uso habitacional del subsidio.",
        whyWrong: ["Hay proceso.", "Hay obligaciones.", "", "Hay trámite."]
      },
      {
        q: "El corredor en DS1 T1 puede cobrar comisión:",
        opts: ["Solo vendedor", "Solo comprador", "Sí, al cliente y al vendedor como en operación compraventa estándar", "No"],
        correct: 2,
        whyCorrect: "Operación inmobiliaria estándar con subsidio.",
        whyWrong: ["Ambas partes.", "Ambas partes.", "", "Sí puede."]
      },
      {
        q: "DS1 T1 requiere RSH:",
        opts: ["Nada", "No", "Sí, actualizado · se descarga desde registrosocial.gob.cl con ClaveÚnica", "Solo municipio"],
        correct: 2,
        whyCorrect: "Documento fundamental de focalización.",
        whyWrong: ["Crítico.", "Requiere.", "", "También online."]
      },
      {
        q: "Un cliente DS1 T1 cuyo RSH mejora (sube a tramo no elegible) antes de postular:",
        opts: ["Pierde elegibilidad; debe esperar a actualización favorable", "Sigue elegible", "Sube a T3", "Indiferente"],
        correct: 0,
        whyCorrect: "Elegibilidad se verifica al momento de postular.",
        whyWrong: ["", "Cambio afecta.", "No automático.", "Afecta."]
      }
    ],
    "4": [
      {
        q: "Precio máximo DS1 Tramo 2 es:",
        opts: ["Sin límite", "UF 2.200", "UF 950", "UF 3.500"],
        correct: 1,
        whyCorrect: "Sector medio estándar.",
        whyWrong: ["Siempre tope.", "", "DS49.", "Fuera."]
      },
      {
        q: "Precio máximo DS1 Tramo 3 es:",
        opts: ["UF 3.500", "UF 2.600", "UF 10.000", "UF 1.600"],
        correct: 1,
        whyCorrect: "Tramo superior del sector medio.",
        whyWrong: ["Fuera.", "", "Fuera.", "T1."]
      },
      {
        q: "RSH máximo DS1 T2:",
        opts: ["100%", "90%", "70% más vulnerable", "40%"],
        correct: 2,
        whyCorrect: "Sector medio.",
        whyWrong: ["Sin focalización.", "T3.", "", "DS49."]
      },
      {
        q: "RSH máximo DS1 T3:",
        opts: ["100%", "90% más vulnerable", "Sin límite", "60%"],
        correct: 1,
        whyCorrect: "Tramo más alto de elegibilidad.",
        whyWrong: ["Sin focalización.", "", "Sin focalización.", "T1."]
      },
      {
        q: "Ahorro mínimo DS1 T2:",
        opts: ["200 UF", "50 UF", "10 UF", "Cero"],
        correct: 1,
        whyCorrect: "Tramo intermedio.",
        whyWrong: ["Fuera.", "", "DS49.", "Hay ahorro mínimo."]
      },
      {
        q: "Ahorro mínimo DS1 T3:",
        opts: ["Cero", "30 UF", "500 UF", "80 UF"],
        correct: 3,
        whyCorrect: "Tramo más alto exige más ahorro.",
        whyWrong: ["Hay ahorro mínimo.", "T1.", "Fuera.", ""]
      },
      {
        q: "DS1 T2/T3 es compatible con leasing habitacional:",
        opts: ["Sí, especialmente con Tanner y Caja Los Andes que tienen convenios formales con MINVU", "Solo DS49", "Ningún caso", "No"],
        correct: 0,
        whyCorrect: "Convenio formal para combinar subsidio con arriendo-promesa.",
        whyWrong: ["", "DS49 no combina.", "Es compatible.", "Compatible."]
      },
      {
        q: "Un cliente DS1 T3 puede optar a propiedad de:",
        opts: ["UF 500 máximo", "Sin tope", "UF 10.000", "Hasta UF 2.600"],
        correct: 3,
        whyCorrect: "Tope del tramo.",
        whyWrong: ["Fuera.", "Hay tope.", "Fuera.", ""]
      },
      {
        q: "La vivienda con DS1 T2/T3 tiene prohibición de venta:",
        opts: ["Ninguna", "Indefinida", "5 años desde inscripción", "10 años"],
        correct: 2,
        whyCorrect: "Igual que otros tramos DS1.",
        whyWrong: ["Hay.", "Finita.", "", "Mayor al real."]
      },
      {
        q: "El perfil típico DS1 T3 es:",
        opts: ["Inversionista", "Joven profesional o pareja consolidando con empleo formal y renta líquida conjunta UF 100+", "Jubilado", "Vulnerable"],
        correct: 1,
        whyCorrect: "Sector medio con capacidad crediticia.",
        whyWrong: ["Fuera del perfil primera vivienda.", "", "Fuera.", "Fuera."]
      },
      {
        q: "Un cliente DS1 T3 con renta $2,5M combinada puede aspirar a:",
        opts: ["Hasta UF 2.600 con subsidio + crédito", "UF 10.000", "UF 500", "Nada"],
        correct: 0,
        whyCorrect: "Capacidad típica del tramo.",
        whyWrong: ["", "Fuera del tope.", "Subestima.", "Sí accede."]
      },
      {
        q: "La postulación DS1 T2/T3 requiere:",
        opts: ["RSH + ahorro + declaración no propietario + certificado CBR + pre-aprobación bancaria", "Solo RSH", "Solo CI", "Solo F22"],
        correct: 0,
        whyCorrect: "Carpeta completa sector medio.",
        whyWrong: ["", "Insuficiente.", "Insuficiente.", "Insuficiente."]
      },
      {
        q: "DS1 T2/T3 combina con DS116:",
        opts: ["Solo T1", "No", "Nunca", "Sí, si el crédito complementario es con banco adherido (típicamente BancoEstado)"],
        correct: 3,
        whyCorrect: "Complemento compatible para bajar tasa.",
        whyWrong: ["Compatible en condiciones.", "Compatible.", "Compatible.", ""]
      },
      {
        q: "El monto del subsidio DS1 T3 es:",
        opts: ["UF 5.000", "~UF 200-350 (menor que T1 por menor vulnerabilidad)", "Cero", "UF 1.000"],
        correct: 1,
        whyCorrect: "Inversamente proporcional a vulnerabilidad.",
        whyWrong: ["Fuera.", "", "Hay subsidio.", "Fuera."]
      },
      {
        q: "Una pareja DS1 T3 con 2 rentas combinadas puede postular como:",
        opts: ["2 postulantes", "Ninguno", "1 postulación conjunta con cónyuge/conviviente civil", "Solo uno"],
        correct: 2,
        whyCorrect: "Postulación conjunta habitual.",
        whyWrong: ["Es conjunta.", "Pueden postular.", "", "Pueden ambos."]
      },
      {
        q: "DS1 T2 vivienda nueva se diferencia de usada en:",
        opts: [
          "Montos de subsidio pueden variar; vivienda nueva a veces con mayor aporte MINVU al proyecto",
          "Solo en color",
          "Usada prohibida",
          "No hay diferencia"
        ],
        correct: 0,
        whyCorrect: "Estructura varía según llamado.",
        whyWrong: ["", "Absurdo.", "Ambas elegibles.", "Hay diferencia."]
      },
      {
        q: "El cliente DS1 T2 en zona distinta a la RM puede aspirar a:",
        opts: ["Montos similares o superiores según políticas regionales", "Menos", "Nada", "Solo rurales"],
        correct: 0,
        whyCorrect: "Regiones pueden tener montos mayores por equidad territorial.",
        whyWrong: ["", "Depende zona.", "Accede.", "Urbano también."]
      },
      {
        q: "Un cliente DS1 T3 que pierde empleo post-postulación pre-aprobada:",
        opts: ["No afecta", "Automático", "Mantiene", "Puede perder aprobación bancaria; subsidio es válido si cumple requisitos MINVU"],
        correct: 3,
        whyCorrect: "Subsidio y crédito son instrumentos distintos.",
        whyWrong: ["Sí afecta ruta.", "No.", "Banco reevalúa.", ""]
      },
      {
        q: "La carga financiera máxima al combinar DS1 con crédito sigue siendo:",
        opts: ["Sin límite", "50%", "0", "25% de renta líquida (regla general)"],
        correct: 3,
        whyCorrect: "Norma bancaria prudencial aplica igual.",
        whyWrong: ["Hay límite.", "Fuera.", "No sería viable.", ""]
      },
      {
        q: "El rol del corredor en DS1 T2/T3 es:",
        opts: ["Central: orienta postulación + perfila cliente + encuentra propiedad + coordina bancos + cierra", "Ninguno", "Solo firma", "Marginal"],
        correct: 0,
        whyCorrect: "Asesoría integral del primera vivienda.",
        whyWrong: ["", "Es central.", "Más amplio.", "Central."]
      }
    ],
    "5": [
      {
        q: "DS19 regula:",
        opts: ["Programa de Integración Social y Territorial (proyectos mixtos)", "Arriendo", "Subsidio directo", "Crédito puro"],
        correct: 0,
        whyCorrect: "Creado en 2016 para mezclar subsidio y mercado libre en proyectos.",
        whyWrong: ["", "No es arriendo puro.", "No es subsidio directo a familia.", "No es crédito."]
      },
      {
        q: "En DS19, el postulante:",
        opts: ["Nada", "Compra sin subsidio", "Postula a un proyecto específico aprobado DS19 por MINVU", "Elige libremente"],
        correct: 2,
        whyCorrect: "Postulación por proyecto, no genérica.",
        whyWrong: ["Hay postulación.", "Con subsidio.", "", "Restringido."]
      },
      {
        q: "La mezcla típica en un proyecto DS19 es:",
        opts: ["100% libre", "~50% subsidiado + ~50% mercado libre", "Sin mezcla", "100% subsidiado"],
        correct: 1,
        whyCorrect: "Regla general de integración social.",
        whyWrong: ["No es 100%.", "", "Hay mezcla.", "No es 100%."]
      },
      {
        q: "La inmobiliaria en DS19:",
        opts: ["No recibe nada", "Recibe aporte MINVU al proyecto como incentivo al cumplir criterios sociales", "No participa", "Financia sola"],
        correct: 1,
        whyCorrect: "Incentivo para generar proyectos mixtos.",
        whyWrong: ["Hay incentivo.", "", "Participa central.", "MINVU aporta."]
      },
      {
        q: "DS19 se postula:",
        opts: ["Solo en enero", "Cuando la inmobiliaria abre ventas del proyecto con reserva de cupos subsidiados", "Todo el año", "Nunca"],
        correct: 1,
        whyCorrect: "Por proyecto específico.",
        whyWrong: ["Varía.", "", "Por proyecto.", "Sí hay."]
      },
      {
        q: "Un comprador DS19 con subsidio:",
        opts: ["Accede a unidades reservadas a precio regulado por MINVU", "Accede a VIP", "Paga más", "Nada"],
        correct: 0,
        whyCorrect: "Beneficio del programa.",
        whyWrong: ["", "Fuera del programa.", "Al contrario.", "Hay beneficio."]
      },
      {
        q: "El comprador sin subsidio en un proyecto DS19:",
        opts: ["Puede comprar las unidades de mercado libre a precio normal", "Gratis", "Solo con subsidio", "No puede"],
        correct: 0,
        whyCorrect: "Acceso abierto a unidades libres.",
        whyWrong: ["", "Es de mercado.", "Sin restricción.", "Puede."]
      },
      {
        q: "DS19 tiene tramos:",
        opts: ["Solo DS1", "No hay tramos", "Único", "Distintos tramos según proyecto (algunos llamados 'CEIS')"],
        correct: 3,
        whyCorrect: "Distintas modalidades según convocatoria.",
        whyWrong: ["Es propio.", "Hay modalidades.", "Hay tramos.", ""]
      },
      {
        q: "Un corredor en proyecto DS19 puede trabajar:",
        opts: ["Solo subsidiados", "Ambos lados: subsidiados (perfila y postula) y mercado libre (venta estándar)", "Solo libre", "Ninguno"],
        correct: 1,
        whyCorrect: "Doble oportunidad comercial.",
        whyWrong: ["Doble.", "", "Doble.", "Es oportunidad."]
      },
      {
        q: "Un proyecto DS19 típicamente se ubica en:",
        opts: ["Rural", "Zonas de alta demanda y buen transporte (parte del objetivo de integración)", "Sin criterio", "Zonas extremas"],
        correct: 1,
        whyCorrect: "Integración social y territorial.",
        whyWrong: ["No es foco.", "", "Hay criterio.", "Al contrario."]
      },
      {
        q: "El beneficiario DS19 subsidiado necesita:",
        opts: ["Sin calificación", "Calificar con RSH + ahorro + tramo específico del proyecto", "Solo CI", "Nada"],
        correct: 1,
        whyCorrect: "Calificación análoga a DS1.",
        whyWrong: ["Hay calificación.", "", "Incompleto.", "Se califica."]
      },
      {
        q: "La prohibición de venta en vivienda DS19 subsidiada es:",
        opts: ["10 años", "Ninguna", "Indefinida", "5 años similar a DS1"],
        correct: 3,
        whyCorrect: "Misma lógica antifraude.",
        whyWrong: ["Mayor al real.", "Hay.", "Finita.", ""]
      },
      {
        q: "El ahorro mínimo DS19 subsidiado es:",
        opts: ["500 UF", "Similar al DS1 del tramo correspondiente (30-80 UF)", "Cero", "100 UF"],
        correct: 1,
        whyCorrect: "Análogo al DS1 según tramo.",
        whyWrong: ["Fuera.", "", "Hay.", "Fuera."]
      },
      {
        q: "Un proyecto DS19 está identificado en:",
        opts: ["Registro civil", "Solo Google", "Portales MINVU y cartera del SERVIU regional", "Nunca"],
        correct: 2,
        whyCorrect: "Canales oficiales.",
        whyWrong: ["No aplica.", "No oficial.", "", "Está."]
      },
      {
        q: "La inmobiliaria con proyecto DS19 se beneficia por:",
        opts: ["Aporte MINVU + venta asegurada del cupo subsidiado + incentivo urbano", "Evita impuestos", "Nada", "Solo prestigio"],
        correct: 0,
        whyCorrect: "Incentivo al proyecto social.",
        whyWrong: ["", "No es evasión.", "Hay beneficio.", "Es económico."]
      },
      {
        q: "Un corredor que conoce proyectos DS19 activos:",
        opts: ["No le sirve", "Tiene ventaja competitiva: perfila clientes DS1 y los vincula a cupos disponibles", "Solo al vendedor", "Sin diferencia"],
        correct: 1,
        whyCorrect: "Diferenciación profesional.",
        whyWrong: ["Es ventaja.", "", "Trabaja ambos.", "Hay diferencia."]
      },
      {
        q: "El comprador DS19 firma:",
        opts: ["Solo WhatsApp", "Promesa con la inmobiliaria + escritura compraventa + subsidio aplica como parte del pie", "No firma", "Nada"],
        correct: 1,
        whyCorrect: "Proceso compraventa con subsidio integrado.",
        whyWrong: ["No informal.", "", "Firma.", "Firma."]
      },
      {
        q: "DS19 ofrece al sector medio vulnerable:",
        opts: ["Nada", "Solo rural", "Solo RM", "Acceso a vivienda en zonas de mayor valor que sin el programa no alcanzaría"],
        correct: 3,
        whyCorrect: "Objetivo de integración.",
        whyWrong: ["Hay beneficio.", "No es rural.", "Es nacional.", ""]
      },
      {
        q: "El proyecto DS19 está aprobado por:",
        opts: ["Ningún órgano", "SERNAC", "MINVU previo cumplimiento de bases del llamado", "Municipio"],
        correct: 2,
        whyCorrect: "Ministerio responsable.",
        whyWrong: ["Hay aprobación.", "No procede.", "", "No."]
      },
      {
        q: "La relevancia del DS19 para el corredor de primera vivienda es:",
        opts: ["Sin impacto", "Ninguna", "Baja", "Alta: expande opciones del cliente subsidiado hacia zonas de mayor plusvalía"],
        correct: 3,
        whyCorrect: "Ventaja real para el cliente.",
        whyWrong: ["Hay impacto.", "Hay impacto.", "Es alta.", ""]
      }
    ],
    "6": [
      {
        q: "DS116 baja la tasa del crédito hipotecario en:",
        opts: ["5 pp", "0 pp", "0,61% a 1,16% aproximado según condiciones del llamado", "10 pp"],
        correct: 2,
        whyCorrect: "Rango típico según bases.",
        whyWrong: ["Fuera.", "No es cero.", "", "Excesivo."]
      },
      {
        q: "DS116 se aplica durante:",
        opts: ["1 día", "Los primeros años del crédito según bases (varía)", "Toda la vida del crédito", "Nunca"],
        correct: 1,
        whyCorrect: "Beneficio temporal.",
        whyWrong: ["Imposible.", "", "Finito.", "Sí aplica."]
      },
      {
        q: "DS116 se contrata con:",
        opts: ["No se contrata", "Bancos adheridos al programa (BancoEstado principal)", "Mutuaria sin convenio", "Cualquier banco"],
        correct: 1,
        whyCorrect: "Convenio específico MINVU-banco.",
        whyWrong: ["Se contrata.", "", "Sin convenio.", "Requiere adhesión."]
      },
      {
        q: "Arriendo con Promesa de Compra (subsidio):",
        opts: ["Solo arriendo puro", "Sin subsidio", "No existe", "Apoya financiación de leasing habitacional con subsidio"],
        correct: 3,
        whyCorrect: "Alternativa para perfiles con historial complejo.",
        whyWrong: ["Es arriendo-promesa.", "Con subsidio.", "Existe.", ""]
      },
      {
        q: "Subsidio de Reparación financia:",
        opts: ["Ampliación, mejoramiento o reparación de vivienda existente", "Solo arriendo", "Nueva vivienda", "Nada"],
        correct: 0,
        whyCorrect: "Apoyo a propietarios.",
        whyWrong: ["", "Es reparación.", "No es compra.", "Financia."]
      },
      {
        q: "Subsidio de Arriendo DS52:",
        opts: ["No existe", "Todos los años", "Compra", "Apoyo al pago de arriendo por 5-8 años para familias vulnerables"],
        correct: 3,
        whyCorrect: "Instrumento paralelo a DS1 para familias que aún no pueden comprar.",
        whyWrong: ["Existe.", "Tiene plazo.", "No es compra.", ""]
      },
      {
        q: "Clase Media programa MINVU atiende:",
        opts: ["Solo vulnerables", "Nadie", "Solo ricos", "Familias del tramo medio que no califican a DS1 estricto"],
        correct: 3,
        whyCorrect: "Ampliación de focalización hacia sector medio.",
        whyWrong: ["Es clase media.", "Atiende.", "Fuera.", ""]
      },
      {
        q: "Un cliente con crédito hipotecario vigente puede aplicar DS116:",
        opts: ["Siempre", "Solo al momento de solicitar el crédito, no retroactivamente", "Retroactivo", "Sin relación"],
        correct: 1,
        whyCorrect: "Complemento contemporáneo al crédito.",
        whyWrong: ["No.", "", "No retroactivo.", "Hay relación."]
      },
      {
        q: "El DS116 se solicita:",
        opts: ["Al pagar", "Junto con la postulación DS1 y evaluación bancaria del crédito complementario", "Separado", "Después"],
        correct: 1,
        whyCorrect: "Proceso integrado.",
        whyWrong: ["Al inicio.", "", "No separado.", "En el inicio."]
      },
      {
        q: "Un corredor debe orientar sobre DS116 porque:",
        opts: ["Marketing", "Ahorra al cliente UF 50-120 durante primeros años — argumento de cierre para DS1 T1/T2", "Irrelevante", "No hay efecto"],
        correct: 1,
        whyCorrect: "Impacto económico medible.",
        whyWrong: ["No es marketing.", "", "Es clave.", "Hay efecto."]
      },
      {
        q: "Arriendo con Promesa de Compra combina con:",
        opts: ["Solo DS49", "Ningún DS", "DS1 T2/T3 con sociedades de leasing adheridas", "Sin combinar"],
        correct: 2,
        whyCorrect: "Convenios Tanner / Caja Los Andes.",
        whyWrong: ["DS49 no combina.", "Combinable.", "", "Es combinable."]
      },
      {
        q: "Subsidio de Reparación requiere:",
        opts: ["Ser propietario de vivienda que cumple condiciones del llamado", "Arrendatario", "Nuevo propietario", "Nada"],
        correct: 0,
        whyCorrect: "Apoya al propietario existente.",
        whyWrong: ["", "Es propietario.", "Existente.", "Requisitos."]
      },
      {
        q: "DS52 Subsidio de Arriendo aplica para:",
        opts: ["Pagar arriendo durante periodo definido; no es para compra", "Inversión", "Compra", "Comercial"],
        correct: 0,
        whyCorrect: "Apoyo habitacional temporal.",
        whyWrong: ["", "No inversión.", "No es compra.", "No comercial."]
      },
      {
        q: "El corredor con cliente que necesita DS116 debe:",
        opts: ["Ocultar", "Derivar al banco adherido (BancoEstado principal) y documentar en CRM la ruta", "Nada", "Inventar"],
        correct: 1,
        whyCorrect: "Servicio profesional.",
        whyWrong: ["Fraude.", "", "Activo.", "Ilegal."]
      },
      {
        q: "La combinación DS1 + DS116 + leasing en T2/T3:",
        opts: ["Solo banco", "No existe", "Sin efecto", "Es posible con sociedades de leasing con convenios; reduce pie efectivo del cliente"],
        correct: 3,
        whyCorrect: "Combinaciones con convenio MINVU.",
        whyWrong: ["Hay rutas.", "Existe.", "Tiene efecto.", ""]
      },
      {
        q: "Subsidio de Reparación se paga:",
        opts: ["Directo sin control", "A través de entidades técnicas EETEC que ejecutan la obra", "Nunca", "Al contado al propietario"],
        correct: 1,
        whyCorrect: "Mecanismo con control técnico.",
        whyWrong: ["Control exigido.", "", "Se paga.", "No directo."]
      },
      {
        q: "Un cliente con propiedad recién comprada puede aplicar Subsidio de Reparación en:",
        opts: ["Ningún caso", "Nunca", "Solo DS49", "Vivienda propia con cierta antigüedad y cumpliendo requisitos del llamado"],
        correct: 3,
        whyCorrect: "Depende condiciones.",
        whyWrong: ["Hay casos.", "Puede.", "No limitado.", ""]
      },
      {
        q: "Los cupos DS116 por llamado son:",
        opts: ["Sin regla", "Ilimitados", "Finitos, asignados según orden de llegada o sorteo", "Solo 1"],
        correct: 2,
        whyCorrect: "Presupuesto acotado por año.",
        whyWrong: ["Hay regla.", "Finitos.", "", "Mucho más."]
      },
      {
        q: "Un corredor que no conoce DS116 pierde:",
        opts: ["Solo tiempo", "Nada", "Referido", "Oportunidad de cierre con clientes DS1 al no ofrecer rebaja de tasa complementaria"],
        correct: 3,
        whyCorrect: "Argumento de cierre profesional.",
        whyWrong: ["Más que tiempo.", "Pierde valor.", "Pierde.", ""]
      },
      {
        q: "Clase Media programa se diferencia de DS1 T3 en:",
        opts: ["Tramos de ingreso y RSH que pueden ser más flexibles según llamado específico", "Igual", "No es oficial", "Solo en nombre"],
        correct: 0,
        whyCorrect: "Diferenciación por política MINVU.",
        whyWrong: ["", "Hay diferencias.", "Es oficial.", "Más que nombre."]
      }
    ],
    "7": [
      {
        q: "El paso 1 de postulación DS1 es:",
        opts: ["Firmar escritura", "Nada", "Comprar casa", "Actualizar RSH en registrosocial.gob.cl y verificar tramo de elegibilidad"],
        correct: 3,
        whyCorrect: "Fundamento de elegibilidad.",
        whyWrong: ["Al final.", "Hay trámite.", "Prematuro.", ""]
      },
      {
        q: "La cuenta de ahorro vivienda para subsidios se abre en:",
        opts: ["Caja", "Cualquier banco", "BancoEstado principalmente o cooperativas adheridas", "En efectivo"],
        correct: 2,
        whyCorrect: "Producto específico para subsidios habitacionales.",
        whyWrong: ["Privado no adherido.", "No cualquier.", "", "No sirve."]
      },
      {
        q: "La declaración jurada de no tener vivienda propia se firma:",
        opts: ["En casa", "Verbalmente", "Ante notario o en formato oficial SERVIU", "Nunca"],
        correct: 2,
        whyCorrect: "Documento oficial formal.",
        whyWrong: ["No oficial.", "No sirve.", "", "Requerido."]
      },
      {
        q: "El certificado de dominio vigente CBR (negativo propiedad) se pide:",
        opts: ["Nunca", "Solo en Santiago", "WhatsApp", "En el CBR de cada región donde postulante pudo tener propiedad"],
        correct: 3,
        whyCorrect: "Validación multiregional.",
        whyWrong: ["Requerido.", "Multiregional.", "No oficial.", ""]
      },
      {
        q: "Si el cliente tiene Dicom vigente al postular:",
        opts: ["Banco complementario puede rechazar crédito; conviene limpiar antes", "Sin problema", "Gratuito", "Acelera"],
        correct: 0,
        whyCorrect: "Afecta el crédito complementario.",
        whyWrong: ["", "Sí afecta.", "Cuesta.", "Al contrario."]
      },
      {
        q: "Un rechazo DS1 por error administrativo se resuelve con:",
        opts: ["Juzgado", "Rendición", "Apelación ante SERVIU con respaldo documental dentro del plazo de bases", "Nada"],
        correct: 2,
        whyCorrect: "Procedimiento administrativo.",
        whyWrong: ["Administrativo primero.", "No abandonar.", "", "Hay solución."]
      },
      {
        q: "La vigencia del certificado de subsidio para comprar es:",
        opts: ["21 meses con prórroga posible", "1 semana", "5 años", "Indefinida"],
        correct: 0,
        whyCorrect: "Plazo estándar.",
        whyWrong: ["", "Imposible.", "Fuera.", "Finita."]
      },
      {
        q: "Un cliente que elige propiedad fuera del precio tope del tramo:",
        opts: ["No puede usar el subsidio en esa propiedad; debe buscar una dentro del tope", "Puede igual", "Paga más", "Automático"],
        correct: 0,
        whyCorrect: "Condición básica del subsidio.",
        whyWrong: ["", "No puede.", "No es pago extra.", "Hay validación."]
      },
      {
        q: "La objeción típica del cliente 'no voy a ganar el subsidio' se responde con:",
        opts: [
          "'Postulación es gratuita y demora 20 min, riesgo cero. Si no ganas, postulas al siguiente llamado o vamos a leasing sin subsidio'",
          "Mentir",
          "Ignorar",
          "Abandonar"
        ],
        correct: 0,
        whyCorrect: "Manejo profesional de objeción.",
        whyWrong: ["", "Deshonesto.", "Daña.", "Abdica."]
      },
      {
        q: "La objeción 'el trámite es complicado' se responde con:",
        opts: ["Aceptar", "Confirmar", "Confirmar", "'Yo te acompaño con checklist claro. 90 min totales de gestión. Estoy para eso'"],
        correct: 3,
        whyCorrect: "Asesoría profesional que convierte la complejidad en servicio.",
        whyWrong: ["Rinde.", "Rinde.", "Rinde.", ""]
      },
      {
        q: "La objeción 'no tengo ahorro mínimo aún' se responde con:",
        opts: [
          "'Podemos trabajar plan de ahorro a 6-12 meses; en ese plazo tu RSH puede mejorar y postulamos juntos'",
          "Mentir",
          "Rechazar",
          "Abandonar"
        ],
        correct: 0,
        whyCorrect: "Cultivo relacional con plan.",
        whyWrong: ["", "Deshonesto.", "Abdica.", "Daña."]
      },
      {
        q: "La carpeta SII Carpeta Tributaria se descarga desde:",
        opts: ["sii.cl con ClaveTributaria del contribuyente", "Banco", "MINVU", "Municipio"],
        correct: 0,
        whyCorrect: "Documento electrónico SII.",
        whyWrong: ["", "No emite.", "Usa pero no emite.", "No emite."]
      },
      {
        q: "Un cliente que posta a DS1 y luego encuentra propiedad DS19:",
        opts: [
          "Requiere nueva postulación",
          "Puede usar el subsidio DS1 dentro del proyecto DS19 si es compatible con el llamado",
          "No procede",
          "Pierde subsidio"
        ],
        correct: 1,
        whyCorrect: "Compatibilidad operativa.",
        whyWrong: ["No requiere en muchos casos.", "", "Procede.", "No pierde."]
      },
      {
        q: "La prórroga de vigencia del certificado de subsidio se solicita con:",
        opts: ["WhatsApp", "Informalmente", "Nada", "Justificación por escrito al SERVIU antes del vencimiento"],
        correct: 3,
        whyCorrect: "Procedimiento administrativo.",
        whyWrong: ["No sirve.", "No sirve.", "Requiere.", ""]
      },
      {
        q: "Un cliente que pierde el subsidio por vencimiento debe:",
        opts: ["Nada", "Comprar igual", "Postular al siguiente llamado con requisitos actualizados", "Juzgado"],
        correct: 2,
        whyCorrect: "Reintento en el siguiente llamado.",
        whyWrong: ["Hay solución.", "Sin subsidio no hay beneficio.", "", "No aplica."]
      },
      {
        q: "El ahorro en cuenta vivienda debe demostrarse con:",
        opts: ["Nada", "Solo dicho", "Efectivo", "Cartola emitida por BancoEstado o cooperativa adherida con saldo requerido"],
        correct: 3,
        whyCorrect: "Documento emitido por entidad adherida.",
        whyWrong: ["Requerido.", "Requerida.", "No sirve.", ""]
      },
      {
        q: "Un cliente independiente que postula a DS1 debe probar ingresos con:",
        opts: ["WhatsApp", "CI solamente", "Nada", "F22 últimos 2 años + carpeta SII + boletas honorarios 12 meses"],
        correct: 3,
        whyCorrect: "Igual exigencia que crédito bancario.",
        whyWrong: ["No sirve.", "Insuficiente.", "Probar.", ""]
      },
      {
        q: "El corredor que acompaña postulación DS1 gana:",
        opts: ["Solo cariño", "Comisión si la operación compraventa se cierra con propiedad de mercado dentro del tope", "Nada", "Sólo del vendedor"],
        correct: 1,
        whyCorrect: "Operación estándar de compraventa.",
        whyWrong: ["Hay comisión.", "", "Hay comisión.", "De ambas partes."]
      },
      {
        q: "Una familia DS1 T3 que compra en DS19 ideal es:",
        opts: ["Fuera", "Combinación óptima: subsidio + zona de mayor plusvalía + financiamiento complementario", "No existe", "Solo DS49"],
        correct: 1,
        whyCorrect: "Ejemplo de máxima optimización.",
        whyWrong: ["Es la mejor.", "", "Existe.", "DS49 no combina así."]
      },
      {
        q: "El mejor momento para iniciar postulación a subsidio con un cliente es:",
        opts: ["Día mismo", "Nunca", "Al menos 3-4 meses antes del llamado para armar RSH + ahorro + documentos", "Al firmar escritura"],
        correct: 2,
        whyCorrect: "Preparación profesional.",
        whyWrong: ["Imposible.", "Sin gestión.", "", "Tarde."]
      }
    ]
  },
  finalQuestions: [
    {
      q: "DS49 financia hasta:",
      opts: ["~UF 950 RM (varía zona)", "UF 500", "Ilimitado", "UF 5.000"],
      correct: 0,
      whyCorrect: "Referencial 2026.",
      whyWrong: ["", "Subestima.", "Hay tope.", "Fuera."]
    },
    {
      q: "RSH máximo DS49:",
      opts: ["100%", "90%", "Sin tope", "40% más vulnerable"],
      correct: 3,
      whyCorrect: "Focalización.",
      whyWrong: ["Sin focal.", "Fuera.", "Sin focal.", ""]
    },
    {
      q: "DS1 T1 precio máximo:",
      opts: ["UF 2.600", "Sin límite", "UF 1.600", "UF 950"],
      correct: 2,
      whyCorrect: "Sector medio-vulnerable.",
      whyWrong: ["T3.", "Siempre hay tope.", "", "DS49."]
    },
    {
      q: "DS1 T2 precio máximo:",
      opts: ["Sin tope", "UF 2.200", "UF 3.000", "UF 1.600"],
      correct: 1,
      whyCorrect: "Tramo intermedio.",
      whyWrong: ["Hay tope.", "", "Fuera.", "T1."]
    },
    {
      q: "DS1 T3 precio máximo:",
      opts: ["UF 3.500", "UF 2.600", "UF 1.600", "Sin tope"],
      correct: 1,
      whyCorrect: "Tramo superior sector medio.",
      whyWrong: ["Fuera.", "", "T1.", "Hay tope."]
    },
    {
      q: "Ahorro mínimo DS49:",
      opts: ["10 UF", "Cero", "100 UF", "10 UF en cuenta vivienda"],
      correct: 3,
      whyCorrect: "Ahorro simbólico.",
      whyWrong: ["Es 10.", "Hay.", "Fuera.", ""]
    },
    {
      q: "Ahorro mínimo DS1 T1:",
      opts: ["30 UF", "Cero", "80 UF", "10 UF"],
      correct: 0,
      whyCorrect: "Tramo básico.",
      whyWrong: ["", "Hay.", "T3.", "DS49."]
    },
    {
      q: "Ahorro mínimo DS1 T3:",
      opts: ["80 UF", "Cero", "30 UF", "500 UF"],
      correct: 0,
      whyCorrect: "Tramo alto.",
      whyWrong: ["", "Hay.", "T1.", "Fuera."]
    },
    {
      q: "DS49 combina con crédito hipotecario:",
      opts: ["Solo un banco", "No combina; es subsidio directo", "Siempre", "Depende"],
      correct: 1,
      whyCorrect: "Pago directo a SERVIU.",
      whyWrong: ["No.", "", "No.", "No."]
    },
    {
      q: "DS1 combina con crédito:",
      opts: ["Obligatoriamente, el crédito completa el precio", "No", "Nunca", "Opcional"],
      correct: 0,
      whyCorrect: "Estructura subsidio+ahorro+crédito.",
      whyWrong: ["", "Obligatorio.", "Se requiere.", "Es obligatorio."]
    },
    {
      q: "DS116 baja la tasa del crédito en:",
      opts: ["0,61-1,16 pp", "0", "10 pp", "5 pp"],
      correct: 0,
      whyCorrect: "Rango estándar.",
      whyWrong: ["", "No.", "Excesivo.", "Fuera."]
    },
    {
      q: "DS19 es:",
      opts: ["Subsidio directo", "Arriendo", "Crédito", "Programa de Integración Social y Territorial (proyectos mixtos)"],
      correct: 3,
      whyCorrect: "Proyectos mixtos MINVU.",
      whyWrong: ["No.", "No es arriendo.", "No es crédito.", ""]
    },
    {
      q: "El RSH se consulta en:",
      opts: ["registrosocial.gob.cl", "SERNAC", "SII", "minvu.cl"],
      correct: 0,
      whyCorrect: "Plataforma MIDESO.",
      whyWrong: ["", "Consumidor.", "Tributo.", "No."]
    },
    {
      q: "SERVIU es:",
      opts: ["ONG", "Ministerio", "Órgano regional del MINVU", "Banco"],
      correct: 2,
      whyCorrect: "Regional.",
      whyWrong: ["Es estatal.", "No es ministerio.", "", "No."]
    },
    {
      q: "La prohibición de venta DS1 es:",
      opts: ["Ninguna", "10 años", "Indefinida", "5 años desde inscripción"],
      correct: 3,
      whyCorrect: "Antiespeculación.",
      whyWrong: ["Hay.", "Fuera.", "Finita.", ""]
    },
    {
      q: "DS1 T2/T3 combina con leasing:",
      opts: ["Solo DS49", "No", "Ningún caso", "Sí (Tanner, Caja Los Andes)"],
      correct: 3,
      whyCorrect: "Convenios MINVU.",
      whyWrong: ["DS49 no.", "Sí.", "Sí.", ""]
    },
    {
      q: "Vigencia certificado subsidio para comprar:",
      opts: ["21 meses", "5 años", "Indefinida", "5 días"],
      correct: 0,
      whyCorrect: "Plazo estándar.",
      whyWrong: ["", "Fuera.", "Finita.", "Fuera."]
    },
    {
      q: "RSH máximo DS1 T2:",
      opts: ["70%", "40%", "Sin tope", "100%"],
      correct: 0,
      whyCorrect: "Tramo.",
      whyWrong: ["", "DS49.", "Sin focal.", "T3/más."]
    },
    {
      q: "RSH máximo DS1 T3:",
      opts: ["Sin tope", "60%", "90%", "100%"],
      correct: 2,
      whyCorrect: "Tramo superior.",
      whyWrong: ["Sin focal.", "T1.", "", "Sin focal."]
    },
    {
      q: "DS19 postulante postula a:",
      opts: ["Proyecto específico aprobado DS19 por MINVU", "Nada", "Subsidio genérico", "Libre"],
      correct: 0,
      whyCorrect: "Por proyecto.",
      whyWrong: ["", "Sí postula.", "No.", "Restringido."]
    },
    {
      q: "Un rechazo MINVU se apela:",
      opts: ["Nunca", "Dentro del plazo de las bases con respaldo", "Solo juicio", "Automático"],
      correct: 1,
      whyCorrect: "Procedimiento.",
      whyWrong: ["Hay apelación.", "", "Administrativa primero.", "No automático."]
    },
    {
      q: "Chilenos y extranjeros con residencia definitiva pueden postular a DS1:",
      opts: ["Sí, si cumplen requisitos", "Ninguno", "Solo extranjeros", "Solo chilenos"],
      correct: 0,
      whyCorrect: "Política inclusiva.",
      whyWrong: ["", "Pueden.", "Ambos.", "Ambos."]
    },
    {
      q: "El ahorro vivienda se abre en:",
      opts: ["Privado cualquiera", "Caja", "BancoEstado o cooperativa adherida", "Cualquier banco"],
      correct: 2,
      whyCorrect: "Adheridos al sistema.",
      whyWrong: ["Requiere adhesión.", "No sirve.", "", "No cualquier."]
    },
    {
      q: "La carpeta tributaria SII se descarga:",
      opts: ["sii.cl con ClaveTributaria", "Papel", "MINVU", "Banco"],
      correct: 0,
      whyCorrect: "Electrónica SII.",
      whyWrong: ["", "Digital.", "No emite.", "No emite."]
    },
    {
      q: "Un corredor DS1 gana comisión:",
      opts: ["Si cierra operación compraventa con propiedad de mercado", "No", "Solo 10%", "No se cobra"],
      correct: 0,
      whyCorrect: "Operación estándar.",
      whyWrong: ["", "Gana.", "Tramos contractuales.", "Se cobra."]
    },
    {
      q: "DS49 genera prohibición de venta:",
      opts: ["1 año", "5 años desde inscripción", "Nunca", "Indefinida"],
      correct: 1,
      whyCorrect: "Antiespeculación.",
      whyWrong: ["Fuera.", "", "Hay.", "Finita."]
    },
    {
      q: "El rol del corredor con cliente DS1 es:",
      opts: ["Central: orienta, acompaña postulación, encuentra propiedad, coordina bancos", "Marginal", "Ninguno", "Solo firma"],
      correct: 0,
      whyCorrect: "Integral.",
      whyWrong: ["", "Central.", "Es central.", "Más amplio."]
    },
    {
      q: "Arriendo con Promesa (subsidio) combina con:",
      opts: ["Sin relación", "Solo DS49", "Ningún DS", "DS1 T2/T3 y sociedades de leasing adheridas"],
      correct: 3,
      whyCorrect: "Convenios.",
      whyWrong: ["Hay relación.", "No combina.", "Combinable.", ""]
    },
    {
      q: "Los llamados DS1 son típicamente:",
      opts: ["Anuales", "Nunca", "Mensuales", "Semestrales"],
      correct: 3,
      whyCorrect: "Marzo y agosto recientes.",
      whyWrong: ["Varía.", "Hay.", "No.", ""]
    },
    {
      q: "Un comprador DS1 T3 con $2,5M conjunto aspira a:",
      opts: ["Hasta UF 2.600 con subsidio + crédito", "UF 500", "UF 10.000", "Nada"],
      correct: 0,
      whyCorrect: "Tope del tramo.",
      whyWrong: ["", "Bajo.", "Fuera.", "Accede."]
    },
    {
      q: "Subsidio de Reparación financia:",
      opts: ["Reparación o mejoramiento de vivienda existente", "Solo arriendo", "Nada", "Nueva vivienda"],
      correct: 0,
      whyCorrect: "Apoyo a propietarios.",
      whyWrong: ["", "No arriendo.", "Financia.", "No es compra."]
    },
    {
      q: "DS52 es:",
      opts: ["Compra", "Crédito", "Subsidio al Arriendo (apoyo temporal 5-8 años)", "No existe"],
      correct: 2,
      whyCorrect: "Instrumento paralelo.",
      whyWrong: ["No compra.", "No crédito.", "", "Existe."]
    },
    {
      q: "El corredor que conoce subsidios:",
      opts: ["Nada", "Irrelevante", "Diferenciación profesional; amplía opciones del cliente y cierra más", "Menos valor"],
      correct: 2,
      whyCorrect: "Ventaja competitiva.",
      whyWrong: ["Es valor.", "Es relevante.", "", "Más valor."]
    },
    {
      q: "DS1 T1 admite vivienda usada:",
      opts: ["No", "Solo rural", "Sí, hasta tope de precio del tramo", "Solo nueva"],
      correct: 2,
      whyCorrect: "Flexibilidad.",
      whyWrong: ["Admite.", "Urbano también.", "", "Ambas."]
    },
    {
      q: "La carga financiera total al combinar subsidio con crédito es:",
      opts: ["50%", "0", "Sin límite", "25% de renta líquida"],
      correct: 3,
      whyCorrect: "Norma bancaria.",
      whyWrong: ["Fuera.", "No viable.", "Hay límite.", ""]
    },
    {
      q: "La postulación DS1 se hace en:",
      opts: ["minvu.cl o SERVIU con CI + RSH + ahorro", "Banco", "Cualquier ONG", "WhatsApp"],
      correct: 0,
      whyCorrect: "Canales oficiales.",
      whyWrong: ["", "No.", "Oficial.", "No oficial."]
    },
    {
      q: "El cliente DS1 T3 con ahorro 40 UF:",
      opts: ["No califica al T3 (requiere 80 UF); puede buscar T2 o aumentar ahorro", "Sube", "Califica", "Libre"],
      correct: 0,
      whyCorrect: "Requisito de tramo.",
      whyWrong: ["", "No sube.", "No califica.", "Depende."]
    },
    {
      q: "Extranjero con permiso temporal:",
      opts: ["No puede postular (requiere residencia definitiva)", "Postula", "Sí puede", "Solo con cónyuge chileno"],
      correct: 0,
      whyCorrect: "Requisito legal.",
      whyWrong: ["", "No puede.", "No puede.", "No basta."]
    },
    {
      q: "Un cliente DS1 que pierde empleo post pre-aprobación:",
      opts: ["Sin efecto", "Automático", "El banco reevalúa crédito; subsidio se mantiene si cumple RSH", "Nada"],
      correct: 2,
      whyCorrect: "Crédito y subsidio son instrumentos distintos.",
      whyWrong: ["Hay efecto.", "No automático.", "", "Sí afecta."]
    },
    {
      q: "DS49 rural tiene:",
      opts: ["Montos superiores por costos de ruralidad", "Nada", "Menos subsidio", "Mismo monto"],
      correct: 0,
      whyCorrect: "Equidad territorial.",
      whyWrong: ["", "Inclusivo.", "Al contrario.", "Diferencia."]
    },
    {
      q: "Las fuentes oficiales para el corredor son:",
      opts: ["Blog", "Memoria", "MINVU, SERVIU, bcn.cl, chileatiende.gob.cl", "Redes"],
      correct: 2,
      whyCorrect: "Siempre oficiales.",
      whyWrong: ["No oficial.", "No confiable.", "", "No oficial."]
    },
    {
      q: "La inmobiliaria DS19:",
      opts: ["Recibe incentivo MINVU al cumplir criterios sociales del proyecto", "No participa", "Recibe nada", "Financia sola"],
      correct: 0,
      whyCorrect: "Incentivo.",
      whyWrong: ["", "Participa.", "Hay.", "MINVU aporta."]
    },
    {
      q: "DS19 mezcla típica de viviendas:",
      opts: ["100% subsidio", "Sin mezcla", "~50% subsidio + ~50% libre", "100% libre"],
      correct: 2,
      whyCorrect: "Integración.",
      whyWrong: ["No.", "Hay mezcla.", "", "No."]
    },
    {
      q: "La exención impuesto timbres aplica al crédito con subsidio:",
      opts: ["Nunca", "Parcial/total según tramo y tope UF", "Siempre total", "No"],
      correct: 1,
      whyCorrect: "DL 3.475.",
      whyWrong: ["Sí aplica.", "", "Parcial típico.", "Aplica."]
    },
    {
      q: "La cuenta de ahorro vivienda exige:",
      opts: ["Movimientos periódicos o saldo mínimo según bases del llamado", "Ninguna", "Anonimato", "Nada"],
      correct: 0,
      whyCorrect: "Buenas prácticas.",
      whyWrong: ["", "Hay.", "No anónima.", "Hay."]
    },
    {
      q: "El corredor acompaña postulación DS1 para:",
      opts: ["Ganar el referido + cerrar la operación compraventa resultante", "Nada", "Cobrar por postular", "Por ley"],
      correct: 0,
      whyCorrect: "Estrategia relacional y comercial.",
      whyWrong: ["", "Hay valor.", "No se cobra postulación.", "No ley."]
    },
    {
      q: "El plazo evaluación MINVU post-postulación es:",
      opts: ["1 día", "Indefinido", "2 a 4 meses típicamente", "5 años"],
      correct: 2,
      whyCorrect: "Ventana operativa.",
      whyWrong: ["Imposible.", "Finito.", "", "Fuera."]
    },
    {
      q: "La notificación de resultado DS1 se hace por:",
      opts: ["Nómina oficial minvu.cl y SERVIU regional", "Llamada", "Ninguna", "WhatsApp"],
      correct: 0,
      whyCorrect: "Canales oficiales.",
      whyWrong: ["", "No oficial.", "Hay notificación.", "No oficial."]
    },
    {
      q: "El DS49 es compatible con leasing:",
      opts: ["Solo crédito", "Solo leasing", "Sí", "No combina con leasing ni crédito"],
      correct: 3,
      whyCorrect: "Es subsidio directo.",
      whyWrong: ["No.", "No.", "No.", ""]
    },
    {
      q: "El SII entrega exención de impuesto territorial a la primera vivienda cuando:",
      opts: [
        "Solo cuando el corredor lo solicita a SERVIU",
        "Nunca se otorga",
        "El avalúo fiscal está bajo el tope de exención definido por el DFL 1/1998 y leyes de presupuesto anuales",
        "Siempre en todas las viviendas"
      ],
      correct: 2,
      whyCorrect: "El beneficio DFL 2 (y exención parcial del territorial) se activa automáticamente cuando el avalúo fiscal queda bajo el tope vigente del año. Es un beneficio real a explicar al comprador con DS1.",
      whyWrong: ["El SII aplica la exención, no SERVIU.", "La exención sí existe por ley.", "", "Hay requisitos y topes."]
    }
  ],
  goldRules: [
    {
      n: 1,
      title: "Domina los 5 tramos principales",
      text: "DS49 (vulnerable) · DS1 T1 (medio-vulnerable UF 1.600) · DS1 T2 (medio UF 2.200) · DS1 T3 (medio UF 2.600) · DS19 (proyectos integración)."
    },
    {
      n: 2,
      title: "Verifica siempre el llamado vigente",
      text: "Los montos, topes y fechas cambian por llamado. Consulta minvu.cl antes de orientar al cliente."
    },
    {
      n: 3,
      title: "RSH actualizado es el primer paso",
      text: "Sin RSH correcto no hay postulación. Verifica registrosocial.gob.cl con el cliente en la primera reunión."
    },
    {
      n: 4,
      title: "DS49 acompaña pero no genera comisión directa",
      text: "Construye relación de largo plazo; esa familia podría referir o volver cuando mejore su situación."
    },
    {
      n: 5,
      title: "DS1 T2/T3 es tu nicho principal del primera vivienda",
      text: "Joven profesional y pareja consolidando. Combina subsidio + DS116 + leasing si aplica."
    },
    {
      n: 6,
      title: "DS19 expande la zona de tu cliente",
      text: "Clientes DS1 pueden acceder a zonas de alta plusvalía vía proyectos DS19. Identifícalos en tu territorio."
    },
    {
      n: 7,
      title: "DS116 es tu argumento de cierre",
      text: "Rebaja tasa 0,61-1,16 pp. Ahorra UF 50-120. Nunca lo omitas con cliente DS1."
    },
    {
      n: 8,
      title: "Explica la prohibición 5 años honestamente",
      text: "Vender antes requiere autorización SERVIU y devolver subsidio. Que el cliente lo sepa al firmar evita crisis posterior."
    },
    {
      n: 9,
      title: "Acompaña postulación con checklist visual",
      text: "La objeción 'es complicado' desaparece con un checklist ordenado y tu presencia en 2 videollamadas de 15 min."
    },
    {
      n: 10,
      title: "Fuente oficial siempre",
      text: "MINVU, SERVIU, bcn.cl, chileatiende.gob.cl. Nunca inventes montos ni plazos; verifica antes de citar."
    }
  ]
};
