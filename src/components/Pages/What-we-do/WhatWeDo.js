import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GradientContainer from "./gradientContainer";
import PageHeaderText from "../../Global/PageHeaderText";
import ContactUsFooter from "../../Global/ContactUsFooter";
import Container from "../../Global/Container";
import TextWhatWe from "./TextWhatWe";
import HeaderImage from "../../../images/what-we-do_hero.png";
import ImageOne from "../../../images/project-1-slide.png";

const StyledWhatWeDo = styled.div`
  height: 100%;
  width: 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow-x: hidden;

  .header-image {
    height: 100vh;
    width: 50%;
    max-height: 449px;
    margin-top: 10vh;
    background: url(${HeaderImage});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

const WhatWeDo = props => {
  // Fetch all projects from API
  const [projects, setProjects] = useState(null);
  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = () => {
    fetch(`http://wordplate.test/wp-json/wp/v2/projects`)
      .then(response => response.json())
      .then(data => {
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
        <div className="header-image" />
      </Container>

      <Container>
        <TextWhatWe content={firstText} color="#0021B8" />
        <GradientContainer
          background={getRandomColor}
          img={ImageOne}
          color="#0021B8"
          // shadowImg={getGradient}
        />
      </Container>

      <Container>
        <TextWhatWe content={secondText} color="#FD422D" />
        <GradientContainer
          background={getRandomColor}
          img="https://dummyimage.com/1324x720/FD22D/aaa"
          color="#FD422D"
          // shadowImg={getGradient}
        />
      </Container>

      <Container>
        <TextWhatWe content={thirdText} color="#F9AD0E" />
        <GradientContainer
          background={getRandomColor}
          img="https://dummyimage.com/1324x720/FAD0E/aaa"
          color="#F9AD0E"
          // shadowImg={getGradient}
        />
      </Container>
      <ContactUsFooter />
    </StyledWhatWeDo>
  );
};

export default WhatWeDo;
