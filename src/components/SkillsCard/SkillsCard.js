import React from "react";

import "./SkillsCard.css";

function SkillCard(props) {
  let path = `/img/${props.route}-icon.svg`;
  return (
    <div className={`skillCard ${props.isMiddle ? "middle" : ""}`}>
      <div className="skillCard__name-logo">
        <div
          className="skillCard__name-logo--icon"
          style={{ backgroundImage: `url(${path})` }}
        ></div>
        <div className="skillCard__name-logo--title">
          <h4>{props.title}</h4>
        </div>
      </div>
      <div className="skillCard__skillset"></div>
    </div>
  );
}

export default function SkillsCard(props) {
  return (
    <div className="SkillsCard">
      <SkillCard route="backend" title="Backend Developer" />
      <SkillCard route="frontend" title="Frontend Developer" isMiddle={true} />
      <SkillCard route="ar" title="AR/VR Developer" />
    </div>
  );
}
