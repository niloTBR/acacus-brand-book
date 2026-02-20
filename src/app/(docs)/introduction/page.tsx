"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { CodeBlock, TokenDisplay } from "@/components/CodeBlock";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { HoverBorderGradient } from "@/components/ui/HoverBorderGradient";
import { TextReveal } from "@/components/ui/TextReveal";

function FullScreenHero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Gradient Background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #f6f8ed 0%, #7c98b3 35%, #1e4890 65%, #001f3e 100%)",
        }}
      />

      {/* Video with plus-lighter blend */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-[1]"
        style={{
          mixBlendMode: "plus-lighter",
          opacity: 0.8,
        }}
      >
        <source src="/videos/Video_2.mov" type="video/quicktime" />
      </video>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-12">
        {/* Top - Icon: dark blue box with beige icon */}
        <div>
          <div className="w-16 h-16 bg-[#001f3e] flex items-center justify-center">
            <svg viewBox="0 0 133.33 106.71" className="w-8 h-8">
              <polygon
                fill="#f6f8ed"
                points="133.33 66.62 66.71 0 40 26.7 0 26.7 0 106.71 80.01 26.58 93.34 26.68 93.34 80.02 53.32 80.02 80.01 106.71 133.33 106.69 133.33 66.62"
              />
            </svg>
          </div>
        </div>

        {/* Middle - Logo 50% width, left aligned, sandstone color */}
        <div className="flex-1 flex items-center">
          <div
            className={`transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {/* ACACUS Logo Text - sandstone/beige color */}
            <svg viewBox="0 0 400 50" className="w-[240px] h-auto">
              {/* A */}
              <polygon fill="#f6f8ed" points="28.93 0 0 43.39 10.83 43.39 33.22 9.77 44.33 26.48 22.12 26.48 31.3 35.46 50.32 35.46 55.61 43.39 66.45 43.39 37.52 0 28.93 0"/>
              {/* C */}
              <path fill="#f6f8ed" d="M119.3,0h-31.74c-6.87,0-12.44,5.6-12.44,12.44v18.52c0,6.87,5.57,12.44,12.44,12.44h31.74c6.84,0,12.44-5.57,12.44-12.44v-1.85h-9.02v1.85c0,1.94-1.48,3.45-3.42,3.45h-31.74c-1.94,0-3.45-1.51-3.45-3.45v-18.52c0-1.91,1.51-3.42,3.45-3.42h31.74c1.94,0,3.42,1.51,3.42,3.42v1.85h9.02v-1.85c0-6.84-5.6-12.44-12.44-12.44Z"/>
              {/* A */}
              <polygon fill="#f6f8ed" points="169.34 0 140.41 43.39 151.24 43.39 173.63 9.77 184.74 26.48 162.52 26.48 171.71 35.46 190.73 35.46 196.02 43.39 206.85 43.39 177.93 0 169.34 0"/>
              {/* C */}
              <path fill="#f6f8ed" d="M259.68,0h-31.74c-6.87,0-12.44,5.6-12.44,12.44v18.52c0,6.87,5.57,12.44,12.44,12.44h31.74c6.84,0,12.44-5.57,12.44-12.44v-1.85h-9.02v1.85c0,1.94-1.48,3.45-3.42,3.45h-31.74c-1.94,0-3.45-1.51-3.45-3.45v-18.52c0-1.91,1.51-3.42,3.45-3.42h31.74c1.94,0,3.42,1.51,3.42,3.42v1.85h9.02v-1.85c0-6.84-5.6-12.44-12.44-12.44Z"/>
              {/* U */}
              <path fill="#f6f8ed" d="M328.39,30.95c0,1.94-1.51,3.45-3.45,3.45h-31.74c-1.94,0-3.45-1.51-3.45-3.45V0h-8.96v31.01c0,6.84,5.6,12.38,12.41,12.38h31.74c6.87,0,12.44-5.57,12.44-12.44V0h-8.99v30.95Z"/>
              {/* S */}
              <path fill="#f6f8ed" d="M400,13.22v-1.85c0-6.26-5.2-11.38-11.59-11.38h-30.77c-6.38,0-11.59,5.11-11.59,11.38v3.45c0,6.26,5.2,11.38,11.59,11.38h30.77c1.51,0,2.6,1,2.6,2.36v3.45c0,1.39-1.09,2.39-2.6,2.39h-30.77c-1.51,0-2.6-1-2.6-2.39v-1.85h-8.99v1.85c0,6.26,5.2,11.38,11.59,11.38h30.77c6.38,0,11.59-5.11,11.59-11.38v-3.45c0-6.26-5.2-11.35-11.59-11.35h-30.77c-1.51,0-2.6-1-2.6-2.39v-3.45c0-1.36,1.09-2.36,2.6-2.36h30.77c1.51,0,2.6,1,2.6,2.36v1.85h8.99Z"/>
            </svg>
          </div>
        </div>

        {/* Bottom - Beige text, semibold with highlights */}
        <div className="max-w-xl">
          <p
            className={`text-[#f6f8ed] font-semibold leading-relaxed text-lg transition-all duration-1000 delay-500 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Welcome to the <span className="font-bold">Acacus Brand System</span>. This documentation provides
            <span className="font-bold"> everything you need</span> to build consistent, on-brand experiences
            across <span className="font-bold">all platforms</span>.
          </p>
        </div>
      </div>
    </div>
  );
}

function PlatformSection() {
  return (
    <div className="relative w-full h-[280px] overflow-hidden">
      {/* Gradient Background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #f6f8ed 0%, #7c98b3 35%, #1e4890 65%, #001f3e 100%)",
        }}
      />

      {/* Video with plus-lighter blend */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          mixBlendMode: "plus-lighter",
          opacity: 0.5,
        }}
      >
        <source src="/videos/Video_4.mov" type="video/quicktime" />
      </video>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center p-10">
        {/* Icon top left */}
        <div className="absolute top-6 left-6">
          <svg viewBox="0 0 133.33 106.71" className="w-5 h-5">
            <polygon
              fill="rgba(246,248,237,0.4)"
              points="133.33 66.62 66.71 0 40 26.7 0 26.7 0 106.71 80.01 26.58 93.34 26.68 93.34 80.02 53.32 80.02 80.01 106.71 133.33 106.69 133.33 66.62"
            />
          </svg>
        </div>

        {/* ACACUS wordmark */}
        <p
          className="text-sm text-[#f6f8ed]/60 font-light mb-4"
          style={{ letterSpacing: "0.25em" }}
        >
          ACACUS
        </p>

        {/* Main text */}
        <p className="text-lg text-[#f6f8ed] font-semibold leading-relaxed max-w-xl">
          Acacus brings together planning, operations and safety, Edge AI while learning
          from every journey all as <span className="font-bold">one intelligent connected system</span>.
        </p>
      </div>
    </div>
  );
}

export default function IntroductionPage() {
  return (
    <div>
      {/* Full Screen Hero - outside container for true full width */}
      <FullScreenHero />

      {/* Content below hero */}
      <div className="max-w-4xl mx-auto px-12 py-16">
        {/* What is this */}
        <section className="mb-16">
          <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#7c98b3] mb-4 block">
            What is this?
          </span>
          <TextReveal className="text-[#001f3e]/70 font-light leading-relaxed">
            The Acacus Brand System is a comprehensive design system that provides guidelines, assets, and code for building products and experiences that represent Acacus. It includes our visual identity, typography, color system, voice guidelines, and reusable design tokens.
          </TextReveal>
        </section>

        <div className="border-t border-[#001f3e]/10 mb-16" />

        {/* Platform Section with Video */}
        <div className="mb-16">
          <PlatformSection />
        </div>

        <div className="border-t border-[#001f3e]/10 mb-16" />

        {/* Quick Start */}
        <section className="mb-16">
          <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#7c98b3] mb-4 block">
            Quick Start
          </span>
          <p className="text-[#001f3e]/70 font-light leading-relaxed mb-6">
            Add the Acacus design tokens to your project by importing our CSS variables:
          </p>

          <CodeBlock
            filename="globals.css"
            language="css"
            code={`:root {
  /* Brand Colors */
  --acacus-navy: #001f3e;
  --acacus-blue: #1e4890;
  --acacus-sky: #7c98b3;
  --acacus-light: #f6f8ed;

  /* Brand Gradient */
  --acacus-gradient: linear-gradient(
    135deg,
    #f6f8ed 0%,
    #7c98b3 50%,
    #1e4890 75%,
    #001f3e 100%
  );

  /* Typography */
  --font-family: 'Naru Sans', system-ui, sans-serif;
}`}
          />
        </section>

        <div className="border-t border-[#001f3e]/10 mb-16" />

        {/* Design Tokens Preview */}
        <section className="mb-16">
          <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#7c98b3] mb-4 block">
            Design Tokens
          </span>
          <p className="text-[#001f3e]/70 font-light leading-relaxed mb-6">
            Click any token to copy it to your clipboard.
          </p>

          <div className="grid grid-cols-2 gap-3">
            <TokenDisplay name="--acacus-navy" value="#001f3e" preview="color" />
            <TokenDisplay name="--acacus-blue" value="#1e4890" preview="color" />
            <TokenDisplay name="--acacus-sky" value="#7c98b3" preview="color" />
            <TokenDisplay name="--acacus-light" value="#f6f8ed" preview="color" />
          </div>

          <Link href="/colors" className="inline-block mt-6">
            <HoverBorderGradient className="px-4 py-2 text-sm font-semibold text-[#001f3e] flex items-center gap-2">
              View all color tokens
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </HoverBorderGradient>
          </Link>
        </section>

        <div className="border-t border-[#001f3e]/10 mb-16" />

        {/* Navigation Cards with Spotlight Effect */}
        <section>
          <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#7c98b3] mb-6 block">
            Explore
          </span>
          <div className="grid grid-cols-2 gap-4">
            {[
              { name: "Brand Story", href: "/brand-story", desc: "Our origin and values" },
              { name: "Logo", href: "/logo", desc: "Mark usage and assets" },
              { name: "Typography", href: "/typography", desc: "Naru Sans typeface" },
              { name: "Colors", href: "/colors", desc: "Color system and tokens" },
              { name: "Voice & Tone", href: "/voice", desc: "How we communicate" },
            ].map((item) => (
              <Link key={item.href} href={item.href}>
                <SpotlightCard className="p-6 h-full transition-all hover:border-[#1e4890]/30">
                  <h3 className="font-semibold text-[#001f3e] mb-1">
                    {item.name}
                  </h3>
                  <p className="text-sm text-[#001f3e]/40">{item.desc}</p>
                </SpotlightCard>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

