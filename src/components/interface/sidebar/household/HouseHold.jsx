import React from "react";
import * as d3 from "d3";
import styled from "styled-components";
import HouseHoldBar from "./HouseHoldBar";

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

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const totalNumber = d3.sum(totalIncome, d => Number(d.key));
  const totalFarm = d3.sum(totalFarmIncome, d => Number(d.key));
  const totalOffFarm = d3.sum(totalOffFarmIncome, d => Number(d.key));
  const totalCropProduceValue = d3.sum(cropProduceValue, d => Number(d.key));
  const totalFarmProduceValue = d3.sum(cropfarmValue, d => Number(d.key));

  const StandardHouseSize = d3.deviation(HouseHoldSize, d => Number(d.key));
  const MinMaxHouseSize = d3.extent(HouseHoldSize, d => Number(d.key));
  const TotalHouseSize = d3.sum(HouseHoldSize, d => Number(d.key));

  const HouseHoldTypes = HouseHoldTypeData.map(household => ({
    key: household.key.replace("_", " "),
    size: household.values.length
  }));

  return (
    <Grid className={"data-overview"}>
      {HouseHoldDebt.map(debt => (
        <li key={debt.key}>
          {debt.key}: {debt.values.length}
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
      {numberWithCommas((totalNumber / TotalHouseSize).toFixed(1))}
      <Text>farm income per capita:</Text>{" "}
      {numberWithCommas((totalFarm / TotalHouseSize).toFixed(1))}
      <Text>off farm income per capita:</Text>{" "}
      {numberWithCommas((totalOffFarm / TotalHouseSize).toFixed(1))}
      <Text>Crops produced per capita:</Text>{" "}
      {numberWithCommas((totalCropProduceValue / TotalHouseSize).toFixed(1))}
      <Text>Farm production per capita: </Text>{" "}
      {numberWithCommas((totalFarmProduceValue / TotalHouseSize).toFixed(1))}
    </Grid>
  );
}
