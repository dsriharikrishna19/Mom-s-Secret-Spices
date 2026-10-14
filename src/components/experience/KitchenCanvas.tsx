"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { FlameIcon } from "@/components/ui/Icons";
import { createKitchenMeshes } from "./kitchenSceneBuilder";
import { createAromaParticles } from "./kitchenParticles";

interface KitchenCanvasProps {
  sceneState: string;
  activeSpice?: string;
  stepTitle?: string;
  potSimmering?: boolean;
}

export default function KitchenCanvas({
  sceneState,
  activeSpice,
  stepTitle,
  potSimmering = false,
}: KitchenCanvasProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [webglError, setWebglError] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.1;
      container.appendChild(renderer.domElement);
    } catch (e) {
      console.warn("WebGL not supported or context lost", e);
      requestAnimationFrame(() => setWebglError(true));
      return;
    }

    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#FFF8EE");

    const camera = new THREE.PerspectiveCamera(
      42,
      container.clientWidth / container.clientHeight,
      0.1,
      100,
    );
    
    const targetCamPos = new THREE.Vector3(0, 3.1, 5.6);
    if (sceneState === "welcome") {
      targetCamPos.set(0, 3.4, 6.2);
    } else if (sceneState === "show_spice" || activeSpice) {
      targetCamPos.set(-0.6, 2.7, 4.4);
    } else if (sceneState === "complete") {
      targetCamPos.set(0, 2.9, 5.2);
    }
    camera.position.copy(targetCamPos);
    camera.lookAt(0, 0.7, 0);

    // Lights
    const ambientLight = new THREE.AmbientLight("#FFEAC9", 1.0);
    scene.add(ambientLight);

    const windowLight = new THREE.DirectionalLight("#FFF4E0", 2.0);
    windowLight.position.set(5, 8, 4);
    windowLight.castShadow = true;
    scene.add(windowLight);

    const burnerLight = new THREE.PointLight("#FF6B35", potSimmering ? 2.5 : 0.8, 4);
    burnerLight.position.set(0, 0.35, 0.2);
    scene.add(burnerLight);

    // Meshes & Flame Ring
    const meshes = createKitchenMeshes(activeSpice);
    scene.add(meshes.counter);
    scene.add(meshes.stove);
    scene.add(meshes.burner);
    scene.add(meshes.pot);
    scene.add(meshes.rim);
    scene.add(meshes.handleLeft);
    scene.add(meshes.handleRight);
    scene.add(meshes.spiceJarsGroup);

    const flameGeo = new THREE.TorusGeometry(0.48, 0.025, 16, 36);
    const flameMat = new THREE.MeshBasicMaterial({
      color: "#FF8C42",
      transparent: true,
      opacity: potSimmering ? 0.85 : 0.3,
    });
    const flameRing = new THREE.Mesh(flameGeo, flameMat);
    flameRing.rotation.x = Math.PI / 2;
    flameRing.position.set(0, 0.2, 0.2);
    scene.add(flameRing);

    // Particles
    const particles = createAromaParticles(activeSpice);
    scene.add(particles.steamParticles);

    // Render loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      camera.position.x = targetCamPos.x + Math.sin(elapsedTime * 0.4) * 0.15;
      camera.position.y = targetCamPos.y + Math.cos(elapsedTime * 0.35) * 0.08;
      camera.lookAt(0, 0.75, 0);

      particles.updateParticles(elapsedTime);

      if (potSimmering) {
        const vibration = Math.sin(elapsedTime * 24) * 0.005;
        meshes.pot.position.y = 0.55 + vibration;
        meshes.rim.position.y = 0.92 + vibration;
        meshes.handleLeft.position.y = 0.75 + vibration;
        meshes.handleRight.position.y = 0.75 + vibration;
        burnerLight.intensity = 2.2 + Math.sin(elapsedTime * 14) * 0.4;
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      meshes.geometries.forEach((g) => g.dispose());
      meshes.materials.forEach((m) => m.dispose());
      flameGeo.dispose();
      flameMat.dispose();
      particles.dispose();
    };
  }, [sceneState, activeSpice, potSimmering]);

  if (webglError) {
    return (
      <div className="w-full max-w-7xl mx-auto aspect-16/9 bg-linear-to-br from-brand-sand/50 via-brand-cream to-brand-sand/40 rounded-xl border border-brand-sand flex flex-col items-center justify-center p-6 sm:p-8 text-center gap-2">
        <div className="w-12 h-12 rounded-xl bg-white/80 border border-brand-sand flex items-center justify-center text-brand-terracotta shadow-xs">
          <FlameIcon className="w-6 h-6 text-brand-terracotta" />
        </div>
        <h3 className="font-heading font-bold text-brand-brown text-base sm:text-lg">
          3D Cooking Studio
        </h3>
        <p className="text-xs sm:text-sm text-brand-brown/70 max-w-sm">
          {stepTitle || "Step into our Indian kitchen with authentic stone cookware and aroma tempering."}
        </p>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-16/9 md:aspect-21/9 rounded-xl overflow-hidden border border-brand-sand/80 shadow-inner bg-brand-cream">
      <div ref={mountRef} className="w-full h-full" />

      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-brand-sand shadow-2xs text-xs font-semibold text-brand-brown">
        <span className="w-2.5 h-2.5 rounded-full bg-brand-green animate-pulse" />
        <span className="capitalize">{sceneState} • Indian Home Kitchen</span>
      </div>

      {activeSpice && (
        <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-brand-brown/90 text-white backdrop-blur-md border border-brand-gold/40 text-xs font-medium shadow-md">
          <FlameIcon className="w-3.5 h-3.5 text-brand-gold" />
          <span>
            Tempering: <span className="font-bold text-brand-gold">{activeSpice}</span>
          </span>
        </div>
      )}
    </div>
  );
}
