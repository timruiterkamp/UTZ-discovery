import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

export default class BarchartVertical extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: props.data.sort((a, b) => a.key - b.key).map(d => d.key),
        datasets: [
          {
            label: "value",
            data: props.data
              .sort((a, b) => a.key - b.key)
              .map(d => d.percentage.toFixed(1)),
            backgroundColor: "#F7D73B"
          }
        ]
      }
    };
  }
  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):

    if (this.props.data !== prevProps.data) {
      this.setState({
        chartData: {
          labels: this.props.data.sort((a, b) => a.key - b.key).map(d => d.key),
          datasets: [
            {
              label: "value",
              data: this.props.data
                .sort((a, b) => a.key - b.key)
                .map(d => d.percentage.toFixed(1))
            }
          ]
        }
      });
    }
  }
  render() {
    return (
      <div>
        <Bar data={this.state.chartData} redraw />
      </div>
    );
  }
}
