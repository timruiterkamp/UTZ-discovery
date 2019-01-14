import React from "react";
import * as d3 from "d3";
import styled from "styled-components";

const TotalLand = styled.p`
  display: flex;
  flex-direction: column;
  color: #3a3a3a;
`;
export default function CountryCropses(props) {
  const totalLandCultivated = d3
    .nest()
    .key(d => d.landcultivated)
    .entries(props.data);

  const totalLand = d3.sum(totalLandCultivated, d => Number(d.key));

  return <TotalLand>{totalLand}</TotalLand>;
}
