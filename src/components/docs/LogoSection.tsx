"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { DocSection, DocHeader, DocSubsection, DocCard, DocGrid, DocDivider, DocNote } from "../DocLayout";
import { cn } from "@/lib/utils";

function LogoMark({ variant = "navy", size = "md" }: { variant?: "navy" | "white"; size?: "sm" | "md" | "lg" }) {
  const fill = variant === "navy" ? "#001e3c" : "#ffffff";
  const sizes = { sm: "w-12", md: "w-20", lg: "w-32" };

  return (
    <svg viewBox="0 0 133.33 106.71" className={sizes[size]}>
      <polygon fill={fill} points="133.33 66.62 66.71 0 40 26.7 0 26.7 0 106.71 80.01 26.58 93.34 26.68 93.34 80.02 53.32 80.02 80.01 106.71 133.33 106.69 133.33 66.62"/>
    </svg>
  );
}

function FullLogo({ variant = "navy" }: { variant?: "navy" | "white" }) {
  const fill = variant === "navy" ? "#001e3c" : "#ffffff";

  return (
    <svg viewBox="0 0 400 194.35" className="w-48">
      <polygon fill={fill} points="266.67 66.62 200.04 0 173.34 26.7 133.33 26.7 133.33 106.71 213.34 26.58 226.68 26.68 226.68 80.02 186.65 80.02 213.34 106.71 266.67 106.69 266.67 66.62"/>
      <polygon fill={fill} points="28.93 150.96 0 194.35 10.83 194.35 33.22 160.73 44.33 177.44 22.12 177.44 31.3 186.42 50.32 186.42 55.61 194.35 66.45 194.35 37.52 150.96 28.93 150.96"/>
      <path fill={fill} d="M119.3,150.96h-31.74c-6.87,0-12.44,5.6-12.44,12.44v18.52c0,6.87,5.57,12.44,12.44,12.44h31.74c6.84,0,12.44-5.57,12.44-12.44v-1.85h-9.02v1.85c0,1.94-1.48,3.45-3.42,3.45h-31.74c-1.94,0-3.45-1.51-3.45-3.45v-18.52c0-1.91,1.51-3.42,3.45-3.42h31.74c1.94,0,3.42,1.51,3.42,3.42v1.85h9.02v-1.85c0-6.84-5.6-12.44-12.44-12.44Z"/>
      <polygon fill={fill} points="169.34 150.96 140.41 194.35 151.24 194.35 173.63 160.73 184.74 177.44 162.52 177.44 171.71 186.42 190.73 186.42 196.02 194.35 206.85 194.35 177.93 150.96 169.34 150.96"/>
      <path fill={fill} d="M259.68,150.96h-31.74c-6.87,0-12.44,5.6-12.44,12.44v18.52c0,6.87,5.57,12.44,12.44,12.44h31.74c6.84,0,12.44-5.57,12.44-12.44v-1.85h-9.02v1.85c0,1.94-1.48,3.45-3.42,3.45h-31.74c-1.94,0-3.45-1.51-3.45-3.45v-18.52c0-1.91,1.51-3.42,3.45-3.42h31.74c1.94,0,3.42,1.51,3.42,3.42v1.85h9.02v-1.85c0-6.84-5.6-12.44-12.44-12.44Z"/>
      <path fill={fill} d="M328.39,181.91c0,1.94-1.51,3.45-3.45,3.45h-31.74c-1.94,0-3.45-1.51-3.45-3.45v-30.95h-8.96v31.01c0,6.84,5.6,12.38,12.41,12.38h31.74c6.87,0,12.44-5.57,12.44-12.44v-30.95h-8.99v30.95Z"/>
      <path fill={fill} d="M400,164.18v-1.85c0-6.26-5.2-11.38-11.59-11.38h-30.77c-6.38,0-11.59,5.11-11.59,11.38v3.45c0,6.26,5.2,11.38,11.59,11.38h30.77c1.51,0,2.6,1,2.6,2.36v3.45c0,1.39-1.09,2.39-2.6,2.39h-30.77c-1.51,0-2.6-1-2.6-2.39v-1.85h-8.99v1.85c0,6.26,5.2,11.38,11.59,11.38h30.77c6.38,0,11.59-5.11,11.59-11.38v-3.45c0-6.26-5.2-11.35-11.59-11.35h-30.77c-1.51,0-2.6-1-2.6-2.39v-3.45c0-1.36,1.09-2.36,2.6-2.36h30.77c1.51,0,2.6,1,2.6,2.36v1.85h8.99Z"/>
    </svg>
  );
}

export function LogoSection() {
  const [showGrid, setShowGrid] = useState(false);

  return (
    <DocSection id="logo">
      <DocHeader
        label="Identity"
        title="Logo"
        description="The Acacus mark represents intelligence, movement, and progress. Use it consistently to build recognition."
      />

      {/* Primary Mark */}
      <DocSubsection
        id="primary-mark"
        title="Primary Mark"
        description="The full logo combines the icon mark with the wordmark. This is the preferred version for most applications."
      >
        <DocGrid cols={2}>
          <DocCard className="flex items-center justify-center min-h-[200px]">
            <FullLogo variant="navy" />
          </DocCard>
          <DocCard className="flex items-center justify-center min-h-[200px] bg-[#001e3c]">
            <FullLogo variant="white" />
          </DocCard>
        </DocGrid>
        <div className="grid grid-cols-2 gap-6 mt-2">
          <p className="text-xs text-[#001e3c]/40">Navy on light backgrounds</p>
          <p className="text-xs text-[#001e3c]/40">White on dark backgrounds</p>
        </div>
      </DocSubsection>

      <DocDivider />

      {/* Icon */}
      <DocSubsection
        id="icon"
        title="Icon Mark"
        description="Use the icon mark when space is limited or when the brand is already established in context."
      >
        <DocCard className="mb-6">
          <div className="flex items-center justify-center gap-16 py-8">
            <div className="text-center">
              <div className="bg-[#f5f3ef] rounded-xl p-8 mb-3">
                <LogoMark variant="navy" size="lg" />
              </div>
              <span className="text-xs text-[#001e3c]/40">Primary</span>
            </div>
            <div className="text-center">
              <div className="bg-[#001e3c] rounded-xl p-8 mb-3">
                <LogoMark variant="white" size="lg" />
              </div>
              <span className="text-xs text-[#001e3c]/40">Reversed</span>
            </div>
          </div>
        </DocCard>

        {/* Construction Grid */}
        <DocCard>
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-medium text-[#001e3c]">Construction</h4>
            <button
              onClick={() => setShowGrid(!showGrid)}
              className={cn(
                "text-xs px-3 py-1.5 rounded-full transition-colors",
                showGrid ? "bg-[#001e3c] text-white" : "bg-[#001e3c]/5 text-[#001e3c]/60"
              )}
            >
              {showGrid ? "Hide Grid" : "Show Grid"}
            </button>
          </div>
          <div className="bg-[#f5f3ef] rounded-xl p-12 flex items-center justify-center relative">
            {showGrid && (
              <div
                className="absolute inset-0 pointer-events-none rounded-xl"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, #001e3c10 1px, transparent 1px),
                    linear-gradient(to bottom, #001e3c10 1px, transparent 1px)
                  `,
                  backgroundSize: "20px 20px",
                }}
              />
            )}
            <motion.svg
              viewBox="0 0 400 350"
              className="w-64 relative z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <polygon fill="#001e3c" points="200,50 150,100 250,100" />
              <polygon fill="#001e3c" points="50,100 200,100 50,250" />
              <polygon fill="#001e3c" points="250,100 250,250 350,175" />
              <polygon fill="#001e3c" points="350,175 250,250 350,250" />
              <polygon fill="#001e3c" points="150,200 250,200 200,250" />
              <polygon fill="#001e3c" points="250,200 200,250 250,250" />
            </motion.svg>
          </div>
          <p className="text-xs text-[#001e3c]/40 mt-4">
            The mark is built from six geometric triangles representing interconnected intelligence.
          </p>
        </DocCard>
      </DocSubsection>

      <DocDivider />

      {/* Clear Space */}
      <DocSubsection
        id="clear-space"
        title="Clear Space"
        description="Maintain adequate spacing around the logo to preserve its visual impact."
      >
        <DocCard>
          <div className="bg-[#f5f3ef] rounded-xl p-8 relative">
            <div className="border-2 border-dashed border-[#001e3c]/20 p-8 rounded-lg flex items-center justify-center">
              <FullLogo variant="navy" />
            </div>
            <div className="absolute top-4 left-4 text-[10px] text-[#001e3c]/30 font-mono">x</div>
            <div className="absolute top-4 right-4 text-[10px] text-[#001e3c]/30 font-mono">x</div>
            <div className="absolute bottom-4 left-4 text-[10px] text-[#001e3c]/30 font-mono">x</div>
            <div className="absolute bottom-4 right-4 text-[10px] text-[#001e3c]/30 font-mono">x</div>
          </div>
        </DocCard>

        <DocGrid cols={2} className="mt-6">
          <div>
            <h4 className="text-sm font-medium text-[#001e3c] mb-2">Minimum clear space</h4>
            <p className="text-xs text-[#001e3c]/50">
              Equal to the height of the icon mark (x) on all sides.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-[#001e3c] mb-2">Minimum size</h4>
            <p className="text-xs text-[#001e3c]/50">
              Full logo: 120px / 30mm<br />
              Icon only: 24px / 8mm
            </p>
          </div>
        </DocGrid>
      </DocSubsection>

      <DocDivider />

      {/* Misuse */}
      <DocSubsection
        id="misuse"
        title="Incorrect Usage"
        description="Preserve the integrity of the mark. Avoid these common mistakes."
      >
        <DocGrid cols={3}>
          {[
            { label: "Don't stretch", desc: "Maintain proportions" },
            { label: "Don't rotate", desc: "Keep orientation fixed" },
            { label: "Don't add effects", desc: "No shadows or glows" },
            { label: "Don't recolor", desc: "Use approved colors only" },
            { label: "Don't crop", desc: "Show the full mark" },
            { label: "Don't outline", desc: "Use solid fill only" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="bg-red-50 rounded-xl p-6 mb-3 flex items-center justify-center min-h-[100px]">
                <div className="opacity-30">
                  <LogoMark variant="navy" size="md" />
                </div>
                <div className="absolute">
                  <svg className="w-8 h-8 text-red-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M15 9l-6 6M9 9l6 6" />
                  </svg>
                </div>
              </div>
              <p className="text-xs font-medium text-[#001e3c]">{item.label}</p>
              <p className="text-[10px] text-[#001e3c]/40">{item.desc}</p>
            </div>
          ))}
        </DocGrid>
      </DocSubsection>
    </DocSection>
  );
}
