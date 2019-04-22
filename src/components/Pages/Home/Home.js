import React, { Component, useState, useEffect } from "react";
import styled from "styled-components";
import ImageContainer from "../../Global/ImageContainer";
import TextContainer from "./TextContainer.js";
import PageHeaderText from "../../Global/PageHeaderText";
import ContactContainer from "./Contact.js";
// import Footer from "../../Global/Footer.js";
import Container from "../../Global/Container";
import Logo from "./Logo.svg";
import ImageOne from "../../../images/get-involved_landing-page_illustration.png";
import ImageTwo from "../../../images/who-we-arelanding-page_illustration.png";
import ImageThree from "../../../images/what-we-do_landing-page_illustration.png";

const StyledLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 50%;
  div {
    background: #ebdccd;
    border-radius: 50%;
    height: 300px;
    width: 300px;
  }
  img {
    height: 350px;
  }
  img:hover {
    transform: scale3d(1.1, 1.1, 1.1);
    transition: all 1s ease-in-out;
  }
  div:hover {
    transform: translate3d(10px, 0px, 0px) skew(-5deg, 4deg);
    transform-style: preserve-3d;
    will-change: transform;
    transition: all 1s ease-in-out;
  }
`;

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
    color: #ffffff;
    text-decoration: none;
  }

  @media (min-width: 320px) and (max-width: 767px) {
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
        <StyledLogo>
          <div>
            <img src={Logo} alt="Logo" />
          </div>
        </StyledLogo>
      </Container>

      <Container>
        <TextContainer
          content={content ? content.get_involved : ""}
          backgroundButton="#0021B8"
        />
        <ImageContainer background={ImageOne} />
      </Container>
      <Container>
        <TextContainer
          content={content ? content.who_we_are : ""}
          backgroundButton="#F9DC0E"
        />
        <ImageContainer background={ImageTwo} />
      </Container>
      <Container>
        <TextContainer
          content={content ? content.what_we_do : ""}
          backgroundButton="#F43F2A"
        />
        <ImageContainer background={ImageThree} />
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
