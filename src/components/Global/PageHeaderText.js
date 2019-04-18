import React from "react";
import styled from "styled-components";

const StyledPageHeaderText = styled.div`
  margin-bottom: 5vw;
  margin-left: 5vw;
  display: flex;
  flex-direction: column;
  /* justify-content: flex-end; */
  width: 45vw;
  height: 100vh;
  background-color: yellow;
  h5 {
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
  }
  h1 {
    font-weight: 300;
    font-size: 64px;
  }
  p {
    font-weight: 300;
    font-size: 24px;
    width: 100%;
    height: 20%;
    background-color: red;
    /* margin: 0 0 23px 0; */
  }
  a {
    /* width: 634px;
    height: 36px; */
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

      <h5>{props.content ? props.content.tagline : "Tagline"}</h5>
      <h1>{props.content ? props.content.title : "Title"}</h1>
 
      <p>{props.content ? props.content.descriptions : "Description"}</p>
      <a href="">
        <h4>{props.content ? props.content.scroll : "Scroll down"}</h4>

      </a>
    </StyledPageHeaderText>
  );
};

export default PageHeaderText;
