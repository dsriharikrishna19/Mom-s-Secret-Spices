/**
 * Products Feature - Data
 * Static product catalogue (MVP - no database)
 * 
 * TODO: Replace with verified product information from business
 */

import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'product_001',
    slug: 'turmeric-powder',
    name: 'Turmeric Powder',
    description: 'Premium quality turmeric powder sourced from the finest farms.',
    category: 'spice',
    image: '/images/products/turmeric-powder.jpg',
    packSizes: [
      {
        id: 'size_001_100g',
        weight: 100,
        unit: 'g',
        mrp: 150,
        currency: 'INR',
        available: true,
      },
      {
        id: 'size_001_250g',
        weight: 250,
        unit: 'g',
        mrp: 350,
        currency: 'INR',
        available: true,
      },
      {
        id: 'size_001_500g',
        weight: 500,
        unit: 'g',
        mrp: 650,
        currency: 'INR',
        available: true,
      },
    ],
    ingredients: ['Turmeric'],
    certifications: ['Organic', 'Non-GMO'],
    healthBenefits: ['Anti-inflammatory', 'Antioxidant properties', 'Aids digestion'],
    origin: 'Telangana, India',
    createdAt: new Date('2026-01-01'),
  },
  {
    id: 'product_002',
    slug: 'garam-masala-blend',
    name: 'Garam Masala Blend',
    description: 'Traditional garam masala blend with aromatic spices.',
    category: 'blend',
    image: '/images/products/garam-masala.jpg',
    packSizes: [
      {
        id: 'size_002_100g',
        weight: 100,
        unit: 'g',
        mrp: 180,
        currency: 'INR',
        available: true,
      },
      {
        id: 'size_002_250g',
        weight: 250,
        unit: 'g',
        mrp: 420,
        currency: 'INR',
        available: true,
      },
    ],
    ingredients: ['Cardamom', 'Cinnamon', 'Cloves', 'Black Pepper', 'Bay Leaves'],
    certifications: [],
    healthBenefits: ['Improves digestion', 'Enhances flavor', 'Warming spice'],
    origin: 'Kerala, India',
    createdAt: new Date('2026-01-01'),
  },
  {
    id: 'product_003',
    slug: 'coriander-powder',
    name: 'Coriander Powder',
    description: 'Fresh ground coriander powder with aromatic notes.',
    category: 'spice',
    image: '/images/products/coriander-powder.jpg',
    packSizes: [
      {
        id: 'size_003_100g',
        weight: 100,
        unit: 'g',
        mrp: 120,
        currency: 'INR',
        available: true,
      },
    ],
    ingredients: ['Coriander Seeds'],
    certifications: [],
    healthBenefits: ['Rich in antioxidants', 'Aids digestion'],
    origin: 'Rajasthan, India',
    createdAt: new Date('2026-01-01'),
  },
];

/**
 * Get product by slug
 */
export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

/**
 * Get product by ID
 */
export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

/**
 * Get all unique categories
 */
export function getCategories(): string[] {
  const categories = new Set(PRODUCTS.map((p) => p.category));
  return Array.from(categories);
}

/**
 * Get all products (with optional filtering)
 */
export function getAllProducts(): Product[] {
  return PRODUCTS;
}
