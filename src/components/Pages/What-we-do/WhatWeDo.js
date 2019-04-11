import React from "react";
import styled from "styled-components";
import ImageContainer from "../../Global/ImageContainer";
import ProjectText from "./ProjectText";
import PageHeaderText from "../../Global/PageHeaderText";
import ContactUsFooter from "../../Global/ContactUsFooter";
import ImageSlide from "./ImageSlide"

const StyledWhatWeDo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100vh 100vh 100vh 100vh 60vh;

background-attachment: fixed;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
overflow-x: hidden;
`;

const WhatWeDo = props => {
  return (
    <StyledWhatWeDo>
      <PageHeaderText />
      <ImageSlide />
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
