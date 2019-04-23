import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Academic from "../../ikoner/academic-club.svg";
import Sport from "../../ikoner/sports-club.svg";
import Kids from "../../ikoner/kids-club.svg";
import Culture from "../../ikoner/culture-club.svg";
import Phone from "../../ikoner/phone.svg";
import Mail from "../../ikoner/email.svg";
import LocationLogo from "../../ikoner/location.svg";
import Locations from "./Locations";
import Woman from "../../ikoner/womens-club.svg";
import Reveal from 'react-reveal/Reveal';
import Fade from 'react-reveal/Fade';

const StyledMap2 = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h1 {
    font-weight: 500;
    font-size: 3vh;
  }
  > img {
    width: 100%;
  }
  > p {
    font-weight: 300;
    font-size: 2vh;
  }
  .container {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  .featured {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .activity-row {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
  .activity {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border-bottom: solid 1px black;
    margin-right: 10px;
    img {
      max-width: 3vh;
      margin-right: 10px;
    }
  }
  .contact {
    width: 90%;
    margin: auto 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .contact-row {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    img {
      max-width: 3vh;
      margin-right: 10px;
    }
    div {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      margin: 0 10px 0 10px;
    }
    h6 {
      margin: 0 10px 0 0;
      font-weight: 500;
      font-size: 2vh;
    }
  }
`;

const Map2 = props => {
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
  return (
    <StyledMap2>
    <Reveal right>
      <img src="https://cdn1.tekrevue.com/wp-content/uploads/2015/04/map-location-pin-960x540.jpg" />
    </Reveal>
      <div className="container">
      <Fade right delay={300}>
        <h1>Vänersborg</h1>
        <p>
          Vänersborg is the head seat of our organisation and has a wide variety
          of activities and branches.
        </p>
      </Fade>
      <Fade right delay={400}>
        <div className="featured">
          <p>Feautured Activities:</p>

          <div className="activity-row">
            <div className="activity">
              <img src={Sport} alt="Sport Logo" />
              <p>
                {activities.first_activity
                  ? activities.first_activity
                  : "Sports Club"}
              </p>
            </div>
            <div className="activity">
              <img src={Woman} alt="Woman Logo" />
              <p>
                {activities.second_activity
                  ? activities.second_activity
                  : "Womens Club"}
              </p>
            </div>
          </div>

          <div className="activity-row">
            <div className="activity">
              <img src={Academic} alt="Book Logo" />
              <p>
                {activities.third_activity
                  ? activities.third_activity
                  : "Academic Club"}
              </p>
            </div>
            <div className="activity">
              <img src={Kids} alt="Child Logo" />
              <p>
                {activities.fourth_activity
                  ? activities.fourth_activity
                  : "Kids Club"}
              </p>
            </div>
          </div>
        </div>
      </Fade>
      </div>

      <Fade right delay={500}>
      <div className="contact">
        <div className="contact-row">
          <div>
            <h6>Ansvarig:</h6>
            <img src={Phone} alt="Phone Logo" />
            <p>+46 722-89 10 18</p>
          </div>
          <div>
            <img src={LocationLogo} alt="Locaton Logo" />
            <p>Vägens väg 15</p>
          </div>
        </div>
        <div className="contact-row">
          <div>
            <img src={Mail} alt="Mail Logo" />
            <p>name@nameson.se</p>
          </div>
          <div>
            <p>433 98 Vänersborg</p>
          </div>
        </div>
      </div>
      </Fade>
    </StyledMap2>
  );
};

export default Map2;
