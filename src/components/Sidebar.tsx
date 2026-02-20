"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const navigation: NavItem[] = [
  {
    label: "Introduction",
    href: "#introduction",
  },
  {
    label: "Brand Story",
    href: "#story",
    children: [
      { label: "Our Origin", href: "#origin" },
      { label: "Mission", href: "#mission" },
      { label: "Values", href: "#values" },
    ],
  },
  {
    label: "Logo",
    href: "#logo",
    children: [
      { label: "Primary Mark", href: "#primary-mark" },
      { label: "Icon", href: "#icon" },
      { label: "Clear Space", href: "#clear-space" },
      { label: "Misuse", href: "#misuse" },
    ],
  },
  {
    label: "Typography",
    href: "#typography",
    children: [
      { label: "Typeface", href: "#typeface" },
      { label: "Scale", href: "#scale" },
      { label: "Usage", href: "#type-usage" },
    ],
  },
  {
    label: "Colors",
    href: "#colors",
    children: [
      { label: "Primary", href: "#primary-colors" },
      { label: "Neutrals", href: "#neutrals" },
      { label: "Usage", href: "#color-usage" },
    ],
  },
  {
    label: "Voice & Tone",
    href: "#voice",
    children: [
      { label: "Principles", href: "#principles" },
      { label: "Examples", href: "#examples" },
    ],
  },
];

interface SidebarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export function Sidebar({ activeSection, onNavigate }: SidebarProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>(["Brand Story", "Logo", "Typography", "Colors", "Voice & Tone"]);

  const toggleExpand = (label: string) => {
    setExpandedItems((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-[#001e3c]/5 overflow-y-auto z-40">
      {/* Logo */}
      <div className="p-6 border-b border-[#001e3c]/5">
        <div className="flex items-center gap-3">
          <svg viewBox="0 0 133.33 106.71" className="w-8 h-6">
            <polygon
              fill="#001e3c"
              points="133.33 66.62 66.71 0 40 26.7 0 26.7 0 106.71 80.01 26.58 93.34 26.68 93.34 80.02 53.32 80.02 80.01 106.71 133.33 106.69 133.33 66.62"
            />
          </svg>
          <div>
            <span className="text-sm font-semibold text-[#001e3c] tracking-tight">Acacus</span>
            <span className="block text-[10px] text-[#001e3c]/40 tracking-wide uppercase">Brand System</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4">
        <ul className="space-y-1">
          {navigation.map((item) => (
            <li key={item.label}>
              <button
                onClick={() => {
                  if (item.children) {
                    toggleExpand(item.label);
                  }
                  onNavigate(item.href.replace("#", ""));
                }}
                className={cn(
                  "w-full flex items-center justify-between px-3 py-2 text-sm rounded-lg transition-colors",
                  activeSection === item.href.replace("#", "")
                    ? "bg-[#001e3c]/5 text-[#001e3c] font-medium"
                    : "text-[#001e3c]/60 hover:text-[#001e3c] hover:bg-[#001e3c]/[0.02]"
                )}
              >
                <span>{item.label}</span>
                {item.children && (
                  <motion.svg
                    animate={{ rotate: expandedItems.includes(item.label) ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-4 h-4 opacity-40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </motion.svg>
                )}
              </button>

              <AnimatePresence>
                {item.children && expandedItems.includes(item.label) && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden ml-3 mt-1 border-l border-[#001e3c]/5"
                  >
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <button
                          onClick={() => onNavigate(child.href.replace("#", ""))}
                          className={cn(
                            "w-full text-left px-4 py-1.5 text-sm transition-colors",
                            activeSection === child.href.replace("#", "")
                              ? "text-[#001e3c] font-medium"
                              : "text-[#001e3c]/40 hover:text-[#001e3c]/70"
                          )}
                        >
                          {child.label}
                        </button>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-[#001e3c]/5 bg-white">
        <p className="text-[10px] text-[#001e3c]/30">Version 1.0</p>
      </div>
    </aside>
  );
}
