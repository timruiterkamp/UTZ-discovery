import React from "react";
import * as d3 from "d3";
import styled from "styled-components";
import themeConfig from "../../../../theme/themeConfig";
import BarchartHorizontal from "../charts/BarchartHorizontal";
import LineChart from "../charts/LineChart";

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  color: #3a3a3a;
`;
const Text = styled.h4`
  font-size: 1.25em;
  padding-top: 2em;
  font-weight: 700;
  font-family: ${themeConfig.font.title};
`;

export default function Poverty(props) {
  const HFIASstatus = d3
    .nest()
    .key(d => d.HFIAS_status)
    .entries(props.data);

  const ScorePPI = d3
    .nest()
    .key(d => d.score_PPI)
    .entries(props.data);

  const HFIASamount = HFIASstatus.map(d => ({
    key: d.key,
    size: d.values.length,
    percentage: (d.values.length / props.data.length) * 100
  }));
  const ScorePPIAmount = ScorePPI.map(d => ({
    key: d.key,
    size: d.values.length,
    percentage: (d.values.length / props.data.length) * 100
  }));

  console.log(HFIASamount, ScorePPIAmount);

  return (
    <Grid>
      <Text>HFIAS Status (percentage)</Text>
      <BarchartHorizontal
        data={HFIASamount}
        prefix="%"
        axisFormat="percentage"
      />
      <Text>Score PPI (percentage)</Text>
      <LineChart data={ScorePPIAmount} number={true} />
    </Grid>
  );
}
