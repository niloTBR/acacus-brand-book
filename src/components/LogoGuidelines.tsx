"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Section, FadeIn } from "./Section";
import { AnimatedLogo, AnimatedLogoIcon, AnimatedLogoFull } from "./AnimatedLogo";
import { cn } from "@/lib/utils";

export function LogoConstruction() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showGrid, setShowGrid] = useState(true);

  return (
    <Section id="logo" variant="default">
      <div ref={ref} className="max-w-6xl mx-auto w-full">
        <FadeIn>
          <span className="inline-block text-xs tracking-[0.3em] uppercase font-medium mb-4 text-[#001e3c]/40">
            Logo
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-[#001e3c] mb-6">
            Mark Construction
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-lg text-[#001e3c]/60 font-light max-w-2xl mb-16">
            The Acacus mark is built from a system of geometric triangles,
            representing the interconnected nature of intelligence, movement,
            and progress.
          </p>
        </FadeIn>

        {/* Logo Construction Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={isInView ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#f5f3ef] rounded-2xl p-12 flex items-center justify-center relative"
          >
            <AnimatedLogo showConstruction={showGrid} size="xl" />

            {/* Grid Toggle */}
            <button
              onClick={() => setShowGrid(!showGrid)}
              className={cn(
                "absolute bottom-4 right-4 text-xs tracking-wide px-3 py-1.5 rounded-full transition-all duration-300",
                showGrid
                  ? "bg-[#001e3c] text-white"
                  : "bg-[#001e3c]/10 text-[#001e3c]"
              )}
            >
              {showGrid ? "Hide Grid" : "Show Grid"}
            </button>
          </motion.div>

          <div className="space-y-8">
            <FadeIn delay={0.4} direction="left">
              <h3 className="text-sm tracking-[0.2em] uppercase text-[#001e3c]/40 font-medium mb-4">
                Geometric Foundation
              </h3>
              <p className="text-[#001e3c]/70 font-light leading-relaxed">
                Six interconnected triangles form the abstract representation of
                movement, data flow, and intelligent systems. Each shape builds
                upon the others, symbolizing how knowledge compounds over time.
              </p>
            </FadeIn>

            <FadeIn delay={0.5} direction="left">
              <h3 className="text-sm tracking-[0.2em] uppercase text-[#001e3c]/40 font-medium mb-4">
                Visual Metaphor
              </h3>
              <p className="text-[#001e3c]/70 font-light leading-relaxed">
                The mark suggests both an abstract arrow pointing forward and
                the ancient cave markings that inspired our name. Progress
                through intelligence. Movement through understanding.
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function LogoVariations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const variations = [
    {
      title: "Primary Mark",
      description: "Full logo with wordmark",
      bg: "bg-white",
      variant: "navy" as const,
    },
    {
      title: "Reversed",
      description: "For dark backgrounds",
      bg: "bg-[#001e3c]",
      variant: "white" as const,
    },
  ];

  return (
    <Section variant="ivory">
      <div ref={ref} className="max-w-6xl mx-auto w-full">
        <FadeIn>
          <span className="inline-block text-xs tracking-[0.3em] uppercase font-medium mb-4 text-[#001e3c]/40">
            Logo Variations
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-[#001e3c] mb-16">
            Lockup Variations
          </h2>
        </FadeIn>

        {/* Full Logo Variations */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {variations.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.15 }}
              className="space-y-4"
            >
              <div
                className={cn(
                  "rounded-2xl p-12 flex items-center justify-center min-h-[200px]",
                  item.bg,
                  item.bg === "bg-white" && "border border-[#001e3c]/10"
                )}
              >
                <AnimatedLogoFull variant={item.variant} />
              </div>
              <div>
                <h3 className="font-medium text-[#001e3c]">{item.title}</h3>
                <p className="text-sm text-[#001e3c]/50">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Icon Only Variations */}
        <FadeIn delay={0.4}>
          <h3 className="text-sm tracking-[0.2em] uppercase text-[#001e3c]/40 font-medium mb-8">
            Icon Mark
          </h3>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { bg: "bg-white border border-[#001e3c]/10", label: "Light" },
            { bg: "bg-[#f5f3ef]", label: "Ivory" },
            { bg: "bg-[#001e3c]", label: "Navy", dark: true },
            { bg: "bg-[#0a3d62]", label: "Navy Light", dark: true },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9, filter: "blur(8px)" }}
              animate={isInView ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="space-y-3"
            >
              <div
                className={cn(
                  "rounded-xl p-8 flex items-center justify-center aspect-square",
                  item.bg
                )}
              >
                <svg viewBox="0 0 133.33 106.71" width="64" height="52">
                  <polygon
                    fill={item.dark ? "#ffffff" : "#001e3c"}
                    points="133.33 66.62 66.71 0 40 26.7 0 26.7 0 106.71 80.01 26.58 93.34 26.68 93.34 80.02 53.32 80.02 80.01 106.71 133.33 106.69 133.33 66.62"
                  />
                </svg>
              </div>
              <p className="text-xs text-[#001e3c]/50 text-center">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function LogoClearSpace() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section variant="default">
      <div ref={ref} className="max-w-6xl mx-auto w-full">
        <FadeIn>
          <span className="inline-block text-xs tracking-[0.3em] uppercase font-medium mb-4 text-[#001e3c]/40">
            Usage Guidelines
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-[#001e3c] mb-16">
            Clear Space
          </h2>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="bg-[#f5f3ef] rounded-2xl p-12 relative">
              {/* Clear space visualization */}
              <div className="border-2 border-dashed border-[#001e3c]/20 p-8 rounded-lg">
                <AnimatedLogoFull />
              </div>

              {/* Measurement indicators */}
              <div className="absolute top-8 left-8 w-4 h-4 border-l-2 border-t-2 border-[#001e3c]/30" />
              <div className="absolute top-8 right-8 w-4 h-4 border-r-2 border-t-2 border-[#001e3c]/30" />
              <div className="absolute bottom-8 left-8 w-4 h-4 border-l-2 border-b-2 border-[#001e3c]/30" />
              <div className="absolute bottom-8 right-8 w-4 h-4 border-r-2 border-b-2 border-[#001e3c]/30" />
            </div>
          </motion.div>

          <div className="space-y-8">
            <FadeIn delay={0.3} direction="left">
              <h3 className="text-sm tracking-[0.2em] uppercase text-[#001e3c]/40 font-medium mb-4">
                Minimum Spacing
              </h3>
              <p className="text-[#001e3c]/70 font-light leading-relaxed">
                Maintain clear space around the logo equal to the height of the
                icon mark. This ensures the logo maintains its visual impact and
                legibility across all applications.
              </p>
            </FadeIn>

            <FadeIn delay={0.4} direction="left">
              <h3 className="text-sm tracking-[0.2em] uppercase text-[#001e3c]/40 font-medium mb-4">
                Minimum Size
              </h3>
              <p className="text-[#001e3c]/70 font-light leading-relaxed mb-4">
                To preserve legibility, observe these minimum dimensions:
              </p>
              <ul className="space-y-2 text-sm text-[#001e3c]/60">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#001e3c]/20" />
                  Full logo: 120px width (digital) / 30mm (print)
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#001e3c]/20" />
                  Icon only: 24px width (digital) / 8mm (print)
                </li>
              </ul>
            </FadeIn>
          </div>
        </div>
      </div>
    </Section>
  );
}
