# me-casa — Cinematic Real Estate & Property Management

> **"Real Estate. Made Personal."**  
> *"People first. Property follows."*  
> **"Finding a place is easy. Finding your place is what matters."**

---

## Brand Positioning & Philosophy

**me-casa** is a people-centred real estate collective that connects discerning clients with architectural properties and provides enduring post-transaction care. We understand people before recommending properties, believing that real estate is a continuous human relationship rather than a one-time transaction.

### Core Practices:
1. **Residential Real Estate** — Architectural homes designed for human flourishing.
2. **Property Rentals** — Curated long-term executive residences.
3. **Property Sales and Acquisition** — Confidential representation and strategic valuation.
4. **Commercial Real Estate** — Creative workspaces, flagships, and studios.
5. **Property Investment** — Data-grounded yield optimization and asset growth.
6. **Property Management** — *"We're here beyond the keys."* Continued attention, tenant administration, and maintenance.
7. **Property Marketing and Representation** — Cinematic cinematography and editorial publications.

---

## Visual Design System

- **Primary Forest Green**: `#263F35` — Brand anchors, key actions, badges.
- **Deep Forest**: `#192D26` — Cinematic dark themes, hero gradients, footers.
- **Warm Cream**: `#F8F6F1` — Primary editorial canvas.
- **Sand**: `#E8DFD0` — Borders, divider accents, subtle containers.
- **Muted Clay**: `#B78D67` — Warm focal accents, primary CTAs.
- **Charcoal**: `#333532` — Readable editorial typography.
- **Headings Typography**: *Cormorant Garamond* / *Playfair Display* editorial serif.
- **Interface & Body Typography**: *Manrope* / *DM Sans* geometric humanist sans.

---

## Architecture & Tech Stack

- **Framework**: Next.js 15 (App Router, Server Components by default)
- **Language**: TypeScript (Strict mode)
- **Styling**: Tailwind CSS
- **Interactive 3D**: Three.js (Procedural Architectural Pavilion, PBR materials, time-of-day dynamic lighting, pointer parallax, zero SSR hydration overhead)
- **Motion & Transitions**: CSS Keyframe animations, interactive canvas lerping, responsive modal sheets
- **Icons**: Lucide React
- **Validation**: Schema-ready form handlers with client feedback and integration boundaries
- **SEO & Metadata**: Dynamic sitemap (`/sitemap.xml`), robots (`/robots.txt`), OpenGraph meta, responsive viewports

---

## Website Information Architecture

```
src/
├── app/
│   ├── page.tsx                      # Cinematic Homepage with Hero video, 3D Pavilion, Journey & 7 services
│   ├── properties/
│   │   ├── page.tsx                  # Dedicated Catalog with Filter Bar, Grid/Map toggle & Empty states
│   │   └── [slug]/page.tsx           # Dynamic Property Detail with Gallery, Specs & Sticky Enquiry
│   ├── services/page.tsx             # Comprehensive deep-dive on all 7 practices
│   ├── property-management/page.tsx  # Strategic Management Spotlight & Owner Intake
│   ├── about/page.tsx                # People-First Philosophy, Values & Story
│   ├── list-property/page.tsx        # Multi-Step Property Owner Intake Form
│   ├── contact/page.tsx              # Studio Location, Concierge, WhatsApp & Direct Form
│   ├── not-found.tsx                 # Custom 404 Error Experience
│   ├── sitemap.ts                    # Dynamic XML Sitemap
│   ├── robots.ts                     # Search Engine Directives
│   ├── layout.tsx                    # Global Root Layout with Fonts, Header & Footer
│   └── globals.css                   # Theme Tokens, Custom Scrollbars & Reset
├── components/
│   ├── hero/                         # Cinematic Hero with Autoplay Video & Fallbacks
│   ├── home/                         # Featured Properties, Philosophy, Services, Journey
│   ├── three/                        # Architectural Pavilion Three.js Canvas & Controllers
│   ├── property/                     # Card, Map View, Gallery, Enquiry & Viewing Modals
│   ├── forms/                        # Global Matchmaker Modal, Contact & Owner Forms
│   └── layout/                       # Sticky Navigation Header & Multi-Column Footer
├── data/
│   ├── properties.ts                 # Demonstration Catalog with Architectural Taxonomy
│   ├── services.ts                   # The 7 Core Services Deliverables & Narratives
│   └── siteConfig.ts                 # Centralized Brand Messaging & Contact Data
├── lib/
│   └── utils.ts                      # Tailwind Merge & Currency Formatting Helpers
└── types/
    └── index.ts                      # Strict TypeScript Interfaces
```

---

## Key Interactive Features

1. **"Hi me-casa, find me my place, my home!" Interactive Matchmaker Modal**
   Accessible from all major CTAs across every page. Guides clients through their purpose (Buy/Rent/Commercial/Invest/Manage), preferred architectural aesthetics, bedrooms, and budget targets with instant curated recommendations.

2. **Selective Interactive 3D Architectural Pavilion**
   A Three.js architectural pavilion featuring a cantilevered roof, floating foundation slab, reflecting water basin, and monolithic rammed-earth walls. Includes dynamic time-of-day lighting ("Golden Hour", "Midday", "Dusk Glow") and anatomical hotspot inspection.

3. **Geospatial & Grid Discovery**
   Filter properties by Type (Buy/Rent/Commercial), Location, Architectural Taxonomy, Budget, and Bedrooms. Toggle between responsive card grid and interactive architectural cartographic map view.

4. **Dedicated Property Detail Experience**
   Full-screen gallery with thumbnails and lightbox, architectural narrative, key features, amenities checklist, sticky desktop inquiry panel, and persistent mobile action bar.

---

## Development & Production Commands

```bash
# Run local development server
bun run dev # or: npm run dev

# Run production build
bun run build # or: npm run build

# Start production server
bun run start # or: npm run start
```
