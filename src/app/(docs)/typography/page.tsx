"use client";

import { CodeBlock } from "@/components/CodeBlock";
import { cn } from "@/lib/utils";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

const weights = [
  { weight: 400, name: "Regular", class: "font-normal" },
  { weight: 600, name: "Semi Bold", class: "font-semibold" },
  { weight: 700, name: "Bold", class: "font-bold" },
];

const typeScale = [
  { name: "H1", size: "48px", weight: 600, class: "text-5xl font-semibold" },
  { name: "H2", size: "32px", weight: 600, class: "text-3xl font-semibold" },
  { name: "H3", size: "24px", weight: 600, class: "text-2xl font-semibold" },
  { name: "H4", size: "18px", weight: 600, class: "text-lg font-semibold" },
  { name: "H5 / Eyebrow", size: "10px", weight: 600, class: "text-[10px] font-semibold tracking-[0.2em] uppercase" },
  { name: "Body Large", size: "18px", weight: 400, class: "text-lg" },
  { name: "Body", size: "16px", weight: 400, class: "text-base" },
  { name: "Body Small", size: "14px", weight: 400, class: "text-sm" },
];

export default function TypographyPage() {
  return (
    <div className="max-w-4xl mx-auto px-12 py-16">
      {/* Header */}
      <div className="mb-16">
        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#001f3e]/30 mb-3 block">
          Foundation
        </span>
        <h1
          className="text-4xl font-semibold tracking-tight mb-4"
          style={{
            background: "linear-gradient(90deg, #001f3e 0%, #1e4890 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Typography
        </h1>
        <p className="text-lg text-[#001f3e]/50 leading-relaxed max-w-2xl">
          Naru Sans is our primary typeface. Clean, geometric, and versatile.
          It provides excellent readability while maintaining a modern, intelligent aesthetic.
        </p>
      </div>

      {/* Typeface */}
      <section className="mb-16">
        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#7c98b3] mb-6 block">
          Typeface
        </span>

        <SpotlightCard className="p-12 mb-6 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle, #001f3e08 1px, transparent 1px)`,
              backgroundSize: "16px 16px",
            }}
          />
          <div className="relative">
            <div className="text-[120px] font-semibold text-[#001f3e] leading-none tracking-tight">
              Aa
            </div>
            <p className="text-sm text-[#001f3e]/40 mt-4">Naru Sans</p>
          </div>
        </SpotlightCard>

        <div className="bg-[#f6f8ed] p-8">
          <p className="text-xl text-[#001f3e] tracking-wide mb-4">
            ABCDEFGHIJKLMNOPQRSTUVWXYZ
          </p>
          <p className="text-xl text-[#001f3e] tracking-wide mb-4">
            abcdefghijklmnopqrstuvwxyz
          </p>
          <p className="text-xl text-[#001f3e] tracking-wide">
            0123456789 !@#$%&*()
          </p>
        </div>
      </section>

      <div className="border-t border-[#001f3e]/10 mb-16" />

      {/* Weight Scale */}
      <section className="mb-16">
        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#7c98b3] mb-6 block">
          Weight Scale
        </span>
        <p className="text-[#001f3e]/60 leading-relaxed mb-6">
          We use three weights: Regular for body text, Semi-bold for headings, and Bold for emphasis.
        </p>

        <div className="border border-[#001f3e]/10 overflow-hidden">
          {weights.map((w, index) => (
            <div
              key={w.weight}
              className={cn(
                "flex items-center px-6 py-5 hover:bg-[#f6f8ed] transition-colors",
                index !== weights.length - 1 && "border-b border-[#001f3e]/10"
              )}
            >
              <span className="w-12 text-xs font-mono text-[#001f3e]/30">{w.weight}</span>
              <span className="w-28 text-sm text-[#001f3e]/50">{w.name}</span>
              <span className="w-32 text-xs font-mono text-[#001f3e]/30">{w.class}</span>
              <span
                className="flex-1 text-2xl text-[#001f3e]"
                style={{ fontWeight: w.weight }}
              >
                Intelligence in motion
              </span>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-[#001f3e]/10 mb-16" />

      {/* Type Scale */}
      <section className="mb-16">
        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#7c98b3] mb-6 block">
          Type Scale
        </span>
        <p className="text-[#001f3e]/60 leading-relaxed mb-6">
          A consistent hierarchy for clear communication.
        </p>

        <div className="space-y-6">
          {typeScale.map((type) => (
            <div key={type.name} className="border-b border-[#001f3e]/10 pb-6">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="text-xs font-semibold text-[#001f3e]/40 w-24">{type.name}</span>
                <span className="text-[10px] text-[#001f3e]/30 font-mono">
                  {type.size} / {type.weight}
                </span>
              </div>
              <p className={cn("text-[#001f3e]", type.class)}>
                {type.name === "H5 / Eyebrow" ? "Foundation" : "Intelligence in motion"}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-[#001f3e]/10 mb-16" />

      {/* Installation */}
      <section className="mb-16">
        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#7c98b3] mb-6 block">
          Installation
        </span>

        <CodeBlock
          filename="fonts.css"
          language="css"
          code={`@font-face {
  font-family: 'Naru Sans';
  src: url('/fonts/NaruSans-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Naru Sans';
  src: url('/fonts/NaruSans-SemiBold.ttf') format('truetype');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Naru Sans';
  src: url('/fonts/NaruSans-Bold.ttf') format('truetype');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

:root {
  --font-family: 'Naru Sans', system-ui, sans-serif;
}

body {
  font-family: var(--font-family);
}`}
        />
      </section>

      <div className="border-t border-[#001f3e]/10 mb-16" />

      {/* Tailwind CSS */}
      <section>
        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#7c98b3] mb-6 block">
          Tailwind CSS
        </span>

        <CodeBlock
          filename="tailwind.config.js"
          language="javascript"
          code={`module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Naru Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
}`}
        />
      </section>
    </div>
  );
}
