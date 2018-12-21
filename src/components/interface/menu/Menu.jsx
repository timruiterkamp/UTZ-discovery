import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import themeConfig from "../../../theme/themeConfig";

const MenuLayout = styled.nav`
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 1em;
  left: 5em;
  z-index: 1;
`;
const MenuItem = styled.div`
  width: 3.5em;
  height: 3.5em;
  background-color: ${themeConfig.color.primary};
  border-radius: 50%;
  padding: 0 1em;
`;
export class Menu extends Component {
  render() {
    return (
      <MenuLayout>
        <MenuItem>
          <img src="/img/compare.svg/" alt="compare" />
        </MenuItem>
        <MenuItem>
          <img src="/img/filter.svg/" alt="filter" />
        </MenuItem>
        <MenuItem>
          <img src="/img/information.svg/" alt="information" />
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
