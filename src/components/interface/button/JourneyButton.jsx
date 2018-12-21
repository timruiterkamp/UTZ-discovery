import React, { Component } from "react";
import { connect } from "react-redux";
import { changeHomeInterface } from "../../../store/reducers/home/HomeActions";
import styled from "styled-components";
import themeConfig from "../../../theme/themeConfig";

const Button = styled.button`
  padding: 0.75em 1em;
  border-radius: 1em;
`;

function setNewHomeInterface() {
  // console.log(this.props);
}
class JourneyButton extends Component {
  render() {
    console.log(this.props.state.changeInterface);
    return <Button onClick={setNewHomeInterface}>{this.props.children}</Button>;
  }
}

const mapStateToProps = state => {
  return {
    state: {
      changeInterface: state.home.changeInterface
    }
  };
};

const actions = {
  changeHomeInterface
};

export default connect(
  mapStateToProps,
  actions
)(JourneyButton);
