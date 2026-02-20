"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { AnimatedLogoIcon } from "./AnimatedLogo";

const navItems = [
  { label: "Story", href: "#story" },
  { label: "Logo", href: "#logo" },
  { label: "Typography", href: "#typography" },
  { label: "Colors", href: "#colors" },
  { label: "Voice", href: "#voice" },
];

export function Navigation() {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255,255,255,0)", "rgba(255,255,255,0.95)"]
  );
  const borderOpacity = useTransform(scrollY, [0, 100], [0, 0.1]);

  return (
    <motion.nav
      style={{ backgroundColor }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm"
    >
      <motion.div
        style={{ opacity: borderOpacity }}
        className="absolute bottom-0 left-0 right-0 h-px bg-[#001e3c]"
      />
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <AnimatedLogoIcon size="sm" />
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.li
              key={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <a
                href={item.href}
                className={cn(
                  "text-sm font-medium tracking-wide text-[#001e3c] opacity-60",
                  "hover:opacity-100 transition-opacity duration-300"
                )}
              >
                {item.label}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
