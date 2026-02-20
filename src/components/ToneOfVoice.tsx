"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Section, FadeIn } from "./Section";
import { cn } from "@/lib/utils";

const voiceAttributes = [
  {
    trait: "Intelligent",
    description: "We speak with knowledge and precision. Every word carries weight.",
    examples: {
      do: "Real intelligence supports decisions, not reports.",
      dont: "Our super smart AI technology is amazing!",
    },
  },
  {
    trait: "Composed",
    description: "Calm, steady, never boastful. Confidence without arrogance.",
    examples: {
      do: "This works quietly, reliably, every day.",
      dont: "We're the best fleet management platform ever!!!",
    },
  },
  {
    trait: "Human",
    description: "Technology exists to serve people. We never lose sight of this.",
    examples: {
      do: "We help you move beyond.",
      dont: "Leveraging synergistic AI solutions for optimal outcomes.",
    },
  },
  {
    trait: "Forward",
    description: "Looking ahead, but grounded in experience. Progress through learning.",
    examples: {
      do: "Progress happens when learning never stops.",
      dont: "Disrupting the transportation industry paradigm.",
    },
  },
];

export function ToneOfVoice() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section id="voice" variant="ivory">
      <div ref={ref} className="max-w-6xl mx-auto w-full">
        <FadeIn>
          <span className="inline-block text-xs tracking-[0.3em] uppercase font-medium mb-4 text-[#001e3c]/40">
            Voice
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-[#001e3c] mb-6">
            Tone of Voice
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-lg text-[#001e3c]/60 font-light max-w-2xl mb-16">
            How we speak reflects who we are. Intelligent without being cold.
            Confident without being loud. Technical without losing humanity.
          </p>
        </FadeIn>

        {/* Voice Attributes */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {voiceAttributes.map((attr, index) => (
            <motion.div
              key={attr.trait}
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-2xl p-8"
            >
              <h3 className="text-2xl font-light text-[#001e3c] mb-3">
                {attr.trait}
              </h3>
              <p className="text-[#001e3c]/60 font-light text-sm mb-6">
                {attr.description}
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-[#001e3c]/10 flex items-center justify-center text-xs text-[#001e3c]">
                    ✓
                  </span>
                  <p className="text-sm text-[#001e3c]/80 italic">
                    &ldquo;{attr.examples.do}&rdquo;
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-red-50 flex items-center justify-center text-xs text-red-400">
                    ✕
                  </span>
                  <p className="text-sm text-[#001e3c]/40 italic line-through">
                    &ldquo;{attr.examples.dont}&rdquo;
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Writing Principles */}
        <div>
          <FadeIn delay={0.5}>
            <h3 className="text-sm tracking-[0.2em] uppercase text-[#001e3c]/40 font-medium mb-8">
              Writing Principles
            </h3>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Be Direct",
                description: "Lead with the point. Remove unnecessary words. Every sentence should earn its place.",
              },
              {
                title: "Show Restraint",
                description: "No exclamation marks in headlines. Avoid superlatives. Let the work speak for itself.",
              },
              {
                title: "Stay Human",
                description: "Write for people, not algorithms. If you wouldn't say it in conversation, don't write it.",
              },
            ].map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <h4 className="font-medium text-[#001e3c] mb-2">
                  {principle.title}
                </h4>
                <p className="text-sm text-[#001e3c]/50 leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export function VoiceExamples() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const headlines = [
    "Intelligence in motion",
    "We help you move beyond",
    "A single intelligent platform for movement at scale",
    "Turning observation into understanding, and intelligence into action",
  ];

  return (
    <Section variant="default">
      <div ref={ref} className="max-w-5xl mx-auto w-full text-center">
        <FadeIn>
          <span className="inline-block text-xs tracking-[0.3em] uppercase font-medium mb-4 text-[#001e3c]/40">
            In Practice
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-[#001e3c] mb-16">
            Our Voice in Headlines
          </h2>
        </FadeIn>

        <div className="space-y-12">
          {headlines.map((headline, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{
                duration: 0.7,
                delay: 0.2 + index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p
                className={cn(
                  "text-[#001e3c]",
                  index === 0 && "text-5xl md:text-6xl font-extralight",
                  index === 1 && "text-4xl md:text-5xl font-light",
                  index === 2 && "text-2xl md:text-3xl font-light text-[#001e3c]/80",
                  index === 3 && "text-xl md:text-2xl font-light text-[#001e3c]/60"
                )}
              >
                {headline}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
