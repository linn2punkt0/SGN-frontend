import React, { Component } from 'react';
import styled from "styled-components";
import Slide from "./Slide"
import RightArrow from "./RightArrow"

const SliderContainer = styled.div `
    width: 100%;
    height: 100vh;
    position: relative;
    /* overflow-x: hidden; */
    display: flex;
    align-items: center;
    /* background-size: cover; */  
`
class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
        images: [
             "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
           "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"
        ],
        currentIndex: 0,
        translateValue: 0
    }
    }

    goToNextSlide = () => {
        
    if(this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        
        currentIndex: 0,
        translateValue: 0
      })
    }
    // This will not run if we met the if condition above
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + - (this.slideWidth())
    }));
  }

    slideWidth = () => {
     return document.querySelector('.slide').clientWidth
  }



  render(props) {
      console.log(this.state.images)
      
    return (
      <SliderContainer 
      // style={{transform: `translateX(${this.state.translateValue}px)`,
      //       transition: 'transform ease-out 0.45s',
      //       }}
            >
        {
          this.state.images.map((image, i) => ( 
        
            <Slide key={i} image={image}/>
          ))
         
    }

          <RightArrow goToNextSlide={this.goToNextSlide} />
	
      </SliderContainer>
    );
  }
}

export default Slider
