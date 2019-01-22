import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import themeConfig from "../../../theme/themeConfig";
import { setSidebarMenu } from "../../../store/reducers/menu/menuActions";

const MenuBar = styled.nav`
  display: flex;
  flex-direction: column;
  background-color: #f1f1f1;
  height: 100%;
  align-items: center;
  padding-top: 35px;
`;
const MenuItem = styled.li`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: ${themeConfig.color.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1em;
  margin: 0.5em 0;
  color: ${themeConfig.color.secondary};
  cursor: pointer;

  &.active {
    background-color: ${themeConfig.color.secondary};
    color: white;

    svg {
      color: white;
    }
  }
  :hover {
    background-color: ${themeConfig.color.secondary};
    color: white;
  }
`;

export class Menu extends Component {
  constructor(props) {
    super();
    this.setToIncome = this.setToIncome.bind(this);
    this.setToCrops = this.setToCrops.bind(this);
    this.setToPoverty = this.setToPoverty.bind(this);
  }
  componentDidMount() {
    this.props.setSidebarMenu("income");
  }
  setToIncome(e) {
    this.props.setSidebarMenu("income");
  }
  setToCrops(e) {
    this.props.setSidebarMenu("crops");
  }
  setToPoverty(e) {
    this.props.setSidebarMenu("poverty");
  }
  render() {
    const { activeMenuItem } = this.props.state;
    return (
      <MenuBar>
        {activeMenuItem && (
          <Fragment>
            <MenuItem
              onClick={this.setToIncome}
              label={"income"}
              className={
                this.props.state.activeMenuItem === "income" ? "active" : ""
              }
            >
              <img src="/img/household_icon.svg" />
            </MenuItem>
            <MenuItem
              onClick={this.setToCrops}
              label={"crops"}
              className={
                this.props.state.activeMenuItem === "crops" ? "active" : ""
              }
            >
              <img src="/img/crops_icon.svg" />
            </MenuItem>

            <MenuItem
              onClick={this.setToPoverty}
              label={"poverty"}
              className={
                this.props.state.activeMenuItem === "poverty" ? "active" : ""
              }
            >
              <img src="/img/poverty_icon.svg" />
            </MenuItem>
          </Fragment>
        )}
      </MenuBar>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: {
      activeMenuItem: state.sidebarMenu.activeMenuItem
    }
  };
};

const actions = {
  setSidebarMenu
};

export default connect(
  mapStateToProps,
  actions
)(Menu);
