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
export class NavigationMenu extends Component {
  constructor(props) {
    super(props);
    console.log(props.state);
  }
  render() {
    return (
      <MenuLayout>
        <MenuItem>
          <MenuImageContainer>
            <Link to="/compare">
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
