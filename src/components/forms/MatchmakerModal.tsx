"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle, Sparkles, ArrowRight, Home, Building2, Key, Wrench, ShieldCheck } from "lucide-react";
import { sampleProperties } from "@/data/properties";
import Link from "next/link";
import Image from "next/image";

export function MatchmakerModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [purpose, setPurpose] = useState("buy");
  const [stylePreference, setStylePreference] = useState("Organic Modernism");
  const [locationPreference, setLocationPreference] = useState("Any / Relocating");
  const [budget, setBudget] = useState("Flexible / Mid-to-High Range");
  const [bedrooms, setBedrooms] = useState("3+ Bedrooms");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [personalNote, setPersonalNote] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      setSubmitted(false);
      setStep(1);
    };

    window.addEventListener("open-matchmaker-modal", handleOpen);
    return () => window.removeEventListener("open-matchmaker-modal", handleOpen);
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const matchedProperties = sampleProperties.slice(0, 2);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest-dark/80 backdrop-blur-md transition-opacity duration-300"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="relative w-full max-w-2xl bg-cream rounded-2xl shadow-2xl overflow-hidden border border-sand/50"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Banner */}
        <div className="bg-forest px-8 py-6 text-cream relative">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5 p-2 rounded-full text-sand hover:text-white hover:bg-forest-light transition-colors"
            aria-label="Close matchmaker"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 text-clay-light text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>me-casa Concierge</span>
          </div>
          <h2 className="font-serif text-2xl md:text-3xl font-normal mt-1 text-white">
            &ldquo;Hi me-casa, find me my place, my home!&rdquo;
          </h2>
          <p className="text-sand/80 text-xs md:text-sm mt-1 font-light">
            Tell us about the atmosphere, rhythm, and space you envision. We understand people
            before recommending properties.
          </p>

          {/* Step Progress indicators */}
          {!submitted && (
            <div className="flex items-center gap-2 mt-5">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                    step >= s ? "bg-clay" : "bg-forest-light/60"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-8 max-h-[75vh] overflow-y-auto">
          {submitted ? (
            <div className="space-y-6 text-center py-4">
              <div className="w-14 h-14 bg-forest/10 text-forest rounded-full mx-auto flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-forest" />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-2xl text-forest font-medium">
                  We hear you, {fullName || "friend"}.
                </h3>
                <p className="text-sm text-charcoal/80 max-w-md mx-auto leading-relaxed">
                  Your vision has been received by our senior architectural advisors. We are
                  reviewing private listings and will contact you directly at{" "}
                  <strong className="text-forest">{email || "your email"}</strong>.
                </p>
              </div>

              {/* Instant suggested matches */}
              <div className="pt-4 border-t border-sand text-left">
                <p className="text-xs uppercase tracking-wider font-semibold text-charcoal-muted mb-3">
                  Initial curated inspirations from our collection:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {matchedProperties.map((prop) => (
                    <Link
                      key={prop.id}
                      href={`/properties/${prop.slug}`}
                      onClick={() => setIsOpen(false)}
                      className="group flex gap-3 p-2 rounded-xl bg-white border border-sand/40 hover:border-forest/40 transition-all shadow-sm"
                    >
                      <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={prop.images[0].url}
                          alt={prop.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex flex-col justify-center">
                        <span className="text-[10px] text-clay font-medium uppercase tracking-wider">
                          {prop.category}
                        </span>
                        <h4 className="font-serif text-sm font-medium text-forest group-hover:text-clay transition-colors line-clamp-1">
                          {prop.title}
                        </h4>
                        <span className="text-xs text-charcoal/70">
                          {prop.location.city}, {prop.location.state}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-2.5 bg-forest text-cream rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-forest-light transition-colors"
                >
                  Close & Explore Properties
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {step === 1 && (
                <div className="space-y-5 animate-fade-in">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-forest mb-2">
                      What journey are you embarking on?
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {[
                        { id: "buy", label: "Buy a Home", icon: Home },
                        { id: "rent", label: "Rent a Residence", icon: Key },
                        { id: "commercial", label: "Commercial / Studio", icon: Building2 },
                        { id: "invest", label: "Property Investment", icon: ShieldCheck },
                        { id: "manage", label: "Manage My Property", icon: Wrench },
                      ].map((item) => {
                        const Icon = item.icon;
                        const isSelected = purpose === item.id;
                        return (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => setPurpose(item.id)}
                            className={`p-3 rounded-xl border text-left flex flex-col gap-2 transition-all ${
                              isSelected
                                ? "bg-forest text-cream border-forest shadow-sm"
                                : "bg-white text-charcoal border-sand hover:border-forest/50"
                            }`}
                          >
                            <Icon className={`w-4 h-4 ${isSelected ? "text-clay-light" : "text-clay"}`} />
                            <span className="text-xs font-medium">{item.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-forest mb-2">
                      What architectural aesthetic feels like home?
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {[
                        "Organic Modernism (Earthen & Light)",
                        "Minimalist Industrial Loft & Beams",
                        "Restored Neoclassical Townhouse",
                        "Cantilevered Coastal Pavilion",
                        "High-Altitude Sky Villa / Penthouse",
                        "Biophilic Creative Workspace",
                      ].map((style) => (
                        <button
                          key={style}
                          type="button"
                          onClick={() => setStylePreference(style)}
                          className={`p-2.5 text-xs text-left rounded-lg border transition-all ${
                            stylePreference === style
                              ? "bg-sand/60 border-forest font-semibold text-forest"
                              : "bg-white border-sand/60 text-charcoal/80 hover:bg-sand/20"
                          }`}
                        >
                          {style}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end pt-3">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-forest text-cream rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-forest-light transition-colors"
                    >
                      <span>Continue</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-5 animate-fade-in">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-forest mb-2">
                        Preferred Location / Region
                      </label>
                      <select
                        value={locationPreference}
                        onChange={(e) => setLocationPreference(e.target.value)}
                        className="w-full p-2.5 text-xs rounded-lg border border-sand bg-white text-charcoal focus:border-forest focus:outline-none"
                      >
                        <option value="Any / Relocating">Any / Relocating</option>
                        <option value="California Coast (Carmel / Big Sur / Monterey)">California Coast (Carmel / Big Sur)</option>
                        <option value="New York City (Tribeca / SoHo / West Village)">New York City (Tribeca / SoHo)</option>
                        <option value="San Francisco & Bay Area">San Francisco & Bay Area</option>
                        <option value="Austin / Texas Design Hubs">Austin / Texas Design Hubs</option>
                        <option value="Miami / Coastal Florida">Miami / Coastal Florida</option>
                        <option value="International / Other">International / Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-forest mb-2">
                        Bedrooms / Space Requirement
                      </label>
                      <select
                        value={bedrooms}
                        onChange={(e) => setBedrooms(e.target.value)}
                        className="w-full p-2.5 text-xs rounded-lg border border-sand bg-white text-charcoal focus:border-forest focus:outline-none"
                      >
                        <option value="1-2 Bedrooms">1 – 2 Bedrooms</option>
                        <option value="3+ Bedrooms">3+ Bedrooms</option>
                        <option value="4+ Bedrooms">4+ Bedrooms</option>
                        <option value="Commercial Creative Space">Commercial Creative Space</option>
                        <option value="Expansive Private Estate">Expansive Private Estate</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-forest mb-2">
                      Investment or Budget Target
                    </label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full p-2.5 text-xs rounded-lg border border-sand bg-white text-charcoal focus:border-forest focus:outline-none"
                    >
                      <option value="Under $2,000,000 (Purchase)">Under $2,000,000 (Purchase)</option>
                      <option value="$2,000,000 – $5,000,000 (Purchase)">$2,000,000 – $5,000,000 (Purchase)</option>
                      <option value="$5,000,000+ (Purchase)">$5,000,000+ (Purchase)</option>
                      <option value="$8,000 – $15,000 / month (Rental)">$8,000 – $15,000 / month (Rental)</option>
                      <option value="$15,000+ / month (Rental)">$15,000+ / month (Rental)</option>
                      <option value="Flexible / Advisory Consultation">Flexible / Advisory Consultation</option>
                    </select>
                  </div>

                  <div className="flex justify-between items-center pt-3">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-xs text-charcoal-muted hover:text-forest"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-forest text-cream rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-forest-light transition-colors"
                    >
                      <span>Final Step</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4 animate-fade-in">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-forest mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Clara Davenport"
                        className="w-full p-2.5 text-xs rounded-lg border border-sand bg-white text-charcoal focus:border-forest focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-forest mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="clara@example.com"
                        className="w-full p-2.5 text-xs rounded-lg border border-sand bg-white text-charcoal focus:border-forest focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-forest mb-1">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (555) 000-0000"
                      className="w-full p-2.5 text-xs rounded-lg border border-sand bg-white text-charcoal focus:border-forest focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-forest mb-1">
                      What matters most in your next place?
                    </label>
                    <textarea
                      rows={3}
                      value={personalNote}
                      onChange={(e) => setPersonalNote(e.target.value)}
                      placeholder="e.g. Abundant natural light, quiet acoustic privacy, room for a pottery studio or private library..."
                      className="w-full p-2.5 text-xs rounded-lg border border-sand bg-white text-charcoal focus:border-forest focus:outline-none"
                    />
                  </div>

                  <div className="flex justify-between items-center pt-3 border-t border-sand">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="text-xs text-charcoal-muted hover:text-forest"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-8 py-3 bg-clay hover:bg-clay-light text-cream rounded-full text-xs font-semibold uppercase tracking-wider transition-all shadow-md"
                    >
                      <span>Send to me-casa Advisory</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

