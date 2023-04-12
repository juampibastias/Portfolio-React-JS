import React from "react";
import Navbar from "../../src/components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2"
import PricingCard from "../components/PricingCard";
import Work from "../components/Work"

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Proyectos." text="Mis trabajos mas recientes."/>
      <Work />
      {/* <PricingCard/> */}
      <Footer />
    </div>
  );
};

export default Project;
