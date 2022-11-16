import React, { Component } from "react";
import "../styleSheets/header.scss";

class Header extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <header>
        <h1>React CV Creator</h1>
      </header>
    );
  }
}

export default Header;
