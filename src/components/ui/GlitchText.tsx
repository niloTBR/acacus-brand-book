"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface GlitchTextProps {
  children: string;
  className?: string;
}

export function GlitchText({ children, className }: GlitchTextProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span
      className={cn("relative inline-block cursor-pointer", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="relative z-10">{children}</span>
      {isHovered && (
        <>
          <span
            className="absolute inset-0 text-[#1e4890] z-0"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)",
              transform: "translate(-2px, 0)",
              animation: "glitch-top 0.3s infinite linear alternate-reverse",
            }}
          >
            {children}
          </span>
          <span
            className="absolute inset-0 text-[#7c98b3] z-0"
            style={{
              clipPath: "polygon(0 55%, 100% 55%, 100% 100%, 0 100%)",
              transform: "translate(2px, 0)",
              animation: "glitch-bottom 0.3s infinite linear alternate-reverse",
            }}
          >
            {children}
          </span>
        </>
      )}
      <style jsx>{`
        @keyframes glitch-top {
          0% { transform: translate(-2px, 0); }
          20% { transform: translate(2px, 0); }
          40% { transform: translate(-1px, 0); }
          60% { transform: translate(1px, 0); }
          80% { transform: translate(-2px, 0); }
          100% { transform: translate(2px, 0); }
        }
        @keyframes glitch-bottom {
          0% { transform: translate(2px, 0); }
          20% { transform: translate(-2px, 0); }
          40% { transform: translate(1px, 0); }
          60% { transform: translate(-1px, 0); }
          80% { transform: translate(2px, 0); }
          100% { transform: translate(-2px, 0); }
        }
      `}</style>
    </span>
  );
}
