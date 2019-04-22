import React from "react";
import styled from "styled-components";
import Hands from "./images/landing/get-involved_landing-page_illustration.png";

const StyledImageContainer = styled.div`
  background-color: ${props => props.background};
  background-image: url(${props => props.img});
  background-position: center;
  background-size: cover;
  width: 50%;
  @media (min-width: 320px) and (max-width: 767px) {
    height: 50vh;
    width: 100%;
  }
`;

const ImageContainer = props => {
  return <StyledImageContainer background={props.background} img={props.img} />;
};

export default ImageContainer;
