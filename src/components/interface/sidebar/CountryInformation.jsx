import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import themeConfig from "../../../theme/themeConfig";

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

export class CountryInformation extends Component {
  render() {
    const { activeCountry } = this.props.state;

    return (
      <SideBar>
        <ContentBox>
          <Title>{activeCountry.country}</Title>
          <Text>Aantal geïnterviewde boeren: {activeCountry.data.length}</Text>
        </ContentBox>
      </SideBar>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: {
      activeCountry: state.data.activeCountry
    }
  };
};

export default connect(mapStateToProps)(CountryInformation);
