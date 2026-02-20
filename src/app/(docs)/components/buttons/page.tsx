"use client";

import { HoverBorderGradient } from "@/components/ui/HoverBorderGradient";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ShimmerButton } from "@/components/ui/ShimmerButton";
import { MovingBorder } from "@/components/ui/MovingBorder";
import { CodeBlock } from "@/components/CodeBlock";

export default function ButtonsPage() {
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
          Buttons
        </h1>
        <p className="text-lg text-[#001f3e]/50 leading-relaxed max-w-2xl">
          Interactive button components with visual feedback and effects.
        </p>
      </div>

      {/* Hover Border Gradient */}
      <section className="mb-16">
        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#7c98b3] mb-6 block">
          Hover Border Gradient
        </span>
        <p className="text-[#001f3e]/60 leading-relaxed mb-6">
          Reveals the brand gradient on border when hovered.
        </p>

        <div className="bg-[#fafafa] border border-[#001f3e]/10 p-8 mb-6">
          <div className="flex flex-wrap gap-4">
            <HoverBorderGradient className="px-6 py-3">
              <span className="text-[#001f3e] font-semibold">Get Started</span>
            </HoverBorderGradient>
            <HoverBorderGradient className="px-6 py-3">
              <span className="text-[#001f3e] font-semibold">Learn More</span>
            </HoverBorderGradient>
          </div>
        </div>

        <CodeBlock
          filename="example.tsx"
          language="tsx"
          code={`import { HoverBorderGradient } from "@/components/ui/HoverBorderGradient";

<HoverBorderGradient className="px-6 py-3">
  <span className="font-semibold">Get Started</span>
</HoverBorderGradient>`}
        />
      </section>

      <div className="border-t border-[#001f3e]/10 mb-16" />

      {/* Magnetic Button */}
      <section className="mb-16">
        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#7c98b3] mb-6 block">
          Magnetic Button
        </span>
        <p className="text-[#001f3e]/60 leading-relaxed mb-6">
          Button that follows cursor with magnetic attraction effect.
        </p>

        <div className="bg-[#fafafa] border border-[#001f3e]/10 p-8 mb-6 flex justify-center">
          <MagneticButton className="px-8 py-4 bg-[#001f3e] text-[#f6f8ed] font-semibold">
            Hover me
          </MagneticButton>
        </div>

        <CodeBlock
          filename="example.tsx"
          language="tsx"
          code={`import { MagneticButton } from "@/components/ui/MagneticButton";

<MagneticButton className="px-8 py-4 bg-[#001f3e] text-white">
  Hover me
</MagneticButton>`}
        />
      </section>

      <div className="border-t border-[#001f3e]/10 mb-16" />

      {/* Shimmer Button */}
      <section className="mb-16">
        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#7c98b3] mb-6 block">
          Shimmer Button
        </span>
        <p className="text-[#001f3e]/60 leading-relaxed mb-6">
          Button with a shimmer effect that sweeps across on hover.
        </p>

        <div className="bg-[#fafafa] border border-[#001f3e]/10 p-8 mb-6 flex gap-4">
          <ShimmerButton>Get Started</ShimmerButton>
          <ShimmerButton backgroundColor="#1e4890">Learn More</ShimmerButton>
        </div>

        <CodeBlock
          filename="example.tsx"
          language="tsx"
          code={`import { ShimmerButton } from "@/components/ui/ShimmerButton";

<ShimmerButton>Get Started</ShimmerButton>
<ShimmerButton backgroundColor="#1e4890">
  Custom Color
</ShimmerButton>`}
        />
      </section>

      <div className="border-t border-[#001f3e]/10 mb-16" />

      {/* Moving Border */}
      <section className="mb-16">
        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#7c98b3] mb-6 block">
          Moving Border
        </span>
        <p className="text-[#001f3e]/60 leading-relaxed mb-6">
          Continuously rotating gradient border animation.
        </p>

        <div className="bg-[#fafafa] border border-[#001f3e]/10 p-8 mb-6 flex gap-4">
          <MovingBorder className="px-6 py-3">
            <span className="text-[#001f3e] font-semibold">Spinning Border</span>
          </MovingBorder>
          <MovingBorder className="px-6 py-3" duration={1500}>
            <span className="text-[#001f3e] font-semibold">Faster</span>
          </MovingBorder>
        </div>

        <CodeBlock
          filename="example.tsx"
          language="tsx"
          code={`import { MovingBorder } from "@/components/ui/MovingBorder";

<MovingBorder className="px-6 py-3" duration={3000}>
  <span className="font-semibold">Spinning Border</span>
</MovingBorder>`}
        />
      </section>

      <div className="border-t border-[#001f3e]/10 mb-16" />

      {/* Size Variants */}
      <section>
        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#7c98b3] mb-6 block">
          Size Variants
        </span>
        <p className="text-[#001f3e]/60 leading-relaxed mb-6">
          All button components support size customization via className.
        </p>

        <div className="bg-[#fafafa] border border-[#001f3e]/10 p-8 mb-6">
          <div className="flex flex-wrap items-center gap-4">
            <ShimmerButton className="px-3 py-1.5 text-sm">Small</ShimmerButton>
            <ShimmerButton className="px-5 py-2.5">Medium</ShimmerButton>
            <ShimmerButton className="px-8 py-4 text-lg">Large</ShimmerButton>
          </div>
        </div>
      </section>
    </div>
  );
}
