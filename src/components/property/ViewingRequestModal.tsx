"use client";

import React, { useState } from "react";
import { X, Calendar, Clock, CheckCircle2, Compass } from "lucide-react";
import { Property } from "@/types";

interface ViewingRequestModalProps {
  property: Property;
  isOpen: boolean;
  onClose: () => void;
}

export function ViewingRequestModal({
  property,
  isOpen,
  onClose,
}: ViewingRequestModalProps) {
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("Morning (10:00 AM - 12:00 PM)");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-forest-dark/80 backdrop-blur-md flex items-center justify-center p-4 transition-opacity"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-cream rounded-3xl p-6 sm:p-8 border border-sand/70 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-charcoal-muted hover:text-forest hover:bg-sand/30 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-forest text-cream mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-clay-light" />
            </div>
            <h3 className="font-serif text-2xl text-forest font-medium">
              Viewing Request Confirmed
            </h3>
            <p className="text-xs sm:text-sm text-charcoal/80 max-w-sm mx-auto font-light leading-relaxed">
              Thank you, {fullName}. Our advisory team has scheduled your preliminary request for{" "}
              <strong className="text-forest">{preferredDate || "your chosen date"}</strong> during{" "}
              {preferredTime}. {property.agent.name} will reach out to confirm private access.
            </p>
            <div className="pt-4">
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-forest text-cream rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-forest-light"
              >
                Return to Residence
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-widest font-semibold text-clay block">
                Private Appointment
              </span>
              <h3 className="font-serif text-2xl text-forest font-medium">
                Experience {property.title}
              </h3>
              <p className="text-xs text-charcoal/70 font-light">
                Private viewings are curated to appreciate natural sunlight, acoustics, and
                architectural materiality.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-forest mb-1 flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-clay" />
                  <span>Preferred Date</span>
                </label>
                <input
                  type="date"
                  required
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full p-2.5 bg-white border border-sand rounded-xl text-xs text-charcoal focus:outline-none focus:border-forest"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-forest mb-1 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-clay" />
                  <span>Preferred Time</span>
                </label>
                <select
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  className="w-full p-2.5 bg-white border border-sand rounded-xl text-xs text-charcoal focus:outline-none focus:border-forest"
                >
                  <option value="Morning (10:00 AM - 12:00 PM)">Morning Golden Hour (10:00 AM)</option>
                  <option value="Midday (12:00 PM - 2:00 PM)">Midday Natural Light (1:00 PM)</option>
                  <option value="Afternoon (3:00 PM - 5:00 PM)">Late Afternoon (4:00 PM)</option>
                  <option value="Twilight (5:30 PM - 7:00 PM)">Twilight Sunset Viewing</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-forest mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Samuel Laurent"
                  className="w-full p-2.5 bg-white border border-sand rounded-xl text-xs text-charcoal focus:outline-none focus:border-forest"
                />
              </div>
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-forest mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="samuel@example.com"
                  className="w-full p-2.5 bg-white border border-sand rounded-xl text-xs text-charcoal focus:outline-none focus:border-forest"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-forest mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+1 (555) 000-0000"
                className="w-full p-2.5 bg-white border border-sand rounded-xl text-xs text-charcoal focus:outline-none focus:border-forest"
              />
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-forest mb-1">
                Special Requests or Questions
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Any specific architectural details you wish to inspect..."
                className="w-full p-2.5 bg-white border border-sand rounded-xl text-xs text-charcoal focus:outline-none focus:border-forest"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 bg-forest hover:bg-forest-light text-cream rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2"
              >
                <Compass className="w-4 h-4 text-clay-light" />
                <span>Confirm Viewing Appointment</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

