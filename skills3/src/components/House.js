import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class House extends Component {
  render() {
    return (
      <div className="houses">
        <p>{this.props.name}</p>
        <p>{this.props.address}</p>
        <p>{this.props.city}</p>
        <p>{this.props.state}</p>
        <p>{this.props.zip}</p>
      </div>
    );
  }
}

export default House;
