"use client";

import { cn } from "@/lib/utils";

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-3 gap-4 auto-rows-[minmax(180px,auto)]",
        className
      )}
    >
      {children}
    </div>
  );
}

interface BentoGridItemProps {
  children: React.ReactNode;
  className?: string;
  colSpan?: 1 | 2 | 3;
  rowSpan?: 1 | 2;
}

export function BentoGridItem({
  children,
  className,
  colSpan = 1,
  rowSpan = 1,
}: BentoGridItemProps) {
  const colSpanClass = {
    1: "col-span-1",
    2: "col-span-2",
    3: "col-span-3",
  };

  const rowSpanClass = {
    1: "row-span-1",
    2: "row-span-2",
  };

  return (
    <div
      className={cn(
        "border border-[#001f3e]/10 bg-white p-6 overflow-hidden",
        colSpanClass[colSpan],
        rowSpanClass[rowSpan],
        className
      )}
    >
      {children}
    </div>
  );
}
