import React from "react";
import styled from "styled-components";

const Column = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

export default function LeftColumn(props) {
  return <Column>{props.children}</Column>;
}
