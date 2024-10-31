import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Agricultura from "./pages/Agricultura";
import Sobre from "./pages/Sobre";
import FaleConosco from "./pages/FaleConosco";
import GuiaPratico from "./pages/GuiaPratico";
import Cadastro from "./pages/Cadastro";
import Dados from "./pages/Dados"; // Importando o novo componente

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agricultura" element={<Agricultura />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/fale-conosco" element={<FaleConosco />} />
        <Route path="/guia-pratico" element={<GuiaPratico />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
