import React from "react";
import "./WorkCardStyles.css";
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="img" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>
          {props.text}
        </p>
        <div className="pro-btns">
          <NavLink to={props.view} className="btn">
            Ver
          </NavLink>
          <NavLink to="url.com" className="btn">
            Información
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
