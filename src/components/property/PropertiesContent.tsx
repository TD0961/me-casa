"use client";

import React, { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Search, SlidersHorizontal, LayoutGrid, Map, RotateCcw, X, Compass } from "lucide-react";
import { sampleProperties } from "@/data/properties";
import { PropertyCard } from "@/components/property/PropertyCard";
import { PropertyMapView } from "@/components/property/PropertyMapView";
import { ListingType } from "@/types";

export function PropertiesContent() {
  const searchParams = useSearchParams();

  // URL Initial State
  const initialType = (searchParams.get("type") as ListingType) || "";
  const initialLocation = searchParams.get("location") || "";
  const initialCategory = searchParams.get("category") || "";
  const initialBudget = searchParams.get("budget") || "";
  const initialBedrooms = searchParams.get("bedrooms") || "";

  // Filter states
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string>(initialType);
  const [selectedLocation, setSelectedLocation] = useState<string>(initialLocation);
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedBudget, setSelectedBudget] = useState<string>(initialBudget);
  const [selectedBedrooms, setSelectedBedrooms] = useState<string>(initialBedrooms);
  const [sortBy, setSortBy] = useState<string>("featured");
  const [viewMode, setViewMode] = useState<"grid" | "map">("grid");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Filter logic
  const filteredProperties = useMemo(() => {
    return sampleProperties
      .filter((prop) => {
        // Query search
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchTitle = prop.title.toLowerCase().includes(q);
          const matchCity = prop.location.city.toLowerCase().includes(q);
          const matchNeighborhood = prop.location.neighborhood.toLowerCase().includes(q);
          const matchCategory = prop.category.toLowerCase().includes(q);
          if (!matchTitle && !matchCity && !matchNeighborhood && !matchCategory) return false;
        }

        // Type
        if (selectedType && prop.type !== selectedType) return false;

        // Location
        if (
          selectedLocation &&
          !prop.location.neighborhood.toLowerCase().includes(selectedLocation.toLowerCase()) &&
          !prop.location.city.toLowerCase().includes(selectedLocation.toLowerCase())
        ) {
          return false;
        }

        // Category
        if (selectedCategory && prop.category !== selectedCategory) return false;

        // Bedrooms
        if (selectedBedrooms) {
          const bedsNum = parseInt(selectedBedrooms, 10);
          if (prop.bedrooms < bedsNum) return false;
        }

        // Budget
        if (selectedBudget) {
          const budgetNum = parseInt(selectedBudget, 10);
          if (prop.price > budgetNum) return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === "price-asc") return a.price - b.price;
        if (sortBy === "price-desc") return b.price - a.price;
        if (sortBy === "size-desc") return b.sqft - a.sqft;
        return a.isFeatured ? -1 : 1;
      });
  }, [
    searchQuery,
    selectedType,
    selectedLocation,
    selectedCategory,
    selectedBudget,
    selectedBedrooms,
    sortBy,
  ]);

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedType("");
    setSelectedLocation("");
    setSelectedCategory("");
    setSelectedBudget("");
    setSelectedBedrooms("");
    setSortBy("featured");
  };

  const openMatchmaker = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-matchmaker-modal"));
    }
  };

  return (
    <div className="pt-32 pb-24 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Page Header */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest/10 text-forest text-xs font-semibold uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5 text-clay" />
            <span>Architectural Portfolio</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-forest font-light leading-tight">
            Curated residences.{" "}
            <span className="italic font-normal text-clay-dark">Singular spaces.</span>
          </h1>
          <p className="text-charcoal/80 text-base md:text-lg font-light leading-relaxed">
            Explore our collection of architectural residences, urban lofts, and creative compounds.
            Each property is chosen for light, proportions, and the feeling of home.
          </p>
        </div>

        {/* Filter Controls Surface */}
        <div className="bg-white rounded-3xl p-6 md:p-8 border border-sand/70 shadow-sm space-y-6 mb-12">
          {/* Top Row: Search input + View mode toggle + Mobile filter button */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            <div className="relative flex-grow max-w-xl">
              <Search className="w-4 h-4 text-charcoal-muted absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by neighborhood, city, or architectural style..."
                className="w-full pl-11 pr-4 py-3 bg-cream/50 border border-sand rounded-2xl text-xs sm:text-sm text-charcoal focus:outline-none focus:border-forest"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-charcoal-muted hover:text-forest"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-3 justify-between md:justify-end">
              {/* Grid vs Map Toggle */}
              <div className="inline-flex p-1 bg-cream rounded-full border border-sand">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    viewMode === "grid"
                      ? "bg-forest text-cream shadow-sm"
                      : "text-charcoal/70 hover:text-forest"
                  }`}
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span>Grid</span>
                </button>
                <button
                  onClick={() => setViewMode("map")}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    viewMode === "map"
                      ? "bg-forest text-cream shadow-sm"
                      : "text-charcoal/70 hover:text-forest"
                  }`}
                >
                  <Map className="w-3.5 h-3.5" />
                  <span>Map</span>
                </button>
              </div>

              {/* Mobile Filter Drawer Button */}
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="md:hidden flex items-center gap-2 px-4 py-2 bg-sand/40 border border-sand rounded-full text-xs font-medium text-forest"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Filters</span>
              </button>
            </div>
          </div>

          {/* Desktop Filter Selectors */}
          <div className="hidden md:grid grid-cols-5 gap-3 pt-4 border-t border-sand/40">
            {/* Type */}
            <div>
              <label className="block text-[10px] uppercase tracking-wider font-semibold text-forest mb-1">
                Type
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full p-2 bg-cream/40 border border-sand rounded-xl text-xs text-charcoal focus:outline-none focus:border-forest"
              >
                <option value="">All (Buy, Rent, Commercial)</option>
                <option value="buy">For Sale</option>
                <option value="rent">Curated Rentals</option>
                <option value="commercial">Commercial & Studios</option>
              </select>
            </div>

            {/* Location */}
            <div>
              <label className="block text-[10px] uppercase tracking-wider font-semibold text-forest mb-1">
                Location
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full p-2 bg-cream/40 border border-sand rounded-xl text-xs text-charcoal focus:outline-none focus:border-forest"
              >
                <option value="">All Locations</option>
                <option value="Carmel">Carmel Valley & Monterey</option>
                <option value="Tribeca">Tribeca, New York</option>
                <option value="Big Sur">Big Sur Coastline</option>
                <option value="Pacific Heights">Pacific Heights, SF</option>
                <option value="Austin">Austin Design District</option>
                <option value="Miami">Downtown Miami</option>
              </select>
            </div>

            {/* Category */}
            <div>
              <label className="block text-[10px] uppercase tracking-wider font-semibold text-forest mb-1">
                Architecture
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-2 bg-cream/40 border border-sand rounded-xl text-xs text-charcoal focus:outline-none focus:border-forest"
              >
                <option value="">All Categories</option>
                <option value="Architectural Villa">Architectural Villa</option>
                <option value="Urban Loft">Urban Loft</option>
                <option value="Coastal Pavilion">Coastal Pavilion</option>
                <option value="Historic Townhouse">Historic Townhouse</option>
                <option value="Penthouse">Sky Penthouse</option>
                <option value="Commercial Space">Creative Workspace</option>
              </select>
            </div>

            {/* Bedrooms */}
            <div>
              <label className="block text-[10px] uppercase tracking-wider font-semibold text-forest mb-1">
                Bedrooms
              </label>
              <select
                value={selectedBedrooms}
                onChange={(e) => setSelectedBedrooms(e.target.value)}
                className="w-full p-2 bg-cream/40 border border-sand rounded-xl text-xs text-charcoal focus:outline-none focus:border-forest"
              >
                <option value="">Any Bedrooms</option>
                <option value="2">2+ Bedrooms</option>
                <option value="3">3+ Bedrooms</option>
                <option value="4">4+ Bedrooms</option>
                <option value="5">5+ Bedrooms</option>
              </select>
            </div>

            {/* Sort */}
            <div>
              <label className="block text-[10px] uppercase tracking-wider font-semibold text-forest mb-1">
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full p-2 bg-cream/40 border border-sand rounded-xl text-xs text-charcoal focus:outline-none focus:border-forest"
              >
                <option value="featured">Featured Curations</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="size-desc">Largest Space</option>
              </select>
            </div>
          </div>

          {/* Active Filter Pills & Reset */}
          {(selectedType || selectedLocation || selectedCategory || selectedBedrooms || searchQuery) && (
            <div className="flex items-center gap-2 flex-wrap pt-2 text-xs">
              <span className="text-charcoal-muted">Active:</span>
              {selectedType && (
                <span className="px-3 py-1 rounded-full bg-sand/60 text-forest font-medium flex items-center gap-1.5">
                  Type: {selectedType}
                  <button onClick={() => setSelectedType("")}><X className="w-3 h-3" /></button>
                </span>
              )}
              {selectedLocation && (
                <span className="px-3 py-1 rounded-full bg-sand/60 text-forest font-medium flex items-center gap-1.5">
                  Location: {selectedLocation}
                  <button onClick={() => setSelectedLocation("")}><X className="w-3 h-3" /></button>
                </span>
              )}
              {selectedCategory && (
                <span className="px-3 py-1 rounded-full bg-sand/60 text-forest font-medium flex items-center gap-1.5">
                  Style: {selectedCategory}
                  <button onClick={() => setSelectedCategory("")}><X className="w-3 h-3" /></button>
                </span>
              )}
              <button
                onClick={resetFilters}
                className="text-clay hover:text-clay-dark font-medium underline ml-2 flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset all</span>
              </button>
            </div>
          )}
        </div>

        {/* View Content: Grid or Map */}
        {viewMode === "map" ? (
          <PropertyMapView properties={filteredProperties} />
        ) : filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((prop, idx) => (
              <PropertyCard key={prop.id} property={prop} priority={idx < 3} />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="p-16 rounded-3xl bg-white border border-sand text-center max-w-2xl mx-auto space-y-6">
            <div className="w-16 h-16 rounded-full bg-sand-light text-forest mx-auto flex items-center justify-center">
              <Search className="w-8 h-8 text-clay" />
            </div>
            <div className="space-y-2">
              <h3 className="font-serif text-2xl text-forest font-medium">
                No matching residences found
              </h3>
              <p className="text-sm text-charcoal/70 max-w-md mx-auto font-light leading-relaxed">
                We couldn&apos;t find properties matching your current filters. We have off-market
                and confidential architectural listings available upon personal inquiry.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                onClick={resetFilters}
                className="px-6 py-2.5 rounded-full border border-forest text-forest text-xs font-semibold uppercase tracking-wider hover:bg-forest hover:text-cream transition-colors"
              >
                Reset Filters
              </button>
              <button
                onClick={openMatchmaker}
                className="px-6 py-2.5 rounded-full bg-clay text-cream text-xs font-semibold uppercase tracking-wider hover:bg-clay-light transition-colors"
              >
                Request Bespoke Search
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Filter Drawer */}
      {mobileFiltersOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden flex justify-end"
          onClick={() => setMobileFiltersOpen(false)}
        >
          <div
            className="w-full max-w-sm bg-cream h-full p-6 overflow-y-auto flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-6 pt-12">
              <div className="flex items-center justify-between pb-4 border-b border-sand">
                <h3 className="font-serif text-xl text-forest font-medium">Filter Residences</h3>
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="p-2 text-forest/70 hover:text-forest"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Filters */}
              <div className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-forest mb-1">
                    Listing Type
                  </label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full p-3 bg-white border border-sand rounded-xl text-xs text-charcoal"
                  >
                    <option value="">All Types</option>
                    <option value="buy">For Sale</option>
                    <option value="rent">Rentals</option>
                    <option value="commercial">Commercial</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-forest mb-1">
                    Location
                  </label>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full p-3 bg-white border border-sand rounded-xl text-xs text-charcoal"
                  >
                    <option value="">All Locations</option>
                    <option value="Carmel">Carmel Valley & Monterey</option>
                    <option value="Tribeca">Tribeca, New York</option>
                    <option value="Big Sur">Big Sur</option>
                    <option value="Pacific Heights">San Francisco</option>
                    <option value="Austin">Austin</option>
                    <option value="Miami">Miami</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-forest mb-1">
                    Architecture
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full p-3 bg-white border border-sand rounded-xl text-xs text-charcoal"
                  >
                    <option value="">All Categories</option>
                    <option value="Architectural Villa">Architectural Villa</option>
                    <option value="Urban Loft">Urban Loft</option>
                    <option value="Coastal Pavilion">Coastal Pavilion</option>
                    <option value="Historic Townhouse">Historic Townhouse</option>
                    <option value="Penthouse">Penthouse</option>
                    <option value="Commercial Space">Commercial Space</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-sand flex gap-3">
              <button
                onClick={() => {
                  resetFilters();
                  setMobileFiltersOpen(false);
                }}
                className="flex-1 py-3 text-center border border-sand rounded-full text-xs font-semibold text-charcoal"
              >
                Clear
              </button>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="flex-1 py-3 bg-forest text-cream rounded-full text-xs font-semibold uppercase tracking-wider"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

