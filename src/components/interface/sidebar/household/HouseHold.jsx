import React from "react";
import * as d3 from "d3";
import styled from "styled-components";
import themeConfig from "../../../../theme/themeConfig";
import BarchartHorizontal from "../charts/BarchartHorizontal";
import LineChart from "../charts/LineChart";

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  color: #3a3a3a;
`;
const Text = styled.h4`
  font-size: 1.25em;
  padding-top: 2em;
  font-weight: 700;
  font-family: ${themeConfig.font.title};
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
  width: 60%;
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
  const TotalHouseSize = HouseHoldSize.map(d => ({
    key: d.key,
    percentage: d.values.length
  }));
  const CalculatedTotalHouseSize = d3.sum(
    TotalHouseSize,
    d => parseInt(d.key) * d.percentage
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

      <Text> Household type(amount)</Text>
      <BarchartHorizontal data={HouseHoldTypes} />
      <Text>Household size (amount)</Text>
      <LineChart data={TotalHouseSize} number={false} />

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
