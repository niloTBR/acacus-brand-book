"use client";

import { cn } from "@/lib/utils";

interface AuroraProps {
  children?: React.ReactNode;
  className?: string;
}

export function Aurora({ children, className }: AuroraProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -inset-[10px] opacity-50"
          style={{
            background: `
              radial-gradient(ellipse 80% 80% at 50% -20%, #7c98b340, transparent),
              radial-gradient(ellipse 60% 60% at 70% 100%, #1e489040, transparent),
              radial-gradient(ellipse 50% 50% at 20% 60%, #001f3e30, transparent)
            `,
            animation: "aurora 15s ease-in-out infinite alternate",
          }}
        />
      </div>
      <div className="relative z-10">{children}</div>
      <style jsx>{`
        @keyframes aurora {
          0% {
            transform: translate(0%, 0%) rotate(0deg) scale(1);
          }
          33% {
            transform: translate(5%, -5%) rotate(1deg) scale(1.02);
          }
          66% {
            transform: translate(-3%, 3%) rotate(-1deg) scale(0.98);
          }
          100% {
            transform: translate(0%, 0%) rotate(0deg) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
