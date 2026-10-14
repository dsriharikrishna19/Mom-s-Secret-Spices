/**
 * Conversation and Story State Type Definitions
 * Used for scripted MVP and future AI integration
 */

export type SceneState =
  | 'welcome'
  | 'idle'
  | 'listening'
  | 'thinking'
  | 'speaking'
  | 'cooking'
  | 'show_spice'
  | 'product_spotlight'
  | 'complete'
  | 'error';

export interface ConversationMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  audioUrl?: string;
}

export interface SceneAction {
  type: string;
  target?: string;
  duration?: number;
  animation?: string;
}

export interface StoryContext {
  currentScene: SceneState;
  messages: ConversationMessage[];
  selectedRecipeId?: string;
  currentStep?: number;
  spotlightProduct?: string;
}

export interface ConversationResponse {
  message: string;
  sceneAction?: SceneAction;
  productSlug?: string;
  recipeStep?: number;
  shouldContinue: boolean;
}
