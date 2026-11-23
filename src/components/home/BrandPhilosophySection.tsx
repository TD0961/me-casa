import React from "react";
import Image from "next/image";
import { Compass, Check } from "lucide-react";

export function BrandPhilosophySection() {
  return (
    <section className="py-24 bg-sand-light/40 border-b border-sand/40">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Storytelling Diptych */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-sand">
              <Image
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop"
                alt="Portrait of woman in sunlit architectural interior"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Overlapping Secondary Image */}
            <div className="hidden sm:block absolute -bottom-10 -right-8 w-60 h-72 rounded-2xl overflow-hidden shadow-xl border-4 border-cream z-10">
              <Image
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop"
                alt="Living room in warm natural sunlight"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating Brand Badge */}
            <div className="absolute top-8 left-8 bg-forest text-cream p-4 rounded-2xl shadow-lg max-w-[200px] border border-white/10">
              <span className="block text-[10px] uppercase tracking-widest text-clay-light font-semibold">
                Guiding Principle
              </span>
              <span className="font-serif text-lg leading-tight mt-1 block">
                People first. Property follows.
              </span>
            </div>
          </div>

          {/* Right Column: Editorial Philosophy Essay */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sand/60 text-forest text-xs font-semibold uppercase tracking-widest">
              <Compass className="w-3.5 h-3.5 text-clay" />
              <span>Our Business Philosophy</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-forest font-light leading-tight">
              It&apos;s not just about the property.{" "}
              <span className="italic font-normal text-clay-dark">It&apos;s about you.</span>
            </h2>

            <p className="text-charcoal/80 text-base md:text-lg font-light leading-relaxed">
              Traditional real estate often prioritizes square footage, transactions, and commission
              metrics. At me-casa, we start somewhere entirely different: understanding who you
              are, how you live, what brings you peace, and what your next chapter requires.
            </p>

            <p className="text-charcoal/75 text-sm md:text-base font-light leading-relaxed">
              Finding a place is easy; finding <em>your place</em> is what matters. We consider
              morning natural light, acoustic tranquility, proximity to what you love, and the
              enduring emotional resonance of space.
            </p>

            {/* 3 Pillars checklist */}
            <div className="space-y-3 pt-2">
              {[
                {
                  title: "Understanding Before Recommending",
                  desc: "We listen to your unspoken requirements before scheduling a single viewing.",
                },
                {
                  title: "Architectural & Spatial Discernment",
                  desc: "We evaluate natural ventilation, material longevity, and spatial proportions.",
                },
                {
                  title: "Continued Care Beyond The Keys",
                  desc: "We oversee property management, maintenance, and tenant care long after closing.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-sand/50">
                  <div className="w-5 h-5 rounded-full bg-forest text-cream flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-clay-light" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-medium text-forest">{item.title}</h4>
                    <p className="text-xs text-charcoal/70 font-light mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
