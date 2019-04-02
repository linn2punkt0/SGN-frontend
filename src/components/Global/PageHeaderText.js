import React from "react";
import styled from "styled-components";

const StyledPageHeaderText = styled.div`
  margin-left: 82px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2 {
    width: 634px;
    height: 94px;
    margin: 0 0 12px 0;
    font-weight: 300;
    font-size: 64px;
  }
  p {
    font-weight: 300;
    font-size: 24px;
    width: 634px;
    /* height: 106px; */
    margin: 0 0 23px 0;
  }
  a {
    width: 634px;
    height: 36px;
    font-weight: 500;
    font-size: 24px;
    color: #1f1f1f;
    text-decoration: none;
  }
`;

const PageHeaderText = props => {
  return (
    <StyledPageHeaderText>
      <h2>Title</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <a href="">Länk</a>
    </StyledPageHeaderText>
  );
};

export default PageHeaderText;
