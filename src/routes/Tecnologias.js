import React from "react";
import Navbar from "../../src/components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import TecnoContent from "../components/TecnoContent";

const Tecnologias = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Tecnologias adquiridas" text="Cursos y Capacitaciones"/>
      <TecnoContent />
      <Footer />
    </div>
  );
};

export default Tecnologias;