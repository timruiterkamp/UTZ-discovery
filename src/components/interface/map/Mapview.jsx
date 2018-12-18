import React, { Component } from "react";
import styled from "styled-components";
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";

mapboxgl.accessToken =
  "pk.eyJ1Ijoibm9jbHVlNHUiLCJhIjoiY2pvZWY2ZTA5MXdkbjN3bGVicm1hZDNvZCJ9.kIU-GIm7Cl36xhEFLaPU1w";

const MapviewBlock = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  z-index: -1;
`;

export default class Mapview extends Component {
  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/noclue4u/cjpsfnz0m4reg2rnpz6xi6mwf",
      center: [9.589804, 48.115494],
      zoom: 1.5
    });
  }
  componentWillUnmount() {
    this.map.remove();
  }
  render() {
    return <MapviewBlock ref={el => (this.mapContainer = el)} />;
  }
}
