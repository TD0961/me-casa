"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowUpRight, X } from "lucide-react";
import { Property } from "@/types";
import { formatPrice } from "@/lib/utils";

interface PropertyMapViewProps {
  properties: Property[];
}

export function PropertyMapView({ properties }: PropertyMapViewProps) {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    properties[0] || null
  );

  return (
    <div className="relative w-full h-[600px] md:h-[700px] rounded-3xl overflow-hidden border border-sand/70 bg-[#EFECE6] shadow-inner flex flex-col justify-between">
      {/* Stylized Architectural Cartographic SVG Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 700"
          preserveAspectRatio="none"
        >
          {/* Topographic and contour lines */}
          <path
            d="M0,200 Q250,150 500,280 T1000,220"
            fill="none"
            stroke="#263F35"
            strokeWidth="1.2"
            strokeDasharray="4 6"
          />
          <path
            d="M0,350 Q300,420 600,320 T1000,400"
            fill="none"
            stroke="#263F35"
            strokeWidth="1.5"
          />
          <path
            d="M0,520 Q400,480 750,560 T1000,500"
            fill="none"
            stroke="#B78D67"
            strokeWidth="1.2"
            strokeDasharray="6 8"
          />
          {/* Subtle water zone representation */}
          <path
            d="M0,0 L240,0 Q180,300 0,600 Z"
            fill="#263F35"
            fillOpacity="0.08"
          />
          {/* Grid lines */}
          <line x1="200" y1="0" x2="200" y2="700" stroke="#D6C7B2" strokeWidth="0.8" />
          <line x1="500" y1="0" x2="500" y2="700" stroke="#D6C7B2" strokeWidth="0.8" />
          <line x1="800" y1="0" x2="800" y2="700" stroke="#D6C7B2" strokeWidth="0.8" />
          <line x1="0" y1="250" x2="1000" y2="250" stroke="#D6C7B2" strokeWidth="0.8" />
          <line x1="0" y1="500" x2="1000" y2="500" stroke="#D6C7B2" strokeWidth="0.8" />
        </svg>
      </div>

      {/* Top Info Bar */}
      <div className="relative z-10 m-4 sm:m-6 flex items-center justify-between pointer-events-none">
        <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-sand/60 text-xs text-forest font-medium shadow-sm pointer-events-auto">
          <span>Architectural Geospatial View • {properties.length} Active Residences</span>
        </div>
      </div>

      {/* Pins placed relative to index/location */}
      <div className="relative inset-0 z-10 w-full h-full pointer-events-none">
        {properties.map((prop, idx) => {
          const isSelected = selectedProperty?.id === prop.id;
          // Relative coordinates simulation across canvas
          const positions = [
            { top: "35%", left: "32%" },
            { top: "48%", left: "75%" },
            { top: "62%", left: "28%" },
            { top: "68%", left: "54%" },
            { top: "28%", left: "62%" },
            { top: "78%", left: "80%" },
          ];
          const pos = positions[idx % positions.length];

          return (
            <div
              key={prop.id}
              style={{ top: pos.top, left: pos.left }}
              className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
            >
              <button
                onClick={() => setSelectedProperty(prop)}
                className={`group flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-300 shadow-md ${
                  isSelected
                    ? "bg-forest text-cream scale-110 ring-4 ring-forest/20 z-20"
                    : "bg-white text-forest hover:bg-forest hover:text-cream border border-sand"
                }`}
                title={prop.title}
              >
                <MapPin className="w-3.5 h-3.5 text-clay" />
                <span className="text-[11px] font-semibold whitespace-nowrap">
                  {formatPrice(prop.price, prop.period)}
                </span>
              </button>
            </div>
          );
        })}
      </div>

      {/* Floating Property Card Popup for Selected Property */}
      {selectedProperty && (
        <div className="relative z-20 m-4 sm:m-6 max-w-sm sm:max-w-md bg-white rounded-2xl p-4 border border-sand/70 shadow-2xl animate-fade-in self-start">
          <div className="flex gap-4">
            <div className="relative w-28 h-28 rounded-xl overflow-hidden flex-shrink-0">
              <Image
                src={selectedProperty.images[0].url}
                alt={selectedProperty.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-between flex-grow">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-clay block">
                    {selectedProperty.category}
                  </span>
                  <h4 className="font-serif text-base text-forest font-medium line-clamp-1">
                    {selectedProperty.title}
                  </h4>
                  <p className="text-[11px] text-charcoal/70">
                    {selectedProperty.location.neighborhood}, {selectedProperty.location.city}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedProperty(null)}
                  className="p-1 text-charcoal-muted hover:text-forest"
                  aria-label="Close details"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-sand/40">
                <span className="text-xs font-serif font-bold text-forest">
                  {formatPrice(selectedProperty.price, selectedProperty.period)}
                </span>
                <Link
                  href={`/properties/${selectedProperty.slug}`}
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-clay hover:text-clay-dark"
                >
                  <span>View Details</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

