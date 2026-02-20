"use client";

import { cn } from "@/lib/utils";

interface MovingBorderProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  duration?: number;
}

export function MovingBorder({
  children,
  className,
  containerClassName,
  duration = 3000,
}: MovingBorderProps) {
  return (
    <div
      className={cn("relative p-[1px] overflow-hidden group", containerClassName)}
      style={{
        background: "linear-gradient(90deg, transparent, transparent)",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `conic-gradient(from 0deg, #f6f8ed, #7c98b3, #1e4890, #001f3e, #f6f8ed)`,
          animation: `spin ${duration}ms linear infinite`,
        }}
      />
      <div className={cn("relative bg-white z-10", className)}>{children}</div>
      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
