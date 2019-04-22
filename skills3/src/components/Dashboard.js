import React, { Component } from "react";
import store, { GET_HOUSES } from "../store";
import { Link } from "react-router-dom";
import axios from "axios";
import House from "./House";
// import store from "../store";

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      houses: store.getState().houses
    };
    this.deleteHome = this.deleteHome.bind(this);
  }
  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        houses: store.getState().houses
      });
    });
    axios.get("/api/houses").then(response => {
      const action = {
        type: GET_HOUSES,
        payload: response.data
      };
      store.dispatch(action);
    });
  }
  deleteHome(id) {
    axios.delete(`/api/houses/${id}`);
    this.componentDidMount();
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
            img={val.img}
            deleteHome={this.deleteHome}
          />
          <button onClick={e => this.deleteHome(val.id)}>Delete</button>
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
