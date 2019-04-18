import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Text from "./Text";
import PageHeaderText from "../../Global/PageHeaderText";
import Container from "../../Global/Container";
import ContactUsFooter from "../../Global/ContactUsFooter";
import Partners from "./Partners";
import PartnerText from "./PartnerText";

const StyledWhoWeAre = styled.div`
  @media (min-width: 769px) {
      .firstImg {
        height: 100vh;
        width: 50vw;
        background: url('https://i.ibb.co/k42yQCz/img1.png" alt="img1"');
        h1 {
          color: white;
        }
      }
      .secondImg {
        height: 100vh;
        width: 50vw;
        background: url('https://i.ibb.co/1qycyjY/img2.png" alt="img2"');
      }             
    .logo {
      height: 100h;
      width: 50vw;
      max-height: 449px;
      background: url("https://i.ibb.co/1mk4H7L/who-we-are.png");
      background-position: center;
      background-size: contain;
    }
  }

  @media (min-width: 768) and (orientation: landscape) {
  }

  @media (min-width: 320) and (max-width: 1024px) and (orientation: landscape) {
  }

  @media (min-width: 320px) and (max-width: 767px) {                                
      .firstImg {
        height: 50vh;
        width: 100vw;
        background: url('https://i.ibb.co/k42yQCz/img1.png" alt="img1"');
        h1 {
          color: white;
        }
      }
      .secondImg {
        height: 50vw;
        width: 100vw;
        background: url('https://i.ibb.co/1qycyjY/img2.png" alt="img2"');
      }
    }
  }
`;

const WhoWeAre = props => {
  // Fetch Who-we-are from API and set all custom-field-content to content-hook
  const [content, setContent] = useState(null);
  useEffect(() => {
    fetchContent();
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
      <Container>
        <PageHeaderText content={content ? content.header : ""} />
        <div className="logo" />
      </Container>
      <Container>
        <Text content={content ? content.our_cause : ""} />
        <div className="firstImg">
          <h1>{content ? content.our_cause.quote : "Some text"}</h1>
        </div>
      </Container>
      <Container>
        <Text content={content ? content.our_history : ""} />
        <div className="secondImg">
          <h1>{content ? content.our_history.quote : "Some text"}</h1>
        </div>
      </Container>
      <Container>
        <PartnerText content={content ? content.partnerships : ""} />
        <Partners />
      </Container>
      <Container>Awards</Container>
      <ContactUsFooter />
    </StyledWhoWeAre>
  );
};

export default WhoWeAre;
