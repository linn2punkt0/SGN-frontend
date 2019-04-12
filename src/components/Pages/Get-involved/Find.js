import React from "react";
import styled from "styled-components";
import Locations from "./Locations";

const StyledFind = styled.div`
  margin-left: 82px;
  position: relative;
  h4 {
    font-weight: 300;
    font-size: 36px;
    margin: 40px 0 2px 0;
  }
  .grey {
    margin: 0;
    color: rgba(31, 31, 31, 0.45);
  }
  .startYourOwn {
    display: flex;
    flex-direction: row;
    position: absolute;
    bottom: 40px;
    h5 {
      font-weight: 300;
      font-size: 24px;
      color: rgba(113, 113, 113, 0.7);
      margin: 0;
    }
    a h5 {
      color: #1f1f1f;
      text-decoration: underline;
      margin-left: 10px;
      font-weight: 400;
    }
  }
`;

const Find = props => {
  return (
    <StyledFind>
      <h4>Find us here/Activities</h4>
      <h4 className="grey">These are our branches/Activities</h4>
      <Locations />
      <div className="startYourOwn">
        <h5>No branch/Got an idea?</h5>
        <a>
          <h5>Start one/ Start it yourself!</h5>
        </a>
      </div>
    </StyledFind>
  );
};

export default Find;
