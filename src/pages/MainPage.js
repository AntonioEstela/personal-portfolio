import React from "react";
import NavBar from "../components/NavBar/NavBar";
import PresentationCard from "../components/PresentationCard/PresentationCard";
import Bubble from "../components/Bubble/Bubble.js";
import SkillsCard from "../components/SkillsCard/SkillsCard";
import Footer from "../components/Footer/Footer";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import techsData from "../data/techs";
import ConnectCards from "../components/ConnectCard/ConnectCard";

import "./MainPage.css";

export default function MainPage(props) {
  return (
    <div className="mainPage" id="main">
      <NavBar />
      <PresentationCard />
      <section className="containerBubbles">
        <div className="Bubbles">
          <Bubble text="Hi, I'm Antonio. Nice to meet you! 👋🏼" isTitle={true} />
          <Bubble
            text="I’m a tech world lover, I love to bring ideas to life mostly in a visual side."
            isTitle={false}
          />
        </div>
      </section>
      <div className="skillContainer">
        <SkillsCard />
      </div>
      <section className="ProjectCarousel" id="myWork">
        <div className="ProjectCarousel--title bubbleTitle">
          <Bubble text="Some of my work that I’ve done!" isTitle={true} />
        </div>
        <ProjectCard
          title="AirBnB Clone"
          description="A full-stack AirBnB website clone that I've made to learn how does a website actually works."
          techs={techsData.airbnb}
          route="airbnb-clone"
          link="https://github.com/AntonioEstela/AirBnB_clone_v4"
        />
        <ProjectCard
          title="Junior Devs Roles"
          description="Webapp for search junior jobs remote anywhere especially for Holberton Students."
          techs={techsData.jdrra}
          route="jdrra"
          link="https://github.com/Vagrant-Destroyers/JDRRA-FRONT"
        />
      </section>
      <section className="contactSection" id="contact">
        <div className="contactSection--title bubbleTitle">
          <Bubble text="Let's Connect!" isTitle={true} />
        </div>
        <div className="contactSection__content">
          <ConnectCards />
        </div>
      </section>
      <div className="footerContainer">
        <Footer />
      </div>
    </div>
  );
}
