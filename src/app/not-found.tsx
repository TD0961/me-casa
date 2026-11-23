import React from "react";
import Link from "next/link";
import { Compass, Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen pt-40 pb-24 bg-cream flex items-center justify-center px-6">
      <div className="max-w-xl mx-auto text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-forest text-cream mx-auto flex items-center justify-center">
          <Compass className="w-8 h-8 text-clay-light" />
        </div>

        <div className="space-y-2">
          <span className="text-xs uppercase tracking-widest text-clay font-semibold">
            404 — Page Not Found
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-forest font-light">
            Every journey has a detour.
          </h1>
          <p className="text-sm text-charcoal/80 font-light leading-relaxed max-w-md mx-auto">
            The architectural residence or page you were seeking might have changed location or is
            no longer available in our active catalog.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-forest hover:bg-forest-light text-cream rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shadow-md"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-forest text-forest hover:bg-forest hover:text-cream rounded-full text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            <Search className="w-3.5 h-3.5" />
            <span>Explore Properties</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
