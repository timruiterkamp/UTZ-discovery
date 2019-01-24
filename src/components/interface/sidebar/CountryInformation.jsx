import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import themeConfig from "../../../theme/themeConfig";
import HouseHold from "./household/HouseHold";
import Menu from "./Menu";
import CropsesData from "./cropses/CropsesData";
import Poverty from "./poverty/Poverty";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";

import {
  setCompareItems,
  deleteCompareItems
} from "../../../store/reducers/data/DataActions";

const SideBar = styled.section`
  width: 35vw;
  position: absolute;
  right: 0;
  top: 0;
  height: 100vh;
  overflow-y: scroll;
  z-index: 100;
  background-color: ${themeConfig.color.white};
  display: grid;
  grid-template-columns: 15% 85%;
  max-width: 35vw;
  overflow-x: hidden;
  animation: 1s fadeIn forwards;

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateX(100vw);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const ContentBox = styled.div`
  padding: 3em;
`;

// const Text = styled.p`
//   font-size: 1em;
//   line-height: 1.5;
//   color: ${themeConfig.color.grey};
// `;

const Button = styled.button`
  margin: 0 auto;
  border: 1px solid ${props => props.color};
  padding: 0.5em 1em;
  background: transparent;
  font-size: 1em;
  transition: 0.3s ease-in-out;
  font-family: ${themeConfig.font.text};
  cursor: pointer;
  outline: none;
  color: ${props => props.color};
  display: flex;
  flex-direction: row;
  align-items: center;

  svg {
    margin-right: 0.5em;
  }

  :hover {
    background-color: ${themeConfig.color.primary};
    border: 1px solid ${themeConfig.color.primary};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: row;
`;

export class CountryInformation extends Component {
  state = {
    zoomed: false,
    currCountry: null,
    alreadyInComparison: []
  };

  handleClick = () => {
    this.setState({
      zoomed: true,
      currCountry: this.props.state.activeCountry
    });
    this.props.state.map.flyTo({
      center: [
        this.props.state.activeCountry.long,
        this.props.state.activeCountry.lat
      ],
      zoom: 5,
      offset: [-300, 0],
      pitch: 30,
      curve: 2,
      speed: 0.8
    });
  };

  checkIfExists = (a, b) => {
    return a.indexOf(b) !== -1;
  };

  setForCompare = () => {
    if (
      this.checkIfExists(
        this.props.state.comparedItems,
        this.props.state.activeCountry
      )
    ) {
      console.log("bestaat al");
      this.props.deleteCompareItems(this.props.state.activeCountry);

      this.setState({
        alreadyInComparison: [
          ...this.state.alreadyInComparison,
          this.props.state.activeCountry
        ]
      });
    } else {
      this.props.setCompareItems(this.props.state.activeCountry);
      this.setState({
        alreadyInComparison: [
          ...this.state.alreadyInComparison,
          this.props.state.activeCountry
        ]
      });
    }
  };

  componentWillUnmount() {
    this.setState({ zoomed: false });
  }

  render() {
    const { activeCountry, activeMenuItem } = this.props.state;
    return (
      <SideBar>
        <Menu />
        <ContentBox>
          <ButtonContainer>
            {/* <Button onClick={this.handleClick}>Bekijk per regio</Button> */}
            <Button
              onClick={this.setForCompare}
              color={
                this.checkIfExists(
                  this.props.state.comparedItems,
                  this.props.state.activeCountry
                )
                  ? "#f58d8d"
                  : "#1a1a1a"
              }
            >
              {this.checkIfExists(
                this.props.state.comparedItems,
                this.props.state.activeCountry
              ) ? (
                <FiMinusCircle />
              ) : (
                <FiPlusCircle />
              )}

              {this.checkIfExists(
                this.props.state.comparedItems,
                this.props.state.activeCountry
              )
                ? "Verwijderen uit vergelijking"
                : "Toevoegen aan vergelijken"}
            </Button>
          </ButtonContainer>
          {activeMenuItem === "income" && (
            <HouseHold data={activeCountry.data} />
          )}

          {activeMenuItem === "crops" && (
            <CropsesData data={activeCountry.data} />
          )}

          {activeMenuItem === "poverty" && (
            <Poverty data={activeCountry.data} />
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

const actions = { setCompareItems, deleteCompareItems };

export default connect(
  mapStateToProps,
  actions
)(CountryInformation);
