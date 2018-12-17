import React from "react";
import Grid from "./Grid";
import styled from "styled-components";
import Navigation from "./Nav";

const HeaderBlock = styled.header`
  background-color: #282c34;
  height: 75px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: white;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2em;
  color: #fff;
`;

export default function Header() {
  return (
    <HeaderBlock className="App-header">
      <Grid>
        <Title>UTZ Discovery</Title>
        <Navigation />
      </Grid>
    </HeaderBlock>
  );
}
