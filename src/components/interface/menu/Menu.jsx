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
  /* padding: 0 1em; */
`;
export class Menu extends Component {
  render() {
    return (
      <MenuLayout>
        <MenuItem>
          <Link to="/compare">
            <img src="/img/compare.svg/" alt="compare" />
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/filter">
            <img src="/img/filter.svg/" alt="filter" />
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/information">
            <img src="/img/information.svg/" alt="information" />
          </Link>
        </MenuItem>
      </MenuLayout>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
