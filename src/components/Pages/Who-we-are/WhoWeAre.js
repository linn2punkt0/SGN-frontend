import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Text from "./Text";
import PageHeaderText from "../../Global/PageHeaderText";
import Container from "../../Global/Container";

import ContactUsFooter from "../../Global/ContactUsFooter";
import Partners from "./Partners";
import PartnerText from "./PartnerText";
import AwardsText from "./AwardsText";
import Awards from "./Awards";
import ImageOne from "../../../images/section-1.png";
import ImageTwo from "../../../images/section-2.png";
import HeaderImage from "../../../images/who-we-are_hero.png";

import GradientContainer from "../../Pages/What-we-do/gradientContainer"
// import ImageContainer from "../../Global/ImageContainer"
// import LargeContainer from "../../Global/LargeContainer"
import Reveal from "react-reveal/Reveal";

const StyledWhoWeAre = styled.div`
    height: 100%;
  width: 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow-x: hidden;
  
  @media (min-width: 320px) and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    height: 100%;

    h5 {
      padding-top: 5vh;
    }

    p {
      height: 50vh;
      display: flex;
      flex-direction: column;
      font-size: 16px;
    }
    div {
      width: 100%;
    }
     ul {
      display: grid;
      grid-template-columns: repeat(1,1fr);
    }
  }
`;

const StyledLogo = styled.div `
  display: flex;
  justify-content: center;
  margin-top: 10vh;
  height: 100vh;
  width: 50%;
  img {
    height: 350px;
    transition: 1s;
  }
  img:hover {
    transform: scale3d(1.2, 1.2, 1.2) skew(10deg, -4deg);
    transition: all 0.7s ease-in-out;
  }

  div:hover {
    transform: translate3d(10px, 0px, 0px) skew(-10deg, 4deg);
    transition: all 0.7s ease;
  }

  @media (min-width: 320px) and (max-width: 767px) {
    width: 95%;
    height: 50vh;
    > div {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      >img{
        width: 60%;
        height: 90%;
      }
    }
  }
      `

const TextOnImage = styled.div `
  z-index: 99;
  position: absolute;
  width: 40%;
  align-self: flex-end;
  right: 5%;
  padding-bottom: 4%;
  font-family: Heebo;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: normal;
  color: #ffffff;

  > h1 {
    /* height: 40%; */
      color: white;
      font-weight: 500;
      font-size: 16px;
  }

  @media (min-width: 320px) and (max-width: 767px) {
    width: 75%;
    
    right: 12%;
    align-self: flex-start;
    font-family: Heebo;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
    position: absolute;
    top: 20%;
    >h1{ 
   
      color:black;
    }
 
  }
`;

const WhoWeAre = props => {
  // Fetch Who-we-are from API and set all custom-field-content to content-hook
  const [content, setContent] = useState(null);
  useEffect(() => {
    fetchContent();
    window.scrollTo(0, 0);
  }, []);
  const fetchContent = () => {
    fetch(`http://wordplate.test/wp-json/wp/v2/pages?slug=who-we-are`)
      .then(response => response.json())
      .then(data => {
        setContent(data[0].acf);
      })
      .catch(error => console.error(error));
  };

  return (
    <StyledWhoWeAre>
      <Container>
        <PageHeaderText content={content ? content.header : ""} />

          <StyledLogo>
          <div>
            <img src={HeaderImage} alt="Logo" />
          </div>
        </StyledLogo>
        {/* <div className="logo" /> */}
      </Container>


      <Container>
        <Text content={content ? content.our_cause : ""} />
        <GradientContainer
          image={ImageTwo}
          height="50vh"
        />
        <TextOnImage>
          <Reveal top>
          <h1 className="quote">
            {content ? content.our_cause.quote : "Some textSome textSome textSome textSome textSome textSome textSome textSome "}
          </h1>
          </Reveal>
        </TextOnImage>
      </Container>

        <Container>
        <Text content={content ? content.our_cause : ""} />
        <GradientContainer
          image={ImageOne}
          height="50vh"
        />
        <TextOnImage>
          <Reveal top>
          <h1 className="quote">
            {content ? content.our_cause.quote : "Some textSome textSome textSome textSome textSome textSome textSome textSome"}
          </h1>
          </Reveal>
        </TextOnImage>
      </Container>

      <Container>
        <PartnerText content={content ? content.partnerships : ""} />
        <Partners />
      </Container>
      <Container>
        <Awards />
        <AwardsText content={content ? content.awards : ""} />
      </Container>
      <ContactUsFooter />
    </StyledWhoWeAre>
  );
};

export default WhoWeAre;
