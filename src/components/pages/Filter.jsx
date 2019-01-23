import React, { Component } from "react";
import { connect } from "react-redux";
import Layout from "../layout/Layout";
import BackButton from "../interface/button/BackButton";
import styled from "styled-components";
import themeConfig from "../../theme/themeConfig";
import { FilterSelection } from "../filters/FilterSelection";
import * as d3 from "d3";

const Title = styled.h1`
  font-size: 2em;
  font-family: ${themeConfig.font.title};
  font-weight: 700;
  margin: 0;
`;

const Subtitle = styled.h3`
  font-size: 1em;
  font-family: ${themeConfig.font.text};
  font-weight: 700;
  margin: 0;
`;

const FilterContainer = styled.section`
  padding: 4em 8em;
  animation: 0.5s fadeIn forwards;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
class Filter extends Component {
  componentDidMount() {
    if (this.props.state.rhomisData) {
      const countryData = this.props.state.rhomisData.map(item => item.data);
      const concattedData = countryData.map(items => items);
      console.log(concattedData);
    }
  }
  render() {
    return (
      <FilterContainer>
        <BackButton />

        <Title>FILTER</Title>
        <Subtitle>Select the desired filters</Subtitle>
        <FilterSelection />
      </FilterContainer>
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

const actions = {};

export default connect(
  mapStateToProps,
  actions
)(Filter);
