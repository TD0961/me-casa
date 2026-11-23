"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Compass, Mail, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function Footer() {
  const [emailInput, setEmailInput] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput("");
    }
  };

  const openMatchmaker = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-matchmaker-modal"));
    }
  };

  return (
    <footer className="bg-forest-dark text-cream pt-20 pb-12 border-t border-forest-light/30">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Top Banner: Main Brand Promise & Direct CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-16 border-b border-white/10 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-sand/80 font-semibold">
              The me-casa Commitment
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-cream font-light leading-tight">
              Finding a place is easy.{" "}
              <span className="italic font-normal text-clay-light">Finding your place</span> is what
              matters.
            </h2>
            <p className="text-sand/80 text-base max-w-2xl font-light">
              We are a people-centred real estate collective. From the moment you begin searching,
              through acquisition, and during the years of property management thereafter, we are
              your steadfast partner.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 justify-center lg:items-end">
            <button
              onClick={openMatchmaker}
              type="button"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-clay hover:bg-clay-light text-cream rounded-full font-medium text-sm tracking-wider uppercase transition-all duration-300 shadow-lg hover:shadow-clay/20 text-center"
            >
              <Compass className="w-4 h-4" />
              <span>Hi me-casa, find me my place!</span>
            </button>
            <Link
              href="/list-property"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-sand/40 hover:border-cream text-cream rounded-full font-medium text-sm tracking-wider uppercase transition-colors text-center"
            >
              <span>List Your Property</span>
              <ArrowUpRight className="w-4 h-4 text-sand" />
            </Link>
          </div>
        </div>

        {/* Multi-Column Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 py-16 border-b border-white/10">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-clay flex items-center justify-center text-forest-dark font-serif font-bold text-sm">
                m
              </div>
              <span className="font-serif text-2xl font-medium tracking-tight text-white">
                me-casa
              </span>
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-sand/70 font-medium">
              Real Estate. Made Personal.
            </p>
            <p className="text-sand/75 text-sm leading-relaxed max-w-sm font-light">
              People first. Property follows. We believe real estate should be an inspiring,
              human-centred experience built on empathy, architectural integrity, and enduring care.
            </p>
            <div className="pt-2 text-xs text-sand/60 space-y-1">
              <p>Direct Concierge: {siteConfig.contact.phone}</p>
              <p>Inquiries: {siteConfig.contact.email}</p>
              <p>Advisory Studio: {siteConfig.contact.office.address}, {siteConfig.contact.office.city}</p>
            </div>
          </div>

          {/* Column 2: Properties & Search */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] text-clay-light font-semibold">
              Properties
            </h3>
            <ul className="space-y-2.5 text-sm text-sand/80 font-light">
              <li>
                <Link href="/properties?type=buy" className="hover:text-cream transition-colors">
                  Buy Residences
                </Link>
              </li>
              <li>
                <Link href="/properties?type=rent" className="hover:text-cream transition-colors">
                  Curated Rentals
                </Link>
              </li>
              <li>
                <Link
                  href="/properties?type=commercial"
                  className="hover:text-cream transition-colors"
                >
                  Commercial & Studios
                </Link>
              </li>
              <li>
                <Link href="/properties" className="hover:text-cream transition-colors">
                  All Architectural Homes
                </Link>
              </li>
              <li>
                <Link href="/list-property" className="hover:text-cream transition-colors">
                  Property Owners Representation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: The Seven Services */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] text-clay-light font-semibold">
              Our 7 Services
            </h3>
            <ul className="space-y-2.5 text-sm text-sand/80 font-light">
              <li>
                <Link href="/services#residential-real-estate" className="hover:text-cream transition-colors">
                  Residential Real Estate
                </Link>
              </li>
              <li>
                <Link href="/services#property-rentals" className="hover:text-cream transition-colors">
                  Property Rentals
                </Link>
              </li>
              <li>
                <Link href="/services#property-sales-acquisition" className="hover:text-cream transition-colors">
                  Sales & Acquisition
                </Link>
              </li>
              <li>
                <Link href="/services#commercial-real-estate" className="hover:text-cream transition-colors">
                  Commercial Real Estate
                </Link>
              </li>
              <li>
                <Link href="/services#property-investment" className="hover:text-cream transition-colors">
                  Property Investment
                </Link>
              </li>
              <li>
                <Link href="/property-management" className="text-clay-light font-medium hover:text-white transition-colors">
                  Property Management
                </Link>
              </li>
              <li>
                <Link href="/services#property-marketing-representation" className="hover:text-cream transition-colors">
                  Marketing & Representation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Private Dispatch & Updates */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] text-clay-light font-semibold">
              Private Journal
            </h3>
            <p className="text-xs text-sand/75 font-light leading-relaxed">
              Receive quarterly architectural essays, private acquisition previews, and property management insights.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 p-3 rounded-lg bg-forest/70 border border-sand/30 text-xs text-sand">
                <CheckCircle2 className="w-4 h-4 text-clay" />
                <span>Thank you. You are on the private dispatch list.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="Your email address"
                    className="w-full px-4 py-2.5 pr-10 text-xs rounded-lg bg-forest/80 border border-white/15 text-cream placeholder-sand/50 focus:outline-none focus:border-clay"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-sand hover:text-cream"
                    aria-label="Subscribe to me-casa journal"
                  >
                    <Mail className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-[10px] text-sand/50">Zero spam. Pure architectural discernment.</p>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Philosophy Footnote */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-sand/60 gap-4">
          <p>© {new Date().getFullYear()} me-casa Real Estate Collective. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="italic font-serif">People first. Property follows.</span>
            <span>•</span>
            <Link href="/about" className="hover:text-cream transition-colors">
              Philosophy & Values
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-cream transition-colors">
              Studio Location
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
