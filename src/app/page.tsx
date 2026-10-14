import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  SparklesIcon,
  FlameIcon,
  ChefHatIcon,
  ArrowRightIcon,
  CheckIcon,
  LeafIcon,
  UtensilsIcon,
  ClockIcon,
  CompassIcon,
  WhatsAppIcon,
  StoreIcon,
  ShieldCheckIcon,
} from "@/components/ui/Icons";
import { Badge } from "@/components/ui/Badge";
import { PRODUCTS } from "@/features/products/data";
import { SITE_INFO } from "@/data/info";

export const metadata: Metadata = {
  title: "Mom's Secret Spices | Premium Artisanal Indian Spices & AI Cooking Studio",
  description:
    "Handcrafted artisanal Indian spice blends freshly stone-ground with zero adulteration. Explore our catalog and step inside the interactive 3D Cooking Studio.",
};

export default function HomePage() {
  // Verified catalogue products from features/products/data.ts
  const featuredProducts = PRODUCTS.slice(0, 3);

  // Verified categories available in the existing catalog
  const catalogCategories = [
    {
      name: "Heritage Spice Blends",
      tag: "blend",
      count: "Sambar, Rasam, Garam Masala & Regional Blends",
      description: "Authentic multi-spice formulations toasted and stone-ground to balance heat, aroma, and color.",
      badge: "Signature Craft",
      icon: <FlameIcon className="w-5 h-5 text-brand-terracotta" />,
    },
    {
      name: "Single-Origin Pure Powders",
      tag: "spice",
      count: "Turmeric, Coriander, Kashmiri Chilli & Pepper",
      description: "Sun-dried and cold-milled to preserve natural volatile essential oils and therapeutic potency.",
      badge: "Single Origin",
      icon: <LeafIcon className="w-5 h-5 text-brand-green" />,
    },
    {
      name: "Tiffin & Podi Essentials",
      tag: "blend",
      count: "Chutney Podi, Idli Podi, Bisibelebath & Puliyogre",
      description: "Traditional South Indian kitchen accompaniments prepared with slow-roasted lentils and curry leaves.",
      badge: "Breakfast & Rice",
      icon: <UtensilsIcon className="w-5 h-5 text-brand-gold" />,
    },
  ];

  return (
    <main className="flex-1 flex flex-col">
      {/* 1. HERO SECTION (Editorial 2-Column Brand Layout) */}
      <section className="relative overflow-hidden bg-brand-cream border-b border-brand-sand/80 py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        {/* Warm ambient background gradients */}
        <div className="absolute top-10 left-1/4 w-80 h-80 bg-brand-gold/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-brand-terracotta/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Editorial Eyebrow, Heading, Value Prop & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start gap-5 sm:gap-6">
            <Badge variant="gold" className="inline-flex items-center gap-1.5 self-start">
              <SparklesIcon className="w-3.5 h-3.5 text-brand-terracotta" />
              <span>Small-Batch Artisanal Indian Spice Craft</span>
            </Badge>

            <div className="flex flex-col gap-3">
              <h1 className="font-heading text-2xl sm:text-2xl font-bold text-brand-brown tracking-tight leading-snug">
                The Sacred Soul of Traditional Indian Cooking,{" "}
                <span className="text-brand-terracotta">Stone-Ground with Love.</span>
              </h1>
              <p className="font-sans text-sm sm:text-base text-brand-brown/80 leading-relaxed max-w-2xl">
                Rediscover authentic regional aromatics made from single-origin whole spices. Slow-crushed
                to preserve vital essential oils, free from synthetic extracts, and paired with an interactive 3D Cooking Studio to guide your home recipes.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto pt-1">
              <Link
                href="/experience"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-terracotta hover:bg-[#8e3920] text-white font-semibold rounded-xl shadow-xs hover:shadow transition-all text-sm text-center"
              >
                <ChefHatIcon className="w-4 h-4 text-white" />
                <span>Enter 3D Cooking Studio</span>
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-brand-sand/50 text-brand-brown font-semibold rounded-xl border border-brand-sand shadow-2xs transition-all text-sm text-center"
              >
                <span>Discover Spice Catalog</span>
                <ArrowRightIcon className="w-3.5 h-3.5 text-brand-terracotta" />
              </Link>
            </div>

            {/* Micro Trust Indicators */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-brand-sand/80 w-full text-left">
              <div className="flex flex-col gap-0.5">
                <span className="font-heading font-bold text-sm sm:text-base text-brand-brown">100% Whole</span>
                <span className="text-xs text-brand-brown/65">Sun-dried origin seeds</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="font-heading font-bold text-sm sm:text-base text-brand-brown">Cold Milled</span>
                <span className="text-xs text-brand-brown/65">Low-heat stone crushed</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="font-heading font-bold text-sm sm:text-base text-brand-brown">Zero Fillers</span>
                <span className="text-xs text-brand-brown/65">No colors or extracts</span>
              </div>
            </div>
          </div>

          {/* Right Column: Polished Kitchen Studio Teaser Preview Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md bg-white rounded-xl border border-brand-sand shadow-sm overflow-hidden flex flex-col">
              {/* Studio Canvas Preview Visual */}
              <div className="aspect-16/10 bg-linear-to-br from-brand-sand/60 via-brand-cream to-brand-sand/30 p-6 flex flex-col justify-between relative border-b border-brand-sand/70">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-brand-sand text-xs font-semibold text-brand-brown shadow-2xs">
                    <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
                    <span>3D Heritage Kitchen Stage</span>
                  </span>
                  <Badge variant="terracotta">Interactive</Badge>
                </div>

                <div className="flex flex-col items-center justify-center text-center gap-2 py-4">
                  <div className="w-14 h-14 rounded-xl bg-white/90 border border-brand-sand shadow-xs flex items-center justify-center text-brand-terracotta">
                    <FlameIcon className="w-7 h-7 text-brand-terracotta" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="font-heading font-bold text-base text-brand-brown">
                      Kadai & Stone Tempering
                    </span>
                    <span className="text-xs text-brand-brown/70">
                      Real-time aroma & spice simulation
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-brand-brown/70 bg-white/80 backdrop-blur-sm p-2.5 rounded-lg border border-brand-sand/60">
                  <span>Current recipe:</span>
                  <span className="font-semibold text-brand-brown">Golden Milk (Haldi Doodh)</span>
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
                      &ldquo;Gently warm the milk, sprinkle vibrant stone-ground turmeric, and let the healing aroma bloom.&rdquo;
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
          </div>
        </div>
      </section>

      {/* 2. FEATURED SPICE COLLECTION (Verified Product Data & Pack Options) */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex flex-col gap-8 sm:gap-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="flex flex-col gap-2 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-terracotta">
              <SparklesIcon className="w-3.5 h-3.5" />
              <span>Direct From Our Milling Unit</span>
            </span>
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-brand-brown">
              Featured Artisanal Spices
            </h2>
            <p className="text-xs sm:text-sm text-brand-brown/75 leading-relaxed">
              Every pack is single-origin or authentic family-recipe blend, freshly prepared with zero chemical preservatives.
            </p>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-brand-terracotta hover:underline shrink-0 self-start sm:self-auto"
          >
            <span>View All 27 Products</span>
            <ArrowRightIcon className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredProducts.map((product) => {
            const isChilliOrHot =
              product.slug.includes("chilli") ||
              product.slug.includes("pepper") ||
              product.slug.includes("garam");
            const isHerbalOrLeafy =
              product.slug.includes("coriander") ||
              product.slug.includes("kasuri") ||
              product.slug.includes("podi");

            return (
              <div
                key={product.id}
                className="flex flex-col bg-white rounded-xl border border-brand-sand/80 shadow-xs hover:shadow-md hover:border-brand-terracotta/40 transition-all overflow-hidden group"
              >
                {/* Visual Header */}
                <div className="aspect-4/3 bg-linear-to-br from-brand-sand/40 to-brand-cream flex flex-col items-center justify-center p-6 border-b border-brand-sand/50 relative">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-white/90 border border-brand-sand shadow-xs flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    {isChilliOrHot ? (
                      <FlameIcon className="w-7 h-7 sm:w-8 sm:h-8 text-brand-terracotta" />
                    ) : isHerbalOrLeafy ? (
                      <LeafIcon className="w-7 h-7 sm:w-8 sm:h-8 text-brand-green" />
                    ) : (
                      <UtensilsIcon className="w-7 h-7 sm:w-8 sm:h-8 text-brand-gold" />
                    )}
                  </div>
                  <div className="mt-3 flex gap-2">
                    <Badge variant="terracotta">
                      {product.packSizes[0]?.weight}
                      {product.packSizes[0]?.unit}
                    </Badge>
                    <Badge variant="cream" className="capitalize">{product.category}</Badge>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between gap-4">
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-brand-brown group-hover:text-brand-terracotta transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-brown/70 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Pack Sizes Available */}
                  <div className="flex flex-col gap-1 pt-1">
                    <span className="text-xs font-semibold text-brand-brown/60 uppercase tracking-wider">
                      Available Pack Sizes:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {product.packSizes.map((size) => (
                        <span
                          key={size.id}
                          className="px-2 py-0.5 rounded-md bg-brand-cream border border-brand-sand text-xs font-medium text-brand-brown/80"
                        >
                          {size.weight}
                          {size.unit} • ₹{size.mrp}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Verified Pricing & Link */}
                  <div className="pt-3 border-t border-brand-sand/60 flex items-center justify-between gap-2">
                    <div>
                      <span className="text-xs text-brand-brown/60 block">Starting MRP</span>
                      <span className="text-lg sm:text-xl font-bold font-heading text-brand-terracotta">
                        ₹{product.packSizes[0]?.mrp}
                      </span>
                    </div>
                    <Link
                      href={`/products/${product.slug}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-brand-terracotta/10 hover:bg-brand-terracotta text-brand-terracotta hover:text-white text-xs font-semibold rounded-lg transition-colors shrink-0"
                    >
                      <span>Explore</span>
                      <ArrowRightIcon className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. COOKING STUDIO FEATURE SPOTLIGHT (Interactive 3D Engine Guidance) */}
      <section className="bg-brand-brown text-brand-cream py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-y border-brand-brown/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Studio Story & Explanation */}
          <div className="lg:col-span-6 flex flex-col items-start gap-4 sm:gap-5">
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

            <Link
              href="/experience"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-terracotta hover:bg-[#8e3920] text-white font-semibold rounded-xl shadow-xs transition-all text-xs sm:text-sm mt-2"
            >
              <span>Launch Studio Experience</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>

          {/* Studio Preview Graphic Card */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full bg-brand-cream/10 rounded-xl border border-brand-cream/15 p-5 sm:p-6 flex flex-col gap-4 shadow-sm backdrop-blur-sm">
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
          </div>
        </div>
      </section>

      {/* 4. EXPLORE SPICE CATEGORIES (Catalog Navigation) */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex flex-col gap-8">
        <div className="text-center max-w-2xl mx-auto flex flex-col items-center gap-2">
          <Badge variant="terracotta" className="self-center">
            Culinary Categories
          </Badge>
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-brand-brown">
            Explore By Flavor & Tradition
          </h2>
          <p className="text-xs sm:text-sm text-brand-brown/75 leading-relaxed">
            Curated according to how Indian families cook — from daily dal and curry essentials to slow-roasted breakfast podis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {catalogCategories.map((cat, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl border border-brand-sand/80 shadow-xs hover:border-brand-terracotta/40 hover:shadow-md transition-all flex flex-col justify-between gap-5"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-brand-cream border border-brand-sand flex items-center justify-center">
                    {cat.icon}
                  </div>
                  <Badge variant="sand">{cat.badge}</Badge>
                </div>

                <div className="flex flex-col gap-1.5">
                  <h3 className="font-heading font-bold text-base sm:text-lg text-brand-brown">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-brand-terracotta font-medium">
                    {cat.count}
                  </p>
                  <p className="text-xs sm:text-sm text-brand-brown/75 leading-relaxed pt-1">
                    {cat.description}
                  </p>
                </div>
              </div>

              <Link
                href="/products"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-terracotta hover:underline pt-2 border-t border-brand-sand/60"
              >
                <span>Browse Category Products</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 5. HERITAGE & QUALITY COMMITMENT (Verified Sourcing Story) */}
      <section className="bg-brand-sand/30 border-y border-brand-sand py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5 flex flex-col gap-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-green/15 text-brand-green border border-brand-green/25 self-start">
              <CompassIcon className="w-3.5 h-3.5" />
              <span>Purity & Provenance</span>
            </span>
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-brand-brown">
              Heirloom Sourcing & Slow Stone Crushing
            </h2>
            <p className="text-xs sm:text-sm text-brand-brown/80 leading-relaxed">
              Industrial high-speed commercial grinding generates intense friction heat (often exceeding 60°C),
              scorching subtle essential oils and driving away volatile aromas.
            </p>
            <p className="text-xs sm:text-sm text-brand-brown/80 leading-relaxed">
              At Mom&apos;s Secret Spices, whole spices from dedicated regional growers are gently sun-dried and
              ground slowly at low temperatures to ensure the vivid color, pungent fragrance, and therapeutic value
              remain completely intact in every pack.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-brand-terracotta hover:underline pt-1 self-start"
            >
              <span>Read Our Full Heritage Story</span>
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-xl border border-brand-sand shadow-2xs flex flex-col gap-2">
              <div className="w-8 h-8 rounded-lg bg-brand-cream border border-brand-sand flex items-center justify-center text-brand-terracotta">
                <FlameIcon className="w-4 h-4 text-brand-terracotta" />
              </div>
              <h4 className="font-heading font-bold text-sm text-brand-brown">Low-Friction Stone Crushed</h4>
              <p className="text-xs text-brand-brown/70 leading-relaxed">
                Slow processing retains naturally occurring curcumin, cineole, and piperine oils.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-brand-sand shadow-2xs flex flex-col gap-2">
              <div className="w-8 h-8 rounded-lg bg-brand-cream border border-brand-sand flex items-center justify-center text-brand-green">
                <LeafIcon className="w-4 h-4 text-brand-green" />
              </div>
              <h4 className="font-heading font-bold text-sm text-brand-brown">Whole Sun-Dried Seeds</h4>
              <p className="text-xs text-brand-brown/70 leading-relaxed">
                Only intact seeds and dried pods are processed, eliminating low-grade dust or hulls.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-brand-sand shadow-2xs flex flex-col gap-2">
              <div className="w-8 h-8 rounded-lg bg-brand-cream border border-brand-sand flex items-center justify-center text-brand-brown">
                <ShieldCheckIcon className="w-4 h-4 text-brand-brown" />
              </div>
              <h4 className="font-heading font-bold text-sm text-brand-brown">Zero Chemical Fillers</h4>
              <p className="text-xs text-brand-brown/70 leading-relaxed">
                No starch bulking, anti-caking additives, synthetic pigments, or MSG.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-brand-sand shadow-2xs flex flex-col gap-2">
              <div className="w-8 h-8 rounded-lg bg-brand-cream border border-brand-sand flex items-center justify-center text-brand-gold">
                <CheckIcon className="w-4 h-4 text-brand-gold" />
              </div>
              <h4 className="font-heading font-bold text-sm text-brand-brown">Weekly Small Batches</h4>
              <p className="text-xs text-brand-brown/70 leading-relaxed">
                Milled and packaged in small quantities so spices reach your pantry in peak freshness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. DISTRIBUTOR & RETAIL OPPORTUNITY (Balanced 2-Column Section) */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="bg-white rounded-xl border border-brand-sand shadow-xs p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Copy and Actions */}
          <div className="lg:col-span-6 flex flex-col items-start gap-4 sm:gap-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-terracotta/10 text-brand-terracotta border border-brand-terracotta/20">
              <StoreIcon className="w-3.5 h-3.5" />
              <span>Business & Distribution Partners</span>
            </span>

            <div className="flex flex-col gap-2.5">
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-brand-brown">
                Partner With Mom&apos;s Secret Spices: 27 Hot-Selling Formulations
              </h2>
              <p className="text-xs sm:text-sm text-brand-brown/80 leading-relaxed">
                We are actively expanding our retail, distribution, and restaurant supply network across Karnataka
                and pan-India. Our full catalog includes 27 verified fast-moving formulations spanning daily cooking
                powders, sambar & rasam essentials, and regional South Indian specialty rice blends.
              </p>
            </div>

            <div className="flex flex-col gap-2 w-full text-xs text-brand-brown/75 bg-brand-cream/60 p-4 rounded-xl border border-brand-sand/60">
              <div className="flex items-center gap-2">
                <CheckIcon className="w-3.5 h-3.5 text-brand-green shrink-0" />
                <span>High recurring consumer demand & authentic taste consistency</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="w-3.5 h-3.5 text-brand-green shrink-0" />
                <span>Attractive distributor margins and reliable stock replenishment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="w-3.5 h-3.5 text-brand-green shrink-0" />
                <span>Available in flexible retail pouches & institutional pack sizes</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto pt-2">
              <a
                href={`https://wa.me/${SITE_INFO.whatsappNumber}?text=${encodeURIComponent(
                  "Hello Mom's Secret Spices! I am interested in distributorship and bulk supply options.",
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-terracotta hover:bg-[#8e3920] text-white font-semibold rounded-xl shadow-xs transition-all text-xs sm:text-sm text-center"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Enquire via WhatsApp</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-brand-cream border border-brand-sand text-brand-brown font-semibold rounded-xl text-xs sm:text-sm transition-all text-center"
              >
                <span>Submit Trade Form</span>
              </Link>
            </div>
          </div>

          {/* Controlled-Size Poster Showcase */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-md aspect-3/4 sm:aspect-4/5 rounded-xl overflow-hidden border border-brand-sand shadow-sm bg-brand-cream">
              <Image
                src="/spice-catalog-banner.jpg"
                alt="Mom's Secret Spices 27 Hot Selling Products Showcase"
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL INVITATION CTA (Balanced Conversion Banner) */}
      <section className="bg-brand-cream border-t border-brand-sand py-12 md:py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-5 sm:gap-6">
          <Badge variant="gold" className="self-center">
            Experience Pure Spices
          </Badge>
          <div className="flex flex-col gap-2.5">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-brand-brown">
              Bring Grandma&apos;s Secret Aromas into Your Kitchen
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-brand-brown/75 leading-relaxed max-w-xl">
              Whether you are preparing a quick weeknight rasam or perfecting your festive biryani blend,
              Mom&apos;s Secret Spices delivers unadulterated flavor in every pinch.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3.5 justify-center items-center w-full sm:w-auto">
            <Link
              href="/products"
              className="w-full sm:w-auto px-6 py-3 bg-brand-terracotta hover:bg-[#8e3920] text-white font-semibold rounded-xl shadow-xs transition-all text-center text-xs sm:text-sm"
            >
              Order Spices Online
            </Link>
            <Link
              href="/experience"
              className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-brand-sand/50 text-brand-brown font-semibold rounded-xl border border-brand-sand shadow-2xs transition-all text-center text-xs sm:text-sm"
            >
              Try Cooking Studio →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
