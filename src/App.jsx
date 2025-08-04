import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Footer, Navbar } from "./components";
import { About, Contact, Home, WebD } from "./pages";
import VideoEditing from "./pages/VideoEditing";
const App = () => {
  return (
    <main className="bg-gradient-to-b from-black via-gray-700 to-gray-950 min-h-screen text-white">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/*"
            element={
              <>
                <Routes>
                  <Route path="/about" element={<About />} />
                  <Route path="/projects" element={<WebD />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/VideoEditing" element={<VideoEditing />} />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
