"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import SectionWrapper from "./SectionWrapper";
import ScrollReveal from "./ScrollReveal";

const RSVPSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    attending: "",
    guests: "1",
    dietary: "",
    song: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full px-0 py-3 bg-transparent border-b border-gray-200 text-gray-800 placeholder-gray-300 font-the-seasons text-lg focus:outline-none focus:border-gold/70 transition-colors duration-300";

  const labelClass =
    "text-gray-400 text-[9px] uppercase tracking-[0.45em] font-the-seasons font-semibold";

  return (
    <SectionWrapper
      title="Confirmação de Presença"
      subTitle="Por favor confirme a sua presença até 10 de Julho de 2026"
      sectionClassname="bg-[#faf8f5]"
      bodyClassname="max-w-xs md:max-w-xl"
    >
      <ScrollReveal>
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="thanks"
              className="text-center py-16 flex flex-col items-center gap-6"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-4 w-32">
                <div className="flex-1 h-px bg-gold/30" />
                <div className="w-1.5 h-1.5 rotate-45 bg-gold/50" />
                <div className="flex-1 h-px bg-gold/30" />
              </div>
              <h3 className="font-parisienne text-6xl text-crimson">Obrigado!</h3>
              <p className="font-the-seasons text-lg text-gray-500 max-w-sm leading-relaxed">
                A vossa presença será o nosso maior presente. Até breve!
              </p>
              <div className="flex items-center gap-4 w-32">
                <div className="flex-1 h-px bg-gold/30" />
                <div className="w-1.5 h-1.5 rotate-45 bg-gold/50" />
                <div className="flex-1 h-px bg-gold/30" />
              </div>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="flex flex-col gap-7"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label className={labelClass}>Nome Completo</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="O seu nome"
                  className={inputClass}
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className={labelClass}>Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="email@exemplo.com"
                  className={inputClass}
                />
              </div>

              {/* Attending */}
              <div className="flex flex-col gap-3">
                <label className={labelClass}>Vai Estar Presente?</label>
                <div className="grid grid-cols-2 gap-3">
                  {(
                    [
                      { label: "Sim, com certeza!", value: "yes" },
                      { label: "Infelizmente não", value: "no" },
                    ] as const
                  ).map((opt) => (
                    <motion.label
                      key={opt.value}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`flex items-center justify-center px-4 py-3.5 border cursor-pointer transition-all duration-300 font-the-seasons text-base text-center ${
                        form.attending === opt.value
                          ? "border-gold/60 bg-gold/5 text-gray-800"
                          : "border-gray-200 text-gray-400 hover:border-gray-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name="attending"
                        value={opt.value}
                        checked={form.attending === opt.value}
                        onChange={handleChange}
                        className="hidden"
                      />
                      {opt.label}
                    </motion.label>
                  ))}
                </div>
              </div>

              {/* Number of guests */}
              <AnimatePresence>
                {form.attending === "yes" && (
                  <motion.div
                    className="flex flex-col gap-2"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <label className={labelClass}>Número de Convidados</label>
                    <select
                      name="guests"
                      value={form.guests}
                      onChange={handleChange}
                      className={inputClass + " cursor-pointer appearance-none"}
                    >
                      {[1, 2, 3, 4].map((n) => (
                        <option key={n} value={n} className="text-gray-800">
                          {n} {n === 1 ? "pessoa" : "pessoas"}
                        </option>
                      ))}
                    </select>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Dietary */}
              <div className="flex flex-col gap-2">
                <label className={labelClass}>Restrições Alimentares</label>
                <input
                  type="text"
                  name="dietary"
                  value={form.dietary}
                  onChange={handleChange}
                  placeholder="Vegetariano, alergias, etc. (opcional)"
                  className={inputClass}
                />
              </div>

              {/* Song */}
              <div className="flex flex-col gap-2">
                <label className={labelClass}>Sugestão de Música</label>
                <input
                  type="text"
                  name="song"
                  value={form.song}
                  onChange={handleChange}
                  placeholder="Qual música não pode faltar? (opcional)"
                  className={inputClass}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.01, backgroundColor: "rgba(87,13,22,0.88)" }}
                whileTap={{ scale: 0.98 }}
                className="mt-2 w-full py-4 bg-crimson text-cream font-the-seasons text-sm tracking-[0.35em] uppercase cursor-pointer transition-colors duration-300"
              >
                Confirmar Presença
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </ScrollReveal>
    </SectionWrapper>
  );
};

export default RSVPSection;
