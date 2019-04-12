import React, { useState, useEffect } from "react";
import styled from "styled-components";
import locationImage from "../../../ikoner/location.svg";

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

    img {
      width: 40px;
    }
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
  const [locations, setLocations] = useState([]);

  console.log(locations);

  useEffect(() => {
    fetchLocations();
  }, []);

  const fetchLocations = () => {
    fetch(`http://wordplate.test/wp-json/wp/v2/branches`)
      .then(response => response.json())
      .then(data => {
        setLocations(data);
      })
      .catch(error => console.error(error));
  };

  return (
    <StyledLocations>
      <ul>
        {locations.map(element => {
          console.log(element);
          return (
            <li key={element.id}>
              <img src={locationImage} alt="location-icon" />
              <h5>{element.acf.branches.city}</h5>
            </li>
          );
        })}
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
