import React from "react";
import styled from "styled-components";

const Grid = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 2em;
  min-height: 90vh;
`;

export default function HomeGrid(props) {
  return <Grid>{props.children}</Grid>;
}
