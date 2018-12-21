import React, { Component, Fragment } from "react";
import MapviewBlock from "../interface/map/Mapview";
import { connect } from "react-redux";
import LoadingScreen from "../interface/home/LoadingScreen";
import { Menu } from "../interface/menu/Menu";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <LoadingScreen hidden={this.props.state.dataLoaded} />
        {this.props.state.dataLoaded && <Menu />}
        <MapviewBlock halve={false}>Discover the map</MapviewBlock>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: {
      dataLoaded: state.home.dataLoaded
    }
  };
};
export default connect(mapStateToProps)(Home);
