"use client";

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

// Utility to safely generate random star positions
function generateCleanSpherePoints(count = 5000, radius = 1.2) {
  const buffer = new Float32Array(count);
  random.inSphere(buffer, { radius });

  // Filter out NaN values and ensure length is a multiple of 3
  const cleanBuffer = Array.from(buffer).filter((val) => !isNaN(val));
  const validCount = Math.floor(cleanBuffer.length / 3) * 3;
  return new Float32Array(cleanBuffer.slice(0, validCount));
}

const StarBackground = (props: any) => {
  const ref = useRef<any>();
  const [sphere] = useState(() => generateCleanSpherePoints());

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} frustumCulled {...props}>
        <bufferGeometry attach="geometry">
          <bufferAttribute
            attach="attributes-position"
            count={sphere.length / 3}
            array={sphere}
            itemSize={3}
          />
        </bufferGeometry>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <div className="pointer-events-none fixed inset-0 -z-10 w-full h-full">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);

export default StarsCanvas;
