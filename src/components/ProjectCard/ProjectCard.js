import React from "react";

import "./ProjectCard.css";

function TechIcon(props) {
  return (
    <div className="TechIcon">
      <img src={props.url} alt="" />
    </div>
  );
}

export default function ProjectCard(props) {
  const { title, description, techs, route } = props;

  const icons = techs.map((tech) => {
    return (
      <div key={tech.techName.toString()}>
        <TechIcon url={tech.url}/>
      </div>
    );
  });

  return (
    <div className="ProjectCard">
      <div className="ProjectCard__img">
        <img src={`/img/${route}.png`} alt={`${title} Project`} />
      </div>
      <div className="ProjectCard__content">
        <div className="ProjectCard__content--text">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div className="ProjectCard__content--tech">
          <h1>Tech Stack</h1>
          <div className="ProjectCard__content--tech__icons">{icons}</div>
        </div>
      </div>
    </div>
  );
}
