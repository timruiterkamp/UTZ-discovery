import React from "react";
import styled from "styled-components";
import themeConfig from "../../../theme/themeConfig";

const IntroductionBlock = styled.section`
  position: absolute;
  top: 0;
  right: 0;
  width: 25vw;
  background-color: white;
  z-index: 50;
  height: 100vh;
  padding: 4em;
`;

const IntroductionHeading = styled.h2`
  font-family: "Rubik", sans-serif;
  color: ${themeConfig.color.text.main};
`;

export default function CodeOfConduct() {
  return (
    <IntroductionBlock>
      <IntroductionHeading>Code of conduct</IntroductionHeading>
      <p>
        UTZ is a program and a label for sustainable farming. The Code of
        Conduct sets out the requirements that are at the heart of the UTZ
        program, covering better farming methods and working conditions as well
        as better care for nature and next generations. This contributes to
        producers growing better crops and generating a better income, which
        increases their social and economic resilience while safeguarding the
        earth’s natural resources for the future.{" "}
      </p>
    </IntroductionBlock>
  );
}
