import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import { useSpotlight } from "../hooks/useSpotlight.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";

function TestimonialCard({ t }) {
  const [ref, onMouseMove] = useSpotlight();

  return (
    <motion.figure
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
      className="spotlight-card flex flex-col rounded-2xl border border-slate-800 bg-slate-950/60 p-7 transition-colors hover:border-cyan-400/40"
    >
      <Quote className="h-6 w-6 text-cyan-400/60" />
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-300">
        “{t.quote}”
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-800 pt-4">
        {t.avatar && (
          <img
            src={t.avatar}
            alt={t.name}
            loading="lazy"
            className="h-10 w-10 rounded-full object-cover ring-2 ring-cyan-400/30"
          />
        )}
        <div>
          <p className="text-sm font-semibold text-white">{t.name}</p>
          <p className="text-xs text-slate-500">{t.role}</p>
        </div>
      </figcaption>
    </motion.figure>
  );
}

export default function Testimonials() {
  const { content } = useLanguage();
  const { testimonials } = content;

  return (
    <section
      id="testimonials"
      className="border-t border-slate-800/60 bg-slate-900/30 py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            kicker={testimonials.kicker}
            title={testimonials.title}
          />
        </Reveal>

        <motion.div
          className="mt-12 grid gap-6 md:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.14 } } }}
        >
          {testimonials.items.map((t) => (
            <TestimonialCard key={t.name + t.quote.slice(0, 12)} t={t} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
