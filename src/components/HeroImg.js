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
        <h1>DEVELOPER FULL STACK</h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/project" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
