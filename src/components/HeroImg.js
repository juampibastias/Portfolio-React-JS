import "./HeroImgStyles.css";
import IntroBg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";
import React from "react";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroBg} alt="IntroBg" />
      </div>
      <div className="content">
        <p>Hola! Soy Juan Pedro</p>
        <h1>Developer Full Stack</h1>
        <div>
        <Link to="/tecnologias" className="btn">
            Tecnologias
          </Link>
          <Link to="/project" className="btn">
            Proyectos
          </Link>
          <Link to="/project" className="btn btn-light">
            Contacto
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
