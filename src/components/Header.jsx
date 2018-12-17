import React from "react";
import Grid from "./Grid";
import styled from "styled-components";

const HeaderBlock = styled.header`
  background-color: #282c34;
  min-height: 5vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: calc(10px + 2vmin);
  color: white;
  align-items: center;
`;

const Nav = styled.nav`
  justify-content: center;
  max-width: 60em;
`;
const NavItems = styled.ul`
  display: flex;
`;
const NavItem = styled.li`
  color: #fff;
  font-size: 1.25em;
  list-style-type: none;
  padding: 15px;
`;

const Title = styled.h1`
  font-size: 2em;
  color: #fff;
`;

export default function Header() {
  return (
    <HeaderBlock className="App-header">
      {/* <Grid> */}
      <Title>UTZ Discovery</Title>
      <Nav>
        <NavItems>
          <NavItem>Home</NavItem>
          <NavItem>Advies</NavItem>
        </NavItems>
      </Nav>
      {/* </Grid> */}
    </HeaderBlock>
  );
}
