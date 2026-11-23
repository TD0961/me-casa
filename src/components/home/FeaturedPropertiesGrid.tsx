import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Bed, Bath, Maximize2, MapPin } from "lucide-react";
import { sampleProperties } from "@/data/properties";
import { formatPrice } from "@/lib/utils";

export function FeaturedPropertiesGrid() {
  const featured = sampleProperties.slice(0, 4);

  return (
    <section className="py-24 bg-cream border-b border-sand/40">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Heading & View All Link */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-clay">
              Editorial Curation
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-forest font-light leading-tight">
              Places worth discovering.
            </h2>
            <p className="text-charcoal/80 text-sm md:text-base font-light">
              Each residence in our collection is chosen for architectural proportion, natural
              light, and the feeling it evokes upon arrival.
            </p>
          </div>
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-forest hover:text-clay transition-colors group"
          >
            <span>Explore Full Collection</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {featured.map((property, idx) => {
            const isWide = idx === 0 || idx === 3;
            return (
              <div
                key={property.id}
                className={`group flex flex-col justify-between rounded-3xl overflow-hidden bg-white border border-sand/60 shadow-sm hover:shadow-xl transition-all duration-500 ${
                  isWide ? "md:col-span-7 lg:col-span-8" : "md:col-span-5 lg:col-span-4"
                }`}
              >
                {/* Image Container with Badges */}
                <Link
                  href={`/properties/${property.slug}`}
                  className="relative aspect-[16/10] w-full overflow-hidden block"
                >
                  <Image
                    src={property.images[0].url}
                    alt={property.images[0].alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Category & Status Badges */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-cream/90 backdrop-blur-md text-[10px] font-semibold uppercase tracking-wider text-forest border border-sand/50 shadow-sm">
                      {property.category}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-forest/85 backdrop-blur-md text-[10px] font-medium uppercase tracking-wider text-cream">
                      {property.status}
                    </span>
                  </div>

                  {/* Price Tag Overlay */}
                  <div className="absolute bottom-4 right-4 bg-forest-dark/90 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-xs font-serif font-medium border border-white/20">
                    {formatPrice(property.price, property.period)}
                  </div>
                </Link>

                {/* Content Card Body */}
                <div className="p-6 md:p-8 flex flex-col justify-between flex-grow space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 text-xs text-clay font-medium">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>
                        {property.location.neighborhood}, {property.location.city},{" "}
                        {property.location.state}
                      </span>
                    </div>

                    <Link href={`/properties/${property.slug}`}>
                      <h3 className="font-serif text-2xl text-forest font-medium group-hover:text-clay transition-colors">
                        {property.title}
                      </h3>
                    </Link>

                    <p className="text-charcoal/75 text-xs md:text-sm line-clamp-2 font-light">
                      {property.tagline}
                    </p>
                  </div>

                  {/* Specifications Footer */}
                  <div className="pt-4 border-t border-sand/40 flex items-center justify-between text-xs text-charcoal/70">
                    <div className="flex items-center gap-4">
                      {property.bedrooms > 0 && (
                        <div className="flex items-center gap-1" title="Bedrooms">
                          <Bed className="w-3.5 h-3.5 text-clay" />
                          <span>{property.bedrooms} Beds</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1" title="Bathrooms">
                        <Bath className="w-3.5 h-3.5 text-clay" />
                        <span>{property.bathrooms} Baths</span>
                      </div>
                      <div className="flex items-center gap-1" title="Square Feet">
                        <Maximize2 className="w-3.5 h-3.5 text-clay" />
                        <span>{property.sqft.toLocaleString()} sqft</span>
                      </div>
                    </div>

                    <Link
                      href={`/properties/${property.slug}`}
                      className="inline-flex items-center gap-1 text-forest font-semibold hover:text-clay transition-colors"
                    >
                      <span>View</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Demo Content Disclosure Note */}
        <div className="mt-8 text-center text-[11px] text-charcoal-muted">
          <span>Demonstration catalog. All featured architectural residences showcase me-casa presentation standards.</span>
        </div>
      </div>
    </section>
  );
}
