/**
 * Recipe Type Definitions
 * Used for cooking stories and guided experiences
 */

export interface Recipe {
  id: string;
  slug: string;
  name: string;
  description: string;
  servings: number;
  prepTime: number; // minutes
  cookTime: number; // minutes
  difficulty: 'easy' | 'medium' | 'hard';
  image: string;
  ingredients: RecipeIngredient[];
  steps: RecipeStep[];
  productSpotlights: string[]; // Product IDs to recommend
}

export interface RecipeIngredient {
  name: string;
  quantity: number;
  unit: string;
  productId?: string; // Link to Mom's Secret Spices product
  isFromMomSecrets?: boolean;
}

export interface RecipeStep {
  order: number;
  title: string;
  description: string;
  duration?: number; // seconds
  sceneAction?: string; // Trigger for 3D animation
  animationKey?: string; // Animation identifier
}
