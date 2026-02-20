"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "navy" | "ivory";
}

export function Section({
  children,
  className,
  id,
  variant = "default"
}: SectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const bgClasses = {
    default: "bg-white",
    navy: "bg-[#001e3c] text-white",
    ivory: "bg-[#f5f3ef]",
  };

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn(
        "min-h-screen flex items-center justify-center px-6 py-24 md:py-32",
        bgClasses[variant],
        className
      )}
    >
      {children}
    </motion.section>
  );
}

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  label,
  title,
  description,
  className,
  align = "center"
}: SectionHeaderProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "mb-16 md:mb-24",
        align === "center" && "text-center",
        className
      )}
    >
      {label && (
        <motion.span
          initial={{ opacity: 0, filter: "blur(4px)" }}
          animate={isInView ? { opacity: 1, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-block text-xs tracking-[0.3em] uppercase font-medium mb-4 opacity-60"
        >
          {label}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
        animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1]"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={cn(
            "mt-6 text-lg md:text-xl font-light leading-relaxed opacity-70 max-w-2xl",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export function FadeIn({
  children,
  delay = 0,
  className,
  direction = "up"
}: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const directions = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { y: 0, x: 30 },
    right: { y: 0, x: -30 },
    none: { y: 0, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        ...directions[direction],
        filter: "blur(8px)"
      }}
      animate={isInView ? {
        opacity: 1,
        y: 0,
        x: 0,
        filter: "blur(0px)"
      } : {}}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
