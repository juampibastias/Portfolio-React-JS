import "./AboutContentStyles.css";
import react3 from "../assets/react3.jpg";
import node from "../assets/node.png";
import React from "react";
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
  <div className="about">
    <div className="left">
<h1>Quien soy?</h1>
<p>Me llamo Juan, tengo 37 años, y hace alrededor de un año que vengo preparandome para sumergirme en este rubo que me atrapa! En este tiempo he realizado algunos cursos y también he aprendido por mi cuenta. Cuento con tecnologias aprendidas tales como HTML | CSS | JavaScript | React.js | Next.js | Node.js, entre otras.</p>
<Link to="/contact">
  <button className="btn">Contactáme!</button>
</Link>
    </div>
    <div className="right">
<div className="img-container">
  <div className="img-stack top">
    <img src={react3} alt="true" className="img"/>
  </div>
 
  <div className="img-stack bottom">
    <img src={node} alt="true" className="img"/>
  </div>

</div>
    </div>
  </div>
)};

export default AboutContent;
