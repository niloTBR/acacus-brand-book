"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface FlipWordsProps {
  words: string[];
  className?: string;
  duration?: number;
}

export function FlipWords({ words, className, duration = 3000 }: FlipWordsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, 300);
    }, duration);

    return () => clearInterval(interval);
  }, [words.length, duration]);

  return (
    <span className={cn("inline-block relative", className)}>
      <span
        className={cn(
          "inline-block transition-all duration-300",
          isAnimating ? "opacity-0 -translate-y-4 blur-sm" : "opacity-100 translate-y-0 blur-0"
        )}
      >
        {words[currentIndex]}
      </span>
    </span>
  );
}
