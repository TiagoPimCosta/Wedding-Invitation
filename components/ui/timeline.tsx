import { LucideIcon } from "lucide-react";
import { Badge } from "./badge";

interface TimelineProps {
  items: TimelineItemProps[];
}

function Timeline(props: TimelineProps) {
  const { items = [] } = props;

  return (
    <div className="relative w-fit">
      <div className="absolute left-7 inset-y-8 bg-gray-300 w-0.5 rounded-full" />
      <div className="flex flex-col gap-8 md:gap-12">
        {items.map((event, index) => (
          <TimelineItem
            key={index}
            icon={event.icon}
            time={event.time}
            title={event.title}
            description={event.description}
          />
        ))}
      </div>
    </div>
  );
}

interface TimelineItemProps {
  icon: LucideIcon;
  time: string;
  title: string;
  description?: string;
  index?: number;
}

function TimelineItem(props: TimelineItemProps) {
  const { icon: Icon, time, title, description } = props;

  return (
    <div className="flex gap-4  items-center w-full">
      <div className="flex justify-center relative z-10">
        <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg border-3 border-gold/50 hover:scale-110 transition-transform duration-500">
          <Icon className="w-7 h-7 text-crimson" />
        </div>
      </div>

      <div className="text-leftbg-card/80 backdrop-blur-sm rounded-xl shadow-soft transition-all duration-300 mr-auto">
        <div className="flex gap-2 items-center">
          <Badge
            variant="outline"
            className="rounded bg-teal text-cream h-fit border-teal"
          >
            {time}
          </Badge>
          <h3 className="font-display text-2xl text-primary">{title}</h3>
        </div>
        {description && (
          <p className="font-body text-lg text-muted-foreground">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

export { Timeline, TimelineItem };
