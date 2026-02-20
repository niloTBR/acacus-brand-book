"use client";

import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Card3D } from "@/components/ui/Card3D";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import { CodeBlock } from "@/components/CodeBlock";

export default function CardsPage() {
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
          Cards
        </h1>
        <p className="text-lg text-[#001f3e]/50 leading-relaxed max-w-2xl">
          Interactive card components with visual effects for engaging user interfaces.
        </p>
      </div>

      {/* Spotlight Card */}
      <section className="mb-16">
        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#7c98b3] mb-6 block">
          Spotlight Card
        </span>
        <p className="text-[#001f3e]/60 leading-relaxed mb-6">
          A card with a radial gradient spotlight that follows the cursor on hover.
        </p>

        <div className="bg-[#fafafa] border border-[#001f3e]/10 p-8 mb-6">
          <div className="grid grid-cols-2 gap-4">
            <SpotlightCard className="p-6">
              <h3 className="font-semibold text-[#001f3e] mb-2">Feature One</h3>
              <p className="text-sm text-[#001f3e]/50">
                Hover to see the spotlight effect.
              </p>
            </SpotlightCard>
            <SpotlightCard className="p-6">
              <h3 className="font-semibold text-[#001f3e] mb-2">Feature Two</h3>
              <p className="text-sm text-[#001f3e]/50">
                The effect creates depth and draws attention.
              </p>
            </SpotlightCard>
          </div>
        </div>

        <CodeBlock
          filename="example.tsx"
          language="tsx"
          code={`import { SpotlightCard } from "@/components/ui/SpotlightCard";

<SpotlightCard className="p-6">
  <h3>Card Title</h3>
  <p>Card content</p>
</SpotlightCard>`}
        />
      </section>

      <div className="border-t border-[#001f3e]/10 mb-16" />

      {/* 3D Card */}
      <section className="mb-16">
        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#7c98b3] mb-6 block">
          3D Card
        </span>
        <p className="text-[#001f3e]/60 leading-relaxed mb-6">
          A card that tilts in 3D space following cursor movement for depth effect.
        </p>

        <div className="bg-[#fafafa] border border-[#001f3e]/10 p-8 mb-6 flex justify-center">
          <Card3D className="w-64 h-80 bg-white border border-[#001f3e]/10 p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 bg-[#001f3e] mb-4 flex items-center justify-center">
                <svg viewBox="0 0 133.33 106.71" className="w-5 h-5">
                  <polygon fill="#f6f8ed" points="133.33 66.62 66.71 0 40 26.7 0 26.7 0 106.71 80.01 26.58 93.34 26.68 93.34 80.02 53.32 80.02 80.01 106.71 133.33 106.69 133.33 66.62"/>
                </svg>
              </div>
              <h3 className="font-semibold text-[#001f3e] mb-2">Move your cursor</h3>
              <p className="text-sm text-[#001f3e]/50">
                The card tilts in 3D space following your mouse.
              </p>
            </div>
            <div className="text-xs text-[#001f3e]/30">Hover to interact</div>
          </Card3D>
        </div>

        <CodeBlock
          filename="example.tsx"
          language="tsx"
          code={`import { Card3D } from "@/components/ui/Card3D";

<Card3D className="w-64 h-80 bg-white border p-6">
  <h3>3D Card</h3>
  <p>Move your cursor to tilt</p>
</Card3D>`}
        />
      </section>

      <div className="border-t border-[#001f3e]/10 mb-16" />

      {/* Bento Grid */}
      <section className="mb-16">
        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#7c98b3] mb-6 block">
          Bento Grid
        </span>
        <p className="text-[#001f3e]/60 leading-relaxed mb-6">
          A flexible grid layout for creating bento-style card layouts with varying sizes.
        </p>

        <div className="bg-[#fafafa] border border-[#001f3e]/10 p-8 mb-6">
          <BentoGrid>
            <BentoGridItem colSpan={2} className="bg-[#001f3e] text-[#f6f8ed]">
              <h3 className="font-semibold mb-2">Large Feature</h3>
              <p className="text-sm opacity-60">Spans 2 columns</p>
            </BentoGridItem>
            <BentoGridItem rowSpan={2}>
              <h3 className="font-semibold text-[#001f3e] mb-2">Tall</h3>
              <p className="text-sm text-[#001f3e]/50">Spans 2 rows</p>
            </BentoGridItem>
            <BentoGridItem>
              <h3 className="font-semibold text-[#001f3e] mb-2">Standard</h3>
              <p className="text-sm text-[#001f3e]/50">1x1 size</p>
            </BentoGridItem>
            <BentoGridItem className="bg-[#f6f8ed]">
              <h3 className="font-semibold text-[#001f3e] mb-2">Accent</h3>
              <p className="text-sm text-[#001f3e]/50">With background</p>
            </BentoGridItem>
          </BentoGrid>
        </div>

        <CodeBlock
          filename="example.tsx"
          language="tsx"
          code={`import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";

<BentoGrid>
  <BentoGridItem colSpan={2}>Large item</BentoGridItem>
  <BentoGridItem rowSpan={2}>Tall item</BentoGridItem>
  <BentoGridItem>Standard</BentoGridItem>
</BentoGrid>`}
        />
      </section>
    </div>
  );
}
