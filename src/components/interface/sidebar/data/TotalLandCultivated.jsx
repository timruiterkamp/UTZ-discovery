import React from "react";
import * as d3 from "d3";
import styled from "styled-components";

const TotalLand = styled.p`
  display: flex;
  flex-direction: column;
  color: #3a3a3a;
`;
export default function TotalLandCultivated(props) {
  const totalCultivated = d3
    .nest()
    .key(d => d.landcultivated)
    .entries(props.data);

  const totalLand = d3.sum(totalCultivated, d => Number(d.key));

  return <TotalLand>{totalLand.toFixed(1)}</TotalLand>;
}
