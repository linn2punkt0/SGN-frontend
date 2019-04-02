import React from "react";
import styled from "styled-components";

const StyledProjectText = styled.div`
  left: 82px;
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
    width: 634px;
    height: 36px;
    font-weight: 500;
    font-size: 24px;
    color: #1f1f1f;
    text-decoration: none;
  }
`;

const ProjectText = props => {
  return (
    <StyledProjectText>
      <h4>Title</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <a href="">Link to project</a>
    </StyledProjectText>
  );
};

export default ProjectText;
