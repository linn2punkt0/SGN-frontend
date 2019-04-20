import React, { Component, useState, useEffect } from "react";
import styled from "styled-components";
import ImageContainer from "../../Global/ImageContainer";
import TextContainer from "./TextContainer.js";
import PageHeaderText from "../../Global/PageHeaderText";
import ContactContainer from "./Contact.js";
// import Footer from "../../Global/Footer.js"
import Container from "../../Global/Container"


const StyledHome = styled.div`
  position: relative;
  display: grid;
  height: 100%;
  width: 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow-x: hidden;
    a {
    /* height: 36px; */
    font-weight: 500;
    font-size: 24px;
    color: #FFFFFF;
    text-decoration: none;
  }

  @media (min-width: 320px) and (max-width: 767px){
  position: relative;
  flex-direction: column;
  width: 100vw;
  height: 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow-x: hidden;
 
  }
`;



const Home = props => {
  // Fetch home-page from api and set custom-field-content to content-hook.
  const [content, setContent] = useState(null);


  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = () => {
    fetch(`http://wordplate.test/wp-json/wp/v2/pages?slug=home`)
      .then(response => response.json())
      .then(data => {
        setContent(data[0].acf);
      })
      .catch(error => console.error(error));
  };

  return (
    <StyledHome>
      <Container flexDirection="column">
        <PageHeaderText content={content ? content.header : ""} />
        <ImageContainer background="tomato" />
      </Container>

      <Container>
        <TextContainer content={content ? content.get_involved : ""}backgroundButton="#0021B8"/>
        <ImageContainer background="#2703BB" />
      </Container>
      <Container>
        <TextContainer content={content ? content.who_we_are : ""}  backgroundButton="#F9DC0E" 
        />
        <ImageContainer background="#F9DC0E" />
      </Container>
      <Container>
        <TextContainer content={content ? content.what_we_do : ""} backgroundButton="#F43F2A" />
        <ImageContainer background="#F43F2A" />
      </Container>
      <ContactContainer
        title="Wanna help out?"
        textContact="Got a local or materials to lend? Send us a message!"
        swishNr="Swish: 123 223 37 32"
        contactUs="Contact Us"
        bGiro="Bankgiro: 5138-5854"
      />
      {/* <Footer/> */}
    </StyledHome>
  );
};


export default Home;
