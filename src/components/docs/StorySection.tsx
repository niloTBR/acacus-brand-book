"use client";

import { motion } from "framer-motion";
import { DocSection, DocHeader, DocSubsection, DocCard, DocDivider } from "../DocLayout";

export function StorySection() {
  return (
    <DocSection id="story">
      <DocHeader
        label="Foundation"
        title="Brand Story"
        description="Our name carries meaning. Understanding where we come from shapes how we communicate who we are."
      />

      {/* Origin */}
      <DocSubsection
        id="origin"
        title="Our Origin"
        description="The story behind our name and what it represents."
      >
        <DocCard>
          <div className="space-y-6">
            <p className="text-2xl font-extralight text-[#001e3c] leading-relaxed">
              Our story begins in the <span className="font-normal">Tadrart Acacus</span>,
              a mountain range in the Libyan desert where an ancient civilisation
              used art to understand the world around them.
            </p>
            <p className="text-[#001e3c]/60 font-light leading-relaxed">
              Their markings were early signs of intelligence. The ability to observe,
              design, and remember. Those markings were not decoration. They were how
              the Acacus people shared knowledge and protected the tribe.
            </p>
          </div>
        </DocCard>

        <div className="grid grid-cols-4 gap-4 mt-6">
          {[
            { action: "Observed", subject: "Movement" },
            { action: "Learned", subject: "Patterns" },
            { action: "Remembered", subject: "Risk" },
            { action: "Passed Forward", subject: "Knowledge" },
          ].map((item, index) => (
            <motion.div
              key={item.action}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="text-center p-4"
            >
              <span className="block text-lg font-light text-[#001e3c]">{item.action}</span>
              <span className="text-xs text-[#001e3c]/40">{item.subject}</span>
            </motion.div>
          ))}
        </div>
      </DocSubsection>

      <DocDivider />

      {/* Mission */}
      <DocSubsection
        id="mission"
        title="Mission"
        description="What we exist to do."
      >
        <DocCard className="bg-[#001e3c] text-white">
          <p className="text-xl font-extralight leading-relaxed mb-6">
            From the Acacus caves to modern cities, progress has always depended on one thing:
            turning observation into understanding, and intelligence into action.
          </p>
          <p className="text-white/60 font-light">
            We are Acacus. And we help you move beyond.
          </p>
        </DocCard>
      </DocSubsection>

      <DocDivider />

      {/* Values */}
      <DocSubsection
        id="values"
        title="Values"
        description="The principles that guide our work."
      >
        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              title: "Intelligence is shared",
              description: "Knowledge grows when it moves between people and systems.",
            },
            {
              title: "Responsibility is collective",
              description: "We build systems that protect, not experiment on, the tribe.",
            },
            {
              title: "Progress is earned",
              description: "Every journey teaches. Every lesson strengthens what comes next.",
            },
            {
              title: "Scale demands care",
              description: "The larger the system, the greater the responsibility.",
            },
          ].map((value, index) => (
            <DocCard key={value.title}>
              <h4 className="font-medium text-[#001e3c] mb-2">{value.title}</h4>
              <p className="text-sm text-[#001e3c]/50 font-light">{value.description}</p>
            </DocCard>
          ))}
        </div>
      </DocSubsection>
    </DocSection>
  );
}
