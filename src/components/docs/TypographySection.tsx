"use client";

import { motion } from "framer-motion";
import { DocSection, DocHeader, DocSubsection, DocCard, DocGrid, DocDivider } from "../DocLayout";
import { cn } from "@/lib/utils";

const weights = [
  { weight: 100, name: "Thin" },
  { weight: 200, name: "Extra Light" },
  { weight: 300, name: "Light" },
  { weight: 400, name: "Regular" },
  { weight: 500, name: "Medium" },
  { weight: 600, name: "Semi Bold" },
  { weight: 700, name: "Bold" },
  { weight: 800, name: "Extra Bold" },
  { weight: 900, name: "Black" },
];

const typeScale = [
  { name: "Display", size: "64px", lineHeight: "1.1", weight: 200, sample: "Move Beyond" },
  { name: "H1", size: "48px", lineHeight: "1.15", weight: 300, sample: "Intelligence at Scale" },
  { name: "H2", size: "36px", lineHeight: "1.2", weight: 300, sample: "Planning. Operations. Safety." },
  { name: "H3", size: "24px", lineHeight: "1.3", weight: 400, sample: "Learning from Every Journey" },
  { name: "Body Large", size: "18px", lineHeight: "1.6", weight: 300, sample: "A single intelligent platform that unifies planning, live operations, safety, and analytics." },
  { name: "Body", size: "16px", lineHeight: "1.6", weight: 400, sample: "Real intelligence supports decisions, not reports." },
  { name: "Caption", size: "14px", lineHeight: "1.5", weight: 400, sample: "Source: Acacus production deployments" },
  { name: "Overline", size: "12px", lineHeight: "1.5", weight: 500, sample: "OUR STORY", tracking: "0.15em", uppercase: true },
];

export function TypographySection() {
  return (
    <DocSection id="typography">
      <DocHeader
        label="Typography"
        title="Naru Sans"
        description="Our primary typeface. Clean, geometric, and versatile. Naru Sans provides excellent readability while maintaining a modern, intelligent aesthetic."
      />

      {/* Typeface */}
      <DocSubsection
        id="typeface"
        title="Typeface"
        description="Naru Sans is used across all Acacus communications."
      >
        <DocCard className="mb-8">
          <div className="text-[120px] font-extralight text-[#001e3c] leading-none tracking-tight mb-4">
            Aa
          </div>
          <p className="text-xs text-[#001e3c]/40">Naru Sans Extra Light</p>
        </DocCard>

        {/* Character Set */}
        <DocCard className="bg-[#f5f3ef]">
          <div className="space-y-4 text-[#001e3c]">
            <p className="text-xl font-light tracking-wide">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
            <p className="text-xl font-light tracking-wide">abcdefghijklmnopqrstuvwxyz</p>
            <p className="text-xl font-light tracking-wide">0123456789 !@#$%&*()</p>
          </div>
        </DocCard>

        {/* Weights */}
        <div className="mt-8">
          <h4 className="text-sm font-medium text-[#001e3c] mb-4">Weight Range</h4>
          <div className="space-y-1">
            {weights.map((w, index) => (
              <motion.div
                key={w.weight}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: index * 0.03 }}
                className="flex items-baseline gap-4 py-2 border-b border-[#001e3c]/5 hover:bg-[#001e3c]/[0.01] transition-colors px-2 -mx-2 rounded"
              >
                <span className="text-[10px] text-[#001e3c]/30 font-mono w-8">{w.weight}</span>
                <span className="text-xs text-[#001e3c]/40 w-24">{w.name}</span>
                <span
                  className="text-lg text-[#001e3c]"
                  style={{ fontWeight: w.weight }}
                >
                  Intelligence in motion
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </DocSubsection>

      <DocDivider />

      {/* Scale */}
      <DocSubsection
        id="scale"
        title="Type Scale"
        description="A consistent hierarchy for clear communication."
      >
        <div className="space-y-6">
          {typeScale.map((type, index) => (
            <motion.div
              key={type.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="border-b border-[#001e3c]/5 pb-6"
            >
              <div className="flex items-baseline gap-4 mb-2">
                <span className="text-xs font-medium text-[#001e3c] w-24">{type.name}</span>
                <span className="text-[10px] text-[#001e3c]/30 font-mono">
                  {type.size} / {type.lineHeight}
                </span>
              </div>
              <p
                className={cn("text-[#001e3c]", type.uppercase && "uppercase")}
                style={{
                  fontSize: type.size,
                  lineHeight: type.lineHeight,
                  fontWeight: type.weight,
                  letterSpacing: type.tracking || "normal",
                }}
              >
                {type.sample}
              </p>
            </motion.div>
          ))}
        </div>
      </DocSubsection>

      <DocDivider />

      {/* Usage */}
      <DocSubsection
        id="type-usage"
        title="Usage Guidelines"
        description="How to apply typography effectively."
      >
        <DocGrid cols={2}>
          <DocCard>
            <h4 className="text-sm font-medium text-[#001e3c] mb-3">Headlines</h4>
            <ul className="space-y-2 text-xs text-[#001e3c]/60">
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-[#001e3c]/20 mt-1.5 shrink-0" />
                Use Extra Light (200) or Light (300) for display text
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-[#001e3c]/20 mt-1.5 shrink-0" />
                Keep tracking tight for large sizes
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-[#001e3c]/20 mt-1.5 shrink-0" />
                Avoid all caps for headlines longer than three words
              </li>
            </ul>
          </DocCard>
          <DocCard>
            <h4 className="text-sm font-medium text-[#001e3c] mb-3">Body Text</h4>
            <ul className="space-y-2 text-xs text-[#001e3c]/60">
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-[#001e3c]/20 mt-1.5 shrink-0" />
                Use Regular (400) or Light (300) for body copy
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-[#001e3c]/20 mt-1.5 shrink-0" />
                Maintain 1.5 to 1.6 line height for readability
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-[#001e3c]/20 mt-1.5 shrink-0" />
                Limit line length to 65-75 characters
              </li>
            </ul>
          </DocCard>
        </DocGrid>
      </DocSubsection>
    </DocSection>
  );
}
