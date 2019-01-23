import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { CompareItemScreen } from "../interface/compare/CompareItemScreen";
import styled from "styled-components";
import Menu from "../interface/sidebar/Menu";
import { Link } from "react-router-dom";
import BackButton from "../interface/button/BackButton";
import themeConfig from "../../theme/themeConfig";
import { FiMinimize2 } from "react-icons/fi";

const CompareContainer = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #f1f1f1;

  .compare-menu {
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
  }
`;

const NoDataContainer = styled.section`
  position: absolute;
  left: 50%;
  top: 35%;
  transform: translate(-50%, -35%);

  h2 {
    font-size: 2em;
    text-align: center;
  }

  a {
    text-align: center;
    color: white;
    cursor: pointer;
    /* text-decoration: none; */
  }
`;

const GoBack = styled.button`
  position: fixed;
  z-index: 1000;
  top: 50%;
  left: 35px;
  transform: translateY(-50%);
  font-size: 1.5em;
  color: ${themeConfig.color.secondary};
  background: transparent;
  border: 0;
  padding: 0;
  margin: 0;
`;
export class Compare extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.state.compareItems
    };
  }
  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      this.setState({
        data: this.props.state.comparedItems
      });
    }
  }
  render() {
    return (
      <CompareContainer>
        {this.props.state.comparedItems &&
        this.props.state.comparedItems.length ? (
          <Fragment>
            <GoBack>
              <Link to={"/"}>
                <FiMinimize2 />
              </Link>
            </GoBack>
            <Menu />
            {this.props.state.comparedItems.map(item => (
              <CompareItemScreen
                key={item.country}
                activeMenu={this.props.state.activeMenuItem}
                country={item.country}
                data={item.data}
              />
            ))}
          </Fragment>
        ) : (
          <Fragment>
            <BackButton />

            <NoDataContainer>
              <h2>There are no countries selected to compare</h2>
              <Link to={"/"}>back to the overview</Link>
            </NoDataContainer>
          </Fragment>
        )}
      </CompareContainer>
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

const actions = {};

export default connect(
  mapStateToProps,
  actions
)(Compare);
