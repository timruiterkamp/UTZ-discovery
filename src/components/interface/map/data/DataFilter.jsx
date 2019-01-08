import React, { Component } from "react";
import { connect } from "react-redux";
import * as d3 from "d3";
import RhomisData from "../../../../data/rhomis-data.csv";
import WorldGeoCodes from "../../../../data/WorldGeoCodes.csv";
import {
  setGlobalRhomisData,
  setDataLoaded
} from "../../../../store/reducers/data/DataActions";

const csvFiles = [RhomisData, WorldGeoCodes];

export class DataFilter extends Component {
  componentDidMount() {
    Promise.all(csvFiles.map(url => d3.csv(url)))
      .then(values => {
        const sortDataByCountry = d3
          .nest()
          .key(d => {
            if (d.country === "DRC") {
              return d.country.replace("DRC", "Congo [DRC]");
            }

            if (d.country === "India_Bihar_Vaishali") {
              return d.country.replace("India_Bihar_Vaishali", "India");
            }

            if (d.country === "LaoPDR") {
              return d.country.replace("LaoPDR", "Laos");
            }

            return d.country;
          })
          .entries(values[0]);

        const sortGEOByCountry = d3
          .nest()
          .key(d => d.name)
          .rollup(v => v.map(d => ({ long: d.longitude, lat: d.latitude })))
          .entries(values[1]);

        let countryData = [...sortDataByCountry, ...sortGEOByCountry];
        return countryData;
      })
      .then(countryData => {
        const matchCountries = d3
          .nest()
          .key(d => d.key)
          .entries(countryData)
          .filter(items => items.values.length >= 2);
        return matchCountries;
      })
      .then(unstructuredData => {
        let newDataObject = unstructuredData
          .map(value => value.values)
          .map(item => ({
            country: item[0].key,
            data: item[0].values[0],
            lat: item[1].value[0].lat,
            long: item[1].value[0].long
          }));
        return newDataObject;
      })
      .then(cleanData => {
        this.props.setDataLoaded(true);
        this.props.setGlobalRhomisData(cleanData);
      })
      .catch(err => console.error(err));
  }

  render() {
    return <div />;
  }
}

const mapStateToProps = state => ({
  state: {
    dataLoaded: state.data.dataLoaded,
    rhomisData: state.data.rhomisData
  }
});

const mapDispatchToProps = { setGlobalRhomisData, setDataLoaded };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DataFilter);
