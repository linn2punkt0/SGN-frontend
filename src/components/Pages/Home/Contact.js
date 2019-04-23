import React from "react";
import styled from "styled-components";
import Reveal from 'react-reveal/Reveal';

const ContactContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
height: 100vh;
width: 100vw;
align-items: center;

`
/* Wanna help out? */
const TitleContact = styled.div`
height: 40%;
>h2{
font-family: Heebo;
font-style: normal;
font-weight: 300;
font-size: 64px;
line-height: normal;
text-align: center;
color: #1F1F1F;
}
>p{
  font-family: Heebo;
  font-style: normal;
  font-weight: 300;
  font-size: 36px;
  line-height: normal;
  text-align: center;
  color: rgba(31, 31, 31, 0.45);
}
`
/* Låna ut lokal? Donera pengar? Material? */
const ContactInfo = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
width: 100%;
>a{
  color: #FFFFFF;
  background-color: #0021B8;
  text-decoration-line: underline !important;
  font-family: Heebo;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: normal;
text-align: center;
 &:hover {
        /* transition: 0.3s;
        box-shadow: 1px 1px 0px; */
        }
}

`


const Contact = props => {
  return (
    <ContactContainer>
      <TitleContact>
        <Reveal top>
          <h2>{props.title}</h2>
          <p>{props.textContact}</p>
        </Reveal>
      </TitleContact>

      <ContactInfo>
        <Reveal top>
          <p>{props.swishNr}</p>
          <a href="" >{props.contactUs}</a>
          <p>{props.bGiro}</p>
        </Reveal>
      </ContactInfo>
    </ContactContainer>
  )
}

export default Contact;