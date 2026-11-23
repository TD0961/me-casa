"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Compass } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/siteConfig";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const openMatchmaker = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-matchmaker-modal"));
    }
  };

  const navLinks = [
    { title: "Properties", href: "/properties" },
    { title: "Services", href: "/services" },
    { title: "Property Management", href: "/property-management" },
    { title: "About", href: "/about" },
    { title: "List Property", href: "/list-property" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
          isScrolled
            ? "bg-[#F8F6F1]/90 backdrop-blur-md py-4 border-b border-sand/50 shadow-[0_4px_24px_rgba(38,63,53,0.04)]"
            : isHomePage
            ? "bg-gradient-to-b from-black/60 via-black/20 to-transparent py-6 text-white"
            : "bg-cream/95 py-6 border-b border-sand/30"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 transition-transform duration-300 hover:opacity-90"
            aria-label="me-casa homepage"
          >
            <div
              className={cn(
                "w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-300",
                isScrolled
                  ? "bg-forest text-cream"
                  : isHomePage
                  ? "bg-white text-forest"
                  : "bg-forest text-cream"
              )}
            >
              <span className="font-serif italic font-bold text-sm tracking-tight">m</span>
            </div>
            <div className="flex flex-col">
              <span
                className={cn(
                  "font-serif tracking-tight font-medium text-2xl transition-colors duration-300 leading-none",
                  isScrolled
                    ? "text-forest"
                    : isHomePage
                    ? "text-white"
                    : "text-forest"
                )}
              >
                me-casa
              </span>
              <span
                className={cn(
                  "text-[9px] uppercase tracking-[0.2em] font-sans font-medium mt-1",
                  isScrolled
                    ? "text-charcoal-muted"
                    : isHomePage
                    ? "text-white/80"
                    : "text-charcoal-muted"
                )}
              >
                Real Estate. Made Personal.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative py-1 transition-colors duration-300 hover:text-clay",
                    isScrolled
                      ? isActive
                        ? "text-forest font-semibold"
                        : "text-charcoal/90 hover:text-forest"
                      : isHomePage
                      ? isActive
                        ? "text-white font-semibold"
                        : "text-white/85 hover:text-white"
                      : isActive
                      ? "text-forest font-semibold"
                      : "text-charcoal/90 hover:text-forest"
                  )}
                >
                  {link.title}
                  {isActive && (
                    <span
                      className={cn(
                        "absolute -bottom-1 left-0 right-0 h-[2px] rounded-full",
                        isScrolled || !isHomePage ? "bg-forest" : "bg-white"
                      )}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={openMatchmaker}
              type="button"
              className={cn(
                "inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-sm group",
                isScrolled
                  ? "bg-forest text-cream hover:bg-forest-light hover:shadow-md"
                  : isHomePage
                  ? "bg-white text-forest hover:bg-cream hover:shadow-lg hover:scale-[1.02]"
                  : "bg-forest text-cream hover:bg-forest-light hover:shadow-md"
              )}
            >
              <Compass className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-45" />
              <span>Let&apos;s find your place</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={openMatchmaker}
              type="button"
              className={cn(
                "text-xs px-3 py-1.5 rounded-full font-medium tracking-wide",
                isScrolled || !isHomePage
                  ? "bg-forest text-cream"
                  : "bg-white text-forest"
              )}
            >
              Find Home
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={cn(
                "p-2 rounded-lg transition-colors focus:outline-none",
                isScrolled || !isHomePage
                  ? "text-forest hover:bg-sand/30"
                  : "text-white hover:bg-white/10"
              )}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-cream p-6 shadow-2xl flex flex-col justify-between overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="pt-20">
              <div className="flex items-center justify-between pb-6 border-b border-sand">
                <span className="font-serif text-2xl text-forest font-semibold">me-casa</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-forest/70 hover:text-forest"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="flex flex-col gap-5 mt-8">
                <Link
                  href="/"
                  className={cn(
                    "text-xl font-serif transition-colors py-1",
                    pathname === "/" ? "text-forest font-bold" : "text-charcoal hover:text-forest"
                  )}
                >
                  Home
                </Link>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-xl font-serif transition-colors py-1",
                      pathname === link.href
                        ? "text-forest font-bold"
                        : "text-charcoal hover:text-forest"
                    )}
                  >
                    {link.title}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="mt-10 pt-6 border-t border-sand flex flex-col gap-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openMatchmaker();
                }}
                className="w-full py-3.5 bg-forest text-cream rounded-full text-center text-sm font-semibold tracking-wider uppercase hover:bg-forest-light transition-colors"
              >
                Hi me-casa, find me my place!
              </button>
              <div className="text-center text-xs text-charcoal-muted">
                <p>Real Estate. Made Personal.</p>
                <p className="mt-1">{siteConfig.contact.phone}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
