"use client";

import { useEffect, useRef, useState } from "react";
import { GlitchText } from "@/components/ui/GlitchText";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {children}
    </div>
  );
}

export default function BrandStoryPage() {
  return (
    <div className="max-w-4xl mx-auto px-12 py-16">
      {/* Header */}
      <div className="mb-16">
        <FadeInSection>
          <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#001f3e]/30 mb-3 block">
            Foundation
          </span>
        </FadeInSection>
        <FadeInSection delay={100}>
          <h1
            className="text-4xl font-semibold tracking-tight mb-4"
            style={{
              background: "linear-gradient(90deg, #001f3e 0%, #1e4890 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Brand Story
          </h1>
        </FadeInSection>
        <FadeInSection delay={200}>
          <p className="text-2xl text-[#001f3e]/60 leading-relaxed max-w-3xl">
            Understanding where we come from shapes how we communicate who we are.
          </p>
        </FadeInSection>
      </div>

      {/* Who We Are */}
      <FadeInSection delay={300}>
        <section className="mb-16">
          <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#7c98b3] mb-6 block">
            Who We Are
          </span>
          <p className="text-xl leading-relaxed text-[#001f3e] mb-4">
            An <span className="font-bold">AIoT solutions provider</span> that delivers a single,
            intelligent platform that unifies planning, live operations, safety, and analytics.
          </p>
          <p className="text-[#001f3e]/50">
            Intelligence in action. Movement by design.
          </p>
        </section>
      </FadeInSection>

      <div className="border-t border-[#001f3e]/10 mb-16" />

      {/* Our Origin */}
      <FadeInSection>
        <section className="mb-16">
          <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#7c98b3] mb-6 block">
            Our Origin
          </span>
          <p className="text-xl leading-relaxed text-[#001f3e] mb-4">
            Our story begins in the <span className="font-bold">Tadrart Acacus</span>,
            a mountain range in the Libyan desert where an ancient civilisation
            used art to understand the world around them.
          </p>
          <p className="text-[#001f3e]/50">
            Their markings were early signs of intelligence, the ability to observe,
            design, and remember.
          </p>
        </section>
      </FadeInSection>

      <div className="border-t border-[#001f3e]/10 mb-16" />

      {/* Then & Now */}
      <FadeInSection>
        <section className="mb-16">
          <div className="grid grid-cols-2 gap-6">
            <SpotlightCard className="p-8">
              <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#7c98b3] mb-6 block">
                Then
              </span>
              <p className="text-lg leading-relaxed text-[#001f3e]">
                The Acacus tribe observed movement, learned patterns, remembered risk
                and passed knowledge, so <span className="font-bold">each journey could be safer than the last</span>.
              </p>
            </SpotlightCard>
            <SpotlightCard className="p-8">
              <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#7c98b3] mb-6 block">
                Now
              </span>
              <p className="text-lg leading-relaxed text-[#001f3e]">
                Today, the Acacus tribe monitors fleets, cities, and networks, learning from
                millions of journeys and <span className="font-bold">helping fleets move faster and smarter</span>.
              </p>
            </SpotlightCard>
          </div>
        </section>
      </FadeInSection>

      <div className="border-t border-[#001f3e]/10 mb-16" />

      {/* One Platform */}
      <FadeInSection>
        <section className="mb-16">
          <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#7c98b3] mb-6 block">
            One Platform
          </span>
          <p className="text-xl text-[#001f3e] leading-relaxed mb-4">
            Acacus brings together planning, operations and safety, Edge AI while learning
            from every journey all as <span className="font-bold">one intelligent connected system</span>.
          </p>
          <p className="text-[#001f3e]/50">
            From Fleet Management to Decision Intelligence.
          </p>
        </section>
      </FadeInSection>

      <div className="border-t border-[#001f3e]/10 mb-16" />

      {/* Tagline - left aligned with glitch effect */}
      <FadeInSection>
        <section className="py-8">
          <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#7c98b3] mb-6 block">
            Tagline
          </span>
          <p className="text-4xl tracking-tight text-[#001f3e]">
            We help you <GlitchText className="font-bold">move beyond</GlitchText>
          </p>
        </section>
      </FadeInSection>
    </div>
  );
}
