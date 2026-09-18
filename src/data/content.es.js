/* CONTENIDO EN ESPAÑOL — versión alternativa (toggle en el navbar). */

import {
  Code2,
  Smartphone,
  Cpu,
  Radio,
  Layers,
  Gauge,
  Cloud,
  Server,
  MonitorSmartphone,
  Search,
  FileText,
  Rocket,
  LifeBuoy,
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
    badge: "Ingeniero en Informática · UCAB · Venezuela",
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
    text: "Soy Ingeniero en Informática egresado de la UCAB (Universidad Católica Andrés Bello, Venezuela), especializado en desarrollo full-stack y sistemas IoT. Mi Trabajo de Grado fue una plataforma completa de monitoreo IoT — hardware, API, aplicación web y móvil — y refleja cómo trabajo: proyectos completos de punta a punta, construidos a medida y listos para producción.",
    // TODO: Ajusta los números (value) con tus cifras reales
    stats: [
      { icon: Radio, value: 5, suffix: "+", label: "Años programando", detail: "Hardware · API · Cloud" },
      { icon: Layers, value: 10, suffix: "+", label: "Proyectos entregados", detail: "Web · Mobile · APIs" },
      { icon: Gauge, value: 100, suffix: "%", label: "Código a medida", detail: "Sin plantillas, sin atajos" },
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
        result:
          "Monetización recurrente activa: los suscriptores acceden automáticamente al contenido premium tras su pago.",
        tags: ["E-commerce", "Suscripciones", "Pagos", "Contenido premium"],
      },
    ],
  },

  // TODO: Ajusta los períodos/años con tus fechas reales
  timeline: {
    kicker: "Experiencia",
    title: "Mi camino hasta aquí",
    items: [
      {
        period: "Año",
        title: "Ingeniería en Informática — UCAB",
        description:
          "Fundamentos de ingeniería de software, arquitectura de sistemas e infraestructura de redes.",
      },
      {
        period: "Año",
        title: "Trabajo de Grado: Sistema IoT de Monitoreo End-to-End",
        description:
          "Diseñé y construí el stack completo: firmware NodeMCU, API REST, dashboard web y app móvil.",
      },
      {
        period: "Año",
        title: "Akahl Catalogue — Entregado",
        description:
          "Portal de catálogo B2B para telas premium con precios centralizados y búsqueda.",
      },
      {
        period: "Año",
        title: "Akahl Club — Lanzado",
        description:
          "E-commerce por suscripción con pasarela de pagos y entrega de contenido premium.",
      },
      {
        period: "Hoy",
        title: "Vivid Studio",
        description:
          "Ayudando a clientes de todo el mundo a lanzar software a medida, plataformas web y sistemas IoT.",
      },
    ],
  },

  // TODO: Reemplaza con testimonios reales de clientes cuando los tengas
  // (las fotos son placeholder de Unsplash — usa fotos reales o elimina el campo avatar)
  testimonials: {
    kicker: "Testimonios",
    title: "Lo que dicen los clientes",
    items: [
      {
        quote:
          "Trabajar con Vivid Studio fue impecable — entendió los requerimientos rápidamente y entregó antes de lo previsto.",
        name: "Nombre del cliente",
        role: "Cargo, Empresa",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
      },
      {
        quote:
          "La solución IoT funcionó de punta a punta desde el primer día. Es difícil encontrar alguien que cubra hardware y software.",
        name: "Nombre del cliente",
        role: "Cargo, Empresa",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
      },
      {
        quote:
          "Comunicación clara, código limpio y plazos honestos. Sin duda trabajaremos juntos de nuevo.",
        name: "Nombre del cliente",
        role: "Cargo, Empresa",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
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
        items: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
      },
      {
        icon: Server,
        category: "Backend & DB",
        items: ["Node.js", "Express", "PostgreSQL", "MongoDB"],
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
  },

  footer: {
    rights: "Todos los derechos reservados.",
  },
};

export default content;
