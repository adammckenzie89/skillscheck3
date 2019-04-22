import React, { Component } from "react";
import { HashRouter, Link } from "react-router-dom";
import routes from "./routes";
import Header from "./components/Header";
import css from "./App.css";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App" />
        <Header />
        {routes}
      </HashRouter>
    );
  }
}

export default App;
