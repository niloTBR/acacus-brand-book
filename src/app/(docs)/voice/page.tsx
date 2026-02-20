"use client";

import { CodeBlock } from "@/components/CodeBlock";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { TextRevealByWord } from "@/components/ui/TextReveal";

const values = [
  {
    title: "Intelligence is shared",
    desc: "Knowledge grows when it moves between people and systems.",
  },
  {
    title: "Responsibility is collective",
    desc: "We build systems that protect, not experiment on, the tribe.",
  },
  {
    title: "Progress is earned",
    desc: "Every journey teaches. Every lesson strengthens what comes next.",
  },
  {
    title: "Scale demands care",
    desc: "The larger the system, the greater the responsibility.",
  },
];

const voiceAttributes = [
  {
    trait: "Intelligent",
    desc: "We speak with knowledge and precision. Every word carries weight.",
    do: "Real intelligence supports decisions, not reports.",
    dont: "Our super smart AI technology is amazing!",
  },
  {
    trait: "Composed",
    desc: "Calm, steady, never boastful. Confidence without arrogance.",
    do: "This works quietly, reliably, every day.",
    dont: "We're the best fleet management platform ever!!!",
  },
  {
    trait: "Human",
    desc: "Technology exists to serve people. We never lose sight of this.",
    do: "We help you move beyond.",
    dont: "Leveraging synergistic AI solutions for optimal outcomes.",
  },
  {
    trait: "Forward",
    desc: "Looking ahead, but grounded in experience.",
    do: "Progress happens when learning never stops.",
    dont: "Disrupting the transportation industry paradigm.",
  },
];

export default function VoicePage() {
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
          Voice & Tone
        </h1>
        <TextRevealByWord className="text-lg text-[#001f3e]/50 leading-relaxed max-w-2xl">
          How we speak reflects who we are. Intelligent without being cold. Confident without being loud. Technical without losing humanity.
        </TextRevealByWord>
      </div>

      {/* Values */}
      <section className="mb-16">
        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#7c98b3] mb-6 block">
          Values
        </span>
        <div className="grid grid-cols-2 gap-4">
          {values.map((value) => (
            <SpotlightCard key={value.title} className="p-6">
              <h3 className="font-semibold text-[#001f3e] mb-2">{value.title}</h3>
              <p className="text-sm text-[#001f3e]/50">{value.desc}</p>
            </SpotlightCard>
          ))}
        </div>
      </section>

      <div className="border-t border-[#001f3e]/10 mb-16" />

      {/* Voice Attributes */}
      <section className="mb-16">
        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#7c98b3] mb-6 block">
          Voice Attributes
        </span>

        <div className="space-y-4">
          {voiceAttributes.map((attr) => (
            <div key={attr.trait} className="border border-[#001f3e]/10 p-6">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="md:w-40 shrink-0">
                  <h3 className="text-lg font-semibold text-[#001f3e]">{attr.trait}</h3>
                  <p className="text-xs text-[#001f3e]/40 mt-1">{attr.desc}</p>
                </div>
                <div className="flex-1 grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-[#f6f8ed]">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-5 h-5 bg-[#001f3e]/10 flex items-center justify-center text-xs text-[#001f3e]">
                        ✓
                      </span>
                      <span className="text-[10px] uppercase tracking-wide text-[#001f3e] font-semibold">
                        Do
                      </span>
                    </div>
                    <p className="text-sm text-[#001f3e]/70 italic">&ldquo;{attr.do}&rdquo;</p>
                  </div>
                  <div className="p-4 bg-[#001f3e]/5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-5 h-5 bg-[#001f3e]/10 flex items-center justify-center text-xs text-[#001f3e]/50">
                        ✕
                      </span>
                      <span className="text-[10px] uppercase tracking-wide text-[#001f3e]/50 font-semibold">
                        Don't
                      </span>
                    </div>
                    <p className="text-sm text-[#001f3e]/40 italic line-through">
                      &ldquo;{attr.dont}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-[#001f3e]/10 mb-16" />

      {/* Writing Principles */}
      <section className="mb-16">
        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#7c98b3] mb-6 block">
          Writing Principles
        </span>

        <div className="grid grid-cols-3 gap-4">
          {[
            {
              title: "Be Direct",
              points: ["Lead with the point", "Remove unnecessary words", "Every sentence earns its place"],
            },
            {
              title: "Show Restraint",
              points: ["No exclamation marks in headlines", "Avoid superlatives", "Let the work speak for itself"],
            },
            {
              title: "Stay Human",
              points: ["Write for people, not algorithms", "If you wouldn't say it, don't write it", "Clarity over cleverness"],
            },
          ].map((principle) => (
            <SpotlightCard key={principle.title} className="p-6">
              <h3 className="font-semibold text-[#001f3e] mb-4">{principle.title}</h3>
              <ul className="space-y-2">
                {principle.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-xs text-[#001f3e]/50">
                    <span className="w-1 h-1 bg-[#001f3e]/20 mt-1.5 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          ))}
        </div>
      </section>

      <div className="border-t border-[#001f3e]/10 mb-16" />

      {/* Copy Examples */}
      <section className="mb-16">
        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#7c98b3] mb-6 block">
          Copy Examples
        </span>

        <CodeBlock
          filename="copy-examples.md"
          language="markdown"
          code={`# Headlines

## Display (Hero)
"We help you move beyond"

## H1 (Page titles)
"Intelligence in motion"
"A single intelligent platform for movement at scale"

## H2 (Sections)
"Planning. Operations. Safety. Learning."
"Progress happens when learning never stops"

# Body Copy

## Value proposition
"From the Acacus caves to modern cities, progress has
always depended on one thing: turning observation into
understanding, and intelligence into action."

## Product description
"A single intelligent platform that unifies planning,
live operations, safety, and analytics."

# Microcopy

## Buttons
"Get started" (not "Start your journey!")
"Learn more" (not "Discover the power!")

## Labels
"Dashboard" (not "Command Center")
"Analytics" (not "Insights Hub")`}
        />
      </section>

      <div className="border-t border-[#001f3e]/10 mb-16" />

      {/* In Practice */}
      <section>
        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#7c98b3] mb-6 block">
          In Practice
        </span>

        <div className="bg-[#001f3e] text-[#f6f8ed] p-12 mb-6">
          <div className="space-y-8">
            <div>
              <span className="text-[10px] tracking-[0.15em] uppercase text-[#7c98b3] font-semibold">
                Tagline
              </span>
              <p className="text-3xl mt-2">We help you move beyond</p>
            </div>
            <div>
              <span className="text-[10px] tracking-[0.15em] uppercase text-[#7c98b3] font-semibold">
                Value Proposition
              </span>
              <p className="text-xl mt-2 text-[#f6f8ed]/80">
                A single intelligent platform for movement at scale
              </p>
            </div>
            <div>
              <span className="text-[10px] tracking-[0.15em] uppercase text-[#7c98b3] font-semibold">
                Supporting Copy
              </span>
              <p className="text-base mt-2 text-[#f6f8ed]/60">
                From the Acacus caves to modern cities, progress has always depended
                on one thing: turning observation into understanding, and intelligence
                into action.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-6 border border-[#001f3e]/10">
            <span className="text-[10px] tracking-[0.1em] uppercase text-[#001f3e]/30 font-semibold">
              Headline
            </span>
            <p className="text-2xl text-[#001f3e] mt-2">
              Intelligence in motion
            </p>
          </div>
          <div className="p-6 border border-[#001f3e]/10">
            <span className="text-[10px] tracking-[0.1em] uppercase text-[#001f3e]/30 font-semibold">
              Headline
            </span>
            <p className="text-2xl text-[#001f3e] mt-2">
              Progress through learning
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
