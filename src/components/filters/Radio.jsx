import React from "react";
import styled from "styled-components";
import themeConfig from "../../theme/themeConfig";

const RadioContainer = styled.label`
  position: relative;
  width: 50%;
  input[type="radio"] {
    display: none;
    /*removes original button*/
  }

  :before {
    /*styles outer circle*/
    content: " ";
    display: inline-block;
    position: relative;
    /* top: 5px; */
    margin: 0 10px 0 0;
    width: 20px;
    top: 7px;
    height: 20px;
    border-radius: 11px;
    border: 2px solid ${themeConfig.color.primary};
    background-color: transparent;
  }

  input[type="radio"]:checked + span {
    /*styles inside circle*/
    border-radius: 11px;
    width: 12px;
    height: 12px;
    position: absolute;
    top: 1px;
    left: 6px;
    display: block;
    background-color: blue;
  }
`;

export default function Radio(props) {
  return (
    <RadioContainer>
      <input
        value={props.name}
        type="radio"
        checked={props.checked}
        onChange={props.handleChange}
      />
      {props.name}
    </RadioContainer>
  );
}
