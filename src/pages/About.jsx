import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { experiences, skills } from "../constants";
import { Sky, Bird } from "../models";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  const [activeTab, setActiveTab] = useState("All");

  const categories = ["All", "Frontend", "Backend", "Database", "Version Control"];

  const filteredSkills =
    activeTab === "All"
      ? skills
      : skills.filter((skill) => skill.type === activeTab);

  const skillGradients = {
    CSS: "from-blue-500 via-sky-400 to-cyan-400",
    Git: "from-orange-500 via-amber-500 to-red-500",
    GitHub: "from-purple-500 via-violet-400 to-indigo-400",
    HTML: "from-orange-500 via-red-500 to-amber-500",
    JavaScript: "from-yellow-400 via-amber-400 to-yellow-500",
    MongoDB: "from-emerald-500 via-green-500 to-teal-400",
    React: "from-cyan-400 via-sky-400 to-blue-500",
    "Tailwind CSS": "from-teal-400 via-cyan-400 to-blue-500",
    TypeScript: "from-blue-500 via-indigo-500 to-sky-400",
    "Express.js": "from-slate-400 via-gray-300 to-zinc-400",
    "Node.js": "from-green-500 via-emerald-400 to-teal-500",
  };

  return (
    <div className="relative w-full min-h-screen">
      {/* 3D Background Canvas */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-40">
        <Canvas camera={{ near: 0.1, far: 1000, position: [0, 0, 5] }}>
          <Suspense fallback={null}>
            <directionalLight position={[1, 1, 1]} intensity={2} />
            <ambientLight intensity={0.8} />
            <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />
            <Sky isRotating={true} />
            <Bird range={30} speed={0.012} yAmplitude={0.4} yBase={3} scale={0.004} />
          </Suspense>
        </Canvas>
      </div>

      {/* Foreground Content */}
      <section className="relative z-10 max-container">
        <h1 className="head-text">
          Hello, I'm{" "}
          <span className="blue-gradient_text font-semibold drop-shadow">
            {" "}
            Sumit
          </span>{" "}
          👋
        </h1>

        <div className="mt-5 flex flex-col gap-3 text-slate-400">
          <p>
            I'm a Final-year Electronics & Communication Engineering student with hands-on experience in embedded systems, IoT, robotics, and full-stack development. Skilled in C/C++, Embedded C, Python, Arduino, ESP32, React.js, Node.js, and MongoDB, with experience building and deploying real-world hardware and software applications.
          </p>
        </div>

        {/* Glassmorphism Skills Section */}
        <div className="py-10 flex flex-col">
          <h3 className="subhead-text">My Skills</h3>

          {/* Skill Category Tabs (Glassmorphism) */}
          <div className="mt-6 flex flex-wrap gap-2 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 backdrop-blur-md ${
                  activeTab === cat
                    ? "bg-blue-600/80 text-white border border-blue-400/50 shadow-lg shadow-blue-500/20 scale-105"
                    : "bg-slate-900/40 text-slate-400 border border-slate-800/80 hover:text-white hover:bg-slate-800/60 hover:border-slate-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Skill Cards (Glassmorphism) */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
            {filteredSkills.map((skill) => (
              <div
                key={skill.name}
                className="group relative bg-slate-900/40 backdrop-blur-md border border-slate-800/80 hover:border-blue-500/40 hover:bg-slate-800/60 rounded-2xl p-4 flex flex-col items-center justify-center gap-2.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 overflow-hidden"
              >
                {/* Colorful top accent line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${
                    skillGradients[skill.name] || "from-blue-500 to-cyan-400"
                  }`}
                />

                <div className="w-14 h-14 rounded-xl bg-slate-800/80 backdrop-blur-sm border border-slate-700/60 flex items-center justify-center p-3 shadow-inner group-hover:scale-110 transition-transform">
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs font-semibold text-slate-300 group-hover:text-blue-400 transition-colors text-center">
                  {skill.name}
                </span>
                <span className="text-[10px] text-slate-500 font-medium">
                  {skill.type}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Glassmorphism About / Experience Section */}
        <div className="py-16">
          <h3 className="subhead-text">About Me</h3>
          <div className="mt-5 flex flex-col gap-3 text-slate-400">
            <p>
              Here is a breakdown of my educational background, development experience, and personal interests:
            </p>
          </div>

          {/* 3 Experience Cards (Glassmorphism) */}
          <div className="mt-12 flex">
            <VerticalTimeline>
              {experiences.map((experience) => (
                <VerticalTimelineElement
                  key={experience.title}
                  date={experience.date}
                  iconStyle={{ background: experience.iconBg }}
                  icon={
                    <div className="flex justify-center items-center w-full h-full">
                      <img
                        src={experience.icon}
                        alt={experience.title}
                        className="w-[60%] h-[60%] object-contain"
                      />
                    </div>
                  }
                  contentStyle={{
                    background: "rgba(15, 23, 42, 0.55)",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    borderBottom: `4px solid ${experience.iconBg}`,
                    boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.5)",
                    borderRadius: "1rem",
                    color: "#fff",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid rgba(15, 23, 42, 0.55)",
                  }}
                >
                  <div>
                    <h3 className="text-gray-100 text-xl font-poppins font-semibold">
                      {experience.title}
                    </h3>
                    {experience.company_name && (
                      <p className="text-blue-400 font-medium text-base mt-1">
                        {experience.company_name}
                      </p>
                    )}
                  </div>

                  <ul className="my-5 list-disc ml-5 space-y-2">
                    {experience.points.map((point, index) => (
                      <li
                        key={`experience-point-${index}`}
                        className="text-gray-300 font-normal pl-1 text-sm leading-relaxed"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>

        <hr className="border-slate-800" />

        <CTA />
      </section>
    </div>
  );
};

export default About;
