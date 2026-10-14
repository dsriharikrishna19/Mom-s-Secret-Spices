/**
 * Recipe Data — MVP Placeholder
 * Replace with verified recipes
 *
 * TODO: Verify all recipe information:
 * - Recipe names and descriptions
 * - Ingredient quantities and units
 * - Cooking steps and timings
 * - Product recommendations
 * - Recipe photography
 */

import { Recipe } from "@/types/recipe";

export const RECIPES: Recipe[] = [
  {
    id: "recipe_001",
    slug: "golden-milk",
    name: "Golden Milk (Haldi Doodh)",
    description: "A warm, soothing turmeric-based milk drink for wellness.",
    servings: 1,
    prepTime: 5,
    cookTime: 5,
    difficulty: "easy",
    image: "/images/recipes/golden-milk.jpg",
    ingredients: [
      {
        name: "Milk",
        quantity: 1,
        unit: "cup",
      },
      {
        name: "Turmeric Powder",
        quantity: 1,
        unit: "tsp",
        productId: "product_001",
        isFromMomSecrets: true,
      },
      {
        name: "Honey",
        quantity: 1,
        unit: "tsp",
      },
    ],
    steps: [
      {
        order: 1,
        title: "Heat milk",
        description: "Pour milk into a pot and heat gently.",
        duration: 120,
        sceneAction: "camera_focus_pot",
        animationKey: "boiling_steam",
      },
      {
        order: 2,
        title: "Add turmeric",
        description: "Add turmeric powder to the warm milk.",
        duration: 60,
        sceneAction: "show_spice",
        animationKey: "spice_pour",
      },
      {
        order: 3,
        title: "Stir and serve",
        description: "Stir well and pour into a cup. Add honey to taste.",
        duration: 60,
        sceneAction: "product_spotlight",
        animationKey: "final_presentation",
      },
    ],
    productSpotlights: ["product_001"],
  },
];

// Helper function to get recipe by slug
export function getRecipeBySlug(slug: string): Recipe | undefined {
  return RECIPES.find((r) => r.slug === slug);
}

// Helper function to get recipe by ID
export function getRecipeById(id: string): Recipe | undefined {
  return RECIPES.find((r) => r.id === id);
}
