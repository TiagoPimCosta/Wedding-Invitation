"use client";

import { useState, useEffect } from "react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import SectionWrapper from "./SectionWrapper";

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const gridRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(gridRef, {
    once: true,
    margin: "0px 0px -60px 0px",
  });

  useEffect(() => {
    const weddingDate = new Date("2026-10-10");

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { value: timeLeft.days, label: "Dias" },
    { value: timeLeft.hours, label: "Horas" },
    { value: timeLeft.minutes, label: "Minutos" },
    { value: timeLeft.seconds, label: "Segundos" },
  ];

  return (
    <SectionWrapper
      sectionClassname="bg-[#0c0906]"
      overline="A contagem regressiva"
      overlineClassname="text-gold/45"
      title="Falta Pouco Para o Grande Dia"
      titleClassname="text-cream"
    >
      <div
        ref={gridRef}
        className="flex flex-wrap justify-center gap-4 md:gap-5"
      >
        {timeUnits.map((unit, index) => (
          <motion.div
            key={unit.label}
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            animate={
              isInView
                ? { opacity: 1, y: 0, scale: 1 }
                : { opacity: 0, y: 30, scale: 0.92 }
            }
            transition={{
              duration: 0.7,
              delay: index * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col items-center"
          >
            <div className="w-28 h-32 md:w-36 md:h-40 border border-gold/18 flex flex-col items-center justify-center gap-2.5 relative overflow-hidden">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-2.5 h-px bg-gold/35" />
              <div className="absolute top-0 left-0 w-px h-2.5 bg-gold/35" />
              <div className="absolute top-0 right-0 w-2.5 h-px bg-gold/35" />
              <div className="absolute top-0 right-0 w-px h-2.5 bg-gold/35" />
              <div className="absolute bottom-0 left-0 w-2.5 h-px bg-gold/35" />
              <div className="absolute bottom-0 left-0 w-px h-2.5 bg-gold/35" />
              <div className="absolute bottom-0 right-0 w-2.5 h-px bg-gold/35" />
              <div className="absolute bottom-0 right-0 w-px h-2.5 bg-gold/35" />

              <motion.span
                className="font-the-seasons text-5xl md:text-6xl font-light text-cream tabular-nums leading-none"
                key={unit.value}
                initial={{ opacity: 0.4, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {String(unit.value).padStart(2, "0")}
              </motion.span>
              <div className="w-5 h-px bg-gold/30" />
              <span className="font-the-seasons text-gold/60 text-[9px] uppercase tracking-[0.4em]">
                {unit.label}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default CountdownSection;
