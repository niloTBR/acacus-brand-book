"use client";

import { motion } from "framer-motion";
import { AnimatedLogoFull } from "./AnimatedLogo";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-24 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f5f3ef]/50 to-white pointer-events-none" />

      {/* Animated grid pattern */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #001e3c 1px, transparent 1px),
            linear-gradient(to bottom, #001e3c 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <AnimatedLogoFull />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-xl md:text-2xl font-light text-[#001e3c] tracking-wide leading-relaxed"
        >
          A single intelligent platform for movement at scale
        </motion.p>

        {/* Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-8 flex items-center justify-center gap-3 text-sm tracking-[0.2em] uppercase text-[#001e3c]/60 font-medium"
        >
          <span>Planning</span>
          <span className="w-1 h-1 rounded-full bg-[#001e3c]/30" />
          <span>Operations</span>
          <span className="w-1 h-1 rounded-full bg-[#001e3c]/30" />
          <span>Safety</span>
          <span className="w-1 h-1 rounded-full bg-[#001e3c]/30" />
          <span>Learning</span>
        </motion.div>

        {/* Brand Book Label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-24"
        >
          <span className="text-xs tracking-[0.4em] uppercase text-[#001e3c]/40 font-medium">
            Brand Guidelines
          </span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border-2 border-[#001e3c]/20 flex items-start justify-center p-1"
        >
          <motion.div className="w-1 h-2 rounded-full bg-[#001e3c]/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
