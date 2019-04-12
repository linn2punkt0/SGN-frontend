import React from "react";
import styled from "styled-components";
import Form from "./Form";


const StyledText = styled.div`
div {
  display:grid;
  justify-items: center;

}
.header {
  height:10px;
  background-color: #e3e3e3;
  width: 100%;
}
h1, p {
  padding-left: 15%;
  justify-self: start;
}
  h1 {
    font-weight: 300;
    font-size: 64px;
  }
  p {
    font-weight: 300;
    font-size: 24px;
  }

`;

const Text = props => {
  return (
    <StyledText>


      <h1>Title</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <Form />
    </StyledText>
  );
};

export default Text;
