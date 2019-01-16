import React, { Component, Fragment } from "react";
import MapviewBlock from "../interface/map/Mapview";
import { connect } from "react-redux";
import LoadingScreen from "../interface/home/LoadingScreen";
import { Menu } from "../interface/menu/Menu";
import CountryInformation from "../interface/sidebar/CountryInformation";
import CountryTitle from "../interface/home/CountryTitle";
import CountryRespondants from "../interface/home/CountryRespondants";

class Home extends Component {
  render() {
    const { dataLoaded, mapLoaded, activeCountry } = this.props.state;

    return (
      <Fragment>
        <LoadingScreen hidden={dataLoaded && mapLoaded} />
        {dataLoaded && mapLoaded && <Menu />}
        {activeCountry && <CountryTitle data={activeCountry.country} />}
        {activeCountry && (
          <CountryRespondants respondants={activeCountry.data.length} />
        )}
        {activeCountry && <CountryInformation />}
        <MapviewBlock currentCountry={activeCountry ? activeCountry : ""} />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: {
      dataLoaded: state.data.dataLoaded,
      mapLoaded: state.data.mapLoaded,
      activeCountry: state.data.activeCountry
    }
  };
};
export default connect(mapStateToProps)(Home);
