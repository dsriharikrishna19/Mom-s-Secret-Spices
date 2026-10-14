/**
 * Experience Feature - 3D Scene Type Definitions
 * Used for Three.js and React Three Fiber integration
 */

export type ViewportMode = 'desktop' | 'tablet' | 'mobile';

export interface CameraConfig {
  position: [number, number, number];
  target: [number, number, number];
  fov: number;
  near: number;
  far: number;
}

export interface LightConfig {
  type: 'directional' | 'ambient' | 'point' | 'spot';
  intensity: number;
  position?: [number, number, number];
  color?: string;
  castShadow?: boolean;
}

export interface SceneConfig {
  camera: CameraConfig;
  lights: LightConfig[];
  backgroundColor: string;
  enableShadows: boolean;
  enableAntialias: boolean;
  pixelRatio: number;
}

export interface ModelConfig {
  path: string;
  scale: [number, number, number];
  position: [number, number, number];
  rotation?: [number, number, number];
  castShadow?: boolean;
  receiveShadow?: boolean;
}

export interface CharacterState {
  currentAnimation: string;
  isIdle: boolean;
  isSpeaking: boolean;
  gestureQueue: string[];
}

export interface KitchenScene {
  models: {
    kitchen: ModelConfig;
    counter: ModelConfig;
    stove: ModelConfig;
    character: ModelConfig;
    utensils: ModelConfig[];
  };
  config: SceneConfig;
}

export interface AnimationClip {
  name: string;
  duration: number;
  loop: boolean;
  clampWhenFinished: boolean;
}

export interface ParticleEffect {
  type: 'steam' | 'smoke' | 'spice' | 'sparkle';
  position: [number, number, number];
  duration: number;
  intensity: number;
}
