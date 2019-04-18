import React from "react";
import styled from "styled-components";
import Header from "../../components/Pages/Contact/Header";

const StyledPageHeaderText = styled.div`
  /* Desktop styling done */
  width: 50%;
  margin-bottom: 53px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  > * {
    padding-left: 82px;
  }

  h5 {
    margin: 0;
    font-style: normal;
    font-weight: normal;
    font-size: 3vh;
    color: rgba(113, 113, 113, 0.7);
  }
  h1 {
    max-width: 634px;
    margin: 0 0 1.5vh 0;
    font-weight: 300;
    font-size: 8vh;
  }
  p {
    font-weight: 300;
    max-width: 634px;
  }
  a {
    /* width: 634px;
    height: 36px; */
    font-weight: 500;
    font-size: 24px;
    color: #1f1f1f;
    text-decoration: none;
    font-size: 3vh;
    max-width: 634px;
    margin: 0 0 1vh 0;
  }
  h4 {
    font-weight: 500;
    font-size: 3vh;
    color: #1f1f1f;
    text-decoration: underline;
  }
`;
const PageHeaderText = props => {
  return (
    <StyledPageHeaderText>
      <Header />
      <div>
        <h5>{props.content ? props.content.tagline : "Tagline"}</h5>
        <h1>{props.content ? props.content.title : "Title"}</h1>

        <p>{props.content ? props.content.descriptions : "Description"}</p>
        <h4>{props.content ? props.content.scroll : "Scroll down"}</h4>
      </div>
    </StyledPageHeaderText>
  );
};

export default PageHeaderText;
