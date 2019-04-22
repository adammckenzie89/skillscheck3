import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import store, { ADD_HOUSE } from "../store";

class Wizard extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zip: 0,
      img: ""
    };
    this.handlePost = this.handlePost.bind(this);
  }

  handleProperty = e => {
    this.setState({
      name: e.target.value
    });
  };
  handleAddress = e => {
    this.setState({
      address: e.target.value
    });
  };
  handleCity = e => {
    this.setState({
      city: e.target.value
    });
  };
  handleState = e => {
    this.setState({
      state: e.target.value
    });
  };
  handleZip = e => {
    this.setState({
      zip: e.target.value
    });
  };
  handlePost() {
    const { name, address, city, state, zip, img } = this.state;
    console.log(this.state);
    axios
      .post("/api/houses", {
        name: name,
        address: address,
        city: city,
        state: state,
        zip: zip,
        img: img
      })
      .then(response => {
        this.setState({ houses: response.data });
      });
  }

  render() {
    return (
      <div>
        <div />
        <form className="form">
          <h1>Add New Listing</h1>
          <br />
          <label>Property Name</label>
          <input onChange={e => this.handleProperty(e)} />
          <label>Address</label>
          <input onChange={e => this.handleAddress(e)} />
          <label>City</label>
          <input onChange={e => this.handleCity(e)} />
          <label>State</label>
          <input onChange={e => this.handleState(e)} />
          <label>Zip</label>
          <input onChange={e => this.handleZip(e)} />
          <input
            onChange={e => this.setState({ img: e.target.value })}
            placeholder="Image URL"
          />
          <section className="buttons">
            <Link className="links" to="/Dashboard">
              <button onClick={this.handlePost}>Add to list</button>
            </Link>
            <Link className="links" to="/">
              <button>Cancel</button>
            </Link>
          </section>
        </form>
      </div>
    );
  }
}

export default Wizard;
