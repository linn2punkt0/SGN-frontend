import React from "react";
import styled from "styled-components"
import ImageContainer from "../../Global/ImageContainer"
import TextContainer from "./TextContainer.js"
import PageHeaderText from "../../Global/PageHeaderText"
import ContactContainer from "./Contact.js"

const StyledHome = styled.div`
position: relative;
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 100vh 100vh 100vh 100vh 100vh;
background-attachment: fixed;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
overflow-x: hidden;

`

const Home = props => {
  return (
    <StyledHome>

      <PageHeaderText />
      <ImageContainer background="pink"/>
      <TextContainer title="Get Involved"/>
      <ImageContainer background="#2703BB"/>
      <TextContainer title="Who We Are"/>
      <ImageContainer background="black"/>
      <TextContainer title="What we do / stories"/>
      <ImageContainer background="lightgreen"/>
      <ContactContainer title="Wanna help out?" textContact="Låna ut lokal? Donera pengar? Material?"/>
      
      

    </StyledHome>
  );
};

export default Home;
