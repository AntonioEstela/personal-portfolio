import React from "react";
import NavBar from "../components/NavBar/NavBar";
import PresentationCard from "../components/PresentationCard/PresentationCard";
import Bubble from "../components/Bubble/Bubble.js";
import SkillsCard from "../components/SkillsCard/SkillsCard";
import Footer from "../components/Footer/Footer";
import ProjectCard from "../components/ProjectCard/ProjectCard";

import "./MainPage.css";

export default function MainPage(props) {
  return (
    <div className="mainPage">
      <NavBar />
      <PresentationCard />
      <div className="containerBubbles">
        <div className="Bubbles">
          <Bubble text="Hi, I'm Antonio. Nice to meet you! 👋🏼" isTitle={true} />
          <Bubble
            text="I’m a tech world lover, I love to bring ideas to life mostly in a visual side."
            isTitle={false}
          />
        </div>
      </div>
      <div className="skillContainer">
        <SkillsCard />
      </div>
      <div className="ProjectCarousel">
        <div className="ProjectCarousel--title">
          <Bubble text="Some projects I've done" isTitle={true} />
        </div>
        <ProjectCard />
      </div>
      <div className="footerContainer">
        <Footer />
      </div>
    </div>
  );
}
