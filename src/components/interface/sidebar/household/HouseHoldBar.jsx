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

const BarItem = styled.div`
  width: ${props =>
    props.width < 10
      ? (props.width * 2).toFixed(2) + "%"
      : props.width.toFixed(2) + "%"};
  top: 0;
  left: ${props =>
    props.min === props.value
      ? 0
      : props.value < props.max
      ? (props.min / props.total) * 100
      : 100 - props.width}%;
  z-index: 10;
  height: 35px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  :first-child {
    background-color: ${props =>
      Number(props.width) > 50
        ? themeConfig.color.primary
        : themeConfig.color.lightGrey};
  }
  :nth-child(2) {
    background-color: ${props =>
      Number(props.width) > 50
        ? themeConfig.color.primary
        : themeConfig.color.grey};
  }
  :nth-child(3) {
    background-color: ${props =>
      Number(props.width) > 50
        ? themeConfig.color.primary
        : themeConfig.color.lightGrey};
  }
`;

const Text = styled.p`
  width: ${props => props.width.toFixed(2) + "%"};
  transform: translateX(
    -${props => (Number(props.width) / Number(props.parentWidth)) * 100}%
  );
  top: 30px;
  left: ${props => (Number(props.width) / props.parentWidth) * 100}%;
  z-index: 10;
  height: 35px;
  position: absolute;
  color: ${themeConfig.color.secondary};
  text-align: center;
`;
export default class HouseHoldBar extends Component {
  constructor(props) {
    super();
    this.barRef = React.createRef();

    this.state = {
      barWidth: 0,
      currData: props.data
    };
  }

  componentDidMount() {
    const barWidthNumber = this.barRef.current.getBoundingClientRect().width;
    const FilteredData = d3
      .nest()
      .key(d => (d.key.split(" ")[1] ? d.key.split(" ")[1] : d.key))
      .rollup(v => v.map(d => d3.sum(v, d => d.size)))
      .entries(this.props.data);

    this.setState({
      barWidth: barWidthNumber,
      filterData: FilteredData
    });
  }

  render() {
    const totalSize = d3.sum(this.props.data, d => d.size);
    const minNumber = d3.min(this.props.data, d => d.size);
    const maxNumber = d3.max(this.props.data, d => d.size);
    return (
      <Bar className={"stacked-bar"} ref={this.barRef}>
        {this.state.barWidth &&
          this.props.data.map(item => (
            <Fragment key={item.key + Math.random(1000)}>
              <BarItem
                key={item.key + Math.random(1000)}
                parentWidth={this.state.barWidth}
                width={(item.size / totalSize) * 100}
                min={minNumber}
                max={maxNumber}
                value={item.size}
                total={totalSize}
              >
                {((item.size / totalSize) * 100).toFixed(2)}%
              </BarItem>
              <Text
                key={item.key + Math.random(1000)}
                parentWidth={this.state.barWidth}
                width={(item.size / totalSize) * 100}
              >
                {item.key}
              </Text>
            </Fragment>
          ))}
      </Bar>
    );
  }
}
