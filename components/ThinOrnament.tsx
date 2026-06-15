import { cn } from "@/lib/utils";

const ThinOrnament = () => (
  <div className="flex items-center justify-center gap-3 w-full">
    <div className="flex-1 h-px bg-linear-to-r from-transparent to-green/75" />
    <span className={cn("text-xl leading-none text-red/50")}>✦</span>
    <div className="flex-1 h-px bg-linear-to-l from-transparent to-green/75" />
  </div>
);

export default ThinOrnament;
