import React from "react";
import * as d3 from "d3";
import styled from "styled-components";
import themeConfig from "../../../../theme/themeConfig";
import Barchart from "../charts/Barchart";

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  color: #3a3a3a;
`;
const Text = styled.p`
  font-size: 1em;
  font-weight: 700;
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
      <Text>HFIAS Status</Text>
      <Barchart data={HFIASamount} prefix="%" />
      <Text>Irrigation </Text>
      <ul>
        {ScorePPIAmount.map(items => (
          <li key={items.key + Math.random(1000)}>
            {items.key}: {items.percentage.toFixed(1)}%
          </li>
        ))}
      </ul>
    </Grid>
  );
}
