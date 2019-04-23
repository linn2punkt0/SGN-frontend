import React from "react";
import styled from "styled-components";

const StyledTextContainer = styled.div`
  width: 50%;
  height: 100vh;
  top: 6%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Heebo";
  font-style: normal;
  font-weight: 300;
  font-size: 36px;
  position: relative;
  left: 5%;
  /* left: 82px; */

  line-height: normal;
  color: #959595;

  @media (min-width: 320px) and (max-width: 767px) {
    height: 50vh;
    width: 100%;
    top: 0;
    padding: 8%;
    left: 0;
  }
`;
const StyledForText = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  font-family: "Heebo";
  font-style: normal;
  font-weight: 300;
  font-size: 36px;
  line-height: normal;
  margin: 0 0 10% 0;
  > p {
    /* margin: 10% 0 0 0; */
    width: 70%;
    height: 45%;
    font-weight: 300;
    font-size: 24px;
  }
  > h6 {
    margin: 1% 0 0 0;
    font-family: Heebo;
    font-style: normal;
    width: 100%;

    font-weight: 500;
    font-size: 16px;
    line-height: normal;
    color: rgba(113, 113, 113, 0.7);
  }
  @media (min-width: 320px) and (max-width: 767px) {
    > h6 {
      font-family: Heebo;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: normal;
    }
    > p {
      font-family: Heebo;
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      line-height: 30px;
      /* width: 85%; */
    }
  }
`;
const Headerh4 = styled.h4`
  margin: 0;
  font-family: Heebo;
  font-style: normal;
  font-weight: 300;
  font-size: 36px;
  line-height: normal;
  color: rgba(31, 31, 31, 0.45);

  @media (min-width: 320px) and (max-width: 767px) {
    font-family: Heebo;
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: normal;
  }
`;

const LinkReadMore = styled.a`
  background-color: ${props => props.colorButton};
  text-decoration-line: underline !important;
  height: 5%;
  font-family: Heebo;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: normal;
  text-align: center;
  align-self: flex-start;
  margin: 0;

  @media (min-width: 320px) and (max-width: 767px) {
    font-family: Heebo;
    font-style: normal;
    font-weight: 500;
    font-size: 16px !important;
    line-height: 30px;
  }
`;

const TextWhatWe = props => {
  console.log(props.content);
  return (
    <StyledTextContainer>
      <StyledForText>
        <Headerh4>{props.content ? props.content.type : "Type"}</Headerh4>

        <Headerh4>{props.content ? props.content.title : "Title"}</Headerh4>
        <p>{props.content ? props.content.description : "Description"}</p>
        <h6>
          {props.content
            ? props.content.small_text
            : "Small text with project start-date"}
        </h6>
      </StyledForText>
      <LinkReadMore
        colorButton={props.backgroundButton}
        href={props.content ? props.content.button_link : "/"}
      >
        {props.content ? props.content.button_text : "Button text"}
      </LinkReadMore>
    </StyledTextContainer>
  );
};

export default TextWhatWe;
