import React from "react";
import styled from "styled-components";

const StyledImageContainer = styled.div`
  background-color: ${props => props.background};
  &.gradient::after {
    /* background: ${props => props.shadow}; */
    /* background: linear-gradient(180deg, rgba(39, 3, 187, 0.08) 47.4%, #2703BB 87.5%); */
    display: block;
    /* position: absolute; */
    position: relative;
    width: 100%;
    height: 100vh;
    content: "";
  } 

  width: 50%;

  img{
    z-index: -1;
    object-fit: cover;
    object-position: 50% 50%;
    width: 100%;
    height: 100%;
  border: none;
  outline: none;
  }
    @media (min-width: 320px) and (max-width: 767px) {
    height: 50vh;
    width: 100%;
  }
`;

const ImageContainer = props => {
  console.log(props)
  return <StyledImageContainer className="gradient" background={props.background}>

 <img class="gradientImg" shadow={props.shadowImg} src={props.imageProject || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="}alt="" />
  
  </StyledImageContainer>
};

export default ImageContainer;
