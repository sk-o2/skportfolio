 
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame , useThree } from '@react-three/fiber'
import constructScene from '../assets/3d/construct.glb'
import {a} from '@react-spring/three'

const Construct=(props) => {
    const constructRef = useRef()

   useFrame (() => {
    if (constructRef.current){
        constructRef.current.rotation.y +=0.01;
    }
   })

  const { nodes, materials, animations } = useGLTF(constructScene)
  const { actions } = useAnimations(animations, constructRef)
  return (

    // Dont afraid whatever written below cause thats the model code only you dont have to wrrite that you'll get it 
    <a.group ref={constructRef} {...props} >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.217}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Empty_USE_RIG_65" position={[0, 0, 2.502]}>
                <group
                  name="71884j_large_flames_0"
                  position={[0.666, 1.019, -3.969]}
                  rotation={[-0.576, -0.014, 0.015]}
                  scale={[0.283, 0.283, 0.487]}>
                  <mesh
                    name="Object_5"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_5.geometry}
                    material={materials['71884j_large']}
                  />
                </group>
                <group
                  name="Armature_4"
                  position={[0.019, 0.033, -2.547]}
                  rotation={[-0.073, -0.232, -0.545]}
                  scale={0.781}>
                  <group name="GLTF_created_0">
                    <primitive object={nodes.GLTF_created_0_rootJoint} />
                    <skinnedMesh
                      name="Object_14"
                      geometry={nodes.Object_14.geometry}
                      material={materials['Material.001']}
                      skeleton={nodes.Object_14.skeleton}
                    />
                    <skinnedMesh
                      name="Object_17"
                      geometry={nodes.Object_17.geometry}
                      material={materials['prox_easy_spec.005']}
                      skeleton={nodes.Object_17.skeleton}
                    />
                    <skinnedMesh
                      name="Object_20"
                      geometry={nodes.Object_20.geometry}
                      material={materials.prox_emission}
                      skeleton={nodes.Object_20.skeleton}
                    />
                    <skinnedMesh
                      name="Object_23"
                      geometry={nodes.Object_23.geometry}
                      material={materials.prox_alum}
                      skeleton={nodes.Object_23.skeleton}
                    />
                    <skinnedMesh
                      name="Object_24"
                      geometry={nodes.Object_24.geometry}
                      material={materials.prox_kevlar}
                      skeleton={nodes.Object_24.skeleton}
                    />
                    <skinnedMesh
                      name="Object_27"
                      geometry={nodes.Object_27.geometry}
                      material={materials['Material.001']}
                      skeleton={nodes.Object_27.skeleton}
                    />
                    <skinnedMesh
                      name="Object_30"
                      geometry={nodes.Object_30.geometry}
                      material={materials['Material.001']}
                      skeleton={nodes.Object_30.skeleton}
                    />
                    <skinnedMesh
                      name="Object_33"
                      geometry={nodes.Object_33.geometry}
                      material={materials['Material.001']}
                      skeleton={nodes.Object_33.skeleton}
                    />
                    <skinnedMesh
                      name="Object_36"
                      geometry={nodes.Object_36.geometry}
                      material={materials['Material.001']}
                      skeleton={nodes.Object_36.skeleton}
                    />
                    <group
                      name="BezierCurve001_27_correction"
                      position={[0.764, 0.133, 3.168]}
                      rotation={[-0.058, 0.236, 0.543]}
                      scale={1.28}>
                      <group name="BezierCurve001_27" />
                    </group>
                    <group
                      name="Cylinder011_40_correction"
                      position={[0.764, 0.133, 3.168]}
                      rotation={[-0.058, 0.236, 0.543]}
                      scale={1.28}>
                      <group name="Cylinder011_40" />
                    </group>
                    <group
                      name="Light_45_correction"
                      position={[0.764, 0.133, 3.168]}
                      rotation={[-0.058, 0.236, 0.543]}
                      scale={1.28}>
                      <group name="Light_45" />
                    </group>
                    <group
                      name="Light_frame_46_correction"
                      position={[0.764, 0.133, 3.168]}
                      rotation={[-0.058, 0.236, 0.543]}
                      scale={1.28}>
                      <group name="Light_frame_46" />
                    </group>
                    <group
                      name="Main_sphere_2_53_correction"
                      position={[0.764, 0.133, 3.168]}
                      rotation={[-0.058, 0.236, 0.543]}
                      scale={1.28}>
                      <group name="Main_sphere_2_53" />
                    </group>
                    <group
                      name="Main_sphere_3_55_correction"
                      position={[0.764, 0.133, 3.168]}
                      rotation={[-0.058, 0.236, 0.543]}
                      scale={1.28}>
                      <group name="Main_sphere_3_55" />
                    </group>
                    <group
                      name="Pipe_1_57_correction"
                      position={[0.764, 0.133, 3.168]}
                      rotation={[-0.058, 0.236, 0.543]}
                      scale={1.28}>
                      <group name="Pipe_1_57" />
                    </group>
                    <group
                      name="Pipe_2_59_correction"
                      position={[0.764, 0.133, 3.168]}
                      rotation={[-0.058, 0.236, 0.543]}
                      scale={1.28}>
                      <group name="Pipe_2_59" />
                    </group>
                  </group>
                </group>
                <group
                  name="Armature001_8"
                  position={[0, 1.787, -2.492]}
                  rotation={[-Math.PI / 6, 0, 0]}
                  scale={0.781}>
                  <group name="GLTF_created_1">
                    <primitive object={nodes.GLTF_created_1_rootJoint} />
                    <skinnedMesh
                      name="Object_45"
                      geometry={nodes.Object_45.geometry}
                      material={materials['Material.001']}
                      skeleton={nodes.Object_45.skeleton}
                    />
                    <skinnedMesh
                      name="Object_48"
                      geometry={nodes.Object_48.geometry}
                      material={materials['prox_easy_spec.005']}
                      skeleton={nodes.Object_48.skeleton}
                    />
                    <skinnedMesh
                      name="Object_51"
                      geometry={nodes.Object_51.geometry}
                      material={materials.prox_kevlar}
                      skeleton={nodes.Object_51.skeleton}
                    />
                    <skinnedMesh
                      name="Object_54"
                      geometry={nodes.Object_54.geometry}
                      material={materials.prox_emission}
                      skeleton={nodes.Object_54.skeleton}
                    />
                    <skinnedMesh
                      name="Object_57"
                      geometry={nodes.Object_57.geometry}
                      material={materials['Material.001']}
                      skeleton={nodes.Object_57.skeleton}
                    />
                    <skinnedMesh
                      name="Object_60"
                      geometry={nodes.Object_60.geometry}
                      material={materials['Material.001']}
                      skeleton={nodes.Object_60.skeleton}
                    />
                    <skinnedMesh
                      name="Object_63"
                      geometry={nodes.Object_63.geometry}
                      material={materials['Material.001']}
                      skeleton={nodes.Object_63.skeleton}
                    />
                    <skinnedMesh
                      name="Object_66"
                      geometry={nodes.Object_66.geometry}
                      material={materials['Material.001']}
                      skeleton={nodes.Object_66.skeleton}
                    />
                    <group
                      name="BezierCurve002_28_correction"
                      position={[0, -3.577, 1.619]}
                      rotation={[Math.PI / 6, 0, 0]}
                      scale={1.28}>
                      <group name="BezierCurve002_28" />
                    </group>
                    <group
                      name="Cylinder005_39_correction"
                      position={[0, -3.577, 1.619]}
                      rotation={[Math.PI / 6, 0, 0]}
                      scale={1.28}>
                      <group name="Cylinder005_39" />
                    </group>
                    <group
                      name="Light_frame001_47_correction"
                      position={[0, -3.577, 1.619]}
                      rotation={[Math.PI / 6, 0, 0]}
                      scale={1.28}>
                      <group name="Light_frame001_47" />
                    </group>
                    <group
                      name="Light001_48_correction"
                      position={[0, -3.577, 1.619]}
                      rotation={[Math.PI / 6, 0, 0]}
                      scale={1.28}>
                      <group name="Light001_48" />
                    </group>
                    <group
                      name="Main_sphere_2001_54_correction"
                      position={[0, -3.577, 1.619]}
                      rotation={[Math.PI / 6, 0, 0]}
                      scale={1.28}>
                      <group name="Main_sphere_2001_54" />
                    </group>
                    <group
                      name="Main_sphere_3001_56_correction"
                      position={[0, -3.577, 1.619]}
                      rotation={[Math.PI / 6, 0, 0]}
                      scale={1.28}>
                      <group name="Main_sphere_3001_56" />
                    </group>
                    <group
                      name="Pipe_1001_58_correction"
                      position={[0, -3.577, 1.619]}
                      rotation={[Math.PI / 6, 0, 0]}
                      scale={1.28}>
                      <group name="Pipe_1001_58" />
                    </group>
                    <group
                      name="Pipe_2001_60_correction"
                      position={[0, -3.577, 1.619]}
                      rotation={[Math.PI / 6, 0, 0]}
                      scale={1.28}>
                      <group name="Pipe_2001_60" />
                    </group>
                  </group>
                </group>
                <group
                  name="Base_cube_a_9"
                  position={[0.019, 0.033, -2.547]}
                  rotation={[-2.006, -0.983, 0.62]}
                  scale={[-0.016, 0.012, 0.03]}>
                  <mesh
                    name="Object_68"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_68.geometry}
                    material={materials['Material.001']}
                  />
                </group>
                <group
                  name="Base_cube_a001_10"
                  position={[-0.1, 1.601, -2.506]}
                  rotation={[Math.PI, -Math.PI / 2, 0]}
                  scale={[-0.016, 0.012, 0.03]}>
                  <mesh
                    name="Object_70"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_70.geometry}
                    material={materials['Material.001']}
                  />
                </group>
                <group
                  name="Base_cube_b_11"
                  position={[0.019, 0.033, -2.547]}
                  rotation={[-2.716, 0.468, 0.37]}
                  scale={[-0.016, 0.009, 0.027]}>
                  <mesh
                    name="Object_72"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_72.geometry}
                    material={materials['Material.001']}
                  />
                </group>
                <group
                  name="Base_cube_b001_12"
                  position={[0, 1.628, -2.594]}
                  rotation={[-Math.PI, 0, 0]}
                  scale={[-0.016, 0.009, 0.027]}>
                  <mesh
                    name="Object_74"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_74.geometry}
                    material={materials['Material.001']}
                  />
                </group>
                <group
                  name="Base_cube_c_13"
                  position={[0.019, 0.033, -2.547]}
                  rotation={[-2.006, -0.983, 0.62]}
                  scale={[-0.016, 0.012, 0.03]}>
                  <mesh
                    name="Object_76"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_76.geometry}
                    material={materials['Material.001']}
                  />
                </group>
                <group
                  name="Base_cube_c001_14"
                  position={[0.1, 1.601, -2.506]}
                  rotation={[Math.PI, -Math.PI / 2, 0]}
                  scale={[-0.016, 0.012, 0.03]}>
                  <mesh
                    name="Object_78"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_78.geometry}
                    material={materials['Material.001']}
                  />
                </group>
                <group
                  name="Base_cube_d_15"
                  position={[0.019, 0.033, -2.547]}
                  rotation={[-2.716, 0.468, 0.37]}
                  scale={[-0.016, 0.009, 0.027]}>
                  <mesh
                    name="Object_80"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_80.geometry}
                    material={materials['Material.001']}
                  />
                </group>
                <group
                  name="Base_cube_d001_16"
                  position={[0, 1.628, -2.418]}
                  rotation={[-Math.PI, 0, 0]}
                  scale={[-0.016, 0.009, 0.027]}>
                  <mesh
                    name="Object_82"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_82.geometry}
                    material={materials['Material.001']}
                  />
                </group>
                <group
                  name="base_cyl_a_17"
                  position={[0.019, 0.033, -2.547]}
                  rotation={[-0.073, -0.232, -0.545]}
                  scale={[0.009, 0.14, 0.009]}>
                  <mesh
                    name="Object_84"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_84.geometry}
                    material={materials['Material.001']}
                  />
                </group>
                <group
                  name="base_cyl_a001_18"
                  position={[0, 1.666, -2.436]}
                  rotation={[-Math.PI / 6, 0, 0]}
                  scale={[0.009, 0.14, 0.009]}>
                  <mesh
                    name="Object_86"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_86.geometry}
                    material={materials['Material.001']}
                  />
                </group>
                <group
                  name="base_cyl_b_19"
                  position={[0.019, 0.033, -2.547]}
                  rotation={[0.095, 1.08, 0.295]}
                  scale={[0.009, 0.14, 0.009]}>
                  <mesh
                    name="Object_88"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_88.geometry}
                    material={materials['Material.001']}
                  />
                </group>
                <group
                  name="base_cyl_b001_20"
                  position={[0.069, 1.666, -2.505]}
                  rotation={[-Math.PI / 2, Math.PI / 3, Math.PI / 2]}
                  scale={[0.009, 0.14, 0.009]}>
                  <mesh
                    name="Object_90"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_90.geometry}
                    material={materials['Material.001']}
                  />
                </group>
                <group
                  name="base_cyl_c_21"
                  position={[0.951, 1.231, -3.288]}
                  rotation={[1.019, -0.585, -0.064]}
                  scale={[0.009, 0.14, 0.009]}>
                  <mesh
                    name="Object_92"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_92.geometry}
                    material={materials['Material.001']}
                  />
                </group>
                <group
                  name="base_cyl_c001_22"
                  position={[0, 1.666, -2.574]}
                  rotation={[Math.PI / 6, 0, 0]}
                  scale={[0.009, 0.14, 0.009]}>
                  <mesh
                    name="Object_94"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_94.geometry}
                    material={materials['Material.001']}
                  />
                </group>
                <group
                  name="base_cyl_d_23"
                  position={[-0.939, 1.421, -2.449]}
                  rotation={[1.649, 0.594, -0.995]}
                  scale={[0.009, 0.14, 0.009]}>
                  <mesh
                    name="Object_96"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_96.geometry}
                    material={materials['Material.001']}
                  />
                </group>
                <group
                  name="base_cyl_d001_24"
                  position={[-0.069, 1.666, -2.505]}
                  rotation={[Math.PI / 2, Math.PI / 3, -Math.PI / 2]}
                  scale={[0.009, 0.14, 0.009]}>
                  <mesh
                    name="Object_98"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_98.geometry}
                    material={materials['Material.001']}
                  />
                </group>
                <group
                  name="basic_ringnotchslight_25"
                  position={[0.699, 1.034, -2.293]}
                  rotation={[-0.539, 0.594, -1.267]}
                  scale={0.286}>
                  <mesh
                    name="Object_100"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_100.geometry}
                    material={materials['prox_alum.005']}
                  />
                  <mesh
                    name="Object_101"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_101.geometry}
                    material={materials['prox_kevlar.005']}
                  />
                  <mesh
                    name="Object_102"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_102.geometry}
                    material={materials['prox_easy_spec.005']}
                  />
                </group>
                <group
                  name="Circle_30"
                  position={[0.668, 1.459, -3.289]}
                  rotation={[1.002, -0.284, 3.141]}
                  scale={0.179}>
                  <mesh
                    name="Object_104"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_104.geometry}
                    material={materials.prox_kevlar}
                  />
                </group>
                <group
                  name="Circle001_31"
                  position={[0.86, 1.487, -3.014]}
                  rotation={[1.002, -0.284, 3.141]}
                  scale={0.179}>
                  <mesh
                    name="Object_106"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_106.geometry}
                    material={materials.prox_alum}
                  />
                </group>
                <group
                  name="Circle002_32"
                  position={[0.579, -1.261, -1.175]}
                  rotation={[3.139, 0.04, 0.008]}
                  scale={0.156}>
                  <mesh
                    name="Object_108"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_108.geometry}
                    material={materials.prox_alum}
                  />
                </group>
                <group
                  name="Circle003_33"
                  position={[0.392, -1.045, -1.24]}
                  rotation={[3.139, 0.04, 0.008]}
                  scale={0.156}>
                  <mesh
                    name="Object_110"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_110.geometry}
                    material={materials['prox_alum.005']}
                  />
                </group>
                <group
                  name="Cylinder_34"
                  position={[0, 0, -2.502]}
                  rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                  <mesh
                    name="Object_112"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_112.geometry}
                    material={materials.prox_kevlar}
                  />
                  <mesh
                    name="Object_113"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_113.geometry}
                    material={materials.screen}
                  />
                  <mesh
                    name="Object_114"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_114.geometry}
                    material={materials.prox_alum}
                  />
                </group>
                <group
                  name="Cylinder001_35"
                  position={[0, 0, -2.502]}
                  rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                  <mesh
                    name="Object_116"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_116.geometry}
                    material={materials.prox_kevlar}
                  />
                </group>
                <group
                  name="Cylinder002_36"
                  position={[0, 0, -2.502]}
                  rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                  <mesh
                    name="Object_118"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_118.geometry}
                    material={materials.prox_alum}
                  />
                </group>
                <group
                  name="Cylinder003_37"
                  position={[0.99, 0, -1.516]}
                  rotation={[Math.PI / 2, 0, 0]}>
                  <mesh
                    name="Object_120"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_120.geometry}
                    material={materials.prox_kevlar}
                  />
                </group>
                <group
                  name="Cylinder004_38"
                  position={[0.99, 0, -1.516]}
                  rotation={[Math.PI / 2, 0, 0]}>
                  <mesh
                    name="Object_122"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_122.geometry}
                    material={materials.prox_alum}
                  />
                  <mesh
                    name="Object_123"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_123.geometry}
                    material={materials.prox_kevlar}
                  />
                </group>
                <group
                  name="Flange_Cap_41"
                  position={[0.917, 0.697, -1.486]}
                  rotation={[0.906, -0.177, -0.324]}
                  scale={0.09}>
                  <mesh
                    name="Object_125"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_125.geometry}
                    material={materials['prox_alum.003']}
                  />
                  <mesh
                    name="Object_126"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_126.geometry}
                    material={materials['prox_kevlar.003']}
                  />
                  <mesh
                    name="Object_127"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_127.geometry}
                    material={materials['prox_easy_spec.003']}
                  />
                </group>
                <group
                  name="hatchcoupler_42"
                  position={[0.795, 0.938, -3.457]}
                  rotation={[1.278, 1.221, -1.963]}
                  scale={0.186}>
                  <mesh
                    name="Object_129"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_129.geometry}
                    material={materials['prox_alum.007']}
                  />
                  <mesh
                    name="Object_130"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_130.geometry}
                    material={materials['prox_kevlar.007']}
                  />
                  <mesh
                    name="Object_131"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_131.geometry}
                    material={materials['prox_easy_spec.007']}
                  />
                </group>
                <group
                  name="jet_43"
                  position={[0.668, 1.373, -3.423]}
                  rotation={[1.002, -0.284, 3.141]}
                  scale={0.179}>
                  <mesh
                    name="Object_133"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_133.geometry}
                    material={materials['prox_kevlar.001']}
                  />
                  <mesh
                    name="Object_134"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_134.geometry}
                    material={materials.prox_alum}
                  />
                </group>
                <group
                  name="jet001_44"
                  position={[0.578, -1.4, -1.175]}
                  rotation={[3.139, 0.04, 0.008]}
                  scale={0.156}>
                  <mesh
                    name="Object_136"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_136.geometry}
                    material={materials['prox_kevlar.001']}
                  />
                  <mesh
                    name="Object_137"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_137.geometry}
                    material={materials.prox_alum}
                  />
                </group>
                <group
                  name="long_gater_49"
                  position={[1.43, 0, -2.502]}
                  rotation={[0, 0, -Math.PI / 2]}
                  scale={0.735}>
                  <mesh
                    name="Object_139"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_139.geometry}
                    material={materials['prox_alum.002']}
                  />
                  <mesh
                    name="Object_140"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_140.geometry}
                    material={materials['prox_kevlar.002']}
                  />
                  <mesh
                    name="Object_141"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_141.geometry}
                    material={materials['prox_easy_spec.002']}
                  />
                </group>
                <group
                  name="long_gater001_50"
                  position={[0.994, -0.01, -1.206]}
                  rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                  scale={0.436}>
                  <mesh
                    name="Object_143"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_143.geometry}
                    material={materials['prox_alum.002']}
                  />
                  <mesh
                    name="Object_144"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_144.geometry}
                    material={materials['prox_kevlar.002']}
                  />
                  <mesh
                    name="Object_145"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_145.geometry}
                    material={materials['prox_easy_spec.002']}
                  />
                  <mesh
                    name="Object_146"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_146.geometry}
                    material={materials.prox_emission}
                  />
                </group>
                <group
                  name="Main_spehere_51"
                  position={[0.019, 0.033, -2.547]}
                  rotation={[0.426, -0.468, -0.37]}
                  scale={0.063}>
                  <mesh
                    name="Object_148"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_148.geometry}
                    material={materials['Material.001']}
                  />
                </group>
                <group name="Main_spehere001_52" position={[0, 1.782, -2.497]} scale={0.063}>
                  <mesh
                    name="Object_150"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_150.geometry}
                    material={materials['Material.001']}
                  />
                </group>
                <group
                  name="reactorcore_61"
                  position={[0.647, 0.646, -1.851]}
                  rotation={[0, Math.PI / 2, 0]}>
                  <mesh
                    name="Object_152"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_152.geometry}
                    material={materials['prox_alum.001']}
                  />
                  <mesh
                    name="Object_153"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_153.geometry}
                    material={materials['prox_kevlar.001']}
                  />
                  <mesh
                    name="Object_154"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_154.geometry}
                    material={materials['prox_easy_spec.001']}
                  />
                </group>
                <group
                  name="short_gater_62"
                  position={[0.988, 0.368, -1.107]}
                  rotation={[0, 0, 0.037]}
                  scale={0.108}>
                  <mesh
                    name="Object_156"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_156.geometry}
                    material={materials['prox_alum.004']}
                  />
                  <mesh
                    name="Object_157"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_157.geometry}
                    material={materials['prox_kevlar.004']}
                  />
                </group>
                <group
                  name="Sphere_63"
                  position={[0, 0, -2.502]}
                  rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                  <mesh
                    name="Object_159"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_159.geometry}
                    material={materials.GLASS}
                  />
                </group>
                <group
                  name="Sphere001_64"
                  position={[0.746, 0.571, -1.913]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={0.059}>
                  <mesh
                    name="Object_161"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_161.geometry}
                    material={materials.prox_emission}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </a.group>
  )
}

export default Construct 