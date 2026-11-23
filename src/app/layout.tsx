import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { MatchmakerModal } from "@/components/forms/MatchmakerModal";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#263F35",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "me-casa — Real Estate. Made Personal.",
    template: "%s | me-casa",
  },
  description:
    "People first. Property follows. me-casa is an architectural real estate & property management collective connecting people with spaces to belong and become.",
  keywords: [
    "real estate",
    "architectural homes",
    "luxury properties",
    "property management",
    "residential rentals",
    "commercial property",
    "me-casa",
  ],
  authors: [{ name: "me-casa Real Estate" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://me-casa.com",
    siteName: "me-casa",
    title: "me-casa — Real Estate. Made Personal.",
    description: "Finding a place is easy. Finding your place is what matters.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
        width: 1600,
        height: 900,
        alt: "me-casa Architectural Real Estate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "me-casa — Real Estate. Made Personal.",
    description: "Finding a place is easy. Finding your place is what matters.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable}`}>
      <body className="min-h-screen bg-cream text-charcoal font-sans antialiased selection:bg-forest selection:text-cream flex flex-col justify-between">
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
        <MatchmakerModal />
      </body>
    </html>
  );
}
