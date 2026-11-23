"use client";

import React, { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

export function OwnerListingForm() {
  const [ownerName, setOwnerName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [propertyLocation, setPropertyLocation] = useState("");
  const [propertyType, setPropertyType] = useState("Architectural Villa");
  const [serviceRequest, setServiceRequest] = useState("Selling / Acquisition Advisory");
  const [bedrooms, setBedrooms] = useState("3");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-8 sm:p-12 rounded-3xl bg-white border border-sand/70 shadow-xl text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-forest text-cream mx-auto flex items-center justify-center">
          <CheckCircle2 className="w-10 h-10 text-clay-light" />
        </div>
        <div className="space-y-2">
          <h3 className="font-serif text-3xl text-forest font-medium">
            Property Introduction Received
          </h3>
          <p className="text-sm text-charcoal/80 max-w-md mx-auto font-light leading-relaxed">
            Thank you, {ownerName}. Our senior partners have received your submission for your{" "}
            {propertyType} in {propertyLocation}. We will reach out to you directly within one
            business day at <strong className="text-forest">{email}</strong>.
          </p>
        </div>
        <div className="p-4 rounded-2xl bg-sand/30 border border-sand max-w-sm mx-auto text-xs text-charcoal/70">
          <span>
            Integration boundary note: Demonstration submission captured. Your inquiry is securely
            recorded in the advisory pipeline.
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 sm:p-12 rounded-3xl bg-white border border-sand/70 shadow-xl space-y-6">
      <div className="space-y-1">
        <span className="text-xs uppercase tracking-widest text-clay font-semibold block">
          Owner Intake Form
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl text-forest font-medium">
          Tell us about your property
        </h2>
        <p className="text-xs sm:text-sm text-charcoal/70 font-light">
          Fill out the details below and an architectural advisory partner will contact you.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 pt-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-forest mb-1">
              Owner Full Name *
            </label>
            <input
              type="text"
              required
              value={ownerName}
              onChange={(e) => setOwnerName(e.target.value)}
              placeholder="e.g. Helena Morris"
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="helena@example.com"
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
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+1 (555) 000-0000"
              className="w-full p-3 bg-cream/50 border border-sand rounded-xl text-xs text-charcoal focus:outline-none focus:border-forest"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-forest mb-1">
              Property Location / Address *
            </label>
            <input
              type="text"
              required
              value={propertyLocation}
              onChange={(e) => setPropertyLocation(e.target.value)}
              placeholder="City, Neighborhood, or Full Address"
              className="w-full p-3 bg-cream/50 border border-sand rounded-xl text-xs text-charcoal focus:outline-none focus:border-forest"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-forest mb-1">
              Property Type
            </label>
            <select
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="w-full p-3 bg-cream/50 border border-sand rounded-xl text-xs text-charcoal focus:outline-none focus:border-forest"
            >
              <option value="Architectural Villa">Architectural Villa</option>
              <option value="Urban Loft">Urban Loft</option>
              <option value="Historic Townhouse">Historic Townhouse</option>
              <option value="Coastal Pavilion">Coastal Pavilion</option>
              <option value="Penthouse Residence">Penthouse Residence</option>
              <option value="Commercial Space">Commercial Space</option>
            </select>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-forest mb-1">
              Service Request
            </label>
            <select
              value={serviceRequest}
              onChange={(e) => setServiceRequest(e.target.value)}
              className="w-full p-3 bg-cream/50 border border-sand rounded-xl text-xs text-charcoal focus:outline-none focus:border-forest"
            >
              <option value="Selling / Acquisition Advisory">Selling / Private Acquisition</option>
              <option value="Curated Rental Representation">Curated Rental Representation</option>
              <option value="Full Property Management">Full Property Management</option>
              <option value="Both Marketing & Ongoing Management">Marketing & Management</option>
            </select>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-forest mb-1">
              Bedrooms / Scale
            </label>
            <select
              value={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}
              className="w-full p-3 bg-cream/50 border border-sand rounded-xl text-xs text-charcoal focus:outline-none focus:border-forest"
            >
              <option value="1">1 Bedroom</option>
              <option value="2">2 Bedrooms</option>
              <option value="3">3 Bedrooms</option>
              <option value="4">4 Bedrooms</option>
              <option value="5+">5+ Bedrooms</option>
              <option value="Commercial">Commercial / Open</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-forest mb-1">
            Architectural Details & Special Features
          </label>
          <textarea
            rows={3}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Tell us about the architecture, natural light, notable architects, renovations, or desired timeframe..."
            className="w-full p-3 bg-cream/50 border border-sand rounded-xl text-xs text-charcoal focus:outline-none focus:border-forest"
          />
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="w-full py-4 bg-forest hover:bg-forest-light text-cream rounded-full text-xs font-semibold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
          >
            <Send className="w-3.5 h-3.5 text-clay-light" />
            <span>Submit Property for Advisory Review</span>
          </button>
        </div>
      </form>
    </div>
  );
}
