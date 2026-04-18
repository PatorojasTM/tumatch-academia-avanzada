# Plantilla de taller avanzado (solo referencia interna)

Estructura por taller:
- `index.html` (hero, 7 submódulos, final, certificado) — hereda `../styles.css`
- `quiz-data.js` (TALLER_CONFIG con moduleNames, quizBank 1..7, finalQuestions, goldRules)
- `app.js` (inicializa `TMTaller.init(TALLER_CONFIG)`)
- `assets/` (logos TuMatch · copiados del padre)

Paleta de acento por taller (overrides CSS en index.html):
- Taller 01 Psicología: `#E85D4A` coral (taller existente)
- Taller 02 Financiamiento + Leasing: `#0D7C78` verde esmeralda
- Taller 03 Comisiones + CRM: `#2563EB` azul
- Taller 04 Subsidios: `#7C3AED` morado
- Taller 05 Due Diligence: `#B45309` bronze
- Taller 06 Negociación + Cierre: `#991B1B` vino
- Taller 07 Postventa: `#0EA5A0` teal

Spec de quizzes (app-core.js maneja todo):
- 5 preguntas rotativas de un banco de 20 por submódulo
- 10 preguntas mostradas de un banco de 50 en prueba final
- Bloqueo 10 min tras 5 errores acumulados
- 20 puntos por submódulo aprobado (14 módulos × 20 = 140 puntos máx/taller)
- Certificado con nombre + fecha + módulos aprobados + sello + descarga PNG
