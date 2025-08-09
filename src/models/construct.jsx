import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { a } from '@react-spring/three';
import constructScene from '../assets/3d/construct.glb';

const Construct = (props) => {
  const constructRef = useRef();
  const { scene, animations } = useGLTF(constructScene);
  const { actions } = useAnimations(animations, constructRef);

  useFrame(() => {
    if (constructRef.current) {
      constructRef.current.rotation.y += 0.01;
    }
  });

  return (
    <a.primitive ref={constructRef} object={scene} {...props} />
  );
};

export default Construct;
 