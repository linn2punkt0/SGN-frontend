import React from "react";
import styled from "styled-components";
import Find from "./Find";
import PageHeaderText from "../../Global/PageHeaderText";
import ImageContainer from "../../Global/ImageContainer";

const StyledGetInvolved = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(5, 100vh);
`;

const GetInvolved = props => {
  return (
    <StyledGetInvolved>
      <PageHeaderText />
      <ImageContainer background="lightpink" />
      <Find />
      <ImageContainer background="blue" />
    </StyledGetInvolved>
  );
};

export default GetInvolved;
