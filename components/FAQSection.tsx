import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "When and where is the ceremony?",
    answer:
      "The ceremony will take place on December 25th, 2025, at 4:00 PM. The venue details will be shared in your personal invitation.",
  },
  {
    question: "What is the dress code?",
    answer:
      "We're having a Christmas-themed wedding! We encourage festive formal attire. Think elegant reds, greens, golds, or classic black and white with holiday accessories.",
  },
  {
    question: "Can I bring a plus one?",
    answer:
      "Due to venue capacity, we kindly ask that you only bring guests who are named on your invitation. If you have any questions, please reach out to us directly.",
  },
  {
    question: "Will there be parking available?",
    answer:
      "Yes! Complimentary parking will be available at the venue. Detailed directions and parking information will be included in your formal invitation.",
  },
  {
    question: "What time should I arrive?",
    answer:
      "We recommend arriving 30 minutes before the ceremony begins to allow time for seating. The ceremony will start promptly at 4:00 PM.",
  },
  {
    question: "Will the event be indoors or outdoors?",
    answer:
      "The ceremony and reception will be held indoors in a beautifully decorated Christmas setting, so you'll be warm and cozy!",
  },
  {
    question: "Are children welcome?",
    answer:
      "While we love your little ones, this will be an adults-only celebration. We hope you understand and can arrange childcare for the evening.",
  },
  {
    question: "What food will be served?",
    answer:
      "We'll have a festive dinner with traditional Portuguese cuisine and Christmas favorites. Please let us know of any dietary restrictions when you RSVP.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl text-gold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-cream/80 text-lg">
            Everything you need to know about our special day
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="relative">
          {/* Glowing border effect */}
          <div className="absolute -inset-1 bg-linear-to-r from-burgundy via-gold to-forest rounded-2xl opacity-30 blur-sm"></div>

          <div className="relative bg-forest/30 backdrop-blur-md rounded-2xl border border-gold/20 p-6 md:p-8">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-none bg-burgundy/20 rounded-xl overflow-hidden backdrop-blur-sm"
                >
                  <AccordionTrigger className="px-5 py-4 text-left text-cream hover:text-gold hover:no-underline transition-colors group">
                    <span className="flex items-center gap-3">
                      <span className="font-medium">{faq.question}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-4 text-cream/80 border-t border-gold/10 pt-4 ml-8">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="text-center mt-8">
          <p className="text-cream/60 text-sm">
            Still have questions? Reach out to us directly! 💌
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
