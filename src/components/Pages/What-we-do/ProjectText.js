import React from "react";
import styled from "styled-components";

const StyledProjectText = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 82px;
  h4 {
    width: 467px;
    height: 53px;
    font-weight: 300;
    font-size: 36px;
  }
  p {
    width: 307px;
    height: 397px;
    font-weight: 300;
    font-size: 24px;
  }
  a {
    height: 36px;
    font-weight: 500;
    font-size: 24px;
    color: #1f1f1f;
    text-decoration: none;
    background-color: ${props => props.color};
  }
`;

const ProjectText = props => {
  return (
    <StyledProjectText>
      <div>
        <h4>Title</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <h6>Small text with project start-date</h6>
      </div>
      <a href="">Link to project</a>
    </StyledProjectText>
  );
};

export default ProjectText;
