"use client";

import { cn } from "@/lib/utils";

interface RippleProps {
  className?: string;
  mainCircleSize?: number;
  numCircles?: number;
}

export function Ripple({
  className,
  mainCircleSize = 200,
  numCircles = 8,
}: RippleProps) {
  return (
    <div className={cn("absolute inset-0 flex items-center justify-center overflow-hidden", className)}>
      {Array.from({ length: numCircles }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full border border-[#001f3e]/10"
          style={{
            width: mainCircleSize + i * 80,
            height: mainCircleSize + i * 80,
            opacity: 1 - i * 0.1,
            animation: `ripple 3s ease-out ${i * 0.3}s infinite`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes ripple {
          0% {
            transform: scale(0.8);
            opacity: 0.6;
          }
          50% {
            transform: scale(1);
            opacity: 0.3;
          }
          100% {
            transform: scale(0.8);
            opacity: 0.6;
          }
        }
      `}</style>
    </div>
  );
}
