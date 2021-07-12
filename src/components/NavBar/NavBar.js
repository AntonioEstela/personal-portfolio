import React from "react";

import './NavBar.css'

export default function NavBar(props) {
  return (
    <div className="NavBar">
      <ul className="NavBar__list">
        <li className="NavBar__list--item">
          <a href="/">About Me</a>
        </li>
        <li className="NavBar__list--item">
          <a href="/" className="middle">My Work</a>
        </li>
        <li className="NavBar__list--item">
          <a href="/">Contact</a>
        </li>
      </ul>
    </div>
  );
}
