import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import themeConfig from "../../../theme/themeConfig";
import { Link } from "react-router-dom";

const MenuLayout = styled.nav`
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 1em;
  left: 5em;
  z-index: 1;
`;
const MenuItem = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${themeConfig.color.primary};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  margin: 0 0.75em;
`;

const MenuImageContainer = styled.div`
  align-self: center;
`;

const MenuImage = styled.img`
  height: 20px;
`;
const Counter = styled.div`
  width: 35px;
  height: 35px;
  background-color: #1a1a1a;
  color: white;
  border-radius: 50%;
  position: absolute;
  top: -15px;
  left: 43px;
  align-items: center;
  display: flex;
  justify-content: center;
  font-size: 1em;
  font-family: ${themeConfig.font.text};
  animation: 0.3s fadeIn forwards;
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: scale(0.7);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;
export class NavigationMenu extends Component {
  render() {
    return (
      <MenuLayout>
        <MenuItem>
          <MenuImageContainer>
            <Link to="/compare">
              {this.props.activeCompares >= 1 && (
                <Counter> {this.props.activeCompares}</Counter>
              )}
              <MenuImage src="/img/compare.svg" alt="compare" />
            </Link>
          </MenuImageContainer>
        </MenuItem>
        <MenuItem>
          <MenuImageContainer>
            <Link to="/filter">
              <MenuImage src="/img/filter.svg" alt="filter" />
            </Link>
          </MenuImageContainer>
        </MenuItem>
        <MenuItem>
          <MenuImageContainer>
            <Link to="/information">
              <MenuImage src="/img/information.svg" alt="information" />
            </Link>
          </MenuImageContainer>
        </MenuItem>
      </MenuLayout>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: {
      comparedItems: state.data.compareItems
    }
  };
};

export default connect(mapStateToProps)(NavigationMenu);
