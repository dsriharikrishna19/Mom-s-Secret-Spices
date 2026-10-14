/**
 * Conversation Feature - Scripted Stories & Recipes Data
 * Static data for MVP (Phase 7)
 *
 * TODO: Add more recipes and conversation branches
 */

import { Recipe } from "./types";

export const RECIPES: Recipe[] = [
  {
    id: "recipe_001",
    slug: "golden-milk",
    name: "Golden Milk (Haldi Doodh)",
    description:
      "A warm, soothing turmeric-based milk drink for wellness and immunity.",
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
        name: "Ginger",
        quantity: 1,
        unit: "inch piece",
      },
      {
        name: "Honey",
        quantity: 1,
        unit: "tsp",
      },
      {
        name: "Black Pepper",
        quantity: 1,
        unit: "pinch",
      },
    ],
    steps: [
      {
        order: 1,
        title: "Heat milk",
        description: "Pour milk into a pot and heat gently over medium heat.",
        duration: 120,
        sceneAction: "camera_focus_pot",
        animationKey: "pot_on_stove",
      },
      {
        order: 2,
        title: "Add turmeric",
        description: "Add turmeric powder to the warm milk and stir well.",
        duration: 60,
        sceneAction: "show_spice",
        animationKey: "spice_pour_turmeric",
      },
      {
        order: 3,
        title: "Add ginger",
        description: "Add grated ginger for extra warmth and flavor.",
        duration: 45,
        sceneAction: "animation",
        animationKey: "ginger_add",
      },
      {
        order: 4,
        title: "Simmer",
        description: "Let it simmer for 2-3 minutes without boiling.",
        duration: 120,
        sceneAction: "animation",
        animationKey: "milk_simmer",
      },
      {
        order: 5,
        title: "Strain and serve",
        description:
          "Pour into a cup, add honey and a pinch of black pepper. Stir and enjoy.",
        duration: 60,
        sceneAction: "product_show",
        animationKey: "final_presentation",
      },
    ],
    productSpotlights: ["product_001"],
  },
  {
    id: "recipe_002",
    slug: "dal-tadka",
    name: "Dal Tadka (Tempered Lentils)",
    description: "Classic Indian lentil curry with aromatic tempering spices.",
    servings: 4,
    prepTime: 10,
    cookTime: 30,
    difficulty: "medium",
    image: "/images/recipes/dal-tadka.jpg",
    ingredients: [
      {
        name: "Red Lentils",
        quantity: 1,
        unit: "cup",
      },
      {
        name: "Turmeric Powder",
        quantity: 0.5,
        unit: "tsp",
        productId: "product_001",
        isFromMomSecrets: true,
      },
      {
        name: "Garam Masala",
        quantity: 0.5,
        unit: "tsp",
        productId: "product_002",
        isFromMomSecrets: true,
      },
      {
        name: "Coriander Powder",
        quantity: 0.5,
        unit: "tsp",
        productId: "product_003",
        isFromMomSecrets: true,
      },
      {
        name: "Onion",
        quantity: 1,
        unit: "medium",
      },
      {
        name: "Tomato",
        quantity: 1,
        unit: "medium",
      },
      {
        name: "Ghee",
        quantity: 2,
        unit: "tbsp",
      },
      {
        name: "Cumin Seeds",
        quantity: 0.5,
        unit: "tsp",
      },
    ],
    steps: [
      {
        order: 1,
        title: "Cook lentils",
        description: "Boil lentils with turmeric powder until soft.",
        duration: 300,
        sceneAction: "camera_move",
        animationKey: "pot_boiling",
      },
      {
        order: 2,
        title: "Prepare tempering",
        description: "Heat ghee in a pan and add cumin seeds.",
        duration: 60,
        sceneAction: "animation",
        animationKey: "tempering_start",
      },
      {
        order: 3,
        title: "Cook aromatics",
        description: "Add onions and tomatoes, cook until soft.",
        duration: 180,
        sceneAction: "animation",
        animationKey: "onion_frying",
      },
      {
        order: 4,
        title: "Add spices",
        description: "Add garam masala and coriander powder.",
        duration: 60,
        sceneAction: "show_spice",
        animationKey: "spice_blend",
      },
      {
        order: 5,
        title: "Combine",
        description: "Pour the tempering into cooked lentils and stir well.",
        duration: 120,
        sceneAction: "animation",
        animationKey: "tempering_combine",
      },
    ],
    productSpotlights: ["product_001", "product_002", "product_003"],
  },
];

/**
 * Get recipe by slug
 */
export function getRecipeBySlug(slug: string): Recipe | undefined {
  return RECIPES.find((r) => r.slug === slug);
}

/**
 * Get recipe by ID
 */
export function getRecipeById(id: string): Recipe | undefined {
  return RECIPES.find((r) => r.id === id);
}

/**
 * Get all recipes
 */
export function getAllRecipes(): Recipe[] {
  return RECIPES;
}

/**
 * Get recipes by difficulty
 */
export function getRecipesByDifficulty(difficulty: string): Recipe[] {
  return RECIPES.filter((r) => r.difficulty === difficulty);
}
