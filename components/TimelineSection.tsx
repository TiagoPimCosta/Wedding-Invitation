import { Church, Music, Camera } from "lucide-react";
import { Timeline } from "./ui/timeline";
import SectionWrapper from "./SectionWrapper";

const timelineEvents = [
  {
    time: "15:00",
    title: "Cerimónia",
    description: "Troca de votos na Igreja de São João",
    icon: Church,
  },
  {
    time: "16:30",
    title: "Sessão Fotográfica",
    description: "Momentos especiais nos jardins",
    icon: Camera,
  },
  {
    time: "22:00",
    title: "Primeira Dança",
    description: "O início da nossa festa",
    icon: Music,
  },
];

const TimelineSection = () => {
  return (
    <SectionWrapper
      id="timeline"
      title="Programa do dia"
      subTitle="O programa do nosso grande dia"
      sectionClassname=""
    >
      <div className="max-w-4xl mx-auto flex justify-center relative">
        <Timeline items={timelineEvents} />
      </div>
    </SectionWrapper>
  );
};

export default TimelineSection;
