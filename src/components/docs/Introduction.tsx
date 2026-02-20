"use client";

import { motion } from "framer-motion";
import { DocSection, DocHeader, DocCard } from "../DocLayout";

export function Introduction() {
  return (
    <DocSection id="introduction">
      <DocHeader
        title="Acacus Brand System"
        description="A single intelligent platform for movement at scale. These guidelines define how we present Acacus to the world."
      />

      {/* Hero Card */}
      <DocCard className="mb-12 overflow-hidden" padding="none">
        <div className="bg-[#001e3c] p-12 flex items-center justify-center">
          <motion.svg
            viewBox="0 0 400 194.35"
            className="w-64 h-auto"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <polygon fill="#ffffff" points="266.67 66.62 200.04 0 173.34 26.7 133.33 26.7 133.33 106.71 213.34 26.58 226.68 26.68 226.68 80.02 186.65 80.02 213.34 106.71 266.67 106.69 266.67 66.62"/>
            <polygon fill="#ffffff" points="28.93 150.96 0 194.35 10.83 194.35 33.22 160.73 44.33 177.44 22.12 177.44 31.3 186.42 50.32 186.42 55.61 194.35 66.45 194.35 37.52 150.96 28.93 150.96"/>
            <path fill="#ffffff" d="M119.3,150.96h-31.74c-6.87,0-12.44,5.6-12.44,12.44v18.52c0,6.87,5.57,12.44,12.44,12.44h31.74c6.84,0,12.44-5.57,12.44-12.44v-1.85h-9.02v1.85c0,1.94-1.48,3.45-3.42,3.45h-31.74c-1.94,0-3.45-1.51-3.45-3.45v-18.52c0-1.91,1.51-3.42,3.45-3.42h31.74c1.94,0,3.42,1.51,3.42,3.42v1.85h9.02v-1.85c0-6.84-5.6-12.44-12.44-12.44Z"/>
            <polygon fill="#ffffff" points="169.34 150.96 140.41 194.35 151.24 194.35 173.63 160.73 184.74 177.44 162.52 177.44 171.71 186.42 190.73 186.42 196.02 194.35 206.85 194.35 177.93 150.96 169.34 150.96"/>
            <path fill="#ffffff" d="M259.68,150.96h-31.74c-6.87,0-12.44,5.6-12.44,12.44v18.52c0,6.87,5.57,12.44,12.44,12.44h31.74c6.84,0,12.44-5.57,12.44-12.44v-1.85h-9.02v1.85c0,1.94-1.48,3.45-3.42,3.45h-31.74c-1.94,0-3.45-1.51-3.45-3.45v-18.52c0-1.91,1.51-3.42,3.45-3.42h31.74c1.94,0,3.42,1.51,3.42,3.42v1.85h9.02v-1.85c0-6.84-5.6-12.44-12.44-12.44Z"/>
            <path fill="#ffffff" d="M328.39,181.91c0,1.94-1.51,3.45-3.45,3.45h-31.74c-1.94,0-3.45-1.51-3.45-3.45v-30.95h-8.96v31.01c0,6.84,5.6,12.38,12.41,12.38h31.74c6.87,0,12.44-5.57,12.44-12.44v-30.95h-8.99v30.95Z"/>
            <path fill="#ffffff" d="M400,164.18v-1.85c0-6.26-5.2-11.38-11.59-11.38h-30.77c-6.38,0-11.59,5.11-11.59,11.38v3.45c0,6.26,5.2,11.38,11.59,11.38h30.77c1.51,0,2.6,1,2.6,2.36v3.45c0,1.39-1.09,2.39-2.6,2.39h-30.77c-1.51,0-2.6-1-2.6-2.39v-1.85h-8.99v1.85c0,6.26,5.2,11.38,11.59,11.38h30.77c6.38,0,11.59-5.11,11.59-11.38v-3.45c0-6.26-5.2-11.35-11.59-11.35h-30.77c-1.51,0-2.6-1-2.6-2.39v-3.45c0-1.36,1.09-2.36,2.6-2.36h30.77c1.51,0,2.6,1,2.6,2.36v1.85h8.99Z"/>
          </motion.svg>
        </div>
        <div className="p-8">
          <div className="flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-[#001e3c]/40 font-medium">
            <span>Planning</span>
            <span className="w-1 h-1 rounded-full bg-[#001e3c]/20" />
            <span>Operations</span>
            <span className="w-1 h-1 rounded-full bg-[#001e3c]/20" />
            <span>Safety</span>
            <span className="w-1 h-1 rounded-full bg-[#001e3c]/20" />
            <span>Learning</span>
          </div>
        </div>
      </DocCard>

      {/* Quick Links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Logo", description: "Mark & usage", href: "#logo" },
          { label: "Typography", description: "Naru Sans", href: "#typography" },
          { label: "Colors", description: "Palette", href: "#colors" },
          { label: "Voice", description: "Tone guide", href: "#voice" },
        ].map((item, index) => (
          <motion.a
            key={item.label}
            href={item.href}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="group p-4 rounded-xl border border-[#001e3c]/5 bg-white hover:border-[#001e3c]/20 hover:shadow-sm transition-all"
          >
            <span className="block text-sm font-medium text-[#001e3c] group-hover:text-[#001e3c] mb-1">
              {item.label}
            </span>
            <span className="text-xs text-[#001e3c]/40">{item.description}</span>
          </motion.a>
        ))}
      </div>
    </DocSection>
  );
}
