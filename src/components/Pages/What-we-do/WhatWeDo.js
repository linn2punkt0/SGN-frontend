import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ImageContainer from "../../Global/ImageContainer";
import ProjectText from "./ProjectText";
import PageHeaderText from "../../Global/PageHeaderText";
import ContactUsFooter from "../../Global/ContactUsFooter";
// import ImageSlide from "./ImageSlide"

import Slider from "./Slide/Slider";
import SlideImage from "./SlideImage";

const StyledWhatWeDo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100vh 100vh 100vh 100vh 60vh;

  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow-x: hidden;
  position: relative;
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
        console.log(data);
        setProjects(data);
      })
      .catch(error => console.error(error));
  };

  // Fetch What-we-do-page from API and set all custom-field-content to content-hook
  const [content, setContent] = useState(null);
  useEffect(() => {
    fetchContent();
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
    return randomColor;
  };

  return (
    <StyledWhatWeDo>
      <PageHeaderText content={content ? content.header : ""} />
      <Slider />

      {/* <ImageSlide /> */}
      {/* <ImageContainer background="lightyellow" /> */}
      <ProjectText color={getRandomColor} />
      <ImageContainer background={getRandomColor} />
      <ProjectText color={getRandomColor} />
      <ImageContainer background={getRandomColor} />
      <ProjectText color={getRandomColor} />
      <ImageContainer background={getRandomColor} />
      <ContactUsFooter />
    </StyledWhatWeDo>
  );
};

export default WhatWeDo;
