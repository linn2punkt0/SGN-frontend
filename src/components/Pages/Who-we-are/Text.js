import React from "react";
import styled from "styled-components";


const StyledText = styled.div`
display: flex;
flex-direction: column;
justify-content: center;

h1, h2, p {
    font-weight: 300;
}
h1 {
    font-size: 64px;
    margin-top: 0;
}
p {
    font-size: 24px;
}
h2 {
    color: #9B9B9B;
    font-size: 24px
    margin: 0;
}
`;

const Text = props => {
  return (
    <StyledText>
        <h1>Who We Are</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris.
            </p>
    </StyledText>
  );
};

export default Text;
