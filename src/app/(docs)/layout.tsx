"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  BookOpen,
  Layers,
  Type,
  Palette,
  MessageSquare,
  ChevronDown,
  Sparkles,
  Home,
  Boxes,
  MousePointerClick,
  TextCursor,
  Square,
  Sparkle,
} from "lucide-react";

const navigation = [
  {
    label: "Getting Started",
    defaultOpen: true,
    items: [
      { name: "Introduction", href: "/introduction", icon: Home },
    ],
  },
  {
    label: "Foundation",
    defaultOpen: true,
    items: [
      { name: "Brand Story", href: "/brand-story", icon: BookOpen },
      { name: "Logo", href: "/logo", icon: Sparkles },
      { name: "Typography", href: "/typography", icon: Type },
      { name: "Colors", href: "/colors", icon: Palette },
      { name: "Voice & Tone", href: "/voice", icon: MessageSquare },
    ],
  },
  {
    label: "Components",
    defaultOpen: true,
    items: [
      { name: "Overview", href: "/components", icon: Boxes },
      { name: "Cards", href: "/components/cards", icon: Square },
      { name: "Text Effects", href: "/components/text-effects", icon: TextCursor },
      { name: "Buttons", href: "/components/buttons", icon: MousePointerClick },
      { name: "Backgrounds", href: "/components/backgrounds", icon: Sparkle },
      { name: "Animations", href: "/components/animations", icon: Layers },
    ],
  },
];

function NavSection({
  section,
  pathname,
}: {
  section: (typeof navigation)[0];
  pathname: string;
}) {
  const [isOpen, setIsOpen] = useState(section.defaultOpen);
  const hasActiveItem = section.items.some((item) => pathname === item.href);

  return (
    <div className="mb-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-3 py-2 text-[10px] font-medium tracking-[0.15em] uppercase text-[#001e3c]/40 hover:text-[#001e3c]/60 transition-colors"
      >
        <span>{section.label}</span>
        <ChevronDown
          className={cn(
            "w-3 h-3 transition-transform duration-200",
            isOpen ? "rotate-0" : "-rotate-90"
          )}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            {section.items.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2.5 text-sm transition-all mx-1",
                      isActive
                        ? "bg-[#001f3e] text-white"
                        : "text-[#001f3e]/60 hover:text-[#001f3e] hover:bg-[#001f3e]/5"
                    )}
                  >
                    <Icon
                      className={cn(
                        "w-4 h-4",
                        isActive ? "text-white/80" : "text-[#001e3c]/40"
                      )}
                    />
                    <span className={isActive ? "font-medium" : ""}>
                      {item.name}
                    </span>
                  </Link>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-white">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-screen w-72 bg-[#fafafa] border-r border-[#001e3c]/5 overflow-y-auto z-50 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-[#001e3c]/5">
          <Link href="/introduction" className="flex items-center gap-3 group">
            <div className="relative">
              <svg viewBox="0 0 133.33 106.71" className="w-8 h-7">
                <polygon
                  fill="#001e3c"
                  points="133.33 66.62 66.71 0 40 26.7 0 26.7 0 106.71 80.01 26.58 93.34 26.68 93.34 80.02 53.32 80.02 80.01 106.71 133.33 106.69 133.33 66.62"
                  className="transition-opacity group-hover:opacity-80"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-semibold text-[#001e3c] tracking-tight">
                Acacus
              </span>
              <span className="text-[10px] text-[#001e3c]/40 tracking-wide uppercase">
                Brand System
              </span>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-3 pt-4">
          {navigation.map((section) => (
            <NavSection
              key={section.label}
              section={section}
              pathname={pathname}
            />
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-[#001e3c]/5">
          <div className="flex items-center justify-between text-[10px] text-[#001e3c]/30">
            <span>Version 1.0</span>
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              Up to date
            </span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-72">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
