import React from "react";

import PercentageBar from "../PercentageBar/PercentageBar";
import skillsData from "./data/skills";
import "./SkillsCard.css";

function SkillCard(props) {
  let path = `/img/${props.route}-icon.svg`;

  const languajes = props.data.map((data) => {
    return <PercentageBar name={data.name} percentage={data.percentage} key={data.name}/>;
  });

  return (
    <div className={`skillCard ${props.isMiddle ? "middle" : ""}`}>
      <div className="skillCard__name-logo">
        <div
          className="skillCard__name-logo--icon"
          style={{ backgroundImage: `url(${path})` }}
        ></div>
        <div className="skillCard__name-logo--title">
          <h3>{props.title}</h3>
        </div>
      </div>
      <div className="skillCard__skillset">
        <h4 className="skillCard__skillset--title">Languajes I speak</h4>
        <div className="skillCard__sikillset--container">
          {languajes}
        </div>
      </div>
    </div>
  );
}

export default function SkillsCard(props) {
  return (
    <div className="skillsCard__container">
      <h1>Skill set</h1>
      <div className="SkillsCard">
        <SkillCard
          route="backend"
          title="Backend Developer"
          isMiddle={false}
          data={skillsData.backend}
        />

        <SkillCard
          route="frontend"
          title="Frontend Developer"
          isMiddle={true}
          data={skillsData.frontend}
        />
      </div>
    </div>
  );
}
