"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface BlurTextProps {
  children: string;
  className?: string;
  delay?: number;
}

export function BlurText({ children, className, delay = 0 }: BlurTextProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const letters = children.split("");

  return (
    <span ref={ref} className={cn("inline-flex flex-wrap", className)}>
      {letters.map((letter, i) => (
        <span
          key={i}
          className="transition-all duration-500"
          style={{
            opacity: isVisible ? 1 : 0,
            filter: isVisible ? "blur(0px)" : "blur(10px)",
            transitionDelay: `${i * 30}ms`,
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </span>
  );
}
