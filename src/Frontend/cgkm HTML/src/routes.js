import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Agricultura from "./pages/Agricultura";
import Sobre from "./pages/Sobre";
import FaleConosco from "./pages/FaleConosco";
import GuiaPratico from "./pages/GuiaPratico";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Calculadora from "./pages/Calculadora";  
import OutrasFrutas from "./pages/OutrasFrutas";

function AppRoutes({ isLoggedIn, setIsLoggedIn }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agricultura" element={<Agricultura />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/fale-conosco" element={<FaleConosco />} />
        <Route path="/guia-pratico" element={<GuiaPratico />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/outros" element={<OutrasFrutas />} />
        
        {/* Rota protegida */}
        <Route 
          path="/Calculadora" 
          element={isLoggedIn ? <Calculadora /> : <Navigate to="/login" />} 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
