import React from "react";
import styled from "styled-components";

const StyledTextContainer = styled.div`
width: 474px;
height: 53px;
position: relative;
font-family: "Heebo";
font-style: normal;
font-weight: 300;
font-size: 36px;
left: 82px;
line-height: normal;
color: #959595;
`
const Headerh2 = styled.h2`
color: #1F1F1F;`



const TextContainer = props => {
  return (
    <StyledTextContainer>
      <Headerh2>{props.title}</Headerh2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation

      </p>
    </StyledTextContainer>
  )
}

export default TextContainer;