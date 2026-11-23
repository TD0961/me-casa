"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Sun, Sunset, Moon, Sparkles, Layers, Compass } from "lucide-react";

// Dynamically import Three.js canvas with zero SSR overhead
const ArchitecturalPavilionCanvas = dynamic(
  () => import("./ArchitecturalPavilionCanvas"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center bg-sand/20 rounded-2xl">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-2 border-forest border-t-transparent rounded-full animate-spin" />
          <span className="text-xs uppercase tracking-widest text-forest font-medium">
            Rendering Architectural Spatial Model...
          </span>
        </div>
      </div>
    ),
  }
);

interface HotspotInfo {
  id: string;
  name: string;
  category: string;
  description: string;
}

const HOTSPOTS: HotspotInfo[] = [
  {
    id: "living",
    name: "Glazed Living Core",
    category: "Natural Illumination",
    description:
      "Acoustic low-iron glass walls open 360 degrees to natural daylight, erasing boundaries between living spaces and natural surroundings.",
  },
  {
    id: "cantilever",
    name: "Cantilevered Timber Plane",
    category: "Passive Shading",
    description:
      "Engineered cedar soffits provide natural passive solar control, blocking high summer heat while capturing low winter warmth.",
  },
  {
    id: "hearth",
    name: "Thermal Earth Hearth",
    category: "Materiality",
    description:
      "Hand-troweled terracotta and rammed earth create high thermal mass, regulating interior temperature naturally throughout day and night.",
  },
  {
    id: "pool",
    name: "Reflecting Water Basin",
    category: "Microclimate & Zen",
    description:
      "A shallow perimeter pool captures gentle afternoon breezes, cooling the air and casting dynamic light patterns across the ceiling plane.",
  },
];

export function ArchitecturalPavilionSection() {
  const [timeOfDay, setTimeOfDay] = useState<"golden" | "midday" | "dusk">("golden");
  const [activeHotspot, setActiveHotspot] = useState<string>("living");

  const currentHotspotData =
    HOTSPOTS.find((h) => h.id === activeHotspot) || HOTSPOTS[0];

  const openMatchmaker = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-matchmaker-modal"));
    }
  };

  return (
    <section className="py-24 bg-cream relative overflow-hidden border-b border-sand/40">
      {/* Background architectural grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E8DFD0_1px,transparent_1px),linear-gradient(to_bottom,#E8DFD0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest/10 border border-forest/20 text-forest text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-clay" />
            <span>Interactive Spatial Architecture</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-forest font-light leading-tight">
            Spatial resonance.{" "}
            <span className="italic font-normal text-clay-dark">
              Crafted in human proportion.
            </span>
          </h2>
          <p className="text-charcoal/80 text-base md:text-lg font-light leading-relaxed">
            We look past superficial finishes to evaluate the true spatial poetry of a home:
            how light travels through morning rooms, how materials age with grace, and how
            architecture supports your wellbeing.
          </p>
        </div>

        {/* 3D Canvas + Interactive Controller Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/70 backdrop-blur-md rounded-3xl p-6 md:p-10 border border-sand/60 shadow-lg">
          {/* Left Canvas: Three.js Model */}
          <div className="lg:col-span-8 relative aspect-[4/3] md:aspect-[16/10] w-full rounded-2xl overflow-hidden bg-gradient-to-b from-sand-light/50 to-cream border border-sand/40 shadow-inner">
            <ArchitecturalPavilionCanvas
              timeOfDay={timeOfDay}
              activeHotspot={activeHotspot}
            />

            {/* Time of Day Floating Switcher */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 bg-cream/90 backdrop-blur-md p-1.5 rounded-full border border-sand/60 shadow-sm text-xs">
              <button
                onClick={() => setTimeOfDay("golden")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all ${
                  timeOfDay === "golden"
                    ? "bg-clay text-cream font-medium shadow-sm"
                    : "text-charcoal/70 hover:text-forest"
                }`}
                title="Golden Hour Lighting"
              >
                <Sunset className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Golden Hour</span>
              </button>
              <button
                onClick={() => setTimeOfDay("midday")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all ${
                  timeOfDay === "midday"
                    ? "bg-forest text-cream font-medium shadow-sm"
                    : "text-charcoal/70 hover:text-forest"
                }`}
                title="Midday Natural Sunlight"
              >
                <Sun className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Midday</span>
              </button>
              <button
                onClick={() => setTimeOfDay("dusk")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all ${
                  timeOfDay === "dusk"
                    ? "bg-forest-dark text-cream font-medium shadow-sm"
                    : "text-charcoal/70 hover:text-forest"
                }`}
                title="Cinematic Dusk Atmosphere"
              >
                <Moon className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Dusk Glow</span>
              </button>
            </div>

            {/* Interactive hint tag */}
            <div className="absolute bottom-4 left-4 z-20 pointer-events-none text-[11px] text-charcoal/60 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full border border-sand/40">
              Move pointer to rotate spatial perspective
            </div>
          </div>

          {/* Right Controller: Hotspot Inspector & Storytelling */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-clay font-semibold">
                <Layers className="w-4 h-4" />
                <span>Architectural Anatomy</span>
              </div>

              {/* Hotspot Selection Tabs */}
              <div className="grid grid-cols-2 gap-2">
                {HOTSPOTS.map((hotspot) => {
                  const isSelected = activeHotspot === hotspot.id;
                  return (
                    <button
                      key={hotspot.id}
                      onClick={() => setActiveHotspot(hotspot.id)}
                      className={`text-left p-3 rounded-xl border transition-all text-xs ${
                        isSelected
                          ? "bg-forest text-cream border-forest shadow-md font-medium"
                          : "bg-white text-charcoal border-sand hover:border-forest/40"
                      }`}
                    >
                      <div className="text-[10px] opacity-70 uppercase tracking-wider mb-0.5">
                        {hotspot.category}
                      </div>
                      <div className="font-serif text-sm leading-tight">{hotspot.name}</div>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Detail Card */}
              <div className="p-5 rounded-2xl bg-sand/30 border border-sand/60 space-y-2">
                <div className="flex items-center justify-between text-xs text-charcoal-muted">
                  <span>Selected Focus</span>
                  <span className="text-clay font-medium">{currentHotspotData.category}</span>
                </div>
                <h4 className="font-serif text-xl text-forest font-medium">
                  {currentHotspotData.name}
                </h4>
                <p className="text-xs text-charcoal/80 leading-relaxed font-light">
                  {currentHotspotData.description}
                </p>
              </div>
            </div>

            {/* Direct Action */}
            <div className="pt-2">
              <button
                onClick={openMatchmaker}
                type="button"
                className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full bg-forest hover:bg-forest-light text-cream text-xs font-semibold uppercase tracking-wider transition-all shadow-sm"
              >
                <Compass className="w-4 h-4 text-clay-light" />
                <span>Hi me-casa, find me my place!</span>
              </button>
              <p className="text-[11px] text-center text-charcoal-muted mt-2">
                Let us discover properties with this level of architectural discernment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
