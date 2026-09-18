import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";
import { MonitorSmartphone } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import { PROJECT_IMAGES } from "../data/site.js";

/* Tilt 3D: la imagen se inclina siguiendo el cursor, con suavizado de resorte */
function TiltFrame({ children }) {
  const ref = useRef(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const spring = { stiffness: 150, damping: 20 };
  const rotateX = useSpring(useTransform(my, [0, 1], [7, -7]), spring);
  const rotateY = useSpring(useTransform(mx, [0, 1], [-7, 7]), spring);

  const onMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };
  const onMouseLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <div className="absolute inset-0" style={{ perspective: 1200 }}>
      <motion.div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="h-full w-full"
      >
        {children}
      </motion.div>
    </div>
  );
}

function ProjectImage({ project }) {
  if (project.image) {
    return (
      <TiltFrame>
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
      </TiltFrame>
    );
  }
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-slate-600">
      <MonitorSmartphone className="h-10 w-10" />
      <p className="text-xs font-medium uppercase tracking-widest">
        Mockup / Screenshot
      </p>
    </div>
  );
}

function ProjectCard({ project, index }) {
  const { content } = useLanguage();
  const labels = content.projects.labels;

  return (
    <Reveal delay={(index % 2) * 0.1}>
      <article className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/5">
        <div
          className={`grid gap-0 lg:grid-cols-2 ${
            index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* Imagen / mockup */}
          <div className="relative min-h-[16rem] bg-gradient-to-br from-slate-800/80 to-slate-900 lg:min-h-[20rem]">
            <ProjectImage project={project} />
          </div>

          {/* Contenido estructurado */}
          <div className="p-7 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
              {project.subtitle}
            </p>
            <h3 className="mt-2 text-2xl font-bold text-white">
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-slate-400">{project.description}</p>

            <dl className="mt-6 space-y-4 text-sm">
              <div>
                <dt className="font-semibold text-white">{labels.problem}</dt>
                <dd className="mt-1 leading-relaxed text-slate-400">
                  {project.problem}
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-white">{labels.solution}</dt>
                <dd className="mt-1 leading-relaxed text-slate-400">
                  {project.solution}
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-white">{labels.result}</dt>
                <dd className="mt-1 leading-relaxed text-slate-400">
                  {project.result}
                </dd>
              </div>
            </dl>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-700/70 bg-slate-800/60 px-3 py-1 text-xs font-medium text-cyan-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  const { content } = useLanguage();
  const { projects } = content;

  return (
    <section id="projects" className="border-t border-slate-800/60 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            kicker={projects.kicker}
            title={projects.title}
            description={projects.description}
          />
        </Reveal>

        <div className="mt-12 space-y-8">
          {projects.items.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={{ ...project, image: PROJECT_IMAGES[index] }}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
