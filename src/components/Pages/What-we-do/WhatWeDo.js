import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ImageContainer from "../../Global/ImageContainer";
import ProjectText from "./ProjectText";
import PageHeaderText from "../../Global/PageHeaderText";
import ContactUsFooter from "../../Global/ContactUsFooter";
// import ImageSlide from "./ImageSlide"

import Slider from "./Slide/Slider"
import SlideImage from "./SlideImage"

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


  // foreach project in projects, we want to access "projects[index].acf"
  const fixedBack = {
    position: "fixed"
  };
  return (
    <StyledWhatWeDo>
      <PageHeaderText />
      <Slider />

      {/* <ImageSlide /> */}
      {/* <ImageContainer background="lightyellow" /> */}
      <ProjectText />
      <ImageContainer background="blue" />
      <ProjectText />
      <ImageContainer background="green" />
      <ProjectText />
      <ImageContainer background="red" />
      <ContactUsFooter />
    </StyledWhatWeDo>
  );
};

export default WhatWeDo;
