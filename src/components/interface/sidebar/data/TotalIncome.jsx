import React from "react";
import * as d3 from "d3";
import styled from "styled-components";

const TotalNumberContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #3a3a3a;
`;
export default function TotalIncome(props) {
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

  const produceValue = d3
    .nest()
    .key(d => console.log(d))
    .entries(props.data);

  const totalNumber = d3.sum(totalIncome, d => Number(d.key));
  const totalFarm = d3.sum(totalFarmIncome, d => Number(d.key));
  const totalOffFarm = d3.sum(totalOffFarmIncome, d => Number(d.key));
  const totaleProduceValue = d3.sum(produceValue, d => Number(d.key));

  return (
    <TotalNumberContainer>
      Totaal:{totalNumber} farm: {totalFarm} off farm: {totalOffFarm}{" "}
      {totaleProduceValue}
    </TotalNumberContainer>
  );
}
