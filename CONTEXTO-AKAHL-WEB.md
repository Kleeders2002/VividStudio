# CONTEXTO COMPLETO — Proyecto Web AKAHL (landing de reservas + salida de GoHighLevel)

> **Documento autocontenido:** péegalo completo en cualquier IA y entenderá el proyecto sin más antecedentes.
> Escrito para: cualquier IA que Kleeders use como asistente en este proyecto.
> Última actualización: **14 de octubre de 2026**. Mantenido por Kleeders Ortiz.

---

## 0. Resumen en 10 líneas (TL;DR)

1. Soy **Kleeders Ortiz**, desarrollador web independiente (marca: **Vivid Studio**, vividstudio.dev), Venezuela, 24 años, graduándome de Ing. en Informática (UCAB, dic-2026).
2. Mi cliente **AKAHL** (marca real de trajes a medida, **Caracas/Miami**) tiene 2 sitios: **akahlstyle.com** (WordPress, sitio oficial) y **dressedbyakahl.com** (enlazado a un CRM **GoHighLevel**).
3. Pagan GoHighLevel **~$97+/mes (~$1,100+/año)** pero SOLO usan 2 funciones: agenda de citas y, a veces, envío masivo de correos.
4. Les propuse consolidar todo en WordPress: **Amelia** (plugin de citas que ya está instalado en su sitio) + un servicio de correo (Brevo/MailPoet).
5. La página **/start-your-transformation/** la hizo OTRA persona arrastrando componentes (Elementor) y a la clienta **no le gustó**. Yo la rehago desde cero, programada a mano.
6. La prioridad declarada de ella: **REDUCIR COSTOS**. Rechazó la idea de "otro link" creyendo que costaba dinero; le expliqué que agregar rutas en WordPress cuesta $0 (viene del trauma de GHL, donde cada funnel se paga).
7. **Trato cerrado el 11-oct-2026: $200** por el rediseño completo de esa página con el sistema de citas integrado. Regateó desde mi cotización de $350–450. Acepté por debajo de mi piso ($250) — decisión cerrada, no sugerir renegociar el precio ya acordado.
8. Alcance a $200: landing programada a mano (yo NUNCA uso constructores drag-and-drop), Amelia configurado (servicio, horarios, correos de confirmación/recordatorios), 1 ronda de revisiones, misma URL, licencia Pro de Amelia la compra ella directamente, **50% de depósito ($100) antes de escribir código**.
9. Pendiente crítico del proyecto: **exportar los contactos de GoHighLevel ANTES de cancelar** (es el activo irreversible del cliente).
10. Mi prioridad inmediata: enviar el alcance por escrito y cobrar el depósito. No muevo un dedo en código hasta tener el $100.

---

## 1. Sobre mí (lo que la IA necesita saber para ayudarme bien)

- **Kleeders Ortiz**, fundador de Vivid Studio. Hablo español con este cliente (los dueños son hispanos; la marca presenta en inglés). Mi inglés hablado es básico; escrito funciona.
- **Relación existente con AKAHL desde 2024:** les facturo ~**$500/mes** por edición de posts/reels, y ya les construí **Akahl Catalogue** (portal de precios de telas/trajes, en producción) y **Akahl Club** (e-commerce por suscripción con Stripe, entregado pero aún sin lanzar). NO es cliente nuevo — es mi principal fuente de ingresos actual.
- **Preferencia dura de trabajo: programo TODO a mano** (PHP/HTML/CSS/JS, plantillas de WordPress). Rechazo los constructores visuales drag-and-drop (Elementor, Divi, etc.) aunque el cliente los tenga instalados. Cualquier solución técnica que la IA proponga debe respetar esto.
- **Mis cobros internacionales están complicados** (Payoneer con problemas para Venezuela; plan B: tarjeta/Airtm/Zinli). Por eso el depósito del 50% por adelantado es regla inquebrantable.
- Estilo de asesoría que me funciona: directa, con UNA acción concreta al final, sin abrirme tareas laterales.

## 2. El cliente

- **AKAHL / Akahl Style:** trajes a medida (bespoke), público de poder adquisitivo, Caracas/Miami.
- **Dueños:** un CEO y un CO-CEO. Mi interlocutora directa es **"ella"** (una de las dueñas). No es técnica; piensa en costos, no en arquitectura.
- La landing `/start-your-transformation/` la hizo **otra persona** (con Elementor, arrastrando componentes) y ella misma admitió que no le gustó mucho. Yo no corrijo ese trabajo: construyo el mío desde cero.

## 3. Sus activos digitales (lo verificado el 10-oct-2026)

### akahlstyle.com — sitio oficial
- **WordPress.** Tema: Hello Elementor.
- Plugins detectados en el código fuente de la landing: Elementor + Pro Elements, MetForm (formularios), Site Kit by Google, Google Tag Manager, Polylang (multilenguaje), **HubSpot tracking** (`js.hs-scripts.com` — puede que los formularios ya le pasen contactos a HubSpot; verificar antes de elegir el servicio de correo masivo).
- **⚠️ Hallazgo clave: el plugin de reservas Amelia YA está instalado y activo, versión 2.4.11** (parece la versión gratuita/Lite de WordPress.org). Sus estilos del widget de Elementor cargan en la landing → alguien dejó la intención de reservas a medio hacer. Mi trabajo es TERMINARLO, no instalarlo.

### dressedbyakahl.com — dominio enlazado a GoHighLevel
- CRM con decenas de funciones que no usan. Solo: **agenda de citas + envío masivo de correos ocasional**. Suscripción ~$97+/mes. Esa suscripción es el ahorro grande y el argumento central ante los dueños.

### La landing /start-your-transformation/
- Página de captación: registro para ganar 1 de 20 cupos de consultas privadas de color/patrón; incluye llamada de 30 min; sección "Book Your AKAHL Experience" con horario ya publicado: **L–V desde 18:00, S–D 10:00–19:00**. Ese horario debe respetarse en la configuración de Amelia.

## 4. La estrategia completa (mi propuesta, aceptada en líneas generales)

- **Fase 0 (ahora):** inventario en wp-admin (¿Amelia Lite o Pro? ¿servicios creados? ¿citas existentes?) + alcance por escrito + depósito.
- **Fase 1 (contratada, $200):** landing custom programada a mano + Amelia 100% funcional.
- **Fase 2 (por cotizar):** exportar contactos de GHL → cancelar GoHighLevel → redirección 301 de dressedbyakahl.com hacia la página de citas → correo masivo con **Brevo** (gratis, ~300 correos/día) o **MailPoet**, siempre vía **WP Mail SMTP** (enviar masivos desde el hosting directo = spam garantizado).
- **Fase 3 (opcional):** interfaz mejorada de gestión de citas enlazada a Amelia; SMS (add-on pagado aparte de Amelia vía Twilio — NO prometido).

### Requisito de correos/recordatorios (lo que usan de GHL y quieren replicar)
- **Cadencia deseada:** al registrarse la cita (confirmación) + recordatorios **3 días antes, 1 día antes, 1 hora antes y 5 minutos antes**.
- **Amelia Pro lo soporta** (notificaciones personalizadas múltiples con desfases configurables — confirmado en WordPress.org y docs oficiales).
- La versión instalada (2.4.11) parece **Lite** → probablemente haya que comprar Pro. La licencia la paga ELLA directamente en su cuenta (costo anual pasante, no lo absorbo yo en los $200).
- **El recordatorio de 5 minutos requiere cron de servidor** golpeando `wp-cron.php` cada minuto (WP-Cron en hosting compartido solo dispara con visitas; sin esto los recordatorios llegan tarde).
- Entregabilidad: WP Mail SMTP + Brevo free cubre recordatorios Y el envío masivo futuro con un solo setup.

## 5. Decisión técnica (OBLIGATORIO que cualquier IA la respete)

1. **Child theme de Hello Elementor** con la plantilla `page-start-your-transformation.php`: HTML/CSS escritos a mano, estilos encolados desde `functions.php`.
2. Se asigna esa plantilla a la página EXISTENTE desde wp-admin (Atributos de página → Plantilla). WordPress deja de renderizar el contenido de Elementor **solo en esa página**, en la **misma URL**. El contenido de Elementor queda intacto en la base de datos → **reversible con un clic** (punto de venta para la clienta).
3. Amelia se embebe con `do_shortcode('[ameliabooking ...]')` dentro de la plantilla. Look del widget: colores desde el panel de Amelia + CSS propio. La estructura del asistente multi-paso de Amelia es fija (reescribirla con su API no vale la pena a este precio).
4. Alternativa de desarrollo: construir en una ruta temporal con `noindex` (ej. `/nueva`) y mover la plantilla a la URL original cuando ella apruebe. Ambas opciones cuestan **$0 en infraestructura**.
5. **Mantener la misma URL** `start-your-transformation` (no perder enlaces indexados; y a la clienta la frase "otro link" le genera ruido — hay que hablarle de "la misma página, mejorada").

## 6. Historial comercial (fechas exactas)

- **10-oct-2026:** propuse a los CEO consolidar todo en WordPress. Definí las 2 prioridades del mensaje: (1) exportar contactos del CRM, (2) terminar la sección de reservas. Descubrí que Amelia ya estaba instalado.
- **10/11-oct-2026:** ella rechazó la idea de "otro link" pensando que costaba dinero → le expliqué que agregar páginas/rutas en WordPress es $0 (misma web, mismo hosting, sin suscripciones; lo único pagado es mi trabajo puntual). Re-anclé la conversación: el ahorro mensual real está en salir de GoHighLevel.
- **11-oct-2026:** regateó hasta **$200 y acepté**. (Mi cotización era $350–450 con piso de $250; acepté por debajo del piso sabiendo que la recuperación viene de las fases siguientes y del mantenimiento. Decisión cerrada.)
- **14-oct-2026 (estado actual):** sin confirmación de que el alcance por escrito haya sido enviado ni del depósito recibido. Es lo pendiente #1.

## 7. Alcance del trato a $200 (a enviar por escrito)

**INCLUYE:**
- Landing 100% programada a mano, responsive, según su referencia de diseño.
- Integración + configuración de Amelia: servicio (consulta de 30 min), horarios (L–V 18:00, S–D 10:00–19:00), correos automáticos de confirmación y recordatorios según la cadencia del punto 4.
- Pruebas y publicación en la misma URL.
- **1 ronda de revisiones + ajustes menores.**

**NO INCLUYE (se cotiza aparte):** páginas adicionales, copywriting nuevo, SMS, campañas de correo masivo, migración de GoHighLevel, mantenimiento mensual, mejoras de interfaz de la Fase 3.

**COSTOS PASANTES (los paga ella directamente):** licencia Pro de Amelia (anual), si la versión instalada es Lite.

**CONDICIÓN:** 50% ($100) de depósito antes de escribir una línea de código.

## 8. Pendientes (checklist con responsables)

**Míos:**
- [ ] Inventario en wp-admin: versión/licencia de Amelia, servicios, citas existentes (~20 min).
- [ ] Enviar el alcance por escrito + pedir el depósito de $100.
- [ ] (Tras el OK y el depósito) construir la landing.
- [ ] (Fase 2) WP Mail SMTP + Brevo, cron de servidor, 301 de dressedbyakahl.com.

**De ella / ellos:**
- [ ] 2–3 cosas que no les gustan de la página actual + 1 página de cualquier marca que les encante (ancla de diseño para evitar otro "no me gustó").
- [ ] Acceso a GoHighLevel para exportar contactos + citas en CSV.
- [ ] Confirmar el depósito de $100.
- [ ] Comprar la licencia Pro de Amelia si hace falta (en su cuenta).

## 9. Riesgos y lecciones ya identificadas

- **"Al gusto de ella" ya falló una vez** (con la persona anterior) → anclar el diseño con referencias ANTES de construir.
- **WP-Cron en hosting compartido** = recordatorios de 5 minutos tardíos sin cron de servidor.
- **Correos desde el hosting directo = spam** → siempre SMTP/ESP.
- **No prometer fases 2–3 dentro de los $200** — el alcance por escrito es la protección.
- **El negocio real no son los $200:** es la puerta a la migración de GHL, el correo masivo, el mantenimiento mensual y futuros proyectos (relación existente de ~$500/mes).

## 10. Cómo usar este contexto (para la IA que lo lee)

Puedes ayudarme con: el código de la landing (plantilla PHP del child theme, HTML/CSS a mano), la configuración de Amelia, redacción de mensajes para la clienta en español claro y no técnico, y decisiones técnicas de las fases 2–3. **No me propongas soluciones con Elementor ni constructores visuales.** No me sugieras renegociar el precio ya acordado ($200).
