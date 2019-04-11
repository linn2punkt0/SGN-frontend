import React, { Component } from 'react'
import styled from "styled-components";

const ContainerImageSlide = styled.div`
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
    display: flex;
    background-color: gray;
    align-items: center;
    /* background-size: cover; */
    
`

const ImageContainer = styled.div `
width: 50vw;
transform: translateX(50%);
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
        clickedImage: !this.state.isHidden
    })
}
  render() {

    return (

     <ContainerImageSlide>

         <div className="button">
     <ImageButton onClick={this.whenClicked}> </ImageButton>
     </div>
        
       <ImageContainer>HEJ</ImageContainer>
      <ImageContainer style={!this.state.clickImage? {transform: "translateX(100%)"} : null}>KORV</ImageContainer>
      <ImageContainer>LOL</ImageContainer>
      <ImageContainer>KAK</ImageContainer>
      </ContainerImageSlide>

    )
  }
}
export default ImageSlide