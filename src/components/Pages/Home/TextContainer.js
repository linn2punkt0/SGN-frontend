import React from "react";
import styled from "styled-components";
import Reveal from "react-reveal/Reveal";

const StyledTextContainer = styled.div `
  width: 50%;
  height: 100vh;
  top: 6%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  font-family: "Heebo";
  font-style: normal;
  font-weight: 300;
  font-size: 36px;
  left: 82px;
  line-height: normal;
  color: #959595;

  @media (min-width: 320px) and (max-width: 767px) {
  height: 50vh;
  width: 100%;
  top: 0;
  /* justify-content: space-between; */
  padding: 8%;
  left: 0;
   }
  
`
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
  margin:0 0 10% 0;
    >p{
    /* margin: 10% 0 0 0; */
    width: 70%;
    height: 45%;
  }
  >h6{
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
      >h6{
        font-family: Heebo;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: normal;
      }
     >p{ font-family: Heebo;
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      line-height: 30px;
      width: 85%;
     }
    }
  `
  const Headerh2 = styled.h2`
  color: #1F1F1F;
  margin: 0;
  font-family: Heebo;
  font-style: normal;
  font-weight: 300;
  font-size: 36px;
  line-height: normal;

@media (min-width: 320px) and (max-width: 767px) {
    font-family: Heebo;
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: normal;
  }
  `

const LinkReadMore = styled.a`
  background-color: ${props => props.colorButton};
  text-decoration-line: underline !important;
  height:5%;
  font-family: Heebo;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: normal;
  text-align: center;
  align-self: flex-start;
  margin: 0;
  &:hover{
    /* height: 0%; */
    /* text-underline-position: under; */
    /* transition-delay: 0.2s; */
    /* transition:  */
    background-color: white;
    color: black;
  }

 
 @media (min-width: 320px) and (max-width: 767px) {
font-family: Heebo;
font-style: normal;
font-weight: 500;
font-size: 16px !important;
line-height: 30px;
   }
`




const TextContainer = props => {

  return (
    <StyledTextContainer>
      <StyledForText>
        <Reveal top>
          <Headerh2>{props.content ? props.content.title : "Title"}</Headerh2>
          <p>{props.content ? props.content.description : "Description"}</p>
          <h6>{props.content ? props.content.small_text : "Small text"}</h6>
        </Reveal>
      </StyledForText>
      <LinkReadMore colorButton={props.backgroundButton} href={props.content ? props.content.button_link : "/"}>
        {props.content ? props.content.button_text : "Button text"}
      </LinkReadMore>
    </StyledTextContainer>
  );
};

export default TextContainer;
