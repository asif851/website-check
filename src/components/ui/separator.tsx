"use client";

import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from "@/lib/utils";

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      {...props}
    />
  )
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };

type SlashSeparatorProps = {
  count?: number; // Number of slashes
  startOffset?: number; // Starting offset position
  step?: number; // Incremental step for spacing between each slash
  lineLength?: number; // Length of each slash
  orientation?: "horizontal" | "vertical";
  className?: string; // Additional custom styling for the parent container
};

export const SlashSeparator: React.FC<SlashSeparatorProps> = ({
  count = 24,
  startOffset = 10,
  step = 7,
  lineLength = 18,
  orientation = "horizontal",
  className = "",
}) => {
  return (
    <div
      className={cn(orientation === "horizontal" ? "" : "rotate-90", className)}
    >
      <svg
        className={cn(
          "text-gray-300 ",
          orientation === "horizontal" ? "w-auto h-4 lg:mx-0" : ""
        )}
        viewBox={`0 0 ${startOffset + step * (count - 1) + lineLength} 16`}
        fill="none"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        {Array.from({ length: count }).map((_, index) => {
          const offset = startOffset + index * step; // Calculate the offset dynamically
          return (
            <line
              key={index}
              y1="-0.5"
              x2={lineLength}
              y2="-0.5"
              transform={`matrix(-0.5547 0.83205 0.83205 0.5547 ${offset} 1)`}
            />
          );
        })}
      </svg>
    </div>
  );
};
