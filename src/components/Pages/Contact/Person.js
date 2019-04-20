import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledPerson = styled.div`
  img {
    width: 100%;
  }
  p {
    max-width: 80%;
    font-weight: 300;
    font-size: 24px;
  }
  h1 {
    font-weight: 300;
    text-transform: uppercase;
    font-size: 48px;
  }
  h4 {
    font-weight: 400;
    font-size: 24px;
  }
  /* .image {
    width: 100%;
    height: 100px;
    background: url(${props => props.contactImage});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  } */
`;

const Person = props => {
  return (
    <StyledPerson>
      {/* <div className="image" /> */}
      <img src={props.contactImage ? props.contactImage : "Image"} />
      <h1>{props.contactName ? props.contactName : "Name"}</h1>
      <p>
        {props.contactDescription ? props.contactDescription : "Description"}
      </p>
      <h4>{props.contactEmail ? props.contactEmail : "Email"}</h4>
      <h4>{props.contactPhone ? props.contactPhone : "Phone"}</h4>
    </StyledPerson>
  );
};

export default Person;
