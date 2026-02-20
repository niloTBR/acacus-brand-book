"use client";

import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}

export function GradientText({ children, className, animate = false }: GradientTextProps) {
  return (
    <span
      className={cn(
        "inline-block bg-clip-text text-transparent",
        animate && "animate-gradient bg-[length:200%_auto]",
        className
      )}
      style={{
        backgroundImage: "linear-gradient(90deg, #001f3e 0%, #1e4890 25%, #7c98b3 50%, #1e4890 75%, #001f3e 100%)",
      }}
    >
      {children}
      {animate && (
        <style jsx>{`
          @keyframes gradient {
            0% { background-position: 0% center; }
            100% { background-position: 200% center; }
          }
          .animate-gradient {
            animation: gradient 4s linear infinite;
          }
        `}</style>
      )}
    </span>
  );
}
