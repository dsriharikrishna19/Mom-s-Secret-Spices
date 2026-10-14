"use client";

import Link from "next/link";
import {
  ChefHatIcon,
  ClockIcon,
  UtensilsIcon,
  FlameIcon,
  ArrowRightIcon,
} from "@/components/ui/Icons";
import { ShimmerButton, BorderBeam, MotionLanding } from "@/components/magicui";

export function StudioSpotlightSection() {
  return (
    <section className="bg-brand-brown text-brand-cream py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-y border-brand-brown/30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Studio Story & Explanation */}
        <MotionLanding
          direction="right"
          duration={0.65}
          className="lg:col-span-6 flex flex-col items-start gap-4 sm:gap-5"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-gold/20 text-brand-gold border border-brand-gold/30">
            <ChefHatIcon className="w-3.5 h-3.5 text-brand-gold" />
            <span>Interactive 3D Cooking Guide</span>
          </span>

          <div className="flex flex-col gap-2.5">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-brand-cream">
              Cook Alongside Our Virtual Indian Kitchen Studio
            </h2>
            <p className="text-xs sm:text-sm text-brand-cream/80 leading-relaxed">
              Step into a simulated Indian home kitchen equipped with traditional terracotta handi cookware,
              brass masala dabba spice racks, and dynamic steam aroma particles. Our interactive guide walks you
              through authentic recipe sequences step by step.
            </p>
          </div>

          {/* Feature Bullets */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
            <div className="bg-brand-cream/5 p-3.5 rounded-xl border border-brand-cream/10 flex items-start gap-2.5">
              <ClockIcon className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-brand-cream">Paced Step Controls</span>
                <span className="text-xs text-brand-cream/70">Navigate prep and simmering steps</span>
              </div>
            </div>

            <div className="bg-brand-cream/5 p-3.5 rounded-xl border border-brand-cream/10 flex items-start gap-2.5">
              <UtensilsIcon className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-brand-cream">Active Spice Spotlights</span>
                <span className="text-xs text-brand-cream/70">Discover spices used in each step</span>
              </div>
            </div>
          </div>

          <Link href="/experience" className="mt-2 w-full sm:w-auto">
            <ShimmerButton
              background="#A9472A"
              shimmerColor="#FFEAC9"
              className="w-full sm:w-auto px-6 py-3 font-semibold shadow-xs text-xs sm:text-sm inline-flex items-center justify-center gap-2 text-white"
            >
              <span>Launch Studio Experience</span>
              <ArrowRightIcon className="w-4 h-4" />
            </ShimmerButton>
          </Link>
        </MotionLanding>

        {/* Studio Preview Graphic Card */}
        <MotionLanding
          direction="left"
          duration={0.65}
          delay={0.1}
          className="lg:col-span-6 flex justify-center"
        >
          <div className="relative w-full bg-brand-cream/10 rounded-xl border border-brand-cream/15 p-5 sm:p-6 flex flex-col gap-4 shadow-sm backdrop-blur-sm overflow-hidden">
            <BorderBeam size={200} duration={14} colorFrom="#E8A33A" colorTo="#A9472A" />
            <div className="flex items-center justify-between pb-3 border-b border-brand-cream/15 text-xs text-brand-cream/70">
              <span className="flex items-center gap-1.5 font-semibold text-brand-gold">
                <FlameIcon className="w-4 h-4 text-brand-gold" />
                <span>3D Kitchen Preview</span>
              </span>
              <span>Three.js WebGL Engine</span>
            </div>

            {/* Mock Recipe Walkthrough Snapshot */}
            <div className="bg-brand-cream/10 p-4 rounded-xl border border-brand-cream/15 flex flex-col gap-2.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-brand-gold">Step 2 of 3</span>
                <span className="text-brand-cream/60">Golden Milk Recipe</span>
              </div>
              <h4 className="font-heading font-semibold text-sm text-brand-cream">
                Add Turmeric & Temper Aromas
              </h4>
              <p className="text-xs text-brand-cream/75 italic leading-relaxed">
                &ldquo;Sprinkle freshly ground pure turmeric into gently heated milk. Observe the golden bloom as active curcumin infuses the blend.&rdquo;
              </p>
            </div>

            <div className="flex items-center justify-between pt-1 text-xs text-brand-cream/60">
              <span>Integrated direct WhatsApp ordering for featured spices</span>
              <span className="text-brand-gold font-medium">✓ Ready to Cook</span>
            </div>
          </div>
        </MotionLanding>
      </div>
    </section>
  );
}
