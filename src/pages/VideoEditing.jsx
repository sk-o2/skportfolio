import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { CTA } from "../components";
import { eceProjects, eceSkills } from "../constants";
import { Sky, Plane } from "../models";
import { Bird } from "../models/Bird";

const videoedit = () => {
  return (
    <div className="relative w-full min-h-screen">
      {/* Background 3D Canvas Scene */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-45">
        <Canvas camera={{ near: 0.1, far: 1000, position: [0, 0, 5] }}>
          <Suspense fallback={null}>
            <directionalLight position={[1, 1, 1]} intensity={2} />
            <ambientLight intensity={0.8} />
            <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />
            <Sky isRotating={true} />
            <Plane isRotating={true} position={[-2, 0.5, -4]} rotation={[0, 20.1, 0]} scale={2.5} />
            <Bird range={30} speed={0.012} yAmplitude={0.4} yBase={3} scale={0.004} />
          </Suspense>
        </Canvas>
      </div>

      {/* Foreground Content */}
      <section className="relative z-10 max-container">
        <h1 className="head-text">
          ECE{" "}
          <span className="blue-gradient_text font-semibold drop-shadow">
            Projects
          </span>
        </h1>

        <div className="mt-5 flex flex-col gap-3 text-slate-400">
          <p>
            A collection of embedded systems, robotics, and IoT hardware projects built during my ECE journey — from sensor-driven robots to wireless communication systems.
          </p>
        </div>

        {/* ── Technical Skills Section (Before Projects) ── */}
        <div className="mt-12">
          <h3 className="subhead-text mb-2">Technical Skills</h3>
          <p className="text-slate-500 text-sm mb-6">Core competencies in microcontrollers, embedded systems, communication protocols, and development tools.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {eceSkills.map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="relative bg-slate-900/40 backdrop-blur-xl border border-slate-800/80 rounded-2xl p-5 flex flex-col gap-3 transition-all duration-300 hover:-translate-y-1 hover:border-slate-700/80 hover:shadow-xl hover:shadow-black/20 group overflow-hidden"
              >
                {/* Accent top border */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${skillGroup.color}`} />

                {/* Category Header */}
                <div className="flex items-center gap-2.5">
                  <span className="text-xl leading-none">{skillGroup.icon}</span>
                  <h4 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                    {skillGroup.category}
                  </h4>
                </div>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {skillGroup.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2.5 py-1 rounded-lg bg-slate-800/80 backdrop-blur-sm text-slate-300 border border-slate-700/60 group-hover:border-slate-600/70 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Hardware Projects Grid ── */}
        <div className="mt-16">
          <h3 className="subhead-text mb-2">Hardware Projects</h3>
          <p className="text-slate-500 text-sm mb-8">Embedded systems & robotics projects built with microcontrollers, sensors, and real-time control logic.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {eceProjects.map((project) => (
              <div
                key={project.id}
                className={`relative bg-slate-900/40 backdrop-blur-xl border border-slate-800/80 ${project.border} rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30 group overflow-hidden`}
              >
                {/* Gradient accent top bar */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${project.accent}`} />

                {/* Header */}
                <div className="flex items-start gap-3">
                  <span className="text-3xl leading-none mt-0.5">{project.icon}</span>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <div className={`mt-1 inline-block text-[10px] font-semibold tracking-widest uppercase bg-gradient-to-r ${project.accent} bg-clip-text text-transparent`}>
                      Hardware Project
                    </div>
                  </div>
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-[11px] px-2 py-0.5 rounded-md bg-slate-800/80 backdrop-blur-sm text-slate-300 border border-slate-700/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Bullet Points */}
                <ul className="flex flex-col gap-2 mt-1">
                  {project.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-400 text-xs leading-relaxed">
                      <span className={`mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-gradient-to-br ${project.accent}`} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-slate-800 mt-16" />

        <CTA />
      </section>
    </div>
  );
};

export default videoedit;
