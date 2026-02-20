"use client";

import { Marquee } from "@/components/ui/Marquee";
import { CodeBlock } from "@/components/CodeBlock";

export default function AnimationsPage() {
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
          Animations
        </h1>
        <p className="text-lg text-[#001f3e]/50 leading-relaxed max-w-2xl">
          Motion components for creating dynamic, engaging interfaces.
        </p>
      </div>

      {/* Marquee */}
      <section className="mb-16">
        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#7c98b3] mb-6 block">
          Marquee
        </span>
        <p className="text-[#001f3e]/60 leading-relaxed mb-6">
          Infinite scrolling content with customizable speed and direction.
        </p>

        <div className="border border-[#001f3e]/10 mb-6 py-8 overflow-hidden bg-[#fafafa]">
          <Marquee pauseOnHover speed="normal">
            {["Planning", "Operations", "Safety", "Analytics", "Edge AI"].map((item) => (
              <div
                key={item}
                className="mx-4 px-6 py-3 bg-white border border-[#001f3e]/10"
              >
                <span className="font-semibold text-[#001f3e]">{item}</span>
              </div>
            ))}
          </Marquee>
        </div>

        <CodeBlock
          filename="example.tsx"
          language="tsx"
          code={`import { Marquee } from "@/components/ui/Marquee";

<Marquee pauseOnHover speed="normal">
  {items.map((item) => (
    <div key={item} className="mx-4 px-6 py-3 bg-white border">
      {item}
    </div>
  ))}
</Marquee>`}
        />
      </section>

      <div className="border-t border-[#001f3e]/10 mb-16" />

      {/* Marquee - Reverse */}
      <section className="mb-16">
        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#7c98b3] mb-6 block">
          Marquee Reverse
        </span>
        <p className="text-[#001f3e]/60 leading-relaxed mb-6">
          Combine normal and reverse marquees for a dynamic effect.
        </p>

        <div className="border border-[#001f3e]/10 mb-6 py-4 overflow-hidden bg-[#001f3e]">
          <Marquee speed="slow" className="mb-4">
            {["Intelligence", "Movement", "Progress", "Learning", "Safety"].map((item) => (
              <div key={item} className="mx-3 px-4 py-2 border border-[#f6f8ed]/20">
                <span className="text-sm text-[#f6f8ed]">{item}</span>
              </div>
            ))}
          </Marquee>
          <Marquee speed="slow" reverse>
            {["Fleet", "Analytics", "Tracking", "Monitoring", "Alerts"].map((item) => (
              <div key={item} className="mx-3 px-4 py-2 border border-[#f6f8ed]/20">
                <span className="text-sm text-[#f6f8ed]">{item}</span>
              </div>
            ))}
          </Marquee>
        </div>

        <CodeBlock
          filename="example.tsx"
          language="tsx"
          code={`<Marquee speed="slow">
  {items.map((item) => <Tag key={item}>{item}</Tag>)}
</Marquee>
<Marquee speed="slow" reverse>
  {items.map((item) => <Tag key={item}>{item}</Tag>)}
</Marquee>`}
        />
      </section>

      <div className="border-t border-[#001f3e]/10 mb-16" />

      {/* Logo Marquee */}
      <section className="mb-16">
        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#7c98b3] mb-6 block">
          Logo Marquee
        </span>
        <p className="text-[#001f3e]/60 leading-relaxed mb-6">
          Perfect for showcasing partner or client logos.
        </p>

        <div className="border border-[#001f3e]/10 mb-6 py-8 overflow-hidden bg-white">
          <Marquee speed="slow" pauseOnHover>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="mx-8 w-24 h-12 bg-[#f6f8ed] flex items-center justify-center"
              >
                <span className="text-[#001f3e]/30 font-semibold">Logo {i}</span>
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      <div className="border-t border-[#001f3e]/10 mb-16" />

      {/* Float Animation */}
      <section className="mb-16">
        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#7c98b3] mb-6 block">
          Float Animation
        </span>
        <p className="text-[#001f3e]/60 leading-relaxed mb-6">
          Subtle floating animation for icons and decorative elements.
        </p>

        <div className="border border-[#001f3e]/10 mb-6 h-48 overflow-hidden bg-[#fafafa] flex items-center justify-center gap-8">
          <div className="animate-float">
            <div className="w-16 h-16 bg-[#001f3e] flex items-center justify-center">
              <svg viewBox="0 0 133.33 106.71" className="w-8 h-8">
                <polygon fill="#f6f8ed" points="133.33 66.62 66.71 0 40 26.7 0 26.7 0 106.71 80.01 26.58 93.34 26.68 93.34 80.02 53.32 80.02 80.01 106.71 133.33 106.69 133.33 66.62"/>
              </svg>
            </div>
          </div>
          <div className="animate-float" style={{ animationDelay: "0.5s" }}>
            <div className="w-12 h-12 bg-[#1e4890] flex items-center justify-center">
              <svg viewBox="0 0 133.33 106.71" className="w-6 h-6">
                <polygon fill="#f6f8ed" points="133.33 66.62 66.71 0 40 26.7 0 26.7 0 106.71 80.01 26.58 93.34 26.68 93.34 80.02 53.32 80.02 80.01 106.71 133.33 106.69 133.33 66.62"/>
              </svg>
            </div>
          </div>
          <div className="animate-float" style={{ animationDelay: "1s" }}>
            <div className="w-10 h-10 bg-[#7c98b3] flex items-center justify-center">
              <svg viewBox="0 0 133.33 106.71" className="w-5 h-5">
                <polygon fill="#f6f8ed" points="133.33 66.62 66.71 0 40 26.7 0 26.7 0 106.71 80.01 26.58 93.34 26.68 93.34 80.02 53.32 80.02 80.01 106.71 133.33 106.69 133.33 66.62"/>
              </svg>
            </div>
          </div>
        </div>

        <CodeBlock
          filename="example.tsx"
          language="tsx"
          code={`// Uses animate-float class from globals.css
<div className="animate-float">
  <Icon />
</div>
<div className="animate-float" style={{ animationDelay: "0.5s" }}>
  <Icon />
</div>`}
        />
      </section>

      <div className="border-t border-[#001f3e]/10 mb-16" />

      {/* Stagger Animation */}
      <section>
        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#7c98b3] mb-6 block">
          Stagger Pattern
        </span>
        <p className="text-[#001f3e]/60 leading-relaxed mb-6">
          Use transition delays for staggered entrance animations.
        </p>

        <div className="border border-[#001f3e]/10 mb-6 p-8 overflow-hidden bg-white">
          <div className="flex gap-4">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-16 h-16 bg-[#001f3e] animate-float"
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>
        </div>

        <CodeBlock
          filename="example.tsx"
          language="tsx"
          code={`{items.map((item, i) => (
  <div
    key={i}
    className="animate-float"
    style={{ animationDelay: \`\${i * 0.15}s\` }}
  >
    {item}
  </div>
))}`}
        />
      </section>
    </div>
  );
}
