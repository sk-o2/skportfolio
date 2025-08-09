import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { a } from "@react-spring/three";
import robotscene from "../assets/3d/robot.glb";
import { useEffect } from "react";
const Robot = ({ walk = false, ...props }) => {
  const group = useRef();
  const { scene, animations } = useGLTF(robotscene);
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    const action = actions["Walking"] || Object.values(actions)[0];
    if (walk && action) {
      action.play();
    } else if (action) {
      action.stop();
    }
  }, [walk, actions]);

  return (<a.primitive ref={group} {...props} dispose={null} object={scene} />);
};

export default Robot;
