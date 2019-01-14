import React from "react";
import styled from "styled-components";
import themeConfig from "../../../theme/themeConfig";
import { Link } from "react-router-dom";

const Button = styled.button`
  width: auto;
  padding: 0.5em 1em;
  background-color: ${themeConfig.color.primary};
  border-radius: 20.5px;
  border: 0;
  font-size: 1em;
  font-family: ${themeConfig.font.text};
  color: ${themeConfig.color.grey};
  cursor: pointer;
  transition: 0.3s ease-in-out;

  :hover {
    background-color: ${themeConfig.color.secondary};
    color: ${themeConfig.color.white};
  }
`;
export default function NormalizeButton(props) {
  return (
    <Link to={props.link ? props.link : ""}>
      <Button>{props.label}</Button>
    </Link>
  );
}
