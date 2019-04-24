import React from "react";
import styled from "styled-components";



const StyledGradientContainer = styled.div`
  background-color: ${props => props.background};
  width: 50%;
  height: 100vh;

  &.gradient::after {
    /* background: ${props => props.shadow}; */
    background: linear-gradient(180deg, rgba(39, 3, 187, 0.08) 47.4%, #2703BB 87.5%);
    display: block;
    /* position: absolute; */
    position: relative;
    width: 100%;
    height: 100vh;
    content: "";
  } 

  background-image: url(${props => props.img});
  background-position: center;
  background-size: cover;
  width: 50%;
  z-index: 99;
/* position: relative; */


  >
  img{
    z-index: 1;

    object-fit: cover;
    object-position: 50% 50%;
    width: 100%;
    height: 100%;
  /* border: none;
  outline: none; */
  }

  &.gradient::after {
    background: linear-gradient(180deg, rgba(39, 3, 187, 0.08) 47.4%, #2703BB 87.5%);
    display: block;
    position: relative;
    width: 100%;
    height: 100vh;
    content: "";

  } 

    @media (min-width: 320px) and (max-width: 767px) {
    height: 100vh;
    width: 100%;
    position: relative;
  }
`;

const ImageContainer = props => {

  console.log(props)


  return <StyledGradientContainer className="gradient" background={props.background} img={props.image} />;

}
export default ImageContainer;

