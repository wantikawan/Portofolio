import React, { Component } from "react";
import "./Sidebar.css";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidenav">
        <img
          src="anm.jpg"
          alt="Avatar"
          height="80%"
          width="80%"
          class="avatar"
        ></img>
        <a href="#about">About</a>
        <a href="#awards">Awards</a>
        <a href="#education">Education</a>
        <a href="#experience">Experience</a>
        <a href="#interest">Interest</a>
        <a href="#skill">Skill</a>
      </div>
    );
  }
}
