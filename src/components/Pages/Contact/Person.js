import React from "react";
import styled from "styled-components";



const StyledPerson = styled.div`
margin-top: 37vh;
  div {
    display: flex;
    flex-direction: column;
  }
  p {
    margin-top: 0;
    max-width: 80%;
    font-weight: 300;
    font-size: 24px;
    height: 10vh;
  }
  h1 {
    font-weight: 300;
    text-transform: uppercase;
    font-size: 48px;
  }
  h4 {
    font-weight: 400;
    font-size: 24px;
    margin-top: 1vh;
  }
@media (min-width: 769px)  {
  .hide {
    display: none;
  }
 }
`;
/* Images */
const Content = styled.div`
@media (min-width: 769px)  {
    background-image: url(${props => props.img});
    background-position: center;
    background-size: cover;
    max-width: 90%;
    padding-left: 1vw;
    padding-right: 1vw;
}
@media (min-width: 320px) and (max-width: 767px) {
  background-image: url(${props => props.img});
  background-position: center;
  background-size: cover;
  max-width: 100%;
  height: 400px;
  padding-left: 0;
  padding-right: 0;
}
    
`;

const Person = props => {
  return (
    <StyledPerson>
    <Content img={props.contactImage} />
     <div>
        <h1>{props.contactName ? props.contactName : "Name"}</h1>
        <p>{props.contactDescription ? props.contactDescription : "Description"}</p>
        <h4>{props.contactEmail ? props.contactEmail : "Email"}</h4>
        <h4 className="hide">{props.contactPhone ? props.contactPhone : "Phone"}</h4>
      </div>
    </StyledPerson>
  );
};

export default Person;
