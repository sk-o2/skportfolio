import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  const [displayedStage, setDisplayedStage] = useState(currentStage);
  const [animState, setAnimState] = useState(currentStage ? "visible" : "idle");

  useEffect(() => {
    if (currentStage === displayedStage) return;

    if (currentStage) {
      if (displayedStage) {
        // Dissolve out current card, then dissolve in new card
        setAnimState("exiting");
        const t1 = setTimeout(() => {
          setDisplayedStage(currentStage);
          setAnimState("entering");
          const t2 = setTimeout(() => setAnimState("visible"), 300);
          return () => clearTimeout(t2);
        }, 200);
        return () => clearTimeout(t1);
      } else {
        // Materialize in from nothing
        setDisplayedStage(currentStage);
        setAnimState("entering");
        const t = setTimeout(() => setAnimState("visible"), 300);
        return () => clearTimeout(t);
      }
    } else {
      // Dissolve away to nothing
      setAnimState("exiting");
      const t = setTimeout(() => {
        setDisplayedStage(null);
        setAnimState("idle");
      }, 250);
      return () => clearTimeout(t);
    }
  }, [currentStage]);

  if (!displayedStage && animState === "idle") {
    return null;
  }

  const renderCardContent = () => {
    if (displayedStage === 1) {
      return (
        <div className="relative bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl py-4 px-8 text-white mx-5 text-center shadow-2xl shadow-black/40 max-w-xl transition-all duration-300">
          <h1 className="sm:text-xl sm:leading-snug font-medium text-white">
            Hi, I'm <span className="font-bold text-white drop-shadow">Sumit</span> 🤟
            <br />
            <span className="text-slate-300 text-sm sm:text-base">
              Full-Stack Web Developer & Electronics Engineer
            </span>
          </h1>
        </div>
      );
    }

    if (displayedStage === 2) {
      return (
        <div className="mx-5 relative flex text-white flex-col gap-3 max-w-lg bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl pt-5 pb-10 px-8 text-center shadow-2xl shadow-black/40 transition-all duration-300">
          <p className="font-medium sm:text-lg text-slate-100 leading-relaxed">
            Hands-on with MERN Stack, IoT, Robotics & Embedded Systems.
          </p>

          <Link
            to="/about"
            className="-bottom-5 absolute mx-auto right-0 left-0 sm:w-1/2 w-[85%] py-2.5 px-5 rounded-xl bg-white/90 hover:bg-white text-blue-600 font-semibold text-sm flex justify-center items-center gap-2 backdrop-blur-md shadow-xl transition-all active:scale-95 border border-white/50"
          >
            <span>Know more</span>
            <img src={arrow} alt="arrow" className="w-3.5 h-3.5 object-contain" />
          </Link>
        </div>
      );
    }

    if (displayedStage === 3) {
      return (
        <div className="mx-5 relative flex text-white flex-col gap-3 max-w-lg bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl pt-5 pb-10 px-8 text-center shadow-2xl shadow-black/40 transition-all duration-300">
          <p className="font-medium sm:text-lg text-slate-100 leading-relaxed">
            Built full-stack web platforms, agency solutions & live web apps.
          </p>

          <Link
            to="/projects"
            className="-bottom-5 absolute mx-auto right-0 left-0 sm:w-1/2 w-[85%] py-2.5 px-5 rounded-xl bg-white/90 hover:bg-white text-blue-600 font-semibold text-sm flex justify-center items-center gap-2 backdrop-blur-md shadow-xl transition-all active:scale-95 border border-white/50"
          >
            <span>Software Projects</span>
            <img src={arrow} alt="arrow" className="w-3.5 h-3.5 object-contain" />
          </Link>
        </div>
      );
    }

    if (displayedStage === 4) {
      return (
        <div className="mx-5 relative flex text-white flex-col gap-3 max-w-lg bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl pt-5 pb-10 px-8 text-center shadow-2xl shadow-black/40 transition-all duration-300">
          <p className="font-medium sm:text-lg text-slate-100 leading-relaxed">
            Built self-balancing robots, IoT devices & embedded systems.
          </p>

          <Link
            to="/VideoEditing"
            className="-bottom-5 absolute mx-auto right-0 left-0 sm:w-1/2 w-[85%] py-2.5 px-5 rounded-xl bg-white/90 hover:bg-white text-blue-600 font-semibold text-sm flex justify-center items-center gap-2 backdrop-blur-md shadow-xl transition-all active:scale-95 border border-white/50"
          >
            <span>Hardware Projects</span>
            <img src={arrow} alt="arrow" className="w-3.5 h-3.5 object-contain" />
          </Link>
        </div>
      );
    }

    if (displayedStage === 5) {
      return (
        <div className="mx-5 relative flex text-white flex-col gap-3 max-w-lg bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl pt-5 pb-10 px-8 text-center shadow-2xl shadow-black/40 transition-all duration-300">
          <p className="font-medium sm:text-lg text-slate-100 leading-relaxed">
            Need a project done or looking for a dev? <br /> I'm just a few keystrokes away
          </p>

          <Link
            to="/contact"
            className="-bottom-5 absolute mx-auto right-0 left-0 sm:w-1/2 w-[85%] py-2.5 px-5 rounded-xl bg-white/90 hover:bg-white text-blue-600 font-semibold text-sm flex justify-center items-center gap-2 backdrop-blur-md shadow-xl transition-all active:scale-95 border border-white/50"
          >
            <span>Let's talk</span>
            <img src={arrow} alt="arrow" className="w-3.5 h-3.5 object-contain" />
          </Link>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="relative flex items-center justify-center">
      <div
        className={`relative z-20 transition-all duration-300 ease-out transform ${
          animState === "entering" || animState === "visible"
            ? "opacity-100 scale-100 blur-0 translate-y-0"
            : "opacity-0 scale-95 blur-sm -translate-y-1 pointer-events-none"
        }`}
      >
        {renderCardContent()}
      </div>
    </div>
  );
};

export default HomeInfo;
