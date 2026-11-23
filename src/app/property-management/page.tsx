import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Wrench,
  Users,
  FileSpreadsheet,
  Search,
  Clock,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Property Management — Your Property. Our Continued Attention.",
  description:
    "Meticulous, white-glove property management and continuous care for architectural residences. Tenant management, rent administration, and maintenance coordination.",
};

export default function PropertyManagementPage() {
  const managementServices = [
    {
      title: "Tenant Management & Placement",
      description:
        "Comprehensive screening of qualified occupants, tailored lease agreements, tenant onboarding, and dedicated day-to-day relationship oversight.",
      icon: Users,
    },
    {
      title: "Rent Administration & Accounting",
      description:
        "Automated collection, escrow administration, timely owner disbursements, and transparent monthly operational accounting statements.",
      icon: FileSpreadsheet,
    },
    {
      title: "Maintenance Coordination & Artisan Network",
      description:
        "24/7 emergency dispatch and routine preventative upkeep executed by our network of vetted master tradespeople and architectural craftspeople.",
      icon: Wrench,
    },
    {
      title: "Regular Photographic Inspections",
      description:
        "Scheduled quarterly condition audits with high-resolution photographic documentation to protect the physical integrity and value of your home.",
      icon: Search,
    },
    {
      title: "Vacancy & Turnover Management",
      description:
        "Minimizing vacancy through proactive lease renewal discussions, high-production staging, and targeted distribution to our vetted client network.",
      icon: Clock,
    },
    {
      title: "Owner Representation & Compliance",
      description:
        "Serving as your authorized representative for municipal regulations, safety compliance, neighborhood associations, and property improvements.",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="pt-32 pb-24 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest/10 text-forest text-xs font-semibold uppercase tracking-widest">
              <ShieldCheck className="w-3.5 h-3.5 text-clay" />
              <span>Continued Attention Beyond The Keys</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-forest font-light leading-tight">
              Your property.{" "}
              <span className="italic font-normal text-clay-dark">Our continued attention.</span>
            </h1>

            <p className="text-charcoal/80 text-base sm:text-lg font-light leading-relaxed">
              Acquiring a property is an important milestone. Managing it well is what helps
              protect its value over time. me-casa provides discreet, full-spectrum management
              that frees you from daily friction while ensuring your residence receives the highest
              level of architectural care.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <a
                href="#owner-enquiry"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-forest hover:bg-forest-light text-cream rounded-full text-xs font-semibold uppercase tracking-wider transition-all shadow-md"
              >
                <span>Let&apos;s take care of your property</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-sand/80 hover:border-forest text-forest rounded-full text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                <span>Speak with Concierge</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-sand">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
              alt="Meticulously maintained architectural residence"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* 6 Key Management Modules */}
        <div className="mb-24 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest text-clay font-semibold">
              Comprehensive Stewardship
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-forest font-light">
              Meticulous oversight at every level
            </h2>
            <p className="text-charcoal/75 text-sm font-light">
              We do not believe in hands-off automated management. We combine thoughtful personal
              attention with modern digital transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {managementServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-white border border-sand/60 shadow-sm space-y-4 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-2xl bg-sand-light/60 flex items-center justify-center text-forest">
                    <Icon className="w-6 h-6 text-clay" />
                  </div>
                  <h3 className="font-serif text-xl text-forest font-medium">{service.title}</h3>
                  <p className="text-xs sm:text-sm text-charcoal/75 leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Transparent Reassurance Note */}
        <div className="p-8 sm:p-12 rounded-3xl bg-forest-dark text-cream mb-24 relative overflow-hidden border border-white/10">
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="flex items-center gap-2 text-clay-light text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="w-4 h-4" />
              <span>The me-casa Standard</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-light text-white">
              Honest management without fabricated promises.
            </h3>
            <p className="text-sand/80 text-sm sm:text-base font-light leading-relaxed">
              We do not make unrealistic promises of guaranteed returns, guaranteed occupancy, or
              speculative property appreciation. Instead, we deliver steadfast attention, licensed
              artisan maintenance, rigorous tenant vetting, and transparent financial reporting that
              preserves the authentic worth of your property.
            </p>
          </div>
        </div>

        {/* Owner Enquiry Section */}
        <div
          id="owner-enquiry"
          className="scroll-mt-32 max-w-3xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-sand/70 shadow-xl space-y-6"
        >
          <div className="text-center space-y-2">
            <span className="text-xs uppercase tracking-widest text-clay font-semibold">
              Owner Advisory
            </span>
            <h3 className="font-serif text-3xl text-forest font-medium">
              Let&apos;s take care of your property.
            </h3>
            <p className="text-xs sm:text-sm text-charcoal/75 font-light">
              Tell us about your property and current management needs. Our senior property manager
              will connect with you directly.
            </p>
          </div>

          <form className="space-y-4 pt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-forest mb-1">
                  Owner Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full p-3 bg-cream/50 border border-sand rounded-xl text-xs text-charcoal focus:outline-none focus:border-forest"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-forest mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  className="w-full p-3 bg-cream/50 border border-sand rounded-xl text-xs text-charcoal focus:outline-none focus:border-forest"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-forest mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+1 (555) 000-0000"
                  className="w-full p-3 bg-cream/50 border border-sand rounded-xl text-xs text-charcoal focus:outline-none focus:border-forest"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-forest mb-1">
                  Property Location / City *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Carmel Valley, CA"
                  className="w-full p-3 bg-cream/50 border border-sand rounded-xl text-xs text-charcoal focus:outline-none focus:border-forest"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-forest mb-1">
                  Property Type
                </label>
                <select className="w-full p-3 bg-cream/50 border border-sand rounded-xl text-xs text-charcoal focus:outline-none focus:border-forest">
                  <option value="Residential Villa / Estate">Residential Villa / Estate</option>
                  <option value="Urban Luxury Loft / Penthouse">Urban Luxury Loft / Penthouse</option>
                  <option value="Historic Townhouse">Historic Townhouse</option>
                  <option value="Commercial Creative Space">Commercial Creative Space</option>
                  <option value="Multi-Unit Portfolio">Multi-Unit Portfolio</option>
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-forest mb-1">
                  Current Status
                </label>
                <select className="w-full p-3 bg-cream/50 border border-sand rounded-xl text-xs text-charcoal focus:outline-none focus:border-forest">
                  <option value="Currently Occupied by Tenant">Currently Occupied by Tenant</option>
                  <option value="Vacant / Ready to Lease">Vacant / Ready to Lease</option>
                  <option value="Recently Acquired">Recently Acquired</option>
                  <option value="Seeking Switch from Other Agency">Seeking Switch from Other Agency</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-forest mb-1">
                Specific Oversight Requirements
              </label>
              <textarea
                rows={3}
                placeholder="Mention any custom requests, architectural finishes requiring specialized artisan care, or reporting expectations..."
                className="w-full p-3 bg-cream/50 border border-sand rounded-xl text-xs text-charcoal focus:outline-none focus:border-forest"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 bg-forest hover:bg-forest-light text-cream rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shadow-md"
              >
                Submit Property Management Inquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
