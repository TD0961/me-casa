import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Camera, Sparkles, TrendingUp } from "lucide-react";

export function OwnerIntroductionSection() {
  return (
    <section className="py-24 bg-sand-light/50 border-b border-sand/40">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="bg-forest-dark text-cream rounded-3xl p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-2xl border border-white/10">
          {/* Subtle background glow */}
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-clay/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-sand-light text-xs font-semibold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5 text-clay-light" />
                <span>For Property Owners</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-light leading-tight">
                Your property deserves{" "}
                <span className="italic font-normal text-clay-light">the right introduction.</span>
              </h2>

              <p className="text-sand/80 text-base md:text-lg font-light leading-relaxed">
                Whether you intend to sell, lease to discerning tenants, or entrust your home to
                professional property managers, we present your architectural residence with the
                reverence and editorial elegance it deserves.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs text-sand/85">
                <div className="flex items-center gap-2.5">
                  <Camera className="w-4 h-4 text-clay-light flex-shrink-0" />
                  <span>Cinematic photography & architectural video</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <TrendingUp className="w-4 h-4 text-clay-light flex-shrink-0" />
                  <span>Global network of qualified buyers & tenants</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/list-property"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-clay hover:bg-clay-light text-cream rounded-full text-xs font-semibold uppercase tracking-wider transition-all shadow-lg"
                >
                  <span>List Your Property</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services#property-marketing-representation"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-sand/40 hover:border-cream text-cream rounded-full text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  <span>Explore Marketing Services</span>
                </Link>
              </div>
            </div>

            {/* Right Photo */}
            <div className="lg:col-span-5 relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden border border-white/20 shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1000&auto=format&fit=crop"
                alt="Architectural modern home dusk lighting"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

