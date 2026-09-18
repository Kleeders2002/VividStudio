import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function Timeline() {
  const { content } = useLanguage();
  const { timeline } = content;

  return (
    <section id="timeline" className="border-t border-slate-800/60 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading kicker={timeline.kicker} title={timeline.title} />
        </Reveal>

        <div className="relative mt-12 max-w-3xl">
          {/* Línea vertical */}
          <div
            className="absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-cyan-400/60 via-slate-700 to-transparent"
            aria-hidden="true"
          />

          <motion.ol
            className="space-y-10"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.14 } } }}
          >
            {timeline.items.map((item) => (
              <motion.li
                key={item.title}
                variants={{
                  hidden: { opacity: 0, x: -24 },
                  show: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.6,
                      ease: [0.21, 0.47, 0.32, 0.98],
                    },
                  },
                }}
                className="relative pl-10"
              >
                {/* Punto de la línea */}
                <span
                  className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-cyan-400 bg-slate-950"
                  aria-hidden="true"
                />
                <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
                  {item.period}
                </p>
                <h3 className="mt-1 text-base font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-400">
                  {item.description}
                </p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
