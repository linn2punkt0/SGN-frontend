import React from 'react';
import styled from "styled-components";

const NextArrow = styled.div`
position: absolute;
color: white;
font-size: 50px;
`

const RightArrow = (props) => {
  return (
    <NextArrow onClick={props.goToNextSlide}>
      <h1> > </h1>
    </NextArrow>
  );
}

export default RightArrow;
