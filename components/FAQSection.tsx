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
  {
    question: "As crianças são bem-vindas?",
    answer:
      "Amamos os vossos pequenos, mas esta será uma celebração apenas para adultos. Agradecemos a vossa compreensão e esperamos que consigam arranjar quem tome conta deles nesse dia especial.",
  },
  {
    question: "Que tipo de refeição será servida?",
    answer:
      "Teremos um jantar de gala com cozinha portuguesa tradicional e vinhos regionais seleccionados. Por favor, indiquem eventuais restrições alimentares no formulário de confirmação de presença.",
  },
  {
    question: "Até quando devo confirmar a presença?",
    answer:
      "Pedimos que confirme a sua presença até ao dia 10 de Julho de 2026, para que possamos assegurar toda a logística do evento. Use o formulário de confirmação mais abaixo nesta página.",
  },
];

const FAQSection = () => {
  const listRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(listRef, { once: true, margin: "0px 0px -60px 0px" });

  return (
    <SectionWrapper
      title="Perguntas Frequentes"
      subTitle="Tudo o que precisam de saber sobre o nosso dia especial"
      footer="Ainda têm dúvidas? Falem connosco! 💌"
      sectionClassname="bg-[#0c0906]"
      titleClassname="text-cream"
      subTitleClassname="text-cream/45"
      footerClassname="text-cream/35"
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
                <AccordionTrigger className="py-5 text-left text-cream/70 hover:text-cream hover:no-underline transition-colors duration-300 [&>svg]:text-gold/40 [&>svg]:hover:text-gold/70">
                  <span className="font-the-seasons font-medium text-base md:text-lg pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pt-1 text-cream/40 font-the-seasons text-base leading-relaxed">
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
