import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ImageContainer from "../../Global/ImageContainer";
import Academic from "../../ikoner/academic-club.svg";
import Sport from "../../ikoner/sports-club.svg";
import Kids from "../../ikoner/kids-club.svg";
import Culture from "../../ikoner/culture-club.svg";
import Phone from "../../ikoner/phone.svg";
import Mail from "../../ikoner/email.svg";
import LocationLogo from "../../ikoner/location.svg";
import Locations from "./Locations";


const StyledActivities = styled.div`
  overflow-y: scroll;
  width: 50vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

`;
const StyledIcons = styled.div`
  display: flex;
  justify-content: space-around;

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
 /*   grid-template-rows: 25% 25% 25% 25%;*/
  }
  li {
    margin-right: 1vw;
    font-weight: 300;
    list-style: none;

    img {
      height: 40px;
    }
    span {
      border-bottom: 1px solid #1F1F1F;
      display: flex;
      align-items: center;
    }
  }
  h5 {
    display: inline-block;
    font-weight: 300;
    font-size: 16px;
    margin-left: 1vw;
  }
`;

const StyledTextArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 100%;
    height: 30vh;
  }
  div {
    display: flex;
    flex-direction: column;
    margin-left: 5vw;
    margin-top: 5vh;
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
    max-width: 70%;
    line-height: 5vh;
  }
  h4 {
    justify-self: center;
  }
`;

const StyledMiniFooter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 5vh;

  div {
    display: flex;
    align-items: center;
    font-weight: 300;
  }

  img {
    height: 40px;
    padding-right: 1vw;
  }
  h1 {
    display: inline-block;
    font-weight: 500;
    font-size: 16px;
    padding-right: 0.7vw;
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
          {/*<img src="https://cdn1.tekrevue.com/wp-content/uploads/2015/04/map-location-pin-960x540.jpg"
          />*/}
        <div>
          <h1>Värnesborg</h1>
          <p>
            Vänersborg is the head seat of our organisation and has a wide
            variety of activities and branches.
          </p>
          </div>
          <h4>Feautured Activities</h4>
        </StyledTextArea>
        <StyledIcons>
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
        </StyledIcons>
        <StyledMiniFooter>
          <div>
              <img src={Phone} />
              <h1>Ansvarig:</h1><p>+46 722-89 10 18</p>
          </div>
          <div>
              <img src={LocationLogo} />
              <span>Vägens väg 15 433 98 Värnersborg</span>
          </div>
          <div>
              <img src={Mail} /><p>name@nameson.se</p>
          </div>
        </StyledMiniFooter>
      </div>
    </StyledActivities>
  );
};

export default Map;
