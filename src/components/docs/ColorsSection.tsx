"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { DocSection, DocHeader, DocSubsection, DocCard, DocGrid, DocDivider } from "../DocLayout";
import { cn } from "@/lib/utils";

const primaryColors = [
  { name: "Navy", hex: "#001e3c", rgb: "0, 30, 60", usage: "Primary brand color. Headlines, key UI elements, emphasis." },
  { name: "Navy Light", hex: "#0a3d62", rgb: "10, 61, 98", usage: "Hover states, secondary navy elements." },
  { name: "Navy Dark", hex: "#001229", rgb: "0, 18, 41", usage: "Deep backgrounds, high contrast areas." },
];

const neutralColors = [
  { name: "Ivory", hex: "#f5f3ef", rgb: "245, 243, 239", usage: "Warm background alternative." },
  { name: "Sand", hex: "#e8e4dc", rgb: "232, 228, 220", usage: "Subtle backgrounds, dividers." },
  { name: "Stone", hex: "#c9c4b8", rgb: "201, 196, 184", usage: "Disabled states, muted elements." },
  { name: "Slate", hex: "#64748b", rgb: "100, 116, 139", usage: "Secondary text, captions." },
  { name: "White", hex: "#ffffff", rgb: "255, 255, 255", usage: "Primary backgrounds." },
];

function ColorSwatch({ color, large = false }: { color: typeof primaryColors[0]; large?: boolean }) {
  const [copied, setCopied] = useState(false);
  const isLight = ["#ffffff", "#f5f3ef", "#e8e4dc", "#c9c4b8"].includes(color.hex);

  const copy = () => {
    navigator.clipboard.writeText(color.hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="group">
      <button
        onClick={copy}
        className={cn(
          "w-full rounded-xl transition-all duration-200 relative overflow-hidden",
          large ? "h-32" : "h-24",
          "hover:scale-[1.02] hover:shadow-md",
          isLight && "border border-[#001e3c]/5"
        )}
        style={{ backgroundColor: color.hex }}
      >
        <span
          className={cn(
            "absolute bottom-2 right-2 text-[10px] font-medium opacity-0 group-hover:opacity-100 transition-opacity",
            isLight ? "text-[#001e3c]/60" : "text-white/60"
          )}
        >
          {copied ? "Copied" : "Copy"}
        </span>
      </button>
      <div className="mt-3">
        <p className="text-sm font-medium text-[#001e3c]">{color.name}</p>
        <p className="text-[10px] font-mono text-[#001e3c]/40 mt-0.5">{color.hex}</p>
        <p className="text-[10px] font-mono text-[#001e3c]/30">RGB {color.rgb}</p>
      </div>
    </div>
  );
}

export function ColorsSection() {
  return (
    <DocSection id="colors">
      <DocHeader
        label="Color"
        title="Color System"
        description="A restrained palette built on deep navy and warm neutrals. Sophisticated, trustworthy, and quietly confident."
      />

      {/* Primary Colors */}
      <DocSubsection
        id="primary-colors"
        title="Primary"
        description="Navy is the foundation of our visual identity."
      >
        <DocGrid cols={3}>
          {primaryColors.map((color, index) => (
            <motion.div
              key={color.hex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <ColorSwatch color={color} large={index === 0} />
              <p className="text-[10px] text-[#001e3c]/40 mt-2">{color.usage}</p>
            </motion.div>
          ))}
        </DocGrid>
      </DocSubsection>

      <DocDivider />

      {/* Neutrals */}
      <DocSubsection
        id="neutrals"
        title="Neutrals"
        description="Warm neutrals complement the navy and provide flexibility."
      >
        <div className="grid grid-cols-5 gap-4">
          {neutralColors.map((color, index) => (
            <motion.div
              key={color.hex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <ColorSwatch color={color} />
            </motion.div>
          ))}
        </div>
      </DocSubsection>

      <DocDivider />

      {/* Usage */}
      <DocSubsection
        id="color-usage"
        title="Application"
        description="How colors work together in context."
      >
        <DocGrid cols={2}>
          {/* Light Mode */}
          <DocCard padding="none" className="overflow-hidden">
            <div className="p-4 border-b border-[#001e3c]/5">
              <span className="text-[10px] tracking-[0.1em] uppercase text-[#001e3c]/40 font-medium">
                Light Mode
              </span>
            </div>
            <div className="p-6">
              <h4 className="text-lg font-light text-[#001e3c] mb-2">
                Intelligence Across Movement
              </h4>
              <p className="text-sm text-[#001e3c]/50 font-light mb-4">
                Decisions are made with context, intelligence supports operators in real time.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1.5 bg-[#001e3c] text-white text-xs rounded-full">
                  Primary
                </span>
                <span className="px-3 py-1.5 border border-[#001e3c]/20 text-[#001e3c] text-xs rounded-full">
                  Secondary
                </span>
              </div>
            </div>
          </DocCard>

          {/* Dark Mode */}
          <DocCard padding="none" className="overflow-hidden bg-[#001e3c]">
            <div className="p-4 border-b border-white/10">
              <span className="text-[10px] tracking-[0.1em] uppercase text-white/40 font-medium">
                Dark Mode
              </span>
            </div>
            <div className="p-6">
              <h4 className="text-lg font-light text-white mb-2">
                Intelligence Across Movement
              </h4>
              <p className="text-sm text-white/50 font-light mb-4">
                Decisions are made with context, intelligence supports operators in real time.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1.5 bg-white text-[#001e3c] text-xs rounded-full">
                  Primary
                </span>
                <span className="px-3 py-1.5 border border-white/20 text-white text-xs rounded-full">
                  Secondary
                </span>
              </div>
            </div>
          </DocCard>
        </DocGrid>

        {/* Contrast Guidelines */}
        <div className="mt-8 p-6 bg-[#f5f3ef] rounded-xl">
          <h4 className="text-sm font-medium text-[#001e3c] mb-3">Accessibility</h4>
          <div className="grid grid-cols-3 gap-6 text-xs">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-4 h-4 rounded bg-[#001e3c]" />
                <span className="w-4 h-4 rounded bg-white border border-[#001e3c]/10" />
              </div>
              <p className="text-[#001e3c]/60">Navy on White: 16.8:1</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-4 h-4 rounded bg-[#001e3c]" />
                <span className="w-4 h-4 rounded bg-[#f5f3ef]" />
              </div>
              <p className="text-[#001e3c]/60">Navy on Ivory: 14.2:1</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-4 h-4 rounded bg-white border border-[#001e3c]/10" />
                <span className="w-4 h-4 rounded bg-[#001e3c]" />
              </div>
              <p className="text-[#001e3c]/60">White on Navy: 16.8:1</p>
            </div>
          </div>
        </div>
      </DocSubsection>
    </DocSection>
  );
}
