"use client";

import Link from "next/link";
import Image from "next/image";
import {
  SparklesIcon,
  FlameIcon,
  LeafIcon,
  UtensilsIcon,
  ArrowRightIcon,
} from "@/components/ui/Icons";
import { Badge } from "@/components/ui/Badge";
import { MotionLanding, MotionCard } from "@/components/magicui";
import { PRODUCTS } from "@/features/products";

export function FeaturedSpicesSection() {
  const featuredProducts = PRODUCTS.slice(0, 3);

  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex flex-col gap-8 sm:gap-10">
      <MotionLanding
        direction="up"
        className="flex flex-col sm:flex-row sm:items-end justify-between gap-4"
      >
        <div className="flex flex-col gap-2 max-w-2xl">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-terracotta">
            <SparklesIcon className="w-3.5 h-3.5" />
            <span>Direct From Our Milling Unit</span>
          </span>
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-brand-brown">
            Featured Artisanal Spices
          </h2>
          <p className="text-xs sm:text-sm text-brand-brown/75 leading-relaxed">
            Every pack is crafted following traditional homestyle recipes by
            Akshaya Foods, prepared to bring authentic flavor to everyday meals.
          </p>
        </div>
        <Link
          href="/products"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-brand-terracotta hover:underline shrink-0 self-start sm:self-auto"
        >
          <span>View All 27 Products</span>
          <ArrowRightIcon className="w-3.5 h-3.5" />
        </Link>
      </MotionLanding>

      {/* Product Grid with MotionCard Stagger */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {featuredProducts.map((product, idx) => {
          const isChilliOrHot =
            product.slug.includes("chilli") ||
            product.slug.includes("pepper") ||
            product.slug.includes("garam");
          const isHerbalOrLeafy =
            product.slug.includes("coriander") ||
            product.slug.includes("kasuri") ||
            product.slug.includes("podi");

          return (
            <MotionCard
              key={product.id}
              index={idx}
              direction="up"
              className="flex flex-col bg-white rounded-xl border border-brand-sand/80 shadow-xs hover:shadow-md hover:border-brand-terracotta/40 transition-all overflow-hidden group"
            >
              {/* Visual Header - Full Card Image Presentation */}
              <div className="aspect-square bg-brand-cream/40 flex flex-col items-center justify-center border-b border-brand-sand/50 relative overflow-hidden">
                {product.image && !product.image.includes("placeholder") ? (
                  <Image
                    src={product.image}
                    alt={`${product.name} glass spice jar with black cap`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = "none";
                    }}
                  />
                ) : (
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/90 border border-brand-sand shadow-xs flex items-center justify-center">
                    {isChilliOrHot ? (
                      <FlameIcon className="w-8 h-8 sm:w-10 sm:h-10 text-brand-terracotta" />
                    ) : isHerbalOrLeafy ? (
                      <LeafIcon className="w-8 h-8 sm:w-10 sm:h-10 text-brand-green" />
                    ) : (
                      <UtensilsIcon className="w-8 h-8 sm:w-10 sm:h-10 text-brand-gold" />
                    )}
                  </div>
                )}

                {/* Clean Floating Badges */}
                <div className="absolute bottom-3 left-3 flex gap-1.5 z-10 backdrop-blur-xs">
                  <Badge variant="terracotta" className="shadow-xs text-[11px]">
                    {product.packSizes[0]?.weight}
                    {product.packSizes[0]?.unit} pack
                  </Badge>
                  <Badge
                    variant="cream"
                    className="shadow-xs text-[11px] bg-white/90 capitalize"
                  >
                    {product.category}
                  </Badge>
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
                    <span className="text-xs text-brand-brown/60 block">
                      Starting MRP
                    </span>
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
            </MotionCard>
          );
        })}
      </div>
    </section>
  );
}
