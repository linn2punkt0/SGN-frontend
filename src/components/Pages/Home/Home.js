import React, { Component } from "react";
import styled from "styled-components"
import ImageContainer from "../../Global/ImageContainer"
import TextContainer from "./TextContainer.js"
import PageHeaderText from "../../Global/PageHeaderText"
import ContactContainer from "./Contact.js"
import * as Scroll from 'react-scroll';
import WhenInView from "./WhenInView"


const StyledHome = styled.div`
position: relative;
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 100vh 100vh 100vh 100vh 100vh;
background-attachment: fixed;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
overflow-x: hidden;

`

// let scroll = Scroll.animateScroll;

// scroll.scrollTo('myScrollToElement', {
//   duration: 1500,
//   delay: 100,
//   smooth: true,
//   containerId: 'ContainerElementID',
//   offset: 50, // Scrolls to element + 50 pixels down the page
  
// })

class Home extends Component {
    constructor(props) {
        super();
        this.state = {
          show: false
        }
        // this.showNotification = this.showNotification.bind(this);
      }

    //   showNotification() {
    //   // You can use redux for this.
    //   this.setState({
    //     show: true,
    //   });
    //     setTimeout(() => {
    //       this.setState({
    //         show: false,
    //       });
    //     }, 1000);
    // }

render(props){
  
  return (

    // <WhenInView>

    // {({ isInView }) => 
    <StyledHome>

      <PageHeaderText />
      <ImageContainer background="pink"/>
      <TextContainer title="Get Involved"/>
      <ImageContainer background="#2703BB"/>
      <TextContainer title="Who We Are"/>
      <ImageContainer background="black"/>
      <TextContainer title="What we do / stories"/>
      <ImageContainer background="lightgreen"/>
      <ContactContainer title="Wanna help out?" textContact="Låna ut lokal? Donera pengar? Material?"/>

    </StyledHome>
  // }
  // </WhenInView>
  )
}
    }

export default Home;
