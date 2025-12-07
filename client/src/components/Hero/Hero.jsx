import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef } from "react";
import HeroBg from "../../assets/bg.svg";

function SprayModel() {
  const { scene } = useGLTF(import.meta.env.BASE_URL + "models/spray_can.glb");
  const ref = useRef();

  scene.position.set(0, 0, 0);
  scene.scale.set(0.6, 0.6, 0.6);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.005;
    }
  });

  return <primitive ref={ref} object={scene} />;
}

const Hero = () => {
  return (
    <section className="relative flex-1 overflow-hidden pt-16">
      {/* BG */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HeroBg})` }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0,#000000b3_65%,#000000ee_100%)]" />

      {/* Декоративные углы – через flex, чтобы отступы были стабильные */}
      <div className="pointer-events-none absolute inset-0 flex flex-col justify-between">
        <div className="flex justify-end">
          <div className="mt-5 mr-3 h-6 w-6 border-2 border-[#ff117e] border-b-0 border-l-0" />
        </div>
        <div className="flex justify-start">
          <div className="mb-3 ml-3 h-6 w-6 border-2 border-[#ff117e] border-t-0 border-r-0" />
        </div>
      </div>

      <div className="relative z-10 flex h-full min-h-[330px] items-center justify-center p-2">
        <Canvas
          camera={{ position: [0, 0, 3], fov: 45 }}
          style={{ touchAction: "pan-y" }}
        >
          <hemisphereLight
            groundColor={"#ffffff"}
            skyColor={"#ffffff"}
            intensity={8}
          />
          <OrbitControls enableZoom={false} enablePan={false} />
          <SprayModel />
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
