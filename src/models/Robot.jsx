import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { a } from "@react-spring/three";
import scene from "../assets/3d/robot.glb";
import { useEffect } from "react";
const Robot = ({ walk = false, ...props }) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(scene);
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    const action = actions["Walking"] || Object.values(actions)[0];
    if (walk && action) {
      action.play();
    } else if (action) {
      action.stop();
    }
  }, [walk, actions]);

  return (
    <a.group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="220ce007974341efa5461929cfd1470ffbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.material}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <group name="Object_6" />
                  <group
                    name="L_ankle_Goal"
                    position={[75.791, 38.495, -4.736]}
                    rotation={[-2.273, -0.043, -2.448]}
                  />
                  <group
                    name="R_ankle_Goal"
                    position={[-71.654, 37.849, -4.736]}
                    rotation={[-2.273, 0.043, -2.448]}
                  />
                  <group
                    name="hipcontrol"
                    position={[0, 287.002, -12.023]}
                    rotation={[2.103, 0, Math.PI]}
                  >
                    <group
                      name="spinecontrol"
                      position={[0, 0, -28.295]}
                      rotation={[0.105, 0, 0]}
                    >
                      <group
                        name="chestcontrol"
                        position={[0, 6.702, -61.974]}
                        rotation={[-1.143, 0, 0]}
                      >
                        <group
                          name="L_arm_Goal"
                          position={[-113.879, 64.687, 12.926]}
                          rotation={[-1.571, 0.454, -1.571]}
                        >
                          <group
                            name="L_arm_Pole"
                            position={[105.635, 2.44, -127.32]}
                            rotation={[0.073, 0.711, -0.051]}
                          />
                          <group
                            name="L_wrist_Goal"
                            position={[-22.959, 49.001, -247.63]}
                            rotation={[0.047, 0.706, -0.031]}
                          >
                            <group
                              name="L_thumb3_Goal"
                              position={[36.117, 23.516, -43.192]}
                              rotation={[0.23, -0.225, -1.019]}
                            />
                            <group
                              name="L_fingers4_Goal"
                              position={[20.789, 18.231, -76.883]}
                              rotation={[1.174, -0.946, 2.716]}
                            />
                          </group>
                        </group>
                        <group
                          name="R_arm_Goal"
                          position={[113.879, 64.687, 12.926]}
                          rotation={[-1.571, -0.454, -1.571]}
                        >
                          <group
                            name="R_arm_Pole"
                            position={[105.638, -2.294, -127.32]}
                            rotation={[-0.074, 0.711, -0.555]}
                          />
                          <group
                            name="R_wrist_Goal"
                            position={[-28.574, -56.766, -244.915]}
                            rotation={[-0.048, 0.706, -0.575]}
                          >
                            <group
                              name="R_thumb3_Goal"
                              position={[43.078, 1.327, -43.192]}
                              rotation={[-0.058, -0.316, -0.925]}
                            />
                            <group
                              name="R_fingers4_Goal"
                              position={[27.477, -3.09, -76.883]}
                              rotation={[0.092, -1.342, 2.304]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group name="FBotmesh" position={[-105.528, 6.661, 58.953]} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </a.group>
  );
};

export default Robot;
