import React from "react";
import * as d3 from "d3";
import styled from "styled-components";
import HouseHoldBar from "./HouseHoldBar";
import themeConfig from "../../../../theme/themeConfig";
import DebtBar from "./DebtBar";
import BarchartHorizontal from "../charts/BarchartHorizontal";
import LineChart from "../charts/LineChart";

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

  const CultivatedLand = d3
    .nest()
    .key(d => d.landcultivated)
    .entries(props.data);
  const OwnedLand = d3
    .nest()
    .key(d => d.landowned)
    .entries(props.data);

  const totalNumber = d3.sum(totalIncome, d => parseInt(d.key));
  const totalFarm = d3.sum(totalFarmIncome, d => parseInt(d.key));
  const totalOffFarm = d3.sum(totalOffFarmIncome, d => parseInt(d.key));
  const StandardHouseSize = d3.deviation(HouseHoldSize, d => parseInt(d.key));
  const MinMaxHouseSize = d3.extent(HouseHoldSize, d => parseInt(d.key));
  const TotalHouseSize = HouseHoldSize.map(d => ({
    key: d.key,
    size: d.values.length
  }));
  const CalculatedTotalHouseSize = d3.sum(
    TotalHouseSize,
    d => parseInt(d.key) * d.size
  );
  const totalCultivatedLand = d3.sum(
    CultivatedLand,
    d => parseInt(d.key) * parseInt(d.values.length)
  );
  const totalOwnedLand = d3.sum(
    OwnedLand,
    d => parseInt(d.key) * parseInt(d.values.length)
  );
  const HouseHoldTypes = HouseHoldTypeData.map(household => ({
    key: household.key.replace("_", " "),
    percentage: household.values.length
  }));
  const HouseHoldDebtPercentage = HouseHoldDebt.map(household => ({
    key: household.key.replace("_", " "),
    percentage: household.values.length
  }));
  const cropProduceValue = d3
    .nest()
    .key(d => d.valuecropproduce.replace(".", ","))
    .entries(props.data);

  const totalCropProduceValue = d3.sum(cropProduceValue, d => parseInt(d.key));

  const profitPerPerson = [
    { key: "farm", percentage: totalFarm / CalculatedTotalHouseSize },
    { key: "Offarm", percentage: totalOffFarm / CalculatedTotalHouseSize },
    {
      key: "value produce",
      percentage: totalCropProduceValue / CalculatedTotalHouseSize
    }
  ];

  const filteredTotalNumber = parseInt(
    (totalNumber / CalculatedTotalHouseSize).toString().replace(".", ",")
  ).toFixed(0);

  // console.log(
  //   filteredTotalNumber,
  //   totalNumber,
  //   totalNumber / CalculatedTotalHouseSize,
  //   CalculatedTotalHouseSize
  // );
  return (
    <Grid className={"data-overview "}>
      <Text>Income per capita: ${filteredTotalNumber}</Text>
      <BarchartHorizontal
        data={profitPerPerson}
        prefix={"$"}
        axisFormat="money"
      />
      <Text>Debts (yes, no or not available)</Text>
      <BarchartHorizontal data={HouseHoldDebtPercentage} />

      <Text> Household (amount)</Text>
      <BarchartHorizontal data={HouseHoldTypes} />
      <Text>Household size (amount)</Text>
      <LineChart data={HouseHoldTypes} number={false} />

      <Text>Land (hectare)</Text>
      <TwoColumnGrid>
        <div>
          <RoundDisplay>{totalCultivatedLand} ha</RoundDisplay>
          <p>Cultivated</p>
        </div>
        <div>
          <RoundDisplay>{totalOwnedLand} ha</RoundDisplay>
          <p>Owned</p>
        </div>
      </TwoColumnGrid>
    </Grid>
  );
}
