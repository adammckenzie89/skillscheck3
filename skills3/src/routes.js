import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Dashboard from "./components/Dashboard";
import Wizard from "./components/Wizard";
import House from "./components/House";

export default (
  <Switch>
    <Route path="/Wizard" component={Wizard} />
    <Route path="/House" component={House} />
    <Route path="/" component={Dashboard} />
  </Switch>
);
