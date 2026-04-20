import { cn } from "@/lib/utils";

interface OrnamentDividerProps {
  className?: string;
  colorClass?: string;
}

const OrnamentDivider = ({
  className,
  colorClass = "text-gold",
}: OrnamentDividerProps) => {
  return (
    <div className={cn("flex items-center justify-center w-full", className)}>
      <svg
        viewBox="0 0 320 24"
        className={cn("w-64 h-6", colorClass)}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="0"
          y1="12"
          x2="122"
          y2="12"
          stroke="currentColor"
          strokeWidth="0.75"
        />
        <circle cx="132" cy="12" r="2.5" fill="currentColor" opacity="0.5" />
        <path d="M148 12 L157 4 L166 12 L157 20 Z" fill="currentColor" />
        <circle cx="176" cy="12" r="2.5" fill="currentColor" opacity="0.5" />
        <line
          x1="186"
          y1="12"
          x2="320"
          y2="12"
          stroke="currentColor"
          strokeWidth="0.75"
        />
      </svg>
    </div>
  );
};

export default OrnamentDivider;
