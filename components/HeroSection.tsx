"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
  const { scrollY } = useScroll();

  // As user scrolls: card shrinks, rounds, and the dark bg shows through
  const scale = useTransform(scrollY, [0, 650], [1, 0.82]);
  const borderRadius = useTransform(scrollY, [0, 650], [0, 22]);

  const scrollToRsvp = () => {
    document.getElementById("rsvp")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    // Sticky container — sits behind sections that follow (z-0)
    <div className="sticky top-0 h-500 z-0 bg-[#0c0906] overflow-hidden">
      <motion.div
        style={{ scale, borderRadius }}
        className="h-full bg-white flex flex-col overflow-hidden origin-top"
      >
        {/* ── Minimal Nav ─────────────────────────────────────────── */}
        <motion.nav
          className="flex items-center justify-between px-8 md:px-14 pt-7 pb-4 shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <p className="font-cormorant-garamond text-sm tracking-[0.45em] uppercase text-gray-700 select-none">
            T & F
          </p>
          <motion.button
            onClick={scrollToRsvp}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="font-cormorant-garamond text-[10px] tracking-[0.3em] uppercase px-6 py-2.5 border border-gray-300 rounded-full text-gray-500 hover:border-gray-500 hover:text-gray-700 transition-colors duration-300 cursor-pointer"
          >
            RSVP
          </motion.button>
        </motion.nav>

        {/* ── Hero Body ─────────────────────────────────────────────── */}
        <div className="flex-1 flex flex-col justify-center items-center px-8 md:px-14 py-6 gap-10 md:gap-12">
          {/* Two square photos */}
          <div className="w-full max-w-88 md:max-w-lg flex gap-3">
            <motion.div
              className="flex-1 aspect-square overflow-hidden"
              initial={{ opacity: 0, x: -28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Image
                src="/heroBackground.jpg"
                alt="Tiago & Fátima"
                width={600}
                height={600}
                className="w-full h-full object-cover"
                priority
              />
            </motion.div>
            <motion.div
              className="flex-1 aspect-square overflow-hidden"
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Replace src with a second photo: e.g. "/heroBackground2.jpg" */}
              <Image
                src="/heroBackground.jpg"
                alt="Tiago & Fátima"
                width={600}
                height={600}
                className="w-full h-full object-cover object-right brightness-50 contrast-[1.1]"
                priority
              />
            </motion.div>
          </div>

          {/* Tagline + names */}
          <div className="w-full max-w-88 md:max-w-lg flex flex-col gap-5">
            <motion.p
              className="font-cormorant-garamond text-[1.65rem] md:text-[2.1rem] text-gray-800 leading-snug"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.75,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              estão <em>cordialmente</em> convidados
              <br />
              para a aventura que é...
            </motion.p>

            <motion.div
              className="flex flex-col gap-1.5"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 1.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p className="font-great-vibes text-5xl md:text-6xl text-gray-900">
                Tiago & Fátima
              </p>
              <p className="font-cormorant-garamond text-[10px] tracking-[0.45em] uppercase text-gray-400">
                10 · Outubro · 2026
              </p>
            </motion.div>

            {/* Linked rings */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.7,
                delay: 1.45,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <svg
                width="34"
                height="20"
                viewBox="0 0 34 20"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  cx="10"
                  cy="10"
                  r="8"
                  stroke="#b91c1c"
                  strokeWidth="1.5"
                />
                <circle
                  cx="24"
                  cy="10"
                  r="8"
                  stroke="#b91c1c"
                  strokeWidth="1.5"
                />
              </svg>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
