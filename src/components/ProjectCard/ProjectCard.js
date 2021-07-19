import React from "react";

import "./ProjectCard.css";

function TechIcon(props) {
  return (
    <div className="TechIcon" title={props.name}>
      <img src={props.url} alt={`${props.name} Icon`} title={props.name} />
    </div>
  );
}

export default function ProjectCard(props) {
  const { title, description, techs, route, link } = props;

  const icons = techs.map((tech) => {
    return (
      <div key={tech.techName.toString()}>
        <TechIcon url={tech.url} name={tech.techName} />
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
          <a href={link} title="Source Code" target="_blank" rel="noreferrer noopener" >
            <p>{title}</p>
          </a>
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
