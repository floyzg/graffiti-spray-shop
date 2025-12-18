"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import HeroBg from "@/assets/bg.svg";

function SprayModel() {
  const { scene } = useGLTF("/models/spray_can.glb");
  const ref = useRef<any>(null);

  scene.position.set(0, 0, 0);
  scene.scale.set(0.6, 0.6, 0.6);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.005;
    }
  });

  return <primitive ref={ref} object={scene} />;
}

export default function Hero() {
  return (
    <section className="relative flex-1 overflow-hidden pt-16">
      {/* BG */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HeroBg.src})` }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0,#000000b3_65%,#000000ee_100%)]" />

      {/* Декоративные углы – через flex, чтобы отступы были стабильные */}
      <div className="pointer-events-none absolute inset-0 flex flex-col justify-between">
        <div className="flex justify-end">
          <div className="mt-3 mr-3 h-6 w-6 border-2 border-[#ff117e] border-b-0 border-l-0" />
        </div>
        <div className="flex justify-start">
          <div className="mb-3 ml-3 h-6 w-6 border-2 border-[#ff117e] border-t-0 border-r-0" />
        </div>
      </div>

      <div className="relative z-10 flex h-full min-h-82.5 items-center justify-center p-2">
        <Canvas
          camera={{ position: [0, 0, 3], fov: 45 }}
          style={{ touchAction: "pan-y" }}
        >
          <hemisphereLight
            groundColor={"#ffffff"}
            intensity={8}
          />
          <OrbitControls enableZoom={false} enablePan={false} />
          <SprayModel />
        </Canvas>
      </div>
    </section>
  );
}
