"use client";

import { useState, useEffect } from "react";

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
    <section className="relative py-20 overflow-hidden bg-linear-to-b from-[#1a0f0f] via-[#2d1810] to-[#1a0f0f]">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Christmas lights effect */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-linear-to-r from-red-500/30 via-green-500/30 to-red-500/30 blur-sm" />
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-linear-to-r from-green-500/30 via-red-500/30 to-green-500/30 blur-sm" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12">
          <span className="text-[#c4a35a] text-lg tracking-[0.3em] uppercase font-light">
            A contagem regressiva
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#f5e6d3] mt-4 mb-2">
            Falta Pouco Para o Grande Dia
          </h2>
          <div className="flex items-center justify-center gap-4 mt-4">
            <span className="text-2xl">✨</span>
            <span className="text-[#c4a35a] text-xl">
              10 de Outubro de 2025
            </span>
            <span className="text-2xl">✨</span>
          </div>
        </div>

        {/* Countdown Grid */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 max-w-4xl mx-auto">
          {timeUnits.map((unit, index) => (
            <div
              key={unit.label}
              className="relative group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card */}
              <div className="relative w-24 h-28 md:w-32 md:h-36 rounded-2xl overflow-hidden">
                {/* Glowing border */}
                <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-[#c4a35a] via-[#8b0000] to-[#c4a35a] p-[2px]">
                  <div className="absolute inset-[2px] rounded-2xl bg-linear-to-br from-[#2d1810] to-[#1a0f0f] backdrop-blur-xl" />
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
                <div className="absolute top-2 right-2 text-[#c4a35a] text-xs animate-sparkle">
                  ✦
                </div>
                <div
                  className="absolute bottom-2 left-2 text-[#c4a35a] text-xs animate-sparkle"
                  style={{ animationDelay: "0.3s" }}
                >
                  ✦
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#c4a35a]/10 blur-xl -z-10" />
            </div>
          ))}
        </div>

        {/* Decorative ribbon */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <div className="h-px w-16 md:w-32 bg-linear-to-r from-transparent to-[#c4a35a]" />
          <span className="text-3xl">🎁</span>
          <span className="text-[#f5e6d3] text-sm md:text-base italic">
            O melhor presente de Natal
          </span>
          <span className="text-3xl">💒</span>
          <div className="h-px w-16 md:w-32 bg-linear-to-l from-transparent to-[#c4a35a]" />
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;
