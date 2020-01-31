import React from "react";
import styled from "styled-components";
import themeConfig from "../../../theme/themeConfig";

const Title = styled.h1`
  font-size: 2em;
  color: ${themeConfig.color.grey};
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${themeConfig.color.primary};
  padding: 0.8em 1em;
  z-index: 1000;
  margin: 0;
  animation: 1s fadeIn forwards;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default function CountryTitle(props) {
  return <Title>{props.data}</Title>;
}
