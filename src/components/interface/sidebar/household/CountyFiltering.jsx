import React from "react";
import * as d3 from "d3";
import styled from "styled-components";

const List = styled.ul`
  display: flex;
  flex-direction: column;
  color: #3a3a3a;
`;
export default function CountyFiltering(props) {
  const filterRegions = d3
    .nest()
    .key(d => d.region.replace("_", " "))
    .entries(props.data);

  return (
    <List>
      {filterRegions &&
        filterRegions.map(items => (
          <li key={"item" + Math.random(1000)}>{items.key}</li>
        ))}
    </List>
  );
}
