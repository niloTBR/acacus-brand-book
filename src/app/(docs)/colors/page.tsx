"use client";

import { useState } from "react";
import { CodeBlock, TokenDisplay } from "@/components/CodeBlock";
import { cn } from "@/lib/utils";
import { HoverBorderGradient } from "@/components/ui/HoverBorderGradient";

const brandColors = [
  { name: "--acacus-navy", value: "#001f3e", desc: "Primary brand color" },
  { name: "--acacus-blue", value: "#1e4890", desc: "Secondary accent" },
  { name: "--acacus-sky", value: "#7c98b3", desc: "Tertiary / UI elements" },
  { name: "--acacus-light", value: "#f6f8ed", desc: "Background / Light" },
];

function ColorSwatch({ color }: { color: typeof brandColors[0] }) {
  const [copied, setCopied] = useState(false);
  const isLight = color.value === "#f6f8ed";

  const copy = () => {
    navigator.clipboard.writeText(color.value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="group">
      <button
        onClick={copy}
        className={cn(
          "w-full h-40 transition-all duration-200 relative overflow-hidden",
          "hover:scale-[1.02] hover:shadow-lg",
          isLight && "border border-[#001f3e]/10"
        )}
        style={{ backgroundColor: color.value }}
      >
        <span
          className={cn(
            "absolute bottom-3 right-3 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity px-2 py-1",
            isLight ? "bg-[#001f3e]/10 text-[#001f3e]" : "bg-white/10 text-white"
          )}
        >
          {copied ? "Copied!" : "Copy hex"}
        </span>
      </button>
      <div className="mt-4">
        <p className="text-sm font-semibold text-[#001f3e]">{color.desc}</p>
        <p className="text-xs font-mono text-[#001f3e]/50 mt-1">{color.name}</p>
        <p className="text-xs font-mono text-[#001f3e]/30">{color.value}</p>
      </div>
    </div>
  );
}

export default function ColorsPage() {
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
          Colors
        </h1>
        <p className="text-lg text-[#001f3e]/50 leading-relaxed max-w-2xl">
          A focused palette of four colors that define the Acacus brand.
          From deep navy to soft cream, each color serves a purpose.
        </p>
      </div>

      {/* Brand Colors */}
      <section className="mb-16">
        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#7c98b3] mb-6 block">
          Brand Palette
        </span>

        <div className="grid grid-cols-4 gap-6 mb-8">
          {brandColors.map((color) => (
            <ColorSwatch key={color.name} color={color} />
          ))}
        </div>
      </section>

      <div className="border-t border-[#001f3e]/10 mb-16" />

      {/* Gradient */}
      <section className="mb-16">
        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#7c98b3] mb-6 block">
          Brand Gradient
        </span>

        <div
          className="w-full h-32 mb-6"
          style={{
            background: "linear-gradient(135deg, #f6f8ed 0%, #7c98b3 50%, #1e4890 75%, #001f3e 100%)",
          }}
        />

        <div className="grid grid-cols-4 gap-4 text-xs text-[#001f3e]/50">
          <div>
            <span className="font-semibold text-[#001f3e]">0%</span>
            <span className="block">#f6f8ed</span>
          </div>
          <div>
            <span className="font-semibold text-[#001f3e]">50%</span>
            <span className="block">#7c98b3</span>
          </div>
          <div>
            <span className="font-semibold text-[#001f3e]">75%</span>
            <span className="block">#1e4890</span>
          </div>
          <div>
            <span className="font-semibold text-[#001f3e]">100%</span>
            <span className="block">#001f3e</span>
          </div>
        </div>
      </section>

      <div className="border-t border-[#001f3e]/10 mb-16" />

      {/* CSS Variables */}
      <section className="mb-16">
        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#7c98b3] mb-6 block">
          CSS Variables
        </span>

        <CodeBlock
          filename="variables.css"
          language="css"
          code={`:root {
  /* Brand Colors */
  --acacus-navy: #001f3e;
  --acacus-blue: #1e4890;
  --acacus-sky: #7c98b3;
  --acacus-light: #f6f8ed;

  /* Brand Gradient */
  --acacus-gradient: linear-gradient(
    135deg,
    #f6f8ed 0%,
    #7c98b3 50%,
    #1e4890 75%,
    #001f3e 100%
  );
}`}
        />
      </section>

      <div className="border-t border-[#001f3e]/10 mb-16" />

      {/* Tokens */}
      <section className="mb-16">
        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#7c98b3] mb-6 block">
          Design Tokens
        </span>

        <div className="grid grid-cols-2 gap-3">
          {brandColors.map((color) => (
            <TokenDisplay
              key={color.name}
              name={color.name}
              value={color.value}
              preview="color"
            />
          ))}
        </div>
      </section>

      <div className="border-t border-[#001f3e]/10 mb-16" />

      {/* Usage Examples */}
      <section className="mb-16">
        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#7c98b3] mb-6 block">
          Usage
        </span>

        <CodeBlock
          filename="example.css"
          language="css"
          code={`.header {
  background-color: var(--acacus-navy);
  color: var(--acacus-light);
}

.card {
  background-color: var(--acacus-light);
  border: 1px solid var(--acacus-sky);
}

.accent {
  color: var(--acacus-blue);
}

.hero {
  background: var(--acacus-gradient);
}`}
        />
      </section>

      <div className="border-t border-[#001f3e]/10 mb-16" />

      {/* Contrast Examples */}
      <section>
        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#7c98b3] mb-6 block">
          Contrast Combinations
        </span>

        <div className="grid grid-cols-2 gap-4">
          <HoverBorderGradient className="aspect-square bg-[#001f3e] text-[#f6f8ed] p-6 flex flex-col justify-end">
            <p className="text-2xl font-semibold leading-tight">
              We help you move beyond
            </p>
          </HoverBorderGradient>
          <HoverBorderGradient className="aspect-square bg-[#f6f8ed] text-[#001f3e] p-6 flex flex-col justify-end">
            <p className="text-2xl font-semibold leading-tight">
              Intelligence in action
            </p>
          </HoverBorderGradient>
          <HoverBorderGradient className="aspect-square bg-[#1e4890] text-[#f6f8ed] p-6 flex flex-col justify-end">
            <p className="text-2xl font-semibold leading-tight">
              Movement by design
            </p>
          </HoverBorderGradient>
          <HoverBorderGradient className="aspect-square bg-[#7c98b3] text-[#001f3e] p-6 flex flex-col justify-end">
            <p className="text-2xl font-semibold leading-tight">
              Progress through learning
            </p>
          </HoverBorderGradient>
        </div>
      </section>
    </div>
  );
}
