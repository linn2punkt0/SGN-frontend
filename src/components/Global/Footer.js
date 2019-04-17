import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FbLogo from "../ikoner/facebook.svg";
import InstagramLogo from "../ikoner/instagram.svg";
import TwitterLogo from "../ikoner/twitter.svg";
import WhatsAppLogo from "../ikoner/whatsapp.svg";
import EmailLogo from "../ikoner/email.svg";



const StyledFooter = styled.div`
@media (min-width: 769px) {
  grid-column: 1 / 3;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-weight: 300;
  font-size: 16px;
  background-color: red;
  height: 30vh;
  width: 100vw;
  position: absolute;
   div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  a {
    color: #1f1f1f;
    text-decoration: none;
    /* Temporary margin */
    margin: 10px;
  }
 img {
   height: 10vh;
 }
}
@media (min-width: 320px) and (max-width: 767px) {
  grid-column: 1 / 3;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-weight: 300;
  font-size: 16px;
  background-color: red;
  height: 30vh;
  width: 100vw;
  position: absolute;
  a {
    color: #1f1f1f;
    text-decoration: none;
    /* Temporary margin */
    // margin: 10px;
  }
  p {
    /* Temporary margin */
    margin: 10px;
  }
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  img {
    height: 5vh;
  }
}
`;

const Footer = props => {
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    fetchFooter();
  }, []);

  const fetchFooter = () => {
    fetch(`http://wordplate.test/wp-json/wp/v2/footers`)
      .then(response => response.json())
      .then(data => {
        setFooterData(data[0].acf);
      })
      .catch(error => console.error(error));
  };

  return (
    <StyledFooter>
      {footerData && (
        <div>
          <p>Insert language selector here</p>
          <p>GDPR</p>
          <a href={footerData.facebook}><img src={FbLogo} /></a>
          <a href={footerData.twitter}><img src={TwitterLogo} /></a>
          <a href=""><img src={WhatsAppLogo} /></a>
          <a href={footerData.instagram}><img src={InstagramLogo} /></a>
          <p>{footerData.email ? footerData.email : "email@email.com"}<img src={EmailLogo} /></p>
          <p>{footerData.phone ? footerData.phone : "1234567"}</p>
        </div>
      )}
    </StyledFooter>
  );
};

export default Footer;
