import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"; // Certifique-se de que esse caminho está correto
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services"; // 🔥 Importando a nova página
import Contact from "./components/Contact";



function App() {
  return (
    <Router>
      <Layout> {/* Layout deve envolver as rotas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} /> {/* 🔥 Nova rota aqui */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
