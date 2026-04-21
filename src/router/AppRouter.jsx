import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../components/layout/Navbar/Navbar";

import Home from "../pages/Home/Home";
import Projects from "../pages/Projects/Projects";
import DemoProjects from "../pages/DemoProjects/DemoProjects";
import RealProjects from "../pages/RealProjects/RealProjects";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/demos" element={<DemoProjects />} />
        <Route path="/real-projects" element={<RealProjects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;