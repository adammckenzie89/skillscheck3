import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import store, { ADD_HOUSE } from "../store";

class Wizard extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zip: 0,
      homes: []
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
    // console.log(this.state.state);
  };
  handleZip = e => {
    this.setState({
      zip: e.target.value
    });
  };
  handlePost() {
    const { name, address, city, state, zip } = this.state;
    console.log(this.state);
    axios
      .post("/api/houses", {
        name: name,
        address: address,
        city: city,
        state: state,
        zip: zip
      })
      .then(response => {
        this.setState({ houses: response.data });
      });
  }
  reduxPost = () => {
    const action = {
      type: ADD_HOUSE,
      payload: this.state.homes
    };
    store.dispatch(action);
  };
  render() {
    return (
      <div>
        <div />
        <form>
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
          <Link to="/">
            <button>Cancel</button>
          </Link>
          <button onClick={this.handlePost}>Add to list</button>
          <Link to="/">
            <button onClick={this.reduxPost}>Redux</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default Wizard;
