"use client";

import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from "@/lib/utils";

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <div
      className={cn(
        "flex items-center justify-center w-full",
        orientation === "vertical" ? "flex-col h-full" : "",
        className
      )}
    >
      <SeparatorPrimitive.Root
        data-slot="separator"
        decorative={decorative}
        orientation={orientation}
        className={cn(
          "shrink-0 flex-1 from-transparent to-[#c4a35a]",
          orientation === "vertical"
            ? "w-px bg-linear-to-b"
            : "h-px bg-linear-to-r"
        )}
        {...props}
      />
      <span
        className={orientation === "vertical" ? "my-2" : "mx-2"}
        aria-hidden="true"
      >
        {/* You can replace this with any icon. Example: "&" as a placeholder */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          style={{ color: "#c4a35a" }}
        >
          <circle
            cx="12"
            cy="12"
            r="6"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </span>
      <SeparatorPrimitive.Root
        data-slot="separator"
        decorative={decorative}
        orientation={orientation}
        className={cn(
          "shrink-0 flex-1 from-transparent to-[#c4a35a]",
          orientation === "vertical"
            ? "w-px bg-linear-to-t"
            : "h-px bg-linear-to-l"
        )}
        {...props}
      />
    </div>
  );
}

export { Separator };
