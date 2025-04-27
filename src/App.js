import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import ScrollToTopButton from "./components/ScrollToTopButton";
import GalaxyBackground from "./components/GalaxyBackground";

import Home from "./pages/Home";
import About from "./pages/About";
import Roadmap from "./pages/Roadmap";
import Community from "./pages/Community";
import FAQ from "./pages/FAQ";
import Gallery from "./pages/Gallery";
import Tokenomics from "./pages/Tokenomics";
import Partners from "./pages/Partners";
import Newsletter from "./pages/Newsletter";
import Lore from "./pages/Lore";
import Team from "./pages/Team";
import OpenWorld from "./pages/OpenWorld";
import Playtoearn from "./pages/Playtoearn";

function App() {
  return (
    <Router>
      <LoadingScreen>
        <GalaxyBackground />
        <div className="bg-black text-white min-h-screen flex flex-col">
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/roadmap" element={<Roadmap />} />
              <Route path="/community" element={<Community />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/tokenomics" element={<Tokenomics />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/newsletter" element={<Newsletter />} />
              <Route path="/lore" element={<Lore />} />
              <Route path="/team" element={<Team />} />
              <Route path="/openworld" element={<OpenWorld />} />
              <Route path="/playtoearn" element={<Playtoearn />} />
            </Routes>
          </div>
          <ScrollToTopButton />
          <Footer />
        </div>
      </LoadingScreen>
    </Router>
  );
}

export default App;
