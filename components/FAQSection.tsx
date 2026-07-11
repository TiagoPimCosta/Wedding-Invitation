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
    question: "Existe algum dress code para o casamento?",
    answer:
      "Não, não existe nenhum dress code específico mas quanto mais combinarem com as cores de Natal melhor ambiente conseguimos criar. Apenas é proibido vestir branco, porque é o dia mais especial da noiva e vestido preto, pois o casamento é uma celebração com muita felicidade e apenas queremos cores que transmitam isso.",
  },
  {
    question: "O casamento é adequado para crianças?",
    answer:
      "Claro que sim, todos são convidados para se divertirem neste dia tão especial. Não teremos animadora infantil, mas a quinta disponibiliza uma sala com berços para as crianças descansarem e alguns brinquedos para se divertirem.",
  },
  {
    question: "Existe estacionamento disponível na Colina do Romão?",
    answer:
      "Sim, quando entrarem na quinta vão ter pessoas responsáveis a indicar-vos o caminho para o estacionamento.",
  },
  {
    question: "Até quando devo confirmar a minha presença?",
    answer:
      "No máximo deve confirmar um mês antes, ou seja, até dia 10 de Setembro.",
  },
  {
    question: "Existem sugestões de alojamento próximo do espaço?",
    answer:
      "Sim, a própria quinta disponibiliza bungalows com dois quartos cada um. Caso tenham interesse, contactem os noivos para ver os preços e disponibilidade. Além disso, também exitem hotéis relativamente perto da quinta.",
  },
  {
    question: "A que horas começa a cerimónia? E o almoço?",
    answer:
      "A cerimónia inicia na Igreja do Bom Jesus, em Braga, às 11h da manhã. Após este momento, os noivos vão aproveitar o Bom Jesus, que é um lugar muito especial e bonito para tirar fotos. Nesse sentido, apenas iremos deslocar-nos para a quinta Colina do Romão por volta das 14h.",
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
                  <span className="font-the-seasons font-medium text-lg md:text-xl pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pt-1 text-[#1e150d]/45 font-the-seasons text-base md:text-lg leading-relaxed">
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
