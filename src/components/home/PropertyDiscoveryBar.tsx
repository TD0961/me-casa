"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, MapPin, Home, DollarSign, SlidersHorizontal } from "lucide-react";
import { ListingType } from "@/types";

export function PropertyDiscoveryBar() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<ListingType>("buy");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [budget, setBudget] = useState("");
  const [bedrooms, setBedrooms] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (activeTab) params.set("type", activeTab);
    if (location) params.set("location", location);
    if (category) params.set("category", category);
    if (budget) params.set("budget", budget);
    if (bedrooms) params.set("bedrooms", bedrooms);

    router.push(`/properties?${params.toString()}`);
  };

  return (
    <div className="relative -mt-10 lg:-mt-14 z-30 max-w-6xl mx-auto px-6 md:px-10">
      <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(38,63,53,0.12)] border border-sand/70 p-4 sm:p-6 md:p-8">
        {/* Header Kicker */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-sand/40 gap-4">
          <div>
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-clay">
              Property Discovery
            </span>
            <h3 className="font-serif text-xl sm:text-2xl text-forest font-medium">
              Somewhere out there, there&apos;s a place for you.
            </h3>
          </div>

          {/* Buy / Rent / Commercial Tabs */}
          <div className="inline-flex p-1 bg-cream rounded-full border border-sand">
            {(
              [
                { id: "buy", label: "Buy" },
                { id: "rent", label: "Rent" },
                { id: "commercial", label: "Commercial" },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 text-xs font-semibold rounded-full transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-forest text-cream shadow-sm"
                    : "text-charcoal/70 hover:text-forest"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Search Inputs Form */}
        <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-6 items-end">
          {/* Location */}
          <div className="space-y-1.5">
            <label className="text-[11px] uppercase tracking-wider font-semibold text-forest flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-clay" />
              <span>Location</span>
            </label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full py-2.5 px-3.5 bg-cream/60 border border-sand/80 rounded-xl text-xs text-charcoal font-medium focus:outline-none focus:border-forest"
            >
              <option value="">All Locations</option>
              <option value="Carmel Valley">Carmel Valley & Monterey</option>
              <option value="Tribeca">Tribeca, New York</option>
              <option value="Big Sur">Big Sur Coastline</option>
              <option value="Pacific Heights">Pacific Heights, San Francisco</option>
              <option value="Austin">Design District, Austin</option>
              <option value="Miami">Downtown Miami</option>
            </select>
          </div>

          {/* Property Category */}
          <div className="space-y-1.5">
            <label className="text-[11px] uppercase tracking-wider font-semibold text-forest flex items-center gap-1.5">
              <Home className="w-3 h-3 text-clay" />
              <span>Property Type</span>
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full py-2.5 px-3.5 bg-cream/60 border border-sand/80 rounded-xl text-xs text-charcoal font-medium focus:outline-none focus:border-forest"
            >
              <option value="">All Architectures</option>
              <option value="Architectural Villa">Architectural Villa</option>
              <option value="Urban Loft">Urban Loft</option>
              <option value="Coastal Pavilion">Coastal Pavilion</option>
              <option value="Historic Townhouse">Historic Townhouse</option>
              <option value="Penthouse">Sky Penthouse</option>
              <option value="Commercial Space">Creative Workspace</option>
            </select>
          </div>

          {/* Budget Range */}
          <div className="space-y-1.5">
            <label className="text-[11px] uppercase tracking-wider font-semibold text-forest flex items-center gap-1.5">
              <DollarSign className="w-3 h-3 text-clay" />
              <span>Budget Range</span>
            </label>
            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full py-2.5 px-3.5 bg-cream/60 border border-sand/80 rounded-xl text-xs text-charcoal font-medium focus:outline-none focus:border-forest"
            >
              <option value="">Any Budget</option>
              {activeTab === "rent" ? (
                <>
                  <option value="10000">Up to $10,000 / mo</option>
                  <option value="20000">Up to $20,000 / mo</option>
                  <option value="30000">$20,000+ / mo</option>
                </>
              ) : (
                <>
                  <option value="3000000">Up to $3,000,000</option>
                  <option value="5000000">Up to $5,000,000</option>
                  <option value="7500000">Up to $7,500,000</option>
                  <option value="10000000">$7,500,000+</option>
                </>
              )}
            </select>
          </div>

          {/* Bedrooms */}
          <div className="space-y-1.5">
            <label className="text-[11px] uppercase tracking-wider font-semibold text-forest flex items-center gap-1.5">
              <SlidersHorizontal className="w-3 h-3 text-clay" />
              <span>Bedrooms</span>
            </label>
            <select
              value={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}
              className="w-full py-2.5 px-3.5 bg-cream/60 border border-sand/80 rounded-xl text-xs text-charcoal font-medium focus:outline-none focus:border-forest"
            >
              <option value="">Any Size</option>
              <option value="2">2+ Bedrooms</option>
              <option value="3">3+ Bedrooms</option>
              <option value="4">4+ Bedrooms</option>
              <option value="5">5+ Bedrooms</option>
            </select>
          </div>

          {/* Submit Search Button */}
          <div>
            <button
              type="submit"
              className="w-full py-2.5 px-5 bg-forest hover:bg-forest-light text-cream rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Search Places</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
