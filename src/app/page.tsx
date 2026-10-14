import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  SparklesIcon,
  FlameIcon,
  ChefHatIcon,
  HomeIcon,
} from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Home | Mom's Secret Spices",
  description:
    "Welcome to Mom's Secret Spices - Authentic Indian cooking experience with premium spices and AI culinary companion",
};

export default function HomePage() {
  return (
    <main className="flex-1 flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-14 md:pt-14 md:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-96 sm:h-96 bg-brand-gold/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-60 h-60 sm:w-72 sm:h-72 bg-brand-terracotta/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center flex flex-col gap-6 sm:gap-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-sand/60 border border-brand-sand text-brand-brown text-xs sm:text-sm font-medium shadow-2xs self-center">
            <SparklesIcon className="w-4 h-4 text-brand-terracotta" />
            <span>Artisanal Small-Batch Spices & Interactive Kitchen</span>
          </div>

          {/* Headline */}
          <div className="flex flex-col gap-2.5">
            <h1 className="font-heading text-2xl sm:text-2xl font-bold text-brand-brown tracking-tight leading-tight">
              Mom&apos;s Secret{" "}
              <span className="text-brand-terracotta block sm:inline">
                Spices
              </span>
            </h1>
            <p className="font-sans text-sm sm:text-base md:text-lg text-brand-brown/85 max-w-2xl mx-auto font-normal leading-relaxed">
              Experience authentic Indian home cooking with our{" "}
              <span className="font-semibold text-brand-brown">
                freshly milled spices
              </span>{" "}
              and an{" "}
              <span className="font-semibold text-brand-terracotta">
                AI cooking companion
              </span>
              .
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3.5 justify-center items-center pt-1">
            <Link
              href="/experience"
              className="w-full sm:w-auto px-6 py-3 bg-brand-terracotta hover:bg-[#8e3920] text-white font-semibold rounded-xl shadow-xs hover:shadow transition-all text-center text-sm"
            >
              Start Cooking Experience
            </Link>
            <Link
              href="/products"
              className="w-full sm:w-auto px-6 py-3 bg-white/80 hover:bg-white text-brand-brown font-semibold rounded-xl border border-brand-sand shadow-2xs hover:shadow-xs transition-all text-center text-sm"
            >
              Explore Products
            </Link>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-8 text-left">
            <div className="p-5 sm:p-6 rounded-xl bg-white/70 backdrop-blur-sm border border-brand-sand shadow-2xs hover:border-brand-terracotta/30 transition-all flex flex-col gap-2.5">
              <div className="w-11 h-11 rounded-lg bg-brand-cream flex items-center justify-center text-brand-terracotta border border-brand-sand shrink-0">
                <FlameIcon className="w-5 h-5 text-brand-terracotta" />
              </div>
              <h3 className="font-heading font-semibold text-base sm:text-lg text-brand-brown">
                Premium Quality
              </h3>
              <p className="text-xs sm:text-sm text-brand-brown/75 leading-relaxed">
                Directly sourced from trusted regional farms, sun-dried, and
                traditionally stone-ground for rich essential oils.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-xl bg-white/70 backdrop-blur-sm border border-brand-sand shadow-2xs hover:border-brand-terracotta/30 transition-all flex flex-col gap-2.5">
              <div className="w-11 h-11 rounded-lg bg-brand-cream flex items-center justify-center text-brand-terracotta border border-brand-sand shrink-0">
                <ChefHatIcon className="w-5 h-5 text-brand-terracotta" />
              </div>
              <h3 className="font-heading font-semibold text-base sm:text-lg text-brand-brown">
                AI Companion
              </h3>
              <p className="text-xs sm:text-sm text-brand-brown/75 leading-relaxed">
                Step-by-step guidance tailored to your kitchen pace with
                real-time spice pairing and cooking tips.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-xl bg-white/70 backdrop-blur-sm border border-brand-sand shadow-2xs hover:border-brand-terracotta/30 transition-all flex flex-col gap-2.5">
              <div className="w-11 h-11 rounded-lg bg-brand-cream flex items-center justify-center text-brand-green border border-brand-sand shrink-0">
                <HomeIcon className="w-5 h-5 text-brand-green" />
              </div>
              <h3 className="font-heading font-semibold text-base sm:text-lg text-brand-brown">
                Authentic Experience
              </h3>
              <p className="text-xs sm:text-sm text-brand-brown/75 leading-relaxed">
                Recreating the nostalgic aroma, taste, and emotional warmth of
                home-style secret family heirloom recipes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Official 27 Hot Selling Products Showcase Banner */}
      <section className="bg-brand-sand/40 border-y border-brand-sand py-10 md:py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 flex flex-col gap-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-terracotta/10 text-brand-terracotta border border-brand-terracotta/20 self-start">
              Official Collection
            </span>
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-brand-brown">
              27 Hot Selling Spice Blends & Powders
            </h2>
            <p className="text-xs sm:text-sm text-brand-brown/80 leading-relaxed">
              From everyday essentials like Sambar, Rasam, Turmeric, and Garam
              Masala to authentic South Indian specialties including
              Bisibelebath, Puliyogre, Vangi Bath, Chutney Podi, and Idli Podi.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-terracotta hover:bg-[#8e3920] text-white font-semibold rounded-xl shadow-xs transition-all text-xs sm:text-sm"
              >
                Browse Spice Catalog →
              </Link>
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919900161030"}?text=${encodeURIComponent(
                  "Hello Mom's Secret Spices! I am interested in distributorship / ordering.",
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-brand-cream border border-brand-sand text-brand-brown font-semibold rounded-xl shadow-2xs transition-all text-xs sm:text-sm"
              >
                Distributor Enquiry ↗
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-full max-w-xl aspect-3/4 sm:aspect-4/5 rounded-xl overflow-hidden border border-brand-sand shadow-sm bg-white group">
              <Image
                src="/spice-catalog-banner.jpg"
                alt="Mom's Secret Spices 27 Hot Selling Products Showcase"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 576px"
                className="object-contain group-hover:scale-102 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
