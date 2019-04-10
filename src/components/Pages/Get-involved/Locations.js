import React from "react";
import styled from "styled-components";

const StyledLocations = styled.div`
  width: 644px;
  height: 501px;
  overflow-y: scroll;

  ul {
    padding: 0;
  }

  li {
    width: 635px;
    height: 106px;
    list-style: none;
    border-bottom: 1px solid black;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    h5 {
      font-family: Heebo;
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: normal;
    }
  }
`;

const Locations = props => {
  return (
    <StyledLocations>
      <ul>
        <li>
          <h5>location</h5>
        </li>
        <li>
          <h5>location</h5>
        </li>
        <li>
          <h5>location</h5>
        </li>
        <li>
          <h5>location</h5>
        </li>
        <li>
          <h5>location</h5>
        </li>
        <li>
          <h5>location</h5>
        </li>
        <li>
          <h5>location</h5>
        </li>
        <li>
          <h5>location</h5>
        </li>
        <li>
          <h5>location</h5>
        </li>
        <li>
          <h5>location</h5>
        </li>
        <li>
          <h5>location</h5>
        </li>
        <li>
          <h5>location</h5>
        </li>
        <li>
          <h5>location</h5>
        </li>
      </ul>
    </StyledLocations>
  );
};

export default Locations;
