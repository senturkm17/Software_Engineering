import React, { Component } from "react";
import "./Header.css";
import ClearIcon from "../icons/clear_icon";
import ComplicatedIcon from "../icons/complicated_icon";
import ComplexIcon from "../icons/complex_icon";

class Header extends Component {
  state = {};
  render() {
    return (
      <header>
        <button>Copy Game Link</button>
        <h1>Gameplay for Scrum</h1>
        <div className="task-definitions">
          <div className="align">
            <ClearIcon
              width="1.2rem"
              height="1.2rem"
              width_hole="0.6rem"
              height_hole="0.6rem"
            />
            <p>Clear Task</p>
          </div>
          <div className="align">
            <ComplicatedIcon
              width="1.6rem"
              height="1.6rem"
              width_hole="0.4rem"
              height_hole="0.4rem"
            />
            <p>Complicated Task</p>
          </div>
          <div className="align">
            <ComplexIcon
              width="1.6rem"
              height="1.6rem"
              width_hole="0.4rem"
              height_hole="0.4rem"
            />
            <p>Complex Task</p>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
