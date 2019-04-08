import React from "react";
import styled from "styled-components";
import Button from "./Button"
import Footer from "../../Global/Footer.js"

const ContactContainer = styled.div`
display: flex;
justify-content: space-around;

position: absolute;
/* width: 100vw; */
 background-color: green;
`

/* Wanna help out? */
const ContactTitle = styled.h2`
position: absolute;
width: 474px;
height: 53px;
left: 483px;
top: 3821px;
font-family: Heebo;
font-style: normal;
font-weight: 300;
font-size: 36 px;
line-height: normal;
text-align: center;
color: #1F1F1F;
`
/* Låna ut lokal? Donera pengar? Material? */
const ContactText = styled.p`
position: absolute;
width: 634px;
height: 68px;
left: 411px;
top: 3890px;
font-family: Heebo;
font-style: normal;
font-weight: 300;
font-size: 36px;
line-height: normal;
text-align: center;
color: rgba(31, 31, 31, 0.45);
`


const Contact = props => {
  return (
    <ContactContainer>
      <ContactTitle>{props.title}</ContactTitle>
      <ContactText>{props.textContact}</ContactText>
      <Button>SWISH</Button>
      <Footer />
    </ContactContainer>
  )
}

export default Contact;