"use client";

import { useState, useEffect, useCallback } from "react";
import { RotateCcw } from "lucide-react";

// SVG wordmark paths for ACACUS
const wordmarkPaths = [
  // A
  { type: "polygon", d: "28.93 0 0 43.39 10.83 43.39 33.22 9.77 44.33 26.48 22.12 26.48 31.3 35.46 50.32 35.46 55.61 43.39 66.45 43.39 37.52 0 28.93 0" },
  // C
  { type: "path", d: "M119.3,0h-31.74c-6.87,0-12.44,5.6-12.44,12.44v18.52c0,6.87,5.57,12.44,12.44,12.44h31.74c6.84,0,12.44-5.57,12.44-12.44v-1.85h-9.02v1.85c0,1.94-1.48,3.45-3.42,3.45h-31.74c-1.94,0-3.45-1.51-3.45-3.45v-18.52c0-1.91,1.51-3.42,3.45-3.42h31.74c1.94,0,3.42,1.51,3.42,3.42v1.85h9.02v-1.85c0-6.84-5.6-12.44-12.44-12.44Z" },
  // A
  { type: "polygon", d: "169.34 0 140.41 43.39 151.24 43.39 173.63 9.77 184.74 26.48 162.52 26.48 171.71 35.46 190.73 35.46 196.02 43.39 206.85 43.39 177.93 0 169.34 0" },
  // C
  { type: "path", d: "M259.68,0h-31.74c-6.87,0-12.44,5.6-12.44,12.44v18.52c0,6.87,5.57,12.44,12.44,12.44h31.74c6.84,0,12.44-5.57,12.44-12.44v-1.85h-9.02v1.85c0,1.94-1.48,3.45-3.42,3.45h-31.74c-1.94,0-3.45-1.51-3.45-3.45v-18.52c0-1.91,1.51-3.42,3.45-3.42h31.74c1.94,0,3.42,1.51,3.42,3.42v1.85h9.02v-1.85c0-6.84-5.6-12.44-12.44-12.44Z" },
  // U
  { type: "path", d: "M328.39,30.95c0,1.94-1.51,3.45-3.45,3.45h-31.74c-1.94,0-3.45-1.51-3.45-3.45V0h-8.96v31.01c0,6.84,5.6,12.38,12.41,12.38h31.74c6.87,0,12.44-5.57,12.44-12.44V0h-8.99v30.95Z" },
  // S
  { type: "path", d: "M400,13.22v-1.85c0-6.26-5.2-11.38-11.59-11.38h-30.77c-6.38,0-11.59,5.11-11.59,11.38v3.45c0,6.26,5.2,11.38,11.59,11.38h30.77c1.51,0,2.6,1,2.6,2.36v3.45c0,1.39-1.09,2.39-2.6,2.39h-30.77c-1.51,0-2.6-1-2.6-2.39v-1.85h-8.99v1.85c0,6.26,5.2,11.38,11.59,11.38h30.77c6.38,0,11.59-5.11,11.59-11.38v-3.45c0-6.26-5.2-11.35-11.59-11.35h-30.77c-1.51,0-2.6-1-2.6-2.39v-3.45c0-1.36,1.09-2.36,2.6-2.36h30.77c1.51,0,2.6,1,2.6,2.36v1.85h8.99Z" },
];

function AnimatedIcon({ play }: { play: boolean }) {
  return (
    <svg viewBox="0 0 133.33 106.71" className="w-16">
      <polygon
        fill="none"
        stroke="#001f3e"
        strokeWidth="0.5"
        strokeDasharray="500"
        strokeDashoffset={play ? "0" : "500"}
        points="133.33 66.62 66.71 0 40 26.7 0 26.7 0 106.71 80.01 26.58 93.34 26.68 93.34 80.02 53.32 80.02 80.01 106.71 133.33 106.69 133.33 66.62"
        style={{
          transition: play ? "stroke-dashoffset 1.5s ease-out" : "none",
        }}
      />
      <polygon
        fill="#001f3e"
        points="133.33 66.62 66.71 0 40 26.7 0 26.7 0 106.71 80.01 26.58 93.34 26.68 93.34 80.02 53.32 80.02 80.01 106.71 133.33 106.69 133.33 66.62"
        style={{
          opacity: play ? 1 : 0,
          transition: play ? "opacity 0.5s ease-out 1s" : "none",
        }}
      />
    </svg>
  );
}

function AnimatedWordmark({ play, fill = "#001f3e" }: { play: boolean; fill?: string }) {
  return (
    <svg viewBox="0 0 400 50" className="w-[200px] h-auto">
      {wordmarkPaths.map((path, index) => (
        path.type === "polygon" ? (
          <polygon
            key={index}
            fill={fill}
            points={path.d}
            style={{
              opacity: play ? 1 : 0,
              filter: play ? "blur(0px)" : "blur(8px)",
              transition: play
                ? `opacity 0.4s ease-out ${1.2 + index * 0.1}s, filter 0.4s ease-out ${1.2 + index * 0.1}s`
                : "none",
            }}
          />
        ) : (
          <path
            key={index}
            fill={fill}
            d={path.d}
            style={{
              opacity: play ? 1 : 0,
              filter: play ? "blur(0px)" : "blur(8px)",
              transition: play
                ? `opacity 0.4s ease-out ${1.2 + index * 0.1}s, filter 0.4s ease-out ${1.2 + index * 0.1}s`
                : "none",
            }}
          />
        )
      ))}
    </svg>
  );
}

function AnimatedTextOnly({ play, fill = "#001f3e" }: { play: boolean; fill?: string }) {
  return (
    <svg viewBox="0 0 400 50" className="w-[280px] h-auto">
      {wordmarkPaths.map((path, index) => (
        path.type === "polygon" ? (
          <polygon
            key={index}
            fill={fill}
            points={path.d}
            style={{
              opacity: play ? 1 : 0,
              filter: play ? "blur(0px)" : "blur(10px)",
              transition: play
                ? `opacity 0.5s ease-out ${index * 0.15}s, filter 0.5s ease-out ${index * 0.15}s`
                : "none",
            }}
          />
        ) : (
          <path
            key={index}
            fill={fill}
            d={path.d}
            style={{
              opacity: play ? 1 : 0,
              filter: play ? "blur(0px)" : "blur(10px)",
              transition: play
                ? `opacity 0.5s ease-out ${index * 0.15}s, filter 0.5s ease-out ${index * 0.15}s`
                : "none",
            }}
          />
        )
      ))}
    </svg>
  );
}

function StaticWordmark({ fill = "#001f3e" }: { fill?: string }) {
  return (
    <svg viewBox="0 0 400 50" className="w-[200px] h-auto">
      {wordmarkPaths.map((path, index) => (
        path.type === "polygon" ? (
          <polygon key={index} fill={fill} points={path.d} />
        ) : (
          <path key={index} fill={fill} d={path.d} />
        )
      ))}
    </svg>
  );
}

function LogoMark({ variant = "navy" }: { variant?: "navy" | "white" }) {
  const fill = variant === "navy" ? "#001f3e" : "#f6f8ed";
  return (
    <svg viewBox="0 0 133.33 106.71" className="w-16">
      <polygon fill={fill} points="133.33 66.62 66.71 0 40 26.7 0 26.7 0 106.71 80.01 26.58 93.34 26.68 93.34 80.02 53.32 80.02 80.01 106.71 133.33 106.69 133.33 66.62"/>
    </svg>
  );
}

function ReplayButton({ onClick, variant = "light" }: { onClick: () => void; variant?: "light" | "dark" }) {
  return (
    <button
      onClick={onClick}
      className={`absolute top-3 right-3 p-1.5 rounded-md transition-all z-10 ${
        variant === "dark"
          ? "bg-[#f6f8ed]/20 text-[#f6f8ed]/60 hover:bg-[#f6f8ed]/30 hover:text-[#f6f8ed]"
          : "bg-[#f6f8ed] text-[#001f3e]/40 hover:text-[#001f3e]/70"
      }`}
      title="Replay animation"
    >
      <RotateCcw className="w-3 h-3" />
    </button>
  );
}

function AnimatedIconDark({ play }: { play: boolean }) {
  return (
    <svg viewBox="0 0 133.33 106.71" className="w-16">
      <polygon
        fill="none"
        stroke="#f6f8ed"
        strokeWidth="0.5"
        strokeDasharray="500"
        strokeDashoffset={play ? "0" : "500"}
        points="133.33 66.62 66.71 0 40 26.7 0 26.7 0 106.71 80.01 26.58 93.34 26.68 93.34 80.02 53.32 80.02 80.01 106.71 133.33 106.69 133.33 66.62"
        style={{
          transition: play ? "stroke-dashoffset 1.5s ease-out" : "none",
        }}
      />
      <polygon
        fill="#f6f8ed"
        points="133.33 66.62 66.71 0 40 26.7 0 26.7 0 106.71 80.01 26.58 93.34 26.68 93.34 80.02 53.32 80.02 80.01 106.71 133.33 106.69 133.33 66.62"
        style={{
          opacity: play ? 1 : 0,
          transition: play ? "opacity 0.5s ease-out 1s" : "none",
        }}
      />
    </svg>
  );
}

export default function LogoPage() {
  const [playConstruction, setPlayConstruction] = useState(false);
  const [playFullMark, setPlayFullMark] = useState(false);
  const [playFullMarkDark, setPlayFullMarkDark] = useState(false);
  const [playTextOnly, setPlayTextOnly] = useState(false);
  const [playTextOnlyDark, setPlayTextOnlyDark] = useState(false);

  useEffect(() => {
    setPlayConstruction(true);
    setPlayFullMark(true);
    setPlayFullMarkDark(true);
    setPlayTextOnly(true);
    setPlayTextOnlyDark(true);
  }, []);

  const replayConstruction = useCallback(() => {
    setPlayConstruction(false);
    setTimeout(() => setPlayConstruction(true), 50);
  }, []);

  const replayFullMark = useCallback(() => {
    setPlayFullMark(false);
    setTimeout(() => setPlayFullMark(true), 50);
  }, []);

  const replayFullMarkDark = useCallback(() => {
    setPlayFullMarkDark(false);
    setTimeout(() => setPlayFullMarkDark(true), 50);
  }, []);

  const replayTextOnly = useCallback(() => {
    setPlayTextOnly(false);
    setTimeout(() => setPlayTextOnly(true), 50);
  }, []);

  const replayTextOnlyDark = useCallback(() => {
    setPlayTextOnlyDark(false);
    setTimeout(() => setPlayTextOnlyDark(true), 50);
  }, []);

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
          Logo
        </h1>
        <p className="text-lg text-[#001f3e]/50 leading-relaxed max-w-2xl">
          The Acacus mark represents intelligence, movement, and progress.
          Use it consistently to build recognition.
        </p>
      </div>

      {/* Construction - at the top */}
      <section className="mb-16">
        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#7c98b3] mb-6 block">
          Construction
        </span>

        <div className="bg-white border border-[#001f3e]/10 p-12 relative overflow-hidden">
          <ReplayButton onClick={replayConstruction} />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle, #001f3e08 1px, transparent 1px)`,
              backgroundSize: "16px 16px",
            }}
          />

          <div className="flex justify-center relative">
            <svg viewBox="0 0 133.33 106.71" className="w-48">
              <polygon
                fill="none"
                stroke="#001f3e"
                strokeWidth="0.3"
                strokeDasharray="500"
                strokeDashoffset={playConstruction ? "0" : "500"}
                points="133.33 66.62 66.71 0 40 26.7 0 26.7 0 106.71 80.01 26.58 93.34 26.68 93.34 80.02 53.32 80.02 80.01 106.71 133.33 106.69 133.33 66.62"
                style={{
                  transition: playConstruction ? "stroke-dashoffset 2s ease-out" : "none",
                }}
              />
              <polygon
                fill="#001f3e"
                points="133.33 66.62 66.71 0 40 26.7 0 26.7 0 106.71 80.01 26.58 93.34 26.68 93.34 80.02 53.32 80.02 80.01 106.71 133.33 106.69 133.33 66.62"
                style={{
                  opacity: playConstruction ? 1 : 0,
                  transition: playConstruction ? "opacity 0.5s ease-out 1.5s" : "none",
                }}
              />
            </svg>
          </div>
        </div>

        <p className="text-sm text-[#001f3e]/50 mt-4">
          The mark is built from geometric triangles representing interconnected intelligence.
        </p>
      </section>

      <div className="border-t border-[#001f3e]/10 mb-16" />

      {/* Full Mark - Animated */}
      <section className="mb-16">
        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#7c98b3] mb-6 block">
          Full Mark
        </span>
        <p className="text-[#001f3e]/60 leading-relaxed mb-6">
          The full logo combines the icon mark with the wordmark.
        </p>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-white border border-[#001f3e]/10 p-12 flex items-center justify-center gap-6 relative overflow-hidden">
            <ReplayButton onClick={replayFullMark} variant="light" />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(circle, #001f3e08 1px, transparent 1px)`,
                backgroundSize: "16px 16px",
              }}
            />
            <div className="relative flex items-center gap-6">
              <AnimatedIcon play={playFullMark} />
              <AnimatedWordmark play={playFullMark} />
            </div>
          </div>
          <div className="bg-[#001f3e] p-12 flex items-center justify-center gap-6 relative overflow-hidden">
            <ReplayButton onClick={replayFullMarkDark} variant="dark" />
            <div className="relative flex items-center gap-6">
              <AnimatedIconDark play={playFullMarkDark} />
              <AnimatedWordmark play={playFullMarkDark} fill="#f6f8ed" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-xs text-[#001f3e]/50">
          <p>Navy on light backgrounds</p>
          <p>Light on dark backgrounds</p>
        </div>
      </section>

      <div className="border-t border-[#001f3e]/10 mb-16" />

      {/* Text Only */}
      <section className="mb-16">
        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#7c98b3] mb-6 block">
          Text Only
        </span>
        <p className="text-[#001f3e]/60 leading-relaxed mb-6">
          Use when the icon is already established or in text-heavy contexts.
        </p>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-white border border-[#001f3e]/10 p-12 flex items-center justify-center relative overflow-hidden">
            <ReplayButton onClick={replayTextOnly} variant="light" />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(circle, #001f3e08 1px, transparent 1px)`,
                backgroundSize: "16px 16px",
              }}
            />
            <div className="relative">
              <AnimatedTextOnly play={playTextOnly} />
            </div>
          </div>
          <div className="bg-[#001f3e] p-12 flex items-center justify-center relative overflow-hidden">
            <ReplayButton onClick={replayTextOnlyDark} variant="dark" />
            <div className="relative">
              <AnimatedTextOnly play={playTextOnlyDark} fill="#f6f8ed" />
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-[#001f3e]/10 mb-16" />

      {/* Icon Mark */}
      <section className="mb-16">
        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#7c98b3] mb-6 block">
          Icon Mark
        </span>
        <p className="text-[#001f3e]/60 leading-relaxed mb-6">
          Use when space is limited or the brand is established in context.
        </p>

        <div className="grid grid-cols-4 gap-4 mb-4">
          <div className="bg-white border border-[#001f3e]/10 p-8 flex items-center justify-center aspect-square relative overflow-hidden">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(circle, #001f3e08 1px, transparent 1px)`,
                backgroundSize: "12px 12px",
              }}
            />
            <div className="relative">
              <LogoMark variant="navy" />
            </div>
          </div>
          <div className="bg-[#f6f8ed] p-8 flex items-center justify-center aspect-square">
            <LogoMark variant="navy" />
          </div>
          <div className="bg-[#001f3e] p-8 flex items-center justify-center aspect-square">
            <LogoMark variant="white" />
          </div>
          <div className="bg-[#1e4890] p-8 flex items-center justify-center aspect-square">
            <LogoMark variant="white" />
          </div>
        </div>
      </section>

      <div className="border-t border-[#001f3e]/10 mb-16" />

      {/* Downloads */}
      <section>
        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#7c98b3] mb-6 block">
          Downloads
        </span>
        <div className="grid grid-cols-3 gap-4">
          {["SVG", "PNG", "PDF"].map((format) => (
            <button
              key={format}
              className="p-4 border border-[#001f3e]/10 hover:border-[#1e4890]/30 hover:bg-[#f6f8ed] transition-all text-left"
            >
              <p className="text-sm font-semibold text-[#001f3e]">Logo {format}</p>
              <p className="text-xs text-[#001f3e]/40 mt-1">All variations</p>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
