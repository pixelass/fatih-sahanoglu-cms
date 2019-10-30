import React from "react";
import styled from "styled-components";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import TransitionLink from "gatsby-plugin-transition-link";
import Logo from "./logo";

const Nav = styled.nav`
  position: sticky;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  overflow: hidden;
  height: 3rem;
  color: #000;
  display: flex;
`;

const Link = styled(AniLink).attrs({
  duration: 1,
  cover: true,
  top: "exit",
  direction: "up",
  bg: "white"
})`
  color: currentColor;
  text-decoration: none;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }
`;

const SmallLogo = styled(Logo)`
  height: 3rem;
  width: auto;
`;


const Navbar = () => (
  <Nav role="navigation" aria-label="main-navigation">
    <Link to="/"><SmallLogo/></Link>
    <Link to="/about">About</Link>
    <Link to="/products">Products</Link>
    <Link to="/blog">Blog</Link>
    <Link to="/gallery">Gallery</Link>
    <Link to="/contact">Contact</Link>
  </Nav>
);

export default Navbar;
