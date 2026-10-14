/**
 * Products Feature - Consolidated Verified Catalog (27 Hot-Selling Products)
 * Sourced directly from Akshaya Foods & Mom's Secret Spices Official Price List
 */

import { Product } from "./types";
import { PRODUCTS_CATALOG_PART1 } from "./productsCatalogPart1";
import { PRODUCTS_CATALOG_PART2 } from "./productsCatalogPart2";
import { PRODUCTS_CATALOG_PART3 } from "./productsCatalogPart3";

export const PRODUCTS: Product[] = [
  ...PRODUCTS_CATALOG_PART1,
  ...PRODUCTS_CATALOG_PART2,
  ...PRODUCTS_CATALOG_PART3,
];

// Helper function to get product by slug
export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

// Helper function to get product by ID
export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

// Helper function to get all products
export function getAllProducts(): Product[] {
  return PRODUCTS;
}

// Helper function to get products by category
export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return PRODUCTS;
  return PRODUCTS.filter((p) => p.category === category);
}

// Helper function to get categories
export function getCategories(): string[] {
  const cats = new Set(PRODUCTS.map((p) => p.category));
  return Array.from(cats);
}

// Helper function to get featured products
export function getFeaturedProducts(limit = 6): Product[] {
  return PRODUCTS.slice(0, limit);
}
