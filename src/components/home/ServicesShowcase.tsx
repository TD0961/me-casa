import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { servicesData } from "@/data/services";

export function ServicesShowcase() {
  return (
    <section className="py-24 bg-cream border-b border-sand/40">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-clay">
              Full Spectrum Advisory
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-forest font-light leading-tight">
              Comprehensive real estate.{" "}
              <span className="italic font-normal text-clay-dark">Tailored to the individual.</span>
            </h2>
            <p className="text-charcoal/80 text-sm md:text-base font-light">
              From discovering your first architectural residence to managing an extensive property
              portfolio, our seven integrated practices guide you with discretion and expertise.
            </p>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-forest hover:text-clay transition-colors group"
          >
            <span>View All 7 Services</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* 7 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className={`group flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white border border-sand/60 hover:border-forest/40 transition-all duration-300 shadow-sm hover:shadow-xl ${
                index === 5 ? "md:col-span-2 lg:col-span-1 border-clay/40 bg-sand-light/20" : ""
              }`}
            >
              <div className="space-y-6">
                {/* Image & Service Number */}
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-sand/30">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-forest/90 backdrop-blur-md rounded-full text-cream text-[10px] font-mono tracking-wider">
                    {service.number}
                  </div>
                </div>

                {/* Service Title & Subtitle */}
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-clay block">
                    {service.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl text-forest font-medium group-hover:text-clay transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal/75 leading-relaxed font-light">
                    {service.shortDescription}
                  </p>
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-6 mt-6 border-t border-sand/50">
                <Link
                  href={`/services#${service.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-forest group-hover:text-clay transition-colors"
                >
                  <span>{service.ctaText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

