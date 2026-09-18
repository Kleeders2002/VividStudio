import { useRef } from "react";

/* Devuelve ref + handler para el efecto spotlight (ver .spotlight-card en index.css).
   Úsalo: <div ref={ref} onMouseMove={onMouseMove} className="spotlight-card ..."> */
export function useSpotlight() {
  const ref = useRef(null);

  const onMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--sx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--sy", `${e.clientY - rect.top}px`);
  };

  return [ref, onMouseMove];
}
