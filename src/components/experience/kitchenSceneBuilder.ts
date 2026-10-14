import * as THREE from "three";

export function createKitchenMeshes(activeSpice?: string) {
  // Countertop / Kitchen Island
  const counterGeo = new THREE.BoxGeometry(6.4, 0.4, 3.2);
  const counterMat = new THREE.MeshStandardMaterial({
    color: "#EFE1CE",
    roughness: 0.3,
    metalness: 0.05,
  });
  const counter = new THREE.Mesh(counterGeo, counterMat);
  counter.position.set(0, -0.2, 0);
  counter.receiveShadow = true;

  // Cooking Stove Platform (Charcoal Slate Stone)
  const stoveGeo = new THREE.BoxGeometry(2.6, 0.16, 2.0);
  const stoveMat = new THREE.MeshStandardMaterial({
    color: "#241F1E",
    roughness: 0.7,
    metalness: 0.2,
  });
  const stove = new THREE.Mesh(stoveGeo, stoveMat);
  stove.position.set(0, 0.08, 0.2);
  stove.receiveShadow = true;

  // Burner Grate & Ring (Aged Cast Brass)
  const burnerGeo = new THREE.TorusGeometry(0.58, 0.045, 16, 48);
  const burnerMat = new THREE.MeshStandardMaterial({
    color: "#E8A33A",
    metalness: 0.85,
    roughness: 0.25,
  });
  const burner = new THREE.Mesh(burnerGeo, burnerMat);
  burner.rotation.x = Math.PI / 2;
  burner.position.set(0, 0.18, 0.2);

  // Cooking Pot (Traditional Indian Handi - Terracotta Clay Body)
  const potGeo = new THREE.CylinderGeometry(0.72, 0.48, 0.75, 36);
  const potMat = new THREE.MeshStandardMaterial({
    color: "#A9472A",
    metalness: 0.25,
    roughness: 0.45,
  });
  const pot = new THREE.Mesh(potGeo, potMat);
  pot.position.set(0, 0.55, 0.2);
  pot.castShadow = true;

  // Pot Brass Collar / Rim
  const rimGeo = new THREE.TorusGeometry(0.73, 0.045, 16, 36);
  const rimMat = new THREE.MeshStandardMaterial({
    color: "#E8A33A",
    metalness: 0.85,
    roughness: 0.25,
  });
  const rim = new THREE.Mesh(rimGeo, rimMat);
  rim.rotation.x = Math.PI / 2;
  rim.position.set(0, 0.92, 0.2);

  // Brass Handi Handles
  const handleGeo = new THREE.TorusGeometry(0.16, 0.03, 12, 24, Math.PI);
  const handleMat = new THREE.MeshStandardMaterial({
    color: "#E8A33A",
    metalness: 0.9,
    roughness: 0.2,
  });
  const handleLeft = new THREE.Mesh(handleGeo, handleMat);
  handleLeft.position.set(-0.72, 0.75, 0.2);
  handleLeft.rotation.z = Math.PI / 2;

  const handleRight = new THREE.Mesh(handleGeo, handleMat);
  handleRight.position.set(0.72, 0.75, 0.2);
  handleRight.rotation.z = -Math.PI / 2;

  // Spice Jars Rack
  const spiceJarsGroup = new THREE.Group();
  const jarColors = [
    { color: "#E8A33A", name: "turmeric" },
    { color: "#A9472A", name: "chilli" },
    { color: "#496844", name: "coriander" },
    { color: "#C67D38", name: "garam" },
  ];

  jarColors.forEach((item, i) => {
    const jarGeo = new THREE.CylinderGeometry(0.18, 0.18, 0.48, 24);
    const isSelected = activeSpice && item.name.includes(activeSpice.toLowerCase());
    const jarMat = new THREE.MeshStandardMaterial({
      color: item.color,
      roughness: isSelected ? 0.2 : 0.35,
      metalness: isSelected ? 0.6 : 0.4,
      emissive: isSelected ? new THREE.Color(item.color) : new THREE.Color(0x000000),
      emissiveIntensity: isSelected ? 0.3 : 0,
    });
    const jar = new THREE.Mesh(jarGeo, jarMat);
    jar.position.set(-1.8 + i * 0.45, 0.24, -0.6);
    jar.castShadow = true;
    spiceJarsGroup.add(jar);

    const lidGeo = new THREE.CylinderGeometry(0.2, 0.2, 0.06, 24);
    const lidMat = new THREE.MeshStandardMaterial({
      color: "#E8A33A",
      metalness: 0.85,
      roughness: 0.2,
    });
    const lid = new THREE.Mesh(lidGeo, lidMat);
    lid.position.set(-1.8 + i * 0.45, 0.51, -0.6);
    spiceJarsGroup.add(lid);
  });

  return {
    counter,
    stove,
    burner,
    pot,
    rim,
    handleLeft,
    handleRight,
    spiceJarsGroup,
    geometries: [counterGeo, stoveGeo, burnerGeo, potGeo, rimGeo, handleGeo],
    materials: [counterMat, stoveMat, burnerMat, potMat, rimMat, handleMat],
  };
}
