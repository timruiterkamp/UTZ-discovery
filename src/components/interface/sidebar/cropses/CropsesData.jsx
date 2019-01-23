import React from "react";
import * as d3 from "d3";
import styled from "styled-components";
// import themeConfig from "../../../../theme/themeConfig";
import BarchartHorizontal from "../charts/BarchartHorizontal";
import BarchartVertical from "../charts/BarchartVertical";

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  color: #3a3a3a;
`;
const Text = styled.p`
  font-size: 1.25em;
  padding-top: 2em;
  font-weight: 700;
`;

export default function CropsesData(props) {
  const CropsData = d3
    .nest()
    .key(d => d.crops_all)
    .entries(props.data);

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

  const cropSalesValue = d3
    .nest()
    .key(d => d.cropsales.replace(".", ","))
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
  const totalCropsalesValue = d3.sum(cropSalesValue, d => parseInt(d.key));
  const profitPerCapita = [
    {
      key: "Cropsales",
      percentage: totalCropsalesValue / CalculatedTotalHouseSize
    },
    {
      key: "value crop produce",
      percentage: totalCropProduceValue / CalculatedTotalHouseSize
    }
  ];

  const FlattenedCropsData = [].concat.apply(
    [],
    CropsData.map(d => d.key.split(" "))
  );
  const FilteredCropsData = d3
    .nest()
    .key(d => d)
    .entries(FlattenedCropsData);

  const NewCropsDataset = FilteredCropsData.map(d => ({
    key: d.key,
    percentage: (d.values.length / props.data.length) * 100
  }));
  console.log(NewCropsDataset);

  return (
    <Grid className={"data-overview "}>
      <Text> Top crops (percentage)</Text>
      <BarchartVertical data={NewCropsDataset} />
      <Text>Profit per capita (in dollars)</Text>
      <BarchartHorizontal data={profitPerCapita} />

      <Text>Agric input use (percentage)</Text>
      <BarchartVertical data={FertiliserAmount} />
      <Text>Irrigation (percentage)</Text>
      <BarchartVertical data={IrrigationMethodAmount} />
    </Grid>
  );
}
