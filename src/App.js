import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Routes";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    );
  }
}

export default App;
