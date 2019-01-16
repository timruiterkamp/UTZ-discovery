import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import themeConfig from "../../../theme/themeConfig";
import CountyFiltering from "./household/CountyFiltering";
import CountyCropses from "./household/CountyCropses";
import LandStatistics from "./household/LandStatistics";
import HouseHold from "./household/HouseHold";
import TotalIncome from "./household/TotalIncome";
import Menu from "./Menu";

// import { setCountryDetailInformation } from "../../../store/reducers/data/DataActions";

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
`;

const ContentBox = styled.div`
  padding: 3em;
`;

const Text = styled.p`
  font-size: 1em;
  line-height: 1.5;
  color: ${themeConfig.color.grey};
`;

const Button = styled.button`
  width: 100%;
  margin: 0 auto;
  border: 1px solid ${themeConfig.color.grey};
  padding: 0.5em 1em;
  background: transparent;
  font-size: 1.25em;
  transition: 0.3s ease-in-out;
  font-family: ${themeConfig.font.text};
  cursor: pointer;

  :hover {
    background-color: ${themeConfig.color.primary};
    border: 1px solid ${themeConfig.color.primary};
  }
`;

export class CountryInformation extends Component {
  state = {
    zoomed: false,
    currCountry: null
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

  componentWillUnmount() {
    this.setState({ zoomed: false });
  }

  render() {
    const { activeCountry, activeMenuItem } = this.props.state;

    return (
      <SideBar>
        <Menu />
        <ContentBox>
          <Button onClick={this.handleClick}>Bekijk per regio</Button>

          {activeMenuItem === "income" && (
            <Fragment>
              <HouseHold data={activeCountry.data} />
              {/* <TotalIncome data={activeCountry.data} /> */}
              <Text>Beschikbare regio's:</Text>
              <CountyFiltering data={activeCountry.data} />
              <Text>Total land cultivated:</Text>
              <LandStatistics data={activeCountry.data} />
            </Fragment>
          )}

          {activeMenuItem === "crops" && (
            <Fragment>
              <Text>Cropses data</Text>
            </Fragment>
          )}

          {activeMenuItem === "income" && (
            <Fragment>
              <Text>Income</Text>
            </Fragment>
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
      activeMenuItem: state.sidebarMenu.activeMenuItem
    }
  };
};

const actions = {};

export default connect(
  mapStateToProps,
  actions
)(CountryInformation);
