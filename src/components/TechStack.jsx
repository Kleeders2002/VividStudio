import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import { useLanguage } from "../i18n/LanguageContext.jsx";

/* Cinta infinita: se duplica la lista para el loop perfecto */
function Marquee({ items }) {
  return (
    <div className="relative mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
      <div className="animate-marquee flex w-max gap-4 py-1">
        {[...items, ...items].map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="whitespace-nowrap rounded-full border border-slate-800 bg-slate-950/60 px-5 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  const { content } = useLanguage();
  const { stack } = content;

  return (
    <section
      id="stack"
      className="border-t border-slate-800/60 bg-slate-900/30 py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading kicker={stack.kicker} title={stack.title} />
        </Reveal>

        <Reveal delay={0.15}>
          <Marquee items={stack.categories.flatMap((g) => g.items)} />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {stack.categories.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.12}>
              <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6 transition-colors hover:border-cyan-400/30">
                <div className="flex items-center gap-3">
                  <group.icon className="h-5 w-5 text-cyan-400" />
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
                    {group.category}
                  </h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-slate-800 bg-slate-900 px-3 py-1.5 text-sm font-medium text-slate-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
