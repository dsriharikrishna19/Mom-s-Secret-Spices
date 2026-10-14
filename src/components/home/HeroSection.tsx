"use client";

import Link from "next/link";
import Image from "next/image";
import {
  SparklesIcon,
  ChefHatIcon,
  ArrowRightIcon,
} from "@/components/ui/Icons";
import { Badge } from "@/components/ui/Badge";
import { ShimmerButton, BorderBeam, MotionLanding } from "@/components/magicui";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-brand-cream border-b border-brand-sand/80 py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      {/* Warm ambient background gradients */}
      <div className="absolute top-10 left-1/4 w-80 h-80 bg-brand-gold/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-brand-terracotta/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Editorial Eyebrow, Heading, Value Prop & CTAs */}
        <MotionLanding
          direction="right"
          duration={0.7}
          className="lg:col-span-7 flex flex-col items-start gap-4 sm:gap-6"
        >
          <Badge
            variant="gold"
            className="inline-flex items-center gap-1.5 self-start text-xs"
          >
            <SparklesIcon className="w-3.5 h-3.5 text-brand-terracotta shrink-0" />
            <span className="truncate">
              Small-Batch Artisanal Indian Spices
            </span>
          </Badge>

          <div className="flex flex-col gap-2.5 sm:gap-3">
            <h1 className="font-heading text-xl sm:text-2xl font-bold text-brand-brown tracking-tight leading-snug">
              The Sacred Soul of Traditional Indian Cooking,{" "}
              <span className="text-brand-terracotta">
                Stone-Ground with Love.
              </span>
            </h1>
            <p className="font-sans text-xs sm:text-base text-brand-brown/80 leading-relaxed max-w-2xl">
              Rediscover authentic regional aromatics made from single-origin
              whole spices. Slow-crushed to preserve vital essential oils, free
              from synthetic extracts, and paired with an interactive 3D Cooking
              Studio to guide your home recipes.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto pt-1">
            <Link href="/experience">
              <ShimmerButton
                shimmerColor="#FFEAC9"
                background="#A9472A"
                className="w-full sm:w-auto font-semibold text-sm px-6 py-3"
              >
                <ChefHatIcon className="w-4 h-4 text-white mr-2 shrink-0" />
                <span>Enter 3D Cooking Studio</span>
              </ShimmerButton>
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-brand-sand/50 text-brand-brown font-semibold rounded-xl border border-brand-sand shadow-2xs transition-all text-sm text-center"
            >
              <span>Discover Spice Catalog</span>
              <ArrowRightIcon className="w-3.5 h-3.5 text-brand-terracotta" />
            </Link>
          </div>

          {/* Micro Trust Indicators with Verified Brand Information */}
          <div className="grid grid-cols-3 gap-3 pt-4 border-t border-brand-sand/80 w-full text-left">
            <div className="flex flex-col gap-0.5">
              <div className="flex items-baseline gap-1 font-heading font-bold text-sm sm:text-base text-brand-brown">
                <span>27</span>
                <span className="text-xs sm:text-sm font-semibold text-brand-terracotta">
                  Blends
                </span>
              </div>
              <span className="text-xs text-brand-brown/65">
                Regional Formulations
              </span>
            </div>
            <div className="flex flex-col gap-0.5">
              <div className="flex items-baseline gap-1 font-heading font-bold text-sm sm:text-base text-brand-brown">
                <span>Est.</span>
                <span className="text-xs sm:text-sm font-semibold text-brand-terracotta">
                  1998
                </span>
              </div>
              <span className="text-xs text-brand-brown/65">
                Akshaya Foods Heritage
              </span>
            </div>
            <div className="flex flex-col gap-0.5">
              <div className="flex items-baseline gap-1 font-heading font-bold text-sm sm:text-base text-brand-brown">
                <span>4</span>
                <span className="text-xs sm:text-sm font-semibold text-brand-terracotta">
                  Packs
                </span>
              </div>
              <span className="text-xs text-brand-brown/65">
                50g to 250g Sizes
              </span>
            </div>
          </div>
        </MotionLanding>

        {/* Right Column: Polished Kitchen Studio Teaser Preview Card */}
        <MotionLanding
          direction="left"
          duration={0.7}
          delay={0.15}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative w-full max-w-md bg-white rounded-xl border border-brand-sand shadow-sm overflow-hidden flex flex-col">
            <BorderBeam
              size={220}
              duration={12}
              colorFrom="#E8A33A"
              colorTo="#A9472A"
            />
            {/* Studio Canvas Preview Visual */}
            <div className="aspect-16/10 bg-linear-to-br from-brand-sand/60 via-brand-cream to-brand-sand/30 p-4 sm:p-5 flex flex-col justify-between relative border-b border-brand-sand/70 overflow-hidden">
              <Image
                src="/images/products/product-collection-hero.jpg"
                alt="Mom's Secret Spices premium glass jar spice collection"
                fill
                priority
                sizes="(max-width: 640px) 100vw, 450px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

              <div className="flex items-center justify-between z-10">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-brand-sand text-xs font-semibold text-brand-brown shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
                  <span>Artisanal Glass Jars</span>
                </span>
                <Badge variant="terracotta">27 Formulations</Badge>
              </div>

              <div className="flex items-center justify-between text-xs text-white/90 bg-black/50 backdrop-blur-md p-2.5 rounded-lg border border-white/20 z-10">
                <span>Authentic Homestyle Range</span>
                <span className="font-semibold text-brand-gold">
                  Akshaya Foods
                </span>
              </div>
            </div>

            {/* Card Footer Step Info */}
            <div className="p-4 sm:p-5 flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-brand-sand/60 border border-brand-sand flex items-center justify-center text-brand-terracotta shrink-0">
                  <ChefHatIcon className="w-4 h-4 text-brand-terracotta" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-heading font-semibold text-xs text-brand-brown uppercase tracking-wider">
                    Mom&apos;s Culinary Guidance
                  </span>
                  <p className="text-xs text-brand-brown/75 leading-relaxed line-clamp-2">
                    &ldquo;Gently warm the milk, sprinkle vibrant stone-ground
                    turmeric, and let the healing aroma bloom.&rdquo;
                  </p>
                </div>
              </div>

              <Link
                href="/experience"
                className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 bg-brand-cream hover:bg-brand-sand/60 text-brand-terracotta font-semibold rounded-lg border border-brand-sand text-xs transition-all text-center"
              >
                <span>Step Inside the Studio</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </MotionLanding>
      </div>
    </section>
  );
}
