/**
 * Product Type Definitions
 * Used across product pages, catalogue, and recommendations
 */

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: 'spice' | 'blend' | 'seasoning' | 'masala';
  image: string;
  packSizes: PackSize[];
  ingredients: string[];
  certifications?: string[];
  healthBenefits?: string[];
  origin?: string;
  createdAt: Date;
}

export interface PackSize {
  id: string;
  weight: number;
  unit: 'g' | 'kg' | 'ml' | 'l';
  mrp: number;
  currency: 'INR' | 'USD';
  available: boolean;
}

export interface ProductCatalogueFilter {
  category?: string;
  search?: string;
  sortBy?: 'name' | 'price' | 'newest';
  sortOrder?: 'asc' | 'desc';
}
