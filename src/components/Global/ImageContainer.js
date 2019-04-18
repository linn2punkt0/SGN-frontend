import React from "react";
import styled from "styled-components";

const StyledImageContainer = styled.div`
  background-color: ${props => props.background};
  width: 50%;

`;

const ImageContainer = props => {
  return <StyledImageContainer background={props.background} />;
};

export default ImageContainer;
