"use client";

import Link from "next/link";
import {
  CompassIcon,
  FlameIcon,
  LeafIcon,
  ShieldCheckIcon,
  CheckIcon,
  ArrowRightIcon,
} from "@/components/ui/Icons";
import { MotionLanding } from "@/components/magicui";

export function HeritageQualitySection() {
  return (
    <section className="bg-brand-sand/30 border-y border-brand-sand py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <MotionLanding
          direction="right"
          duration={0.65}
          className="lg:col-span-5 flex flex-col gap-4"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-green/15 text-brand-green border border-brand-green/25 self-start">
            <CompassIcon className="w-3.5 h-3.5" />
            <span>Purity & Provenance</span>
          </span>
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-brand-brown">
            Heirloom Sourcing & Slow Stone Crushing
          </h2>
          <p className="text-xs sm:text-sm text-brand-brown/80 leading-relaxed">
            Industrial high-speed commercial grinding generates intense friction
            heat (often exceeding 60°C), scorching subtle essential oils and
            driving away volatile aromas.
          </p>
          <p className="text-xs sm:text-sm text-brand-brown/80 leading-relaxed">
            At Mom&apos;s Secret Spices, whole spices from dedicated regional
            growers are gently sun-dried and ground slowly at low temperatures
            to ensure the vivid color, pungent fragrance, and therapeutic value
            remain completely intact in every pack.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-brand-terracotta hover:underline pt-1 self-start"
          >
            <span>Read Our Full Heritage Story</span>
            <ArrowRightIcon className="w-3.5 h-3.5" />
          </Link>
        </MotionLanding>

        <MotionLanding
          direction="left"
          duration={0.65}
          delay={0.1}
          className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          <div className="bg-white p-5 rounded-xl border border-brand-sand shadow-2xs flex flex-col gap-2">
            <div className="w-8 h-8 rounded-lg bg-brand-cream border border-brand-sand flex items-center justify-center text-brand-terracotta">
              <FlameIcon className="w-4 h-4 text-brand-terracotta" />
            </div>
            <h4 className="font-heading font-bold text-sm text-brand-brown">
              Low-Friction Stone Crushed
            </h4>
            <p className="text-xs text-brand-brown/70 leading-relaxed">
              Slow processing retains naturally occurring curcumin, cineole, and
              piperine oils.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-brand-sand shadow-2xs flex flex-col gap-2">
            <div className="w-8 h-8 rounded-lg bg-brand-cream border border-brand-sand flex items-center justify-center text-brand-green">
              <LeafIcon className="w-4 h-4 text-brand-green" />
            </div>
            <h4 className="font-heading font-bold text-sm text-brand-brown">
              Whole Sun-Dried Seeds
            </h4>
            <p className="text-xs text-brand-brown/70 leading-relaxed">
              Only intact seeds and dried pods are processed, eliminating
              low-grade dust or hulls.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-brand-sand shadow-2xs flex flex-col gap-2">
            <div className="w-8 h-8 rounded-lg bg-brand-cream border border-brand-sand flex items-center justify-center text-brand-brown">
              <ShieldCheckIcon className="w-4 h-4 text-brand-brown" />
            </div>
            <h4 className="font-heading font-bold text-sm text-brand-brown">
              Zero Chemical Fillers
            </h4>
            <p className="text-xs text-brand-brown/70 leading-relaxed">
              No starch bulking, anti-caking additives, synthetic pigments, or
              MSG.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-brand-sand shadow-2xs flex flex-col gap-2">
            <div className="w-8 h-8 rounded-lg bg-brand-cream border border-brand-sand flex items-center justify-center text-brand-gold">
              <CheckIcon className="w-4 h-4 text-brand-gold" />
            </div>
            <h4 className="font-heading font-bold text-sm text-brand-brown">
              Weekly Small Batches
            </h4>
            <p className="text-xs text-brand-brown/70 leading-relaxed">
              Milled and packaged in small quantities so spices reach your
              pantry in peak freshness.
            </p>
          </div>
        </MotionLanding>
      </div>
    </section>
  );
}
