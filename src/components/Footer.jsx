import { Mail } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./BrandIcons.jsx";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import { LINKS } from "../data/site.js";

export default function Footer() {
  const { content } = useLanguage();

  return (
    <footer className="border-t border-slate-800/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 sm:px-6 md:flex-row md:justify-between">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-cyan-400 to-violet-500 text-xs font-bold text-slate-950">
            V
          </span>
          <span className="text-sm font-semibold text-white">Vivid Studio</span>
        </div>

        <div className="flex items-center gap-4 text-slate-500">
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-cyan-400"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href={LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-cyan-400"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${LINKS.email}`}
            aria-label="Email"
            className="transition-colors hover:text-cyan-400"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>

        <p className="text-xs text-slate-600">
          © {new Date().getFullYear()} Vivid Studio. {content.footer.rights}
        </p>
      </div>

      {/* Enlace discreto al Bazar */}
      <div className="mt-6 text-center">
        <a
          href={LINKS.bazar}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] text-slate-700 transition-colors hover:text-slate-500"
        >
          Vivid Studio Bazar
        </a>
      </div>
    </footer>
  );
}
