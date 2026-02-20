"use client";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "gradient";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Base - squared corners
          "inline-flex items-center justify-center font-semibold transition-all",
          {
            // Variants - using only brand colors
            "bg-[#001e3c] text-white hover:bg-[#001e3c]/90": variant === "primary",
            "bg-white text-[#001e3c] border border-[#001e3c]/20 hover:border-[#001e3c]": variant === "secondary",
            "bg-transparent text-[#001e3c] hover:bg-[#001e3c]/5": variant === "ghost",
            "bg-gradient-to-r from-[#001e3c] via-[#5b8fc9] to-[#001e3c] text-white hover:opacity-90": variant === "gradient",
            // Sizes
            "text-xs px-3 py-1.5": size === "sm",
            "text-sm px-5 py-2.5": size === "md",
            "text-base px-8 py-3": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
