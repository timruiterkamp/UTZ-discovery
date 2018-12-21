import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Routes";
import { Provider } from "react-redux";
import AppStore from "./store/appStore";

class App extends Component {
  render() {
    return (
      <Provider store={AppStore}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
