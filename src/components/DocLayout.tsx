"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface DocLayoutProps {
  children: ReactNode;
}

export function DocLayout({ children }: DocLayoutProps) {
  return (
    <div className="ml-64 min-h-screen bg-[#fafafa]">
      <div className="max-w-4xl mx-auto px-12 py-16">
        {children}
      </div>
    </div>
  );
}

interface DocSectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function DocSection({ id, children, className }: DocSectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-8 mb-24", className)}>
      {children}
    </section>
  );
}

interface DocHeaderProps {
  label?: string;
  title: string;
  description?: string;
}

export function DocHeader({ label, title, description }: DocHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mb-12"
    >
      {label && (
        <span className="inline-block text-[10px] tracking-[0.2em] uppercase font-medium text-[#001e3c]/30 mb-3">
          {label}
        </span>
      )}
      <h1 className="text-3xl font-light text-[#001e3c] tracking-tight mb-4">
        {title}
      </h1>
      {description && (
        <p className="text-base text-[#001e3c]/50 font-light leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </motion.div>
  );
}

interface DocSubsectionProps {
  id: string;
  title: string;
  description?: string;
  children: ReactNode;
}

export function DocSubsection({ id, title, description, children }: DocSubsectionProps) {
  return (
    <div id={id} className="scroll-mt-8 mb-16">
      <h2 className="text-lg font-medium text-[#001e3c] mb-2">{title}</h2>
      {description && (
        <p className="text-sm text-[#001e3c]/50 font-light mb-6 leading-relaxed">
          {description}
        </p>
      )}
      {children}
    </div>
  );
}

interface DocCardProps {
  children: ReactNode;
  className?: string;
  padding?: "none" | "sm" | "md" | "lg";
}

export function DocCard({ children, className, padding = "md" }: DocCardProps) {
  const paddingClasses = {
    none: "",
    sm: "p-4",
    md: "p-8",
    lg: "p-12",
  };

  return (
    <div
      className={cn(
        "bg-white rounded-xl border border-[#001e3c]/5",
        paddingClasses[padding],
        className
      )}
    >
      {children}
    </div>
  );
}

interface DocGridProps {
  children: ReactNode;
  cols?: 2 | 3 | 4;
  gap?: "sm" | "md" | "lg";
}

export function DocGrid({ children, cols = 2, gap = "md" }: DocGridProps) {
  const colClasses = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-3",
    4: "grid-cols-2 md:grid-cols-4",
  };

  const gapClasses = {
    sm: "gap-3",
    md: "gap-6",
    lg: "gap-8",
  };

  return (
    <div className={cn("grid", colClasses[cols], gapClasses[gap])}>
      {children}
    </div>
  );
}

interface DocDividerProps {
  className?: string;
}

export function DocDivider({ className }: DocDividerProps) {
  return <hr className={cn("border-t border-[#001e3c]/5 my-12", className)} />;
}

interface DocNoteProps {
  children: ReactNode;
  type?: "info" | "warning" | "tip";
}

export function DocNote({ children, type = "info" }: DocNoteProps) {
  const styles = {
    info: "bg-[#001e3c]/[0.02] border-[#001e3c]/10",
    warning: "bg-amber-50 border-amber-200",
    tip: "bg-emerald-50 border-emerald-200",
  };

  return (
    <div className={cn("rounded-lg border p-4 text-sm", styles[type])}>
      {children}
    </div>
  );
}
