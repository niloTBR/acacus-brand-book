"use client";

import { motion } from "framer-motion";
import { DocSection, DocHeader, DocSubsection, DocCard, DocGrid, DocDivider } from "../DocLayout";
import { cn } from "@/lib/utils";

const voiceAttributes = [
  {
    trait: "Intelligent",
    description: "We speak with knowledge and precision. Every word carries weight.",
    do: "Real intelligence supports decisions, not reports.",
    dont: "Our super smart AI technology is amazing!",
  },
  {
    trait: "Composed",
    description: "Calm, steady, never boastful. Confidence without arrogance.",
    do: "This works quietly, reliably, every day.",
    dont: "We're the best fleet management platform ever!!!",
  },
  {
    trait: "Human",
    description: "Technology exists to serve people. We never lose sight of this.",
    do: "We help you move beyond.",
    dont: "Leveraging synergistic AI solutions for optimal outcomes.",
  },
  {
    trait: "Forward",
    description: "Looking ahead, but grounded in experience.",
    do: "Progress happens when learning never stops.",
    dont: "Disrupting the transportation industry paradigm.",
  },
];

const principles = [
  {
    title: "Be Direct",
    points: [
      "Lead with the point",
      "Remove unnecessary words",
      "Every sentence earns its place",
    ],
  },
  {
    title: "Show Restraint",
    points: [
      "No exclamation marks in headlines",
      "Avoid superlatives",
      "Let the work speak for itself",
    ],
  },
  {
    title: "Stay Human",
    points: [
      "Write for people, not algorithms",
      "If you wouldn't say it, don't write it",
      "Clarity over cleverness",
    ],
  },
];

export function VoiceSection() {
  return (
    <DocSection id="voice">
      <DocHeader
        label="Communication"
        title="Voice & Tone"
        description="How we speak reflects who we are. Intelligent without being cold. Confident without being loud. Technical without losing humanity."
      />

      {/* Principles */}
      <DocSubsection
        id="principles"
        title="Voice Attributes"
        description="The qualities that define how Acacus communicates."
      >
        <div className="space-y-4">
          {voiceAttributes.map((attr, index) => (
            <motion.div
              key={attr.trait}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <DocCard>
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="md:w-48 shrink-0">
                    <h4 className="text-lg font-light text-[#001e3c]">{attr.trait}</h4>
                    <p className="text-xs text-[#001e3c]/40 mt-1">{attr.description}</p>
                  </div>
                  <div className="flex-1 grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-emerald-50/50 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center text-[10px] text-emerald-600">
                          ✓
                        </span>
                        <span className="text-[10px] uppercase tracking-wide text-emerald-600 font-medium">Do</span>
                      </div>
                      <p className="text-sm text-[#001e3c]/70 italic">&ldquo;{attr.do}&rdquo;</p>
                    </div>
                    <div className="p-4 bg-red-50/50 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center text-[10px] text-red-500">
                          ✕
                        </span>
                        <span className="text-[10px] uppercase tracking-wide text-red-500 font-medium">Don't</span>
                      </div>
                      <p className="text-sm text-[#001e3c]/40 italic line-through">&ldquo;{attr.dont}&rdquo;</p>
                    </div>
                  </div>
                </div>
              </DocCard>
            </motion.div>
          ))}
        </div>
      </DocSubsection>

      <DocDivider />

      {/* Writing Principles */}
      <DocSubsection
        id="writing"
        title="Writing Principles"
        description="Guidelines for clear, effective communication."
      >
        <DocGrid cols={3}>
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <DocCard>
                <h4 className="font-medium text-[#001e3c] mb-4">{principle.title}</h4>
                <ul className="space-y-2">
                  {principle.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-xs text-[#001e3c]/60">
                      <span className="w-1 h-1 rounded-full bg-[#001e3c]/20 mt-1.5 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </DocCard>
            </motion.div>
          ))}
        </DocGrid>
      </DocSubsection>

      <DocDivider />

      {/* Examples */}
      <DocSubsection
        id="examples"
        title="In Practice"
        description="How our voice sounds across different contexts."
      >
        <DocCard className="bg-[#001e3c] text-white">
          <div className="space-y-8">
            <div>
              <span className="text-[10px] tracking-[0.15em] uppercase text-white/30 font-medium">Tagline</span>
              <p className="text-3xl font-extralight mt-2">We help you move beyond</p>
            </div>
            <div>
              <span className="text-[10px] tracking-[0.15em] uppercase text-white/30 font-medium">Value Proposition</span>
              <p className="text-xl font-light mt-2 text-white/80">A single intelligent platform for movement at scale</p>
            </div>
            <div>
              <span className="text-[10px] tracking-[0.15em] uppercase text-white/30 font-medium">Supporting Copy</span>
              <p className="text-base font-light mt-2 text-white/60">
                From the Acacus caves to modern cities, progress has always depended on one thing:
                turning observation into understanding, and intelligence into action.
              </p>
            </div>
          </div>
        </DocCard>

        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="p-6 border border-[#001e3c]/5 rounded-xl">
            <span className="text-[10px] tracking-[0.1em] uppercase text-[#001e3c]/30 font-medium">Headline</span>
            <p className="text-2xl font-extralight text-[#001e3c] mt-2">Intelligence in motion</p>
          </div>
          <div className="p-6 border border-[#001e3c]/5 rounded-xl">
            <span className="text-[10px] tracking-[0.1em] uppercase text-[#001e3c]/30 font-medium">Headline</span>
            <p className="text-2xl font-extralight text-[#001e3c] mt-2">Progress through learning</p>
          </div>
        </div>
      </DocSubsection>
    </DocSection>
  );
}
