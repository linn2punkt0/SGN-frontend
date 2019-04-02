import React from "react";
import styled from "styled-components";

const StyledImageContainer = styled.div`
  background-color: ${props => props.background};
`;

const ImageContainer = props => {
  return <StyledImageContainer background={props.background} />;
};

export default ImageContainer;
