/**
 * Product Data — MVP Placeholder
 * Replace with verified product information
 *
 * TODO: Verify all information with business:
 * - Product names
 * - Pack sizes and weights
 * - Prices (MRP)
 * - Ingredients and certifications
 * - Product photography
 */

import { Product } from "@/types/product";

export const PRODUCTS: Product[] = [
  {
    id: "product_001",
    slug: "turmeric-powder",
    name: "Turmeric Powder",
    description:
      "Premium quality turmeric powder sourced from the finest farms.",
    category: "spice",
    image: "/images/products/turmeric-powder.jpg",
    packSizes: [
      {
        id: "size_001_100g",
        weight: 100,
        unit: "g",
        mrp: 150,
        currency: "INR",
        available: true,
      },
      {
        id: "size_001_250g",
        weight: 250,
        unit: "g",
        mrp: 350,
        currency: "INR",
        available: true,
      },
    ],
    ingredients: ["Turmeric"],
    certifications: [],
    healthBenefits: ["Anti-inflammatory", "Antioxidant properties"],
    origin: "India",
    createdAt: new Date("2026-01-01"),
  },
  {
    id: "product_002",
    slug: "garam-masala-blend",
    name: "Garam Masala Blend",
    description: "Traditional garam masala blend with aromatic spices.",
    category: "blend",
    image: "/images/products/garam-masala.jpg",
    packSizes: [
      {
        id: "size_002_100g",
        weight: 100,
        unit: "g",
        mrp: 180,
        currency: "INR",
        available: true,
      },
    ],
    ingredients: [
      "Cardamom",
      "Cinnamon",
      "Cloves",
      "Black Pepper",
      "Bay Leaves",
    ],
    certifications: [],
    healthBenefits: ["Improves digestion", "Enhances flavor"],
    origin: "India",
    createdAt: new Date("2026-01-01"),
  },
];

// Helper function to get product by slug
export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

// Helper function to get product by ID
export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

// Helper function to get all products by category
export function getProductsByCategory(category: string): Product[] {
  return PRODUCTS.filter((p) => p.category === category);
}
