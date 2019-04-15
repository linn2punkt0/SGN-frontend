import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  grid-column: 1 / 3;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-weight: 300;
  font-size: 16px;
  a {
    color: #1f1f1f;
    text-decoration: none;
    /* Temporary margin */
    margin: 10px;
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
          <a href={footerData.facebook}>Facebook</a>
          <a href={footerData.twitter}>Twitter</a>
          <a href="">What's app</a>
          <a href={footerData.instagram}>Instagram</a>
          <p>{footerData.email ? footerData.email : "email@email.com"}</p>
          <p>{footerData.phone ? footerData.phone : "1234567"}</p>
        </div>
      )}
    </StyledFooter>
  );
};

export default Footer;
