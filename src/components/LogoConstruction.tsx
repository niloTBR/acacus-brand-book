"use client";

import { useState, useEffect, useCallback } from "react";
import { RotateCcw } from "lucide-react";

type AnimationState = "idle" | "drawing" | "transitioning" | "complete";

export function LogoConstruction() {
  const [animationState, setAnimationState] = useState<AnimationState>("idle");
  const [showWordmark, setShowWordmark] = useState(false);

  const startAnimation = useCallback(() => {
    setAnimationState("idle");
    setShowWordmark(false);

    requestAnimationFrame(() => {
      setAnimationState("drawing");

      // After drawing phase, transition to reveal
      setTimeout(() => {
        setAnimationState("transitioning");
      }, 2000);

      // Show wordmark with staggered blur
      setTimeout(() => {
        setShowWordmark(true);
      }, 2200);

      // Complete
      setTimeout(() => {
        setAnimationState("complete");
      }, 3000);
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(startAnimation, 500);
    return () => clearTimeout(timer);
  }, [startAnimation]);

  const getLetterStyle = (index: number) => {
    const baseDelay = index * 80;
    return {
      opacity: showWordmark ? 1 : 0,
      filter: showWordmark ? "blur(0px)" : "blur(12px)",
      transform: showWordmark ? "translateX(0)" : "translateX(-10px)",
      transition: `opacity 0.4s ease-out ${baseDelay}ms, filter 0.4s ease-out ${baseDelay}ms, transform 0.4s ease-out ${baseDelay}ms`,
    };
  };

  const wordmark = "ACACUS";

  return (
    <div className="relative bg-[#001e3c] rounded-2xl p-16 overflow-hidden">
      {/* Replay button */}
      <button
        onClick={startAnimation}
        className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
        aria-label="Replay animation"
      >
        <RotateCcw className="w-4 h-4 text-white/60" />
      </button>

      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="flex flex-col items-center justify-center gap-12">
        {/* Animated Icon Construction */}
        <div className="relative w-48 h-40">
          <svg viewBox="0 0 133.33 106.71" className="w-full h-full">
            {/* Construction lines - stroke animation */}
            <g
              className="construction-lines"
              style={{
                stroke: "#ffffff",
                strokeWidth: 0.5,
                fill: "none",
                opacity: animationState === "complete" ? 0 : 0.3,
                transition: "opacity 0.5s ease-out",
              }}
            >
              {/* Triangle guides */}
              <line
                x1="66.71" y1="0" x2="0" y2="106.71"
                style={{
                  strokeDasharray: 200,
                  strokeDashoffset: animationState === "idle" ? 200 : 0,
                  transition: "stroke-dashoffset 1.5s ease-out 0s",
                }}
              />
              <line
                x1="66.71" y1="0" x2="133.33" y2="106.71"
                style={{
                  strokeDasharray: 200,
                  strokeDashoffset: animationState === "idle" ? 200 : 0,
                  transition: "stroke-dashoffset 1.5s ease-out 0.2s",
                }}
              />
              <line
                x1="0" y1="26.7" x2="133.33" y2="26.7"
                style={{
                  strokeDasharray: 150,
                  strokeDashoffset: animationState === "idle" ? 150 : 0,
                  transition: "stroke-dashoffset 1.2s ease-out 0.4s",
                }}
              />
              <line
                x1="0" y1="80" x2="133.33" y2="80"
                style={{
                  strokeDasharray: 150,
                  strokeDashoffset: animationState === "idle" ? 150 : 0,
                  transition: "stroke-dashoffset 1.2s ease-out 0.5s",
                }}
              />
              <line
                x1="93.34" y1="26.7" x2="93.34" y2="106.71"
                style={{
                  strokeDasharray: 100,
                  strokeDashoffset: animationState === "idle" ? 100 : 0,
                  transition: "stroke-dashoffset 1s ease-out 0.6s",
                }}
              />
            </g>

            {/* Main logo shape - fills in after construction */}
            <polygon
              fill="#ffffff"
              points="133.33 66.62 66.71 0 40 26.7 0 26.7 0 106.71 80.01 26.58 93.34 26.68 93.34 80.02 53.32 80.02 80.01 106.71 133.33 106.69 133.33 66.62"
              style={{
                opacity: animationState === "idle" ? 0 : 1,
                clipPath:
                  animationState === "idle" || animationState === "drawing"
                    ? "inset(0 100% 0 0)"
                    : "inset(0 0 0 0)",
                transition:
                  animationState === "drawing"
                    ? "clip-path 1.8s ease-out 0.3s, opacity 0.5s ease-out 0.3s"
                    : "clip-path 0.8s ease-out, opacity 0.3s ease-out",
              }}
            />
          </svg>
        </div>

        {/* Wordmark with staggered blur */}
        <div className="flex items-center gap-1">
          {wordmark.split("").map((letter, index) => (
            <span
              key={index}
              className="text-5xl font-extralight tracking-[0.2em] text-white"
              style={getLetterStyle(index)}
            >
              {letter}
            </span>
          ))}
        </div>

        {/* Tagline */}
        <p
          className="text-white/40 text-sm font-light tracking-widest uppercase"
          style={{
            opacity: showWordmark ? 1 : 0,
            transform: showWordmark ? "translateY(0)" : "translateY(10px)",
            transition: "opacity 0.5s ease-out 500ms, transform 0.5s ease-out 500ms",
          }}
        >
          We help you move beyond
        </p>
      </div>
    </div>
  );
}

export function LogoConstructionMini() {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <svg viewBox="0 0 133.33 106.71" className="w-16">
        <polygon
          fill="#001e3c"
          points="133.33 66.62 66.71 0 40 26.7 0 26.7 0 106.71 80.01 26.58 93.34 26.68 93.34 80.02 53.32 80.02 80.01 106.71 133.33 106.69 133.33 66.62"
          style={{
            clipPath: isAnimating ? "inset(0 0 0 0)" : "inset(0 100% 0 0)",
            transition: "clip-path 1s ease-out",
          }}
        />
      </svg>
    </div>
  );
}
