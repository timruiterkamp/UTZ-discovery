import React from "react";
import * as d3 from "d3";
import styled from "styled-components";
import HouseHoldBar from "./HouseHoldBar";
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
export default function HouseHold(props) {
  const HouseHoldTypeData = d3
    .nest()
    .key(d => d.household_type)
    .entries(props.data);

  const HouseHoldSize = d3
    .nest()
    .key(d => d.HHsizemembers.replace(".", ","))
    .entries(props.data);

  const HouseHoldDebt = d3
    .nest()
    .key(d => d.debts_have)
    .entries(props.data);

  const totalIncome = d3
    .nest()
    .key(d => d.total_income.replace(".", ","))
    .entries(props.data);

  const totalOffFarmIncome = d3
    .nest()
    .key(d => d.offfarm_income.replace(".", ","))
    .entries(props.data);

  const totalFarmIncome = d3
    .nest()
    .key(d => d.farm_income.replace(".", ","))
    .entries(props.data);

  const cropProduceValue = d3
    .nest()
    .key(d => d.valuecropproduce.replace(".", ","))
    .entries(props.data);

  const cropfarmValue = d3
    .nest()
    .key(d => d.valuefarmproduce.replace(".", ","))
    .entries(props.data);

  const CultivatedLand = d3
    .nest()
    .key(d => d.landcultivated)
    .entries(props.data);
  const OwnedLand = d3
    .nest()
    .key(d => d.landowned)
    .entries(props.data);

  function numberWithCommas(x) {
    return x
      .toString()
      .replace(".", ",")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  const totalNumber = d3.sum(totalIncome, d => Number(d.key));
  const totalFarm = d3.sum(totalFarmIncome, d => Number(d.key));
  const totalOffFarm = d3.sum(totalOffFarmIncome, d => Number(d.key));
  const totalCropProduceValue = d3.sum(cropProduceValue, d => Number(d.key));
  const totalFarmProduceValue = d3.sum(cropfarmValue, d => d.key);

  console.log(totalFarmProduceValue / props.data.length);

  const StandardHouseSize = d3.deviation(HouseHoldSize, d => Number(d.key));
  const MinMaxHouseSize = d3.extent(HouseHoldSize, d => Number(d.key));
  const TotalHouseSize = d3.sum(HouseHoldSize, d => Number(d.key));

  const totalCultivatedLand = d3.sum(
    CultivatedLand,
    d => Number(d.key) * Number(d.values.length)
  );
  const totalOwnedLand = d3.sum(
    OwnedLand,
    d => Number(d.key) * Number(d.values.length)
  );

  const HouseHoldTypes = HouseHoldTypeData.map(household => ({
    key: household.key.replace("_", " "),
    size: household.values.length
  }));

  console.log(props.data);
  console.log(numberWithCommas(totalCropProduceValue / props.data.length));

  return (
    <Grid className={"data-overview "}>
      {HouseHoldDebt.map(debt => (
        <li key={debt.key}>
          {debt.key}: {debt.values.length} in percentage:{" "}
          {((debt.values.length / props.data.length) * 100).toFixed(2)}%
        </li>
      ))}
      <Text>standard deviation:</Text>
      {StandardHouseSize.toFixed(1)}
      <Text>
        Minimale huishoud grote: {MinMaxHouseSize[0]}, maximale huishoud grote:{" "}
        {MinMaxHouseSize[1]}{" "}
      </Text>
      <Text>household types: </Text>
      <HouseHoldBar data={HouseHoldTypes} />
      {HouseHoldTypes
        ? HouseHoldTypes.map(type => (
            <li key={type.key}>
              <strong>{type.key}</strong>
              <p>{type.size}</p>
            </li>
          ))
        : ""}
      <Text>Totaal per capita:</Text>{" "}
      {numberWithCommas((totalNumber / props.data.length).toFixed(1))}
      <Text>farm income per capita:</Text>{" "}
      {numberWithCommas((totalFarm / props.data.length).toFixed(1))}
      <Text>off farm income per capita:</Text>{" "}
      {numberWithCommas((totalOffFarm / props.data.length).toFixed(1))}
      <Text>Crops produced per capita:</Text>{" "}
      {numberWithCommas((totalCropProduceValue / props.data.length).toFixed(1))}
      <Text>Farm production per capita: </Text>{" "}
      {numberWithCommas((totalFarmProduceValue / props.data.length).toFixed(1))}
      <Text>Land</Text>
      <TwoColumnGrid>
        <div>
          <RoundDisplay>{totalCultivatedLand.toFixed(2)} ha</RoundDisplay>
          <p>Cultivated</p>
        </div>
        <div>
          <RoundDisplay>{totalOwnedLand.toFixed(2)} ha</RoundDisplay>
          <p>Owned</p>
        </div>
      </TwoColumnGrid>
    </Grid>
  );
}
