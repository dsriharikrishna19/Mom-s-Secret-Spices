/**
 * Products Feature - Utility Functions
 */

import { Product, ProductFilters } from "./types";
import { PRODUCTS } from "./data";

/**
 * Filter and sort products based on criteria
 */
export function filterAndSortProducts(filters: ProductFilters): Product[] {
  let filtered = [...PRODUCTS];

  // Filter by category
  if (filters.category) {
    filtered = filtered.filter((p) => p.category === filters.category);
  }

  // Filter by search term (name or description)
  if (filters.search) {
    const searchLower = filters.search.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.name.toLowerCase().includes(searchLower) ||
        p.description.toLowerCase().includes(searchLower) ||
        p.ingredients.some((i) => i.toLowerCase().includes(searchLower)),
    );
  }

  // Sort
  const sortBy = filters.sortBy || "name";
  const sortOrder = filters.sortOrder || "asc";

  filtered.sort((a, b) => {
    let comparison = 0;

    if (sortBy === "name") {
      comparison = a.name.localeCompare(b.name);
    } else if (sortBy === "price") {
      const priceA = a.packSizes[0]?.mrp || 0;
      const priceB = b.packSizes[0]?.mrp || 0;
      comparison = priceA - priceB;
    } else if (sortBy === "newest") {
      comparison =
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }

    return sortOrder === "asc" ? comparison : -comparison;
  });

  return filtered;
}

/**
 * Get the lowest price across all pack sizes
 */
export function getLowestPrice(product: Product): number | null {
  if (!product.packSizes.length) return null;
  return Math.min(...product.packSizes.map((p) => p.mrp));
}

/**
 * Format price for display
 */
export function formatPrice(price: number, currency: string = "INR"): string {
  if (currency === "INR") {
    return `₹${price.toFixed(0)}`;
  }
  return `$${price.toFixed(2)}`;
}

/**
 * Get WhatsApp enquiry URL
 */
export function getWhatsAppEnquiryUrl(
  productName: string,
  packSize?: string,
): string {
  let message = `Hi! I'm interested in ${productName}`;
  if (packSize) {
    message += ` (${packSize})`;
  }
  message += ". Could you provide more details?";

  const encoded = encodeURIComponent(message);
  // TODO: Replace with actual WhatsApp number from business
  const WHATSAPP_NUMBER =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "91xxxxxxxxxx";

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

/**
 * Get email enquiry details
 */
export function getEmailEnquiry(productName: string, packSize?: string) {
  const subject = encodeURIComponent(`Enquiry: ${productName}`);
  const body = encodeURIComponent(
    `Hi,\n\nI'm interested in ${productName}${
      packSize ? ` (${packSize})` : ""
    }.\n\nCould you provide more information?\n\nThanks`,
  );

  // TODO: Replace with actual email from business
  const EMAIL = process.env.NEXT_PUBLIC_EMAIL || "contact@momssecretspices.com";

  return {
    mailto: `mailto:${EMAIL}?subject=${subject}&body=${body}`,
    subject,
    body,
  };
}

/**
 * Calculate total products count
 */
export function getTotalProductsCount(): number {
  return PRODUCTS.length;
}

/**
 * Get products by category
 */
export function getProductsByCategory(category: string): Product[] {
  return PRODUCTS.filter((p) => p.category === category);
}
