# TuMatch · Academia Avanzada · Comprador Primera Vivienda

Academia de Corredores oficial TuMatch Inmobiliario — **7 talleres avanzados** especializados en el negocio del Comprador de Primera Vivienda en Chile.

## 🔗 URL pública

- Hub principal: **<https://tumatch-academia-avanzada.vercel.app>**

## 📚 Talleres

| # | Taller | Carpeta | Color distintivo |
|---|--------|---------|------------------|
| 01 | En la Mente del Cliente Comprador · Psicología | `psicologia-cliente-comprador/` (repo principal) | Coral `#E85D4A` |
| 02 | Crédito Hipotecario y Leasing Habitacional | `financiamiento-leasing/` | Verde esmeralda `#0D7C78` |
| 03 | Comisiones, Contratos y Gestión Hipotecaria en CRM | `crm-gestion-hipotecaria/` | Azul `#2563EB` |
| 04 | Subsidios Habitacionales Chile 2026 | `subsidios-chile-2026/` | Morado `#7C3AED` |
| 05 | Due Diligence Legal y Técnica | `due-diligence-legal/` | Bronce `#B45309` |
| 06 | Negociación Avanzada y Cierre | `negociacion-cierre/` | Vino `#991B1B` |
| 07 | Postventa, Fidelización y Referidos | `postventa-fidelizacion/` | Teal `#0EA5A0` |

## 🏗️ Arquitectura

```
comprador-primera-vivienda/
├── index.html              # Hub de 7 talleres
├── styles.css              # Tokens TuMatch (Cinzel, EB Garamond, DM Sans)
├── app-core.js             # Core compartido (quiz, lockout 5-err/10-min, certificado)
├── assets/                 # Logos TuMatch horizontal/simbolo pos/neg
├── <taller>/
│   ├── index.html          # 7 submódulos de contenido + prueba final + certificado
│   ├── quiz-data.js        # window.TALLER_CONFIG con bank (20×7) + final (50) + goldRules
│   └── app.js              # Inicializador delgado (llama TMTaller.init)
```

## 🎯 Spec de cada taller

- **7 submódulos** por taller · 20 puntos cada uno al aprobar su quiz
- **Banco de 20 preguntas** por submódulo · se muestran 5 rotativas
- **Prueba final**: 10 preguntas mostradas de un banco rotativo de 50 · requiere 10/10
- **Bloqueo**: acumular **5 errores** bloquea el taller por **10 minutos** (se puede retomar después, intentos ilimitados)
- **Certificado oficial** descargable PNG con nombre completo del corredor
- **Light / Dark mode** con toggle persistente en localStorage
- **Responsive** en computador y móvil
- **Progreso autoguardado** por taller (localStorage)

## 💰 Datos oficiales integrados

- **Contrato Freelance TuMatch SpA** — comisiones reales: 25% referido, 30/35% gestión integral, hasta 40/45%/60/65% según participación y modalidad (con/sin Team Leader)
- **Ley 19.472** — garantías de construcción 3/5/10 años
- **Ley 19.281** — leasing habitacional (Tanner, ForUm, Caja Los Andes)
- **Ley 21.442** — copropiedad inmobiliaria
- **Código Civil** — Art. 1.554 (promesa), 1.858 (vicios redhibitorios), 1.803 (arras), 1.535 (cláusula penal)
- **CMF, SII, MINVU, SERVIU, Banco Central, ABIF**

## 🛠️ Herramientas oficiales TuMatch

- [Calculadora Hipotecaria](https://tumatch-leads.vercel.app/herramientas/calculadora-hipotecaria)
- [Tasación](https://tumatch-leads.vercel.app/herramientas/tasacion)
- [Análisis de Rentabilidad](https://tumatch-leads.vercel.app/herramientas/rentabilidad)
- [CRM Leads](https://tumatch-leads.vercel.app/leads)

## 🚀 Deploy

Este repositorio es el código público de la Academia Avanzada. El despliegue oficial vive en Vercel:

```bash
# Deploy standalone
vercel deploy --prod --yes
```

## 📝 Licencia

© 2026 TuMatch Inmobiliario SpA — Material de formación propietario para la Academia de Corredores TuMatch.
