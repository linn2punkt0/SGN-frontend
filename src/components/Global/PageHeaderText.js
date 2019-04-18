import React from "react";
import styled from "styled-components";

const StyledPageHeaderText = styled.div`
  /* Desktop styling done */
  width: 50%;
  margin-bottom: 53px;
  /* padding-left: 82px;  */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
 >  *{
   padding-left: 82px;  }
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
  }
  a {
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

    @media (min-width: 320px) and (max-width: 767px) {
     height: 50vh;
     width: 100%;
}

`
const PageHeaderText = props => {
  console.log(props.content);
  return (
    <StyledPageHeaderText>

      <h5>{props.content ? props.content.tagline : "Tagline"}</h5>
      <h1>{props.content ? props.content.title : "Title"}</h1>
 
      <p>{props.content ? props.content.descriptions : "Description"}</p>
      <h4>{props.content ? props.content.scroll : "Scroll down"}</h4>
    </StyledPageHeaderText>
  );
};

export default PageHeaderText;
