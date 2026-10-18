import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { SiteShell } from "./components/SiteShell";
import InicioPage from "./pages/_index";
import QuemSomosPage from "./pages/quem-somos";
import TatuagemPage from "./pages/tatuagem";
import PiercingPage from "./pages/piercing";
import FurinhoPage from "./pages/furinho-humanizado";
import RemocaoPage from "./pages/remocao-e-despigmentacao";
import CuidadosPage from "./pages/cuidados-e-faq";
import ContatoPage from "./pages/contato";
import PedirOrcamentoPage from "./pages/pedir-orcamento";

// Ao trocar de página, volta ao topo. Com #ancora, rola até o trecho.
function RolarParaTopoOuAncora() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export function App() {
  return (
    <SiteShell>
      <RolarParaTopoOuAncora />
      <Routes>
        <Route path="/" element={<InicioPage />} />
        <Route path="/quem-somos" element={<QuemSomosPage />} />
        <Route path="/tatuagem" element={<TatuagemPage />} />
        <Route path="/piercing" element={<PiercingPage />} />
        <Route path="/furinho-humanizado" element={<FurinhoPage />} />
        <Route path="/remocao-e-despigmentacao" element={<RemocaoPage />} />
        <Route path="/cuidados-e-faq" element={<CuidadosPage />} />
        <Route path="/contato" element={<ContatoPage />} />
        <Route path="/pedir-orcamento" element={<PedirOrcamentoPage />} />
        <Route path="*" element={<InicioPage />} />
      </Routes>
    </SiteShell>
  );
}
