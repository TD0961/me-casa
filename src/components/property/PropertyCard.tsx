"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bed, Bath, Maximize2, MapPin, ArrowUpRight, Heart } from "lucide-react";
import { Property } from "@/types";
import { formatPrice } from "@/lib/utils";

interface PropertyCardProps {
  property: Property;
  priority?: boolean;
}

export function PropertyCard({ property, priority = false }: PropertyCardProps) {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className="group flex flex-col justify-between rounded-3xl overflow-hidden bg-white border border-sand/60 hover:border-forest/40 transition-all duration-500 shadow-sm hover:shadow-xl">
      {/* Top Media Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-sand/30">
        <Link href={`/properties/${property.slug}`} className="block w-full h-full">
          <Image
            src={property.images[0].url}
            alt={property.images[0].alt}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
        </Link>

        {/* Top Badges */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-cream/90 backdrop-blur-md text-[10px] font-semibold uppercase tracking-wider text-forest border border-sand/50 shadow-sm">
            {property.category}
          </span>
          <span className="px-3 py-1 rounded-full bg-forest/85 backdrop-blur-md text-[10px] font-medium uppercase tracking-wider text-cream">
            {property.status}
          </span>
        </div>

        {/* Save to Favorites Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsSaved(!isSaved);
          }}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md flex items-center justify-center text-white transition-colors"
          aria-label={isSaved ? "Remove from saved" : "Save property"}
        >
          <Heart className={`w-4 h-4 ${isSaved ? "fill-clay text-clay" : "text-white"}`} />
        </button>

        {/* Price Tag Overlay */}
        <div className="absolute bottom-4 right-4 bg-forest-dark/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-white text-xs font-serif font-medium border border-white/20">
          {formatPrice(property.price, property.period)}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-1.5 text-xs text-clay font-medium">
            <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="truncate">
              {property.location.neighborhood}, {property.location.city},{" "}
              {property.location.state}
            </span>
          </div>

          <Link href={`/properties/${property.slug}`}>
            <h3 className="font-serif text-xl sm:text-2xl text-forest font-medium group-hover:text-clay transition-colors line-clamp-1">
              {property.title}
            </h3>
          </Link>

          <p className="text-charcoal/75 text-xs sm:text-sm line-clamp-2 font-light">
            {property.tagline}
          </p>
        </div>

        {/* Specs & View Link */}
        <div className="pt-4 border-t border-sand/40 flex items-center justify-between text-xs text-charcoal/70">
          <div className="flex items-center gap-3">
            {property.bedrooms > 0 && (
              <div className="flex items-center gap-1" title="Bedrooms">
                <Bed className="w-3.5 h-3.5 text-clay" />
                <span>{property.bedrooms}</span>
              </div>
            )}
            <div className="flex items-center gap-1" title="Bathrooms">
              <Bath className="w-3.5 h-3.5 text-clay" />
              <span>{property.bathrooms}</span>
            </div>
            <div className="flex items-center gap-1" title="Square Feet">
              <Maximize2 className="w-3.5 h-3.5 text-clay" />
              <span>{property.sqft.toLocaleString()} sqft</span>
            </div>
          </div>

          <Link
            href={`/properties/${property.slug}`}
            className="inline-flex items-center gap-1 font-semibold text-forest group-hover:text-clay transition-colors"
          >
            <span>Explore</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

