import React, { Component, Fragment } from "react";
import * as d3 from "d3";
import styled from "styled-components";
import themeConfig from "../../../../theme/themeConfig";

const Bar = styled.div`
  width: 100%;
  height: 35px;
  position: relative;
  padding: 2em 0;
`;

const barContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const BarItem = styled.div`
  width: ${props =>
    props.width < 10
      ? (props.width * 2).toFixed(2) + "%"
      : props.width.toFixed(2) + "%"};
  top: 0;
  left: ${props => (props.min === props.value ? 0 : 100 - props.width)}%;
  z-index: 10;
  height: 35px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  :first-child {
    background-color: ${props =>
      props.max === props.value
        ? themeConfig.color.primary
        : themeConfig.color.lightGrey};
  }
  :nth-child(2) {
    background-color: ${props =>
      props.max === props.value
        ? themeConfig.color.primary
        : themeConfig.color.grey};
  }
  :nth-child(3) {
    background-color: ${props =>
      props.max === props.value
        ? themeConfig.color.primary
        : themeConfig.color.lightGrey};
  }
`;

const Text = styled.p`
  width: ${props => props.width.toFixed(2) + "%"};
  top: 30px;
  left: ${props => (props.min === props.value ? 0 : 100 - props.width)}%;
  z-index: 10;
  height: 35px;
  position: absolute;
  color: ${themeConfig.color.secondary};
  text-align: center;
`;
export default class HouseHoldBar extends Component {
  constructor(props) {
    super();
    this.debtBar = React.createRef();

    this.state = {
      barWidth: 0,
      currData: props.data,
      minNumber: 0
    };
  }

  componentDidMount() {
    const barWidthNumber = this.debtBar.current.getBoundingClientRect().width;
    this.setState({
      barWidth: barWidthNumber
    });
  }

  render() {
    const totalSize = d3.sum(this.props.data, d => d.values.length);
    const minNumber = d3.min(this.props.data, d => d.values.length);
    const maxNumber = d3.max(this.props.data, d => d.values.length);
    return (
      <Bar className={"stacked-bar"} ref={this.debtBar}>
        {this.state.barWidth &&
          this.props.data.map(item => (
            <Fragment key={item.key + Math.random(1000)}>
              <BarItem
                key={item.key + Math.random(1000)}
                parentWidth={this.state.barWidth}
                min={minNumber}
                max={maxNumber}
                total={totalSize}
                value={item.values.length}
                width={(item.values.length / totalSize) * 100}
              >
                {((item.values.length / totalSize) * 100).toFixed(2)}%
              </BarItem>
              <Text
                key={item.key + Math.random(1000)}
                parentWidth={this.state.barWidth}
                width={(item.values.length / totalSize) * 100}
              >
                {item.key}
              </Text>
            </Fragment>
          ))}
      </Bar>
    );
  }
}
