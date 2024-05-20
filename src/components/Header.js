// src/components/Header.js
import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: white;
  color: black;
  

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const NavLink = styled.a`
  margin: 0 1rem;
  color: black;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const LogoContainer = styled.div`
  width: 209px;
  height: 69.67px;
  background: url("/logo.png") no-repeat center;
  background-size: cover;
  margin: 0 1rem;
  margin-left: 650px;
`;


const Header = () => (
  <Nav>
    <div style={{ display: "flex", alignItems: "center" }}>
      <NavLink href="#">Track Your Order</NavLink>
      <LogoContainer />
    </div>
    <div>
      <NavLink href="#">Home</NavLink>
      <NavLink href="#">Service</NavLink>
      <NavLink href="#">About Us</NavLink>
      <NavLink href="#">Login</NavLink>
    </div>
  </Nav>
);

export default Header;
