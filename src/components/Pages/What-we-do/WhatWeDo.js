import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GradientContainer from "./gradientContainer";
// import ProjectText from "./ProjectText";
import PageHeaderText from "../../Global/PageHeaderText";
import ContactUsFooter from "../../Global/ContactUsFooter";
import Container from "../../Global/Container";
import TextWhatWe from "./TextWhatWe";
import faceIllustation from "./faceillustration.svg"
import ImageLady from "../../../images/project-1-slide.png"
import ImageEvent from "../../../images/project-2-slide.png"
import ImageProject from "../../../images/project-3-slide.png"
import Reveal from "react-reveal/Reveal";

const StyledWhatWeDo = styled.div`
  height: 100%;
  width: 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow-x: hidden;
`;


const StyledLogo = styled.div`
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
  div {
    background: #ebdccd;
    border-radius: 50%;
    height: 300px;
    width: 300px;
    transition: 1s;
  }

  div:hover {
    transform: translate3d(10px, 0px, 0px) skew(-10deg, 4deg);
    transition: all 0.7s ease;
  }
`;

const TextOnImage = styled.p`
  z-index: 99;
  position: absolute;
  width: 22%;
  align-self: flex-end;
  right: 5%;
  padding-bottom: 4%;
  font-family: Heebo;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: normal;
  color: #ffffff;
  > p {
    margin-top: 5%;
  }
  @media (min-width: 320px) and (max-width: 767px) {
    width: 80%;
    right: 6%;
    font-family: Heebo;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
    padding-bottom: 10%;
    > p:last-child {
      font-weight: 300;
    }
  }
`;

const WhatWeDo = props => {
  // Fetch all projects from API
  const [projects, setProjects] = useState(null);
  console.log("usch");
  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = () => {
    fetch(`http://wordplate.test/wp-json/wp/v2/projects`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setProjects(data);
      })
      .catch(error => console.error(error));
  };

  // Fetch What-we-do-page from API and set all custom-field-content to content-hook
  const [content, setContent] = useState(null);
  useEffect(() => {
    fetchContent();
    window.scrollTo(0, 0);
  }, []);

  const fetchContent = () => {
    fetch(`http://wordplate.test/wp-json/wp/v2/pages?slug=what-we-do`)
      .then(response => response.json())
      .then(data => {
        setContent(data[0].acf);
      })
      .catch(error => console.error(error));
  };

  // Get random color from color array
  const colors = ["#FD422D", "#F9AD0E", "#0021B8"];

  const getRandomColor = () => {
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    // const boxShadow = `{{background: linear-gradient(180deg, rgba(39, 3, 187, 0.08) 47.4%, ${randomColor} 87.5%)}}`
    return randomColor;
  };

  //   const getGradient = (props) => {
  //  const grade = {background: "linear-gradient(180deg, rgba(39, 3, 187, 0.08) 47.4%, pink 87.5%)"}
  //  return grade;
  // }

  const firstText = {
    type: "Project",
    title: "Strong Women’s Network",
    description:
      "Strong Women 's Network SKN' s goal is to create a meeting place for asylum seekers, newly arrived and already Swedish - established women in order to promote intercultural dialogue among women Strong Women 's Network SKN' s goal is.",
    small_text: "Started 2016-08-21 till present",
    button_text: "Official Website",
    button_link: "",
    slide_text_one:
      "This is the story of Gina. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dolor lectus, bibendum.",
    slide_text_two:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dolor lectus, bibendum at volutpat ac, gravida vel nisl. Pellentesque dolor lectus, bibendum at volutpat ac."
  };
  const secondText = {
    type: "Project",
    title: "Double Cup",
    description:
      "Double Cup’s goal is to create a meeting place for asylum seekers, newly arrived and already Swedish - established women in order to promote intercultural dialogue among women Strong Women 's Network SKN' s goal is.",
    small_text: "Started 2018-02-21 to present",
    button_text: "Official Website",
    button_link: "",
    slide_text_one:
      "The best place for seamless integration. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dolor lectus.",
    slide_text_two:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dolor lectus, bibendum at volutpat ac, gravida vel nisl. Pellentesque dolor lectus, bibendum at volutpat ac."
  };
  const thirdText = {
    type: "Event",
    title: "River Of Light",
    description:
      "Why it started. Under The Same Sun dance group Paragraph Heebo Sans Light Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dolor lectus, bibendum at volutpat ac, gravida vel nisl. Pellentesque dolor lectus, bibendum at gravida vel nisl.",
    small_text: "Held 2018-02-20",
    button_text: "View Gallery",
    button_link: "",
    slide_text_one:
      "The whole cityscape projected the shimmer of an entire galaxy for a night. Lorem adipiscing elit. Pellentesque dolor lectus, bibendum.",
    slide_text_two:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dolor lectus, bibendum at volutpat ac, gravida vel nisl. Pellentesque dolor lectus, bibendum at volutpat ac."
  };
  // console.log(shadowColor)
  return (
    <StyledWhatWeDo>

        <Container>
          <PageHeaderText content={content ? content.header : ""} />
          <StyledLogo>
            <div>
              <img src={faceIllustation} alt="Logo" />
            </div>
          </StyledLogo>
        </Container>

        <Container>
          <TextWhatWe content={firstText} />
          <GradientContainer
            background={getRandomColor}
            image={ImageLady}
            // shadowImg={getGradient}
          />
          <TextOnImage>
            <Reveal top>
            <p>{firstText.slide_text_one}</p>
            <p>{firstText.slide_text_two}</p>
          </Reveal>
          </TextOnImage>
        </Container>

        <Container>
          <TextWhatWe content={secondText} />
       
          <GradientContainer
            background={getRandomColor}
            image={ImageEvent}
            // shadowImg={getGradient}
          />
          <TextOnImage>
            <Reveal top>
            <p>{secondText.slide_text_one}</p>
            <p>{secondText.slide_text_two}</p>
            </Reveal>
          </TextOnImage>
        </Container>

        <Container>
          <TextWhatWe content={thirdText} />
          <GradientContainer
            background={getRandomColor}
            imageProject={ImageProject}
            // shadowImg={getGradient}
          />
          <TextOnImage>
          <Reveal top>
            <p>{thirdText.slide_text_one}</p>
            <p>{thirdText.slide_text_two}</p>
            </Reveal>
          </TextOnImage>
        </Container>
        <ContactUsFooter />

    </StyledWhatWeDo>
  );
};

export default WhatWeDo;
