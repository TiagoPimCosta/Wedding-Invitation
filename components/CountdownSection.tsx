"use client";

import { useState, useEffect } from "react";
import SectionWrapper from "./SectionWrapper";

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
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
      sectionClassname="bg-linear-to-b from-[#1a0f0f] via-[#2d1810] to-[#1a0f0f]"
      overline="A contagem regressiva"
      overlineClassname="text-[#c4a35a] tracking-[0.3em] uppercase font-light"
      title="Falta Pouco Para o Grande Dia"
      titleClassname="text-[#f5e6d3]"
    >
      {/* Countdown Grid */}
      <div
        className="
        grid grid-cols-3 gap-4 max-w-4xl mx-auto
        md:flex md:flex-wrap md:justify-center md:gap-8
      "
      >
        {timeUnits.map((unit, index) => (
          <div
            key={unit.label}
            className={`
              relative group
              ${index === 0 ? "col-span-3 justify-self-center" : "col-span-1"}
            `}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Card */}
            <div className="relative w-24 h-28 md:w-32 md:h-36 rounded-2xl overflow-hidden">
              {/* Glowing border */}
              <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-[#c4a35a] via-[#8b0000] to-[#c4a35a] p-0.5">
                <div className="absolute inset-0.5 rounded-2xl bg-linear-to-br from-[#2d1810] to-[#1a0f0f] backdrop-blur-xl" />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center">
                {/* Number */}
                <span className="text-4xl md:text-5xl font-bold bg-linear-to-b from-[#f5e6d3] to-[#c4a35a] bg-clip-text text-transparent drop-shadow-lg">
                  {String(unit.value).padStart(2, "0")}
                </span>

                {/* Separator line */}
                <div className="w-12 h-px bg-linear-to-r from-transparent via-[#c4a35a] to-transparent my-2" />

                {/* Label */}
                <span className="text-[#c4a35a] text-xs md:text-sm uppercase tracking-wider font-light">
                  {unit.label}
                </span>
              </div>

              {/* Sparkle effect */}
              <div className="absolute top-1.5 right-2 text-[#c4a35a] text-xs animate-sparkle">
                ✦
              </div>
              <div
                className="absolute bottom-1.5 left-2 text-[#c4a35a] text-xs animate-sparkle"
                style={{ animationDelay: "0.3s" }}
              >
                ✦
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default CountdownSection;
