import { motion } from "framer-motion";
import { Mail, ExternalLink } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./BrandIcons.jsx";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import { LINKS } from "../data/site.js";

export default function Contact() {
  const { content } = useLanguage();
  const { contact } = content;

  return (
    <section id="contact" className="border-t border-slate-800/60 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 px-6 py-16 text-center sm:px-12">
            <motion.div
              className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden="true"
            />

            <div className="relative">
              <SectionHeading
                kicker={contact.kicker}
                title={contact.title}
                description={contact.description}
              />

              <div className="mt-10 flex flex-col items-center gap-5">
                <motion.a
                  href={LINKS.upwork}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-8 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-colors hover:bg-cyan-300"
                >
                  {contact.cta}
                  <ExternalLink className="h-4 w-4" />
                </motion.a>

                <a
                  href={`mailto:${LINKS.email}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-cyan-400"
                >
                  <Mail className="h-4 w-4" />
                  {LINKS.email}
                </a>

                <p className="text-xs text-slate-500">{contact.note}</p>

                <div className="flex items-center gap-4 pt-2">
                  <motion.a
                    href={LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    whileHover={{ y: -4 }}
                    className="rounded-lg border border-slate-800 bg-slate-950/60 p-3 text-slate-400 transition-colors hover:border-cyan-400/40 hover:text-cyan-400"
                  >
                    <LinkedinIcon className="h-5 w-5" />
                  </motion.a>
                  <motion.a
                    href={LINKS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    whileHover={{ y: -4 }}
                    className="rounded-lg border border-slate-800 bg-slate-950/60 p-3 text-slate-400 transition-colors hover:border-cyan-400/40 hover:text-cyan-400"
                  >
                    <GithubIcon className="h-5 w-5" />
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
