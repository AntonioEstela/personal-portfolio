import React from "react";

import "./SkillsCard.css";

function SkillCard(props) {
  return (
    <div className="skillCard">
      <div className="skillCard__name-logo">
        <div className="skillCard__name-logo--icon"></div>
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
      <SkillCard route="ar" title="Backend Developer" />
      <SkillCard route="ar" title="Backend Developer" />
      <SkillCard route="ar" title="Backend Developer" />
    </div>
  );
}
