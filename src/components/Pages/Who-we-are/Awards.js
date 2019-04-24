import React from "react";
import styled from "styled-components";

const StyledAwards = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  > div {
    max-width: 200px;
  }
`;

const Awards = props => {
  return (
    <StyledAwards>
      <div>award 1</div>
      <div>award 2</div>
      <div>award 3</div>
    </StyledAwards>
  );
};

export default Awards;
