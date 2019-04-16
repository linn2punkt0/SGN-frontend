import React from "react";
import styled from "styled-components";

const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1,
  h2,
  p {
    font-weight: 300;
  }
  h1 {
    font-size: 64px;
  }
  p {
    font-size: 24px;
  }
  h2 {
    color: #9b9b9b;
    font-size: 24px;
    margin: 0;
  }
`;

const Text = props => {
  return (
    <StyledText>
      <h1>{props.content ? props.content.title : "Title"}</h1>
      <p>{props.content ? props.content.description : "Description"}</p>
    </StyledText>
  );
};

export default Text;
