"use client";

import { GlitchText } from "@/components/ui/GlitchText";
import { TextReveal, TextRevealByWord } from "@/components/ui/TextReveal";
import { Typewriter } from "@/components/ui/Typewriter";
import { FlipWords } from "@/components/ui/FlipWords";
import { BlurText } from "@/components/ui/BlurText";
import { GradientText } from "@/components/ui/GradientText";
import { NumberTicker } from "@/components/ui/NumberTicker";
import { CodeBlock } from "@/components/CodeBlock";

export default function TextEffectsPage() {
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
          Text Effects
        </h1>
        <p className="text-lg text-[#001f3e]/50 leading-relaxed max-w-2xl">
          Animated text components for creating engaging typographic experiences.
        </p>
      </div>

      {/* Glitch Text */}
      <section className="mb-16">
        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#7c98b3] mb-6 block">
          Glitch Text
        </span>
        <p className="text-[#001f3e]/60 leading-relaxed mb-6">
          Text with a chromatic glitch effect on hover.
        </p>

        <div className="bg-[#fafafa] border border-[#001f3e]/10 p-8 mb-6">
          <p className="text-3xl text-[#001f3e]">
            We help you <GlitchText className="font-bold">move beyond</GlitchText>
          </p>
        </div>

        <CodeBlock
          filename="example.tsx"
          language="tsx"
          code={`import { GlitchText } from "@/components/ui/GlitchText";

<p className="text-3xl">
  We help you <GlitchText className="font-bold">move beyond</GlitchText>
</p>`}
        />
      </section>

      <div className="border-t border-[#001f3e]/10 mb-16" />

      {/* Typewriter */}
      <section className="mb-16">
        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#7c98b3] mb-6 block">
          Typewriter
        </span>
        <p className="text-[#001f3e]/60 leading-relaxed mb-6">
          Typing animation that cycles through multiple words.
        </p>

        <div className="bg-[#fafafa] border border-[#001f3e]/10 p-8 mb-6">
          <p className="text-3xl text-[#001f3e]">
            Intelligence in{" "}
            <Typewriter
              words={["motion", "action", "design", "progress"]}
              className="font-bold text-[#1e4890]"
            />
          </p>
        </div>

        <CodeBlock
          filename="example.tsx"
          language="tsx"
          code={`import { Typewriter } from "@/components/ui/Typewriter";

<Typewriter
  words={["motion", "action", "design"]}
  className="font-bold"
/>`}
        />
      </section>

      <div className="border-t border-[#001f3e]/10 mb-16" />

      {/* Flip Words */}
      <section className="mb-16">
        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#7c98b3] mb-6 block">
          Flip Words
        </span>
        <p className="text-[#001f3e]/60 leading-relaxed mb-6">
          Words that flip with a blur transition effect.
        </p>

        <div className="bg-[#fafafa] border border-[#001f3e]/10 p-8 mb-6">
          <p className="text-3xl text-[#001f3e]">
            Building{" "}
            <FlipWords
              words={["smarter", "faster", "safer", "better"]}
              className="font-bold text-[#1e4890]"
            />{" "}
            systems
          </p>
        </div>

        <CodeBlock
          filename="example.tsx"
          language="tsx"
          code={`import { FlipWords } from "@/components/ui/FlipWords";

<FlipWords
  words={["smarter", "faster", "safer"]}
  duration={3000}
/>`}
        />
      </section>

      <div className="border-t border-[#001f3e]/10 mb-16" />

      {/* Blur Text */}
      <section className="mb-16">
        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#7c98b3] mb-6 block">
          Blur Text
        </span>
        <p className="text-[#001f3e]/60 leading-relaxed mb-6">
          Text that reveals letter by letter with a blur effect on scroll.
        </p>

        <div className="bg-[#fafafa] border border-[#001f3e]/10 p-8 mb-6">
          <BlurText className="text-2xl text-[#001f3e] font-semibold">
            Intelligence in action.
          </BlurText>
        </div>

        <CodeBlock
          filename="example.tsx"
          language="tsx"
          code={`import { BlurText } from "@/components/ui/BlurText";

<BlurText className="text-2xl font-semibold">
  Intelligence in action.
</BlurText>`}
        />
      </section>

      <div className="border-t border-[#001f3e]/10 mb-16" />

      {/* Gradient Text */}
      <section className="mb-16">
        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#7c98b3] mb-6 block">
          Gradient Text
        </span>
        <p className="text-[#001f3e]/60 leading-relaxed mb-6">
          Text with brand gradient fill, optionally animated.
        </p>

        <div className="bg-[#fafafa] border border-[#001f3e]/10 p-8 mb-6 space-y-4">
          <p className="text-3xl font-bold">
            <GradientText>Static gradient text</GradientText>
          </p>
          <p className="text-3xl font-bold">
            <GradientText animate>Animated gradient text</GradientText>
          </p>
        </div>

        <CodeBlock
          filename="example.tsx"
          language="tsx"
          code={`import { GradientText } from "@/components/ui/GradientText";

<GradientText animate>Animated gradient</GradientText>`}
        />
      </section>

      <div className="border-t border-[#001f3e]/10 mb-16" />

      {/* Number Ticker */}
      <section className="mb-16">
        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#7c98b3] mb-6 block">
          Number Ticker
        </span>
        <p className="text-[#001f3e]/60 leading-relaxed mb-6">
          Animated number counting up on scroll.
        </p>

        <div className="bg-[#fafafa] border border-[#001f3e]/10 p-8 mb-6">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-[#001f3e]">
                <NumberTicker value={10000} />+
              </p>
              <p className="text-sm text-[#001f3e]/50 mt-2">Vehicles</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#001f3e]">
                <NumberTicker value={500} delay={200} />M
              </p>
              <p className="text-sm text-[#001f3e]/50 mt-2">Journeys</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#001f3e]">
                <NumberTicker value={99} delay={400} />%
              </p>
              <p className="text-sm text-[#001f3e]/50 mt-2">Uptime</p>
            </div>
          </div>
        </div>

        <CodeBlock
          filename="example.tsx"
          language="tsx"
          code={`import { NumberTicker } from "@/components/ui/NumberTicker";

<NumberTicker value={10000} duration={2000} />`}
        />
      </section>

      <div className="border-t border-[#001f3e]/10 mb-16" />

      {/* Text Reveal */}
      <section className="mb-16">
        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#7c98b3] mb-6 block">
          Text Reveal
        </span>
        <p className="text-[#001f3e]/60 leading-relaxed mb-6">
          Text that slides up and fades in on scroll.
        </p>

        <div className="bg-[#fafafa] border border-[#001f3e]/10 p-8 mb-6">
          <TextReveal className="text-2xl text-[#001f3e]">
            Intelligence in action. Movement by design.
          </TextReveal>
        </div>

        <CodeBlock
          filename="example.tsx"
          language="tsx"
          code={`import { TextReveal } from "@/components/ui/TextReveal";

<TextReveal className="text-2xl">
  Intelligence in action.
</TextReveal>`}
        />
      </section>

      <div className="border-t border-[#001f3e]/10 mb-16" />

      {/* Text Reveal By Word */}
      <section>
        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#7c98b3] mb-6 block">
          Text Reveal By Word
        </span>
        <p className="text-[#001f3e]/60 leading-relaxed mb-6">
          Each word reveals with a staggered animation.
        </p>

        <div className="bg-[#fafafa] border border-[#001f3e]/10 p-8 mb-6">
          <TextRevealByWord className="text-2xl text-[#001f3e]">
            Progress happens when learning never stops.
          </TextRevealByWord>
        </div>

        <CodeBlock
          filename="example.tsx"
          language="tsx"
          code={`import { TextRevealByWord } from "@/components/ui/TextReveal";

<TextRevealByWord className="text-2xl">
  Progress happens when learning never stops.
</TextRevealByWord>`}
        />
      </section>
    </div>
  );
}
