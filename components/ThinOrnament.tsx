import { cn } from "@/lib/utils";

const ThinOrnament = ({ light = false }: { light?: boolean }) => (
  <div className="flex items-center justify-center gap-3 w-full">
    <div className="flex-1 h-px bg-linear-to-r from-transparent to-gold/30" />
    <span
      className={cn(
        "text-xl leading-none",
        light ? "text-gold/25" : "text-gold/40",
      )}
    >
      ✦
    </span>
    <div className="flex-1 h-px bg-linear-to-l from-transparent to-gold/30" />
  </div>
);

export default ThinOrnament;
