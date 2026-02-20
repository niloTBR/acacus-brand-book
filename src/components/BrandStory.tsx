"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Section, FadeIn } from "./Section";

export function BrandStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section id="story" variant="navy">
      <div ref={ref} className="max-w-5xl mx-auto">
        {/* Section Label */}
        <motion.span
          initial={{ opacity: 0, filter: "blur(4px)" }}
          animate={isInView ? { opacity: 1, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.6 }}
          className="inline-block text-xs tracking-[0.3em] uppercase font-medium mb-12 text-white/40"
        >
          Our Story
        </motion.span>

        {/* Main Story */}
        <div className="space-y-20">
          {/* Opening */}
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight leading-[1.15] tracking-tight">
              Our story begins in the{" "}
              <span className="font-normal">Tadrart Acacus</span>, a mountain
              range in the Libyan desert where an ancient civilisation used art
              to understand the world around them.
            </h2>
          </motion.div>

          {/* Secondary paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-3xl"
          >
            <p className="text-xl md:text-2xl font-light leading-relaxed text-white/70">
              Their markings were early signs of intelligence. The ability to
              observe, design, and remember. Those markings were not decoration.
              They were how the Acacus people shared knowledge and protected the
              tribe.
            </p>
          </motion.div>

          {/* Tribe Attributes */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="pt-8 border-t border-white/10"
          >
            <p className="text-sm tracking-[0.2em] uppercase text-white/40 mb-8">
              The Acacus People
            </p>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { label: "Observed", description: "Movement" },
                { label: "Learned", description: "Patterns" },
                { label: "Remembered", description: "Risk" },
                { label: "Passed Forward", description: "Knowledge" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                >
                  <span className="block text-2xl md:text-3xl font-light mb-2">
                    {item.label}
                  </span>
                  <span className="text-white/50 text-sm">{item.description}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Closing thought */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="pt-8"
          >
            <p className="text-lg text-white/50 font-light italic">
              So each journey could be safer than the last.
            </p>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

export function BrandStoryTransition() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section variant="ivory">
      <div ref={ref} className="max-w-5xl mx-auto">
        <FadeIn delay={0}>
          <span className="inline-block text-xs tracking-[0.3em] uppercase font-medium mb-12 text-[#001e3c]/40">
            From Then to Now
          </span>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Then */}
          <motion.div
            initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
            animate={isInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-sm tracking-[0.2em] uppercase text-[#001e3c]/40 font-medium">
              Then
            </span>
            <ul className="mt-6 space-y-4">
              <li className="text-2xl md:text-3xl font-light text-[#001e3c]">
                Movement across land
              </li>
              <li className="text-2xl md:text-3xl font-light text-[#001e3c]">
                Learning from past journeys
              </li>
            </ul>
          </motion.div>

          {/* Now */}
          <motion.div
            initial={{ opacity: 0, x: 30, filter: "blur(10px)" }}
            animate={isInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-sm tracking-[0.2em] uppercase text-[#001e3c]/40 font-medium">
              Now
            </span>
            <ul className="mt-6 space-y-4">
              <li className="text-2xl md:text-3xl font-light text-[#001e3c]">
                Fleets, cities, and networks
              </li>
              <li className="text-2xl md:text-3xl font-light text-[#001e3c]">
                Learning from millions of journeys
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-20 pt-8 border-t border-[#001e3c]/10"
        >
          <p className="text-xl md:text-2xl font-light text-[#001e3c]/80 max-w-2xl">
            The scale has changed.
            <br />
            <span className="text-[#001e3c]">The responsibility has not.</span>
          </p>
        </motion.div>
      </div>
    </Section>
  );
}

export function BrandMission() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section variant="default">
      <div ref={ref} className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(15px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-3xl md:text-4xl lg:text-5xl font-extralight leading-[1.3] tracking-tight text-[#001e3c]">
            From the Acacus caves to modern cities, progress has always depended
            on one thing: turning observation into understanding, and
            intelligence into action.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16"
        >
          <p className="text-lg text-[#001e3c]/60 font-light">
            We are Acacus.
            <br />
            <span className="text-[#001e3c] font-normal">
              And we help you move beyond.
            </span>
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
