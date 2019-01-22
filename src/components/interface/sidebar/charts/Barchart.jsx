import React, { Component } from "react";
import * as d3 from "d3";
import "./barchart.css";

export default class Barchart extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    const data = this.props.data.sort(function(a, b) {
      return d3.ascending(a.percentage, b.percentage);
    });
    console.log(data);

    let svg = d3.select(this.svg),
      margin = { top: 20, right: 10, bottom: 30, left: 70 },
      width = +svg.attr("width") - margin.left - margin.right,
      height = +svg.attr("height") - margin.top - margin.bottom;

    console.log(svg);
    svg = svg
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var y = d3
      .scaleBand()
      .range([height, 0])
      .padding(0.4);

    var x = d3.scaleLinear().range([0, width]);

    // Scale the range of the data in the domains
    x.domain([0, 100]);
    y.domain(
      data.map(function(d) {
        return d.key;
      })
    );

    function make_x_gridlines() {
      return d3.axisBottom(x).ticks(2);
    }

    // add the X gridlines
    svg
      .append("g")
      .attr("class", "grid")
      .attr("transform", "translate(0," + height + ")")
      .call(
        make_x_gridlines()
          .tickSize(-height)
          .tickFormat("")
      );

    svg
      .selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      //.attr("x", function(d) { return x(d.sales); })
      .attr("width", function(d) {
        return x(d.percentage);
      })
      .attr("y", function(d) {
        return y(d.key);
      })
      .attr("height", y.bandwidth());

    svg
      .selectAll(".text")
      .data(data)
      .enter()
      .append("text")
      .attr("class", "value")
      .text(d =>
        this.props.prefix === "$"
          ? this.props.prefix + d.percentage.toFixed(1)
          : d.percentage.toFixed(1) + this.props.prefix
      )
      .attr("y", d => y(d.key) + 18)
      .attr("x", (d, i) => d.percentage * 2.4);

    // add the x Axis
    svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    // add the y Axis
    svg.append("g").call(d3.axisLeft(y));
  }
  render() {
    return (
      <svg
        width="300"
        height="250"
        ref={x => {
          this.svg = x;
        }}
      />
    );
  }
}
