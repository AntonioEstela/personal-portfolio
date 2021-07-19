import React from "react";

import "./ConnectCard.css";

export default function ConnectCards(props) {
  return (
    <div className="ConnectCard">
      <a href="https://github.com/AntonioEstela" target="_blank" rel="noreferrer noopener" >
        <span className="ConnectCard__social-media">
          <img src="/img/GitHubIcon.svg" alt="" />
          <h3>GitHub</h3>
        </span>
      </a>
      <a href="https://www.linkedin.com/in/antonio-jos%C3%A9-estela-7b2a64156/" target="_blank" rel="noreferrer noopener" >
        <span className="ConnectCard__social-media">
          <img src="/img/LinkedInIcon.svg" alt="" />
          <h3>LinkedIn</h3>
        </span>
      </a>
      <a href="https://codepen.io/antonioestela" target="_blank" rel="noreferrer noopener" >
        <span className="ConnectCard__social-media">
          <img src="/img/CodepenIcon.png" alt="" />
          <h3>Codepen</h3>
        </span>
      </a>
      <a href="https://twitter.com/Antonio__Estela" target="_blank" rel="noreferrer noopener" >
        <span className="ConnectCard__social-media">
          <img src="/img/TwitterIcon.svg" alt="" />
          <h3>Twitter</h3>
        </span>
      </a>
    </div>
  );
}
