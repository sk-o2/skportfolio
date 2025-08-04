import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import skyScene from "../assets/3d/space.glb";

export function Sky({ isRotating }) {
  const sky = useGLTF(skyScene);
  const skyRef = useRef();
  const { nodes, materials } = useGLTF(skyScene);
  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.y += 0.25 * delta;
    }
  });
  return (
    <group ref={skyRef} dispose={null}>
      <mesh
        scale={10}
        geometry={nodes.Object_4.geometry}
        material={materials[".003"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}
