import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import HeroBg from "../../assets/bg.svg";

function SprayModel() {
  const { scene } = useGLTF("/models/spray_can.glb");

  // FIX: центрируем модель
  scene.position.set(0, 0, 0);

  // FIX: корректируем ориентацию (если надо)
  scene.rotation.set(0, Math.PI / 4, 0);

  // FIX: уменьшаем чтобы камера не заходила внутрь
  scene.scale.set(0.6, 0.6, 0.6);

  return <primitive object={scene} />;
}

const Hero = () => {
  return (
    <section className="relative flex-1 overflow-hidden pt-16">
      {/* BG */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HeroBg})` }}
      />

      {/* DARK MASK */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0,#000000b3_65%,#000000ee_100%)]" />

      {/* CORNERS */}
      <div className="pointer-events-none absolute right-3 top-20 h-6 w-6 border-2 border-[#ff117e] border-b-0 border-l-0" />
      <div className="pointer-events-none absolute bottom-3 left-3 h-6 w-6 border-2 border-[#ff117e] border-t-0 border-r-0" />

      <div className="relative z-10 flex h-full min-h-[330px] items-center justify-center p-2">
        <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
          <ambientLight intensity={0.5} />
          {/* light */}
          <directionalLight
            position={[2, 5, 2]}
            intensity={2.2}
            color="#ffffff"
          />

          <directionalLight
            position={[-3, 2, -4]}
            intensity={1.2}
            color="#b8d1ff"
          />

          <directionalLight
            position={[0, -3, 5]}
            intensity={1.8}
            color="#ffdfb3"
          />

          <OrbitControls
            enableZoom={false}
            rotateSpeed={0.7}
            maxPolarAngle={Math.PI}
            minPolarAngle={0}
          />

          <SprayModel />
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
