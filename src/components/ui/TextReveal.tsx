"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  children: string;
  className?: string;
}

export function TextReveal({ children, className }: TextRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <span
        className={cn(
          "inline-block transition-all duration-700 ease-out",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        )}
      >
        {children}
      </span>
    </div>
  );
}

export function TextRevealByWord({ children, className }: TextRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const words = children.split(" ");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={cn("flex flex-wrap", className)}>
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden mr-2">
          <span
            className="inline-block transition-all duration-500 ease-out"
            style={{
              transform: isVisible ? "translateY(0)" : "translateY(100%)",
              opacity: isVisible ? 1 : 0,
              transitionDelay: `${i * 50}ms`,
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </div>
  );
}
