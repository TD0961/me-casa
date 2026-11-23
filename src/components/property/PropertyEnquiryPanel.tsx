"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Calendar, CheckCircle2, ShieldCheck, Compass } from "lucide-react";
import { Property } from "@/types";
import { formatPrice } from "@/lib/utils";

interface PropertyEnquiryPanelProps {
  property: Property;
  onOpenViewingModal: () => void;
}

export function PropertyEnquiryPanel({
  property,
  onOpenViewingModal,
}: PropertyEnquiryPanelProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState(
    `Hi me-casa, I am interested in exploring ${property.title}. Please provide confidential details.`
  );
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const openMatchmaker = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-matchmaker-modal"));
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-sand/70 shadow-lg sticky top-28 space-y-6">
      {/* Price & Status Header */}
      <div className="space-y-2 pb-6 border-b border-sand/50">
        <span className="text-[10px] uppercase tracking-wider font-semibold text-clay block">
          Current Offering
        </span>
        <div className="font-serif text-3xl sm:text-4xl text-forest font-light">
          {formatPrice(property.price, property.period)}
        </div>
        <div className="flex items-center gap-2 pt-1">
          <span className="inline-flex items-center gap-1 text-xs text-forest font-medium bg-sand/40 px-2.5 py-0.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-forest" />
            {property.status}
          </span>
          <span className="text-xs text-charcoal/60">
            Ref: MC-{property.id.toUpperCase().slice(0, 6)}
          </span>
        </div>
      </div>

      {/* Schedule Viewing Primary Button */}
      <div className="space-y-3">
        <button
          onClick={onOpenViewingModal}
          type="button"
          className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full bg-forest hover:bg-forest-light text-cream text-xs font-semibold uppercase tracking-wider transition-all shadow-md group"
        >
          <Calendar className="w-4 h-4 text-clay-light" />
          <span>Schedule Private Viewing</span>
        </button>

        <button
          onClick={openMatchmaker}
          type="button"
          className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-sand/40 hover:bg-sand/70 text-forest text-xs font-semibold uppercase tracking-wider transition-colors"
        >
          <Compass className="w-3.5 h-3.5 text-clay" />
          <span>Compare With Other Spaces</span>
        </button>
      </div>

      {/* Dedicated Inquiry Form */}
      <div className="space-y-4 pt-4 border-t border-sand/50">
        <h4 className="font-serif text-lg text-forest font-medium">Confidential Inquiry</h4>

        {submitted ? (
          <div className="p-4 rounded-2xl bg-sand/30 border border-sand text-center space-y-2 text-xs">
            <CheckCircle2 className="w-6 h-6 text-forest mx-auto" />
            <h5 className="font-serif text-base text-forest font-medium">Inquiry Dispatched</h5>
            <p className="text-charcoal/80">
              Thank you, {name}. {property.agent.name} will reach out directly with property
              documentation and available schedules.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                className="w-full p-2.5 bg-cream/50 border border-sand rounded-xl text-xs text-charcoal focus:outline-none focus:border-forest"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="w-full p-2.5 bg-cream/50 border border-sand rounded-xl text-xs text-charcoal focus:outline-none focus:border-forest"
              />
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone (optional)"
                className="w-full p-2.5 bg-cream/50 border border-sand rounded-xl text-xs text-charcoal focus:outline-none focus:border-forest"
              />
            </div>
            <div>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-2.5 bg-cream/50 border border-sand rounded-xl text-xs text-charcoal focus:outline-none focus:border-forest"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-clay hover:bg-clay-light text-cream rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
            >
              Submit Direct Inquiry
            </button>
          </form>
        )}
      </div>

      {/* Representing Agent Card */}
      <div className="pt-4 border-t border-sand/50 flex items-center gap-3.5">
        <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border border-sand">
          <Image
            src={property.agent.avatar}
            alt={property.agent.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-wider text-charcoal-muted">
            Represented By
          </span>
          <span className="font-serif text-sm font-medium text-forest">
            {property.agent.name}
          </span>
          <span className="text-[11px] text-charcoal/70">{property.agent.role}</span>
        </div>
      </div>

      <div className="text-[11px] text-charcoal/60 flex items-center gap-1.5 pt-2">
        <ShieldCheck className="w-3.5 h-3.5 text-clay" />
        <span>me-casa Certified Representation • Complete Client Discretion</span>
      </div>
    </div>
  );
}
