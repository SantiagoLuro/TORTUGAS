import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import MenuPage from "./pages/MenuPage";
import GaleriaPage from "./pages/GaleriaPage";
import UbicacionPage from "./pages/UbicacionPage";
import ReservarPage from "./pages/ReservarPage";
import WhatsAppButton from "./components/WhatsAppButton";
import "./index.css";

export default function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/galeria" element={<GaleriaPage />} />
            <Route path="/ubicacion" element={<UbicacionPage />} />
            <Route path="/reservar" element={<ReservarPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}
