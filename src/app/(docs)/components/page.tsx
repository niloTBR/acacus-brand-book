"use client";

import Link from "next/link";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

const componentGroups = [
  {
    name: "Cards",
    href: "/components/cards",
    description: "Interactive card components with effects",
    count: 3,
    components: ["SpotlightCard", "Card3D", "BentoGrid"],
  },
  {
    name: "Text Effects",
    href: "/components/text-effects",
    description: "Animated text and reveal components",
    count: 8,
    components: ["GlitchText", "Typewriter", "FlipWords", "BlurText", "GradientText", "NumberTicker", "TextReveal", "TextRevealByWord"],
  },
  {
    name: "Buttons",
    href: "/components/buttons",
    description: "Interactive buttons and clickable elements",
    count: 4,
    components: ["HoverBorderGradient", "MagneticButton", "ShimmerButton", "MovingBorder"],
  },
  {
    name: "Backgrounds",
    href: "/components/backgrounds",
    description: "Animated and decorative backgrounds",
    count: 5,
    components: ["Aurora", "Particles", "Ripple", "DotGrid", "GridLines"],
  },
  {
    name: "Animations",
    href: "/components/animations",
    description: "Motion and scroll-based animations",
    count: 3,
    components: ["Marquee", "Float", "Stagger"],
  },
];

const totalComponents = componentGroups.reduce((acc, group) => acc + group.count, 0);

export default function ComponentsPage() {
  return (
    <div className="max-w-4xl mx-auto px-12 py-16">
      {/* Header */}
      <div className="mb-16">
        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#001f3e]/30 mb-3 block">
          Library
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
          Components
        </h1>
        <p className="text-lg text-[#001f3e]/50 leading-relaxed max-w-2xl">
          {totalComponents} interactive UI components styled for the Acacus brand.
          Built with React and designed for modern web experiences.
        </p>
      </div>

      {/* Stats */}
      <section className="mb-16">
        <div className="grid grid-cols-5 gap-4">
          {componentGroups.map((group) => (
            <div key={group.name} className="text-center p-4 border border-[#001f3e]/10">
              <p className="text-3xl font-bold text-[#001f3e]">{group.count}</p>
              <p className="text-xs text-[#001f3e]/50 mt-1">{group.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Component Groups */}
      <section className="mb-16">
        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#7c98b3] mb-6 block">
          Categories
        </span>

        <div className="space-y-4">
          {componentGroups.map((group) => (
            <Link key={group.href} href={group.href}>
              <SpotlightCard className="p-6 transition-all hover:border-[#1e4890]/30">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-[#001f3e] mb-1">
                      {group.name}
                    </h3>
                    <p className="text-sm text-[#001f3e]/50">{group.description}</p>
                  </div>
                  <span className="text-[10px] bg-[#f6f8ed] text-[#001f3e]/60 px-2 py-0.5 font-mono">
                    {group.count}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {group.components.map((comp) => (
                    <span
                      key={comp}
                      className="text-[10px] px-2 py-1 bg-[#001f3e]/5 text-[#001f3e]/60 font-mono"
                    >
                      {comp}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </Link>
          ))}
        </div>
      </section>

      <div className="border-t border-[#001f3e]/10 mb-16" />

      {/* Installation */}
      <section>
        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#7c98b3] mb-6 block">
          Installation
        </span>
        <p className="text-[#001f3e]/60 leading-relaxed mb-4">
          All components are located in <code className="text-sm bg-[#f6f8ed] px-2 py-0.5 font-mono">src/components/ui/</code>.
          Import them directly into your pages.
        </p>
        <div className="bg-[#001f3e] p-6 font-mono text-sm text-[#f6f8ed]/80 space-y-1 overflow-x-auto">
          <div><code>// Cards</code></div>
          <div><code>import {"{"} SpotlightCard {"}"} from "@/components/ui/SpotlightCard";</code></div>
          <div><code>import {"{"} Card3D {"}"} from "@/components/ui/Card3D";</code></div>
          <div><code>import {"{"} BentoGrid, BentoGridItem {"}"} from "@/components/ui/BentoGrid";</code></div>
          <div className="pt-2"><code>// Text Effects</code></div>
          <div><code>import {"{"} GlitchText {"}"} from "@/components/ui/GlitchText";</code></div>
          <div><code>import {"{"} Typewriter {"}"} from "@/components/ui/Typewriter";</code></div>
          <div><code>import {"{"} FlipWords {"}"} from "@/components/ui/FlipWords";</code></div>
          <div><code>import {"{"} BlurText {"}"} from "@/components/ui/BlurText";</code></div>
          <div><code>import {"{"} GradientText {"}"} from "@/components/ui/GradientText";</code></div>
          <div><code>import {"{"} NumberTicker {"}"} from "@/components/ui/NumberTicker";</code></div>
          <div className="pt-2"><code>// Buttons</code></div>
          <div><code>import {"{"} ShimmerButton {"}"} from "@/components/ui/ShimmerButton";</code></div>
          <div><code>import {"{"} MagneticButton {"}"} from "@/components/ui/MagneticButton";</code></div>
          <div><code>import {"{"} MovingBorder {"}"} from "@/components/ui/MovingBorder";</code></div>
          <div className="pt-2"><code>// Backgrounds</code></div>
          <div><code>import {"{"} Aurora {"}"} from "@/components/ui/Aurora";</code></div>
          <div><code>import {"{"} Particles {"}"} from "@/components/ui/Particles";</code></div>
          <div><code>import {"{"} Ripple {"}"} from "@/components/ui/Ripple";</code></div>
          <div className="pt-2"><code>// Animations</code></div>
          <div><code>import {"{"} Marquee {"}"} from "@/components/ui/Marquee";</code></div>
        </div>
      </section>
    </div>
  );
}
