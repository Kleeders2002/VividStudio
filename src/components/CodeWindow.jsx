import { motion } from "framer-motion";

/* Ventana de código decorativa con líneas que aparecen en secuencia
   y cursor parpadeante. El contenido es ilustrativo — edítalo a tu gusto. */

const CODE_LINES = [
  [
    { t: "const ", c: "text-violet-400" },
    { t: "vivid", c: "text-cyan-300" },
    { t: " = ", c: "text-slate-400" },
    { t: "new ", c: "text-violet-400" },
    { t: "Developer", c: "text-sky-300" },
    { t: "({", c: "text-slate-400" },
  ],
  [
    { t: "  name: ", c: "text-slate-400" },
    { t: '"Kleeders"', c: "text-emerald-300" },
    { t: ",", c: "text-slate-400" },
  ],
  [
    { t: "  stack: [", c: "text-slate-400" },
    { t: '"React"', c: "text-emerald-300" },
    { t: ", ", c: "text-slate-400" },
    { t: '"Node.js"', c: "text-emerald-300" },
    { t: ", ", c: "text-slate-400" },
    { t: '"IoT"', c: "text-emerald-300" },
    { t: "],", c: "text-slate-400" },
  ],
  [
    { t: "  focus: ", c: "text-slate-400" },
    { t: '"end-to-end products"', c: "text-emerald-300" },
    { t: ",", c: "text-slate-400" },
  ],
  [{ t: "});", c: "text-slate-400" }],
  [{ t: "", c: "" }],
  [
    { t: "await ", c: "text-violet-400" },
    { t: "vivid.", c: "text-cyan-300" },
    { t: "build", c: "text-sky-300" },
    { t: "(yourIdea);", c: "text-slate-400" },
  ],
];

export default function CodeWindow() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: 2 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 1, delay: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="relative w-full max-w-lg"
    >
      {/* Glow detrás de la ventana */}
      <div
        className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-cyan-500/20 to-violet-600/20 blur-2xl"
        aria-hidden="true"
      />

      <div className="relative overflow-hidden rounded-xl border border-slate-700/80 bg-[#0d1526]/95 shadow-2xl shadow-cyan-500/10 backdrop-blur">
        {/* Barra de título */}
        <div className="flex items-center gap-2 border-b border-slate-800 bg-slate-900/80 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400/90" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/90" />
          <span className="h-3 w-3 rounded-full bg-green-400/90" />
          <span className="ml-3 text-xs font-medium text-slate-500">
            vivid-studio.ts
          </span>
        </div>

        {/* Código */}
        <div className="p-5 font-mono text-[13px] leading-6 sm:text-sm">
          {CODE_LINES.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3 + i * 0.28, duration: 0.35 }}
              className="whitespace-pre"
            >
              {line.map((token, j) => (
                <span key={j} className={token.c}>
                  {token.t}
                </span>
              ))}
              {i === CODE_LINES.length - 1 && (
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="ml-1 inline-block h-4 w-2 translate-y-0.5 bg-cyan-400"
                />
              )}
            </motion.div>
          ))}

          {/* Línea final de "deploy" */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 + CODE_LINES.length * 0.28 + 0.4 }}
            className="mt-3 flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-xs text-emerald-300"
          >
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-400/20 text-[10px]">
              ✓
            </span>
            Deployed to production — 0 errors
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
