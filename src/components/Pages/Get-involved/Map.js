import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ImageContainer from "../../Global/ImageContainer";
import Academic from "../../ikoner/academic-club.svg";
import Sport from "../../ikoner/sports-club.svg";
import Kids from "../../ikoner/kids-club.svg";
import Culture from "../../ikoner/culture-club.svg";
import Phone from "../../ikoner/phone.svg";
import Locations from "./Locations";

const StyledTextArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 50vw;
  .img {
    width:100%;
    height: 30%;
  }
  h1, p {
    margin-left: 10vh;
    align-self: flex-start;
  }
  h1 {
    margin-top: 0;
    font-weight: 500;
    font-size: 24px;
  }
  h4, p {
    font-weight: 300;
    font-size: 16px;
  }
  p {
    max-width: 45%;
    line-height: 5vh;
  }
  }
  h4 {
    justify-self: center;
  }
`;
const StyledMiniFooter = styled.div`
  display: flex;
  img {
    height: 40px;
  }
  h1 {
    font-size: 16px;
  }
`;
const StyledActivities = styled.div`
  overflow-y: scroll;
  display: grid;
  grid-template-columns: 1fr;
    
  ul {
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0;
  }
  li {
    margin-right: 1vh;
    font-weight: 300;
    display: inline-block;
    list-style: none;
    border-bottom: 1px solid #1F1F1F;
    img {
      height: 40px;
    }
  span {
    /* width: 20vw; */
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  h5 {
    display: inline-block;
    font-weight: 300;
    font-size: 16px;
    margin-left: 1vw;
  }
`;

const Map = props => {
  const [locations, setLocations] = useState([]);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetchLocations();
  }, []);

  const fetchLocations = () => {
    fetch(`http://wordplate.test/wp-json/wp/v2/branches`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setLocations(data[0].acf.branches);
        setActivities(data[0].acf.branches.featured_activity_headline);
      })
      .catch(error => console.error(error));
  };
  console.log(activities);
  return (
    <StyledActivities>
      <div>
        <StyledTextArea>
          <img
            className="img"
            src="https://cdn1.tekrevue.com/wp-content/uploads/2015/04/map-location-pin-960x540.jpg"
          />
          <h1>Värnesborg</h1>
          <p>
            Vänersborg is the head seat of our organisation and has a wide
            variety of activities and branches.
          </p>
          <h4>Feautured Activities</h4>
        </StyledTextArea>
        <div>
          <ul>
            <li>
              <span>
                <img src={Sport} />
                <h5>
                  {activities.first_activity
                    ? activities.first_activity
                    : "Sports Club"}
                </h5>
              </span>
            </li>
            <li>
              <span>
                <img src={Academic} />
                <h5>
                  {activities.second_activity
                    ? activities.second_activity
                    : "Womens Club"}
                </h5>
              </span>
            </li>
            <li>
              <span>
                <img src={Academic} />
                <h5>
                  {activities.third_activity
                    ? activities.third_activity
                    : "Academic Club"}
                </h5>
              </span>
            </li>
            <li>
              <span>
                <img src={Kids} />
                <h5>
                  {activities.fourth_activity
                    ? activities.fourth_activity
                    : "Kids Club"}
                </h5>
              </span>
            </li>
          </ul>
        </div>
        <StyledMiniFooter>
          <img src={Phone} />
          <h1>Ansvarig</h1>
        </StyledMiniFooter>
      </div>
    </StyledActivities>
  );
};

export default Map;
