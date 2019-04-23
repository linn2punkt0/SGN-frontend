import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ImageContainer from "../../Global/ImageContainer";
// import ProjectText from "./ProjectText";
import PageHeaderText from "../../Global/PageHeaderText";
import ContactUsFooter from "../../Global/ContactUsFooter";
import Container from "../../Global/Container"
import TextWhatWe from "./TextWhatWe"



const StyledWhatWeDo = styled.div`
  height: 100%;
  width: 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow-x: hidden;
`;


const WhatWeDo = props => {
  // Fetch all projects from API
  const [projects, setProjects] = useState(null);
console.log('usch')
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
    // const boxShadow = `{{background: linear-gradient(180deg, rgba(39, 3, 187, 0.08) 47.4%, ${randomColor} 87.5%)}}`
    return randomColor;
  };

//   const getGradient = (props) => {
//  const grade = {background: "linear-gradient(180deg, rgba(39, 3, 187, 0.08) 47.4%, pink 87.5%)"}
//  return grade;
// }
 
  // console.log(shadowColor)
  return (
    <StyledWhatWeDo>
      <Container>
        <PageHeaderText content={content ? content.header : ""} />
      </Container>

      <Container>
        <TextWhatWe />
        {/* <ProjectText color={getRandomColor} /> */}
        <ImageContainer
          background={getRandomColor}
          imageProject="https://dummyimage.com/1324x720/21B8/aaa"
          // shadowImg={getGradient}
        />
      </Container>

      <Container>
        <TextWhatWe />
        {/* <ProjectText color={getRandomColor} /> */}
        <ImageContainer
          background={getRandomColor}
          imageProject="https://dummyimage.com/1324x720/FD22D/aaa"
          // shadowImg={getGradient}
        />
      </Container>

      <Container>
        <TextWhatWe />
        {/* <ProjectText color={getRandomColor} /> */}
        <ImageContainer
          background={getRandomColor}
          imageProject="https://dummyimage.com/1324x720/FAD0E/aaa"
          // shadowImg={getGradient}
        />
      </Container>
      <ContactUsFooter  />
    </StyledWhatWeDo>
  );
};

export default WhatWeDo;
