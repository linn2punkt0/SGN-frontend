import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ImageContainer from "../../Global/ImageContainer";
import Academic from "../../ikoner/academic-club.svg";
import Sport from "../../ikoner/sports-club.svg";
import Kids from "../../ikoner/kids-club.svg";
import Culture from "../../ikoner/culture-club.svg";
import Locations from "./Locations";


const StyledActivities = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  .img {
    width:100%;
    // max-height: 50vh;
  }

    div h4 {
      display:flex;
      flex-direction: column;
      align-items: center;
    }
     h1 {
      margin-top: 0;
      justify-self:center;
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
    ul {
      padding: 0;
      display: flex;
      justify-content: center;
    }
    li {
      // width: 50%;
      margin-right: 1vh;
      font-weight: 300;
      display: inline-block;
      list-style: none;
      img {
        height: 40px;
      }
      span {
        width: 16vw;
        border-bottom: 1px solid #1F1F1F;
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
        console.log(data)
        setLocations(data[0].acf.branches);
        setActivities(data[0].acf.branches.featured_activity_headline);
      })
      .catch(error => console.error(error));
  };
console.log(activities)
  return (
    <StyledActivities>
        <img className="img" src="https://cdn1.tekrevue.com/wp-content/uploads/2015/04/map-location-pin-960x540.jpg" />
      <div>
        <div>
          <h1>Värnesborg</h1>
          <p>Vänersborg is the head seat of our organisation and has a wide variety of activities and branches.</p>
          <h4>Feautured Activities</h4>
        </div>
        <div>
        <ul>
          <li><span><img src={Sport} /><h5>{activities.first_activity ? activities.first_activity : "Sports Club" }</h5></span></li>
          <li><span><img src={Academic} /><h5>{activities.second_activity ? activities.second_activity : "Womens Club"}</h5></span></li>
          <li><span><img src={Academic} /><h5>{activities.third_activity ? activities.third_activity : "Academic Club"}</h5></span></li>
          <li><span><img src={Kids} /><h5>{activities.fourth_activity ? activities.fourth_activity : "Kids Club"}</h5></span></li>
        </ul>
      </div>
      </div>
    </StyledActivities>
  );
};

export default Map;
