import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/common/Navbar/Navbar";

import Home from "./pages/Home/Home";
import Work from "./pages/Work/Work";
import Projects from "./pages/Projects/Projects";
import Journey from "./pages/Journey/Journey";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <HashRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  );
}

export default App;