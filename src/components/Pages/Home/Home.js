import React from "react";
import styled from "styled-components"
import ImageContainer from "../../Global/ImageContainer"
import TextContainer from "./TextContainer"
import PageHeaderText from "../../Global/PageHeaderText"

const StyledHome = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 100vh 100vh 100vh 100vh 100vh;
`

const Home = props => {
  return (
    <StyledHome>

      <PageHeaderText />
      <ImageContainer background="pink"/>
      <TextContainer title="Get Involved"/>
      <ImageContainer background="green"/>
      <TextContainer title="Who We Are"/>
      <ImageContainer background="black"/>
      <TextContainer title="What we do / stories"/>
      <ImageContainer background="lightgreen"/>
      <TextContainer title="Contact"/>
      
      

    </StyledHome>
  );
};

export default Home;
