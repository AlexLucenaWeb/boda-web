"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function HeroImage() {
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

      // Progreso: 0 cuando el hero está arriba, 1 cuando has scrolleado su altura
      const progress = clamp01((-rect.top) / rect.height);

      // 1) Blanco y negro gradual
      bg.style.filter = `grayscale(${progress * 100}%)`;

      // 2) Parallax (opcional)
      const parallax = (-rect.top) * 0.25; // ajusta 0.15–0.35
      bg.style.transform = `translateY(${parallax}px) scale(1.12)`;
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
      className="relative max-w-full flex justify-center h-screen overflow-hidden"
    >
      {/* Capa parallax + grayscale */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center will-change-transform will-change-filter"
        style={{ backgroundImage: "url('/images/heroWeb.png')" }}
        aria-hidden="true"
      />

      {/* Contenido */}
      <div className="relative z-10 w-full">
        <nav className="flex gap-10 text-rosa py-2 w-full justify-between px-6">
          <Link href={'/hz'}>HR</Link>
          <Link href={'/'}>ES</Link>
          {/* <Link href={'/en'}>EN</Link> */}
        </nav>
        <div className="text-rosa pt-32">
          {/* <h1 className="text-6xl font-medium font-vibes text-center">
            Nina <br /> & <br /> Alex
          </h1> */}
           <h1 className="text-7xl font-medium font-alex text-center">
            Nina <br /> & <br /> Alex
          </h1>
        </div>
      </div>
    </section>
  );
}
