import React, { Component, Fragment } from "react";
import MapviewBlock from "../interface/map/Mapview";
import { connect } from "react-redux";
import LoadingScreen from "../interface/home/LoadingScreen";
import { Menu } from "../interface/menu/Menu";

class Home extends Component {
  render() {
    const { dataLoaded, mapLoaded } = this.props.state;

    return (
      <Fragment>
        <LoadingScreen hidden={this.props.state.dataLoaded} />
        {dataLoaded && mapLoaded && <Menu />}
        <MapviewBlock halve={false}>Discover the map</MapviewBlock>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: {
      dataLoaded: state.data.dataLoaded,
      mapLoaded: state.data.mapLoaded
    }
  };
};
export default connect(mapStateToProps)(Home);
