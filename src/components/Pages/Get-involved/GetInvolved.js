import React from "react";
import styled from "styled-components";
import Locations from "./Locations";

const StyledGetInvolved = styled.div``;

const GetInvolved = props => {
  return (
    <StyledGetInvolved>
      <h1>Get involved!</h1>
      <Locations />
    </StyledGetInvolved>
  );
};

export default GetInvolved;
