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
        <h2>¡Hola!</h2>
        <p>
          Mi nombre es Juan y tengo 38 años. Hace aproximadamente un año y medio que
          decidí sumergirme en el apasionante mundo del desarrollo web y desde
          entonces he estado trabajando arduamente para adquirir nuevas
          habilidades y conocimientos. Actualmente, trabajo como team lead en
          Escola Sorvete, donde me incorporé hace 10 meses como developer
          fullstack.
        </p>
        <p>
          Durante mi formación, he realizado varios cursos y he aprendido por mi
          cuenta diversas tecnologías, entre las que se encuentran HTML, CSS,
          JavaScript, React.js, Next.js y Node.js, entre otras. Estas
          herramientas me han permitido desarrollar habilidades en el diseño y
          construcción de aplicaciones web, y también en la gestión y liderazgo
          de equipos de trabajo.
        </p>
        <p>
          Estoy entusiasmado por seguir creciendo profesionalmente en este campo
          y por contribuir al desarrollo de soluciones innovadoras y de calidad
          en el mercado. ¡Gracias por leer mi perfil!
        </p>
        <Link to="/contact">
          <button className="btn">Contactáme!</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={react3} alt="true" className="img" />
          </div>

          <div className="img-stack bottom">
            <img src={node} alt="true" className="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
