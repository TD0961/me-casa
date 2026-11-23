import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Compass, Heart, Users, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About — People First. Property Follows.",
  description:
    "Learn about me-casa, our human-centred real estate philosophy, architectural discernment, and continued post-transaction care.",
};

export default function AboutPage() {
  const values = [
    {
      title: "People First",
      desc: "Properties are containers for human moments. We listen to lifestyle rhythms, family dynamics, and daily habits before proposing a single address.",
      icon: Users,
    },
    {
      title: "Architectural Integrity",
      desc: "We look past temporary staging tricks to evaluate true spatial proportions, enduring natural materials, acoustic tranquility, and solar orientation.",
      icon: Sparkles,
    },
    {
      title: "Enduring Stewardship",
      desc: "Our involvement does not terminate at closing. We continue caring for homes through ongoing property management and maintenance.",
      icon: ShieldCheck,
    },
    {
      title: "Calm Transparency",
      desc: "No aggressive sales pitches or unrealistic promises. We offer rigorous advisory, frank evaluations, and total confidentiality.",
      icon: Heart,
    },
  ];

  return (
    <div className="pt-32 pb-24 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Hero Section */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest/10 text-forest text-xs font-semibold uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5 text-clay" />
            <span>Our Origin & Purpose</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-forest font-light leading-tight">
            Finding a place should feel{" "}
            <span className="italic font-normal text-clay-dark">a little more personal.</span>
          </h1>
          <p className="text-charcoal/80 text-base md:text-lg font-light leading-relaxed">
            me-casa is a people-centred real estate collective that connects people with properties
            and supports clients throughout their ongoing property journey.
          </p>
        </div>

        {/* Diptych Visual Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-6 relative aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden shadow-2xl border border-sand">
            <Image
              src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1200&auto=format&fit=crop"
              alt="People connecting in an architectural home"
              fill
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl text-forest font-light leading-tight">
              More than finding properties.{" "}
              <span className="italic font-normal text-clay-dark">Understanding people.</span>
            </h2>
            <p className="text-charcoal/80 text-sm sm:text-base font-light leading-relaxed">
              We started me-casa because conventional real estate had become impersonal: driven by
              automated databases, speculative hype, and transactional hurry. We believe that
              finding a home is one of the most consequential decisions an individual or family ever
              makes.
            </p>
            <p className="text-charcoal/75 text-sm sm:text-base font-light leading-relaxed">
              Our business philosophy is built around understanding people before recommending
              properties. We operate across residential sales, curated rentals, commercial spaces,
              property investments, and post-transaction property management.
            </p>
            <div className="pt-2">
              <span className="font-serif text-xl text-forest italic block">
                &ldquo;A place to belong. A place to become.&rdquo;
              </span>
            </div>
          </div>
        </div>

        {/* Mission & Vision Callout Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-sand/70 shadow-sm space-y-4">
            <span className="text-xs uppercase tracking-widest text-clay font-semibold">
              Our Mission
            </span>
            <h3 className="font-serif text-2xl text-forest font-medium">
              Human-Centred Property Representation
            </h3>
            <p className="text-charcoal/80 text-sm font-light leading-relaxed">
              To bring empathy, architectural discernment, and enduring care to every property
              relationship—treating each transaction not as an end, but as the beginning of a
              long-term partnership.
            </p>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-forest-dark text-cream border border-white/10 shadow-sm space-y-4">
            <span className="text-xs uppercase tracking-widest text-clay-light font-semibold">
              Our Vision
            </span>
            <h3 className="font-serif text-2xl text-white font-medium">
              A New Standard in Real Estate Care
            </h3>
            <p className="text-sand/80 text-sm font-light leading-relaxed">
              To redefine the relationship between people and their living environments, fostering
              spaces that elevate everyday life and maintaining them with steadfast devotion.
            </p>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="mb-24 space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest text-clay font-semibold">
              Foundational Principles
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-forest font-light">
              What we stand for
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-3xl bg-white border border-sand/60 shadow-sm space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-sand-light flex items-center justify-center text-forest">
                    <Icon className="w-5 h-5 text-clay" />
                  </div>
                  <h3 className="font-serif text-xl text-forest font-medium">{v.title}</h3>
                  <p className="text-xs text-charcoal/75 leading-relaxed font-light">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Final CTA Strip */}
        <div className="p-8 sm:p-12 rounded-3xl bg-sand/30 border border-sand flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="font-serif text-2xl text-forest font-medium">
              Ready to begin your conversation?
            </h3>
            <p className="text-xs text-charcoal/70 font-light">
              We look forward to understanding what matters most in your next place.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-8 py-3.5 bg-forest hover:bg-forest-light text-cream rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm inline-flex items-center gap-2"
          >
            <span>Connect with me-casa</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
