import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Header extends Component {
  constructor() {
    super();

    this.state = {};
  }

  //   componentDidMount() {
  //     axios
  //       .get(`/api/houses?house${this.props.match.params.zip}`)
  //       .then(response => {
  //         this.setState({
  //           homes: response.data
  //         });
  //       });
  //   }
  render() {
    return (
      <div>
        <h1>Houser</h1>
        {/* <h1>{this.props.match.params.zip}</h1> */}
      </div>
    );
  }
}

export default Header;
