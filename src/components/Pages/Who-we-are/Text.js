import React from "react";
import styled from "styled-components";

const StyledText = styled.div`
  /* Desktop styling done */
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  > * {
    padding-left: 82px;
  }
  h1 {
    font-weight: 300;
    font-size: 36px;
    line-height: normal;

    color: rgba(31, 31, 31, 0.45);
  }
  p {
    max-width: 474px;
    font-size: 24px;
    font-weight: 300;
    font-size: 24px;
    color: #1f1f1f;
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
