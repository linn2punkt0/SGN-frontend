import React from "react";
import styled from "styled-components";
import ImageContainer from "../../Global/ImageContainer";
import ProjectText from "./ProjectText";
import PageHeaderText from "../../Global/PageHeaderText";

const StyledWhatWeDo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100vh 100vh 100vh 100vh 60vh;
`;

const WhatWeDo = props => {
  return (
    <StyledWhatWeDo>
      <PageHeaderText />
      <ImageContainer background="lightyellow" />
      <ProjectText />
      <ImageContainer background="blue" />
      <ProjectText />
      <ImageContainer background="green" />
      <ProjectText />
      <ImageContainer background="red" />
    </StyledWhatWeDo>
  );
};

export default WhatWeDo;
