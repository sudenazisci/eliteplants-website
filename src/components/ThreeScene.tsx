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
  
  // References for animation
  const fruitGroupRef = useRef<THREE.Group>(new THREE.Group());
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  
  // Transition state
  const transitionRef = useRef({
    currentFruit: activeFruit,
    opacity: 1.0,
    targetOpacity: 1.0,
    isTransitioning: false,
  });

  // Track activeFruit changes for smooth transition
  useEffect(() => {
    if (activeFruit !== transitionRef.current.currentFruit) {
      transitionRef.current.targetOpacity = 0.0;
      transitionRef.current.isTransitioning = true;
    }
  }, [activeFruit]);

  useEffect(() => {
    if (!containerRef.current) return;

    // 1. Scene Setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const width = containerRef.current.clientWidth || window.innerWidth;
    const height = containerRef.current.clientHeight || window.innerHeight;

    // 2. Camera Setup
    const camera = new THREE.PerspectiveCamera(
      42,
      width / height,
      0.1,
      100
    );
    camera.position.z = 5.2;
    cameraRef.current = camera;

    // 3. Renderer Setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;
    rendererRef.current = renderer;

    containerRef.current.innerHTML = '';
    containerRef.current.appendChild(renderer.domElement);

    // 4. Lights Setup - High specular contrast for light backgrounds
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 3.8);
    keyLight.position.set(6, 6, 5);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 5.5);
    rimLight.position.set(-6, 3, -6);
    scene.add(rimLight);

    const fillLight = new THREE.PointLight(0xd946ef, 3.8, 12);
    fillLight.position.set(-4, -2, 2.5);
    scene.add(fillLight);

    // 5. Add Fruit Parent Group
    const fruitParentGroup = new THREE.Group();
    scene.add(fruitParentGroup);
    fruitGroupRef.current = fruitParentGroup;

    // Build procedural models
    const createBlackberry = () => {
      const group = new THREE.Group();
      const count = 210; // Denser drupelet count
      const drupeletGeom = new THREE.SphereGeometry(0.142, 20, 20);
      const blackberryMat = new THREE.MeshPhysicalMaterial({
        color: 0x06010c, // Deeper black-purple
        roughness: 0.1,
        metalness: 0.05,
        clearcoat: 1.0,
        clearcoatRoughness: 0.03,
        transmission: 0.35, // Juicy translucent transmission
        thickness: 0.12, // Refraction thickness
        ior: 1.333, // Water refraction index
        sheen: 0.9,
        sheenColor: 0x5a0fa8, // Deep violet edge glow catches light beautifully!
        sheenRoughness: 0.15,
        transparent: true,
      });

      for (let i = 0; i < count; i++) {
        const phi = Math.acos(1 - 2 * (i + 0.5) / count);
        const theta = Math.PI * (1 + Math.sqrt(5)) * i;

        // Smooth taper at the top and bottom poles
        const taper = 1.0 - Math.pow(Math.abs(Math.cos(phi)), 2) * 0.22;
        
        // Add random organic jitter to positions
        const jitterX = (Math.random() - 0.5) * 0.035;
        const jitterY = (Math.random() - 0.5) * 0.035;
        const jitterZ = (Math.random() - 0.5) * 0.035;

        const rx = 0.8 * Math.sin(phi) * Math.cos(theta) * taper + jitterX;
        const ry = 1.25 * Math.cos(phi) + jitterY;
        const rz = 0.8 * Math.sin(phi) * Math.sin(theta) * taper + jitterZ;

        const mesh = new THREE.Mesh(drupeletGeom, blackberryMat);
        mesh.position.set(rx, ry, rz);
        
        // Elongated asymmetric random scaling for organic ellipsoidal texture
        const randScaleX = 0.88 + Math.random() * 0.28;
        const randScaleY = (0.88 + Math.random() * 0.28) * 1.15; // slightly ellipsoidal
        const randScaleZ = 0.88 + Math.random() * 0.28;
        mesh.scale.set(randScaleX, randScaleY, randScaleZ);

        group.add(mesh);
      }

      // Sepals (Calyx) - curving outwards with organic layout
      const leafMat = new THREE.MeshStandardMaterial({
        color: 0x1a381f, // Rich organic green
        roughness: 0.82,
        transparent: true,
      });

      for (let i = 0; i < 6; i++) {
        const angle = (i / 6) * Math.PI * 2;
        const sepalGroup = new THREE.Group();
        
        // Build a curved sepal leaf using 3 small nested cones of varying sizes
        const segmentCount = 3;
        for (let j = 0; j < segmentCount; j++) {
          const segGeom = new THREE.ConeGeometry(0.08 - j * 0.02, 0.3, 4);
          segGeom.scale(1, 1, 0.2);
          const segment = new THREE.Mesh(segGeom, leafMat);
          
          segment.position.y = 0.12 + j * 0.18;
          segment.position.z = -Math.pow(j, 1.8) * 0.05; // Curve backwards
          segment.rotation.x = -j * 0.25; // Fold outwards
          sepalGroup.add(segment);
        }
        
        sepalGroup.position.set(Math.cos(angle) * 0.22, 1.15, Math.sin(angle) * 0.22);
        sepalGroup.rotation.z = Math.cos(angle) * -0.4;
        sepalGroup.rotation.x = Math.sin(angle) * 0.4;
        sepalGroup.rotation.y = -angle + Math.PI / 2;
        group.add(sepalGroup);
      }

      // Add 3 dried sepals (brownish-grey) to mimic natural imperfections
      const driedLeafMat = new THREE.MeshStandardMaterial({
        color: 0x4a3c31,
        roughness: 0.9,
        transparent: true,
      });
      for (let i = 0; i < 3; i++) {
        const angle = (i / 3) * Math.PI * 2 + Math.PI / 6;
        const drySepal = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.4, 4), driedLeafMat);
        drySepal.scale.set(1, 1, 0.2);
        drySepal.position.set(Math.cos(angle) * 0.24, 1.2, Math.sin(angle) * 0.24);
        drySepal.rotation.x = Math.PI / 2.3 + (Math.random() - 0.5) * 0.2;
        drySepal.rotation.y = -angle;
        group.add(drySepal);
      }

      // Bent organic stem
      const stemGroup = new THREE.Group();
      const stemSegments = 5;
      const stemSegmentGeom = new THREE.CylinderGeometry(0.035, 0.038, 0.12, 8);
      for (let j = 0; j < stemSegments; j++) {
        const stemSegment = new THREE.Mesh(stemSegmentGeom, leafMat);
        stemSegment.position.y = j * 0.11;
        stemSegment.position.x = Math.pow(j, 2) * 0.015; // Curve the stem
        stemSegment.rotation.z = j * -0.06;
        stemGroup.add(stemSegment);
      }
      stemGroup.position.set(0.0, 1.25, 0.0);
      group.add(stemGroup);

      group.userData = { materials: [blackberryMat, leafMat, driedLeafMat] };
      return group;
    };

    const createRaspberry = () => {
      const group = new THREE.Group();
      const count = 190;
      const drupeletGeom = new THREE.SphereGeometry(0.135, 18, 18);
      const raspberryMat = new THREE.MeshPhysicalMaterial({
        color: 0xc2124e, // Rich raspberry red
        roughness: 0.42, // Velvet texture (matte-like sheen)
        metalness: 0.02,
        transmission: 0.28, // Translucent juice feel
        thickness: 0.12,
        ior: 1.34,
        sheen: 1.0,
        sheenColor: 0xff88a8, // Velvety pink edge glow
        sheenRoughness: 0.7,
        transparent: true,
      });

      // Hair (style remnants) configuration
      const hairGeom = new THREE.CylinderGeometry(0.002, 0.002, 0.06, 3);
      const hairMat = new THREE.MeshStandardMaterial({
        color: 0xe8b7be, // Pale pinkish-beige hair color
        roughness: 0.9,
        transparent: true,
      });

      for (let i = 0; i < count; i++) {
        const phi = Math.acos(1 - 2 * (i + 0.5) / count);
        const theta = Math.PI * (1 + Math.sqrt(5)) * i;

        if (phi < 0.42) continue; // Keep the hollow top core open

        const taper = 1.0 - (i / count) * 0.12;
        const jitterX = (Math.random() - 0.5) * 0.03;
        const jitterY = (Math.random() - 0.5) * 0.03;
        const jitterZ = (Math.random() - 0.5) * 0.03;

        const rx = 0.82 * Math.sin(phi) * Math.cos(theta) * taper + jitterX;
        const ry = 1.3 * Math.cos(phi) + 0.15 + jitterY; // Slightly stretched for cone-shape
        const rz = 0.82 * Math.sin(phi) * Math.sin(theta) * taper + jitterZ;

        const mesh = new THREE.Mesh(drupeletGeom, raspberryMat);
        mesh.position.set(rx, ry, rz);

        const randScaleX = 0.9 + Math.random() * 0.22;
        const randScaleY = 0.9 + Math.random() * 0.22;
        const randScaleZ = 0.9 + Math.random() * 0.22;
        mesh.scale.set(randScaleX, randScaleY, randScaleZ);

        group.add(mesh);

        // Add tiny fuzzy hairs protruding from the center of drupelets (skip some for natural dispersion)
        if (Math.random() > 0.35) {
          const dir = new THREE.Vector3(rx, ry - 0.15, rz).normalize();
          const hair = new THREE.Mesh(hairGeom, hairMat);
          
          const surfaceDistance = 0.11; // Place at surface
          hair.position.set(
            rx + dir.x * surfaceDistance,
            ry + dir.y * surfaceDistance,
            rz + dir.z * surfaceDistance
          );
          
          const alignQuat = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
          hair.quaternion.copy(alignQuat);
          
          // Organic tilt
          hair.rotation.x += (Math.random() - 0.5) * 0.3;
          hair.rotation.z += (Math.random() - 0.5) * 0.3;
          
          group.add(hair);
        }
      }

      // Sepals
      const leafMat = new THREE.MeshStandardMaterial({
        color: 0x244a29,
        roughness: 0.80,
        transparent: true,
      });
      for (let i = 0; i < 5; i++) {
        const angle = (i / 5) * Math.PI * 2;
        const sepalGroup = new THREE.Group();
        
        // Curved raspberry sepal
        const segmentCount = 3;
        for (let j = 0; j < segmentCount; j++) {
          const segGeom = new THREE.ConeGeometry(0.07 - j * 0.015, 0.28, 4);
          segGeom.scale(1, 1, 0.2);
          const segment = new THREE.Mesh(segGeom, leafMat);
          segment.position.y = 0.1 + j * 0.16;
          segment.position.z = -Math.pow(j, 1.8) * 0.05;
          segment.rotation.x = -j * 0.28;
          sepalGroup.add(segment);
        }
        
        sepalGroup.position.set(Math.cos(angle) * 0.24, 1.1, Math.sin(angle) * 0.24);
        sepalGroup.rotation.z = Math.cos(angle) * -0.4;
        sepalGroup.rotation.x = Math.sin(angle) * 0.4;
        sepalGroup.rotation.y = -angle + Math.PI / 2;
        group.add(sepalGroup);
      }

      // Bent stem
      const stemGroup = new THREE.Group();
      const stemSegments = 5;
      const stemSegmentGeom = new THREE.CylinderGeometry(0.032, 0.035, 0.12, 8);
      for (let j = 0; j < stemSegments; j++) {
        const stemSegment = new THREE.Mesh(stemSegmentGeom, leafMat);
        stemSegment.position.y = j * 0.11;
        stemSegment.position.x = -Math.pow(j, 2) * 0.012; // bend opposite direction
        stemSegment.rotation.z = j * 0.05;
        stemGroup.add(stemSegment);
      }
      stemGroup.position.set(0.02, 1.2, -0.02);
      group.add(stemGroup);

      group.userData = { materials: [raspberryMat, leafMat, hairMat] };
      return group;
    };

    const createBlueberry = () => {
      const group = new THREE.Group();
      
      const blueberryMat = new THREE.MeshPhysicalMaterial({
        color: 0x141829, // Deep dark navy/purple skin
        roughness: 0.82, // Heavy powdery bloom
        metalness: 0.0,
        sheen: 1.0,
        sheenColor: 0x93b8e6, // The characteristic light powdery blue
        sheenRoughness: 0.6,
        clearcoat: 0.15, // Subtle wax reflection under the powder
        clearcoatRoughness: 0.7,
        transparent: true,
      });
      
      const crownMat = new THREE.MeshPhysicalMaterial({
        color: 0x1a2138, // Slightly darker, less bloom for the dried calyx
        roughness: 0.9,
        transparent: true,
      });

      const scarMat = new THREE.MeshStandardMaterial({
        color: 0x3d3224, // Brownish dried scar
        roughness: 0.95,
        transparent: true,
      });

      // Squashed sphere geometry with vertex displacement
      const bodyGeom = new THREE.SphereGeometry(1.0, 64, 64);
      bodyGeom.scale(1.15, 0.92, 1.15); // characteristic blueberry oblate shape
      const posAttr = bodyGeom.attributes.position;
      const v = new THREE.Vector3();
      for (let i = 0; i < posAttr.count; i++) {
        v.fromBufferAttribute(posAttr, i);
        
        // Soft organic irregularity
        const noise = (Math.sin(v.x * 6) * Math.cos(v.y * 5) * Math.sin(v.z * 6)) * 0.015;
        v.addScaledVector(v.clone().normalize(), noise);
        
        // Deep wide top indentation (crater)
        if (v.y > 0.45) {
          const factor = (v.y - 0.45) / 0.55; 
          v.y -= factor * 0.32; // Deep pull down
          // Widen the crater rim slightly
          const squeeze = Math.sin(factor * Math.PI) * 0.05;
          v.x *= (1 + squeeze);
          v.z *= (1 + squeeze);
        } 
        // Bottom dimple
        else if (v.y < -0.65) {
          const factor = (-v.y - 0.65) / 0.35;
          v.y += Math.pow(factor, 2) * 0.08;
        }
        
        posAttr.setXYZ(i, v.x, v.y, v.z);
      }
      bodyGeom.computeVertexNormals();

      const body = new THREE.Mesh(bodyGeom, blueberryMat);
      group.add(body);

      // The Calyx Crown (the star on top)
      const crownGroup = new THREE.Group();
      
      // The raised wrinkled rim of the calyx
      const ringGeom = new THREE.TorusGeometry(0.32, 0.05, 12, 32);
      const ringPos = ringGeom.attributes.position;
      for(let i=0; i<ringPos.count; i++) {
        const rv = new THREE.Vector3().fromBufferAttribute(ringPos, i);
        const angle = Math.atan2(rv.y, rv.x);
        // Wrinkle the ring 5 times to match the 5 teeth
        const radiusNoise = Math.sin(angle * 5) * 0.025;
        rv.x += Math.cos(angle) * radiusNoise;
        rv.y += Math.sin(angle) * radiusNoise;
        ringPos.setXYZ(i, rv.x, rv.y, rv.z);
      }
      ringGeom.computeVertexNormals();
      const ring = new THREE.Mesh(ringGeom, crownMat);
      ring.rotation.x = Math.PI / 2;
      ring.position.y = 0.65; // sit inside crater rim
      crownGroup.add(ring);

      // The 5 leaf-like sepals (the "points" of the star)
      const toothCount = 5;
      const toothGeom = new THREE.ConeGeometry(0.14, 0.38, 5);
      toothGeom.scale(1, 1, 0.15); // flatten deeply into a leaf
      toothGeom.translate(0, 0.19, 0); // move pivot to base
      
      // Bend the tooth curve
      const tPos = toothGeom.attributes.position;
      for(let j=0; j<tPos.count; j++) {
         const tv = new THREE.Vector3().fromBufferAttribute(tPos, j);
         tv.z += Math.pow(tv.y, 1.8) * 0.6; // curve leaf towards +Z
         tPos.setXYZ(j, tv.x, tv.y, tv.z);
      }
      toothGeom.computeVertexNormals();

      for (let i = 0; i < toothCount; i++) {
        const angle = (i / toothCount) * Math.PI * 2;
        const tooth = new THREE.Mesh(toothGeom, crownMat);
        
        // Position on the ring
        tooth.position.set(Math.cos(angle) * 0.32, 0.64, Math.sin(angle) * 0.32);
        
        // Point local +Z to the center of the crater
        tooth.lookAt(0, 0.64, 0);
        
        // Fold them inwards into the crater (pitch local +Y towards local +Z)
        tooth.rotateX(Math.PI / 4.5); 
        
        // Add random organic imperfection tilt
        tooth.rotateZ((Math.random() - 0.5) * 0.15);

        crownGroup.add(tooth);
      }
      group.add(crownGroup);

      // Bottom Stem Scar
      const scarGeom = new THREE.CylinderGeometry(0.04, 0.04, 0.02, 12);
      const scar = new THREE.Mesh(scarGeom, scarMat);
      scar.position.y = -0.88;
      scar.rotation.x = 0.1;
      scar.rotation.z = -0.1;
      group.add(scar);

      group.userData = { materials: [blueberryMat, crownMat, scarMat] };
      return group;
    };

    // Load initial fruit mesh
    let activeFruitMesh = createBlackberry();
    if (transitionRef.current.currentFruit === 'raspberry') {
      activeFruitMesh = createRaspberry();
      fillLight.color.setHex(0xe01b60);
    } else if (transitionRef.current.currentFruit === 'blueberry') {
      activeFruitMesh = createBlueberry();
      fillLight.color.setHex(0x0077b6);
    }
    fruitParentGroup.add(activeFruitMesh);

    // 6. Interaction Event Handlers
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.targetX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.targetY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // 7. Animation Loop
    let animationFrameId: number;
    
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!renderer || !scene || !camera) return;

      let opacityFactor = 1.0;

      if (!disableScrollFade) {
        // Read scroll values directly from window (Lag-free approach)
        const scrolled = window.scrollY;
        const viewportHeight = window.innerHeight;
        const scrollPercent = Math.min(scrolled / (viewportHeight * 0.85), 1);

        // Performant direct DOM updates for canvas opacity
        if (containerRef.current) {
          containerRef.current.style.opacity = Math.max(1 - scrollPercent * 1.5, 0).toString();
        }

        // Performant direct DOM updates for giant header text transform & opacity
        const giantText = document.querySelector('.giant-bg-text') as HTMLDivElement | null;
        if (giantText) {
          giantText.style.transform = `translate(-50%, -50%) translateX(${scrollPercent * -100}px) scale(${1 - scrollPercent * 0.15})`;
          giantText.style.opacity = Math.max((1 - scrollPercent * 1.3) * 0.98, 0).toString();
        }

        // Scroll-linked adjustments: scale down & push back
        const scrollFactor = Math.min(scrollPercent / 0.8, 1);
        const baseScale = 1.38;
        const targetScale = (1.0 - scrollFactor * 0.96) * baseScale;
        
        fruitParentGroup.scale.set(targetScale, targetScale, targetScale);
        fruitParentGroup.position.z = -scrollFactor * 2.8;

        opacityFactor = Math.max(1 - scrollPercent * 1.6, 0);
      } else {
        // Stable inside a card
        const cardBaseScale = 1.15;
        fruitParentGroup.scale.set(cardBaseScale, cardBaseScale, cardBaseScale);
        fruitParentGroup.position.z = 0;
        
        if (containerRef.current) {
          containerRef.current.style.opacity = '1';
        }
      }

      // Mouse Parallax smooth lerping
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;

      // Spin + Parallax
      fruitParentGroup.rotation.y += 0.0055;
      fruitParentGroup.rotation.x = mouseRef.current.y * 0.38;
      fruitParentGroup.rotation.z = -mouseRef.current.x * 0.18;

      // Floating micro-animation
      const time = clock.getElapsedTime();
      fruitParentGroup.position.y = Math.sin(time * 1.3) * 0.09;

      // Handle Fruit Transition
      const trans = transitionRef.current;
      if (trans.isTransitioning) {
        trans.opacity += (trans.targetOpacity - trans.opacity) * 0.12;

        if (trans.opacity < 0.02) {
          fruitParentGroup.remove(activeFruitMesh);

          if (activeFruit === 'blackberry') {
            activeFruitMesh = createBlackberry();
            fillLight.color.setHex(0x7b2cbf); // purple
          } else if (activeFruit === 'raspberry') {
            activeFruitMesh = createRaspberry();
            fillLight.color.setHex(0xd81b60); // pink-red
          } else if (activeFruit === 'blueberry') {
            activeFruitMesh = createBlueberry();
            fillLight.color.setHex(0x0077b6); // blue
          }

          fruitParentGroup.add(activeFruitMesh);
          trans.currentFruit = activeFruit;
          trans.targetOpacity = 1.0;
        }
      } else {
        trans.opacity = opacityFactor;
      }

      // Apply opacity factors to materials
      const activeMaterials: THREE.Material[] = activeFruitMesh.userData.materials || [];
      activeMaterials.forEach((mat) => {
        mat.opacity = trans.isTransitioning ? Math.min(trans.opacity, opacityFactor) : opacityFactor;
      });

      if (trans.isTransitioning && trans.opacity > 0.98) {
        trans.isTransitioning = false;
      }

      renderer.render(scene, camera);
    };

    const clock = new THREE.Clock();
    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, [activeFruit]); // Re-run effect only when switching active fruit model

  return (
    <div 
      ref={containerRef} 
      className="canvas-container"
    />
  );
};
