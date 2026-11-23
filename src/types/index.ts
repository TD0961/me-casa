export type ListingType = "buy" | "rent" | "commercial";

export type PropertyCategory =
  | "Architectural Villa"
  | "Modernist Residence"
  | "Penthouse"
  | "Historic Townhouse"
  | "Urban Loft"
  | "Creative Studio"
  | "Commercial Space"
  | "Coastal Pavilion";

export interface PropertyImage {
  url: string;
  alt: string;
  caption?: string;
  isCover?: boolean;
}

export interface PropertyAgent {
  name: string;
  role: string;
  avatar: string;
  email: string;
  phone: string;
}

export interface Property {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  editorialStory: string;
  location: {
    neighborhood: string;
    city: string;
    state?: string;
    country: string;
    lat: number;
    lng: number;
  };
  price: number;
  priceFormatted?: string;
  period?: "month" | "year";
  type: ListingType;
  category: PropertyCategory;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  yearBuilt: number;
  status: "Available" | "Under Offer" | "Exclusive" | "Managed";
  isFeatured: boolean;
  images: PropertyImage[];
  videoPoster?: string;
  features: string[];
  amenities: string[];
  architecturalStyle: string;
  agent: PropertyAgent;
}

export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  detailedDescription: string[];
  deliverables: string[];
  image: string;
  ctaText: string;
}

export interface NavItem {
  title: string;
  href: string;
  description?: string;
}

