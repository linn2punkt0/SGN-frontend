import React from 'react'
import styled from "styled-components"
import { Link } from "@reach/router";

const StyledNav = styled.div `
    display: flex;
    position: absolute;
    flex-direction: column;
    background-color: white;
    transform: translate(100%);
    transition: all 1s ease-in-out;
    width: 40.8vw;
    height: 100vh;
    padding: 3em;
    text-align: right;
    top: -10px;
    font-family: "Heebo";
    font-style: normal;
    font-weight: 300 ;
    font-size: 24px;
    line-height: normal;
    background-color: grey;
    justify-content: space-between;
    color: #1F1F1F;

    ${props => props.transformMenu && `
    transform: translate(0%);
    `}
    > * {
       text-decoration: none; 
       color: black; 
    } 
`;



const NavBox = (props) => {
    

    return(
           
        //if link clicked go back to old style
    <StyledNav transformMenu={props.visible}>
    
        <Link onChange={props.transformMenu} to="/">Home</Link>
        <Link to="/get-involved">Get involved</Link>
        <Link to="/who-we-are">Who we are</Link>
        <Link to="/what-we-do">What we do</Link>
        <Link to="/get-involved">Membership</Link>
        {/* Länka till botten av Get involved */}
        <Link to="/">Donations</Link>
        {/* Länka till botten av Home */}
        <Link to="/news">News</Link>
        <Link to="/contact">Contact</Link>
    
    </StyledNav>
    )
}
export default NavBox