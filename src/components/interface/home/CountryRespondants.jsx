import React, { Component } from "react";
import styled from "styled-components";
import themeConfig from "../../../theme/themeConfig";

const Card = styled.div`
  width: 200px;
  height: 100px;
  background-color: white;
  font-family: ${themeConfig.font.text};
  font-size: 1em;
  position: absolute;
  z-index: 100;
  right: 37vw;
  bottom: 4vh;

  h5 {
    font-weight: bold;
    color: ${themeConfig.color.secondary};
    text-align: center;
  }
`;

const SubCard = styled.div`
  background-color: #d8d8d8;
  font-size: 1.25em;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${themeConfig.color.secondary};
`;

export default function CountryRespondants(props) {
  return (
    <Card>
      <h5>RHOMIS response</h5>
      <SubCard>{props.respondants}</SubCard>
    </Card>
  );
}
