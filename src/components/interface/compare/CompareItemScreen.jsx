import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import themeConfig from "../../../theme/themeConfig";
import HouseHold from "../sidebar/household/HouseHold";
import CropsesData from "../sidebar/cropses/CropsesData";
import Poverty from "../sidebar/poverty/Poverty";

import { setCompareItems } from "../../../store/reducers/data/DataActions";

const SideBar = styled.section`
  width: 31vw;
  height: 100%;
  z-index: 100;
  background-color: ${themeConfig.color.white};
  max-width: 35vw;
  overflow-x: hidden;
  border-right: 1px solid #eaeaea;
  border-top: 1px solid #eaeaea;

  :nth-of-type(4n + 4) {
    margin-left: 100px;
  }
`;

const ContentBox = styled.div`
  padding: 3em;
  position: relative;
`;

const CountryTitle = styled.h2`
  font-size: 2em;
  font-size: 700;
  font-family: ${themeConfig.font.title};
  color: ${themeConfig.color.secondary};
`;

const Text = styled.h4`
  font-size: 1.25em;
  padding-top: 0;
  font-weight: 700;
  color: ${themeConfig.color.secondary};
  font-family: ${themeConfig.font.title};
`;

export class CompareItemScreen extends Component {
  render() {
    // const { activeMenuItem } = this.props.state;
    return (
      <SideBar>
        <ContentBox>
          <CountryTitle>{this.props.country}</CountryTitle>
          {/* <Button
            onClick={this.removeCompareCountry(this.props.country)}
            label={this.props.country}
          >
            X
          </Button> */}
          <Text>Total responses: {this.props.data.length}</Text>
          {this.props.activeMenu === "income" && (
            <HouseHold data={this.props.data} />
          )}

          {this.props.activeMenu === "crops" && (
            <CropsesData data={this.props.data} />
          )}

          {this.props.activeMenu === "poverty" && (
            <Poverty data={this.props.data} />
          )}
        </ContentBox>
      </SideBar>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: {
      activeCountry: state.data.activeCountry,
      map: state.data.map,
      activeMenuItem: state.sidebarMenu.activeMenuItem,
      comparedItems: state.data.compareItems
    }
  };
};

const actions = { setCompareItems };

export default connect(mapStateToProps, actions)(CompareItemScreen);
