"use client";

import React, { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

export function ContactForm() {
  const [topic, setTopic] = useState("Hi me-casa, find me my place, my home!");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
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
            Message Received with Care
          </h3>
          <p className="text-sm text-charcoal/80 max-w-md mx-auto font-light leading-relaxed">
            Thank you, {fullName}. Our concierge and advisory team have received your note regarding{" "}
            <span className="italic font-medium text-forest">&ldquo;{topic}&rdquo;</span>. We will
            respond directly to <strong className="text-forest">{email}</strong>.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 sm:p-12 rounded-3xl bg-white border border-sand/70 shadow-xl space-y-6">
      <div className="space-y-1">
        <span className="text-xs uppercase tracking-widest text-clay font-semibold block">
          Send a Message
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl text-forest font-medium">
          Start your conversation
        </h2>
        <p className="text-xs sm:text-sm text-charcoal/70 font-light">
          We answer every personal inquiry with thoughtful discretion.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 pt-2">
        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-forest mb-1">
            Subject / Purpose
          </label>
          <select
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="w-full p-3 bg-cream/50 border border-sand rounded-xl text-xs text-charcoal focus:outline-none focus:border-forest"
          >
            <option value="Hi me-casa, find me my place, my home!">
              &ldquo;Hi me-casa, find me my place, my home!&rdquo;
            </option>
            <option value="Listing a Property (Sale or Rental)">
              Listing a Property (Sale or Rental)
            </option>
            <option value="Property Management Inquiry">
              Property Management & Maintenance Inquiry
            </option>
            <option value="Commercial Space or Creative Compound">
              Commercial Space or Creative Compound
            </option>
            <option value="Private Acquisition Advisory">Private Acquisition Advisory</option>
            <option value="General Conversation">General Conversation</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-forest mb-1">
              Your Name *
            </label>
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="e.g. Julian Wright"
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
              placeholder="julian@example.com"
              className="w-full p-3 bg-cream/50 border border-sand rounded-xl text-xs text-charcoal focus:outline-none focus:border-forest"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-forest mb-1">
            Phone Number (Optional)
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+1 (555) 000-0000"
            className="w-full p-3 bg-cream/50 border border-sand rounded-xl text-xs text-charcoal focus:outline-none focus:border-forest"
          />
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-forest mb-1">
            How Can We Support Your Journey? *
          </label>
          <textarea
            rows={4}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us what you are looking for, desired locations, architectural preferences, or your property timeline..."
            className="w-full p-3 bg-cream/50 border border-sand rounded-xl text-xs text-charcoal focus:outline-none focus:border-forest"
          />
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="w-full py-4 bg-forest hover:bg-forest-light text-cream rounded-full text-xs font-semibold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
          >
            <Send className="w-3.5 h-3.5 text-clay-light" />
            <span>Send Message to me-casa Concierge</span>
          </button>
        </div>
      </form>
    </div>
  );
}
