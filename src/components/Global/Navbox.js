import React, { Component } from 'react'
import styled from "styled-components"
import { Link } from "@reach/router";
import NavLink from "./Link"


const StyledNav = styled.div `
    /* display: flex;
    position: absolute;
    flex-direction: column; */
    background-color: white;
    transform: translate(100%);
    transition: all 1s ease-in-out;
    width: 45vw;
    height: 95vh;
    padding-right: 5vw;
    padding-top: 5vh;
    padding-bottom: 5vh;
    text-align: right;
    top: -10px;
    line-height: normal;
    background-color: white;
    justify-content: space-between;
    color: #1F1F1F;
    ${props => props.transformMenu && `
    transform: translate(0%);
    `}
       /* transform: translate(50%); */
    /* ${props => props.transforLinks && `
    transform: translate(0%);
    `} */
    
`;
//SÄTT IN STATES

const NavBox = (props) => {

    return(
            //if link clicked go back to old style
        <StyledNav transformMenu={props.visible}>

        <NavLink transforlinks={props.linksnothidden} closeMenu={props.close}  />
        

        </StyledNav>
    )
    
}
export default NavBox