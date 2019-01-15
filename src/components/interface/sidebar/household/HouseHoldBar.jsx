import React, { Component } from "react";
import * as d3 from "d3";
import styled from "styled-components";
import themeConfig from "../../../../theme/themeConfig";

const Bar = styled.div`
  width: 100%;
  background-color: ${themeConfig.color.grey};
  height: 35px;
`;

const BarItem = styled.span`
  width: ${props => props.width + "%"};
  background-color: ${props => (Number(props.width) > 50 ? "#fff" : "#000")};
  transform: translateX(${props => 100 - Number(props.width)});
  height: 100%;
`;

export default class HouseHoldBar extends Component {
  constructor(props) {
    super();
  }
  componentDidMount = () => {
    console.log(this.props.data);
    const min = d3.min(this.props.data, d => d.size);
    const max = d3.max(this.props.data, d => d.size);
    const total = d3.sum(this.props.data, d => d.size);
    const margin = { top: 20, right: 160, bottom: 35, left: 30 };

    const width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;

    const barSVG = d3
      .select(".stacked-bar")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    console.log(min, max, total);
  };

  render() {
    return <Bar className={"stacked-bar"} />;
  }
}
