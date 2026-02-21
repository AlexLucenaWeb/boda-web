"use client";

import { useEffect, useRef, useState } from "react";

function FadeInOnView({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    // if (reduceMotion) {
    //   setIsVisible(true);
    //   return;
    // }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // se anima una vez
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -15% 0px", // dispara un pelín más tarde
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={[
        "transition-all duration-700 ease-out will-change-transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

export default function WeddingPlan() {
  const moments = [
    { time: "17.00", title: "Ceremonia", place: "Ermita Nuestra Senora", place2:"de Gracia", align: "left" },
    { time: "18.30", title: "Recepción",  place:"Palacete de Belmonte", place2: "Patio de luces",align: "right" },
    { time: "19.00", title: "Cóctel", place:"Palacete de Belmonte", place2: "Jardines", align: "left" },
    { time: "20.00", title: "Banquete", place:"Palacete de Belmonte", place2: "Salón Principal", align: "right" },
    { time: "22.00", title: "Fiesta", place:"Palacete de Belmonte",place2: "Patio de luces", align: "left" },
  ];

  return (
    <section data-component="Welcome" className="max-w-full px-4 py-10 bg-fondo text-cocoa">
      <h2 className="text-2xl mb-10">Programa del gran día</h2>

      <div className="w-full relative text-xl">
        {/* Línea central */}
        <div className="w-[2px] absolute top-3 bottom-3 left-1/2 -translate-x-1/2 bg-cocoa h-full" />

        {moments.map((m, i) => (
          <FadeInOnView key={`${m.time}-${m.title}`} delay={i * 60}>
            <div className={`relative ${m.align === "right" ? "text-right" : ""} ${i === 4 ? "pb-2" : "pb-8"}`}>
              <span className="absolute left-1/2 top-2.5 h-2 w-2 rounded-full bg-cocoa -translate-x-1/2" />
              <p>{m.time}</p>
              <p className="text-2xl font-semibold">{m.title}</p>
              <p className="text-sm">{m.place}</p>
              <p className="text-sm">{m.place2}</p>
            </div>
          </FadeInOnView>
        ))}
      </div>
        <FadeInOnView delay={300}>
          <div className="pb-8 relative text-right">
              <span className="absolute left-1/2 top-2.5 h-2 w-2 rounded-full bg-cocoa -translate-x-1/2" />
              <p>00.00</p>
              <p className="text-2xl font-semibold">Recena</p>
              <p className="text-sm">Palacete de Belmonte</p>
              <p className="text-sm">Patio de luces</p>
          </div>
        </FadeInOnView>
    </section>
  );
}