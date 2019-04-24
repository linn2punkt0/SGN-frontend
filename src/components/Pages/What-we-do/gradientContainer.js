import React from "react";
import styled from "styled-components";



const StyledGradientContainer = styled.div`
  /* background-color: ${props => props.background}; */
  width: 50%;
  height: 100vh;

  &.gradient::after {
    /* background: ${props => props.shadow}; */
    background: ${props => `linear-gradient(180deg, rgba(0,0,0,0), ${props.color} 100%)`};
    display: block;
    /* position: absolute; */
    position: relative;
    width: 100%;
    height: 100vh;
    content: "";
  } 

  /*     background: ${props => `linear-gradient(180deg, rgba(${props.color},0), rgba(${props.color},0.85))`};  */
  /* linear-gradient(180deg, rgba(241, 165, 6, 0.1) 31.25%, #F9AD0E 86.46%) */
  background-image: url(${props => props.img});
  background-position: center;
  background-size: cover;
  width: 50%;
  z-index: 99;
  >
  img{
    z-index: 1;

    object-fit: cover;
    object-position: 50% 50%;
    width: 100%;
    height: 100%;
  }


    @media (min-width: 320px) and (max-width: 767px) {
    height: 100vh;
    width: 100%;
    position: relative;
  }
`;

const ImageContainer = props => {

  console.log(props)


  return <StyledGradientContainer className="gradient" background={props.background} color={props.color} img={props.image} />;

}
export default ImageContainer;

