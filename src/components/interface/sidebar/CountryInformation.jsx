import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import themeConfig from "../../../theme/themeConfig";
import CountyFiltering from "./data/CountyFiltering";
import CountyCropses from "./data/CountyCropses";
import LandStatistics from "./data/LandStatistics";
import HouseHold from "./data/HouseHold";

// import { setCountryDetailInformation } from "../../../store/reducers/data/DataActions";

const SideBar = styled.section`
  width: 30vw;
  position: absolute;
  right: 0;
  top: 0;
  height: 100vh;
  overflow-y: scroll;
  z-index: 100;
  background-color: ${themeConfig.color.white};
`;

const ZoomedSidaBar = styled(SideBar)`
  width: 40vw;
`;

const ContentBox = styled.div`
  padding: 3em;
`;

const Title = styled.h1`
  font-size: 2em;
  color: ${themeConfig.color.grey};
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
    const { activeCountry } = this.props.state;
    console.log(activeCountry);

    return (
      <SideBar>
        <ContentBox>
          <Title>{activeCountry.country}</Title>
          <Text>Aantal geïnterviewde boeren: {activeCountry.data.length}</Text>
          <HouseHold data={activeCountry.data} />
          <Text>Beschikbare regio's:</Text>
          <CountyFiltering data={activeCountry.data} />
          <Text>Total land cultivated:</Text>
          <LandStatistics data={activeCountry.data} />
          <Button onClick={this.handleClick}>Bekijk per regio</Button>
        </ContentBox>
      </SideBar>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: {
      activeCountry: state.data.activeCountry,
      map: state.data.map
    }
  };
};

const actions = {};

export default connect(
  mapStateToProps,
  actions
)(CountryInformation);
