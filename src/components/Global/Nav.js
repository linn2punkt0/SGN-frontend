import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

const StyledNav = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    padding: 2em;
`;

const Nav = props => {
  return (
    <StyledNav>
      <Link to="/">Home</Link>
      <Link to="/get-involved">Get involved</Link>
      <Link to="/who-we-are">Who we are</Link>
      <Link to="/what-we-do">What we do</Link>
      <Link to="/get-involved">Membership</Link>
      {/* Länka till botten av Get involved */}
      <Link to="/">Donations</Link>
      {/* Länka till botten av Home */}
      <Link to="/news">News</Link>
      <Link to="/contact">Contact</Link>
    </StyledNav>
  );
};

export default Nav;
