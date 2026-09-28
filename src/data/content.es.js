/* CONTENIDO EN ESPAÑOL — versión alternativa (toggle en el navbar). */

import {
  Code2,
  Smartphone,
  Cpu,
  Layers,
  Gauge,
  GraduationCap,
  Cloud,
  Server,
  MonitorSmartphone,
  Search,
  FileText,
  Rocket,
  LifeBuoy,
  MessagesSquare,
  Clock,
  Zap,
  ShieldCheck,
} from "lucide-react";

const content = {
  nav: {
    links: [
      { label: "Sobre mí", href: "#about" },
      { label: "Servicios", href: "#services" },
      { label: "Proyectos", href: "#projects" },
      { label: "Stack", href: "#stack" },
      { label: "FAQ", href: "#faq" },
    ],
    contact: "Contacto",
  },

  hero: {
    badge: "Ing. en Informática · UCAB · Graduación: Dic 2026",
    titleA: "Vivid",
    titleB: "Studio",
    tagline: "Desarrollo de software, sistemas IoT y aplicaciones a medida",
    subtitle:
      "Convierto ideas en productos funcionales: APIs sólidas, interfaces modernas e integración de hardware real. Entregas rápidas, código limpio y soluciones pensadas para escalar.",
    ctaPrimary: "Ver proyectos",
    ctaSecondary: "Contactar",
  },

  about: {
    kicker: "Sobre mí",
    title: "Ingeniería end-to-end, del hardware a la interfaz",
    text: "Estoy culminando la Ingeniería en Informática en la UCAB (Universidad Católica Andrés Bello, Venezuela) — me gradúo en diciembre de 2026 — especializado en desarrollo full-stack y sistemas IoT. Mi Trabajo de Grado fue una plataforma completa de monitoreo IoT — hardware, API, app web y móvil, todo construido por mí — y refleja cómo trabajo: proyectos de punta a punta, hechos a medida y listos para producción. Ya también entregué trabajo real para un cliente: un portal B2B de catálogo y un e-commerce por suscripción para una marca de moda.",
    // Cifras honestas y defendibles en una entrevista. No las infles.
    stats: [
      { icon: Layers, value: 3, suffix: "", label: "Productos construidos de punta a punta", detail: "Web · Mobile · IoT" },
      { icon: Gauge, value: 100, suffix: "%", label: "Código hecho a medida", detail: "Sin plantillas, sin atajos" },
      { icon: GraduationCap, value: 2026, suffix: "", label: "Ing. en Informática", detail: "UCAB · pensum IEEE/ACM" },
    ],
  },

  services: {
    kicker: "Servicios",
    title: "Lo que puedo construir para ti",
    description:
      "Soluciones de software a medida, desde la idea hasta el despliegue en producción.",
    items: [
      {
        icon: Code2,
        title: "Desarrollo Web Full-Stack",
        description:
          "Aplicaciones web completas: frontend moderno, APIs REST seguras y bases de datos bien modeladas. Del prototipo a producción.",
        tags: ["React", "Node.js", "REST APIs"],
      },
      {
        icon: Smartphone,
        title: "Aplicaciones Móviles",
        description:
          "Apps móviles conectadas a tus sistemas: notificaciones push, sincronización en tiempo real y experiencias fluidas.",
        tags: ["Apps híbridas/nativas", "Push & Sync"],
      },
      {
        icon: Cpu,
        title: "Sistemas IoT & Hardware",
        description:
          "Hardware embebido integrado con la nube: sensores, microcontroladores, telemetría y dashboards de monitoreo.",
        tags: ["NodeMCU / ESP32", "MQTT", "Telemetría"],
      },
    ],
    complementary: {
      title: "Diseño de contenido & UI",
      badge: "Complemento",
      description:
        "Valor añadido al desarrollo: interfaces cuidadas, identidad visual y contenido que comunica bien — sin perder el foco en el software.",
    },
  },

  process: {
    kicker: "Cómo trabajo",
    title: "Un proceso claro, sin sorpresas",
    description:
      "Siempre sabrás qué se está construyendo, cuándo estará listo y cuánto cuesta.",
    steps: [
      {
        icon: Search,
        title: "Descubrimiento",
        description:
          "Hablamos de tus objetivos, usuarios y restricciones. Defino el alcance técnico contigo — sin tecnicismos innecesarios.",
      },
      {
        icon: FileText,
        title: "Propuesta",
        description:
          "Recibes un plan claro: arquitectura, hitos, cronograma y presupuesto fijo antes de escribir una línea de código.",
      },
      {
        icon: Rocket,
        title: "Desarrollo",
        description:
          "Construcción iterativa con actualizaciones regulares. Ves avance real cada semana — no silencio.",
      },
      {
        icon: LifeBuoy,
        title: "Entrega & Soporte",
        description:
          "Despliegue, documentación y handoff — además de soporte post-lanzamiento para que tu producto se mantenga saludable.",
      },
    ],
  },

  // Promesas concretas de trabajo (reemplaza a los testimonios falsos
  // hasta tener reseñas reales en Upwork).
  assurances: {
    kicker: "Cómo es trabajar conmigo",
    title: "Lo que puedes esperar",
    description:
      "Sin intermediarios ni cajas negras — trabajas directamente con quien escribe el código.",
    items: [
      {
        icon: MessagesSquare,
        title: "Comunicación directa",
        text: "Siempre hablas con el desarrollador. Actualizaciones claras por escrito, en español o inglés, para que las decisiones no esperen.",
      },
      {
        icon: Clock,
        title: "UTC-4 · Horario compatible",
        text: "Resido en Venezuela, con buen solape con el horario laboral de EE.UU. Respondo en cuestión de horas, no días.",
      },
      {
        icon: Zap,
        title: "Disponible ahora",
        text: "Aceptando nuevos proyectos — puedo empezar en cuestión de días, con actualizaciones semanales de avance.",
      },
      {
        icon: ShieldCheck,
        title: "Todo es tuyo",
        text: "Código documentado, despliegue y handoff completo. Tu proyecto, tu repositorio, tus datos — con soporte después del lanzamiento.",
      },
    ],
  },

  projects: {
    kicker: "Proyectos destacados",
    title: "Casos de estudio reales",
    description: "Problemas concretos, soluciones técnicas y resultados medibles.",
    labels: {
      problem: "Problema",
      solution: "Solución / Tecnologías",
      result: "Resultado",
    },
    items: [
      {
        title: "Sistema IoT de Monitoreo",
        subtitle: "Trabajo de Grado — UCAB",
        description:
          "Plataforma integral de monitoreo: desde el firmware del microcontrolador hasta la app móvil.",
        problem:
          "Necesidad de monitorear variables físicas en tiempo real sin una solución comercial accesible ni integrada.",
        solution:
          "Diseñé la arquitectura completa: firmware en NodeMCU, API REST propia, dashboard web y app móvil para acceso remoto.",
        result:
          "Sistema end-to-end funcional que demuestra que puedo entregar hardware, backend, web y móvil en un solo proyecto.",
        tags: ["NodeMCU", "API REST", "Web App", "Mobile"],
      },
      {
        title: "Akahl Catalogue",
        subtitle: "Portal B2B de catálogo",
        description:
          "Portal interactivo de gestión de precios y telas de alta gama para consulta comercial.",
        problem:
          "El catálogo de telas y trajes se gestionaba manualmente — sin precios centralizados ni búsqueda eficiente para el equipo de ventas.",
        solution:
          "Portal web con catálogo estructurado, gestión de precios actualizable y búsqueda filtrada por atributos de cada tela.",
        result:
          "Consulta centralizada de precios y productos, reduciendo errores y tiempos de respuesta del equipo de ventas.",
        tags: ["Web App", "Catálogo", "Gestión de precios"],
      },
      {
        title: "Akahl Club",
        subtitle: "E-commerce por suscripción",
        description:
          "Plataforma de suscripción con pagos, gestión de usuarios y contenidos premium (ebooks y video).",
        problem:
          "Vender contenidos digitales premium requería una pasarela de pagos confiable y control de acceso por suscriptor.",
        solution:
          "E-commerce con suscripciones, integración de pagos, autenticación de usuarios y entrega restringida de contenido premium.",
        // Honesto: aún no lanza. No digas "monetización activa".
        result:
          "Plataforma completa lista para lanzamiento — los suscriptores desbloquearán automáticamente el contenido premium tras su pago.",
        tags: ["E-commerce", "Suscripciones", "Pagos", "Contenido premium"],
      },
    ],
  },

  // TODO: ajusta los períodos si no coinciden con tus fechas reales.
  timeline: {
    kicker: "Experiencia",
    title: "Mi camino hasta aquí",
    items: [
      {
        period: "2021 — 2026",
        title: "Ingeniería en Informática — UCAB",
        description:
          "Fundamentos de ingeniería de software, arquitectura de sistemas e infraestructura de redes. Pensum alineado con IEEE/ACM.",
      },
      {
        period: "2026",
        title: "Trabajo de Grado: Sistema IoT de Monitoreo End-to-End",
        description:
          "Diseñé y construí el stack completo: firmware NodeMCU, API REST, dashboard web y app móvil.",
      },
      {
        period: "2025 — 2026",
        title: "Akahl Catalogue — en producción",
        description:
          "Portal de catálogo B2B para telas premium con precios centralizados y búsqueda.",
      },
      {
        period: "2026",
        title: "Akahl Club — construido y entregado",
        description:
          "E-commerce por suscripción con pagos, autenticación y contenido premium — listo para lanzamiento.",
      },
      {
        period: "Hoy",
        title: "Vivid Studio",
        description:
          "Ayudando a clientes de todo el mundo a lanzar software a medida, plataformas web y sistemas IoT.",
      },
    ],
  },

  stack: {
    kicker: "Stack tecnológico",
    title: "Herramientas con las que construyo",
    categories: [
      {
        icon: MonitorSmartphone,
        category: "Frontend",
        items: ["React", "Vite", "Tailwind CSS", "JavaScript (ES6+)"],
      },
      {
        icon: Server,
        category: "Backend & DB",
        items: ["Node.js", "Express", "REST APIs", "Prisma"],
      },
      {
        icon: Cloud,
        category: "IoT & Cloud",
        items: ["NodeMCU / ESP32", "MQTT", "Firebase", "Vercel"],
      },
    ],
  },

  faq: {
    kicker: "FAQ",
    title: "Preguntas frecuentes",
    items: [
      {
        q: "¿Cómo nos comunicamos durante el proyecto?",
        a: "En español o inglés, como prefieras. Recibes actualizaciones regulares (asíncronas) y mi zona horaria (UTC-4) se solapa bien con el horario laboral de EE.UU.",
      },
      {
        q: "¿Cuánto tarda un proyecto típico?",
        a: "Depende del alcance: una landing page toma días, una app web completa o MVP suele tomar entre 2 y 8 semanas. Recibes una estimación clara antes de empezar.",
      },
      {
        q: "¿Puedes trabajar con mi código existente?",
        a: "Sí. Puedo auditar, mantener, extender o refactorizar proyectos existentes — o reconstruir desde cero si genuinamente es la mejor decisión.",
      },
      {
        q: "¿Qué pasa después de la entrega?",
        a: "Recibes documentación y handoff completo. También ofrezco soporte post-lanzamiento y planes de iteración para que tu producto siga mejorando.",
      },
    ],
  },

  contact: {
    kicker: "Contacto",
    title: "¿Tienes un proyecto en mente?",
    description:
      "Hablemos de cómo convertirlo en un producto funcional. Respondo rápido y trabajo con entregas claras.",
    cta: "Contrátame en Upwork",
    note: "Suelo responder en cuestión de horas — UTC-4, horario compatible con EE.UU.",
  },

  footer: {
    rights: "Todos los derechos reservados.",
  },
};

export default content;
