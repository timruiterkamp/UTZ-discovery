import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

// Pages
import Index from "../components/pages/Home";
import Information from "../components/pages/Information";
import Filter from "../components/pages/Filter";
import Compare from "../components/pages/Compare";

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/compare" component={Compare} />
        <Route exact path="/filter" component={Filter} />
        <Route exact path="/information" component={Information} />
      </Switch>
    );
  }
}
