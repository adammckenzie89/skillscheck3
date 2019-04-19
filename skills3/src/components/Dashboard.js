import React, { Component } from "react";
import { Link } from "react-router-dom";
import store from "../store";
import axios from "axios";
import House from "./House";

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      houses: []
      //   homes: store.getState().homes
    };
    this.deleteHome = this.deleteHome.bind(this);
  }
  componentDidMount() {
    this.getHouses();
  }

  getHouses() {
    axios.get("/api/houses").then(response => {
      this.setState({
        houses: response.data
      });
    });
  }
  deleteHome(id) {
    axios
      .delete(`/api/houses/${id}`, {
        data: {
          id: id
        }
      })
      .then(response => {
        this.setState({
          houses: response.data
        });
      });
  }
  render() {
    const { houses } = this.state;
    let displayHouses = this.state.houses.map((val, index) => {
      return (
        <div>
          <House
            key={index}
            name={val.name}
            address={val.address}
            city={val.city}
            state={val.city}
            zip={val.city}
            deleteHome={this.deleteHome}
          />
          <button onClick={this.deleteHome}>Delete</button>
        </div>
      );
    });
    return (
      <div>
        <h1>Dashboard</h1>
        <Link to="/Wizard">
          <button>Add New Property</button>
        </Link>
        {displayHouses}
      </div>
    );
  }
}

export default Dashboard;
