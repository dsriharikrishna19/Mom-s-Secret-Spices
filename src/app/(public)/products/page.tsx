import { Metadata } from "next";
import ProductCatalog from "@/components/products/ProductCatalog";
import Image from "next/image";
import { Badge, SparklesIcon } from "@/components/ui";

export const metadata: Metadata = {
  title: "Spices & Blends | Mom's Secret Spices",
  description:
    "Browse our premium collection of authentic Indian spices, stone-ground powders, and heirloom blends.",
};

export default function ProductsPage() {
  return (
    <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex flex-col gap-8">
      {/* Distributor Campaign Showcase Artwork with Frosted Glass Floating Info Overlay */}
      <div className="relative w-full rounded-2xl overflow-hidden border border-brand-sand shadow-md bg-brand-cream aspect-16/9">
        <Image
          src="/images/products/distributor-campaign-artwork.jpg"
          alt="Mom's Secret Spices distributor campaign scroll artwork by Akshaya Foods"
          fill
          priority
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="object-cover object-center"
        />

        {/* Authentic Translucent Glass Card Overlay at Bottom */}
        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 right-4 sm:right-auto max-w-sm sm:max-w-md bg-black/40 backdrop-blur-md p-4 sm:p-5 rounded-xl border border-white/20 shadow-2xl flex flex-col gap-2 z-10 text-white">
          <Badge
            variant="gold"
            className="self-start inline-flex items-center gap-1.5 shadow-xs text-xs bg-amber-500/20 text-slate-300 border-amber-400/30"
          >
            <SparklesIcon className="w-3.5 h-3.5 text-amber-300" />
            <span>Authentic & Freshly Packed</span>
          </Badge>
          <h1 className="font-heading text-lg sm:text-2xl font-bold text-brand-cream tracking-tight leading-tight drop-shadow-sm">
            Artisanal Spice Collection
          </h1>
          <p className="text-xs sm:text-sm text-brand-cream/85 leading-relaxed drop-shadow-xs">
            Crafted by Akshaya Foods using traditional Indian recipes. Featuring
            authentic spices and culinary blends prepared to preserve deep
            colors and rich aromas.
          </p>
        </div>
      </div>

      <ProductCatalog />
    </main>
  );
}
