import React, { Component, Fragment } from "react";
import Layout from "../layout/Layout";
import MapviewBlock from "../interface/map/Mapview";
import CodeOfConduct from "../interface/home/CodeOfConduct";
import HomeGrid from "../interface/home/HomeGrid";
import LeftColumn from "../interface/home/LeftComlumn";
import RightColumn from "../interface/home/RightColumn";
import IntroductionBlock from "../interface/home/IntroductionBlock";
import { connect } from "react-redux";
import LoadingScreen from "../interface/home/LoadingScreen";

class Home extends Component {
  render() {
    const dataLoaded = this.props.state.dataLoaded;
    return (
      <Fragment>
        {/* {!dataLoaded && <LoadingScreen />} */}
        {!dataLoaded && (
          <Layout header={false}>
            <HomeGrid>
              <LeftColumn>
                <IntroductionBlock />
                <MapviewBlock halve={true}>Discover the map</MapviewBlock>
              </LeftColumn>
              <RightColumn>
                <CodeOfConduct />
              </RightColumn>
            </HomeGrid>
          </Layout>
        )}
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

const actions = {};

export default connect(
  mapStateToProps,
  actions
)(Home);
