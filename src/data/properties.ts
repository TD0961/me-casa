import { Property } from "@/types";

export const sampleProperties: Property[] = [
  {
    id: "casa-solaria",
    slug: "casa-solaria",
    title: "Casa Solaria & The Olive Grove",
    tagline: "A rammed-earth sanctuary bathed in golden natural light",
    description:
      "Framed by ancient olive trees and panoramic hillside vistas, Casa Solaria is an architectural masterpiece crafted from monolithic rammed earth, brushed limestone, and expansive glass volumes.",
    editorialStory:
      "When designing Casa Solaria, the architectural vision was singular: to blur the distinction between internal sanctuary and Mediterranean landscape. Morning light filters through cedar brise-soleils, casting geometric warmth across hand-troweled plaster walls. It is a home conceived not for display, but for deep, restorative living.",
    location: {
      neighborhood: "Carmel Valley",
      city: "Monterey",
      state: "CA",
      country: "United States",
      lat: 36.4799,
      lng: -121.7327,
    },
    price: 4850000,
    type: "buy",
    category: "Architectural Villa",
    bedrooms: 4,
    bathrooms: 4.5,
    sqft: 5200,
    yearBuilt: 2023,
    status: "Available",
    isFeatured: true,
    architecturalStyle: "Earth & Light Organic Modernism",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
        alt: "Casa Solaria front exterior with reflecting pool and warm light",
        isCover: true,
      },
      {
        url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1400&auto=format&fit=crop",
        alt: "Open-concept living room with floor-to-ceiling glass and limestone fireplace",
      },
      {
        url: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1400&auto=format&fit=crop",
        alt: "Minimalist chef's kitchen with fluted white oak and marble island",
      },
      {
        url: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=1400&auto=format&fit=crop",
        alt: "Primary bedroom suite overlooking rolling hills",
      },
    ],
    videoPoster:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    features: [
      "Monolithic rammed earth thermal mass construction",
      "50-foot infinity reflection pool with saltwater heating",
      "Integrated smart climate and automated shading systems",
      "Private 2-acre mature olive grove with drip irrigation",
      "Subterranean 800-bottle temperature-controlled wine cellar",
      "Detached 650 sqft creative guest studio",
    ],
    amenities: [
      "Solar array with dual battery backup",
      "Radiant heated limestone flooring",
      "Custom Vola plumbing fixtures",
      "Outdoor kitchen and fire hearth",
      "Three-car enclosed garage with EV fast charging",
    ],
    agent: {
      name: "Julian Rivera",
      role: "Architectural Specialist & Partner",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
      email: "julian@me-casa.com",
      phone: "+1 (888) 632-2721",
    },
  },
  {
    id: "the-atelier-residence",
    slug: "the-atelier-residence",
    title: "The Atelier Loft at Tribeca North",
    tagline: "Industrial grace meeting refined Japanese joinery",
    description:
      "A soaring 3,400-square-foot loft featuring 14-foot beamed timber ceilings, blackened steel ribbon windows, and custom Hinoki cypress cabinetry.",
    editorialStory:
      "Occupying the full third floor of a historic 1904 textile warehouse, The Atelier is a study in texture and quiet luxury. Preserved cast-iron pillars stand alongside monolithic Belgian bluestone counters, creating an atmosphere that feels simultaneously historic and boldly contemporary.",
    location: {
      neighborhood: "Tribeca",
      city: "New York",
      state: "NY",
      country: "United States",
      lat: 40.7163,
      lng: -74.0086,
    },
    price: 18500,
    period: "month",
    type: "rent",
    category: "Urban Loft",
    bedrooms: 3,
    bathrooms: 3,
    sqft: 3400,
    yearBuilt: 2022,
    status: "Available",
    isFeatured: true,
    architecturalStyle: "Warm Industrial Loft & Minimalist Millwork",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop",
        alt: "Great room with high ceilings, large windows and curated art",
        isCover: true,
      },
      {
        url: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1400&auto=format&fit=crop",
        alt: "Dining salon with sculptural lighting and bespoke timber table",
      },
      {
        url: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1400&auto=format&fit=crop",
        alt: "Minimalist bathroom with freestanding stone soaking tub",
      },
    ],
    features: [
      "Key-locked private elevator opening directly into residence",
      "14-foot original heavy timber ceilings with exposed ducting",
      "Custom Japanese Hinoki soaking tub and rain shower",
      "Gaggenau 400 series induction and convection suite",
      "Dedicated acoustic-isolated sound studio / library",
    ],
    amenities: [
      "24-hour virtual doorman & secure parcel room",
      "Resident wine tasting lounge in building cellar",
      "High-speed fiber connectivity",
      "Private storage room included",
    ],
    agent: {
      name: "Elena Vance",
      role: "Urban Residences Director",
      avatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
      email: "elena@me-casa.com",
      phone: "+1 (888) 632-2721",
    },
  },
  {
    id: "pavilion-on-the-ridge",
    slug: "pavilion-on-the-ridge",
    title: "Pavilion on the Ridge",
    tagline: "Glass cantilevered architecture overlooking coastal pines",
    description:
      "Engineered to float weightlessly above the Pacific coastline, this modern pavilion balances dramatic architectural cantilevers with organic cedar and textured concrete.",
    editorialStory:
      "Designed as a sequence of open pavilions linked by glazed breezeways, the residence responds dynamically to the changing coastal fog and afternoon golden hours. Sliding pocket walls disappear completely, transforming the living spaces into open-air verandas.",
    location: {
      neighborhood: "Big Sur",
      city: "Monterey",
      state: "CA",
      country: "United States",
      lat: 36.2704,
      lng: -121.8081,
    },
    price: 7200000,
    type: "buy",
    category: "Coastal Pavilion",
    bedrooms: 5,
    bathrooms: 5.5,
    sqft: 6100,
    yearBuilt: 2024,
    status: "Exclusive",
    isFeatured: true,
    architecturalStyle: "Cantilevered Coastal Modernism",
    images: [
      {
        url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1600&auto=format&fit=crop",
        alt: "Dramatic modern house exterior overlooking ocean cliff",
        isCover: true,
      },
      {
        url: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=1400&auto=format&fit=crop",
        alt: "Expansive terrace with fire table and sunset view",
      },
      {
        url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1400&auto=format&fit=crop",
        alt: "Kitchen with blackened steel accents and panoramic views",
      },
    ],
    features: [
      "32-foot structural steel cantilever floating above canyon",
      "Seamless motorized Fleetwood pocket glass walls",
      "Geothermal heating and passive cross-ventilation system",
      "Infinity edge lap pool reflecting horizon ocean views",
      "Private trail access to coastal cliffs",
    ],
    amenities: [
      "Backup microgrid solar and Tesla Powerwalls",
      "Outdoor cedar sauna with cold plunge",
      "Dedicated wine tasting room and sommelier prep area",
      "Smart security with biometric entry",
    ],
    agent: {
      name: "Julian Rivera",
      role: "Architectural Specialist & Partner",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
      email: "julian@me-casa.com",
      phone: "+1 (888) 632-2721",
    },
  },
  {
    id: "the-meridian-creative-studios",
    slug: "the-meridian-creative-studios",
    title: "The Meridian Creative Compound",
    tagline: "Inspiring multi-disciplinary workspace with private garden courtyard",
    description:
      "A light-filled boutique commercial sanctuary designed for creative agencies, architectural practices, or family offices seeking an exceptional collaborative environment.",
    editorialStory:
      "Created to redefine the workplace experience, The Meridian unites private acoustic studios with a sun-drenched central courtyard and communal café pavilion. Natural timber trusses and acoustic felt baffles create an environment of quiet focus and effortless connection.",
    location: {
      neighborhood: "Design District",
      city: "Austin",
      state: "TX",
      country: "United States",
      lat: 30.2672,
      lng: -97.7431,
    },
    price: 32000,
    period: "month",
    type: "commercial",
    category: "Commercial Space",
    bedrooms: 0,
    bathrooms: 4,
    sqft: 8500,
    yearBuilt: 2021,
    status: "Available",
    isFeatured: true,
    architecturalStyle: "Biophilic Timber & Glass Commercial Hub",
    images: [
      {
        url: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
        alt: "Modern light-filled open creative office space with plants",
        isCover: true,
      },
      {
        url: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1400&auto=format&fit=crop",
        alt: "Conference room with wood table and floor to ceiling glass",
      },
      {
        url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1400&auto=format&fit=crop",
        alt: "Private courtyard lounge with seating and trees",
      },
    ],
    features: [
      "LEED Platinum certified biophilic workplace architecture",
      "Private landscaped central courtyard with outdoor meeting pergolas",
      "Dedicated podcast/broadcast recording studio with acoustic isolation",
      "Commercial-grade espresso bar and communal kitchen lounge",
      "Secure keyless NFC access for up to 60 team members",
    ],
    amenities: [
      "10 Gbps enterprise redundant fiber",
      "22 reserved parking spaces with Level 2 EV chargers",
      "Showers and secure bike locker room",
      "Daily janitorial and plant care included in me-casa management",
    ],
    agent: {
      name: "Marcus Thorne",
      role: "Commercial Real Estate & Advisory",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
      email: "marcus@me-casa.com",
      phone: "+1 (888) 632-2721",
    },
  },
  {
    id: "belgrave-terrace-townhouse",
    slug: "belgrave-terrace-townhouse",
    title: "Belgrave Terrace Heritage Residence",
    tagline: "Restored neoclassical architecture with contemporary lightwell",
    description:
      "A grand five-story brownstone meticulously re-envisioned with a sculptural spiral staircase and dramatic four-story glass atrium.",
    editorialStory:
      "Respecting the historical proportions of the 1890 facade, the interior was hollowed and reconstructed around a cascading central atrium. Light now pours through all five levels, illuminating herringbone French oak parquetry and hand-carved marble mantelpieces.",
    location: {
      neighborhood: "Pacific Heights",
      city: "San Francisco",
      state: "CA",
      country: "United States",
      lat: 37.7925,
      lng: -122.4382,
    },
    price: 6400000,
    type: "buy",
    category: "Historic Townhouse",
    bedrooms: 5,
    bathrooms: 6,
    sqft: 5800,
    yearBuilt: 2023,
    status: "Available",
    isFeatured: false,
    architecturalStyle: "Restored Neoclassical & Modern Atrium",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?q=80&w=1600&auto=format&fit=crop",
        alt: "Front facade of historic luxury residence",
        isCover: true,
      },
      {
        url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1400&auto=format&fit=crop",
        alt: "Sculptural central staircase and skylight",
      },
    ],
    features: [
      "Four-story vertical glass lightwell illuminating interior core",
      "Bespoke Italian kitchen by Boffi with Calacatta marble",
      "Private rooftop garden terrace with views of the bay",
      "Integrated elevator servicing all five residential levels",
      "Radiant floor heating beneath chevron French oak floors",
    ],
    amenities: [
      "Temperature-controlled wine cellar and tasting nook",
      "Garden-level self-contained guest or staff suite",
      "Attached two-car tandem heated garage",
    ],
    agent: {
      name: "Elena Vance",
      role: "Urban Residences Director",
      avatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
      email: "elena@me-casa.com",
      phone: "+1 (888) 632-2721",
    },
  },
  {
    id: "casa-lumina-penthouse",
    slug: "casa-lumina-penthouse",
    title: "Casa Lumina Sky Villa",
    tagline: "Panoramic skyline views and cantilevered infinity pool",
    description:
      "A crown penthouse spanning the entire 42nd floor with 360-degree skyline views, 4,800 sqft of living space, and 1,800 sqft of private wraparound sky terrace.",
    editorialStory:
      "Casa Lumina represents the pinnacle of vertical living. Crafted with acoustic floor-to-ceiling glass, bookmatched travertine, and custom bronze accents, it offers a serene, elevated retreat suspended between the city lights and the sky.",
    location: {
      neighborhood: "Downtown",
      city: "Miami",
      state: "FL",
      country: "United States",
      lat: 25.7617,
      lng: -80.1918,
    },
    price: 24000,
    period: "month",
    type: "rent",
    category: "Penthouse",
    bedrooms: 4,
    bathrooms: 4.5,
    sqft: 4800,
    yearBuilt: 2024,
    status: "Exclusive",
    isFeatured: false,
    architecturalStyle: "High-Altitude Minimalist Villa",
    images: [
      {
        url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
        alt: "Luxury penthouse with terrace and water view",
        isCover: true,
      },
      {
        url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1400&auto=format&fit=crop",
        alt: "Expansive modern living room with skyline panorama",
      },
    ],
    features: [
      "1,800 sqft private wraparound travertine sky terrace",
      "Private sky pool cantilevered over city views",
      "Private direct-entry express elevators",
      "Primary wing with dual dressing suites and steam showers",
    ],
    amenities: [
      "Full building valet and 24/7 white-glove concierge",
      "Helipad access and private yacht slip coordination",
      "Private climate-controlled 4-car garage bay",
    ],
    agent: {
      name: "Marcus Thorne",
      role: "Commercial Real Estate & Advisory",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
      email: "marcus@me-casa.com",
      phone: "+1 (888) 632-2721",
    },
  },
];

