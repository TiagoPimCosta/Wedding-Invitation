"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionWrapper from "./SectionWrapper";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const faqs = [
  {
    question: "Quando e onde é a cerimónia?",
    answer:
      "A cerimónia terá lugar no dia 10 de Outubro de 2026, às 15:00, na Igreja de São João, em Lisboa. A recepção seguir-se-á a partir das 19:00 na Quinta dos Sonhos, em Setúbal.",
  },
  {
    question: "Qual é o dress code?",
    answer:
      "Pedimos traje formal ou semi-formal. Inspirem-se na nossa paleta: tons de bordeaux, dourado, verde-escuro e creme. Por favor, reservem o branco para a noiva!",
  },
  {
    question: "Posso trazer acompanhante?",
    answer:
      "Devido à capacidade do espaço, pedimos que tragam apenas os convidados indicados no convite. Se tiverem alguma dúvida, não hesitem em falar connosco diretamente.",
  },
  {
    question: "Haverá estacionamento disponível?",
    answer:
      "Sim! Estacionamento gratuito estará disponível na Quinta dos Sonhos. Para a cerimónia em Lisboa, recomendamos o parque de estacionamento mais próximo da Igreja de São João.",
  },
  {
    question: "A que horas devo chegar?",
    answer:
      "Recomendamos chegar 20 a 30 minutos antes do início da cerimónia para garantir um lugar sentado. A cerimónia terá início rigorosamente às 15:00.",
  },
];

const FAQSection = () => {
  const listRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(listRef, {
    once: true,
    margin: "0px 0px -60px 0px",
  });

  return (
    <SectionWrapper
      id="faq"
      title="Perguntas Frequentes"
      subTitle="Tudo o que precisam de saber sobre o nosso dia especial"
      sectionClassname=""
      subTitleClassname="text-[#1e150d]/50"
    >
      <div ref={listRef}>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -16 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
              transition={{
                duration: 0.55,
                delay: index * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <AccordionItem
                value={`item-${index}`}
                className="border-none border-b border-gold/10 last:border-b-0"
              >
                <AccordionTrigger className="py-5 text-left text-[#1e150d]/70 hover:text-[#1e150d] hover:no-underline transition-colors duration-300 [&>svg]:text-gold/40 [&>svg]:hover:text-gold/70">
                  <span className="font-the-seasons font-medium text-base md:text-lg pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pt-1 text-[#1e150d]/45 font-the-seasons text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </SectionWrapper>
  );
};

export default FAQSection;
