import React from "react";
import styled from "styled-components";

const GridBlock = styled.div`
  max-width: 60em;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export default function Grid() {
  console.log(this.props);
  return <GridBlock>{this.props.children}</GridBlock>;
}
