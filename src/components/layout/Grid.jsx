import React from "react";
import styled from "styled-components";

const GridBlock = styled.div`
  width: 60em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
`;

export default function Grid(props) {
  return <GridBlock>{props.children}</GridBlock>;
}
