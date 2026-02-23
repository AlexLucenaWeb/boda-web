"use client";

import { useEffect, useRef } from "react";

export default function Palacete() {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const prefersReduced =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (prefersReduced) return;

    let rafId = 0;
    const clamp01 = (v) => Math.max(0, Math.min(1, v));

    const update = () => {
      const section = sectionRef.current;
      const bg = bgRef.current;
      if (!section || !bg) return;

      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      
      const progress = clamp01((vh - rect.top) / (vh + rect.height));

      // 👉 RETRASO del color:
      // - start: cuándo empieza a perder B/N
      // - end: cuándo ya está totalmente en color
      const start = 0.10; // sube esto para retrasar más (0.35–0.6)
      const end = 0.80;   // baja esto si quieres que termine antes (0.75–0.95)

      const t = clamp01((progress - start) / (end - start)); // 0..1 en ese tramo
      const eased = t ** 1.3; // suaviza (opcional)

      // B/N -> color
      bg.style.filter = `grayscale(${(1 - eased) * 100}%)`;

      // Parallax suave (opcional)
      const maxShift = 70;
      const y = (progress - 0.5) * 2 * maxShift;
      bg.style.transform = `translateY(${y}px) scale(1.15)`;
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      data-component="Palacete"
      className="max-w-full flex justify-center"
    >
      <div className="relative h-[500px] min-h-[600px] w-full overflow-hidden flex justify-center">
        <div
          ref={bgRef}
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: "url('/images/palacete01.jpeg')",
            filter: "grayscale(100%)", // 👈 empieza SIEMPRE en B/N
            willChange: "transform, filter",
          }}
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
