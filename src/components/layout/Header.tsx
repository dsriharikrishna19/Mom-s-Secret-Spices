"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SparklesIcon, ChefHatIcon } from "@/components/ui/Icons";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Spices & Blends" },
  { href: "/experience", label: "Cooking Studio", icon: ChefHatIcon },
  { href: "/about", label: "Our Heritage" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-brand-cream/92 backdrop-blur-md border-b border-brand-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2.5 sm:gap-3 group min-w-0"
        >
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-brand-sand shadow-xs bg-white shrink-0">
            <Image
              src="/brand-logo.jpg"
              alt="Mom's Secret Spices - Akshaya Foods Logo"
              fill
              sizes="(max-width: 640px) 40px, 48px"
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-heading font-bold text-base sm:text-xl text-brand-brown tracking-tight group-hover:text-brand-terracotta transition-colors leading-tight truncate">
              Mom&apos;s Secret Spices
            </span>
            <span className="text-[10px] sm:text-[11px] text-brand-brown/60 tracking-wider font-medium uppercase truncate">
              By Akshaya Foods
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {NAV_ITEMS.map((item) => {
            const active = isLinkActive(item.href);
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3.5 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-1.5 ${
                  active
                    ? "text-brand-terracotta bg-brand-sand/40 shadow-2xs font-bold"
                    : "text-brand-brown/75 hover:text-brand-terracotta hover:bg-brand-sand/20"
                }`}
              >
                {Icon && (
                  <Icon
                    className={`w-4 h-4 ${
                      active ? "text-brand-terracotta" : "text-brand-brown/60"
                    }`}
                  />
                )}
                <span>{item.label}</span>
                {active && (
                  <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-brand-terracotta rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/experience"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-semibold text-white bg-brand-terracotta hover:bg-[#8e3920] rounded-xl shadow-xs hover:shadow transition-all whitespace-nowrap"
          >
            <SparklesIcon className="w-4 h-4 text-brand-gold shrink-0" />
            <span>Try Cooking Studio</span>
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl border border-brand-sand bg-white text-brand-brown hover:bg-brand-sand/50 transition-colors shrink-0"
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-brand-cream border-b border-brand-sand px-4 pt-3 pb-6 space-y-2">
          {NAV_ITEMS.map((item) => {
            const active = isLinkActive(item.href);
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  active
                    ? "bg-brand-sand text-brand-terracotta font-bold"
                    : "text-brand-brown hover:bg-white/80"
                }`}
              >
                {Icon && (
                  <Icon
                    className={`w-4 h-4 ${
                      active ? "text-brand-terracotta" : "text-brand-brown/60"
                    }`}
                  />
                )}
                <span>{item.label}</span>
              </Link>
            );
          })}
          <div className="pt-2">
            <Link
              href="/experience"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-semibold text-white bg-brand-terracotta hover:bg-[#8e3920] rounded-xl shadow-xs transition-all"
            >
              <SparklesIcon className="w-4 h-4 text-brand-gold" />
              <span>Try 3D Cooking Studio</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
