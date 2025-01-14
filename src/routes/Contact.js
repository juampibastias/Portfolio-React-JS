import React from "react";
import Navbar from "../../src/components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Form from "../components/Form";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Contacto" text="Conversemos un poco..."/>
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
