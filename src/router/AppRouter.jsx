import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";

import Home from "../pages/Home/Home";
import Restaurante from "../pages/DemoProjects/Restaurante/Restaurante";
import Tienda from "../pages/DemoProjects/Tienda/Tienda";
import Consultorio from "../pages/DemoProjects/Consultorio/Consultorio";
import Empresarial from "../pages/DemoProjects/Empresarial/Empresarial";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurante" element={<Restaurante />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/consultorio" element={<Consultorio />} />
        <Route path="/empresarial" element={<Empresarial />} />s
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;