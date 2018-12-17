import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Nav = styled.nav`
  justify-content: center;
`;
const NavItems = styled.ul`
  display: flex;
`;
const NavItem = styled.li`
  color: #fff;
  font-size: 1em;
  list-style-type: none;
  padding: 15px;
  text-decoration: none;
`;

export default function Navigation() {
  return (
    <Nav>
      <NavItems>
        <NavLink to="/">
          <NavItem>Home</NavItem>
        </NavLink>
        <NavLink to="/advice">
          <NavItem>Advice</NavItem>
        </NavLink>
        <NavLink to="/proces">
          <NavItem>Proces</NavItem>
        </NavLink>
      </NavItems>
    </Nav>
  );
}
