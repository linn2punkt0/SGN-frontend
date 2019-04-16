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
`;
const Headerh2 = styled.h2`

color: #1F1F1F;`

const LinkReadMore = styled.a`
  background-color: ${props => props.colorButton};
 text-decoration-line: underline !important;
  padding: 0.5%;

`

;


const TextContainer = props => {
  return (
    <StyledTextContainer>

      <Headerh2>{props.content ? props.content.title : "Title"}</Headerh2>
      <p>{props.content ? props.content.description : "Description"}</p>
      <h6>{props.content ? props.content.small_text : "Small text"}</h6>
      <button href={props.content ? props.content.button_link : "/"}>
        {props.content ? props.content.button_text : "Button text"}
      </button>

    </StyledTextContainer>
  );
};

export default TextContainer;
