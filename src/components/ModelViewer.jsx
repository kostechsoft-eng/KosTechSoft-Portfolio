import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  Center,
  useGLTF,
} from "@react-three/drei";

import model from "../assets/cad/mechanical-component-01/precision-mechanical-component.glb";

function Model() {
  const { scene } = useGLTF(model);

  return (
    <Center
      top
      bottom
    >
      <primitive
        object={scene}
        scale={8}
      />
    </Center>
  );
}

function ModelViewer() {
  return (
    <div className="relative h-[550px] w-full overflow-hidden border border-white/10 bg-[#0b0c0d]">

      <Canvas
        camera={{
          position: [4, 3, 4],
          fov: 40,
        }}
      >
        <ambientLight intensity={1.8} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={2.5}
        />

        <directionalLight
          position={[-5, 3, -5]}
          intensity={1.5}
        />

        <Environment preset="studio" />

        <Model />

        <OrbitControls
          enablePan={false}
          enableZoom={true}
          enableRotate={true}
          minDistance={2}
          maxDistance={15}
          target={[0, 0, 0]}
        />
      </Canvas>

      <div className="pointer-events-none absolute bottom-5 left-1/2 -translate-x-1/2 border border-white/10 bg-black/70 px-4 py-2 text-xs text-white/40 backdrop-blur">
        Drag to rotate • Scroll to zoom
      </div>

    </div>
  );
}

export default ModelViewer;