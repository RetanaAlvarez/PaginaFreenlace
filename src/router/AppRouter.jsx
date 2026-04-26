import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";

import Home from "../pages/Home/Home";
import Restaurante from "../pages/DemoProjects/Restaurante/Restaurante";
import tienda from "../pages/DemoProjects/Tienda/Tienda";
import consultorio from "../pages/DemoProjects/Consultorio/Consultorio";
import empresarial from "../pages/DemoProjects/Empresarial/Empresarial";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurante" element={<Restaurante />} />
        <Route path="/tienda" element={<tienda />} />
        <Route path="/consultorio" element={<consultorio />} />
        <Route path="/empresarial" element={<empresarial />} />s
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;