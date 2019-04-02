import React from "react";
import styled from "styled-components"
import ImageContainer from "./ImageContainer"
import TextContainer from "./TextContainer"

const StyledHome = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 100vh 100vh 100vh 100vh 100vh;
`

const Home = props => {
  return (
    <StyledHome>
      
      <TextContainer />
      <ImageContainer />
      <TextContainer />
      <ImageContainer />
      <TextContainer />
      <ImageContainer />
      <TextContainer />
      <ImageContainer />
      <TextContainer />
      <ImageContainer />
      

    </StyledHome>
  );
};

export default Home;
