import React from "react";
import styled from "styled-components";

const StyledLocations = styled.div`
  width: 644px;
  height: 501px;
  left: 78px;
  overflow-y: scroll;

  li {
    width: 635px;
    height: 106px;
    left: 82px;
    font-family: Heebo;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: normal;
    list-style: none;
  }
`;

const Locations = props => {
  return (
    <StyledLocations>
      <ul>
        <li>location</li>
        <li>location</li>
        <li>location</li>
        <li>location</li>
        <li>location</li>
        <li>location</li>
        <li>location</li>
        <li>location</li>
        <li>location</li>
        <li>location</li>
        <li>location</li>
        <li>location</li>
        <li>location</li>
        <li>location</li>
      </ul>
    </StyledLocations>
  );
};

export default Locations;
