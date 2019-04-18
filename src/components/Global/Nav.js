import React, { Component } from "react";
import styled from "styled-components";
import NavBox from "./Navbox";

const StyledNavbar = styled.div`
  z-index: 988;
  position: fixed;
  width: 100vw;
  display: flex;
  justify-content: flex-end;
  pointer-events: none;
`;
const StyledHamburger = styled.div`
  pointer-events: all;
  position: fixed;
  z-index: 999;
  justify-content: center;
  flex-direction: column;
  margin: 6px;
  padding-right: 82px;
  margin-top: 4vh;
  > div {
    transition: 0.6s;
    border-radius: 0.3px;
    margin: 3px 1px;
  }
`
const BarOne = styled.div`
  background-color: black;
  width: 18px;
  height: 2px;
`
const BarTwo = styled.div`
  width: 18px;
  background-color: black;
  height: 2px;
`
const BarThree = styled.div`
  width: 9px;
  background-color: black;
  height: 2px;
  ${StyledHamburger}:hover & {
    transform: translatex(0.6vw);
  }
`
class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true,
      check: false,
      linksShown: false
    };
  }
  toggleHidden = e => {
    this.setState({
      isHidden: !this.state.isHidden,
      check: !this.state.check,
      linksShown: !this.state.linksShown
    });
  };

  render(props) {
    // const MakeNavbarSlide = styled.div``

    return (
      <StyledNavbar>
        <NavBox
          visible={this.state.check}
          close={this.toggleHidden}
          linksnothidden={this.state.linksShown}
        />
        <StyledHamburger onClick={this.toggleHidden}>
          {/* {!this.state.isHidden && <NavBox />} */}

          <BarOne
            style={
              !this.state.isHidden
                ? { transform: "rotate(220deg) translate(-1.3vh, -0.5vw" }
                : null
            }
          />
          <BarTwo
            style={
              !this.state.isHidden
                ? { transform: "rotate(-45deg) translate(-0.4vh, 0.5vw" }
                : null
            }
          />
          <BarThree style={!this.state.isHidden ? { opacity: "0" } : null} />
          {/* {!this.state.isHidden && <NavBox />}  */}
        </StyledHamburger>
      </StyledNavbar>
    );
  }
}

export default Nav;
