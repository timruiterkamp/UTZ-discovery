import React, { Component } from "react";
import Layout from "../layout/Layout";
import MapviewBlock from "../interface/map/Mapview";
import CodeOfConduct from "../interface/home/CodeOfConduct";
import HomeGrid from "../interface/home/HomeGrid";
import LeftColumn from "../interface/home/LeftComlumn";
import RightColumn from "../interface/home/RightColumn";
import IntroductionBlock from "../interface/home/IntroductionBlock";

export default class Home extends Component {
  render() {
    return (
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
    );
  }
}
