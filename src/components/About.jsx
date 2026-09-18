import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import CountUp from "./CountUp.jsx";
import { useSpotlight } from "../hooks/useSpotlight.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";

function StatCard({ stat }) {
  const [ref, onMouseMove] = useSpotlight();

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      variants={{
        hidden: { opacity: 0, y: 24 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
        },
      }}
      whileHover={{ y: -6 }}
      className="spotlight-card rounded-xl border border-slate-800 bg-slate-900/60 p-5 transition-colors hover:border-cyan-400/40"
    >
      <stat.icon className="h-5 w-5 text-cyan-400" />
      <p className="mt-3 text-3xl font-extrabold tracking-tight text-white">
        <CountUp value={stat.value} suffix={stat.suffix} />
      </p>
      <p className="mt-1 text-sm font-semibold text-slate-200">{stat.label}</p>
      <p className="mt-0.5 text-xs text-slate-500">{stat.detail}</p>
    </motion.div>
  );
}

export default function About() {
  const { content } = useLanguage();
  const { about } = content;

  return (
    <section id="about" className="border-t border-slate-800/60 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading kicker={about.kicker} title={about.title} />
        </Reveal>

        <div className="mt-10 grid gap-12 lg:grid-cols-5">
          <Reveal className="lg:col-span-3" delay={0.1}>
            <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
              {about.text}
            </p>
          </Reveal>

          <motion.div
            className="grid gap-4 sm:grid-cols-3 lg:col-span-2"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12 } },
            }}
          >
            {about.stats.map((stat) => (
              <StatCard key={stat.label} stat={stat} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
