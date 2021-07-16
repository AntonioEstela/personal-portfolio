import React from "react";

import "./PercentageBar.css";

export default function PercentageBar(props) {
  const { name, percentage } = props;
  return (
    <div className="PercentageBar">
        <div className="PercentageBar__properties">
            <p>{name}</p>
            <p>{percentage}</p>
        </div>
        <div className="PercentageBar__border">
            <div className="PercentageBar__content" style={{width: percentage}}></div>
        </div>
    </div>
  );
}
