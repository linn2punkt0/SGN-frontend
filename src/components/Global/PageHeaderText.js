import React from "react";
import styled from "styled-components";

const StyledPageHeaderText = styled.div`
margin-bottom: 5vw;
  margin-left: 5vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
/* position: relative; */
  
  h5 {
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
  }
  h1 {
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
  h4 {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
  }
`;

const PageHeaderText = props => {
  return (
    <StyledPageHeaderText>
      <h5>Fighting hopelessness, alienation and apathy</h5>
      <h1>{props.title}</h1>
      <p>We’ ve taken action against hopelessness by empowering and encouraging asylum seekers, refugees, immigrants, migrants and new countrymen.
      </p>
      <a href="">
        <h4>Discover</h4>
      </a>
    </StyledPageHeaderText>
  );
};

export default PageHeaderText;
