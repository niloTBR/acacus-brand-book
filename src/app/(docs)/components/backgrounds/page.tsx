"use client";

import { Aurora } from "@/components/ui/Aurora";
import { Particles } from "@/components/ui/Particles";
import { Ripple } from "@/components/ui/Ripple";
import { CodeBlock } from "@/components/CodeBlock";

export default function BackgroundsPage() {
  return (
    <div className="max-w-4xl mx-auto px-12 py-16">
      {/* Header */}
      <div className="mb-16">
        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#001f3e]/30 mb-3 block">
          Components
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
          Backgrounds
        </h1>
        <p className="text-lg text-[#001f3e]/50 leading-relaxed max-w-2xl">
          Animated background components for creating immersive visual experiences.
        </p>
      </div>

      {/* Aurora */}
      <section className="mb-16">
        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#7c98b3] mb-6 block">
          Aurora
        </span>
        <p className="text-[#001f3e]/60 leading-relaxed mb-6">
          Subtle aurora-like gradient animation using brand colors.
        </p>

        <div className="border border-[#001f3e]/10 mb-6 overflow-hidden">
          <Aurora className="h-64 bg-[#001f3e]">
            <div className="h-full flex items-center justify-center">
              <p className="text-3xl font-semibold text-[#f6f8ed]">Aurora Background</p>
            </div>
          </Aurora>
        </div>

        <CodeBlock
          filename="example.tsx"
          language="tsx"
          code={`import { Aurora } from "@/components/ui/Aurora";

<Aurora className="h-64 bg-[#001f3e]">
  <div className="flex items-center justify-center h-full">
    <h1 className="text-white">Your content</h1>
  </div>
</Aurora>`}
        />
      </section>

      <div className="border-t border-[#001f3e]/10 mb-16" />

      {/* Particles */}
      <section className="mb-16">
        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#7c98b3] mb-6 block">
          Particles
        </span>
        <p className="text-[#001f3e]/60 leading-relaxed mb-6">
          Interactive particle network with connections between nearby points.
        </p>

        <div className="border border-[#001f3e]/10 mb-6 relative overflow-hidden h-64 bg-[#fafafa]">
          <Particles quantity={30} />
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <p className="text-2xl font-semibold text-[#001f3e]">Connected Network</p>
          </div>
        </div>

        <CodeBlock
          filename="example.tsx"
          language="tsx"
          code={`import { Particles } from "@/components/ui/Particles";

<div className="relative h-64">
  <Particles quantity={50} color="#001f3e" />
  <div className="relative z-10">Your content</div>
</div>`}
        />
      </section>

      <div className="border-t border-[#001f3e]/10 mb-16" />

      {/* Ripple */}
      <section className="mb-16">
        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#7c98b3] mb-6 block">
          Ripple
        </span>
        <p className="text-[#001f3e]/60 leading-relaxed mb-6">
          Concentric circles with subtle pulsing animation.
        </p>

        <div className="border border-[#001f3e]/10 mb-6 relative overflow-hidden h-64 bg-white">
          <Ripple mainCircleSize={100} numCircles={6} />
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="w-16 h-16 bg-[#001f3e] flex items-center justify-center">
              <svg viewBox="0 0 133.33 106.71" className="w-8 h-8">
                <polygon fill="#f6f8ed" points="133.33 66.62 66.71 0 40 26.7 0 26.7 0 106.71 80.01 26.58 93.34 26.68 93.34 80.02 53.32 80.02 80.01 106.71 133.33 106.69 133.33 66.62"/>
              </svg>
            </div>
          </div>
        </div>

        <CodeBlock
          filename="example.tsx"
          language="tsx"
          code={`import { Ripple } from "@/components/ui/Ripple";

<div className="relative h-64">
  <Ripple mainCircleSize={100} numCircles={6} />
  <div className="relative z-10">Centered content</div>
</div>`}
        />
      </section>

      <div className="border-t border-[#001f3e]/10 mb-16" />

      {/* Dot Grid */}
      <section className="mb-16">
        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#7c98b3] mb-6 block">
          Dot Grid
        </span>
        <p className="text-[#001f3e]/60 leading-relaxed mb-6">
          Simple dot pattern background using CSS.
        </p>

        <div className="border border-[#001f3e]/10 mb-6 h-64 relative overflow-hidden bg-white">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle, #001f3e15 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-2xl font-semibold text-[#001f3e]">Dot Grid Pattern</p>
          </div>
        </div>

        <CodeBlock
          filename="example.tsx"
          language="tsx"
          code={`<div className="relative">
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: \`radial-gradient(circle, #001f3e15 1px, transparent 1px)\`,
      backgroundSize: "20px 20px",
    }}
  />
  <div className="relative z-10">Your content</div>
</div>`}
        />
      </section>

      <div className="border-t border-[#001f3e]/10 mb-16" />

      {/* Grid Lines */}
      <section>
        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#7c98b3] mb-6 block">
          Grid Lines
        </span>
        <p className="text-[#001f3e]/60 leading-relaxed mb-6">
          Subtle grid line pattern background.
        </p>

        <div className="border border-[#001f3e]/10 mb-6 h-64 relative overflow-hidden bg-white">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(#001f3e08 1px, transparent 1px),
                linear-gradient(90deg, #001f3e08 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-2xl font-semibold text-[#001f3e]">Grid Lines</p>
          </div>
        </div>

        <CodeBlock
          filename="example.tsx"
          language="tsx"
          code={`<div
  className="absolute inset-0"
  style={{
    backgroundImage: \`
      linear-gradient(#001f3e08 1px, transparent 1px),
      linear-gradient(90deg, #001f3e08 1px, transparent 1px)
    \`,
    backgroundSize: "40px 40px",
  }}
/>`}
        />
      </section>
    </div>
  );
}
