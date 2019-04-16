import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

const LinksForNav = styled.div`
    display: flex;
    position: absolute;
    flex-direction: column;
    height: 90vh;
    width: 30vw;
    font-family: "Heebo";
    font-style: normal;
    font-weight: 300 ;
    font-size: 24px;
    justify-content: space-between;
    text-align: right;
    transform: translate(50%);
  
    /*VAD SKA JAG SÄGA HÄR FÖR ATT DEN SKA TRANSFPORMA*/
  /* ${props => props.transformlinks && `
    transform: translate(0%);
    `} */
    > * {
    text-decoration: none; 
    color: #1F1F1F;
    transition:1s transform;
    /* transform: translate(50%); */
    
    /* ${props => props.transforLinks && `
    transform: translate(0%);
    `} */
    }
    `

const NavLinks = (props) =>{
    console.log(props)
// render(props){
    // console.log(props)

    let delayIncrement = 1;

    return (

    <LinksForNav >
        <Link onClick={props.closeMenu} style={{transform: props.transforlinks ? 'translate(0)' : 'translate(50%)', transitionDelay:`0.${delayIncrement}s`}} to="/">Home</Link>
        {/* <BarOne style={!props.closeMenu ? {transform: "rotate(-45deg) translate(-1vh, 1vw"} : null}/> */}
        <Link onClick={props.closeMenu} style={{transform: props.transforlinks ? 'translate(0)' : 'translate(50%)', transitionDelay:`0.${(delayIncrement++)}s`}} to="/get-involved">Get involved</Link>
        <Link onClick={props.closeMenu} style={{transform: props.transforlinks ? 'translate(0)' : 'translate(50%)', transitionDelay:`0.${(delayIncrement++)}s`}} to="/who-we-are">Who we are</Link>
        <Link onClick={props.closeMenu} style={{transform: props.transforlinks ? 'translate(0)' : 'translate(50%)', transitionDelay:`0.${(delayIncrement++)}s`}} to="/what-we-do">What we do</Link>
        <Link onClick={props.closeMenu} style={{transform: props.transforlinks ? 'translate(0)' : 'translate(50%)', transitionDelay:`0.${(delayIncrement++)}s`}} to="/get-involved">Membership</Link>
        {/* Länka till botten av Get involved */}
        <Link onClick={props.closeMenu} style={{transform: props.transforlinks ? 'translate(0)' : 'translate(50%)', transitionDelay:`0.${(delayIncrement++)}s`}} to="/">Donations</Link>
        {/* Länka till botten av Home */}
        <Link onClick={props.closeMenu} style={{transform: props.transforlinks ? 'translate(0)' : 'translate(50%)', transitionDelay:`0.${(delayIncrement++)}s`}} to="/news">News</Link>
        <Link onClick={props.closeMenu} style={{transform: props.transforlinks ? 'translate(0)' : 'translate(50%)', transitionDelay:`0.${(delayIncrement++)}s`}} to="/contact">Contact</Link>
    </LinksForNav>
    )
}

export default NavLinks