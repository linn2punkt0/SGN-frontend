import React from "react";
import styled from "styled-components";
import location from "../../ikoner/location.svg";
import facebook from "../../ikoner/facebook.svg";
import whatsapp from "../../ikoner/whatsapp.svg";
import phone from "../../ikoner/phone.svg";
import GatheringImage from "../../../images/activity_card-template.png";

const StyledActivities = styled.div`
  width: 50vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const WelcomeText = styled.div`
  position: relative;
  width: 100%;
  height: 34%;
  background-color: silver;
  > h2 {
    position: absolute;
    left: 25.35%;
    right: 28.03%;
    top: 8.33%;
    /* bottom: 87.67%; */
    font-family: Heebo;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: normal;
    color: #343434;
  }
  > p {
    position: absolute;
    margin-top: 10%;
    left: 25.51%;
    right: 25.35%;
    top: 14.78%;
    font-family: Heebo;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: normal;
    color: #343434;
  }
`;
const AvailableLocation = styled.div`
  width: 100%;
  height: 34%;
  background-color: yellow;
`;

const ContactActivities = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 25% 25% 25% 25%;
  width: 100%;
  height: 33%;
  background-color: grey;

  > p {
    left: 0.16%;
    right: 0.79%;
    font-family: Heebo;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: normal;
    text-align: center;
    color: #222222;
  }

  > div {
    width: 100%;
    height: 100%;
    > p {
      left: 28.98%;
      right: 50.71%;
      top: 80.44%;
      bottom: 16.89%;
      font-family: Heebo;
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      line-height: normal;
      text-align: center;
      color: #1f1f1f;
    }
  }
`;
const StyleForLoction = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 20%;
  justify-content: center;

  > div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 1%;
    border-bottom: solid black 1px;
    > img {
      width: 17%;
      height: 80%;
    }
    > p {
      align-self: flex-end;
    }
  }
`;

const IconContact = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;
  width: 100%;
  height: 50%;

  > img {
    width: 19%;
    height: 50%;
  }
`;

const CollectionActivities = props => {
  return (
    <StyledActivities>
      <WelcomeText>
        <h2>Welcome Gathering</h2>
        <p>
          We meet new arrivals and collect preferences, interests and
          professional activities. We provide information about Swedish society,
          Swedish culture and lifestyle. We talk about our various activities at
          your location.
        </p>
      </WelcomeText>

      <AvailableLocation>
        <img alt="" src={GatheringImage} />
      </AvailableLocation>

      <ContactActivities>
        <p>Availeble at following Locations</p>

        <StyleForLoction>
          <div>
            <img alt="loco" src={location} />
            <p>Location</p>
          </div>

          <div>
            <img alt="" src={location} />
            <p>Location</p>
          </div>
        </StyleForLoction>

        <p>Contact us to apply or learn more</p>
        <IconContact>
          <img alt="" src={facebook} />
          <img alt="" src={phone} />
          <img alt="" src={whatsapp} />
        </IconContact>
      </ContactActivities>
    </StyledActivities>
  );
};
export default CollectionActivities;
