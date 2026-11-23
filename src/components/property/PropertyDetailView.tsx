"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, MapPin, Bed, Bath, Maximize2, Calendar, Sparkles, Check, Share2 } from "lucide-react";
import { Property } from "@/types";
import { PropertyGallery } from "@/components/property/PropertyGallery";
import { PropertyEnquiryPanel } from "@/components/property/PropertyEnquiryPanel";
import { ViewingRequestModal } from "@/components/property/ViewingRequestModal";
import { PropertyCard } from "@/components/property/PropertyCard";
import { formatPrice } from "@/lib/utils";

interface PropertyDetailViewProps {
  property: Property;
  similarProperties: Property[];
}

export function PropertyDetailView({ property, similarProperties }: PropertyDetailViewProps) {
  const [viewingModalOpen, setViewingModalOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const openMatchmaker = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-matchmaker-modal"));
    }
  };

  return (
    <div className="pt-32 pb-24 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Navigation Breadcrumb & Back Link */}
        <div className="flex items-center justify-between pb-8">
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-forest hover:text-clay transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Collection</span>
          </Link>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-sand/80 text-xs text-charcoal hover:text-forest transition-colors shadow-sm"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>{copiedLink ? "Link Copied!" : "Share Residence"}</span>
          </button>
        </div>

        {/* Property Title Header */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3.5 py-1 rounded-full bg-forest text-cream text-[10px] font-semibold uppercase tracking-wider">
              {property.category}
            </span>
            <span className="px-3.5 py-1 rounded-full bg-sand/60 text-forest text-[10px] font-semibold uppercase tracking-wider">
              {property.status}
            </span>
            <span className="text-xs text-clay font-medium flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              {property.location.neighborhood}, {property.location.city},{" "}
              {property.location.state}, {property.location.country}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-forest font-light leading-tight">
            {property.title}
          </h1>

          <p className="text-charcoal/80 text-base sm:text-lg font-light max-w-3xl leading-relaxed">
            {property.tagline}
          </p>
        </div>

        {/* Main Content Layout: Gallery + Details (col-8) vs Sticky Enquiry Panel (col-4) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Gallery, Narrative, Features, Specs */}
          <div className="lg:col-span-8 space-y-12">
            {/* Gallery */}
            <PropertyGallery images={property.images} title={property.title} />

            {/* Quick Specs Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-3xl bg-white border border-sand/60 shadow-sm text-center">
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-charcoal-muted block">
                  Bedrooms
                </span>
                <div className="flex items-center justify-center gap-1 text-forest font-serif text-2xl font-medium">
                  <Bed className="w-4 h-4 text-clay" />
                  <span>{property.bedrooms > 0 ? property.bedrooms : "Open"}</span>
                </div>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-charcoal-muted block">
                  Bathrooms
                </span>
                <div className="flex items-center justify-center gap-1 text-forest font-serif text-2xl font-medium">
                  <Bath className="w-4 h-4 text-clay" />
                  <span>{property.bathrooms}</span>
                </div>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-charcoal-muted block">
                  Living Area
                </span>
                <div className="flex items-center justify-center gap-1 text-forest font-serif text-2xl font-medium">
                  <Maximize2 className="w-4 h-4 text-clay" />
                  <span>{property.sqft.toLocaleString()} sqft</span>
                </div>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-charcoal-muted block">
                  Year Built
                </span>
                <div className="flex items-center justify-center gap-1 text-forest font-serif text-2xl font-medium">
                  <Calendar className="w-4 h-4 text-clay" />
                  <span>{property.yearBuilt}</span>
                </div>
              </div>
            </div>

            {/* Editorial Story */}
            <div className="p-8 sm:p-10 rounded-3xl bg-sand-light/30 border border-sand/60 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-clay">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Architectural Narrative</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-forest font-medium">
                The poetry of light and structure
              </h2>
              <p className="text-charcoal/80 text-sm sm:text-base leading-relaxed font-light">
                {property.editorialStory}
              </p>
              <p className="text-charcoal/75 text-sm sm:text-base leading-relaxed font-light">
                {property.description}
              </p>
            </div>

            {/* Key Architectural Features */}
            <div className="space-y-6">
              <h3 className="font-serif text-2xl text-forest font-medium">
                Key Architectural Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {property.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-sand/50 shadow-sm"
                  >
                    <div className="w-5 h-5 rounded-full bg-forest text-cream flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-clay-light" />
                    </div>
                    <span className="text-xs sm:text-sm text-charcoal/80 font-light leading-snug">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities & Systems */}
            <div className="space-y-6">
              <h3 className="font-serif text-2xl text-forest font-medium">
                Building Amenities & Craftsmanship
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {property.amenities.map((amenity, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-sand/50 shadow-sm"
                  >
                    <div className="w-5 h-5 rounded-full bg-clay text-cream flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Sparkles className="w-3 h-3 text-cream" />
                    </div>
                    <span className="text-xs sm:text-sm text-charcoal/80 font-light leading-snug">
                      {amenity}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architectural Style & Heritage Details */}
            <div className="p-6 rounded-2xl bg-white border border-sand/60 space-y-3">
              <span className="text-[10px] uppercase tracking-wider text-charcoal-muted font-semibold">
                Architectural Taxonomy
              </span>
              <div className="font-serif text-xl text-forest font-medium">
                {property.architecturalStyle}
              </div>
              <p className="text-xs text-charcoal/70 leading-relaxed font-light">
                Cataloged under me-casa&apos;s architectural preservation standards. Property
                inspections and historical integrity verification completed.
              </p>
            </div>
          </div>

          {/* Right Column: Sticky Enquiry & Viewing Panel */}
          <div className="lg:col-span-4">
            <PropertyEnquiryPanel
              property={property}
              onOpenViewingModal={() => setViewingModalOpen(true)}
            />
          </div>
        </div>

        {/* Similar Properties Section */}
        {similarProperties.length > 0 && (
          <div className="mt-24 pt-16 border-t border-sand/50 space-y-8">
            <div className="flex items-end justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-clay font-semibold block">
                  Curated Suggestions
                </span>
                <h3 className="font-serif text-3xl text-forest font-light">
                  Similar architectural residences
                </h3>
              </div>
              <Link
                href="/properties"
                className="text-xs uppercase tracking-wider font-semibold text-forest hover:text-clay transition-colors"
              >
                View All
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {similarProperties.map((prop) => (
                <PropertyCard key={prop.id} property={prop} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Floating Action Bar on Mobile Screens */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md p-4 border-t border-sand shadow-2xl flex items-center justify-between gap-4">
        <div>
          <span className="text-[10px] uppercase tracking-wider text-charcoal-muted block">
            Offering Price
          </span>
          <span className="font-serif text-lg font-bold text-forest">
            {formatPrice(property.price, property.period)}
          </span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setViewingModalOpen(true)}
            className="px-4 py-2.5 bg-forest text-cream rounded-full text-xs font-semibold uppercase tracking-wider"
          >
            Schedule
          </button>
          <button
            onClick={openMatchmaker}
            className="px-4 py-2.5 bg-clay text-cream rounded-full text-xs font-semibold uppercase tracking-wider"
          >
            Inquire
          </button>
        </div>
      </div>

      {/* Viewing Request Modal */}
      <ViewingRequestModal
        property={property}
        isOpen={viewingModalOpen}
        onClose={() => setViewingModalOpen(false)}
      />
    </div>
  );
}
