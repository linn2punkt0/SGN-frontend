import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Text from "./Text";
import PageHeaderText from "../../Global/PageHeaderText";
import Container from "../../Global/Container";
import Container2 from "./Container2";
import ContactUsFooter from "../../Global/ContactUsFooter";
import Partners from "./Partners";
import PartnerText from "./PartnerText";
import AwardsText from "./AwardsText";
import Awards from "./Awards";
import ImageOne from "../../../images/section-1.png";
import ImageTwo from "../../../images/section-2.png";
import HeaderImage from "../../../images/who-we-are_hero.png";

const StyledWhoWeAre = styled.div`
  overflow-x:hidden;
    .quote {
      max-width: 500px;
      margin-top: 80vh;
      margin-left: 20vh;
      font-weight: 500;
      font-size: 16px;
      color: white;
    }
    .firstImg {
      height: 100vh;
      width: 50vw;
      background: url(${ImageOne});
      background-position: center;
      background-size: cover;
    }
    .secondImg {
      height: 100vh;
      width: 50vw;
      background: url(${ImageTwo});
      background-position: center;
      background-size: cover;
    }
    .logo {
      height: 100vh;
      width: 50vw;
      max-height: 449px;
      margin-top: 10vh;
      background: url(${HeaderImage});
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
    }
  
  @media (min-width: 320px) and (max-width: 767px) {
    display: flex;
    flex-direction: column;

    .logo {
      display: none;
    }
    h1.quote {
      /*padding-left: 82px;*/
      color: white;
      font-weight: 500;
      font-size: 16px;
    }
    h5 {
      padding-top: 5vh;
    }
    .firstImg {
      /*height: 50vh;*/
      width: 100vw;
    }
    .secondImg {
      padding-bottom: 3vh;
      /*height: 50vh;*/
      width: 100vw;
      display: flex;
      flex-direction: column-reverse;
    }
    p {
      height: 50vh;
      display: flex;
      flex-direction: column;
      font-size: 16px;
    }
    div {
      width: 100%;
    }
     ul {
      display: grid;
      grid-template-columns: repeat(1,1fr);
    }
  }
`;

const WhoWeAre = props => {
  // Fetch Who-we-are from API and set all custom-field-content to content-hook
  const [content, setContent] = useState(null);
  useEffect(() => {
    fetchContent();
    window.scrollTo(0, 0);
  }, []);
  const fetchContent = () => {
    fetch(`http://wordplate.test/wp-json/wp/v2/pages?slug=who-we-are`)
      .then(response => response.json())
      .then(data => {
        setContent(data[0].acf);
      })
      .catch(error => console.error(error));
  };

  return (
    <StyledWhoWeAre>
      <Container2>
        <PageHeaderText content={content ? content.header : ""} />
        <div className="logo" />
      </Container2>
      <Container>
        <Text content={content ? content.our_cause : ""} />
        <div className="firstImg">
          <h1 className="quote">
            {content ? content.our_cause.quote : "Some text"}
          </h1>
        </div>
      </Container>
      <Container>
        <Text content={content ? content.our_history : ""} />
        <div className="secondImg">
          <h1 className="quote">
            {content ? content.our_history.quote : "Some text"}
          </h1>
        </div>
      </Container>
      <Container>
        <PartnerText content={content ? content.partnerships : ""} />
        <Partners />
      </Container>
      <Container>
        <Awards />
        <AwardsText content={content ? content.awards : ""} />
      </Container>
      <ContactUsFooter />
    </StyledWhoWeAre>
  );
};

export default WhoWeAre;
