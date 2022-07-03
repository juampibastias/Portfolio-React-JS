import "./TecnoContentStyles.css";
import html from "../assets/html-icon.png";
import css from "../assets/css-icon.png";
import javascript from "../assets/javascript-icon.png";
import react from "../assets/react-icon.png";
import next from "../assets/next-icon.png";
import node from "../assets/node-icon.png";
import mysql from "../assets/mysql-icon.png";
import mongodb from "../assets/mongodb-icon.png";
import coder from "../assets/coder.png";
import utn from "../assets/utn.png";
import { Link } from "react-router-dom";
import React from "react";

const TecnoContent = () => {
  return (
    <div className="tecno">
      <h1 className="tecno-h1">Tecnologías</h1>
      <div className="tecno-container">
      <ul className="left">
        <li>
      <div className="mask-icon">
        <img className="icon-img" src={html} alt="IntroBg" />
        <p>HTML</p>
      </div>
      </li>
      <li>
      <div className="mask-icon">
        <img className="icon-img" src={css} alt="IntroBg" />
        <p>CSS</p>
      </div>
      </li>
      <li>
      <div className="mask-icon">
        <img className="icon-img" src={javascript} alt="IntroBg" />
        <p>JavaScript</p>
      </div>
      </li>
      <li>
      <div className="mask-icon">
        <img className="icon-img" src={react} alt="IntroBg" />
        <p>React.js</p>
      </div>
      </li>
      </ul>
      <ul className="right">
      <li>
      <div className="mask-icon">
        <img className="icon-img" src={next} alt="IntroBg" />
        <p>Next.js</p>
      </div>
      </li>
      <li>
      <div className="mask-icon">
        <img className="icon-img" src={node} alt="IntroBg" />
        <p>Node.js</p>
      </div>
      </li>
      <li>
      <div className="mask-icon">
        <img className="icon-img" src={mysql} alt="IntroBg" />
        <p>Mysql</p>
      </div>
      </li>
      <li>
      <div className="mask-icon">
        <img className="icon-img" src={mongodb} alt="IntroBg" />
        <p>MongoDB</p>
      </div>
      </li>
      </ul>
      </div>
      <div className="cursos">
        <h1 className="cert">Certificaciones</h1>
      <div className="mask-cursos">
        <img className="cursos-img" src={coder} alt="IntroBg" />
        <h4>JavaScript | Coderhouse</h4>
        <p>Nota obtenida: 10.</p>
      </div>
      <div className="mask-cursos">
        <img className="cursos-img" src={utn} alt="IntroBg" />
        <h4>Bootcamp | React.js | Node.js | UTN</h4>
        <p>Nota obtenida: 10.</p>
      </div>
      </div>
    </div>
  );
};

export default TecnoContent;