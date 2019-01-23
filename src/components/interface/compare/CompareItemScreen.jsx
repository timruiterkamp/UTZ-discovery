import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import themeConfig from "../../../theme/themeConfig";
import HouseHold from "../sidebar/household/HouseHold";
import Menu from "../sidebar//Menu";
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

const Button = styled.button`
  width: 35px;
  height: 35px;
  text-align: center;
  border-radius: 50%;
  margin: 0 auto;
  border: 1px solid #2d2d2d;
  background: transparent;
  font-size: 1em;
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
  font-family: Karla;
  cursor: pointer;
  position: absolute;
  right: 2em;
  top: 4.5em;

  :hover {
    background-color: ${themeConfig.color.primary};
    border: 1px solid ${themeConfig.color.primary};
  }
`;

const CountryTitle = styled.h2`
  font-size: 2em;
  font-size: 700;
  font-family: ${themeConfig.font.title};
  color: ${themeConfig.color.secondary};
`;

export class CompareItemScreen extends Component {
  constructor(props) {
    super(props);
    console.log(props.state);
  }

  removeCompareCountry = country => {
    console.log(country);
  };

  render() {
    // const { activeMenuItem } = this.props.state;
    return (
      <SideBar>
        <ContentBox>
          <CountryTitle>{this.props.country}</CountryTitle>
          <Button
            onClick={this.removeCompareCountry(this.props.country)}
            label={this.props.country}
          >
            X
          </Button>
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

export default connect(
  mapStateToProps,
  actions
)(CompareItemScreen);
