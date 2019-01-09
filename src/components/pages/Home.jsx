import React, { Component, Fragment } from "react";
import MapviewBlock from "../interface/map/Mapview";
import { connect } from "react-redux";
import LoadingScreen from "../interface/home/LoadingScreen";
import { Menu } from "../interface/menu/Menu";
import CountryInformation from "../interface/sidebar/CountryInformation";

class Home extends Component {
  render() {
    const { dataLoaded, mapLoaded, activeCountry } = this.props.state;

    return (
      <Fragment>
        <LoadingScreen hidden={dataLoaded} />
        {dataLoaded && mapLoaded && <Menu />}
        {activeCountry && <CountryInformation />}
        <MapviewBlock halve={false} />
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
