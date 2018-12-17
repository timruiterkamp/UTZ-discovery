import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

// Pages
import Index from "../components/pages/Home";
import Advice from "../components/pages/Advice";
import Proces from "../components/pages/Proces";

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/advice" component={Advice} />
        <Route exact path="/proces" component={Proces} />
      </Switch>
    );
  }
}
