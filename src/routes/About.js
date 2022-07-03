import React from "react";
import Navbar from "../../src/components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2"
import AboutContent from "../components/AboutContent";


const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Sobre mí..." text="Mis formas de trabajar."/>
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
