import { Church, UtensilsCrossed, MapPin, Clock } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import ScrollReveal from "./ScrollReveal";

const venues = [
  {
    type: "Cerimónia",
    time: "15:00",
    name: "Santuário do Bom Jesus do Monte",
    address: "Estrada do Bom Jesus\n4715-056 Tenões",
    mapUrl: "https://maps.app.goo.gl/eEFnCbkGzVHYGPQbA",
    icon: Church,
    accent: "red" as const,
  },
  {
    type: "Recepção",
    time: "19:00",
    name: "Colina do Romão",
    address: "Rua do Moleiro 266\n4775-460 Nine",
    mapUrl: "https://maps.app.goo.gl/GHiS5E1qE9ptnPKRA",
    icon: UtensilsCrossed,
    accent: "green" as const,
  },
];

const VenueSection = () => {
  return (
    <SectionWrapper
      id="venue"
      title="O Local"
      subTitle="Onde celebraremos o nosso amor"
      sectionClassname=""
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
                  venue.accent === "red" ? "bg-red/40" : "bg-green/40"
                }`}
              />

              {/* Time */}
              <p className="font-the-seasons text-[10px] uppercase tracking-[0.4em] text-gold/70 flex items-center gap-1.5">
                <Clock className="w-2.5 h-2.5" strokeWidth={1.5} />
                {venue.time}
              </p>

              {/* Venue type */}
              <h3
                className={`font-parisienne text-5xl md:text-6xl ${
                  venue.accent === "red" ? "text-red" : "text-green"
                }`}
              >
                {venue.type}
              </h3>

              {/* Icon divider */}
              <div className="flex items-center gap-3 w-36">
                <div className="flex-1 h-px bg-gold/20" />
                <venue.icon
                  className={`w-3.5 h-3.5 shrink-0 ${
                    venue.accent === "red" ? "text-red/40" : "text-green/40"
                  }`}
                  strokeWidth={1.5}
                />
                <div className="flex-1 h-px bg-gold/20" />
              </div>

              {/* Venue name & address */}
              <div className="flex flex-col gap-1.5">
                <p className="font-the-seasons text-xl font-semibold text-gray-800">
                  {venue.name}
                </p>
                <p className="font-the-seasons text-sm text-gray-400 whitespace-pre-line leading-loose tracking-wide">
                  {venue.address}
                </p>
              </div>

              {/* Map link */}
              <a
                href={venue.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 text-[10px] font-the-seasons tracking-[0.3em] uppercase transition-colors ${
                  venue.accent === "red"
                    ? "text-red/50 hover:text-red"
                    : "text-green/50 hover:text-green"
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
