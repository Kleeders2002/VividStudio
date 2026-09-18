import { motion } from "framer-motion";
import { PenTool } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import { useSpotlight } from "../hooks/useSpotlight.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";

function ServiceCard({ service }) {
  const [ref, onMouseMove] = useSpotlight();

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      variants={{
        hidden: { opacity: 0, y: 36 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] },
        },
      }}
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="spotlight-card group rounded-2xl border border-slate-800 bg-slate-950/60 p-7 transition-colors hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/5"
    >
      <motion.div
        className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 transition-colors group-hover:bg-cyan-400/20"
        whileHover={{ rotate: -8, scale: 1.1 }}
      >
        <service.icon className="h-6 w-6 text-cyan-400" />
      </motion.div>
      <h3 className="mt-5 text-lg font-semibold text-white">{service.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-400">
        {service.description}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-xs font-medium text-slate-300 transition-colors group-hover:border-slate-700"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Services() {

  const { content } = useLanguage();
  const { services } = content;

  return (
    <section
      id="services"
      className="border-t border-slate-800/60 bg-slate-900/30 py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            kicker={services.kicker}
            title={services.title}
            description={services.description}
          />
        </Reveal>

        {/* 3 tarjetas principales */}
        <motion.div
          className="mt-12 grid gap-6 md:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.14 } } }}
        >
          {services.items.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </motion.div>

        {/* Tarjeta complementaria */}
        <Reveal delay={0.2}>
          <div className="mt-6 flex flex-col items-start gap-4 rounded-2xl border border-slate-800/70 bg-slate-950/40 p-6 transition-colors hover:border-violet-400/30 sm:flex-row sm:items-center">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-400/10">
              <PenTool className="h-5 w-5 text-violet-400" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-white">
                {services.complementary.title}{" "}
                <span className="ml-1 text-xs font-medium uppercase tracking-wide text-slate-500">
                  {services.complementary.badge}
                </span>
              </h3>
              <p className="mt-1 text-sm text-slate-400">
                {services.complementary.description}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
