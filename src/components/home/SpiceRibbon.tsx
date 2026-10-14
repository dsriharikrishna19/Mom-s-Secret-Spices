"use client";

import { useEffect, useRef } from "react";

const SPICE_RIBBON_ITEMS = [
  "Vangi Bath Masala",
  "Stone-Ground Turmeric",
  "Mysore Rasam Powder",
  "Chutney Podi",
  "Authentic Sambar Blend",
  "Salem Coriander",
  "Kashmiri Reshampatti Chilli",
  "Malabar Black Pepper",
  "Bisibelebath Spice",
  "Garam Masala Blend",
];

export function SpiceRibbon() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isHoveredRef = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let animId: number;
    const speed = 0.85; // pixels per frame

    const step = () => {
      if (!isHoveredRef.current && el) {
        el.scrollLeft += speed;
        // When scrolled halfway through the duplicate content, reset seamlessly
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <section className="w-full bg-brand-sand/40 border-y border-brand-sand/70 py-3 sm:py-3.5 relative overflow-hidden select-none">
      {/* Subtle edge gradient masks for smooth entering and exiting */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 bg-linear-to-r from-brand-sand/80 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 bg-linear-to-l from-brand-sand/80 to-transparent z-10" />

      {/* Custom requestAnimationFrame Infinite Scroll Track */}
      <div
        ref={containerRef}
        onMouseEnter={() => {
          isHoveredRef.current = true;
        }}
        onMouseLeave={() => {
          isHoveredRef.current = false;
        }}
        className="w-full overflow-x-hidden whitespace-nowrap flex scrollbar-none cursor-grab active:cursor-grabbing"
      >
        {/* Set 1 */}
        <div className="flex shrink-0 items-center gap-8 pr-8">
          {SPICE_RIBBON_ITEMS.map((item, i) => (
            <div key={`s1-${i}`} className="flex items-center gap-3 shrink-0">
              <span className="w-2 h-2 rounded-full bg-brand-terracotta/80 shrink-0 shadow-xs" />
              <span className="font-heading font-medium text-xs sm:text-sm text-brand-brown tracking-wide whitespace-nowrap">
                {item}
              </span>
            </div>
          ))}
        </div>
        {/* Set 2 (Duplicate for seamless infinite scroll) */}
        <div
          className="flex shrink-0 items-center gap-8 pr-8"
          aria-hidden="true"
        >
          {SPICE_RIBBON_ITEMS.map((item, i) => (
            <div key={`s2-${i}`} className="flex items-center gap-3 shrink-0">
              <span className="w-2 h-2 rounded-full bg-brand-terracotta/80 shrink-0 shadow-xs" />
              <span className="font-heading font-medium text-xs sm:text-sm text-brand-brown tracking-wide whitespace-nowrap">
                {item}
              </span>
            </div>
          ))}
        </div>
        {/* Set 3 (Buffer for ultra-wide screens) */}
        <div
          className="flex shrink-0 items-center gap-8 pr-8"
          aria-hidden="true"
        >
          {SPICE_RIBBON_ITEMS.map((item, i) => (
            <div key={`s3-${i}`} className="flex items-center gap-3 shrink-0">
              <span className="w-2 h-2 rounded-full bg-brand-terracotta/80 shrink-0 shadow-xs" />
              <span className="font-heading font-medium text-xs sm:text-sm text-brand-brown tracking-wide whitespace-nowrap">
                {item}
              </span>
            </div>
          ))}
        </div>
        {/* Set 4 */}
        <div
          className="flex shrink-0 items-center gap-8 pr-8"
          aria-hidden="true"
        >
          {SPICE_RIBBON_ITEMS.map((item, i) => (
            <div key={`s4-${i}`} className="flex items-center gap-3 shrink-0">
              <span className="w-2 h-2 rounded-full bg-brand-terracotta/80 shrink-0 shadow-xs" />
              <span className="font-heading font-medium text-xs sm:text-sm text-brand-brown tracking-wide whitespace-nowrap">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
