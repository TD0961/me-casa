"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { PropertyImage } from "@/types";

interface PropertyGalleryProps {
  images: PropertyImage[];
  title: string;
}

export function PropertyGallery({ images, title }: PropertyGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const prevImage = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="space-y-4">
      {/* Main Large Visual Stage */}
      <div className="relative aspect-[16/10] md:aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-2xl bg-sand/30 border border-sand">
        <Image
          src={images[activeIndex]?.url || images[0].url}
          alt={images[activeIndex]?.alt || title}
          fill
          priority
          sizes="(max-width: 1200px) 100vw, 1200px"
          className="object-cover transition-all duration-700 ease-out"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

        {/* Gallery Controls */}
        <div className="absolute inset-0 flex items-center justify-between p-4 md:p-6 pointer-events-none">
          <button
            onClick={prevImage}
            className="w-10 h-10 rounded-full bg-cream/90 hover:bg-white text-forest backdrop-blur-md shadow-lg flex items-center justify-center pointer-events-auto transition-transform hover:scale-105"
            aria-label="Previous photograph"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextImage}
            className="w-10 h-10 rounded-full bg-cream/90 hover:bg-white text-forest backdrop-blur-md shadow-lg flex items-center justify-center pointer-events-auto transition-transform hover:scale-105"
            aria-label="Next photograph"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Bottom Caption & Lightbox Trigger */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
          <span className="bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
            {activeIndex + 1} of {images.length} • {images[activeIndex]?.alt}
          </span>
          <button
            onClick={() => setLightboxOpen(true)}
            className="flex items-center gap-1.5 bg-black/50 hover:bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 transition-colors"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Full screen</span>
          </button>
        </div>
      </div>

      {/* Thumbnail Strip */}
      <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-thin">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`relative w-24 h-16 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all duration-300 ${
              activeIndex === idx
                ? "border-forest scale-105 shadow-md"
                : "border-transparent opacity-65 hover:opacity-100"
            }`}
          >
            <Image src={img.url} alt={img.alt} fill className="object-cover" />
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-8"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 p-2 rounded-full text-white/70 hover:text-white bg-white/10"
            aria-label="Close fullscreen"
          >
            <X className="w-6 h-6" />
          </button>
          <div
            className="relative w-full max-w-5xl aspect-[16/10] rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[activeIndex]?.url}
              alt={images[activeIndex]?.alt}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}

