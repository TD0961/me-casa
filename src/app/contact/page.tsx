import React from "react";
import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/data/siteConfig";
import { Mail, Phone, MapPin, Clock, MessageSquare, Compass, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Reach the me-casa Concierge & Advisory Team",
  description:
    "Get in touch with me-casa. We are here to help you discover your place, discuss listing your property, or manage your real estate portfolio.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest/10 text-forest text-xs font-semibold uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5 text-clay" />
            <span>Direct Concierge</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-forest font-light leading-tight">
            We&apos;re here.{" "}
            <span className="italic font-normal text-clay-dark">Let&apos;s talk about home.</span>
          </h1>
          <p className="text-charcoal/80 text-base md:text-lg font-light leading-relaxed">
            Finding a place is easy; finding your place is what matters. Whether you are ready to
            explore properties or simply have questions about our approach, we welcome your note.
          </p>
        </div>

        {/* Main Grid: Info + Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          {/* Left Column: Contact Cards & WhatsApp Direct */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Details Card */}
            <div className="p-8 rounded-3xl bg-white border border-sand/70 shadow-sm space-y-6">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-widest text-clay font-semibold">
                  Contact Details
                </span>
                <h3 className="font-serif text-2xl text-forest font-medium">Studio & Concierge</h3>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-charcoal/80">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-clay flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-charcoal-muted block">
                      Telephone
                    </span>
                    <a
                      href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
                      className="font-medium text-forest hover:text-clay transition-colors"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-clay flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-charcoal-muted block">
                      General & Inquiries
                    </span>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="font-medium text-forest hover:text-clay transition-colors"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-clay flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-charcoal-muted block">
                      Advisory Studio
                    </span>
                    <p className="font-medium text-forest">
                      {siteConfig.contact.office.address}
                    </p>
                    <p className="text-charcoal/70">
                      {siteConfig.contact.office.city}, {siteConfig.contact.office.region}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-clay flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-charcoal-muted block">
                      Studio Hours
                    </span>
                    <p className="text-charcoal/70">{siteConfig.contact.office.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Integration Card */}
            <div className="p-8 rounded-3xl bg-forest text-cream space-y-4 shadow-lg border border-forest-light">
              <div className="flex items-center gap-2 text-clay-light text-xs font-semibold uppercase tracking-widest">
                <MessageSquare className="w-4 h-4" />
                <span>Instant Messaging</span>
              </div>
              <h3 className="font-serif text-2xl text-white font-medium">WhatsApp Advisory</h3>
              <p className="text-xs sm:text-sm text-sand/80 font-light leading-relaxed">
                Need swift answers regarding private listings or scheduling? Connect directly with
                our team via WhatsApp.
              </p>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}?text=Hi%20me-casa%2C%20find%20me%20my%20place%2C%20my%20home!`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-clay hover:bg-clay-light text-cream text-xs font-semibold uppercase tracking-wider transition-colors shadow-md"
              >
                <span>Open WhatsApp Chat</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>

        {/* Studio Location Map Visual Representation */}
        <div className="rounded-3xl overflow-hidden bg-white border border-sand/70 p-6 md:p-8 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs uppercase tracking-widest text-clay font-semibold">
                Physical Location
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-forest font-medium">
                San Francisco Advisory Studio
              </h3>
            </div>
            <span className="text-xs text-charcoal/60 hidden sm:inline">
              Private appointments recommended
            </span>
          </div>

          <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden bg-[#ECE8DF] border border-sand flex items-center justify-center">
            {/* Architectural Grid Map Illustration */}
            <svg
              className="w-full h-full opacity-40"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 400"
              preserveAspectRatio="none"
            >
              <line x1="100" y1="0" x2="100" y2="400" stroke="#263F35" strokeWidth="1" />
              <line x1="300" y1="0" x2="300" y2="400" stroke="#263F35" strokeWidth="1" />
              <line x1="500" y1="0" x2="500" y2="400" stroke="#263F35" strokeWidth="1.5" />
              <line x1="700" y1="0" x2="700" y2="400" stroke="#263F35" strokeWidth="1" />
              <line x1="900" y1="0" x2="900" y2="400" stroke="#263F35" strokeWidth="1" />
              <line x1="0" y1="120" x2="1000" y2="120" stroke="#263F35" strokeWidth="1" />
              <line x1="0" y1="240" x2="1000" y2="240" stroke="#263F35" strokeWidth="1.5" />
              <line x1="0" y1="340" x2="1000" y2="340" stroke="#263F35" strokeWidth="1" />
            </svg>

            {/* Studio Pin */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="p-3 bg-forest text-cream rounded-full shadow-2xl ring-8 ring-forest/20 animate-bounce">
                <MapPin className="w-6 h-6 text-clay-light" />
              </div>
              <div className="mt-3 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md shadow-md border border-sand text-xs font-serif font-semibold text-forest">
                me-casa Atelier • 420 Meridian Blvd
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

