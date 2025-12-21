import React from "react";
import HeroSection from "../components/HeroSection";
import Cards from "../components/Cards";
import GuiaSolucoesRapidasSuporteti from "../components/GuiaSolucoesRapidasSuporteti";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section - Novo design baseado nas imagens */}
      <HeroSection />

      {/* Cards Section - Mantido conforme solicitado */}
      <div id="duvidas">
        <Cards />
      </div>

      {/* Guia de Soluções - Mantido conforme solicitado */}
      <GuiaSolucoesRapidasSuporteti />
    </div>
  );
};

export default Index;
