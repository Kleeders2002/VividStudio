import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import CodeWindow from "./CodeWindow.jsx";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

/* Manchas de luz que se desplazan lentamente (efecto aurora, estilo Linear) */
function AuroraBackground() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <motion.div
        className="absolute left-[8%] top-[-12%] h-[30rem] w-[30rem] rounded-full bg-cyan-500/25 blur-[130px]"
        animate={{
          x: [0, 90, -40, 0],
          y: [0, 50, 90, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[2%] top-[15%] h-[26rem] w-[26rem] rounded-full bg-violet-600/25 blur-[130px]"
        animate={{
          x: [0, -70, 40, 0],
          y: [0, 60, -30, 0],
          scale: [1, 0.9, 1.12, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-[35%] bottom-[-18%] h-[28rem] w-[28rem] rounded-full bg-sky-500/20 blur-[130px]"
        animate={{
          x: [0, 60, -60, 0],
          y: [0, -45, 25, 0],
          scale: [1, 1.08, 0.92, 1],
        }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]" />
    </div>
  );
}

export default function Hero() {
  const { content } = useLanguage();
  const { hero } = content;

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <AuroraBackground />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 py-24 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:gap-10">
        {/* Columna de texto */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-4 py-1.5 text-xs font-medium text-slate-300 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>
            {hero.badge}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-8 text-5xl font-extrabold tracking-tighter text-white sm:text-6xl lg:text-7xl"
          >
            {hero.titleA}{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent [background-size:200%_auto] transition-[background-position] duration-700 [background-position:0%_center] hover:[background-position:100%_center]">
              {hero.titleB}
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-8 max-w-2xl text-xl font-semibold text-slate-100 sm:text-2xl lg:text-3xl"
          >
            {hero.tagline}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            {hero.subtitle}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-12 flex flex-col gap-4 sm:flex-row"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-400 px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition-colors hover:bg-cyan-300"
            >
              {hero.ctaPrimary}
              <ArrowRight className="h-4 w-4" />
            </motion.a>
            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900/60 px-7 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-sm transition-colors hover:border-cyan-400/50 hover:text-cyan-400"
            >
              {hero.ctaSecondary}
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Columna visual: ventana de código */}
        <div className="flex justify-center lg:justify-end">
          <CodeWindow />
        </div>
      </div>
    </section>
  );
}
