import { useState, useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { CTA } from "../components";
import { projects } from "../constants";
import { Sky } from "../models";
import { Bird } from "../models/Bird";
import Robot from "../models/Robot";

const WebD = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [viewMode, setViewMode] = useState("desktop"); // 'desktop' | 'tablet' | 'mobile'
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [iframeKey, setIframeKey] = useState(0);
  const viewerRef = useRef(null);

  const handleOpenInside = (project) => {
    setSelectedProject(project);
    setIsLoading(true);
    setTimeout(() => {
      if (viewerRef.current) {
        viewerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  const handleRefresh = () => {
    setIsLoading(true);
    setIframeKey((prev) => prev + 1);
  };

  return (
    <div className="relative w-full min-h-screen">
      {/* Background 3D Canvas Scene */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-40">
        <Canvas camera={{ near: 0.1, far: 1000, position: [0, 0, 5] }}>
          <Suspense fallback={null}>
            <directionalLight position={[1, 1, 1]} intensity={2} />
            <ambientLight intensity={0.8} />
            <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />
            <Sky isRotating={true} />
            <Robot walk={true} position={[3.5, -2.2, -6]} scale={[1.1, 1.1, 1.1]} rotation={[0, -0.5, 0]} />
            <Bird range={30} speed={0.012} yAmplitude={0.4} yBase={3} scale={0.004} />
          </Suspense>
        </Canvas>
      </div>

      {/* Foreground Content */}
      <section className="relative z-10 max-container">
        <h1 className="head-text">
          My{" "}
          <span className="blue-gradient_text drop-shadow font-semibold">
            Web Projects
          </span>
        </h1>

        <p className="text-slate-400 mt-2 leading-relaxed max-w-3xl">
          A collection of full-stack web applications I’ve built. You can test and navigate each project live directly inside this portfolio previewer or open them in a separate browser tab.
        </p>

        {/* Glassmorphism Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`relative bg-slate-900/40 backdrop-blur-xl border border-slate-800/80 ${project.border || 'hover:border-blue-500/50'} rounded-2xl p-6 hover:bg-slate-900/70 transition-all duration-300 flex flex-col justify-between group shadow-2xl hover:-translate-y-1 overflow-hidden`}
            >
              {/* Colorful gradient line above card */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${project.accent}`} />

              <div>
                {/* Header: Category Badge & Live Status */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] tracking-wider uppercase font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 py-0.5 rounded-md backdrop-blur-md">
                    {project.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full backdrop-blur-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Live App
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-blue-400/90 font-medium mb-3">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-slate-300 text-xs leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tech Stack Tags (Glassmorphism) */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] px-2 py-0.5 rounded-md bg-slate-800/60 backdrop-blur-sm text-slate-300 border border-slate-700/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Footer */}
              <div className="flex items-center gap-2.5 pt-4 border-t border-slate-800/80">
                <button
                  onClick={() => handleOpenInside(project)}
                  className="flex-1 flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-800/80 backdrop-blur-md hover:bg-blue-600 text-slate-200 hover:text-white text-xs font-semibold border border-slate-700 hover:border-blue-500 transition-all shadow-md active:scale-95"
                >
                  <span className="font-mono text-blue-400 group-hover:text-white">&gt;</span>
                  <span>Open Preview</span>
                </button>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  title="Open live site in new tab"
                  className="p-2.5 rounded-xl bg-slate-800/80 backdrop-blur-md hover:bg-slate-700 text-slate-400 hover:text-white border border-slate-700/80 text-xs transition-colors"
                >
                  ↗
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Embedded Live Website Viewer Window (Glassmorphism Header) */}
        <div ref={viewerRef} className="mt-14">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="text-blue-400">🌐</span> Live Interactive Preview
              </h2>
              <p className="text-slate-400 text-xs">
                Interact with the deployed live applications inside this compact browser frame.
              </p>
            </div>

            {/* Project Switcher Tabs (Glassmorphism) */}
            <div className="flex items-center bg-slate-900/60 backdrop-blur-md p-1.5 rounded-xl border border-slate-800 overflow-x-auto">
              {projects.map((proj) => (
                <button
                  key={proj.id}
                  onClick={() => {
                    setSelectedProject(proj);
                    setIsLoading(true);
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                    selectedProject.id === proj.id
                      ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <span>{proj.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Compact Mock Browser Container (Glassmorphism) */}
          <div className="w-full bg-slate-950/80 backdrop-blur-xl border border-slate-800/90 rounded-2xl shadow-2xl overflow-hidden">
            {/* Browser Header / Control Bar */}
            <div className="bg-slate-900/80 backdrop-blur-md px-4 py-2.5 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs">
              {/* Window Controls & Title */}
              <div className="flex items-center gap-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block"></span>
                </div>
                <span className="font-medium text-slate-400 hidden sm:inline-block">
                  {selectedProject.title} — Live Preview
                </span>
              </div>

              {/* Address Bar */}
              <div className="flex-1 max-w-md flex items-center bg-slate-950/80 backdrop-blur-sm px-2.5 py-1 rounded-md border border-slate-800 text-slate-300">
                <span className="text-slate-500 mr-1.5">🔒</span>
                <span className="truncate select-all font-mono text-[11px] text-slate-300">
                  {selectedProject.link}
                </span>
              </div>

              {/* Browser Tools & Viewport Controls */}
              <div className="flex items-center gap-1.5">
                {/* Refresh button */}
                <button
                  onClick={handleRefresh}
                  title="Refresh Frame"
                  className="p-1 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors"
                >
                  🔄
                </button>

                {/* Viewport size options */}
                <div className="hidden md:flex items-center bg-slate-950/80 p-0.5 rounded-md border border-slate-800 text-[11px]">
                  <button
                    onClick={() => setViewMode("desktop")}
                    className={`px-1.5 py-0.5 rounded ${
                      viewMode === "desktop"
                        ? "bg-slate-800 text-blue-400 font-semibold"
                        : "text-slate-400 hover:text-white"
                    }`}
                    title="Desktop View"
                  >
                    🖥️ Desktop
                  </button>
                  <button
                    onClick={() => setViewMode("tablet")}
                    className={`px-1.5 py-0.5 rounded ${
                      viewMode === "tablet"
                        ? "bg-slate-800 text-blue-400 font-semibold"
                        : "text-slate-400 hover:text-white"
                    }`}
                    title="Tablet View (768px)"
                  >
                    📱 Tablet
                  </button>
                  <button
                    onClick={() => setViewMode("mobile")}
                    className={`px-1.5 py-0.5 rounded ${
                      viewMode === "mobile"
                        ? "bg-slate-800 text-blue-400 font-semibold"
                        : "text-slate-400 hover:text-white"
                    }`}
                    title="Mobile View (390px)"
                  >
                    📱 Mobile
                  </button>
                </div>

                {/* Height Toggle */}
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  title={isExpanded ? "Collapse height" : "Expand height"}
                  className="px-2 py-0.5 text-[11px] bg-slate-800/80 text-slate-300 hover:text-white border border-slate-700 rounded transition-colors"
                >
                  {isExpanded ? "↕ Compact" : "↕ Expand"}
                </button>

                {/* Open in external tab */}
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noreferrer"
                  className="px-2 py-0.5 text-[11px] bg-blue-600/20 text-blue-400 hover:bg-blue-600 hover:text-white border border-blue-500/30 rounded font-medium transition-all"
                >
                  Open Full ↗
                </a>
              </div>
            </div>

            {/* Website Viewport Area - Compact Height */}
            <div className="relative w-full bg-slate-950 flex justify-center items-center overflow-hidden p-1.5">
              {/* Loading Spinner Overlay */}
              {isLoading && (
                <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm z-10 flex flex-col items-center justify-center gap-2">
                  <div className="w-8 h-8 border-3 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-xs font-medium text-slate-300">
                    Loading {selectedProject.title}...
                  </p>
                </div>
              )}

              {/* Embedded Iframe */}
              <div
                className={`transition-all duration-300 w-full rounded-lg overflow-hidden bg-white ${
                  isExpanded ? "h-[650px]" : "h-[400px] md:h-[460px]"
                } ${
                  viewMode === "tablet"
                    ? "max-w-[768px] border-x-4 border-slate-800"
                    : viewMode === "mobile"
                    ? "max-w-[390px] border-x-8 border-slate-800 rounded-2xl"
                    : "max-w-full"
                }`}
              >
                <iframe
                  key={iframeKey}
                  src={selectedProject.link}
                  title={selectedProject.title}
                  onLoad={() => setIsLoading(false)}
                  className="w-full h-full border-none"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
            </div>

            {/* Compact Browser Footer Info */}
            <div className="bg-slate-900/80 backdrop-blur-md px-4 py-1.5 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                Live Connected: <strong className="text-slate-200">{selectedProject.title}</strong>
              </span>
              <span className="hidden sm:inline-block text-slate-500 text-[10px]">
                💡 Tip: Click and scroll inside to test live application.
              </span>
            </div>
          </div>
        </div>

        <hr className="border-slate-800 mt-12" />

        <CTA />
      </section>
    </div>
  );
};

export default WebD;
