import React from "react";
import styled from "styled-components";

const ContainerForContent = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  @media (min-width: 320px) and (max-width: 767px) {
    flex-direction: ${props => props.flexDirection || "column-reverse"};
    height: 200vh;
  }
`;

const ImageContainer = styled.div`
  width: 50vw;
  height: 100vh;
  background-color: red;
  @media (min-width: 320px) and (max-width: 767px) {
    width: 100vw;
    height: 50vh;
  }
`;

const TextContainer = styled.div`
  width: 50vw;
  height: 100vh;
  background-color: blue;
  @media (min-width: 320px) and (max-width: 767px) {
    width: 100vw;
    height: 100vh;
  }
`;

const Container = props => {
  return (
    <ContainerForContent {...props} style={props.reverseRow}>
      {props.children}
    </ContainerForContent>
  );
};

export default Container;
