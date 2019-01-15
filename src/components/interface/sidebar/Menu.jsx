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

  &.active {
    background-color: ${themeConfig.color.secondary};
    color: white;
  }
  :hover {
    background-color: ${themeConfig.color.secondary};
    color: white;
  }
`;

export class Menu extends Component {
  constructor(props) {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.props.setSidebarMenu("income");
  }
  handleClick(e) {
    const newActiveItem = e.target.getAttribute("label");
    this.props.setSidebarMenu(newActiveItem);
    console.log(this.props.state.activeMenuItem);
  }
  render() {
    const { activeMenuItem } = this.props.state;
    return (
      <MenuBar>
        {activeMenuItem && (
          <Fragment>
            <MenuItem
              onClick={this.handleClick}
              label={"income"}
              className={
                activeMenuItem === "income"
                  ? "active"
                  : console.log(activeMenuItem)
              }
            >
              Income
            </MenuItem>
            <MenuItem
              onClick={this.handleClick}
              label={"crops"}
              className={
                this.props.state.activeMenuItem === "crops" ? "active" : ""
              }
            >
              Crops
            </MenuItem>

            <MenuItem
              onClick={this.handleClick}
              label={"poverty"}
              className={
                this.props.state.activeMenuItem === "poverty" ? "active" : ""
              }
            >
              Poverty
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
