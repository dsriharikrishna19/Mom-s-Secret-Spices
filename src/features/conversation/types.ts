/**
 * Conversation Feature - Type Definitions
 * Used for scripted MVP and future AI integration
 */

export type SceneState =
  | "welcome"
  | "idle"
  | "listening"
  | "thinking"
  | "speaking"
  | "cooking"
  | "show_spice"
  | "product_spotlight"
  | "complete"
  | "error";

export type InteractionMode = "text" | "voice" | "hybrid";

export interface ConversationMessage {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  audioUrl?: string;
}

export interface SceneAction {
  type:
    | "camera_move"
    | "character_gesture"
    | "spice_pour"
    | "animation"
    | "product_show"
    | "recipe_step";
  target?: string;
  duration?: number; // in milliseconds
  animation?: string;
  payload?: Record<string, unknown>;
}

export interface StoryContext {
  currentScene: SceneState;
  messages: ConversationMessage[];
  selectedRecipeId?: string;
  currentStep?: number;
  spotlightProduct?: string;
  interactionMode: InteractionMode;
}

export interface ConversationResponse {
  message: string;
  sceneAction?: SceneAction;
  productSlug?: string;
  recipeStep?: number;
  shouldContinue: boolean;
  nextScene?: SceneState;
}

export interface Recipe {
  id: string;
  slug: string;
  name: string;
  description: string;
  servings: number;
  prepTime: number; // minutes
  cookTime: number; // minutes
  difficulty: "easy" | "medium" | "hard";
  image: string;
  ingredients: RecipeIngredient[];
  steps: RecipeStep[];
  productSpotlights: string[]; // Product IDs
}

export interface RecipeIngredient {
  name: string;
  quantity: number;
  unit: string;
  productId?: string;
  isFromMomSecrets?: boolean;
}

export interface RecipeStep {
  order: number;
  title: string;
  description: string;
  duration?: number; // seconds
  sceneAction?: string;
  animationKey?: string;
}
