import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ImageContainer from "../../Global/ImageContainer";
import ProjectText from "./ProjectText";
import PageHeaderText from "../../Global/PageHeaderText";
import ContactUsFooter from "../../Global/ContactUsFooter";

const StyledWhatWeDo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100vh 100vh 100vh 100vh 60vh;
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
        setProjects(data[0].acf);
      })
      .catch(error => console.error(error));
  };
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
      <ContactUsFooter />
    </StyledWhatWeDo>
  );
};

export default WhatWeDo;
