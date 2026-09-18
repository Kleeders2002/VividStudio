/* CONTENIDO EN INGLÉS — idioma por defecto del sitio.
   TODO: Revisa textos y ajusta el copy final a tu gusto. */

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
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Projects", href: "#projects" },
      { label: "Stack", href: "#stack" },
      { label: "FAQ", href: "#faq" },
    ],
    contact: "Contact",
  },

  hero: {
    badge: "Software Engineer · UCAB · Venezuela",
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
    text: "I'm a Software Engineer graduated from UCAB (Universidad Católica Andrés Bello, Venezuela), specialized in full-stack development and IoT systems. My thesis project was a complete IoT monitoring platform — hardware, API, web and mobile app — and it captures how I work: end-to-end projects, built from scratch and ready for production.",
    // TODO: Ajusta los números (value) con tus cifras reales
    stats: [
      { icon: Radio, value: 5, suffix: "+", label: "Years coding", detail: "Hardware · API · Cloud" },
      { icon: Layers, value: 10, suffix: "+", label: "Projects delivered", detail: "Web · Mobile · APIs" },
      { icon: Gauge, value: 100, suffix: "%", label: "Custom-built code", detail: "No templates, no shortcuts" },
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
        result:
          "Recurring revenue up and running: subscribers automatically get access to premium content after payment.",
        tags: ["E-commerce", "Subscriptions", "Payments", "Premium content"],
      },
    ],
  },

  // TODO: Ajusta los períodos/años con tus fechas reales
  timeline: {
    kicker: "Experience",
    title: "My path so far",
    items: [
      {
        period: "Year",
        title: "B.Sc. in Informatics Engineering — UCAB",
        description:
          "Software engineering fundamentals, systems architecture and network infrastructure.",
      },
      {
        period: "Year",
        title: "Thesis: End-to-End IoT Monitoring System",
        description:
          "Designed and built the full stack: NodeMCU firmware, REST API, web dashboard and mobile app.",
      },
      {
        period: "Year",
        title: "Akahl Catalogue — Delivered",
        description:
          "B2B catalog portal for premium fabrics with centralized pricing and search.",
      },
      {
        period: "Year",
        title: "Akahl Club — Launched",
        description:
          "Subscription e-commerce with payment gateway and premium content delivery.",
      },
      {
        period: "Today",
        title: "Vivid Studio",
        description:
          "Helping clients worldwide ship custom software, web platforms and IoT systems.",
      },
    ],
  },

  // TODO: Reemplaza con testimonios reales de clientes cuando los tengas
  // (las fotos son placeholder de Unsplash — usa fotos reales o elimina el campo avatar)
  testimonials: {
    kicker: "Testimonials",
    title: "What clients say",
    items: [
      {
        quote:
          "Working with Vivid Studio was seamless — requirements were understood quickly and everything was delivered ahead of schedule.",
        name: "Client Name",
        role: "Role, Company",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
      },
      {
        quote:
          "The IoT solution worked end-to-end from day one. It's rare to find someone who covers both hardware and software.",
        name: "Client Name",
        role: "Role, Company",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
      },
      {
        quote:
          "Clear communication, clean code and honest timelines. We'll definitely work together again.",
        name: "Client Name",
        role: "Role, Company",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
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
  },

  footer: {
    rights: "All rights reserved.",
  },
};

export default content;
