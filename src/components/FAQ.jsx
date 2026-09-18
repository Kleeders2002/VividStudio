import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import { useLanguage } from "../i18n/LanguageContext.jsx";

function FAQItem({ item, open, onToggle }) {
  return (
    <div
      className={`overflow-hidden rounded-xl border transition-colors ${
        open
          ? "border-cyan-400/40 bg-slate-950/80"
          : "border-slate-800 bg-slate-950/60 hover:border-slate-700"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-sm font-semibold text-white sm:text-base">
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0 text-cyan-400"
        >
          <ChevronDown className="h-5 w-5" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <p className="px-6 pb-5 text-sm leading-relaxed text-slate-400">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const { content } = useLanguage();
  const { faq } = content;
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="border-t border-slate-800/60 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading kicker={faq.kicker} title={faq.title} />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 max-w-3xl space-y-4">
            {faq.items.map((item, i) => (
              <FAQItem
                key={item.q}
                item={item}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
