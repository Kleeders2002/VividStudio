# CONTEXTO COMPLETO — Proyecto Vivid Studio / Vivid Studio Bazar

> **Fuente única de verdad del proyecto.** Si algo estructural cambia, actualizar
> este archivo y commitear. Última actualización: **29 de septiembre de 2026**.

---

## 1. Sobre mí

- **Nombre legal:** Kleeders Esteban Ortiz (Kleeders = primer nombre, Esteban = segundo). Nací el **17-sep-2002**.
- **DECISIÓN FINAL de nombre público (cierra cualquier versión anterior):** uso **"Kleeders Ortiz"** en TODO — Upwork, sitio web, correo principal, verificación de identidad (IDV) y método de pago. Descarté "Esteban Ortiz" como principal porque, siendo nombre parcial válido, podía generar fricción frente a mi cédula, mi cuenta de Upwork existente y mi futuro método de cobro. La discrepancia de nombres es causa real y documentada de bloqueos de cuenta en Upwork. Prioricé cero riesgo sobre un nombre "más fácil de pronunciar".
- **Graduación:** 3 de diciembre de 2026, Ingeniería en Informática, **UCAB** (Universidad Católica Andrés Bello, Venezuela — privada, alto prestigio; pensum renovado 2023 alineado con IEEE/ACM).
- **Trabajo de Grado: PharmaMonitor** — "Sistema IoT y Plataformas Web para el Control y Seguimiento Automatizado de Condiciones Ambientales en el Almacenamiento Farmacéutico". Defendido el **4-may-2026**, calificación del jurado: **19/20** (tutor: Manuel Eduardo Peña Pernía). Stack: firmware ESP8266 (DHT22 + BMP180 + BH1750 + LEDs WS2811, Arduino IDE), API REST **FastAPI** (Python, SQLModel) en 3 capas API-Led, **PostgreSQL en Neon**, web **React.js** en Vercel, backend en **Render**, móvil **React Native + Expo** con notificaciones locales persistentes (APK vía Expo Build). **Validado con prueba piloto de 7 días en una farmacia real monitoreando insulina humana: 1,008 lecturas con 100% de completitud, alerta crítica real detectada y notificada en <3 segundos** (excursión a 8.4°C por apertura de cámara frigorífica, detectada por el salto de luminosidad 3→165 lux — validación cruzada entre sensores). Costo del circuito: ~USD 20. Metodología: Scrum (8 sprints, dic-2024 → ene-2026) + Cascada para el hardware. Repos públicos en GitHub: PharmaMonitorAPI / PharmaMonitorWeb / PharmaMonitorApp. El PDF de la tesis incluye capturas de las interfaces (Apéndices H/I) reutilizables para READMEs y portfolio.
- **Trabajo actual:** edición de posts/reels para **Akahl Style** (marca real de trajes a medida, Caracas/Miami), ~**$500/mes**. Proyectos construidos para ellos: **Akahl Catalogue** (portal de precios de telas/trajes, en producción) y **Akahl Club** (e-commerce por suscripción con Stripe para ebooks/videos premium — construido y entregado, **aún sin lanzar**).
- **Meta:** superar **$1000/mes** con desarrollo/IoT, sin jornadas de 12h, con tiempo real para mí.
- **Inglés: básico.** Entiendo si me hablan despacio; puedo hablar pero con muchos errores y lento. Estrategia completa en la sección 10.

## 2. Sobre mi novia

- TSU en Mercadología (mención Ventas), ISUM (instituto con 55+ años en Venezuela). Trabajó en Alpina (le gustaba, pagaban poco).
- Actualmente sub-jefa en **Ferremania911**, la ferretería de su mamá (mi suegra). No siente que decide mucho porque no es su negocio.
- Está expandiendo con productos personalizados: **tazas, toppers, stickers, llaveros de resina, libretas personalizadas, velas aromatizantes**. Ya tiene clientela activa.
- Dos cuentas de Instagram separadas: la oficial de Ferremania911 (la maneja su mamá) y la de manualidades, hoy llamada **"fmania911"** (causa confusión con la ferretería).
- **PENDIENTE:** renombrar su IG a **"Vivid Studio Bazar"**. Instagram no borra seguidores ni posts al renombrar. Plan: avisar con post/historia el día del cambio y dejar "antes Ferremania911 Bazar" temporal en la bio.

## 3. Estructura de negocio (decidida)

Dos marcas bajo un mismo dominio, identidades separadas por públicos distintos:

| Marca | Dueño | Qué es | Canal de clientes |
|---|---|---|---|
| **Vivid Studio** | Yo | Portafolio freelance: desarrollo web, apps móviles, sistemas IoT. Diseño de contenido = servicio secundario, no el foco. | Upwork / referidos |
| **Vivid Studio Bazar** | Mi novia | Tienda de productos personalizados | Instagram + pauta (ya funciona). NO necesita Upwork |

**Piloto pendiente — QR + dedicatorias:** páginas de dedicatoria online vinculadas por QR a los llaveros de resina. Arquitectura decidida: UNA app en Vercel con ruta dinámica `dedicatorias.vividstudio.dev/[código]` + base gratuita (Supabase o Vercel KV). NUNCA un repo de GitHub Pages por cliente (no escala). Precio sugerido: $3-6 extra sobre el llavero. Validar con 5-10 llaveros antes de ofrecer en firme. Construir solo la versión automatizada (formulario → página autogenerada); manual no escala en tiempo.

## 4. Dominio y arquitectura web

- **vividstudio.dev** comprado en **Cloudflare** (venden a precio de costo; WHOIS privacy activo; registrado como "Individual" — Vivid Studio aún no es empresa legal).
- Descartados: vividstudio.com ($11,535 revendedor), .studio (renovación ~$40/año), .es (comunica España), .org (connotación ONG).
- **vividstudio.dev** = mi portafolio (raíz). **bazar.vividstudio.dev** = tienda de mi novia. Descartado fmania911.vividstudio.dev (reintroducía la confusión).
- Ambos en Vercel + Tailwind CSS. El .dev fuerza HTTPS (Vercel lo da gratis) y la connotación "developer" favorece al portafolio; a las clientas del Bazar les llega el link por Instagram, no analizan la URL.

## 5. Estado actual del portafolio (ESTE repo)

- **Repo:** `github.com/Kleeders2002/VividStudio` → push a `main` dispara deploy automático de Vercel (actualmente visible en `vividstudio-jet.vercel.app`; el dominio final `vividstudio.dev` está por conectar en Vercel).
- **Stack:** Vite 6 + React 19 + Tailwind CSS v4 + framer-motion + lucide-react. Bilingüe **inglés (default) / español** con toggle en el navbar (preferencia en localStorage `vs-lang`).
- **Local:** `npm run dev` (localhost:5173) · Build: `npm run build`.
- **Orden de secciones:** Hero (ventana de código decorativa con "Kleeders") → About (cifras honestas) → Services (3 tarjetas + complemento diseño) → Process (4 pasos) → "Working with me" (4 garantías) → Projects (3 casos de estudio: Problema/Solución/Resultado) → Testimonials (3 clientes reales) → Timeline (2018—2026 → hoy) → Tech Stack (marquee + 3 categorías) → FAQ (4 preguntas) → Contact (CTA Upwork + kleeders@) → Footer (link discreto al Bazar).

### Archivos clave (dónde se cambia cada cosa)

| Archivo | Qué controla |
|---|---|
| `src/data/content.en.js` | TODO el texto en inglés (copy, secciones, testimonios) |
| `src/data/content.es.js` | TODO el texto en español |
| `src/data/site.js` | LINKS (⚠️ Upwork/LinkedIn/GitHub aún placeholder) y PROJECT_IMAGES |
| `src/components/CodeWindow.jsx` | Ventana de código del hero (línea 17: "Kleeders") |
| `src/components/Assurances.jsx` | Sección "Working with me" (sustituyó a testimonios falsos) |
| `src/components/Testimonials.jsx` | Testimonios con fallback foto→iniciales |
| `src/components/Projects.jsx` | Casos de estudio con fallback screenshot→mockup SVG |
| `public/images/projects/LEEME.md` | Instrucciones de screenshots reales |
| `public/images/avatars/LEEME.md` | Instrucciones de fotos de testimonios |

### Decisiones de contenido (NO romper)

- **Cero cifras infladas:** "3 productos construidos", "100% código a medida", "2026 B.Sc." — todo defendible en una entrevista. No volver a "10+ proyectos" ni "5+ años".
- **Graduación honesta:** dice "graduating December 2026". El 3-dic-2026 cambiar a "graduated" (está en `content.en.js`/`content.es.js`: hero.badge y about.text).
- **Akahl Club:** "ready for launch" — NUNCA decir que ya genera ingresos (aún no lanza).
- **Timeline:** carrera 2018—2026; TG PharmaMonitor 2024—2026 (nota 19/20); Akahl Catalogue 2025—2026; Akahl Club 2026 (ajustar TODO interno si las fechas reales difieren).
- **Stack declarado (actualizado 29-sep con lo que la tesis demuestra):** Frontend: React · React Native (Expo) · Tailwind · JavaScript ES6+ / Backend & DB: Node.js · Express · FastAPI (Python) · PostgreSQL · Prisma · MySQL / IoT & Cloud: ESP8266-NodeMCU · Firmware (Arduino) · Render · Vercel. **Se eliminaron MQTT y Firebase** (nunca se usaron — caerían ante la primera pregunta de entrevista) y **Oracle SQL salió del sitio** por falta de proyecto que lo respalde (queda para el CV local). Todo lo que queda se defiende con PharmaMonitor o Akahl.
- Sin testimonios falsos jamás: fueron eliminados (decían "Client Name" con fotos de Unsplash) y eso mataría la credibilidad ante cualquier cliente que verifique.
- Fuente Inter cargada vía Google Fonts (antes declarada pero no cargada). Favicon, meta OG y `theme-color` configurados. Accesibilidad: foco visible, `scroll-margin` bajo navbar fija, `MotionConfig reducedMotion="user"`.

## 6. Testimonios (estado EXACTO)

| Persona | Cargo | Estado de la cita | Foto |
|---|---|---|---|
| **Alex Kleppe** | CEO — Akahl Style | ⚠️ BORRADOR redactado por Claude — pendiente OK suyo | ✅ `avatars/alex.png` (subida) |
| **Penelope Kleppe** | CO-CEO — Akahl Style | ⚠️ BORRADOR — pendiente OK | ✅ `avatars/penelope.png` (subida) |
| **Alejandra Perez** | Realtor — Florida | ⚠️ BORRADOR — pendiente OK (servicio: creación de contenido para su marca) | ❌ falta `avatars/alejandra.png` |

- Las 3 citas son texto propuesto, NO palabras textuales de ellos. Pendiente: aprobación por WhatsApp (frase + nombre + cargo + foto de una vez) o reemplazo por sus mensajes reales.
- Fotos drop-in: `public/images/avatars/{alex,penelope,alejandra}.png` — si el archivo existe aparece solo; si no, iniciales (fallback automático en `Testimonials.jsx`).
- Screenshots drop-in: `public/images/projects/{proyecto-iot,akahl-catalogue,akahl-club}.png` — fallback a mockup SVG si no existe.
  - ✅ `proyecto-iot.png` SUBIDA (foto real del hardware: placa con "Kleeders Ortiz" + UCAB, sensores DHT22/BMP180/BH1750, LED encendido — 521×483).
  - ✅ `akahl-catalogue.png` SUBIDA (screenshot real del portal: Price Catalog 101011 Gladson/CHELSEA V, Bespoke/No Bespoke, precios por pieza — 707×792).
  - ❌ falta `akahl-club.png` (mientras, se ve el mockup SVG `akahl-club.svg`).
- Los mockups SVG de iot y catalogue fueron borrados (ya no se necesitan); `akahl-club.svg` sigue como respaldo.

## 7. PENDIENTES CRÍTICOS del sitio (bloquean compartirlo)

1. `src/data/site.js` → `upwork`: sigue como `"https://www.upwork.com/freelancers/TU-PERFIL"` (da 404 — un botón de Upwork roto mata credibilidad).
2. `src/data/site.js` → `linkedin`: placeholder — primero crear el perfil (sección 12, tarea 3).
3. ✅ RESUELTO (29-sep): `github` → `https://github.com/Kleeders2002`.
4. Falta `public/images/avatars/alejandra.png` y `public/images/projects/akahl-club.png`.
5. Aprobar/reemplazar las 3 citas de testimonios (sección 6).
6. Después del 3-dic-2026: "graduating" → "graduated".

**Nota GitHub (29-sep):** el perfil existe (16 repos públicos) pero está SIN configurar: sin nombre, sin bio, sin avatar. Pendiente: poner nombre "Kleeders Ortiz", avatar, bio, y fijar (pin) los mejores repos — VividStudio, Akahl-Cataloge, AkahlClub, VividStudioBazar, PharmaMonitor{API,Web,App} (ninguno tiene descripción). **Seguridad/permisos:** los .env.example públicos están limpios ✅ (solo placeholders), PERO falta (a) confirmar con Akahl que sus repos pueden estar públicos y (b) escanear el historial git por .env borrados: `git log --all --full-history -- "*.env"` en cada repo (un secreto borrado sigue vivo en el historial).

## 8. Correo profesional

- **Stack (100% gratis, funciona):** ImprovMX (recibe/reenvía a Gmail) + Mailgun (envío SMTP autenticado, gratis 100/día permanente) + Gmail personal como interfaz.
- Configuración Gmail: Configuración → Cuentas → "Enviar correo como" → Servidor `smtp.mailgun.org`, Puerto `587`, TLS, usuario = correo COMPLETO, contraseña de la sección **"SMTP Credentials"** de Mailgun (NO la API key).
- Contexto de descartes: Zoho sin plan gratis para Venezuela; Brevo no permite registro desde Venezuela (probable OFAC); SendGrid eliminó su free tier en may-2025.
- **HECHO:** `esteban@vividstudio.dev` configurado y probado (envío exitoso). Queda como alias secundario, no borrar.
- **PENDIENTE:** crear **`kleeders@vividstudio.dev` como correo PRINCIPAL** (mismo proceso). ⚠️ El sitio ya muestra kleeders@ — crear el buzón YA o los correos se pierden.
- **PENDIENTE:** correo de mi novia (`jessica@` o el nombre que decida) usando SU propio Gmail personal — NUNCA Gmail compartido de pareja (mezclaría clientas del Bazar con lo personal).
- Foto de perfil por dirección: cuenta de Google separada usando la dirección del dominio ("Usar mi dirección de correo actual"), foto visible para todos, propaga hasta 24h, confiable solo Gmail→Gmail. Ya funciona en la app Gmail del teléfono (selector "De:").

## 9. Upwork (estado al 29-sep-2026)

- Perfil: **"Kleeders Ortiz"**, 80% completo. **Connects: 0 (bloqueo #1 — no puedo aplicar a nada).** Sin IDV. Badges "Availability" y "Boost" apagados (activar, gratis).
- Pendientes: perfil al 100% + IDV (coincidir con "Kleeders Ortiz") + badges + Connects (paquete mínimo) + método de pago registrado EXACTAMENTE como "Kleeders Ortiz".
- **Posicionamiento:** nicho **IoT / full-stack end-to-end** (hardware→API→web→móvil) — mucha menos competencia que "React developer" y paga mejor. El TG es el caso de estudio principal. NO competir en web genérica.
- **Precios:** 20-30% debajo de la meta los primeros 2-3 proyectos (nunca $5/hora — atrae peores clientes y ancla el precio). Precio FIJO por hitos al inicio. Subir tarifas cada 3-4 proyectos completados.
- Verificar permiso de Akahl antes de exhibir Akahl Catalogue/Club públicamente en Upwork (un WhatsApp basta).
- Roadmap financiero: NO renunciar a Akahl todavía (colchón ~$500/mes) hasta que Upwork cubra ~50%+.
- **Correo de login de Upwork: `kleesteban270@gmail.com` — SIN PROBLEMA (aclarado 29-sep).** El email de login es invisible para clientes y NO participa en la verificación de identidad ni en los pagos; lo que DEBE coincidir exactamente es nombre legal + documento (IDV) + titular del método de pago, todo como "Kleeders Ortiz". No cambiar el email del login ahora (riesgo innecesario de revisión de seguridad con cuenta nueva y sin historial). Activar 2FA en ese Gmail — es la llave maestra de la cuenta. Cambiarlo a kleeders@ más adelante es opcional y trivial desde Settings, cuando la cuenta tenga historial.

## 10. Estrategia de inglés (definida 28-sep-2026)

- Inglés básico: entiende hablado lento; habla con errores; escrito básico.
- **Doble mercado en paralelo:** (a) clientes hispanos en Upwork (EE.UU. hispano, España, LatAm) — ventaja nativo, primeras reseñas más rápido; (b) trabajos en inglés SOLO ESCRITOS (sin videollamada) usando IA para pulir propuestas y respuestas.
- Evitar al inicio jobs que exijan llamada. En chat nunca fingir fluidez.
- Inglés 30 min/día en paralelo desde YA (escribir propuestas reales y pulirlas después). Meta: funcional para calls en 3-6 meses.
- Por qué: las reseñas componen — cada semana sin propuestas es una semana sin reseñas. El portafolio ya dejó de ser el cuello de botella.

## 11. Historial del repo (después del commit inicial)

| Commit | Contenido |
|---|---|
| `86e4260` | Overhaul: cifras honestas, testimonios falsos → sección "Working with me", hero "Kleeders", email kleeders@, Inter cargada, favicon, OG meta, scroll-margin, foco visible, reduced motion, mockups al inglés, stack podado |
| `71905be` | Testimonios reales: Alex + Penelope (citas borrador), avatares de iniciales |
| `26ae592` | Tercer testimonio: Alejandra Perez (creación de contenido) |
| `e2561cb` | Timeline 2018—2026, MySQL + Oracle SQL en el stack, carpeta `images/projects/` con fallback automático |
| `3ec1e45` | Carpeta `images/avatars/` con fallback a iniciales |
| *(este commit)* | Fotos reales subidas (IoT hardware, catálogo Akahl, Alex, Penelope) + `CONTEXTO.md` |

## 12. Lista maestra de pendientes (orden de prioridad)

> **🎯 PLAN DE EJECUCIÓN (acordado la noche del 29-sep-2026):**
> El portafolio está TERMINADO — no recibe más pulido hasta la primera reseña
> de Upwork. Cualquier tarea nueva va a este parking lot; **nada se ejecuta
> hasta enviar la propuesta #1**. Métrica de esta etapa: propuestas
> enviadas/semana.
>
> - **MAÑANA (30-sep):** IDV de Upwork + perfil al 100% — Claude redacta
>   titular, overview y skills en inglés, solo copiar y pegar.
> - **Resto de la semana:** buzón `kleeders@` (15 min) → LinkedIn registrado
>   con ese correo (textos de Claude) → URLs a `site.js` → Connects →
>   primeras 5 propuestas (hispanos + inglés escrito, nicho IoT).
> - Recordar: 2FA en kleesteban27@gmail.com (es la llave maestra de Upwork).

1. Llenar la URL de Upwork en `src/data/site.js` (GitHub ✅ hecho 29-sep; LinkedIn llega con la tarea 3)
2. Crear buzón `kleeders@vividstudio.dev` (el sitio ya lo muestra) + activar 2FA en el Gmail personal
3. **Crear LinkedIn** registrado CON `kleeders@vividstudio.dev` (Gmail personal como correo de recuperación; con ImprovMX las notificaciones llegan solas al Gmail) → URL personalizada `linkedin.com/in/kleedersortiz` → perfil EN INGLÉS: titular propuesto "Software & IoT Developer · I build end-to-end products: hardware, API, web & mobile", about espejo del portafolio, experiencias (Founder Vivid Studio / Web Developer Akahl / Content Editor Akahl), UCAB 2018–2026, skills top 3 fijadas (Full-Stack, IoT, REST APIs), "Open to work" activado, foto headshot (fondo liso, luz frontal) → URL final a `site.js`. Los textos los redacta Claude. Tiempo total: 1-2h, no más
4. Configurar el perfil de GitHub: nombre "Kleeders Ortiz" + avatar + bio con link al portafolio + repo de perfil (Kleeders2002/Kleeders2002 con README) + pinner PharmaMonitorAPI/Web/App, Akahl-Cataloge, AkahlClub, VividStudio + README profesional en cada repo (la tesis trae capturas listas en los Apéndices H/I)
5. Upwork: perfil 100% + IDV + badges gratis + Connects + método de pago "Kleeders Ortiz"
6. Aprobar las 3 citas de testimonios con Alex, Penelope y Alejandra (+ subir foto `alejandra.png`)
7. Primeras propuestas: 4-5/semana (hispanos + inglés escrito), nicho IoT
8. Inglés 30 min/día
9. IG de mi novia → "Vivid Studio Bazar"
10. Revisar a fondo `vividstudiobazar.vercel.app` + definir quién actualiza su catálogo (sitio legitima, IG vende)
11. `akahl-club.png` screenshot real + permiso de Akahl para repos públicos + escaneo de historial
12. Piloto QR + dedicatorias (automatizado) tras validar 5-10 llaveros
13. Conectar `vividstudio.dev` en Vercel como dominio del portafolio
14. 3-dic-2026: "graduating" → "graduated" en ambos idiomas
