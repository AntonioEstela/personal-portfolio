import React from "react";

import "./Bubble.css";

export default function Bubble(props) {
  return (
    <div className="Bubble">
      <p className={props.isTitle ? "title" : "text"}>{props.text}</p>
    </div>
  );
}
