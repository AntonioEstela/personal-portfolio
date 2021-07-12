import React from "react";
import Portrait from "./img/purple-antonio.png";

import "./PresentationCard.css";

export default function PresentationCard() {
  return (
    <div className="card">
      <div className="card__text">
        <h1 className="card__text--title">Antonio Estela</h1>
        <h4 className="card__text--jobTitle">Frontend & AR/VR developer</h4>
      </div>
      <div className="card--image">
        <img src={Portrait} alt="Portrait" />
      </div>
    </div>
  );
}
