import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import { useSpotlight } from "../hooks/useSpotlight.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";

/* Avatar con iniciales — se usa cuando el testimonio no tiene foto.
   Evita fotos de stock de terceros (matan la credibilidad). */
const AVATAR_GRADIENTS = [
  "from-cyan-400 to-sky-500",
  "from-violet-400 to-fuchsia-500",
  "from-emerald-400 to-teal-500",
];

function InitialsAvatar({ name, index }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
  return (
    <span
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${AVATAR_GRADIENTS[index % AVATAR_GRADIENTS.length]} text-xs font-bold text-slate-950`}
      aria-hidden="true"
    >
      {initials}
    </span>
  );
}

function TestimonialCard({ t, index }) {
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
        {t.avatar ? (
          <img
            src={t.avatar}
            alt={t.name}
            loading="lazy"
            className="h-10 w-10 rounded-full object-cover ring-2 ring-cyan-400/30"
          />
        ) : (
          <InitialsAvatar name={t.name} index={index} />
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
          {testimonials.items.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
