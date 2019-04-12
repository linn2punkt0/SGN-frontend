import React from 'react'
import styled from "styled-components";


const ImageContainer = styled.div `
/* width: 50vw; */
/* display: flex;
flex-direction: row; */
/* opacity:0.3; */
position: absolute;
/* width: 100%; */
width: 100%;
height: 100%;


`

const Slide = ({ image }) => {
    
    const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    // backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%',
    
    
  }
 
  return <ImageContainer className="slide" style={styles}></ImageContainer>
  
}

export default Slide