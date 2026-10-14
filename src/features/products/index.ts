/**
 * Products Feature - Barrel Export
 * Simplifies imports: import { Product, getProductBySlug } from '@/features/products'
 */

export type {
  Product,
  ProductPackSize,
  ProductFilters,
  ProductEnquiry,
} from "./types";
export {
  PRODUCTS,
  getProductBySlug,
  getProductById,
  getCategories,
  getAllProducts,
} from "./data";
export {
  filterAndSortProducts,
  getLowestPrice,
  formatPrice,
  getWhatsAppEnquiryUrl,
  getEmailEnquiry,
  getTotalProductsCount,
  getProductsByCategory,
} from "./utils";
