import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import { Link } from "@reach/router";

const StyledContactUsFooter = styled.div`
  grid-column: 1/3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100vh;
  height: 94px;
  font-weight: 300;
  font-size: 64px;

  a {
    color: #1f1f1f;
    text-decoration: none;
  }
`;

const ContactUsFooter = props => {
  return (
    <StyledContactUsFooter>
      <Link to="/contact">Contact</Link>
      <Footer />
    </StyledContactUsFooter>
  );
};

export default ContactUsFooter;
