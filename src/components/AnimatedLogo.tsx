"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedLogoProps {
  className?: string;
  showConstruction?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeMap = {
  sm: { width: 120, height: 100 },
  md: { width: 200, height: 160 },
  lg: { width: 320, height: 260 },
  xl: { width: 480, height: 400 },
};

export function AnimatedLogo({
  className,
  showConstruction = false,
  size = "lg"
}: AnimatedLogoProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const dimensions = sizeMap[size];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const shapeVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      filter: "blur(20px)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.3,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <div ref={ref} className={className}>
      <motion.svg
        viewBox="0 0 400 350"
        width={dimensions.width}
        height={dimensions.height}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {showConstruction && (
          <>
            <defs>
              <pattern id="constructionGrid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#001e3c" strokeWidth="0.5" opacity="0.15"/>
              </pattern>
            </defs>
            <motion.rect
              width="100%"
              height="100%"
              fill="url(#constructionGrid)"
              variants={gridVariants}
            />
          </>
        )}

        {/* Triangle 1: Apex - Top triangle */}
        <motion.polygon
          points="200,50 150,100 250,100"
          fill="#001e3c"
          variants={shapeVariants}
        />

        {/* Triangle 2: Big left triangle */}
        <motion.polygon
          points="50,100 200,100 50,250"
          fill="#001e3c"
          variants={shapeVariants}
        />

        {/* Triangle 3: Right pointing triangle */}
        <motion.polygon
          points="250,100 250,250 350,175"
          fill="#001e3c"
          variants={shapeVariants}
        />

        {/* Triangle 4: Bottom right square-like area */}
        <motion.polygon
          points="350,175 250,250 350,250"
          fill="#001e3c"
          variants={shapeVariants}
        />

        {/* Triangle 5: Inverted triangle */}
        <motion.polygon
          points="150,200 250,200 200,250"
          fill="#001e3c"
          variants={shapeVariants}
        />

        {/* Triangle 6: Bottom small triangle */}
        <motion.polygon
          points="250,200 200,250 250,250"
          fill="#001e3c"
          variants={shapeVariants}
        />
      </motion.svg>
    </div>
  );
}

export function AnimatedLogoIcon({
  className,
  size = "md"
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const iconSizes = {
    sm: { width: 40, height: 32 },
    md: { width: 64, height: 52 },
    lg: { width: 96, height: 78 },
  };

  const dims = iconSizes[size];

  return (
    <div ref={ref} className={className}>
      <motion.svg
        viewBox="0 0 133.33 106.71"
        width={dims.width}
        height={dims.height}
        initial={{ opacity: 0, filter: "blur(10px)", scale: 0.9 }}
        animate={isInView ? {
          opacity: 1,
          filter: "blur(0px)",
          scale: 1
        } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <polygon
          fill="#001e3c"
          points="133.33 66.62 66.71 0 40 26.7 0 26.7 0 106.71 80.01 26.58 93.34 26.68 93.34 80.02 53.32 80.02 80.01 106.71 133.33 106.69 133.33 66.62"
        />
      </motion.svg>
    </div>
  );
}

export function AnimatedLogoFull({
  className,
  variant = "navy"
}: {
  className?: string;
  variant?: "navy" | "white";
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const fillColor = variant === "navy" ? "#001e3c" : "#ffffff";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const iconVariants = {
    hidden: {
      opacity: 0,
      x: -20,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      x: 20,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div ref={ref} className={className}>
      <motion.svg
        viewBox="0 0 400 194.35"
        width="320"
        height="155"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Icon */}
        <motion.g variants={iconVariants}>
          <polygon fill={fillColor} points="266.67 66.62 200.04 0 173.34 26.7 133.33 26.7 133.33 106.71 213.34 26.58 226.68 26.68 226.68 80.02 186.65 80.02 213.34 106.71 266.67 106.69 266.67 66.62"/>
        </motion.g>

        {/* Text: ACACUS */}
        <motion.g variants={textVariants}>
          {/* A */}
          <polygon fill={fillColor} points="28.93 150.96 0 194.35 10.83 194.35 33.22 160.73 44.33 177.44 22.12 177.44 31.3 186.42 50.32 186.42 55.61 194.35 66.45 194.35 37.52 150.96 28.93 150.96"/>
          {/* C */}
          <path fill={fillColor} d="M119.3,150.96h-31.74c-6.87,0-12.44,5.6-12.44,12.44v18.52c0,6.87,5.57,12.44,12.44,12.44h31.74c6.84,0,12.44-5.57,12.44-12.44v-1.85h-9.02v1.85c0,1.94-1.48,3.45-3.42,3.45h-31.74c-1.94,0-3.45-1.51-3.45-3.45v-18.52c0-1.91,1.51-3.42,3.45-3.42h31.74c1.94,0,3.42,1.51,3.42,3.42v1.85h9.02v-1.85c0-6.84-5.6-12.44-12.44-12.44Z"/>
          {/* A */}
          <polygon fill={fillColor} points="169.34 150.96 140.41 194.35 151.24 194.35 173.63 160.73 184.74 177.44 162.52 177.44 171.71 186.42 190.73 186.42 196.02 194.35 206.85 194.35 177.93 150.96 169.34 150.96"/>
          {/* C */}
          <path fill={fillColor} d="M259.68,150.96h-31.74c-6.87,0-12.44,5.6-12.44,12.44v18.52c0,6.87,5.57,12.44,12.44,12.44h31.74c6.84,0,12.44-5.57,12.44-12.44v-1.85h-9.02v1.85c0,1.94-1.48,3.45-3.42,3.45h-31.74c-1.94,0-3.45-1.51-3.45-3.45v-18.52c0-1.91,1.51-3.42,3.45-3.42h31.74c1.94,0,3.42,1.51,3.42,3.42v1.85h9.02v-1.85c0-6.84-5.6-12.44-12.44-12.44Z"/>
          {/* U */}
          <path fill={fillColor} d="M328.39,181.91c0,1.94-1.51,3.45-3.45,3.45h-31.74c-1.94,0-3.45-1.51-3.45-3.45v-30.95h-8.96v31.01c0,6.84,5.6,12.38,12.41,12.38h31.74c6.87,0,12.44-5.57,12.44-12.44v-30.95h-8.99v30.95Z"/>
          {/* S */}
          <path fill={fillColor} d="M400,164.18v-1.85c0-6.26-5.2-11.38-11.59-11.38h-30.77c-6.38,0-11.59,5.11-11.59,11.38v3.45c0,6.26,5.2,11.38,11.59,11.38h30.77c1.51,0,2.6,1,2.6,2.36v3.45c0,1.39-1.09,2.39-2.6,2.39h-30.77c-1.51,0-2.6-1-2.6-2.39v-1.85h-8.99v1.85c0,6.26,5.2,11.38,11.59,11.38h30.77c6.38,0,11.59-5.11,11.59-11.38v-3.45c0-6.26-5.2-11.35-11.59-11.35h-30.77c-1.51,0-2.6-1-2.6-2.39v-3.45c0-1.36,1.09-2.36,2.6-2.36h30.77c1.51,0,2.6,1,2.6,2.36v1.85h8.99Z"/>
        </motion.g>
      </motion.svg>
    </div>
  );
}
