import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-weight: 300;
  font-size: 16px;
  a {
    color: #1f1f1f;
    text-decoration: none;
  }
`;

const Footer = props => {
  return (
    <StyledFooter>
      <a href="">Facebook</a>
      <a href="">Twitter</a>
      <a href="">Instagram</a>
      <p>insert language selector here</p>
      <p>Email</p>
      <p>Phone number</p>
    </StyledFooter>
  );
};

export default Footer;
