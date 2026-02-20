"use client";

import { useState, useEffect } from "react";

export function IntroHero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {/* Gradient Background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(315deg, #f6f8ed 0%, #7c98b3 50%, #1e4890 75%, #001f3e 100%)",
        }}
      />

      {/* Video with plus-lighter blend */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          mixBlendMode: "plus-lighter",
          opacity: 0.7,
        }}
      >
        <source src="/videos/Video_2.mov" type="video/quicktime" />
        <source src="/videos/Video_2.mp4" type="video/mp4" />
      </video>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-12">
        {/* Top - Icon */}
        <div>
          <div className="w-16 h-16 bg-[#001f3e] flex items-center justify-center">
            <svg viewBox="0 0 133.33 106.71" className="w-8 h-8">
              <polygon
                fill="#ffffff"
                points="133.33 66.62 66.71 0 40 26.7 0 26.7 0 106.71 80.01 26.58 93.34 26.68 93.34 80.02 53.32 80.02 80.01 106.71 133.33 106.69 133.33 66.62"
              />
            </svg>
          </div>
        </div>

        {/* Middle - Wordmark and Tagline */}
        <div className="flex-1 flex flex-col justify-center">
          <div
            className={`transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {/* ACACUS Wordmark */}
            <h1
              className="text-5xl tracking-[0.3em] text-white font-light mb-8"
              style={{ letterSpacing: "0.3em" }}
            >
              ACACUS
            </h1>

            {/* Tagline */}
            <p className="text-2xl text-white font-light">
              <span className="font-semibold">Intelligence</span> in action.
            </p>
            <p className="text-2xl text-white/80 font-light">
              Movement by design
            </p>
          </div>
        </div>

        {/* Bottom - Footer */}
        <div className="flex justify-between items-end">
          <span className="text-[10px] tracking-[0.2em] uppercase text-white/50">
            Brand System
          </span>
          <span className="text-[10px] tracking-[0.2em] uppercase text-white/50">
            2026
          </span>
        </div>
      </div>

      {/* Bottom right icon */}
      <div className="absolute bottom-12 right-12 z-10">
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-white/30">
          <polygon fill="currentColor" points="12,2 22,22 2,22" />
        </svg>
      </div>
    </div>
  );
}
