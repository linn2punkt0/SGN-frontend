import React from "react";
import styled from "styled-components";

const ContainerForContent = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  @media (min-width: 320px) and (max-width: 767px) {
    flex-direction: column;
  }
`;

const Container = props => {
  return <ContainerForContent>{props.children}</ContainerForContent>;
};

export default Container;
