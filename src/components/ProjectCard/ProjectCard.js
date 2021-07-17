import React from "react";

import "./ProjectCard.css";

function TechIcon(props) {
  return (
    <div className="TechIcon">
      <img src="" alt="" />
    </div>
  );
}

export default function ProjectCard(props) {
  return (
    <div className="ProjectCard">
      <div className="ProjectCard__img"></div>
      <div className="ProjectCard__content">
        <div className="ProjectCard__content--text">
          <h1>Title</h1>
          <p>
            Webapp for search junior jobs remote anywhere especially for
            Holberton Students
          </p>
        </div>
        <div className="ProjectCard__content--tech">
          <h1>Tech Stack</h1>
          <div className="ProjectCard__content--tech__icons">
              <TechIcon />
              <TechIcon />
              <TechIcon />
              <TechIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
