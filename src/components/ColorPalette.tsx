"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Section, FadeIn } from "./Section";
import { cn } from "@/lib/utils";

const primaryColors = [
  {
    name: "Navy",
    hex: "#001e3c",
    rgb: "0, 30, 60",
    usage: "Primary brand color. Headlines, key UI elements, and emphasis.",
  },
  {
    name: "Navy Light",
    hex: "#0a3d62",
    rgb: "10, 61, 98",
    usage: "Secondary navy for hover states and supporting elements.",
  },
  {
    name: "Navy Dark",
    hex: "#001229",
    rgb: "0, 18, 41",
    usage: "Deep navy for high contrast backgrounds.",
  },
];

const neutralColors = [
  {
    name: "Ivory",
    hex: "#f5f3ef",
    rgb: "245, 243, 239",
    usage: "Warm background alternative to white.",
  },
  {
    name: "Sand",
    hex: "#e8e4dc",
    rgb: "232, 228, 220",
    usage: "Subtle backgrounds and dividers.",
  },
  {
    name: "Stone",
    hex: "#c9c4b8",
    rgb: "201, 196, 184",
    usage: "Muted text and disabled states.",
  },
  {
    name: "Slate",
    hex: "#64748b",
    rgb: "100, 116, 139",
    usage: "Secondary text and captions.",
  },
  {
    name: "White",
    hex: "#ffffff",
    rgb: "255, 255, 255",
    usage: "Primary backgrounds and reversed text.",
  },
];

function ColorSwatch({
  color,
  index,
  large = false,
}: {
  color: { name: string; hex: string; rgb: string; usage: string };
  index: number;
  large?: boolean;
}) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(color.hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const isLight = ["#ffffff", "#f5f3ef", "#e8e4dc", "#c9c4b8"].includes(color.hex);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <button
        onClick={copyToClipboard}
        className={cn(
          "w-full rounded-2xl transition-all duration-300 overflow-hidden",
          large ? "aspect-[4/3]" : "aspect-square",
          "hover:scale-[1.02] hover:shadow-lg"
        )}
        style={{ backgroundColor: color.hex }}
      >
        <div
          className={cn(
            "w-full h-full flex items-end p-4 transition-opacity",
            copied ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          )}
        >
          <span
            className={cn(
              "text-xs font-medium",
              isLight ? "text-[#001e3c]" : "text-white"
            )}
          >
            {copied ? "Copied!" : "Copy"}
          </span>
        </div>
      </button>

      <div className="mt-4 space-y-1">
        <h4 className="font-medium text-[#001e3c]">{color.name}</h4>
        <p className="text-xs font-mono text-[#001e3c]/50">{color.hex}</p>
        <p className="text-xs font-mono text-[#001e3c]/30">
          RGB {color.rgb}
        </p>
      </div>

      <p className="mt-3 text-xs text-[#001e3c]/50 leading-relaxed">
        {color.usage}
      </p>
    </motion.div>
  );
}

export function ColorPalette() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section id="colors" variant="default">
      <div ref={ref} className="max-w-6xl mx-auto w-full">
        <FadeIn>
          <span className="inline-block text-xs tracking-[0.3em] uppercase font-medium mb-4 text-[#001e3c]/40">
            Color
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-[#001e3c] mb-6">
            Color System
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-lg text-[#001e3c]/60 font-light max-w-2xl mb-16">
            A restrained palette built on deep navy and warm neutrals.
            Sophisticated, trustworthy, and quietly confident.
          </p>
        </FadeIn>

        {/* Primary Colors */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm tracking-[0.2em] uppercase text-[#001e3c]/40 font-medium mb-8"
          >
            Primary
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-8">
            {primaryColors.map((color, index) => (
              <ColorSwatch
                key={color.hex}
                color={color}
                index={index}
                large={index === 0}
              />
            ))}
          </div>
        </div>

        {/* Neutral Colors */}
        <div>
          <motion.h3
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-sm tracking-[0.2em] uppercase text-[#001e3c]/40 font-medium mb-8"
          >
            Neutrals
          </motion.h3>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {neutralColors.map((color, index) => (
              <ColorSwatch key={color.hex} color={color} index={index} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export function ColorUsage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section variant="navy">
      <div ref={ref} className="max-w-6xl mx-auto w-full">
        <FadeIn>
          <span className="inline-block text-xs tracking-[0.3em] uppercase font-medium mb-4 text-white/40">
            Application
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-16">
            Color in Context
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Light Mode Example */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 overflow-hidden"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#001e3c] rounded" />
                <span className="text-xs tracking-[0.2em] uppercase text-[#001e3c]/40 font-medium">
                  Light Mode
                </span>
              </div>

              <h3 className="text-2xl font-light text-[#001e3c]">
                Intelligence Across Movement
              </h3>

              <p className="text-[#001e3c]/60 font-light text-sm leading-relaxed">
                Before, during, and after every journey. Decisions are made with
                context, intelligence supports drivers and operators in real
                time, and every journey strengthens the system.
              </p>

              <div className="flex gap-3">
                <div className="px-4 py-2 bg-[#001e3c] text-white text-xs rounded-full">
                  Primary Action
                </div>
                <div className="px-4 py-2 border border-[#001e3c]/20 text-[#001e3c] text-xs rounded-full">
                  Secondary
                </div>
              </div>
            </div>
          </motion.div>

          {/* Dark Mode Example */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="bg-[#001229] rounded-2xl p-8 overflow-hidden"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white rounded" />
                <span className="text-xs tracking-[0.2em] uppercase text-white/40 font-medium">
                  Dark Mode
                </span>
              </div>

              <h3 className="text-2xl font-light text-white">
                Intelligence Across Movement
              </h3>

              <p className="text-white/60 font-light text-sm leading-relaxed">
                Before, during, and after every journey. Decisions are made with
                context, intelligence supports drivers and operators in real
                time, and every journey strengthens the system.
              </p>

              <div className="flex gap-3">
                <div className="px-4 py-2 bg-white text-[#001e3c] text-xs rounded-full">
                  Primary Action
                </div>
                <div className="px-4 py-2 border border-white/20 text-white text-xs rounded-full">
                  Secondary
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
