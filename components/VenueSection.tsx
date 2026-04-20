import { Church, UtensilsCrossed, MapPin, Clock } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import ScrollReveal from "./ScrollReveal";

const venues = [
  {
    type: "Cerimónia",
    time: "15:00",
    name: "Igreja de São João",
    address: "Rua de São João, 45\nLisboa, 1100-000",
    mapUrl: "https://maps.app.goo.gl/eEFnCbkGzVHYGPQbA",
    icon: Church,
    accent: "crimson" as const,
  },
  {
    type: "Recepção",
    time: "19:00",
    name: "Colina do Romão",
    address: "R. do Moleiro 266\nSetúbal, 4775-460",
    mapUrl: "https://maps.app.goo.gl/GHiS5E1qE9ptnPKRA",
    icon: UtensilsCrossed,
    accent: "teal" as const,
  },
];

const VenueSection = () => {
  return (
    <SectionWrapper
      title="O Local"
      subTitle="Onde celebraremos o nosso amor"
      sectionClassname="bg-[#faf8f5]"
      bodyClassname="max-w-xs md:max-w-4xl"
    >
      <div className="grid md:grid-cols-2 gap-5 w-full">
        {venues.map((venue, i) => (
          <ScrollReveal
            key={venue.type}
            delay={i * 150}
            direction={i === 0 ? "left" : "right"}
          >
            <div className="relative bg-white flex flex-col text-center items-center gap-5 p-8 md:p-10 border border-black/5 hover:border-gold/20 transition-all duration-500 group">
              {/* Top accent line */}
              <div
                className={`absolute top-0 left-1/3 right-1/3 h-[1.5px] transition-all duration-500 group-hover:left-1/4 group-hover:right-1/4 ${
                  venue.accent === "crimson" ? "bg-crimson/40" : "bg-teal/40"
                }`}
              />

              {/* Time */}
              <p className="font-cormorant-garamond text-[10px] uppercase tracking-[0.4em] text-gold/70 flex items-center gap-1.5">
                <Clock className="w-2.5 h-2.5" strokeWidth={1.5} />
                {venue.time}
              </p>

              {/* Venue type */}
              <h3
                className={`font-great-vibes text-5xl md:text-6xl ${
                  venue.accent === "crimson" ? "text-crimson" : "text-teal"
                }`}
              >
                {venue.type}
              </h3>

              {/* Icon divider */}
              <div className="flex items-center gap-3 w-36">
                <div className="flex-1 h-px bg-gold/20" />
                <venue.icon
                  className={`w-3.5 h-3.5 shrink-0 ${
                    venue.accent === "crimson" ? "text-crimson/40" : "text-teal/40"
                  }`}
                  strokeWidth={1.5}
                />
                <div className="flex-1 h-px bg-gold/20" />
              </div>

              {/* Venue name & address */}
              <div className="flex flex-col gap-1.5">
                <p className="font-cormorant-garamond text-xl font-semibold text-gray-800">
                  {venue.name}
                </p>
                <p className="font-cormorant-garamond text-sm text-gray-400 whitespace-pre-line leading-loose tracking-wide">
                  {venue.address}
                </p>
              </div>

              {/* Map link */}
              <a
                href={venue.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 text-[10px] font-cormorant-garamond tracking-[0.3em] uppercase transition-colors ${
                  venue.accent === "crimson"
                    ? "text-crimson/50 hover:text-crimson"
                    : "text-teal/50 hover:text-teal"
                }`}
              >
                <MapPin className="w-2.5 h-2.5" strokeWidth={1.5} />
                Ver no Mapa
              </a>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default VenueSection;
