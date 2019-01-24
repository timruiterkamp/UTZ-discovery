import React from "react";
import styled from "styled-components";
import themeConfig from "../../theme/themeConfig";
const Select = styled.select`
  width: 150px;
  display: block;
  margin-top: 2em;
  padding: 7px 11px;
  font-size: 16px;
  height: 34px;
  border: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  font-family: ${themeConfig.font.text};
  font-size: 1em;
  background: url("https://static.thenounproject.com/png/10897-200.png") 96% /
    15% no-repeat ${themeConfig.color.primary};
`;
export default function SelectionBox(props) {
  return (
    <Select value={props.value} onChange={props.handleChange}>
      {props.options.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </Select>
  );
}
