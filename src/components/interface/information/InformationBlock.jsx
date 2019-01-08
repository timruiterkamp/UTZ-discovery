import React, { Fragment } from "react";
import styled from "styled-components";
import themeConfig from "../../../theme/themeConfig";
import NormalizeButton from "../button/NormalizeButton";
import BackButton from "../button/BackButton";

const Grid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const TextBlock = styled.div`
  max-width: 360px;
  margin: 4em auto 0;
  /* position: relative; */
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 2em;
  font-family: ${themeConfig.font.title};
  color: ${themeConfig.color.white};
  padding-bottom: 1.75em;
  text-transform: capitalize;
  margin: 0;
`;

const Text = styled.p`
  font-size: 1em;
  font-family: ${themeConfig.font.text};
  color: ${themeConfig.color.white};
  padding-bottom: 2.25em;
  margin: 0;
  line-height: 1.5;
`;

const ThemeImage = styled.img`
  position: absolute;
  bottom: 0;
  left: 10%;
  transform: translateX(-15%);
  width: 25%;
  height: auto;
`;

const ImageContainer = styled.img`
  width: 100%;
  height: 100vh;
`;
export default function InformationBlock() {
  return (
    <Fragment>
      <BackButton />

      <Grid>
        <TextBlock>
          <Title>About Rhomis</Title>
          <Text>
            UTZ is a program and a label for sustainable farming. {""}
            <br />
            <br />
            The Code of Conduct sets out the requirements that are at the heart
            of the UTZ program, covering better farming methods and working
            conditions as well as better care for nature and next generations.
            This contributes to producers growing better crops and generating a
            better income, which increases their social and economic resilience
            while safeguarding the earth’s natural resources for the future.{" "}
          </Text>
          <NormalizeButton link="/" label={"Rhomis Dataset"} />
          <ThemeImage src="/img/tree.svg" />
        </TextBlock>
        <ImageContainer src="/img/better-care.png" />
      </Grid>
    </Fragment>
  );
}
