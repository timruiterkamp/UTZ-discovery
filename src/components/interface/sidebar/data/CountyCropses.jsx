import React from "react";
import * as d3 from "d3";
import styled from "styled-components";

const TotalLand = styled.p`
  display: flex;
  flex-direction: column;
  color: #3a3a3a;
`;
export default function CountryCropses(props) {
  const totalCropses = d3
    .nest()
    .key(d => d.cropses_all)
    .entries(props.data);

  const totalLand = console.log(totalCropses);

  return <TotalLand>{totalLand}</TotalLand>;
}
