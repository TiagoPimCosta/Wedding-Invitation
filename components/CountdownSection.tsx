"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });

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
    <section
      id="countdown"
      ref={ref}
      className="px-6 text-center overflow-hidden flex flex-col items-center justify-center"
    >
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="font-the-seasons italic text-[#5a4030]/70 text-xl md:text-2xl mb-4"
      >
        so please join us...
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="font-the-seasons text-red text-6xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-bold leading-none mb-12 tracking-tight"
      >
        10 outubro 2026
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
        className="flex items-start justify-center gap-8 md:gap-12"
      >
        {timeUnits.map((unit) => (
          <div key={unit.label} className="flex flex-col items-center">
            <motion.span
              key={unit.value}
              initial={{ opacity: 0.5, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="font-the-seasons text-green text-4xl md:text-5xl tabular-nums leading-none"
            >
              {String(unit.value).padStart(2, "0")}
            </motion.span>
            <span className="text-green/55 text-[8px] uppercase tracking-[0.25em] mt-2">
              {unit.label}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default CountdownSection;
