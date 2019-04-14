import React from "react";
import styled from "styled-components";

const StyledPageHeaderText = styled.div`
  margin-left: 82px;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  console.log(props.content);
  return (
    <StyledPageHeaderText>
      <h5>{props.content.tagline}</h5>
      <h1>{props.content.title}</h1>
      <p>{props.content.descriptions}</p>
      <a href="">
        <h4>{props.content.scroll}</h4>
      </a>
    </StyledPageHeaderText>
  );
};

export default PageHeaderText;
