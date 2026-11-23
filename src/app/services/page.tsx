import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { servicesData } from "@/data/services";
import { ArrowUpRight, Check, Compass } from "lucide-react";

export const metadata: Metadata = {
  title: "Services — Architectural Advisory & Management",
  description:
    "Explore me-casa's seven integrated real estate practices: residential, rentals, acquisitions, commercial, investments, management, and marketing.",
};

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest/10 text-forest text-xs font-semibold uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5 text-clay" />
            <span>Comprehensive Practices</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-forest font-light leading-tight">
            Seven practices.{" "}
            <span className="italic font-normal text-clay-dark">One personal philosophy.</span>
          </h1>
          <p className="text-charcoal/80 text-base md:text-lg font-light leading-relaxed">
            We provide integrated real estate advisory tailored around individuals, not transactions.
            From discovering your next architectural residence to ongoing asset management, we are
            your steadfast partner.
          </p>
        </div>

        {/* 7 Services Detailed List */}
        <div className="space-y-16">
          {servicesData.map((service, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={service.id}
                id={service.slug}
                className="scroll-mt-32 p-8 sm:p-12 rounded-3xl bg-white border border-sand/70 shadow-sm"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Visual Column */}
                  <div className={`lg:col-span-5 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-sand/50">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-forest/90 backdrop-blur-md text-cream font-mono text-xs">
                        {service.number}
                      </div>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div
                    className={`lg:col-span-7 space-y-6 ${
                      isReversed ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="space-y-2">
                      <span className="text-xs uppercase tracking-widest font-semibold text-clay block">
                        {service.subtitle}
                      </span>
                      <h2 className="font-serif text-3xl sm:text-4xl text-forest font-medium">
                        {service.title}
                      </h2>
                    </div>

                    <div className="space-y-3 text-sm sm:text-base text-charcoal/80 font-light leading-relaxed">
                      {service.detailedDescription.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>

                    {/* Deliverables Checklist */}
                    <div className="space-y-2 pt-2">
                      <span className="text-[11px] uppercase tracking-wider font-semibold text-forest block">
                        What We Provide:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.deliverables.map((item, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-charcoal/75">
                            <Check className="w-3.5 h-3.5 text-clay flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      {service.id === "property-management" ? (
                        <Link
                          href="/property-management"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-forest hover:bg-forest-light text-cream rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
                        >
                          <span>Explore Property Management Page</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      ) : service.id === "property-marketing-representation" ? (
                        <Link
                          href="/list-property"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-clay hover:bg-clay-light text-cream rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
                        >
                          <span>List Your Property With Us</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      ) : (
                        <Link
                          href={`/contact?service=${service.slug}`}
                          className="inline-flex items-center gap-2 px-6 py-3 bg-forest hover:bg-forest-light text-cream rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
                        >
                          <span>Consult Our Advisory Team</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
