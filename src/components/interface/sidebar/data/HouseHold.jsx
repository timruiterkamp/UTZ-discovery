import React from "react";
import * as d3 from "d3";
import styled from "styled-components";

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  color: #3a3a3a;
`;
const Text = styled.p`
  font-size: 1em;
  font-weight: 700;
`;
export default function HouseHold(props) {
  const HouseHoldTypeData = d3
    .nest()
    .key(d => d.household_type)
    .entries(props.data);

  const HouseHoldSize = d3
    .nest()
    .key(d => d.HHsizemembers)
    .entries(props.data);

  const StandardHouseSize = d3.deviation(HouseHoldSize, d => Number(d.key));
  const MinMaxHouseSize = d3.extent(HouseHoldSize, d => Number(d.key));

  const HouseHoldTypes = HouseHoldTypeData.map(household => ({
    key: household.key,
    size: household.values.length
  }));

  return (
    <Grid>
      <Text>standard deviation:</Text>
      {StandardHouseSize}

      <Text>Min: eerste getal, max: laatste: </Text>
      {MinMaxHouseSize}

      <Text>household types: </Text>
      {HouseHoldTypes
        ? HouseHoldTypes.map(type => (
            <li key={type.key}>
              {type.key}
              {type.size}
            </li>
          ))
        : ""}
    </Grid>
  );
}
