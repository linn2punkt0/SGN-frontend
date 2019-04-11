import React, { Component } from "react";
import styled from "styled-components";
import NavBox from "./Navbox"

const StyledNavbar = styled.div`
overflow-x:hidden;
z-index:999;
position: fixed;
width: 100vw;
display: flex;
justify-content: flex-end;
`
 const StyledHamburger = styled.div`  
  position: fixed;
  z-index: 999;
  justify-content: center;
  flex-direction: column;
  margin: 6px;
  padding-right: 20px;
    > div {
      transition: 0.6s;
      border-radius: 2px;
      margin: 3px 1px;
    }
 `
  const BarOne = styled.div`
  background-color: black;
  width: 30px;
  height: 3px; 
  `
  
  const BarTwo = styled.div `
  width: 30px;
  background-color: black;
  height: 3px;
  `
  const BarThree = styled.div  `
  width: 15px;
  background-color: black;
  height: 3px;
  `

  
class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isHidden: true,
    }
}
    toggleHidden =() => {
        this.setState({
           isHidden: !this.state.isHidden,
        })
    }

render() {
  return (

    <StyledNavbar>
      <StyledHamburger onClick={this.toggleHidden} >
   
        <BarOne style={!this.state.isHidden ? {transform: "rotate(-45deg) translate(-9px, 6px)"} : null}/>
        <BarTwo style={!this.state.isHidden ? {opacity: "0"} : null}/>
        <BarThree style={!this.state.isHidden ? {transform: "rotate(45deg) translate(-1px, -1px)", width: "30px"} : null}/>
        {!this.state.isHidden && <NavBox />} 
      </StyledHamburger>
    </StyledNavbar>
    )
  }
}

export default Nav;

