/**
 * Experience Feature - Configuration
 * Scene setup and constants for 3D experience
 */

import { SceneConfig, KitchenScene } from './types';

export const DEFAULT_SCENE_CONFIG: SceneConfig = {
  camera: {
    position: [0, 1.5, 3],
    target: [0, 1, 0],
    fov: 50,
    near: 0.1,
    far: 1000,
  },
  lights: [
    {
      type: 'directional',
      intensity: 1.2,
      position: [5, 8, 5],
      color: '#ffffff',
      castShadow: true,
    },
    {
      type: 'ambient',
      intensity: 0.6,
      color: '#ffffff',
    },
    {
      type: 'point',
      intensity: 0.8,
      position: [2, 2, 2],
      color: '#FFF8EE', // Warm cream light
    },
  ],
  backgroundColor: '#FFF8EE', // Brand warm cream
  enableShadows: true,
  enableAntialias: true,
  pixelRatio: typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1,
};

export const KITCHEN_MODELS: KitchenScene = {
  models: {
    kitchen: {
      path: '/models/kitchen/kitchen.glb',
      scale: [1, 1, 1],
      position: [0, 0, 0],
    },
    counter: {
      path: '/models/kitchen/counter.glb',
      scale: [1, 1, 1],
      position: [0, 0, 0],
      castShadow: true,
      receiveShadow: true,
    },
    stove: {
      path: '/models/kitchen/stove.glb',
      scale: [1, 1, 1],
      position: [0, 0, 1],
      castShadow: true,
      receiveShadow: true,
    },
    character: {
      path: '/models/character/cooking-companion.glb',
      scale: [1, 1, 1],
      position: [1, 0, 0],
      castShadow: true,
    },
    utensils: [
      {
        path: '/models/utensils/pot.glb',
        scale: [1, 1, 1],
        position: [0.5, 1, 1],
        castShadow: true,
      },
      {
        path: '/models/utensils/spoon.glb',
        scale: [0.8, 0.8, 0.8],
        position: [0.7, 1.2, 0.8],
        castShadow: true,
      },
    ],
  },
  config: DEFAULT_SCENE_CONFIG,
};

// Character animation clips
export const CHARACTER_ANIMATIONS = {
  idle: { name: 'idle', duration: 2, loop: true, clampWhenFinished: false },
  talking: { name: 'talking', duration: 1.5, loop: true, clampWhenFinished: false },
  gesturing: { name: 'gesturing', duration: 2, loop: false, clampWhenFinished: true },
  cooking: { name: 'cooking', duration: 3, loop: true, clampWhenFinished: false },
  pointing: { name: 'pointing', duration: 1.5, loop: false, clampWhenFinished: true },
  stirring: { name: 'stirring', duration: 2, loop: true, clampWhenFinished: false },
};

// Viewport-specific configurations
export const VIEWPORT_CONFIGS = {
  desktop: {
    width: 1920,
    height: 1080,
    dpr: 1,
  },
  tablet: {
    width: 768,
    height: 1024,
    dpr: 2,
  },
  mobile: {
    width: 375,
    height: 667,
    dpr: 2,
  },
};

// Quality presets for different devices
export const QUALITY_PRESETS = {
  high: {
    shadows: true,
    antialiasing: true,
    pixelRatio: 2,
  },
  medium: {
    shadows: true,
    antialiasing: true,
    pixelRatio: 1.5,
  },
  low: {
    shadows: false,
    antialiasing: false,
    pixelRatio: 1,
  },
};
