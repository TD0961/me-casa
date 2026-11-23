import React from "react";
import { HeroCinematic } from "@/components/hero/HeroCinematic";
import { PropertyDiscoveryBar } from "@/components/home/PropertyDiscoveryBar";
import { FeaturedPropertiesGrid } from "@/components/home/FeaturedPropertiesGrid";
import { BrandPhilosophySection } from "@/components/home/BrandPhilosophySection";
import { ServicesShowcase } from "@/components/home/ServicesShowcase";
import { JourneySection } from "@/components/home/JourneySection";
import { ArchitecturalPavilionSection } from "@/components/three/ArchitecturalPavilionSection";
import { ManagementSpotlightSection } from "@/components/home/ManagementSpotlightSection";
import { OwnerIntroductionSection } from "@/components/home/OwnerIntroductionSection";
import { FinalEmotionalCTA } from "@/components/home/FinalEmotionalCTA";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 1. Cinematic Hero with Video & Editorial Typography */}
      <HeroCinematic />

      {/* 2. Functional Property Discovery Bar */}
      <PropertyDiscoveryBar />

      {/* 3. Featured Properties Editorial Gallery */}
      <FeaturedPropertiesGrid />

      {/* 4. Brand Philosophy: "It's not just about the property. It's about you." */}
      <BrandPhilosophySection />

      {/* 5. The Seven Core Services */}
      <ServicesShowcase />

      {/* 6. The me-casa Journey: FIND, ACQUIRE, MANAGE */}
      <JourneySection />

      {/* 7. Selective Interactive 3D Experience (Three.js Architectural Pavilion) */}
      <ArchitecturalPavilionSection />

      {/* 8. Property Management Spotlight: "We're here beyond the keys." */}
      <ManagementSpotlightSection />

      {/* 9. Property Owners Section: "Your property deserves the right introduction." */}
      <OwnerIntroductionSection />

      {/* 10. Final Emotional Call to Action */}
      <FinalEmotionalCTA />
    </div>
  );
}
