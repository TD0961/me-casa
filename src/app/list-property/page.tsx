import React from "react";
import type { Metadata } from "next";
import { OwnerListingForm } from "@/components/forms/OwnerListingForm";
import { Sparkles, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "List Your Property — me-casa Representation",
  description:
    "Introduce your architectural residence or commercial space to discerning buyers and tenants with me-casa's editorial representation and management.",
};

export default function ListPropertyPage() {
  return (
    <div className="pt-32 pb-24 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Proposition & Process */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest/10 text-forest text-xs font-semibold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5 text-clay" />
                <span>Property Representation</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl text-forest font-light leading-tight">
                Your property deserves{" "}
                <span className="italic font-normal text-clay-dark">
                  the right introduction.
                </span>
              </h1>
              <p className="text-charcoal/80 text-sm sm:text-base font-light leading-relaxed">
                Whether you are considering selling, leasing to executive tenants, or looking for
                continual property management, we represent your property with cinematic visual
                storytelling and uncompromising discretion.
              </p>
            </div>

            {/* 3 Step Process */}
            <div className="space-y-4 pt-4 border-t border-sand/50">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-forest block">
                What Happens After Submission:
              </span>

              {[
                {
                  step: "01",
                  title: "Confidential Intake Review",
                  desc: "Our senior partners review property specifications and architectural taxonomy.",
                },
                {
                  step: "02",
                  title: "Private Walkthrough",
                  desc: "We visit your home to inspect natural lighting, orientation, and unique craftsmanship.",
                },
                {
                  step: "03",
                  title: "Bespoke Representation Plan",
                  desc: "We deliver a comprehensive valuation, editorial marketing plan, or management scope.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="p-4 rounded-2xl bg-white border border-sand/60 space-y-1"
                >
                  <div className="flex items-center gap-2 text-clay font-mono text-xs font-bold">
                    <span>STEP {item.step}</span>
                  </div>
                  <h4 className="font-serif text-base text-forest font-medium">{item.title}</h4>
                  <p className="text-xs text-charcoal/70 font-light">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-sand/30 border border-sand/60 text-xs text-charcoal/70 flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-forest flex-shrink-0" />
              <span>Strict non-disclosure and confidential data handling assured.</span>
            </div>
          </div>

          {/* Right Column: Owner Listing Form */}
          <div className="lg:col-span-7">
            <OwnerListingForm />
          </div>
        </div>
      </div>
    </div>
  );
}
