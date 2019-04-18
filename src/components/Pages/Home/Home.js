import React, { Component, useState, useEffect } from "react";
import styled from "styled-components";
import ImageContainer from "../../Global/ImageContainer";
import TextContainer from "./TextContainer.js";
import PageHeaderText from "../../Global/PageHeaderText";
import ContactContainer from "./Contact.js";
// import * as Scroll from 'react-scroll';
// import WhenInView from "./WhenInView"
import ImageHeader from "../../Global/ImageHeader"
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
    height: 36px;
    font-weight: 500;
    font-size: 24px;
    color: #1f1f1f;
    text-decoration: none;
  }

  @media (min-width: 320px) and (max-width: 767px){
  position: relative;
  flex-direction: column;
  background-color: green;
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
console.log(content)
  return (
    // <WhenInView>

    // {({ isInView }) =>
    <StyledHome>
      {/* <PageHeaderText content={content ? content.header : ""} />
      <ImageContainer background="pink" /> */}
      <Container>
        <PageHeaderText content={content ? content.header : ""} />
        <ImageContainer background="pink" />
      </Container>
      <Container>
        <TextContainer content={content ? content.get_involved : ""} />
        <ImageContainer background="#2703BB" />
      </Container>
      <Container>
        <TextContainer content={content ? content.get_involved : ""} />
        <ImageContainer background="#2703BB" />
      </Container>
      <Container>
        <TextContainer content={content ? content.who_we_are : ""} />
        <ImageContainer background="black" />
      </Container>
      <Container>
        <TextContainer content={content ? content.what_we_do : ""} />
        <ImageContainer background="lightgreen" />
      </Container>
      <ContactContainer
        title="Wanna help out?"
        textContact="Låna ut lokal? Donera pengar? Material?"
      />
    </StyledHome>
  );
};


export default Home;
