import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";
import birdScene from "../assets/3d/bird.glb";

export function Bird({ range = 10, speed = 0.01, yAmplitude = 0.2, yBase = 2, scale = 0.003 }) {
  const birdRef = useRef();
  const { scene, animations } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    actions["Take 001"].play();
  }, []);

  useFrame(({ clock, camera }) => {
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * yAmplitude + yBase;

    if (birdRef.current.position.x > camera.position.x + range) {
      birdRef.current.rotation.y = Math.PI;
    } else if (birdRef.current.position.x < camera.position.x - range) {
      birdRef.current.rotation.y = 0;
    }

    if (birdRef.current.rotation.y === 0) {
      birdRef.current.position.x += speed;
      birdRef.current.position.z -= speed;
    } else {
      birdRef.current.position.x -= speed;
      birdRef.current.position.z += speed;
    }
  });

  return (
    <mesh ref={birdRef} position={[-5, yBase, 1]} scale={[scale, scale, scale]}>
      <primitive object={scene} />
    </mesh>
  );
}
