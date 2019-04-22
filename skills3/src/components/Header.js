import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Header extends Component {
  constructor() {
    super();

    this.state = {};
  }
  render() {
    return (
      <div className="header">
        <h1>Houser</h1>
      </div>
    );
  }
}

export default Header;
