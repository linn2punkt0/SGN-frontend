import React from "react";
import styled from "styled-components";

const StyledPartnerText = styled.div`
  background: #0021b8;
  width: 50%;
  height: 100vh;
  h3 {
    font-weight: 300;
    font-size: 36px;
    color: #ffffff;
  }
  p {
    font-weight: 300;
    font-size: 36px;
    color: rgba(255, 255, 255, 0.72);
  }
`;

const PartnerText = props => {
  return (
    <StyledPartnerText>
      <h3>{props.content ? props.content.title : "Partners"}</h3>
      <p>
        {props.content ? props.content.description : "Partnerstext in here"}
      </p>{" "}
      />
    </StyledPartnerText>
  );
};

export default PartnerText;
