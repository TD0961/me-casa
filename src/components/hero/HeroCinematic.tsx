"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { ArrowDown, Compass, Play, Pause, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function HeroCinematic() {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideo = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const openMatchmaker = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-matchmaker-modal"));
    }
  };

  return (
    <section className="relative w-full min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-forest-dark text-white">
      {/* Background Video with Poster Fallback */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop"
          className="w-full h-full object-cover scale-[1.03] transform transition-transform duration-1000"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-modern-architecture-house-in-nature-42617-large.mp4"
            type="video/mp4"
          />
        </video>

        {/* Sophisticated Editorial Vignette & Tint */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-dark/40 to-forest-dark/50" />
        <div className="absolute inset-0 bg-black/25 backdrop-contrast-[1.04]" />
      </div>

      {/* Floating Video Pause/Play Control */}
      <div className="absolute bottom-10 right-8 z-20 hidden md:flex items-center gap-2">
        <button
          onClick={toggleVideo}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 text-white/90 text-xs font-light transition-all"
          aria-label={isPlaying ? "Pause cinematic background video" : "Play video"}
        >
          {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
          <span>{isPlaying ? "Ambient Motion" : "Paused"}</span>
        </button>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 text-center pt-28 pb-20 flex flex-col items-center">
        {/* Brand Kicker */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sand-light text-xs font-medium tracking-[0.25em] uppercase mb-8 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-clay animate-pulse" />
          <span>Real Estate. Made Personal.</span>
        </div>

        {/* Primary Editorial Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-white leading-[1.08] mb-8 max-w-4xl">
          A place to belong.
          <br />
          <span className="italic font-normal text-sand">A place to become.</span>
        </h1>

        {/* Supporting Copy */}
        <p className="text-sand/90 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-12">
          {siteConfig.heroSubheadline}
        </p>

        {/* Primary & Secondary Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={openMatchmaker}
            type="button"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-cream hover:bg-white text-forest font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02] group"
          >
            <Compass className="w-4 h-4 text-forest transition-transform group-hover:rotate-45" />
            <span>Hi me-casa, find me my place, my home!</span>
          </button>

          <Link
            href="/properties"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-medium text-xs sm:text-sm uppercase tracking-wider rounded-full transition-all duration-300 group"
          >
            <span>Explore Properties</span>
            <ArrowRight className="w-4 h-4 text-sand transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 text-sand/70 text-xs font-light">
          <span className="tracking-widest uppercase text-[10px]">Scroll to discover</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-sand" />
        </div>
      </div>
    </section>
  );
}
