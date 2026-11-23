"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface PavilionCanvasProps {
  timeOfDay: "golden" | "midday" | "dusk";
  activeHotspot: string | null;
  onSelectHotspot?: (hotspotId: string) => void;
}

export default function ArchitecturalPavilionCanvas({
  timeOfDay,
  activeHotspot,
}: PavilionCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const reqIdRef = useRef<number | null>(null);
  const targetRotation = useRef({ x: 0.15, y: -0.3 });
  const currentRotation = useRef({ x: 0.15, y: -0.3 });
  const lightsRef = useRef<{
    ambient: THREE.AmbientLight;
    sun: THREE.DirectionalLight;
    interior: THREE.PointLight;
  } | null>(null);
  const highlightMeshRef = useRef<THREE.Mesh | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // SCENE
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // CAMERA
    const width = container.clientWidth;
    const height = container.clientHeight;
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 2.8, 8.5);
    camera.lookAt(0, 0.5, 0);
    cameraRef.current = camera;

    // RENDERER
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    container.innerHTML = "";
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // LIGHTING SYSTEM
    const ambient = new THREE.AmbientLight(0xf4efe6, 1.2);
    scene.add(ambient);

    const sun = new THREE.DirectionalLight(0xffecd2, 2.5);
    sun.position.set(6, 9, 6);
    sun.castShadow = true;
    sun.shadow.mapSize.width = 1024;
    sun.shadow.mapSize.height = 1024;
    sun.shadow.bias = -0.0001;
    scene.add(sun);

    const interior = new THREE.PointLight(0xffa755, 3.5, 12, 1.2);
    interior.position.set(0, 1.4, 0);
    scene.add(interior);

    lightsRef.current = { ambient, sun, interior };

    // ARCHITECTURAL PAVILION GROUP
    const pavilionGroup = new THREE.Group();
    scene.add(pavilionGroup);

    // 1. Foundation Podium (Warm brushed limestone / travertine)
    const podiumGeo = new THREE.BoxGeometry(7, 0.35, 5);
    const podiumMat = new THREE.MeshStandardMaterial({
      color: 0xe8dfd0,
      roughness: 0.85,
      metalness: 0.05,
    });
    const podium = new THREE.Mesh(podiumGeo, podiumMat);
    podium.position.y = -0.175;
    podium.receiveShadow = true;
    pavilionGroup.add(podium);

    // 2. Reflecting Pool basin under cantilever
    const poolGeo = new THREE.BoxGeometry(4.5, 0.1, 2.5);
    const poolWaterMat = new THREE.MeshStandardMaterial({
      color: 0x263f35,
      roughness: 0.1,
      metalness: 0.4,
    });
    const pool = new THREE.Mesh(poolGeo, poolWaterMat);
    pool.position.set(1.5, -0.12, 1.8);
    pavilionGroup.add(pool);

    // 3. Rammed Earth / Slate Monolith Feature Wall
    const wallGeo = new THREE.BoxGeometry(0.5, 2.6, 4.2);
    const wallMat = new THREE.MeshStandardMaterial({
      color: 0x333532,
      roughness: 0.9,
      metalness: 0.1,
    });
    const wall = new THREE.Mesh(wallGeo, wallMat);
    wall.position.set(-2.5, 1.3, 0.2);
    wall.castShadow = true;
    wall.receiveShadow = true;
    pavilionGroup.add(wall);

    // 4. Monolithic Fireplace Column
    const hearthGeo = new THREE.BoxGeometry(1.2, 2.8, 1.2);
    const hearthMat = new THREE.MeshStandardMaterial({
      color: 0xb78d67,
      roughness: 0.8,
      metalness: 0.1,
    });
    const hearth = new THREE.Mesh(hearthGeo, hearthMat);
    hearth.position.set(0.8, 1.4, -0.6);
    hearth.castShadow = true;
    hearth.receiveShadow = true;
    pavilionGroup.add(hearth);

    // 5. Floor-to-Ceiling Architectural Glass Volumes
    const glassGeo = new THREE.BoxGeometry(4.8, 2.2, 0.05);
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0xf8f6f1,
      transparent: true,
      opacity: 0.35,
      roughness: 0.1,
      metalness: 0.1,
      transmission: 0.65,
      ior: 1.5,
    });
    const frontGlass = new THREE.Mesh(glassGeo, glassMat);
    frontGlass.position.set(0.1, 1.1, 1.8);
    pavilionGroup.add(frontGlass);

    // 6. Cantilevered Timber Roof Slab
    const roofGeo = new THREE.BoxGeometry(7.8, 0.25, 5.8);
    const roofMat = new THREE.MeshStandardMaterial({
      color: 0x4a443b,
      roughness: 0.7,
      metalness: 0.15,
    });
    const roof = new THREE.Mesh(roofGeo, roofMat);
    roof.position.set(0.2, 2.5, 0.2);
    roof.castShadow = true;
    roof.receiveShadow = true;
    pavilionGroup.add(roof);

    // 7. Structural Steel Slim Mullions / Pillars
    const pillarGeo = new THREE.CylinderGeometry(0.04, 0.04, 2.3, 16);
    const pillarMat = new THREE.MeshStandardMaterial({
      color: 0x222421,
      metalness: 0.8,
      roughness: 0.2,
    });

    const pillarCoords = [
      [-1.8, 1.15, 1.8],
      [1.8, 1.15, 1.8],
      [3.2, 1.15, 0.8],
      [3.2, 1.15, -1.8],
      [-1.8, 1.15, -1.8],
    ];

    pillarCoords.forEach(([x, y, z]) => {
      const p = new THREE.Mesh(pillarGeo, pillarMat);
      p.position.set(x, y, z);
      p.castShadow = true;
      pavilionGroup.add(p);
    });

    // 8. Interior Architectural Elements (Travertine Dining Table & Bench)
    const tableGeo = new THREE.BoxGeometry(2.0, 0.08, 0.9);
    const tableMat = new THREE.MeshStandardMaterial({
      color: 0xe8dfd0,
      roughness: 0.5,
    });
    const table = new THREE.Mesh(tableGeo, tableMat);
    table.position.set(-0.8, 0.6, 0.2);
    table.castShadow = true;
    pavilionGroup.add(table);

    // Highlight Glow Sphere
    const highlightGeo = new THREE.SphereGeometry(0.2, 16, 16);
    const highlightMat = new THREE.MeshBasicMaterial({
      color: 0xb78d67,
      transparent: true,
      opacity: 0,
    });
    const highlightMesh = new THREE.Mesh(highlightGeo, highlightMat);
    pavilionGroup.add(highlightMesh);
    highlightMeshRef.current = highlightMesh;

    // POINTER PARALLAX
    const handlePointerMove = (e: MouseEvent) => {
      if (prefersReducedMotion) return;
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      targetRotation.current.y = -0.3 + x * 0.45;
      targetRotation.current.x = 0.15 + y * 0.2;
    };

    container.addEventListener("mousemove", handlePointerMove);

    // RESIZE HANDLER
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener("resize", handleResize);

    // ANIMATION LOOP
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      // Smooth camera / rotation lerp
      currentRotation.current.y +=
        (targetRotation.current.y - currentRotation.current.y) * 0.05;
      currentRotation.current.x +=
        (targetRotation.current.x - currentRotation.current.x) * 0.05;

      pavilionGroup.rotation.y = currentRotation.current.y;
      pavilionGroup.rotation.x = currentRotation.current.x;

      // Subtle breathing float
      pavilionGroup.position.y = Math.sin(elapsed * 0.8) * 0.04;

      // Animate pool reflection subtle ripple
      poolWaterMat.roughness = 0.08 + Math.sin(elapsed * 2) * 0.03;

      renderer.render(scene, camera);
      reqIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (reqIdRef.current) cancelAnimationFrame(reqIdRef.current);
      container.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      podiumGeo.dispose();
      wallGeo.dispose();
      glassGeo.dispose();
      roofGeo.dispose();
    };
  }, []);

  // Update lighting whenever timeOfDay changes
  useEffect(() => {
    if (!lightsRef.current || !rendererRef.current) return;
    const { ambient, sun, interior } = lightsRef.current;

    if (timeOfDay === "golden") {
      ambient.color.setHex(0xf8ebd6);
      ambient.intensity = 1.2;
      sun.color.setHex(0xffcb8a);
      sun.intensity = 2.8;
      sun.position.set(7, 4, 5);
      interior.color.setHex(0xffaa50);
      interior.intensity = 3.8;
      rendererRef.current.toneMappingExposure = 1.05;
    } else if (timeOfDay === "midday") {
      ambient.color.setHex(0xfbf9f5);
      ambient.intensity = 1.6;
      sun.color.setHex(0xffffff);
      sun.intensity = 3.0;
      sun.position.set(3, 11, 4);
      interior.color.setHex(0xffd4a3);
      interior.intensity = 1.8;
      rendererRef.current.toneMappingExposure = 1.15;
    } else if (timeOfDay === "dusk") {
      ambient.color.setHex(0x364858);
      ambient.intensity = 0.7;
      sun.color.setHex(0xdb7b5c);
      sun.intensity = 1.4;
      sun.position.set(-6, 2, -4);
      interior.color.setHex(0xff9944);
      interior.intensity = 5.0;
      rendererRef.current.toneMappingExposure = 0.95;
    }
  }, [timeOfDay]);

  // Update hotspot highlight
  useEffect(() => {
    if (!highlightMeshRef.current) return;
    const highlight = highlightMeshRef.current;

    if (!activeHotspot) {
      (highlight.material as THREE.MeshBasicMaterial).opacity = 0;
      return;
    }

    (highlight.material as THREE.MeshBasicMaterial).opacity = 0.85;

    if (activeHotspot === "living") {
      highlight.position.set(0.5, 1.2, 0.4);
    } else if (activeHotspot === "cantilever") {
      highlight.position.set(2.8, 2.5, 1.2);
    } else if (activeHotspot === "hearth") {
      highlight.position.set(0.8, 1.4, -0.6);
    } else if (activeHotspot === "pool") {
      highlight.position.set(1.5, 0.1, 1.8);
    }
  }, [activeHotspot]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full cursor-grab active:cursor-grabbing select-none"
      title="Drag or move pointer to explore architectural spatial geometry"
    />
  );
}
