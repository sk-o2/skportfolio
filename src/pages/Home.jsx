import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import pookie from "../assets/pookie.mp3";
import { HomeInfo, Loader } from "../components";
import { soundoff, soundon } from "../assets/icons";
import { Bird, Mainmodel, Plane, Sky } from "../models";

const checkpoints = [
  { id: 1, label: "01 Welcome", angle: 4.5 },
  { id: 2, label: "02 About", angle: 2.5 },
  { id: 3, label: "03 Software", angle: 1.08 },
  { id: 4, label: "04 Hardware", angle: 6.15 },
  { id: 5, label: "05 Contact", angle: 5.60 },
];

const Home = () => {
  const audioRef = useRef(new Audio(pookie));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [targetRotation, setTargetRotation] = useState(null);
  const [autoTour, setAutoTour] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  const jumpToStage = (stage) => {
    setAutoTour(false);
    setCurrentStage(stage.id);
    setTargetRotation(stage.angle);
  };

  const handleNextStage = () => {
    const nextId = currentStage ? (currentStage % 5) + 1 : 1;
    const stage = checkpoints.find((c) => c.id === nextId);
    if (stage) jumpToStage(stage);
  };

  const handlePrevStage = () => {
    const prevId = currentStage ? (currentStage === 1 ? 5 : currentStage - 1) : 5;
    const stage = checkpoints.find((c) => c.id === prevId);
    if (stage) jumpToStage(stage);
  };

  return (
    <section className="w-full h-screen relative overflow-hidden select-none">
      {/* ── Top Stage Callout Info ── */}
      <div className="absolute top-28 left-0 right-0 z-20 flex items-center justify-center pointer-events-auto">
        <HomeInfo currentStage={currentStage} />
      </div>

      {/* ── 3D Canvas Scene ── */}
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />

          <Bird />
          <Sky isRotating={true} />
          <Plane
            isRotating={isRotating || autoTour}
            position={[0, 0, 0]}
            rotation={[0, 20.1, 0]}
            scale={1.5}
          />
          <Mainmodel
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            targetRotation={targetRotation}
            setTargetRotation={setTargetRotation}
            autoTour={autoTour}
          />
        </Suspense>
      </Canvas>

      {/* ── Minimal Transparent Navigation Bar at Bottom ── */}
      <div className="absolute bottom-3 left-0 right-0 z-30 flex items-center justify-center pointer-events-auto">
        <div className="flex items-center gap-1.5 bg-transparent p-1">
          {/* Prev */}
          <button
            onClick={handlePrevStage}
            className="px-2 py-1 rounded-md bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/50 text-[10px] font-bold transition-all active:scale-95 backdrop-blur-sm"
            title="Previous Stage"
          >
            ◀
          </button>

          {/* Stages */}
          {checkpoints.map((stage) => {
            const isActive = currentStage === stage.id;
            return (
              <button
                key={stage.id}
                onClick={() => jumpToStage(stage)}
                className={`px-2.5 py-1 rounded-md text-[10px] sm:text-xs font-semibold whitespace-nowrap transition-all duration-200 backdrop-blur-sm ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/30 border border-blue-400/60 scale-105"
                    : "bg-slate-900/50 text-slate-400 hover:text-slate-200 border border-slate-700/40 hover:bg-slate-800/60"
                }`}
              >
                {stage.label}
              </button>
            );
          })}

          {/* Next */}
          <button
            onClick={handleNextStage}
            className="px-2 py-1 rounded-md bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/50 text-[10px] font-bold transition-all active:scale-95 backdrop-blur-sm"
            title="Next Stage"
          >
            ▶
          </button>

          {/* Auto-Pilot */}
          <button
            onClick={() => setAutoTour(!autoTour)}
            className={`px-2.5 py-1 rounded-md text-[10px] sm:text-xs font-semibold flex items-center gap-1 transition-all duration-200 backdrop-blur-sm ${
              autoTour
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/30 border border-emerald-400/60 animate-pulse"
                : "bg-slate-900/50 text-slate-400 hover:text-slate-200 border border-slate-700/40 hover:bg-slate-800/60"
            }`}
            title="Toggle Continuous Tour"
          >
            <span>✈️</span>
            <span>{autoTour ? "Auto: ON" : "Auto-Pilot"}</span>
          </button>
        </div>
      </div>

      {/* ── Original Sound Button in Bottom Left ── */}
      <div className="absolute bottom-2 left-2 z-30 pointer-events-auto">
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt="jukebox"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className="w-10 h-10 cursor-pointer object-contain"
        />
      </div>
    </section>
  );
};

export default Home;
