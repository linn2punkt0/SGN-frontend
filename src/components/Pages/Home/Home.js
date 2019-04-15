import React, { Component, useState, useEffect } from "react";
import styled from "styled-components";
import ImageContainer from "../../Global/ImageContainer";
import TextContainer from "./TextContainer.js";
import PageHeaderText from "../../Global/PageHeaderText";
import ContactContainer from "./Contact.js";
// import * as Scroll from 'react-scroll';
// import WhenInView from "./WhenInView"

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
`;

// let scroll = Scroll.animateScroll;

// scroll.scrollTo('myScrollToElement', {
//   duration: 1500,
//   delay: 100,
//   smooth: true,
//   containerId: 'ContainerElementID',
//   offset: 50, // Scrolls to element + 50 pixels down the page

// })

const Home = props => {
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

  // Fetch home-page from api and set custom-field-content to content-hook.
  const [content, setContent] = useState(null);

  console.log(content);

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = () => {
    fetch(`http://wordplate.test/wp-json/wp/v2/pages?slug=home`)
      .then(response => response.json())
      .then(data => {
        setContent(data[0].acf);
      })
      .catch(error => console.error(error));
  };

  return (
    // <WhenInView>

    // {({ isInView }) =>
    <StyledHome>
      <PageHeaderText content={content ? content.header : ""} />
      <ImageContainer background="pink" />
      <TextContainer content={content ? content.get_involved : ""} />
      <ImageContainer background="#2703BB" />
      <TextContainer content={content ? content.who_we_are : ""} />
      <ImageContainer background="black" />
      <TextContainer content={content ? content.what_we_do : ""} />
      <ImageContainer background="lightgreen" />
      <ContactContainer
        title="Wanna help out?"
        textContact="Låna ut lokal? Donera pengar? Material?"
      />
    </StyledHome>
    // }
    // </WhenInView>
  );
};

export default Home;
