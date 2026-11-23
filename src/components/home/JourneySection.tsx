import React from "react";
import { Search, KeyRound, Wrench } from "lucide-react";

export function JourneySection() {
  const steps = [
    {
      number: "01",
      code: "FIND",
      title: "Discover & Align",
      description:
        "We uncover what truly matters to you before recommending properties. We match your personal lifestyle and aesthetic instincts to spaces where life flourishes.",
      icon: Search,
      highlight: "Understanding people first",
    },
    {
      number: "02",
      code: "ACQUIRE",
      title: "Explore & Acquire",
      description:
        "Strategic valuation, discreet negotiation, and seamless transaction execution. We protect your interests at every milestone through closing and key handover.",
      icon: KeyRound,
      highlight: "Uncompromising due diligence",
    },
    {
      number: "03",
      code: "MANAGE",
      title: "Care & Protect",
      description:
        "Our relationship does not end at the keys. We provide continuous property oversight, tenant administration, preventative maintenance, and financial reporting.",
      icon: Wrench,
      highlight: "We're here beyond the keys",
    },
  ];

  return (
    <section className="py-24 bg-forest text-cream relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-clay/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-clay-light">
            The me-casa Journey
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-cream font-light leading-tight">
            From the first hello to{" "}
            <span className="italic font-normal text-sand">feeling at home.</span>
          </h2>
          <p className="text-sand/80 text-sm md:text-base font-light">
            Real estate is a continuous relationship, not a single transaction. We accompany you
            through every phase of your property journey.
          </p>
        </div>

        {/* 3 Major Journey Stages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.code}
                className="relative p-8 rounded-3xl bg-forest-dark/70 border border-white/10 flex flex-col justify-between hover:border-clay/50 transition-all duration-300 group"
              >
                <div className="space-y-6">
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-serif text-sand/40 font-light group-hover:text-clay-light transition-colors">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-clay-light group-hover:bg-clay group-hover:text-forest-dark transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Stage Code & Title */}
                  <div className="space-y-2">
                    <span className="text-xs font-mono tracking-widest text-clay-light font-bold">
                      STAGE: {step.code}
                    </span>
                    <h3 className="font-serif text-2xl text-white font-medium">{step.title}</h3>
                    <p className="text-sand/80 text-xs sm:text-sm font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Highlight Tag */}
                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] text-sand/70 font-medium">{step.highlight}</span>
                  <span className="w-2 h-2 rounded-full bg-clay group-hover:scale-150 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
