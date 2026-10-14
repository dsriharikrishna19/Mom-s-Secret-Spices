/**
 * Products Feature - Type Definitions
 */

export type ProductCategory = "spice" | "blend" | "seasoning" | "masala";

export interface ProductPackSize {
  id: string;
  weight: number;
  unit: "g" | "kg" | "ml" | "l";
  mrp: number;
  currency: "INR" | "USD";
  available: boolean;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: ProductCategory;
  image: string;
  packSizes: ProductPackSize[];
  ingredients: string[];
  certifications?: string[];
  healthBenefits?: string[];
  origin?: string;
  pricingStatus?: "verified" | "pending_trade_confirmation";
  priceNotice?: string;
  createdAt: Date;
}

export interface ProductFilters {
  category?: string;
  search?: string;
  sortBy?: "name" | "price" | "newest";
  sortOrder?: "asc" | "desc";
}

export interface ProductEnquiry {
  productName: string;
  packSize?: string;
  customerEmail?: string;
  message?: string;
}
