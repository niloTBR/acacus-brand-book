"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface NumberTickerProps {
  value: number;
  className?: string;
  duration?: number;
  delay?: number;
}

export function NumberTicker({
  value,
  className,
  duration = 2000,
  delay = 0,
}: NumberTickerProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const timeout = setTimeout(() => {
      const startTime = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        setDisplayValue(Math.floor(value * easeOut));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timeout);
  }, [hasStarted, value, duration, delay]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {displayValue.toLocaleString()}
    </span>
  );
}
