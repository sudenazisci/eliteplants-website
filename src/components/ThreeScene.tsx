import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeSceneProps {
  activeFruit: 'blackberry' | 'raspberry' | 'blueberry';
  disableScrollFade?: boolean;
}

export const ThreeScene: React.FC<ThreeSceneProps> = ({ activeFruit, disableScrollFade = false }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);

  const fruitGroupRef = useRef<THREE.Group>(new THREE.Group());
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  const transitionRef = useRef({
    currentFruit: activeFruit,
    opacity: 1.0,
    targetOpacity: 1.0,
    isTransitioning: false,
  });

  useEffect(() => {
    if (activeFruit !== transitionRef.current.currentFruit) {
      transitionRef.current.targetOpacity = 0.0;
      transitionRef.current.isTransitioning = true;
    }
  }, [activeFruit]);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Use getBoundingClientRect for accurate initial size (clientWidth may be 0 on first paint)
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width || containerRef.current.offsetWidth || 300;
    const height = rect.height || containerRef.current.offsetHeight || 200;

    const camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 100);
    camera.position.z = 5.8;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.5;
    rendererRef.current = renderer;

    containerRef.current.innerHTML = '';
    containerRef.current.appendChild(renderer.domElement);
    // Make the canvas fill the container fully
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';

    // ── LIGHTS ──────────────────────────────────────────────────
    // Mimics studio white-background lighting from the reference photo
    const ambient = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambient);

    // Strong top-right key light (like in photo)
    const key = new THREE.DirectionalLight(0xffffff, 6.0);
    key.position.set(5, 8, 6);
    key.castShadow = true;
    scene.add(key);

    // Soft left fill light
    const fill = new THREE.DirectionalLight(0xf0f5ff, 2.5);
    fill.position.set(-6, 2, 4);
    scene.add(fill);

    // Back rim light
    const rim = new THREE.DirectionalLight(0xffffff, 3.0);
    rim.position.set(-3, 5, -8);
    scene.add(rim);

    // Colored bounce (changes per fruit)
    const bounce = new THREE.PointLight(0x5c0a8a, 3.5, 18);
    bounce.position.set(2, -5, 3);
    scene.add(bounce);

    const fruitParentGroup = new THREE.Group();
    scene.add(fruitParentGroup);
    fruitGroupRef.current = fruitParentGroup;

    // ── BLACKBERRY ────────────────────────────────────────────────
    // Reference: wide oval, very dark near-black, each drupelet with bright specular dot
    const createBlackberry = () => {
      const group = new THREE.Group();

      // Each drupelet material – very shiny black-purple
      // Like real blackberries: near-black with a tiny bright specular highlight
      const matMain = new THREE.MeshPhysicalMaterial({
        color: 0x0c0018,         // Near-black with purple tint
        roughness: 0.08,         // Very smooth / shiny
        metalness: 0.0,
        clearcoat: 1.0,          // Glossy coat for the shiny highlight dot
        clearcoatRoughness: 0.05,
        reflectivity: 1.0,
        ior: 1.5,
        sheen: 0.6,
        sheenColor: 0x6600cc,
        sheenRoughness: 0.2,
        transparent: true,
      });

      const matPurple = new THREE.MeshPhysicalMaterial({
        color: 0x1a0335,         // A few slightly purple drupelets for variation
        roughness: 0.1,
        metalness: 0.0,
        clearcoat: 0.9,
        clearcoatRoughness: 0.06,
        sheen: 0.5,
        sheenColor: 0x9933ff,
        sheenRoughness: 0.25,
        transparent: true,
      });

      // Real blackberry shape from photo: wide, relatively round oval
      // NOT very elongated – roughly 1:1.2 aspect ratio width:height
      const eRx = 0.9;  // equatorial radius x
      const eRy = 1.08; // height radius y
      const eRz = 0.85; // equatorial radius z

      // Drupelet radius – large and prominent like in photo
      const dR = 0.165;
      const dGeom = new THREE.SphereGeometry(dR, 24, 24);

      const count = 200;
      for (let i = 0; i < count; i++) {
        const phi = Math.acos(1 - 2 * (i + 0.5) / count);
        const theta = Math.PI * (1 + Math.sqrt(5)) * i;

        // Skip very bottom (unripe white/green drupelets hidden)
        if (phi > Math.PI * 0.9) continue;

        // Natural taper: slightly narrower at top and bottom
        const normalizedPhi = phi / Math.PI; // 0 = top, 1 = bottom
        let taperScale = 1.0;
        if (normalizedPhi < 0.15) taperScale = normalizedPhi / 0.15 * 0.8 + 0.2;
        if (normalizedPhi > 0.75) taperScale = 1 - (normalizedPhi - 0.75) / 0.25 * 0.55;

        const nx = Math.sin(phi) * Math.cos(theta);
        const ny = Math.cos(phi);
        const nz = Math.sin(phi) * Math.sin(theta);

        const px = eRx * nx * taperScale + (Math.random() - 0.5) * 0.022;
        const py = eRy * ny + (Math.random() - 0.5) * 0.022;
        const pz = eRz * nz * taperScale + (Math.random() - 0.5) * 0.022;

        const mat = Math.random() > 0.75 ? matPurple : matMain;
        const mesh = new THREE.Mesh(dGeom, mat);
        mesh.position.set(px, py, pz);

        // Orient each sphere outward for proper specular
        const outward = new THREE.Vector3(px, py, pz).normalize();
        mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), outward);

        const sv = 0.9 + Math.random() * 0.2;
        mesh.scale.set(sv, sv * (0.98 + Math.random() * 0.08), sv);
        mesh.castShadow = true;
        group.add(mesh);
      }

      // Dark fill core (hides gaps between drupelets)
      const coreMat = new THREE.MeshStandardMaterial({ color: 0x03000a, roughness: 1, transparent: true });
      const coreG = new THREE.SphereGeometry(0.82, 28, 28);
      coreG.scale(eRx * 0.88, eRy * 0.85, eRz * 0.88);
      group.add(new THREE.Mesh(coreG, coreMat));

      // Small dried calyx at top (like in photo – brown star)
      const calyxMat = new THREE.MeshStandardMaterial({ color: 0x2e1a08, roughness: 0.9, transparent: true });
      for (let i = 0; i < 6; i++) {
        const angle = (i / 6) * Math.PI * 2;
        const petalG = new THREE.ConeGeometry(0.06, 0.28, 4);
        petalG.scale(1, 1, 0.22);
        const petal = new THREE.Mesh(petalG, calyxMat);
        petal.position.set(Math.cos(angle) * 0.18, eRy + 0.04, Math.sin(angle) * 0.18);
        petal.rotation.z = Math.cos(angle) * -0.45;
        petal.rotation.x = Math.sin(angle) * 0.45;
        petal.rotation.y = -angle;
        group.add(petal);
      }

      // Short stem
      const stemMat = new THREE.MeshStandardMaterial({ color: 0x1c3818, roughness: 0.9, transparent: true });
      const stemG = new THREE.CylinderGeometry(0.028, 0.036, 0.44, 8);
      const stem = new THREE.Mesh(stemG, stemMat);
      stem.position.set(0.02, eRy + 0.22, 0);
      stem.rotation.z = -0.12;
      group.add(stem);

      group.userData = { materials: [matMain, matPurple, coreMat, calyxMat, stemMat] };
      return group;
    };

    // ── RASPBERRY ──────────────────────────────────────────────────
    // Reference: bright red, dome-shaped (not tall cone), clear open hollow top
    const createRaspberry = () => {
      const group = new THREE.Group();

      // Raspberry color from photo: vivid bright red
      const matRed = new THREE.MeshPhysicalMaterial({
        color: 0xcc0830,         // Vivid red like real raspberry
        roughness: 0.55,         // Slightly matte/velvety
        metalness: 0.0,
        clearcoat: 0.1,
        clearcoatRoughness: 0.9,
        sheen: 1.0,
        sheenColor: 0xff4060,
        sheenRoughness: 0.4,
        transparent: true,
      });

      const matLighter = new THREE.MeshPhysicalMaterial({
        color: 0xd91040,         // Slightly lighter for variation
        roughness: 0.5,
        metalness: 0.0,
        sheen: 1.0,
        sheenColor: 0xff6080,
        sheenRoughness: 0.35,
        transparent: true,
      });

      // Raspberry from photo: dome-shaped, width ≈ height, open hollow top
      // Row-based placement for accuracy (like a real raspberry cross-section)
      const rows = [
        // y,   ringRadius, count
        { y: -0.78, r: 0.38, n: 9  },   // Bottom small
        { y: -0.50, r: 0.60, n: 14 },
        { y: -0.18, r: 0.78, n: 18 },   // Widest equator row
        { y:  0.15, r: 0.72, n: 17 },
        { y:  0.46, r: 0.60, n: 14 },
        { y:  0.73, r: 0.46, n: 11 },
        { y:  0.96, r: 0.30, n: 7  },
        { y:  1.14, r: 0.15, n: 4  },   // Near-top ring (hollow center visible)
      ];

      const dR = 0.142;
      const dGeom = new THREE.SphereGeometry(dR, 20, 20);
      const hairGeom = new THREE.CylinderGeometry(0.003, 0.001, 0.085, 3);
      const hairMat = new THREE.MeshStandardMaterial({ color: 0xf5b8c0, roughness: 0.95, transparent: true });

      rows.forEach(({ y, r, n }) => {
        for (let i = 0; i < n; i++) {
          const baseAngle = (i / n) * Math.PI * 2;
          const angle = baseAngle + (Math.random() - 0.5) * 0.1;
          const jx = (Math.random() - 0.5) * 0.025;
          const jy = (Math.random() - 0.5) * 0.025;
          const jz = (Math.random() - 0.5) * 0.025;

          const px = r * Math.cos(angle) + jx;
          const py = y + jy;
          const pz = r * Math.sin(angle) + jz;

          const mat = Math.random() > 0.5 ? matLighter : matRed;
          const mesh = new THREE.Mesh(dGeom, mat);
          mesh.position.set(px, py, pz);

          // Normal direction: outward from the cone axis
          // Slightly tilted toward outside and up
          const outward = new THREE.Vector3(px * 1.2, py * 0.25, pz * 1.2).normalize();
          mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), outward);

          const sv = 0.88 + Math.random() * 0.24;
          mesh.scale.set(sv, sv, sv);
          mesh.castShadow = true;
          group.add(mesh);

          // Tiny white/pink hairs (visible in reference photo)
          if (Math.random() > 0.4) {
            const hair = new THREE.Mesh(hairGeom, hairMat);
            const sd = 0.12;
            hair.position.set(px + outward.x * sd, py + outward.y * sd, pz + outward.z * sd);
            hair.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), outward);
            hair.rotation.x += (Math.random() - 0.5) * 0.6;
            hair.rotation.z += (Math.random() - 0.5) * 0.6;
            group.add(hair);
          }
        }
      });

      // Dark cone core (the white/beige inner core in photo shows when hollow)
      const coreMat = new THREE.MeshStandardMaterial({ color: 0x1a0b10, roughness: 1, transparent: true });
      // Use lathe to create cone-like core
      const pts: THREE.Vector2[] = [];
      for (let i = 0; i <= 14; i++) {
        const t = i / 14;
        const yc = -0.85 + t * 2.1;
        // Cone radius tapers from wide at bottom to narrow at top
        const rc = 0.36 * Math.max(0, 1 - Math.pow(t, 0.9));
        pts.push(new THREE.Vector2(rc, yc));
      }
      const coreG = new THREE.LatheGeometry(pts, 20);
      group.add(new THREE.Mesh(coreG, coreMat));

      // Calyx sepals at the bottom of raspberry (they face outward/down)
      const leafMat = new THREE.MeshStandardMaterial({ color: 0x1e5228, roughness: 0.82, transparent: true });
      for (let i = 0; i < 5; i++) {
        const angle = (i / 5) * Math.PI * 2;
        const sg = new THREE.Group();
        // Main sepal blade
        const bladeG = new THREE.ConeGeometry(0.075, 0.34, 4);
        bladeG.scale(1, 1, 0.18);
        const blade = new THREE.Mesh(bladeG, leafMat);
        blade.position.y = 0.17;
        sg.add(blade);

        sg.position.set(Math.cos(angle) * 0.22, -0.82, Math.sin(angle) * 0.22);
        sg.rotation.z = Math.cos(angle) * 0.5;
        sg.rotation.x = Math.sin(angle) * 0.5 + Math.PI * 0.55; // point downward
        sg.rotation.y = angle;
        group.add(sg);
      }

      // Stem at bottom (raspberry attaches at bottom and is hollow on top)
      const stemMat = new THREE.MeshStandardMaterial({ color: 0x193e1e, roughness: 0.9, transparent: true });
      const stemG = new THREE.CylinderGeometry(0.028, 0.035, 0.42, 8);
      const stem = new THREE.Mesh(stemG, stemMat);
      stem.position.set(0.02, -1.04, 0);
      stem.rotation.z = 0.08;
      group.add(stem);

      group.userData = { materials: [matRed, matLighter, coreMat, leafMat, hairMat, stemMat] };
      return group;
    };

    // ── BLUEBERRY ──────────────────────────────────────────────────
    // Reference: dark navy-blue, smooth round oblate sphere, powdery bloom, visible crown
    const createBlueberry = () => {
      const group = new THREE.Group();

      // Dark navy blue — bloom effect baked into sheen (no separate transparent sphere)
      const bodyMat = new THREE.MeshPhysicalMaterial({
        color: 0x14183e,
        roughness: 0.6,
        metalness: 0.0,
        sheen: 1.0,
        sheenColor: 0x7aaae8,
        sheenRoughness: 0.42,
        clearcoat: 0.14,
        clearcoatRoughness: 0.72,
        // NOT transparent — avoids white-flash on opacity=1 frames
      });

      // Crown and scar: NOT transparent (opaque always, avoids white flicker)
      const crownMat = new THREE.MeshStandardMaterial({
        color: 0x1a1940,
        roughness: 0.88,
      });

      const scarMat = new THREE.MeshStandardMaterial({
        color: 0x3a2818,
        roughness: 0.97,
      });

      // Body: characteristic blueberry oblate shape (wider than tall ~1.25:1)
      const bodyGeom = new THREE.SphereGeometry(1.0, 80, 80);
      bodyGeom.scale(1.25, 0.86, 1.25);

      const posAttr = bodyGeom.attributes.position;
      const v = new THREE.Vector3();
      for (let i = 0; i < posAttr.count; i++) {
        v.fromBufferAttribute(posAttr, i);

        // Subtle organic micro-bumps
        const n1 = Math.sin(v.x * 9) * Math.cos(v.y * 8) * Math.sin(v.z * 9) * 0.014;
        const n2 = Math.sin(v.x * 18) * Math.cos(v.z * 16) * 0.005;
        v.addScaledVector(v.clone().normalize(), n1 + n2);

        // Deep wide calyx crater at top
        if (v.y > 0.35) {
          const t = (v.y - 0.35) / 0.65;
          v.y -= t * 0.4;
          const flare = Math.sin(t * Math.PI) * 0.08;
          v.x *= 1 + flare;
          v.z *= 1 + flare;
        }
        else if (v.y < -0.72) {
          const t = (-v.y - 0.72) / 0.28;
          v.y += t * t * 0.05;
        }

        posAttr.setXYZ(i, v.x, v.y, v.z);
      }
      bodyGeom.computeVertexNormals();

      const body = new THREE.Mesh(bodyGeom, bodyMat);
      body.castShadow = true;
      group.add(body);

      // Calyx crown – 5-pointed star on top
      const crownGroup = new THREE.Group();

      const ringGeom = new THREE.TorusGeometry(0.38, 0.058, 14, 40);
      const rp = ringGeom.attributes.position;
      for (let i = 0; i < rp.count; i++) {
        const rv = new THREE.Vector3().fromBufferAttribute(rp, i);
        const a = Math.atan2(rv.y, rv.x);
        rv.x += Math.cos(a) * Math.sin(a * 5) * 0.032;
        rv.y += Math.sin(a) * Math.sin(a * 5) * 0.032;
        rp.setXYZ(i, rv.x, rv.y, rv.z);
      }
      ringGeom.computeVertexNormals();
      const ring = new THREE.Mesh(ringGeom, crownMat);
      ring.rotation.x = Math.PI / 2;
      ring.position.y = 0.55;
      crownGroup.add(ring);

      const petalG = new THREE.ConeGeometry(0.14, 0.42, 4);
      petalG.scale(1, 1, 0.11);
      petalG.translate(0, 0.21, 0);
      const pp = petalG.attributes.position;
      for (let j = 0; j < pp.count; j++) {
        const pv = new THREE.Vector3().fromBufferAttribute(pp, j);
        pv.z += Math.pow(pv.y, 1.8) * 0.72;
        pp.setXYZ(j, pv.x, pv.y, pv.z);
      }
      petalG.computeVertexNormals();

      for (let i = 0; i < 5; i++) {
        const a = (i / 5) * Math.PI * 2;
        const petal = new THREE.Mesh(petalG, crownMat);
        petal.position.set(Math.cos(a) * 0.38, 0.54, Math.sin(a) * 0.38);
        petal.lookAt(0, 0.54, 0);
        petal.rotateX(Math.PI / 3.8);
        petal.rotateZ((Math.random() - 0.5) * 0.14);
        crownGroup.add(petal);
      }
      group.add(crownGroup);

      const scarG = new THREE.CylinderGeometry(0.048, 0.048, 0.024, 14);
      const scar = new THREE.Mesh(scarG, scarMat);
      scar.position.set(0, -0.84, 0);
      group.add(scar);

      // Only bodyMat in materials list (the only one we fade during transitions)
      group.userData = { materials: [bodyMat] };
      return group;
    };

    // ── INITIAL MESH LOAD ────────────────────────────────────────
    let activeFruitMesh = createBlackberry();
    if (transitionRef.current.currentFruit === 'raspberry') {
      activeFruitMesh = createRaspberry();
      bounce.color.setHex(0xcc0030);
      fill.color.setHex(0xff6070);
    } else if (transitionRef.current.currentFruit === 'blueberry') {
      activeFruitMesh = createBlueberry();
      bounce.color.setHex(0x1a3aff);
      fill.color.setHex(0x8aadff);
    }
    fruitParentGroup.add(activeFruitMesh);

    // ── EVENTS ──────────────────────────────────────────────────
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return;
      const w = containerRef.current.offsetWidth;
      const h = containerRef.current.offsetHeight;
      if (w === 0 || h === 0) return;
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // ResizeObserver: catches layout changes (e.g. card appearing, orientation change)
    const resizeObserver = new ResizeObserver(() => handleResize());
    if (containerRef.current) resizeObserver.observe(containerRef.current);
    // Trigger once after a short delay to catch deferred layout
    const initTimer = setTimeout(() => handleResize(), 150);

    // ── ANIMATION LOOP ──────────────────────────────────────────
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (!renderer || !scene || !camera) return;

      let opacityFactor = 1.0;

      if (!disableScrollFade) {
        const scrollPct = Math.min(window.scrollY / (window.innerHeight * 0.85), 1);
        if (containerRef.current) {
          containerRef.current.style.opacity = Math.max(1 - scrollPct * 1.5, 0).toString();
        }
        const gt = document.querySelector('.giant-bg-text') as HTMLDivElement | null;
        if (gt) {
          gt.style.transform = `translate(-50%, -50%) translateX(${scrollPct * -100}px) scale(${1 - scrollPct * 0.15})`;
          gt.style.opacity = Math.max((1 - scrollPct * 1.3) * 0.98, 0).toString();
        }
        const sf = Math.min(scrollPct / 0.8, 1);
        const sc = (1.0 - sf * 0.96) * 1.38;
        fruitParentGroup.scale.set(sc, sc, sc);
        fruitParentGroup.position.z = -sf * 2.8;
        opacityFactor = Math.max(1 - scrollPct * 1.6, 0);
      } else {
        fruitParentGroup.scale.set(1.15, 1.15, 1.15);
        fruitParentGroup.position.z = 0;
        if (containerRef.current) containerRef.current.style.opacity = '1';
      }

      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.07;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.07;

      fruitParentGroup.rotation.y += 0.006;
      fruitParentGroup.rotation.x = mouseRef.current.y * 0.28;
      fruitParentGroup.rotation.z = -mouseRef.current.x * 0.14;

      const t = clock.getElapsedTime();
      fruitParentGroup.position.y = Math.sin(t * 1.2) * 0.09;

      const trans = transitionRef.current;
      if (trans.isTransitioning) {
        trans.opacity += (trans.targetOpacity - trans.opacity) * 0.12;
        if (trans.opacity < 0.02) {
          fruitParentGroup.remove(activeFruitMesh);
          if (activeFruit === 'blackberry') {
            activeFruitMesh = createBlackberry();
            bounce.color.setHex(0x5c0a8a);
            fill.color.setHex(0xf0f5ff);
          } else if (activeFruit === 'raspberry') {
            activeFruitMesh = createRaspberry();
            bounce.color.setHex(0xcc0030);
            fill.color.setHex(0xff6070);
          } else if (activeFruit === 'blueberry') {
            activeFruitMesh = createBlueberry();
            bounce.color.setHex(0x1a3aff);
            fill.color.setHex(0x8aadff);
          }
          fruitParentGroup.add(activeFruitMesh);
          trans.currentFruit = activeFruit;
          trans.targetOpacity = 1.0;
        }
      } else {
        trans.opacity = opacityFactor;
      }

      const mats: THREE.Material[] = activeFruitMesh.userData.materials || [];
      mats.forEach(m => {
        m.opacity = trans.isTransitioning ? Math.min(trans.opacity, opacityFactor) : opacityFactor;
      });
      if (trans.isTransitioning && trans.opacity > 0.98) trans.isTransitioning = false;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      clearTimeout(initTimer);
      resizeObserver.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, [activeFruit]);

  return <div ref={containerRef} className="canvas-container" />;
};
