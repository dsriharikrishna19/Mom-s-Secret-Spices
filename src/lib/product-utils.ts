/**
 * Product Utility Functions
 * Used across the application for product-related operations
 */

import { Product, ProductCatalogueFilter } from '@/types/product';
import { PRODUCTS } from '@/data/products';

/**
 * Filter and sort products based on criteria
 */
export function filterAndSortProducts(
  filters: ProductCatalogueFilter
): Product[] {
  let filtered = PRODUCTS;

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
        p.description.toLowerCase().includes(searchLower)
    );
  }

  // Sort
  const sortBy = filters.sortBy || 'name';
  const sortOrder = filters.sortOrder || 'asc';

  filtered.sort((a, b) => {
    let comparison = 0;

    if (sortBy === 'name') {
      comparison = a.name.localeCompare(b.name);
    } else if (sortBy === 'price') {
      const priceA = a.packSizes[0]?.mrp || 0;
      const priceB = b.packSizes[0]?.mrp || 0;
      comparison = priceA - priceB;
    } else if (sortBy === 'newest') {
      comparison =
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }

    return sortOrder === 'asc' ? comparison : -comparison;
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
export function formatPrice(
  price: number,
  currency: string = 'INR'
): string {
  if (currency === 'INR') {
    return `₹${price.toFixed(0)}`;
  }
  return `$${price.toFixed(2)}`;
}

/**
 * Get WhatsApp enquiry URL
 */
export function getWhatsAppEnquiryUrl(
  productName: string,
  packSize?: string
): string {
  let message = `Hi! I'm interested in ${productName}`;
  if (packSize) {
    message += ` (${packSize})`;
  }
  message += '. Could you provide more details?';

  // Encode the message for URL
  const encoded = encodeURIComponent(message);
  // Replace with actual WhatsApp number when business provides it
  const WHATSAPP_NUMBER = '91xxxxxxxxxx'; // Placeholder

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

/**
 * Get email enquiry subject and body
 */
export function getEmailEnquiry(productName: string, packSize?: string) {
  const subject = encodeURIComponent(`Enquiry: ${productName}`);
  const body = encodeURIComponent(
    `Hi,\n\nI'm interested in ${productName}${
      packSize ? ` (${packSize})` : ''
    }.\n\nCould you provide more information?\n\nThanks`
  );

  // Replace with actual email when business provides it
  const EMAIL = 'contact@momssecretspices.com'; // Placeholder

  return {
    mailto: `mailto:${EMAIL}?subject=${subject}&body=${body}`,
    subject,
    body,
  };
}
