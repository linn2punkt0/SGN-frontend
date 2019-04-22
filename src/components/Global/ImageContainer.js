import React from "react";
import styled from "styled-components";

const StyledImageContainer = styled.div`
  background: url(${props => props.background});
  background-position: center;
  background-size: cover;
  width: 50%;
  @media (min-width: 320px) and (max-width: 767px) {
    height: 50vh;
    width: 100%;
  }
`;

const ImageContainer = props => {
  return <StyledImageContainer background={props.background} />;
};

export default ImageContainer;
