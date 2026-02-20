"use client";

import { cn } from "@/lib/utils";

interface ShimmerButtonProps {
  children: React.ReactNode;
  className?: string;
  shimmerColor?: string;
  backgroundColor?: string;
}

export function ShimmerButton({
  children,
  className,
  shimmerColor = "#7c98b3",
  backgroundColor = "#001f3e",
}: ShimmerButtonProps) {
  return (
    <button
      className={cn(
        "group relative overflow-hidden px-6 py-3 font-semibold text-[#f6f8ed] transition-all",
        className
      )}
      style={{ backgroundColor }}
    >
      <div
        className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"
        style={{
          background: `linear-gradient(90deg, transparent, ${shimmerColor}40, transparent)`,
        }}
      />
      <span className="relative z-10">{children}</span>
    </button>
  );
}
