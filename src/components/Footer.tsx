"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedLogoFull } from "./AnimatedLogo";

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer
      ref={ref}
      className="bg-[#001e3c] text-white px-6 py-24 md:py-32"
    >
      <div className="max-w-6xl mx-auto">
        {/* Large closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(15px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-24"
        >
          <p className="text-3xl md:text-4xl lg:text-5xl font-extralight leading-[1.3] tracking-tight max-w-3xl mx-auto">
            The work has not changed.
            <br />
            <span className="font-light">Only the scale has.</span>
          </p>
        </motion.div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center mb-16"
        >
          <AnimatedLogoFull variant="white" />
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="h-px bg-white/10 mb-8"
        />

        {/* Bottom info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40"
        >
          <p>Brand Guidelines v1.0</p>
          <p>Acacus {new Date().getFullYear()}. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
