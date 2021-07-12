import React from "react";
import NavBar from "../components/NavBar/NavBar";
import PresentationCard from "../components/PresentationCard/PresentationCard";
import ChatBubble from "../components/ChatBubble/ChatBubble";

import "./MainPage.css";

export default function MainPage(props) {
  return (
    <div>
      <NavBar />
      <PresentationCard />
      <div className="chatBubbles">
        <ChatBubble
          text="Hi, I'm Antonio. Nice to meet you! 👋🏼"
          styles={{ height: "50px", width: "500px" }}
          isTitle={true}
        />
        <ChatBubble
          text="I’m a tech world lover, I love to bring ideas to life mostly in a visual side."
          styles={{ height: "80px", width: "800px", marginTop: "20px" }}
        />
      </div>
    </div>
  );
}
