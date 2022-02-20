import React, { Component } from "react";
import ProductScore from "./ProductScore";
import RetroNotes from "./RetroNotes";

class SprintInfo extends Component {
  state = {};
  render() {
    return (
      <div>
        <ProductScore />
        <RetroNotes />
      </div>
    );
  }
}

export default SprintInfo;
