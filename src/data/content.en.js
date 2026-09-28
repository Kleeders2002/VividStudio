/* CONTENIDO EN INGLÉS — idioma por defecto del sitio.
   NOTA: la sección de testimonios con placeholders falsos se eliminó
   (mataba la credibilidad). Cuando tengas reseñas reales de Upwork,
   agrégalas de nuevo con citas verificables. */

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
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Projects", href: "#projects" },
      { label: "Stack", href: "#stack" },
      { label: "FAQ", href: "#faq" },
    ],
    contact: "Contact",
  },

  hero: {
    badge: "Informatics Engineer · UCAB · Graduating Dec 2026",
    titleA: "Vivid",
    titleB: "Studio",
    tagline: "Software development, IoT systems & custom applications",
    subtitle:
      "I turn ideas into working products — solid APIs, modern interfaces and real hardware integration. Fast turnarounds, clean code, and solutions built to scale.",
    ctaPrimary: "View projects",
    ctaSecondary: "Get in touch",
  },

  about: {
    kicker: "About me",
    title: "End-to-end engineering, from hardware to interface",
    text: "I'm finishing my B.Sc. in Informatics Engineering at UCAB (Universidad Católica Andrés Bello, Venezuela) — graduating December 2026 — specialized in full-stack development and IoT systems. My thesis was a complete IoT monitoring platform — hardware, API, web and mobile app, all built by me — and it captures how I work: end-to-end projects, built from scratch and ready for production. I've already shipped real client work too: a B2B catalogue portal and a subscription e-commerce platform for a fashion brand.",
    // Cifras honestas y defendibles en una entrevista. No las infles.
    stats: [
      { icon: Layers, value: 3, suffix: "", label: "Products built end-to-end", detail: "Web · Mobile · IoT" },
      { icon: Gauge, value: 100, suffix: "%", label: "Custom-built code", detail: "No templates, no shortcuts" },
      { icon: GraduationCap, value: 2026, suffix: "", label: "B.Sc. Informatics Engineering", detail: "UCAB · IEEE/ACM-aligned" },
    ],
  },

  services: {
    kicker: "Services",
    title: "What I can build for you",
    description:
      "Custom software solutions, from the first sketch to production deployment.",
    items: [
      {
        icon: Code2,
        title: "Full-Stack Web Development",
        description:
          "Complete web applications: modern frontends, secure REST APIs and well-modeled databases. From prototype to production.",
        tags: ["React", "Node.js", "REST APIs"],
      },
      {
        icon: Smartphone,
        title: "Mobile Applications",
        description:
          "Mobile apps connected to your systems: push notifications, real-time sync and fluid, native-feeling experiences.",
        tags: ["Hybrid / Native apps", "Push & Sync"],
      },
      {
        icon: Cpu,
        title: "IoT & Hardware Systems",
        description:
          "Embedded hardware integrated with the cloud: sensors, microcontrollers, telemetry and monitoring dashboards.",
        tags: ["NodeMCU / ESP32", "MQTT", "Telemetry"],
      },
    ],
    complementary: {
      title: "Content & UI Design",
      badge: "Add-on",
      description:
        "A value-add on top of development: polished interfaces, visual identity and content that communicates — never losing focus on the software.",
    },
  },

  process: {
    kicker: "How I work",
    title: "A clear process, no surprises",
    description:
      "You'll always know what's being built, when it will be ready and what it costs.",
    steps: [
      {
        icon: Search,
        title: "Discovery",
        description:
          "We talk about your goals, users and constraints. I define the technical scope with you — no jargon, no surprises.",
      },
      {
        icon: FileText,
        title: "Proposal",
        description:
          "You get a clear plan: architecture, milestones, timeline and a fixed budget before any code is written.",
      },
      {
        icon: Rocket,
        title: "Development",
        description:
          "Iterative builds with regular progress updates. You see real progress every week — not silence.",
      },
      {
        icon: LifeBuoy,
        title: "Delivery & Support",
        description:
          "Deployment, documentation and handoff — plus post-launch support so your product stays healthy.",
      },
    ],
  },

  // Promesas concretas de trabajo (reemplaza a los testimonios falsos
  // hasta tener reseñas reales en Upwork).
  assurances: {
    kicker: "Working with me",
    title: "What you can expect",
    description:
      "No account managers, no black boxes — you work directly with the person who writes the code.",
    items: [
      {
        icon: MessagesSquare,
        title: "Direct communication",
        text: "You always talk to the developer. Clear written updates in English or Spanish, so decisions never wait.",
      },
      {
        icon: Clock,
        title: "UTC-4 · US-friendly hours",
        text: "Based in Venezuela, with strong overlap with US business hours. Replies within hours, not days.",
      },
      {
        icon: Zap,
        title: "Available now",
        text: "Taking on new projects — I can start within days and commit to weekly progress updates.",
      },
      {
        icon: ShieldCheck,
        title: "You own everything",
        text: "Documented code, deployment and full handoff. Your project, your repository, your data — with support after launch.",
      },
    ],
  },

  projects: {
    kicker: "Featured projects",
    title: "Real case studies",
    description:
      "Concrete problems, technical solutions and measurable results.",
    labels: {
      problem: "Problem",
      solution: "Solution / Technologies",
      result: "Result",
    },
    items: [
      {
        title: "IoT Monitoring System",
        subtitle: "Thesis project — UCAB",
        description:
          "A complete monitoring platform: from the microcontroller firmware to the mobile app.",
        problem:
          "The need to monitor physical variables in real time, without an accessible or integrated commercial solution.",
        solution:
          "I designed the full architecture: NodeMCU firmware, a custom REST API, a web dashboard and a mobile app for remote access.",
        result:
          "A working end-to-end system proving I can deliver hardware, backend, web and mobile in a single project.",
        tags: ["NodeMCU", "REST API", "Web App", "Mobile"],
      },
      {
        title: "Akahl Catalogue",
        subtitle: "B2B catalog portal",
        description:
          "An interactive portal to manage prices and premium fabrics for commercial use.",
        problem:
          "The fabric and suit catalog was managed manually — no centralized pricing and no efficient search for the sales team.",
        solution:
          "A web portal with a structured catalog, updatable pricing and filtered search by fabric attributes.",
        result:
          "Centralized price and product lookup, reducing errors and response times for the sales team.",
        tags: ["Web App", "Catalog", "Pricing"],
      },
      {
        title: "Akahl Club",
        subtitle: "Subscription e-commerce",
        description:
          "A subscription platform with payments, user management and premium content (ebooks & video).",
        problem:
          "Selling premium digital content required a reliable payment gateway and per-subscriber access control.",
        solution:
          "Subscription e-commerce with payment integration, user authentication and restricted premium content delivery.",
        // Honesto: aún no lanza. No digas "revenue up and running".
        result:
          "A complete platform ready for launch — subscribers will automatically unlock premium content after payment.",
        tags: ["E-commerce", "Subscriptions", "Payments", "Premium content"],
      },
    ],
  },

  // TODO: ajusta los períodos si no coinciden con tus fechas reales.
  timeline: {
    kicker: "Experience",
    title: "My path so far",
    items: [
      {
        period: "2021 — 2026",
        title: "B.Sc. in Informatics Engineering — UCAB",
        description:
          "Software engineering fundamentals, systems architecture and network infrastructure. IEEE/ACM-aligned curriculum.",
      },
      {
        period: "2026",
        title: "Thesis: End-to-End IoT Monitoring System",
        description:
          "Designed and built the full stack: NodeMCU firmware, REST API, web dashboard and mobile app.",
      },
      {
        period: "2025 — 2026",
        title: "Akahl Catalogue — shipped",
        description:
          "B2B catalog portal for premium fabrics with centralized pricing and search.",
      },
      {
        period: "2026",
        title: "Akahl Club — built & handed off",
        description:
          "Subscription e-commerce with payments, auth and premium content — ready for launch.",
      },
      {
        period: "Today",
        title: "Vivid Studio",
        description:
          "Helping clients worldwide ship custom software, web platforms and IoT systems.",
      },
    ],
  },

  stack: {
    kicker: "Tech stack",
    title: "Tools I build with",
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
    title: "Frequently asked questions",
    items: [
      {
        q: "How do we communicate during the project?",
        a: "In English or Spanish, whichever you prefer. You get regular async progress updates, and my time zone (UTC-4) overlaps well with US working hours.",
      },
      {
        q: "How long does a typical project take?",
        a: "It depends on scope: a landing page takes days, a full web app or MVP usually takes 2–8 weeks. You get a clear timeline estimate before we start.",
      },
      {
        q: "Can you work with my existing codebase?",
        a: "Yes. I can audit, maintain, extend or refactor existing projects — or rebuild from scratch if that's genuinely the better call.",
      },
      {
        q: "What happens after delivery?",
        a: "You get documentation and a full handoff. I also offer post-launch support and iteration plans so your product keeps improving.",
      },
    ],
  },

  contact: {
    kicker: "Contact",
    title: "Have a project in mind?",
    description:
      "Let's talk about how to turn it into a working product. I reply fast and work with clear deliverables.",
    cta: "Hire me on Upwork",
    note: "Usually replies within a few hours — UTC-4, overlapping US business hours.",
  },

  footer: {
    rights: "All rights reserved.",
  },
};

export default content;
