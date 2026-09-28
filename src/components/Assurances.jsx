import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import { useSpotlight } from "../hooks/useSpotlight.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";

/* Promesas concretas de trabajo — sustituye a los testimonios hasta
   tener reseñas reales de Upwork. Mismo estilo de tarjeta que Process. */
function AssuranceCard({ item }) {
  const [ref, onMouseMove] = useSpotlight();

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      variants={{
        hidden: { opacity: 0, y: 32 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
        },
      }}
      whileHover={{ y: -6 }}
      className="spotlight-card rounded-2xl border border-slate-800 bg-slate-950/60 p-6 transition-colors hover:border-cyan-400/40"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10">
        <item.icon className="h-5 w-5 text-cyan-400" />
      </div>
      <h3 className="mt-4 text-base font-semibold text-white">{item.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-400">
        {item.text}
      </p>
    </motion.div>
  );
}

export default function Assurances() {
  const { content } = useLanguage();
  const { assurances } = content;

  return (
    <section className="border-t border-slate-800/60 bg-slate-900/30 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            kicker={assurances.kicker}
            title={assurances.title}
            description={assurances.description}
          />
        </Reveal>

        <motion.div
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        >
          {assurances.items.map((item) => (
            <AssuranceCard key={item.title} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
