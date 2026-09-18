import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext.jsx";

function LanguageToggle({ compact = false }) {
  const { lang, toggle } = useLanguage();
  return (
    <button
      type="button"
      onClick={toggle}
      className={`inline-flex items-center gap-1.5 rounded-lg border border-slate-700 font-semibold text-slate-300 transition-colors hover:border-cyan-400/50 hover:text-cyan-400 ${
        compact ? "px-2.5 py-1.5 text-xs" : "px-3 py-2 text-xs"
      }`}
      aria-label="Switch language"
    >
      <Globe className="h-3.5 w-3.5" />
      {lang === "en" ? "ES" : "EN"}
    </button>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { content, lang } = useLanguage();
  const links = lang === "en" ? NAV_LINKS_EN : NAV_LINKS_ES;

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur-md"
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#inicio" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 text-sm font-bold text-slate-950">
            V
          </span>
          <span className="text-lg font-bold tracking-tight text-white">
            Vivid<span className="text-cyan-400">Studio</span>
          </span>
        </a>

        {/* Navegación desktop */}
        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-cyan-400"
            >
              {link.label}
            </a>
          ))}
          <LanguageToggle />
          <a
            href="#contacto"
            className="rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-300"
          >
            {content.nav.contact}
          </a>
        </div>

        {/* Botón menú móvil */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle compact />
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 text-slate-300 transition-colors hover:bg-slate-800"
            aria-label="Abrir menú"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Menú móvil */}
      {open && (
        <div className="border-t border-slate-800/60 bg-slate-950/95 px-4 pb-4 pt-2 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-800 hover:text-cyan-400"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-lg bg-cyan-400 px-3 py-2.5 text-center text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-300"
          >
            {content.nav.contact}
          </a>
        </div>
      )}
    </motion.header>
  );
}

/* Enlaces de navegación (etiquetas por idioma) */
const NAV_LINKS_EN = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "FAQ", href: "#faq" },
];

const NAV_LINKS_ES = [
  { label: "Sobre mí", href: "#about" },
  { label: "Servicios", href: "#services" },
  { label: "Proyectos", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "FAQ", href: "#faq" },
];
