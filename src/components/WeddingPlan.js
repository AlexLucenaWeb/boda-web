"use client";

import { useEffect, useRef, useState } from "react";

function FadeInOnView({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

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

export default function WeddingPlan(props) {
    const text = {
      es: {
        programa: 'Lo que tenemos preparado',
        ceremonia:'Ceremonia',
        recepcion:'Recepción',
        coctel:'Cóctel',
        banquete: 'Banquete',
        fiesta: 'Fiesta',
        recena: 'Recena',
        patio: 'Patio de luces',
        jardines: 'Jardines',
        salon: 'Salón Principal',
        ermita1: 'Ermita Nuestra Senora',
        ermita2: 'de Gracia'
      },
      hz: {
        programa: 'Program velikog dana',
        ceremonia:'Vjenčanje',
        recepcion:'Zavjeti',
        coctel:'Domjenak',
        banquete: 'Svadbena večera',
        fiesta: 'Zabava',
        recena: 'Noćni zalogaj',
        patio: 'Unutarnje dvorište',
        jardines: 'Vrtovi',
        salon: 'Glavna dvorana',
        ermita1: 'Crkva Gospe od',
        ermita2: 'Milosti'
      },
      // en: {
      //   title: '¡Nos casamos!',
      //   month: 'Abril',
      //   intro: 'Pasaremos el fin de semana juntos para celebrar y compartir este momento tan importante. Os esperamos a todos en',
      //   sp: 'España'
      // }
    }


  const moments = [
    { time: "17.00", title: text[props.lang].ceremonia, place: text[props.lang].ermita1, place2:text[props.lang].ermita2, align: "left" },
    { time: "18.30", title: text[props.lang].recepcion,  place:"Palacete de Belmonte", place2: text[props.lang].patio,align: "right" },
    { time: "19.00", title: text[props.lang].coctel, place:"Palacete de Belmonte", place2: text[props.lang].jardines, align: "left" },
    { time: "20.00", title: text[props.lang].banquete, place:"Palacete de Belmonte", place2: text[props.lang].salon, align: "right" },
    { time: "22.00", title: text[props.lang].fiesta, place:"Palacete de Belmonte",place2: text[props.lang].patio, align: "left" },
    // { time: "00.00", title: "Recena", place:"Palacete de Belmonte", place2: "Patio de luces", align: "right" },
  ];

  return (
    <section data-component="Welcome" className="max-w-full px-4 py-10 bg-crema text-gray-700">
      <h2 className="text-2xl mb-10 text-center text-rosa font-semibold">{text[props.lang].programa}</h2>

      <div className="w-full relative text-xl">
        {/* Línea central */}
        <div className="w-[2px] absolute top-10 bottom-3 left-1/2 -translate-x-1/2 bg-rosa h-full" />

        {moments.map((m, i) => (
          <FadeInOnView key={`${m.time}-${m.title}`} delay={i * 60}>
            <div className={`pb-8 relative ${m.align === "right" ? "text-right" : ""}`}>
              <span className="absolute left-1/2 top-10 h-2 w-2 rounded-full bg-rosa -translate-x-1/2" />
              <p>{m.time}</p>
              <p className="text-2xl font-semibold text-rosa">{m.title}</p>
              <p className="text-sm">{m.place}</p>
              <p className="text-sm">{m.place2}</p>
            </div>
          </FadeInOnView>
        ))}
      </div>
       <FadeInOnView delay={300}>
          <div className={`pb-8 relative text-right`}>
            <span className="absolute left-1/2 top-8 h-2 w-2 rounded-full bg-rosa -translate-x-1/2" />
            <p>00.00</p>
            <p className="text-2xl font-semibold text-rosa">{text[props.lang].recena}</p>
            <p className="text-sm">Palacete de Belmonte</p>
            <p className="text-sm">{text[props.lang].patio}</p>
          </div>
        </FadeInOnView>
    </section>
  );
}