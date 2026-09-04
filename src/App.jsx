import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { About, Contact, Home, WebD } from "./pages";
import VideoEditing from "./pages/VideoEditing";

const AppContent = () => {
  const location = useLocation();
  const showFooter = location.pathname !== "/";

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<WebD />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/VideoEditing" element={<VideoEditing />} />
        <Route path="/videoediting" element={<VideoEditing />} />
      </Routes>
      {showFooter && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <main className="bg-gradient-to-b from-black via-gray-700 to-gray-950 min-h-screen text-white relative">
      <Router>
        <AppContent />
      </Router>
    </main>
  );
};

export default App;
