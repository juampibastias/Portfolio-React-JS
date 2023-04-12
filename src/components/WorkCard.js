import React from "react";
import "./WorkCardStyles.css";
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  const URL = props.view
  console.log(URL)
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="img" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
          <a href={URL} className="btn" target="_blank">
            Ver
          </a>
          <a href="/contact#inicio" className="btn">
            Contacto
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
