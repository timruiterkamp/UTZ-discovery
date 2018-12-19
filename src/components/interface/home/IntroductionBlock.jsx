import React from "react";
import styled from "styled-components";
import themeConfig from "../../../theme/themeConfig";

const Introduction = styled.section`
  width: 100%;
  height: 50vh;
  background-color: #b4bcd6;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 50px;
`;
const IntroductionTitel = styled.h1`
  font-size: 3.5em;
  color: ${themeConfig.color.text.title};
  font-family: "karla", sans-serif;
  font-weight: 700;
  width: 400px;
  margin: 0;
`;
const IntroductionSubTitel = styled.h3`
  font-size: 2em;
  color: ${themeConfig.color.text.title};
  font-family: "rubik", sans-serif;
  font-weight: 700;
  width: 400px;
`;
export default function IntroductionBlock() {
  return (
    <Introduction>
      <IntroductionTitel>Rhomis Data map</IntroductionTitel>
      <IntroductionSubTitel>Insights and more</IntroductionSubTitel>
    </Introduction>
  );
}
