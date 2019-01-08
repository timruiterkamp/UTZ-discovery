import React, { Component, Fragment } from "react";
import MapboxGl from "mapbox-gl/dist/mapbox-gl.js";
import { connect } from "react-redux";
import { setMapLoaded } from "../../../store/reducers/data/DataActions";
import styled from "styled-components";
import FilteredData from "./data/DataFilter";
import * as d3 from "d3";
import "./map.css";

const MapInterface = styled.section`
  width: 100vw;
  height: 100vh;
`;

class Mapview extends Component {
  componentDidMount() {
    MapboxGl.accessToken =
      "pk.eyJ1Ijoibm9jbHVlNHUiLCJhIjoiY2pvZWY2ZTA5MXdkbjN3bGVicm1hZDNvZCJ9.kIU-GIm7Cl36xhEFLaPU1w";

    const map = new MapboxGl.Map({
      container: this.container,
      style: "mapbox://styles/noclue4u/cjpsfnz0m4reg2rnpz6xi6mwf",
      center: [9.589804, 48.115494],
      zoom: 1.5
    });

    const svg = d3
      .select(this.container)
      .append("svg")
      .append("g");

    map.on("load", () => {
      generateInformationTips(this.props.state.rhomisData);

      function generateInformationTips(d) {
        const circles = svg
          .selectAll("circle")
          .data(d)
          .enter()
          .append("circle")
          .on("click", d => console.log(d))
          .transition()
          .duration(0)
          .attr("cx", d => project([+d.long, +d.lat]).x)
          .attr("cy", d => project([+d.long, +d.lat]).y);

        const update = () => {
          svg
            .selectAll("circle")
            .attr("cx", d => project([+d.long, +d.lat]).x)
            .attr("cy", d => project([+d.long, +d.lat]).y)
            .transition()
            .duration(750)
            .attr("r", 10);
        };

        update();

        map
          .on("viewreset", () => update())
          .on("move", () => update())
          .on("moveend", () => update())
          .on("zoom", () => update());
      }
      function project(coords) {
        return map.project(new MapboxGl.LngLat(+coords[0], +coords[1]));
      }

      this.props.setMapLoaded(true);
    });
  }

  componentWillUnmount() {
    // setTimeout(() => map.remove());
  }

  render() {
    return (
      <Fragment>
        <FilteredData />
        <MapInterface
          className={this.props.hidden ? "hidden" : "Map"}
          ref={x => {
            this.container = x;
          }}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  state: {
    mapLoaded: state.data.mapLoaded,
    rhomisData: state.data.rhomisData
  }
});

const actions = {
  setMapLoaded
};

export default connect(
  mapStateToProps,
  actions
)(Mapview);
