"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface HoverBorderGradientProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export function HoverBorderGradient({
  children,
  className,
  containerClassName,
}: HoverBorderGradientProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={cn("relative p-[1px] group", containerClassName)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={cn(
          "absolute inset-0 transition-opacity duration-300",
          hovered ? "opacity-100" : "opacity-0"
        )}
        style={{
          background: "linear-gradient(135deg, #f6f8ed 0%, #7c98b3 50%, #1e4890 75%, #001f3e 100%)",
        }}
      />
      <div
        className={cn(
          "absolute inset-0 transition-opacity duration-300",
          hovered ? "opacity-0" : "opacity-100"
        )}
        style={{
          background: "rgba(0, 31, 62, 0.1)",
        }}
      />
      <div className={cn("relative bg-white z-10", className)}>{children}</div>
    </div>
  );
}
