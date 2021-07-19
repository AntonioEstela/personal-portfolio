import React from "react";

import './NavBar.css'

export default function NavBar(props) {
  return (
    <div className="NavBar">
      <ul className="NavBar__list">
        <li className="NavBar__list--item">
          <a href="#main">About Me</a>
        </li>
        <li className="NavBar__list--item">
          <a href="#myWork" className="middle">My Work</a>
        </li>
        <li className="NavBar__list--item">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
