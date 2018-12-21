import React, { Component, Fragment } from "react";
import MapviewBlock from "../interface/map/Mapview";
import { connect } from "react-redux";
import LoadingScreen from "../interface/home/LoadingScreen";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <LoadingScreen hidden={this.props.dataLoaded ? false : true} />
        <MapviewBlock
          halve={false}
          hidden={this.props.dataLoaded ? true : false}
        >
          Discover the map
        </MapviewBlock>
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
