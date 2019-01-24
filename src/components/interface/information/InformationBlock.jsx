import React, { Fragment } from "react";
import styled from "styled-components";
import themeConfig from "../../../theme/themeConfig";
import NormalizeButton from "../button/NormalizeButton";
import BackButton from "../button/BackButton";

const Grid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: white;
`;

const TextBlock = styled.div`
  max-width: 33vw;
  margin: 4em auto 0;
  padding: 4em;
  /* position: relative; */
  height: 100vh;

  ul {
    list-style-type: none;
  }
`;

const Title = styled.h1`
  font-size: 2em;
  font-family: ${themeConfig.font.title};
  color: ${themeConfig.color.secondary};
  padding-bottom: 1.5em;
  text-transform: capitalize;
  margin: 0;
`;

const Text = styled.p`
  font-size: 1em;
  font-family: ${themeConfig.font.text};
  color: ${themeConfig.color.secondary};
  padding-bottom: 2.25em;
  margin: 0;
  line-height: 1.5;

  &.smalltext {
    max-width: 300px;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  li {
    margin: 1em 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: inherit;
    flex-wrap: wrap;

    h5 {
      font-size: 1.35em;
      font-weight: bold;
    }

    img {
      margin-right: 2em;
      width: 40px;
      height: 40px;
      background-color: ${themeConfig.color.primary};
      border-radius: 50%;
      padding: 1em;
      object-fit: scale-down;
    }
  }
`;

const Banner = styled.div`
  width: 100%;
  height: auto;
  padding: 1em;
  margin: 1em 0;
  display: flex;
  color: ${themeConfig.color.secondary};
  background-color: #f1f1f1;
  border-radius: 8px;
  display: grid;
  grid-template-columns: 0.2fr 1fr;
  align-items: center;
`;

const Image = styled.div`
  width: 35px;
  height: 35px;
  margin: 1em;
  border: 1px solid black;
  border-radius: 50%;
  padding: 0.7em;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 20px;
    width: 20px;
  }
`;
export default function InformationBlock() {
  return (
    <Fragment>
      <BackButton />

      <Grid>
        <TextBlock>
          <Title>Introduction Rhomis</Title>
          <Text>
            RHOMIS was designed to improve the process of gathering information
            from farming households in the rural developing world. Household
            surveys are very widely carried out, but the data is rarely
            comparable, and so the opportunities for learning between individual
            projects are limited. For these reasons, the tool balances
            standardization with flexibility.
          </Text>
          <Title>Take into consideration</Title>
          <Banner>
            <Image>
              <img src="/img/information.svg" alt="information" />
            </Image>
            Interviews are not very trust worthy, people tend to have biases and
            they might have other interpretations about certain questions.
          </Banner>
          <Banner>
            <Image>
              <img src="/img/information.svg" alt="information" />
            </Image>
            Some lands do not contain regions because data was incomplete.
          </Banner>
          <Banner>
            <Image>
              <img src="/img/information.svg" alt="information" />
            </Image>
            There could be errors in converted data. For example land owned.
          </Banner>
        </TextBlock>
        <TextBlock>
          <Title>3 Categories</Title>
          <Text>
            This category is divided into three subsections. The first contains
            income per capita and debts. Secondly, household size and household
            type are included. Thirdly we included the land owned or rented data
            and the cultivation rate in hectares.
            <ul>
              <li>
                <img src="/img/household_icon.svg" alt="household" />{" "}
                <h5>Household</h5>
              </li>
              <li>
                <img src="/img/crops_icon.svg" alt="crops" /> <h5>Crops</h5>
              </li>
              <li>
                <img src="/img/poverty_icon.svg" alt="poverty" />{" "}
                <h5>Poverty</h5>
              </li>
            </ul>
          </Text>
        </TextBlock>
        <TextBlock>
          <Title>Normal distribution</Title>
          <img src="/img/normal-distribution.png" alt="normal distribution" />
          <Text className={"smalltext"}>
            To provide a complete and overall picture of the household size and
            PPI score we used the standard deviation formula.
          </Text>
          <Title>Key features</Title>
          <Text>
            <ul>
              <li>
                <img src="/img/filter.svg" alt="filter" /> <h5>Filter</h5>
                <Text className={"smalltext"}>
                  Use the main filter menu to filter the three categories to
                  your liking.
                </Text>
              </li>
              <li>
                <img src="/img/compare.svg" alt="compare" /> <h5>Compare</h5>
                <Text className={"smalltext"}>
                  Compare up to three countries or regions.
                </Text>
              </li>
            </ul>
          </Text>
        </TextBlock>
      </Grid>
    </Fragment>
  );
}
