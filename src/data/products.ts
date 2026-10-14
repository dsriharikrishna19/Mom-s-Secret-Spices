//Product Data — Synchronized with Verified 27 Product Catalog

import { Product } from "@/types/product";
import { PRODUCTS as FEATURE_PRODUCTS } from "@/features/products/data";

// Re-export synced products for compatibility with old imports
export const PRODUCTS: Product[] = FEATURE_PRODUCTS as unknown as Product[];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}
