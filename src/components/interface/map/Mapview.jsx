import React, { Component, Fragment } from "react";
import MapboxGl from "mapbox-gl/dist/mapbox-gl.js";
import { connect } from "react-redux";
import {
  setMapLoaded,
  setActiveCountry,
  setMap,
  setBaseSVG
} from "../../../store/reducers/data/DataActions";
import styled from "styled-components";
import FilteredData from "./data/DataFilter";
import * as d3 from "d3";
import "./map.css";

const MapInterface = styled.section`
  position: absolute;
  width: 100vw;
  height: 100vh;
`;

class Mapview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currCountry: this.props.currentCountry
    };
    this.generateInformationTips = this.generateInformationTips.bind(this);
    this.project = this.project.bind(this);
    this.activeCurrentCountry = this.activeCurrentCountry.bind(this);
  }

  generateInformationTips(d) {
    if (this.svg && d.length) {
      this.svg
        .selectAll("circle")
        .data(d)
        .enter()
        .append("circle")
        .on("click", d => {
          this.activeCurrentCountry(d);
          // setCountryCenter(d.lat, d.long);
        })
        .transition()
        .duration(500)
        .attr("cx", d => this.project([+d.long, +d.lat]).x)
        .attr("cy", d => this.project([+d.long, +d.lat]).y);

      const update = () => {
        const checkIfPointsExist = document.querySelector(".regionpoints")
          ? true
          : false;
        if (this.map.getZoom() >= 5 && !checkIfPointsExist) {
          const country = d.filter(
            countries => countries.country === this.props.currentCountry.country
          );

          const regions = d3
            .nest()
            .key(d => d.region.toLowerCase())
            .entries(country[0].data);

          const regionSVG = d3
            .select(".mapboxgl-canvas-container")
            .append("svg")
            .attr("class", "regionpoints")
            .append("g");

          regions.map(region =>
            regionSVG
              .selectAll("circle")
              .data(region)
              .enter()
              .append("circle")
              .transition()
              .duration(500)
              .attr("cx", this.project([18, 13]).x)
              .attr("cy", this.project([18, 13]).y)
          );
        }
        this.svg
          .selectAll("circle")
          .attr("cx", d => this.project([+d.long, +d.lat]).x)
          .attr("cy", d => this.project([+d.long, +d.lat]).y)
          .transition()
          .duration(750)
          .attr("r", 7);
      };

      update();

      this.map
        .on("viewreset", () => update())
        .on("move", () => update())
        .on("moveend", () => update())
        .on("zoom", () => update());
    }
  }

  project(coords) {
    return this.map.project(new MapboxGl.LngLat(+coords[0], +coords[1]));
  }

  activeCurrentCountry(country) {
    this.props.setActiveCountry(country);
  }

  componentDidMount() {
    const { setMapLoaded, setMap } = this.props;

    MapboxGl.accessToken =
      "pk.eyJ1Ijoibm9jbHVlNHUiLCJhIjoiY2pvZWY2ZTA5MXdkbjN3bGVicm1hZDNvZCJ9.kIU-GIm7Cl36xhEFLaPU1w";

    this.map = new MapboxGl.Map({
      container: this.container,
      style: "mapbox://styles/noclue4u/cjpsfnz0m4reg2rnpz6xi6mwf",
      center: [9.589804, 48.115494],
      zoom: 1.5
    });

    this.svg = d3
      .select(".mapboxgl-canvas-container")
      .append("svg")
      .attr("class", "datapoints")
      .append("g");

    this.map.on("load", () => {
      setMap(this.map);
      setBaseSVG(this.svg);
      this.generateInformationTips(this.props.state.rhomisData);
      setMapLoaded(true);
    });
  }

  render() {
    return (
      <Fragment>
        {!this.props.state.activeCountry && <FilteredData />}
        <MapInterface
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
    rhomisData: state.data.rhomisData,
    activeCountry: state.data.activeCountry
  }
});

const actions = {
  setMapLoaded,
  setActiveCountry,
  setMap,
  setBaseSVG
};

export default connect(mapStateToProps, actions)(Mapview);
