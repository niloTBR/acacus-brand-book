"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Section, FadeIn } from "./Section";
import { cn } from "@/lib/utils";

const fontWeights = [
  { weight: 100, name: "Thin", css: "font-thin" },
  { weight: 200, name: "Extra Light", css: "font-extralight" },
  { weight: 300, name: "Light", css: "font-light" },
  { weight: 400, name: "Regular", css: "font-normal" },
  { weight: 500, name: "Medium", css: "font-medium" },
  { weight: 600, name: "Semi Bold", css: "font-semibold" },
  { weight: 700, name: "Bold", css: "font-bold" },
  { weight: 800, name: "Extra Bold", css: "font-extrabold" },
  { weight: 900, name: "Black", css: "font-black" },
];

export function TypographyShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section id="typography" variant="default">
      <div ref={ref} className="max-w-6xl mx-auto w-full">
        <FadeIn>
          <span className="inline-block text-xs tracking-[0.3em] uppercase font-medium mb-4 text-[#001e3c]/40">
            Typography
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-[#001e3c] mb-6">
            Naru Sans
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-lg text-[#001e3c]/60 font-light max-w-2xl mb-16">
            Our primary typeface. Clean, geometric, and versatile. Naru Sans
            provides excellent readability while maintaining a modern,
            intelligent aesthetic that reflects our brand values.
          </p>
        </FadeIn>

        {/* Large Type Display */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24"
        >
          <div className="text-[12vw] md:text-[10vw] lg:text-[8vw] font-extralight leading-none tracking-tight text-[#001e3c] select-none">
            Aa
          </div>
          <div className="mt-4 text-sm text-[#001e3c]/40">
            Naru Sans Extra Light / 200
          </div>
        </motion.div>

        {/* Weight Showcase */}
        <div className="mb-24">
          <FadeIn delay={0.4}>
            <h3 className="text-sm tracking-[0.2em] uppercase text-[#001e3c]/40 font-medium mb-8">
              Weight Range
            </h3>
          </FadeIn>

          <div className="space-y-1">
            {fontWeights.map((font, index) => (
              <motion.div
                key={font.weight}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                className="group flex items-baseline gap-6 py-3 border-b border-[#001e3c]/5 hover:border-[#001e3c]/20 transition-colors"
              >
                <span className="text-xs text-[#001e3c]/40 w-8 tabular-nums">
                  {font.weight}
                </span>
                <span className="text-xs text-[#001e3c]/40 w-24">
                  {font.name}
                </span>
                <span
                  className={cn(
                    "text-2xl md:text-3xl text-[#001e3c] transition-all group-hover:tracking-wide",
                    font.css
                  )}
                  style={{ fontWeight: font.weight }}
                >
                  Intelligence in motion
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Character Set */}
        <div>
          <FadeIn delay={0.6}>
            <h3 className="text-sm tracking-[0.2em] uppercase text-[#001e3c]/40 font-medium mb-8">
              Character Set
            </h3>
          </FadeIn>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="bg-[#f5f3ef] rounded-2xl p-8 md:p-12"
          >
            <div className="text-2xl md:text-3xl font-light text-[#001e3c] leading-relaxed tracking-wide mb-8">
              ABCDEFGHIJKLMNOPQRSTUVWXYZ
            </div>
            <div className="text-2xl md:text-3xl font-light text-[#001e3c] leading-relaxed tracking-wide mb-8">
              abcdefghijklmnopqrstuvwxyz
            </div>
            <div className="text-2xl md:text-3xl font-light text-[#001e3c] leading-relaxed tracking-wide">
              0123456789 !@#$%&*()
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

export function TypographyScale() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scale = [
    { name: "Display", size: "64px / 4rem", sample: "Move Beyond", weight: "font-extralight", className: "text-6xl font-extralight" },
    { name: "Heading 1", size: "48px / 3rem", sample: "Intelligence at Scale", weight: "font-light", className: "text-5xl font-light" },
    { name: "Heading 2", size: "36px / 2.25rem", sample: "Planning. Operations. Safety.", weight: "font-light", className: "text-4xl font-light" },
    { name: "Heading 3", size: "24px / 1.5rem", sample: "Learning from Every Journey", weight: "font-normal", className: "text-2xl font-normal" },
    { name: "Body Large", size: "18px / 1.125rem", sample: "A single intelligent platform that unifies planning, live operations, safety, and analytics.", weight: "font-light", className: "text-lg font-light" },
    { name: "Body", size: "16px / 1rem", sample: "Real intelligence supports decisions, not reports.", weight: "font-normal", className: "text-base font-normal" },
    { name: "Caption", size: "14px / 0.875rem", sample: "Source: Acacus production deployments", weight: "font-normal", className: "text-sm" },
    { name: "Overline", size: "12px / 0.75rem", sample: "OUR STORY", weight: "tracking-[0.2em] uppercase", className: "text-xs tracking-[0.2em] uppercase" },
  ];

  return (
    <Section variant="ivory">
      <div ref={ref} className="max-w-6xl mx-auto w-full">
        <FadeIn>
          <span className="inline-block text-xs tracking-[0.3em] uppercase font-medium mb-4 text-[#001e3c]/40">
            Type Scale
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-[#001e3c] mb-16">
            Hierarchy System
          </h2>
        </FadeIn>

        <div className="space-y-8">
          {scale.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
              className="grid grid-cols-12 gap-4 items-baseline py-4 border-b border-[#001e3c]/10"
            >
              <div className="col-span-3 md:col-span-2">
                <span className="text-xs font-medium text-[#001e3c]/40">
                  {item.name}
                </span>
              </div>
              <div className="col-span-3 md:col-span-2">
                <span className="text-xs text-[#001e3c]/30 font-mono">
                  {item.size}
                </span>
              </div>
              <div className="col-span-12 md:col-span-8 mt-2 md:mt-0">
                <span className={cn("text-[#001e3c]", item.className)}>
                  {item.sample}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
