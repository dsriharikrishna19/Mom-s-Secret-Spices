import * as THREE from "three";

export function createAromaParticles(activeSpice?: string) {
  const particleCount = 140;
  const particleGeo = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const velocities = new Float32Array(particleCount);

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 1.6;
    positions[i * 3 + 1] = 0.9 + Math.random() * 2.2;
    positions[i * 3 + 2] = 0.2 + (Math.random() - 0.5) * 1.4;
    velocities[i] = 0.009 + Math.random() * 0.016;
  }

  particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

  const particleColor = activeSpice?.includes("turmeric")
    ? "#E8A33A"
    : activeSpice?.includes("chilli")
      ? "#A9472A"
      : "#F0E2CF";

  const particleMat = new THREE.PointsMaterial({
    color: particleColor,
    size: 0.048,
    transparent: true,
    opacity: 0.7,
    blending: THREE.AdditiveBlending,
  });

  const steamParticles = new THREE.Points(particleGeo, particleMat);

  const updateParticles = (elapsedTime: number) => {
    const posArray = particleGeo.attributes.position.array as Float32Array;
    for (let i = 0; i < particleCount; i++) {
      posArray[i * 3 + 1] += velocities[i];
      posArray[i * 3] += Math.sin(elapsedTime * 2.2 + i) * 0.0025;

      if (posArray[i * 3 + 1] > 3.3) {
        posArray[i * 3 + 1] = 0.9;
        posArray[i * 3] = (Math.random() - 0.5) * 0.7;
        posArray[i * 3 + 2] = 0.2 + (Math.random() - 0.5) * 0.7;
      }
    }
    particleGeo.attributes.position.needsUpdate = true;
  };

  return {
    steamParticles,
    updateParticles,
    dispose: () => {
      particleGeo.dispose();
      particleMat.dispose();
    },
  };
}
