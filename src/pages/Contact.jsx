import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState, useEffect } from "react";
import useAlert from "../hooks/useAlert";
import { Alert, Loader } from "../components";
import Robot from "../models/Robot";
import { Sky } from "../models/Sky";
import { Bird } from "../models/Bird";

const Contact = () => {
  const [isFocused, setIsFocused] = useState(false);
  let typingTimeout = useRef(null);
  const [isTyping, setIsTyping] = useState(false);

  const handleTyping = () => {
    setIsTyping(true);
    clearTimeout(typingTimeout.current);
    typingTimeout.current = setTimeout(() => setIsTyping(false), 1000);
  };

  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
    handleTyping();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          to_email: "sumit.here19@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: "Thank you for your message 😃",
            type: "success",
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: "",
              email: "",
              message: "",
            });
          }, 1000);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: "danger",
          });
        }
      );
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
      <section className="relative z-10 flex lg:flex-row flex-col max-container">
      {alert.show && <Alert {...alert} />}

      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Contact Us🤙</h1>

        {/* Glassmorphism Form Card */}
        <div className="mt-10 bg-slate-900/10 backdrop-blur-xl border border-slate-700/30 rounded-2xl p-8 shadow-2xl shadow-black/10">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-6"
          >
            <label className="text-slate-300 font-semibold text-sm flex flex-col gap-2">
              Name
              <input
                type="text"
                name="name"
                className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/80 focus:border-blue-500/70 focus:ring-2 focus:ring-blue-500/20 text-slate-100 placeholder-slate-500 text-sm rounded-xl px-4 py-3 outline-none transition-all duration-200"
                placeholder="Sumit"
                required
                value={form.name}
                onChange={handleChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
            </label>
            <label className="text-slate-300 font-semibold text-sm flex flex-col gap-2">
              Email
              <input
                type="email"
                name="email"
                className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/80 focus:border-blue-500/70 focus:ring-2 focus:ring-blue-500/20 text-slate-100 placeholder-slate-500 text-sm rounded-xl px-4 py-3 outline-none transition-all duration-200"
                placeholder="skthakur@gmail.com"
                required
                value={form.email}
                onChange={handleChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
            </label>
            <label className="text-slate-300 font-semibold text-sm flex flex-col gap-2">
              Your Message
              <textarea
                name="message"
                rows="5"
                className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/80 focus:border-blue-500/70 focus:ring-2 focus:ring-blue-500/20 text-slate-100 placeholder-slate-500 text-sm rounded-xl px-4 py-3 outline-none transition-all duration-200 resize-none"
                placeholder="Your thoughts belong here…"
                value={form.message}
                onChange={handleChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
            </label>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold text-sm tracking-wide transition-all duration-200 shadow-lg shadow-blue-500/20 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message →"}
            </button>
          </form>
        </div>
      </div>

      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />

          <Suspense fallback={<Loader />}>
            <Robot
              position={[0, -3, 0]}
              rotation={[0, 0, 0]}
              scale={[0.008, 0.008, 0.008]}
              walk={isFocused}
            />
          </Suspense>
        </Canvas>
      </div>
      </section>
    </div>
  );
};

export default Contact;
