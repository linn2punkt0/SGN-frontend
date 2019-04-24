import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

const LinksForLangNav = styled.div`
    display: flex;
    position: absolute;
    flex-direction: column;
    height: 40vh;
    width: 30vw;
    font-family: "Heebo";
    font-style: normal;
    font-weight: 300 ;
    font-size: 24px;
    justify-content: space-between;
    text-align: right;
    transform: translate(50%);
    margin-top: 135px;
    > * {
    text-decoration: none; 
    color: #1F1F1F;
    transition:1s transform;
    }
     @media (min-width: 320px) and (max-width: 767px) {
      transform: translate(-5%);
      top: -3%;
      width: 100vw;
      height: 60vh;
      font-family: Heebo;
      font-style: normal;
      font-weight: 300;
      font-size: 24px;
      line-height: normal;
      text-align: right;

color: #1F1F1F;
      
     }
    `;

const LangNavLink = props => {
  let delayIncrement = 1;
  return (
    <LinksForLangNav>
      <Link
        onClick={props.closeMenu}
        style={{
          transform: props.transforlinks ? "translate(-110%)" : "translate(50%)",
          transitionDelay: `0.${delayIncrement}s`
        }}
        to="/"
      >
        ENGLISH
      </Link>
      {/* <BarOne style={!props.closeMenu ? {transform: "rotate(-45deg) translate(-1vh, 1vw"} : null}/> */}
      <Link
        onClick={props.closeMenu}
        style={{
          transform: props.transforlinks ? "translate(-110%)" : "translate(50%)",
          transitionDelay: `0.${delayIncrement++}s`
        }}
        to="/"
      >
       SWEDISH
      </Link>
      <Link
        onClick={props.closeMenu}
        style={{
          transform: props.transforlinks ? "translate(-110%)" : "translate(50%)",
          transitionDelay: `0.${delayIncrement++}s`
        }}
        to="/"
      >
        SOMALI
      </Link>
      <Link
        onClick={props.closeMenu}
        style={{
          transform: props.transforlinks ? "translate(-110%)" : "translate(50%)",
          transitionDelay: `0.${delayIncrement++}s`
        }}
        to="/"
      >
        ARABIC
      </Link>
      <Link
        onClick={props.closeMenu}
        style={{
          transform: props.transforlinks ? "translate(-110%)" : "translate(50%)",
          transitionDelay: `0.${delayIncrement++}s`
        }}
        to="/"
      >
        FRANÇAIS
      </Link>
    </LinksForLangNav>
  );
};

export default LangNavLink;
