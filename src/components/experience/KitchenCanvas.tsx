"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { FlameIcon } from "@/components/ui/Icons";

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

    // Check WebGL availability
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

    // Scene & Camera
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#FFF8EE");

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 3.5, 7.5);
    camera.lookAt(0, 0.8, 0);

    // Warm Ambient and Directional Kitchen Light
    const ambientLight = new THREE.AmbientLight("#FFEAC9", 0.9);
    scene.add(ambientLight);

    const windowLight = new THREE.DirectionalLight("#FFF4E0", 1.8);
    windowLight.position.set(5, 8, 4);
    windowLight.castShadow = true;
    windowLight.shadow.mapSize.width = 1024;
    windowLight.shadow.mapSize.height = 1024;
    scene.add(windowLight);

    // Countertop / Kitchen Island
    const counterGeo = new THREE.BoxGeometry(6, 0.4, 3);
    const counterMat = new THREE.MeshStandardMaterial({
      color: "#F0E2CF",
      roughness: 0.35,
      metalness: 0.05,
    });
    const counter = new THREE.Mesh(counterGeo, counterMat);
    counter.position.set(0, -0.2, 0);
    counter.receiveShadow = true;
    scene.add(counter);

    // Cooking Stove Platform (Dark Charcoal Stone)
    const stoveGeo = new THREE.BoxGeometry(2.4, 0.15, 1.8);
    const stoveMat = new THREE.MeshStandardMaterial({
      color: "#2B2625",
      roughness: 0.8,
    });
    const stove = new THREE.Mesh(stoveGeo, stoveMat);
    stove.position.set(0, 0.075, 0.2);
    stove.receiveShadow = true;
    scene.add(stove);

    // Burner Ring (Brass / Gold Accent)
    const burnerGeo = new THREE.TorusGeometry(0.55, 0.04, 16, 40);
    const burnerMat = new THREE.MeshStandardMaterial({
      color: "#E8A33A",
      metalness: 0.8,
      roughness: 0.2,
    });
    const burner = new THREE.Mesh(burnerGeo, burnerMat);
    burner.rotation.x = Math.PI / 2;
    burner.position.set(0, 0.16, 0.2);
    scene.add(burner);

    // Cooking Pot (Traditional Handi / Kadai - Terracotta & Brass Bronze)
    const potGeo = new THREE.CylinderGeometry(0.65, 0.45, 0.7, 32);
    const potMat = new THREE.MeshStandardMaterial({
      color: "#A9472A",
      metalness: 0.3,
      roughness: 0.4,
    });
    const pot = new THREE.Mesh(potGeo, potMat);
    pot.position.set(0, 0.52, 0.2);
    pot.castShadow = true;
    scene.add(pot);

    // Pot Rim
    const rimGeo = new THREE.TorusGeometry(0.66, 0.04, 16, 32);
    const rimMat = new THREE.MeshStandardMaterial({
      color: "#E8A33A",
      metalness: 0.7,
      roughness: 0.3,
    });
    const rim = new THREE.Mesh(rimGeo, rimMat);
    rim.rotation.x = Math.PI / 2;
    rim.position.set(0, 0.87, 0.2);
    scene.add(rim);

    // Spice Jars on the Shelf (Traditional Brass Masala Dabba & Glass Jars)
    const spiceJarsGroup = new THREE.Group();
    const jarColors = ["#E8A33A", "#A9472A", "#496844", "#C67D38"];
    jarColors.forEach((color, i) => {
      const jarGeo = new THREE.CylinderGeometry(0.18, 0.18, 0.45, 24);
      const jarMat = new THREE.MeshStandardMaterial({
        color,
        roughness: 0.3,
        metalness: 0.4,
      });
      const jar = new THREE.Mesh(jarGeo, jarMat);
      jar.position.set(-1.8 + i * 0.45, 0.22, -0.6);
      jar.castShadow = true;
      spiceJarsGroup.add(jar);

      // Brass lid
      const lidGeo = new THREE.CylinderGeometry(0.2, 0.2, 0.06, 24);
      const lidMat = new THREE.MeshStandardMaterial({
        color: "#E8A33A",
        metalness: 0.8,
        roughness: 0.2,
      });
      const lid = new THREE.Mesh(lidGeo, lidMat);
      lid.position.set(-1.8 + i * 0.45, 0.48, -0.6);
      spiceJarsGroup.add(lid);
    });
    scene.add(spiceJarsGroup);

    // Floating Golden/Spice Atmosphere Particles (Steam & Aroma)
    const particleCount = 120;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 1.8;
      positions[i * 3 + 1] = 0.8 + Math.random() * 2.2;
      positions[i * 3 + 2] = 0.2 + (Math.random() - 0.5) * 1.5;
      velocities[i] = 0.008 + Math.random() * 0.015;
    }

    particleGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const particleMat = new THREE.PointsMaterial({
      color: activeSpice?.includes("turmeric") ? "#E8A33A" : "#F0E2CF",
      size: 0.045,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    const steamParticles = new THREE.Points(particleGeo, particleMat);
    scene.add(steamParticles);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Gentle camera sway
      camera.position.x = Math.sin(elapsedTime * 0.3) * 0.3;
      camera.position.y = 3.5 + Math.cos(elapsedTime * 0.4) * 0.1;
      camera.lookAt(0, 0.8, 0);

      // Steam Particle rising motion
      const posArray = particleGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        posArray[i * 3 + 1] += velocities[i];
        // Swirl around
        posArray[i * 3] += Math.sin(elapsedTime * 2 + i) * 0.002;

        if (posArray[i * 3 + 1] > 3.2) {
          posArray[i * 3 + 1] = 0.85;
          posArray[i * 3] = (Math.random() - 0.5) * 0.8;
          posArray[i * 3 + 2] = 0.2 + (Math.random() - 0.5) * 0.8;
        }
      }
      particleGeo.attributes.position.needsUpdate = true;

      // Pot subtle vibration when simmering
      if (potSimmering) {
        pot.position.y = 0.52 + Math.sin(elapsedTime * 24) * 0.005;
        rim.position.y = 0.87 + Math.sin(elapsedTime * 24) * 0.005;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      counterGeo.dispose();
      counterMat.dispose();
      stoveGeo.dispose();
      stoveMat.dispose();
      potGeo.dispose();
      potMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, [sceneState, activeSpice, potSimmering]);

  if (webglError) {
    return (
      <div className="w-full aspect-16/9 bg-linear-to-br from-brand-sand/50 via-brand-cream to-brand-sand/40 rounded-2xl border border-brand-sand flex flex-col items-center justify-center p-8 text-center">
        <span className="text-5xl mb-3">🍳</span>
        <h3 className="font-heading font-bold text-brand-brown text-lg">
          3D Cooking Studio
        </h3>
        <p className="text-sm text-brand-brown/70 max-w-sm mt-1">
          {stepTitle || "Step into our Indian kitchen with authentic stone cookware and aroma tempering."}
        </p>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-16/9 rounded-3xl overflow-hidden border border-brand-sand/80 shadow-inner bg-brand-cream">
      <div ref={mountRef} className="w-full h-full" />

      {/* Floating Status Badge Overlay */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-brand-sand shadow-2xs text-xs font-semibold text-brand-brown">
        <span className="w-2.5 h-2.5 rounded-full bg-brand-green animate-pulse" />
        <span className="capitalize">{sceneState} • Indian Home Kitchen</span>
      </div>

      {/* Active Spice Particle Indicator */}
      {activeSpice && (
        <div className="absolute bottom-4 right-4 z-10 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-brand-brown/90 text-white backdrop-blur-md border border-brand-gold/40 text-xs font-medium shadow-md">
          <FlameIcon className="w-3.5 h-3.5 text-brand-gold" />
          <span>Tempering: <span className="font-bold text-brand-gold">{activeSpice}</span></span>
        </div>
      )}
    </div>
  );
}
