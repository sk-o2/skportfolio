import { Link } from "react-router-dom";
import { CTA } from "../components";
import { Canvas } from "@react-three/fiber";
import Construct from "../models/construct";
import { Suspense, useEffect, useRef, useState } from "react";
import { OrbitControls } from "@react-three/drei";
const WebD = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text drop-shadow font-semibold">
          Projects
        </span>
      </h1>

      <p className="text-slate-500 mt-2 leading-relaxed">
        I've worked on various foundational projects like To-Do lists and other
        React.js-based applications. However, this portfolio website stands out
        as one of my best works so far — it also incorporates Three.js for an
        enhanced interactive experience. Since those basic projects don't
        reflect the visual quality of this site, I chose not to showcase them
        here. More advanced projects will be added soon. Stay tuned!
      </p>
      <div className="w-full h-[300px] sm:h-[500px] md:h-[600px]">
        <Canvas
          className=" bg-transparent w-full h-screen "
          camera={{ near: 0.1, far: 1000 }}
        >
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={3} />
          <pointLight position={[100, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.1}
            penumbra={1}
            intensity={2}
          />
          <Construct scale={4} />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>
      <h1 className="text-4xl font-bold flex justify-center">
        Under{"  "}
        <span className="text-4xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
          Construction
        </span>
      </h1>
      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default WebD;
