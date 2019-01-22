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

export default function CropsesData(props) {
  console.log(props);
  const CropsData = d3
    .nest()
    .key(d => d.crops_all)
    .entries(props.data)
    .map(d => d.key.split(" "));

  const FertiliserType = d3
    .nest()
    .key(d => d.fertiliser_type)
    .entries(props.data);

  const HouseHoldSize = d3
    .nest()
    .key(d => d.HHsizemembers.replace(".", ","))
    .entries(props.data);

  const cropProduceValue = d3
    .nest()
    .key(d => d.valuecropproduce.replace(".", ","))
    .entries(props.data);

  const IrrigationMethod = d3
    .nest()
    .key(d => d.Irrigation_method)
    .entries(props.data);

  const cropfarmValue = d3
    .nest()
    .key(d => d.valuefarmproduce.replace(".", ","))
    .entries(props.data);
  const TotalHouseSize = HouseHoldSize.map(d => ({
    key: d.key,
    size: d.values.length
  }));
  const FertiliserAmount = FertiliserType.map(d => ({
    key: d.key,
    size: d.values.length,
    percentage: (d.values.length / props.data.length) * 100
  }));
  const IrrigationMethodAmount = IrrigationMethod.map(d => ({
    key: d.key,
    size: d.values.length,
    percentage: (d.values.length / props.data.length) * 100
  }));
  const CalculatedTotalHouseSize = d3.sum(
    TotalHouseSize,
    d => parseInt(d.key) * d.size
  );

  const totalCropProduceValue = d3.sum(cropProduceValue, d => parseInt(d.key));
  const totalFarmProduceValue = d3.sum(cropfarmValue, d => parseInt(d.key));
  const profitPerCapita = [
    { key: "Cropsales", percentage: totalCropProduceValue },
    { key: "value crop produce", percentage: totalFarmProduceValue }
  ];

  function numberWithCommas(x) {
    const transformedNumber = x
      .toString()
      .replace(".", ",")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return parseInt(transformedNumber);
  }

  const totalNumber = CropsData.map(items => items.map(d => d));

  console.log(IrrigationMethodAmount);

  return (
    <Grid className={"data-overview "}>
      <Text> Top crops</Text>
      <Text>Profit per capita</Text>
      <Barchart data={profitPerCapita} prefix={"$"} />
      <Text>Crops produced per capita:</Text> $
      {numberWithCommas(totalCropProduceValue / CalculatedTotalHouseSize)}
      <Text>Farm production per capita: </Text> $
      {numberWithCommas(totalFarmProduceValue / CalculatedTotalHouseSize)}
      <Text>Agric input use </Text>
      <ul>
        {FertiliserAmount.map(items => (
          <li key={items.key + Math.random(1000)}>
            {items.key}: {items.percentage.toFixed(1)}%
          </li>
        ))}
      </ul>
      <Text>Irrigation </Text>
      <ul>
        {IrrigationMethodAmount.map(items => (
          <li key={items.key + Math.random(1000)}>
            {items.key}: {items.percentage.toFixed(1)}%
          </li>
        ))}
      </ul>
    </Grid>
  );
}
