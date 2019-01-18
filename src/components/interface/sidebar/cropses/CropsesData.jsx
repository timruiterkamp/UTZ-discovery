import React from "react";
import * as d3 from "d3";
import styled from "styled-components";
import themeConfig from "../../../../theme/themeConfig";

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  color: #3a3a3a;
`;
const Text = styled.p`
  font-size: 1em;
  font-weight: 700;
`;

const RoundDisplay = styled.div`
  height: 100px;
  width: 100px;
  background-color: ${themeConfig.color.lightGrey};
  border-radius: 50%;
  color: ${themeConfig.color.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const TwoColumnGrid = styled.section`
  display: flex;
  flex-direction: row;
  width: 40%;
  justify-content: space-between;
  div {
    align-items: center;
    display: flex;
    flex-direction: column;
  }
`;

const HouseHoldTypeList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  text-align: center;
`;
export default function CropsesData(props) {
  const CropsData = d3
    .nest()
    .key(d => d.crops_all)
    .rollup(v => v.key)
    .entries(props.data);

  // function numberWithCommas(x) {
  //   const transformedNumber = x
  //     .toString()
  //     .replace(".", ",")
  //     .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  //   return parseInt(transformedNumber);
  // }

  // const totalNumber = d3.sum(totalIncome, d => parseInt(d.key));

  console.log(CropsData);

  return (
    <Grid className={"data-overview "}>
      <Text> Top crops</Text>
    </Grid>
  );
}
