"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SparklesIcon, ChefHatIcon } from "@/components/ui/Icons";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FFF8EE]/92 backdrop-blur-md border-b border-[#F0E2CF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#F0E2CF] shadow-xs bg-white shrink-0">
            <Image
              src="/brand-logo.jpg"
              alt="Mom's Secret Spices - Akshaya Foods Logo"
              fill
              sizes="48px"
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-lg sm:text-xl text-brand-brown tracking-tight group-hover:text-brand-terracotta transition-colors leading-tight">
              Mom&apos;s Secret Spices
            </span>
            <span className="text-[11px] text-brand-brown/60 tracking-wider font-medium uppercase">
              By Akshaya Foods
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-medium text-brand-brown/80 hover:text-brand-terracotta transition-colors"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="text-sm font-medium text-brand-brown/80 hover:text-brand-terracotta transition-colors"
          >
            Spices & Blends
          </Link>
          <Link
            href="/experience"
            className="text-sm font-medium text-brand-brown/80 hover:text-brand-terracotta transition-colors flex items-center gap-1.5"
          >
            <ChefHatIcon className="w-4 h-4 text-brand-terracotta" />
            <span>Cooking Studio</span>
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-brand-brown/80 hover:text-brand-terracotta transition-colors"
          >
            Our Heritage
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-brand-brown/80 hover:text-brand-terracotta transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/experience"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-brand-terracotta hover:bg-[#8e3920] rounded-xl shadow-xs hover:shadow transition-all"
          >
            <SparklesIcon className="w-4 h-4 text-brand-gold" />
            <span>Try Cooking Studio</span>
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border border-brand-sand bg-white/80 text-brand-brown hover:bg-brand-sand/50 transition-colors"
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
        <div className="md:hidden bg-brand-cream border-b border-brand-sand px-4 pt-3 pb-6 space-y-3">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-medium text-brand-brown hover:bg-white"
          >
            Home
          </Link>
          <Link
            href="/products"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-medium text-brand-brown hover:bg-white"
          >
            Spices & Blends
          </Link>
          <Link
            href="/experience"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-medium text-brand-brown hover:bg-white"
          >
            Cooking Studio
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-medium text-brand-brown hover:bg-white"
          >
            Our Heritage
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-medium text-brand-brown hover:bg-white"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
