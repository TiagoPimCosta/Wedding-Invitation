"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -40px 0px" });

  return (
    <footer ref={ref} className="bg-[#0c0906] py-20 px-6 flex flex-col items-center gap-7">
      <motion.div
        className="flex items-center gap-5 w-48 md:w-64"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold/30" />
        <div className="w-1.5 h-1.5 rotate-45 bg-gold/50 flex-shrink-0" />
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold/30" />
      </motion.div>

      <motion.div
        className="flex flex-col items-center gap-2 text-center"
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="font-great-vibes text-5xl md:text-6xl text-cream/90">Tiago & Fátima</p>
        <p className="font-cormorant-garamond text-gold/50 tracking-[0.45em] uppercase text-[10px] font-light">
          10 · Outubro · 2026
        </p>
      </motion.div>

      <motion.div
        className="flex items-center gap-5 w-48 md:w-64"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold/30" />
        <div className="w-1.5 h-1.5 rotate-45 bg-gold/50 flex-shrink-0" />
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold/30" />
      </motion.div>
    </footer>
  );
};

export default Footer;
