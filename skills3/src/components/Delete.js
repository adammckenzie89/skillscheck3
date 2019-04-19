import React, { Component } from "react";
import store from "../store";

class Delete extends Component {
  state = {
    homes: store.getState().homes
  };

  componentDidUpdate() {
    store.subscribe(() => {
      this.setState({
        homes: store.getState().homes
      });
    });
  }
  render() {
    return (
      <div>
        {this.state.homes.map(val => {
          return;
        })}
      </div>
    );
  }
}
