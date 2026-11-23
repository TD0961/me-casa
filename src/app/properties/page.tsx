import React, { Suspense } from "react";
import type { Metadata } from "next";
import { PropertiesContent } from "@/components/property/PropertiesContent";

export const metadata: Metadata = {
  title: "Properties — Architectural Residences & Spaces",
  description:
    "Explore curated architectural villas, lofts, townhouses, and commercial spaces represented by me-casa.",
};

export default function PropertiesPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen pt-40 flex items-center justify-center bg-cream">
          <div className="flex flex-col items-center gap-3">
            <div className="w-10 h-10 border-2 border-forest border-t-transparent rounded-full animate-spin" />
            <span className="text-xs uppercase tracking-widest text-forest font-medium">
              Loading Architectural Collection...
            </span>
          </div>
        </div>
      }
    >
      <PropertiesContent />
    </Suspense>
  );
}

