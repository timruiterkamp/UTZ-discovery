import React, { Component, Children, cloneElement } from "react";
// import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import MapboxGl from "mapbox-gl/dist/mapbox-gl.js";
import { connect } from "react-redux";
import { setDataLoaded } from "../../../store/reducers/home/HomeActions";
import styled from "styled-components";

const MapInterface = styled.section`
  width: 100vw;
  height: 100vh;
`;

class Mapview extends Component {
  componentDidMount() {
    MapboxGl.accessToken =
      "pk.eyJ1Ijoibm9jbHVlNHUiLCJhIjoiY2pvZWY2ZTA5MXdkbjN3bGVicm1hZDNvZCJ9.kIU-GIm7Cl36xhEFLaPU1w";

    this.map = new MapboxGl.Map({
      container: this.container,
      style: "mapbox://styles/noclue4u/cjpsfnz0m4reg2rnpz6xi6mwf",
      center: [9.589804, 48.115494],
      zoom: 1.5
    });

    this.map.on("load", () => {
      this.props.setDataLoaded(true);
    });
  }

  componentWillUnmount() {
    setTimeout(() => this.map.remove());
  }

  render() {
    // const children = Children.map(this.props.children, child =>
    //   cloneElement(child, { map: this.map })
    // );

    return (
      <MapInterface
        className={this.props.hidden ? "hidden" : "Map"}
        ref={x => {
          this.container = x;
        }}
      />
    );
  }
}

const mapStateToProps = state => ({
  state: {
    dataLoaded: state.home.dataLoaded
  }
});

const actions = {
  setDataLoaded
};

export default connect(
  mapStateToProps,
  actions
)(Mapview);
