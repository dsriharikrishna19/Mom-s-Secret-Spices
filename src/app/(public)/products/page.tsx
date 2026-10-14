import { Metadata } from "next";
import { getAllProducts } from "@/features/products";
import ProductCatalog from "@/components/products/ProductCatalog";
import { Badge, SparklesIcon } from "@/components/ui";

export const metadata: Metadata = {
  title: "Spices & Blends | Mom's Secret Spices",
  description:
    "Browse our premium collection of authentic Indian spices, stone-ground powders, and heirloom blends.",
};

export default function ProductsPage() {
  const products = getAllProducts();

  return (
    <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      <div className="max-w-3xl mb-10">
        <Badge variant="gold" className="mb-3 inline-flex items-center gap-1.5">
          <SparklesIcon className="w-3.5 h-3.5 text-brand-terracotta" />
          <span>Farm-Direct & Stone-Ground</span>
        </Badge>
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-brand-brown tracking-tight mb-4">
          Artisanal Spice Collection
        </h1>
        <p className="text-base sm:text-lg text-brand-brown/75 leading-relaxed">
          Carefully sourced from organic certified regional farms, hand-cleaned, and
          slow stone-ground to preserve volatile essential oils, deep colors, and rich aromas.
        </p>
      </div>

      <ProductCatalog initialProducts={products} />
    </main>
  );
}
