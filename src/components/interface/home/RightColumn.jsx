import React from "react";
import styled from "styled-components";

const Column = styled.div`
  display: grid;
  grid-template-rows: 28% auto;
  grid-gap: 2em;
`;

export default function RightColumn(props) {
  return <Column>{props.children}</Column>;
}
