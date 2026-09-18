import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import { useSpotlight } from "../hooks/useSpotlight.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";

function StepCard({ step, index }) {
  const [ref, onMouseMove] = useSpotlight();

  return (
    <motion.li
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
      className="spotlight-card relative rounded-2xl border border-slate-800 bg-slate-950/60 p-6 transition-colors hover:border-cyan-400/40"
    >
      <span className="absolute right-5 top-4 text-4xl font-extrabold text-slate-800/80">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10">
        <step.icon className="h-5 w-5 text-cyan-400" />
      </div>
      <h3 className="mt-4 text-base font-semibold text-white">{step.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-400">
        {step.description}
      </p>
    </motion.li>
  );
}

export default function Process() {
  const { content } = useLanguage();
  const { process } = content;

  return (
    <section id="process" className="border-t border-slate-800/60 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            kicker={process.kicker}
            title={process.title}
            description={process.description}
          />
        </Reveal>

        <motion.ol
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.13 } } }}
        >
          {process.steps.map((step, i) => (
            <StepCard key={step.title} step={step} index={i} />
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
