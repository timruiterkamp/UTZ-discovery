import React from "react";
import styled from "styled-components";
import themeConfig from "../../../theme/themeConfig";
import { Link } from "react-router-dom";

const Button = styled.button`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  padding: 0.5em 1em;
  background-color: ${themeConfig.color.primary};
  border: 0;
  font-size: 1em;
  font-family: ${themeConfig.font.text};
  color: ${themeConfig.color.grey};
  cursor: pointer;
  transition: 0.3s ease-in-out;
  font-weight: bold;

  position: absolute;
  top: -95px;
  left: -95px;

  :hover {
    background-color: ${themeConfig.color.secondary};
    color: ${themeConfig.color.white};
  }
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: row;
  width: 65px;
  margin-left: 85px;
  margin-top: 70px;
`;

const ArrowBack = styled.img`
  width: 100%;
  height: 13px;
  margin-top: 4px;
`;

export default function BackButton(props) {
  return (
    <Link to="/">
      <Button>
        <TextBlock>
          <ArrowBack src="/img/arrow-back.svg" />
          Back
        </TextBlock>
      </Button>
    </Link>
  );
}
