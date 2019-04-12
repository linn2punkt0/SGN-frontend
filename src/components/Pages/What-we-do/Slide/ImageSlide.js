import React, { Component } from 'react'
import styled from "styled-components";

const ContainerImageSlide = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    overflow-x: hidden;
    display: flex;
    background-color: gray;
    align-items: center;
    /* background-size: cover; */
    
`

const ImageContainer = styled.div `
/* width: 50vw;
transform: translateX(50%); */
position: absolute;
width: 100%;
height: 100%;
opacity: 0;
transition: 0.4s ease-in-out;

  /* opacity: ${
      props => props.active ?
        "1" :
          "none"
  }; */
    &.current{
        opacity: 1;
        background-color: red;
        width: 50vw;
    }
`;


const ImageButton = styled.div`
width: 100px;
height: 100px;
background-color: black;`


class ImageSlide extends Component {
    constructor(){
        super()
    this.state = {
        clickedImage: false
    }
}

whenClicked = () => {
    this.setState({
        clickedImage: !this.state.isHidden, 
        active: false
    })
}
  render() {

    return (

     <ContainerImageSlide>

         {/* <div className="button">   
     <ImageButton onClick={this.whenClicked}> </ImageButton>
     </div> */}
       {/* <ImageContainer className="current" >HEJ</ImageContainer>
      <ImageContainer className={ this.state.active ? "slide current" : "slide" } >KORV</ImageContainer>
      <ImageContainer className={ this.state.active ? "slide current" : "slide" } >LOL</ImageContainer>
      <ImageContainer className={ this.state.active ? "slide current" : "slide" } >KAK</ImageContainer> */}


      </ContainerImageSlide>

    )
  }
}
export default ImageSlide