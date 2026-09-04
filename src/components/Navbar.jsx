import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { logo1 } from "../assets/images";
import sdeResume from "../assets/sde_resume_sk.pdf";
import esdResume from "../assets/esd_resume_sk.pdf";

const Navbar = () => {
  const [showResume, setShowResume] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowResume(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] pointer-events-auto max-w-5xl mx-auto px-6 sm:px-16 py-4 flex justify-between items-center bg-transparent transition-all">
      <NavLink to="/" className="flex items-center gap-2">
        <img src={logo1} alt="logo" className="w-10 h-10 object-contain sm:w-12 sm:h-12" />
      </NavLink>
      <nav className="text-sm sm:text-lg font-medium flex items-center gap-4 sm:gap-6">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-blue-400 font-semibold border-b-2 border-blue-500 pb-0.5"
              : "text-slate-300 hover:text-white transition-colors"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive
              ? "text-blue-400 font-semibold border-b-2 border-blue-500 pb-0.5"
              : "text-slate-300 hover:text-white transition-colors"
          }
        >
          Software Projects
        </NavLink>
        <NavLink
          to="/VideoEditing"
          className={({ isActive }) =>
            isActive
              ? "text-blue-400 font-semibold border-b-2 border-blue-500 pb-0.5 whitespace-nowrap"
              : "text-slate-300 hover:text-white transition-colors whitespace-nowrap"
          }
        >
          ECE Projects
        </NavLink>

        {/* Resume Dropdown */}
        <div ref={dropdownRef} className="relative">
          <button
            onClick={() => setShowResume(!showResume)}
            className={`flex items-center gap-1 text-slate-300 hover:text-white transition-colors whitespace-nowrap ${
              showResume ? "text-blue-400" : ""
            }`}
          >
            Resume
            <svg
              className={`w-3 h-3 transition-transform duration-200 ${showResume ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {showResume && (
            <div className="absolute right-0 mt-2 w-48 bg-slate-900/80 backdrop-blur-xl border border-slate-700/60 rounded-xl shadow-2xl shadow-black/40 overflow-hidden z-50">
              <a
                href={sdeResume}
                download="Sumit_SDE_Resume.pdf"
                onClick={() => setShowResume(false)}
                className="flex items-center gap-2.5 px-4 py-3 text-sm text-slate-200 hover:bg-blue-600/30 hover:text-white transition-colors border-b border-slate-800/60"
              >
                <span className="text-base">💻</span>
                <span>SDE Resume</span>
              </a>
              <a
                href={esdResume}
                download="Sumit_ECE_Resume.pdf"
                onClick={() => setShowResume(false)}
                className="flex items-center gap-2.5 px-4 py-3 text-sm text-slate-200 hover:bg-blue-600/30 hover:text-white transition-colors"
              >
                <span className="text-base">⚡</span>
                <span>ECE Resume</span>
              </a>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
