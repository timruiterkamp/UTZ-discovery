import React, { Component } from "react";
import Layout from "../layout/Layout";
import MapviewBlock from "../interface/map/Mapview";
export default class Home extends Component {
  render() {
    return (
      <Layout>
        <MapviewBlock />
      </Layout>
    );
  }
}
