"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { useDebounce } from "@/hooks";
import {
  SearchIcon,
  FilterIcon,
  ArrowRightIcon,
  Badge,
  LeafIcon,
  FlameIcon,
  UtensilsIcon,
  EmptyState,
} from "@/components/ui";
import { MotionCard } from "@/components/magicui/motion-landing";
import { getAllProducts } from "@/features/products";

export default function ProductCatalog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"name" | "price-asc" | "price-desc">(
    "name",
  );

  const products = getAllProducts();

  // Debounced search query via custom hook
  const debouncedSearch = useDebounce(searchQuery, 300);

  const categories = useMemo(() => {
    const cats = new Set(products.map((p) => p.category));
    return ["all", ...Array.from(cats)];
  }, [products]);

  const filteredProducts = useMemo(() => {
    const query = debouncedSearch.trim().toLowerCase();

    return products
      .filter((product) => {
        const matchesSearch =
          !query ||
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.ingredients.some((ing) => ing.toLowerCase().includes(query));
        const matchesCategory =
          selectedCategory === "all" || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => {
        if (sortBy === "name") {
          return a.name.localeCompare(b.name);
        }
        const priceA = a.packSizes[0]?.mrp || 0;
        const priceB = b.packSizes[0]?.mrp || 0;
        if (sortBy === "price-asc") return priceA - priceB;
        if (sortBy === "price-desc") return priceB - priceA;
        return 0;
      });
  }, [products, debouncedSearch, selectedCategory, sortBy]);

  return (
    <div className="flex flex-col gap-6 sm:gap-8">
      {/* Search & Filter Toolbar */}
      <div className="bg-white p-4 sm:p-5 rounded-xl border border-brand-sand/80 shadow-xs flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
        {/* Search Input */}
        <div className="relative flex-1 min-w-0">
          <SearchIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-brown/40 w-4 h-4" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search spices, blends, or ingredients..."
            className="w-full pl-10 pr-4 py-2.5 bg-brand-cream/40 rounded-xl border border-brand-sand text-xs sm:text-sm text-brand-brown placeholder:text-brand-brown/40 focus:outline-hidden focus:border-brand-terracotta focus:ring-1 focus:ring-brand-terracotta transition-all"
          />
        </div>

        {/* Filters and Sort */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Category Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize cursor-pointer transition-all whitespace-nowrap shrink-0 ${
                  selectedCategory === cat
                    ? "bg-brand-terracotta text-white shadow-2xs"
                    : "bg-brand-cream text-brand-brown/70 hover:bg-brand-sand/60"
                }`}
              >
                {cat === "all" ? "All Blends" : cat}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 pl-2 border-l border-brand-sand shrink-0">
            <FilterIcon className="w-3.5 h-3.5 text-brand-brown/60" />
            <select
              value={sortBy}
              aria-label="Sort spices"
              onChange={(e) =>
                setSortBy(e.target.value as "name" | "price-asc" | "price-desc")
              }
              className="bg-brand-cream/60 border border-brand-sand text-xs font-medium text-brand-brown rounded-lg px-2.5 py-1.5 focus:outline-hidden focus:border-brand-terracotta"
            >
              <option value="name">Alphabetical</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="text-xs font-medium text-brand-brown/60">
        Showing {filteredProducts.length} of {products.length} artisanal spices
      </div>

      {/* Grid or Empty State */}
      {filteredProducts.length === 0 ? (
        <EmptyState
          title="No spices matched your search"
          description="Try adjusting your search keywords or clear the category filter to see the complete Mom's Secret Spices collection."
          actionLabel="Reset Filters"
          onAction={() => {
            setSearchQuery("");
            setSelectedCategory("all");
          }}
        />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product, idx) => {
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
                index={idx % 6}
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
                    <Badge
                      variant="terracotta"
                      className="shadow-xs text-[11px]"
                    >
                      {product.packSizes[0]?.weight}
                      {product.packSizes[0]?.unit} pack
                    </Badge>
                    <Badge
                      variant="cream"
                      className="shadow-xs text-[11px] bg-white/90"
                    >
                      {product.category}
                    </Badge>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between gap-4">
                  <div className="flex flex-col gap-1.5">
                    <h2 className="font-heading text-lg sm:text-xl font-bold text-brand-brown group-hover:text-brand-terracotta transition-colors">
                      {product.name}
                    </h2>
                    <p className="text-xs sm:text-sm text-brand-brown/70 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Ingredients Preview */}
                  {product.ingredients && product.ingredients.length > 0 && (
                    <div className="pt-1 flex flex-col gap-1">
                      <p className="text-xs font-medium text-brand-brown/60 uppercase tracking-wider">
                        Pure Ingredients:
                      </p>
                      <p className="text-xs text-brand-brown/80 font-mono bg-brand-cream/80 p-2 rounded-lg border border-brand-sand/60 truncate">
                        {product.ingredients.join(" • ")}
                      </p>
                    </div>
                  )}

                  {/* Pricing & CTA */}
                  <div className="pt-3 border-t border-brand-sand/60 flex items-center justify-between gap-2">
                    <div>
                      {product.pricingStatus ===
                      "pending_trade_confirmation" ? (
                        <div>
                          <span className="text-[10px] text-amber-700 font-semibold block uppercase tracking-wider">
                            Trade Confirmation
                          </span>
                          <span className="text-xs font-semibold text-brand-brown/80">
                            Inquire for Rates
                          </span>
                        </div>
                      ) : (
                        <div>
                          <span className="text-xs text-brand-brown/60 block">
                            Starting from
                          </span>
                          <span className="text-lg sm:text-xl font-bold font-heading text-brand-terracotta">
                            ₹{product.packSizes[0]?.mrp.toFixed(2) || "N/A"}
                          </span>
                        </div>
                      )}
                    </div>
                    <Link
                      href={`/products/${product.slug}`}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-brand-terracotta/10 hover:bg-brand-terracotta text-brand-terracotta hover:text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors shrink-0 cursor-pointer"
                    >
                      <span>Details</span>
                      <ArrowRightIcon className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </MotionCard>
            );
          })}
        </div>
      )}
    </div>
  );
}
