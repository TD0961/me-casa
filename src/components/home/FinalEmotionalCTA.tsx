"use client";

import React from "react";
import Image from "next/image";
import { Compass, Sparkles } from "lucide-react";

export function FinalEmotionalCTA() {
  const openMatchmaker = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-matchmaker-modal"));
    }
  };

  return (
    <section className="relative py-28 md:py-36 overflow-hidden bg-forest-dark text-white">
      {/* Background Architectural Atmosphere */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop"
          alt="Architectural sanctuary exterior twilight"
          fill
          className="object-cover opacity-35 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-dark/80 to-forest-dark/90" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 text-center flex flex-col items-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-clay-light text-xs font-semibold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Start Your Conversation</span>
        </div>

        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight">
          Your place is somewhere.
          <br />
          <span className="italic font-normal text-sand">Let&apos;s find it.</span>
        </h2>

        <p className="text-sand/85 text-base sm:text-lg md:text-xl font-light max-w-2xl leading-relaxed">
          You don&apos;t need to have everything figured out. Just tell us what you&apos;re looking
          for, and let&apos;s start from there.
        </p>

        <div className="pt-4">
          <button
            onClick={openMatchmaker}
            type="button"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-clay hover:bg-clay-light text-cream font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-full transition-all duration-300 shadow-2xl hover:scale-[1.02] group"
          >
            <Compass className="w-4 h-4 transition-transform group-hover:rotate-45" />
            <span>Hi me-casa, find me my place, my home!</span>
          </button>
        </div>

        <p className="text-sand/60 text-xs font-light pt-2">
          Personal advisory • Confidential • No automated spam
        </p>
      </div>
    </section>
  );
}
