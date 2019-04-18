import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FbLogo from "../ikoner/facebook.svg";
import InstagramLogo from "../ikoner/instagram.svg";
import TwitterLogo from "../ikoner/twitter.svg";
import WhatsAppLogo from "../ikoner/whatsapp.svg";
import EmailLogo from "../ikoner/email.svg";
import PhoneLogo from "../ikoner/phone.svg";

const StyledFooter = styled.div`
  @media (min-width: 769px) {
    grid-column: 1 / 3;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    font-weight: 300;
    font-size: 16px;
    height: 30vh;
    width: 100%;
    div {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
    p {
      margin: 10px;
    }
    a {
      color: #1f1f1f;
      text-decoration: none;
      /* Temporary margin */
      margin: 10px;
    }
    img {
      height: 24px;
    }
  }
  @media (min-width: 320px) and (max-width: 767px) {
    a {
    }
    p {
    }
    div {
    }
    img {
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
          <div>
            <p>Language</p>
            <p>GDPR</p>
          </div>
          <div>
            <a href={footerData.facebook}>
              <img src={FbLogo} />
            </a>
            <a href={footerData.twitter}>
              <img src={TwitterLogo} />
            </a>
            <a href="">
              <img src={WhatsAppLogo} />
            </a>
            <a href={footerData.instagram}>
              <img src={InstagramLogo} />
            </a>
          </div>
          <div>
            <img src={EmailLogo} />
            <p>{footerData.email ? footerData.email : "email@email.com"}</p>
            <img src={PhoneLogo} />
            <p>{footerData.phone ? footerData.phone : "1234567"}</p>
          </div>
        </div>
      )}
    </StyledFooter>
  );
};

export default Footer;
