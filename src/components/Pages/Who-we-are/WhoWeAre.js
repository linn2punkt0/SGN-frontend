import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./../Contact/Header";
import Text from "./Text";
import PageHeaderText from "../../Global/PageHeaderText";

const StyledWhoWeAre = styled.div`
  @media (min-width: 769px) {
    .wrapper {
      display: grid;
      grid-template-columns: 1.7fr 1.7fr;
      height: 100vh;
      margin-bottom: 100px;
    }
    .wrapper2 {
      display: grid;
      grid-template-columns: 1.7fr 1.7fr;
      .firstImg {
        height: 100vh;
        width: 50vw;
        background: url('https://i.ibb.co/k42yQCz/img1.png" alt="img1"');
      }
      .secondImg {
        height: 100vh;
        width: 50vw;
        background: url('https://i.ibb.co/1qycyjY/img2.png" alt="img2"');
      }
      h1,
      h4,
      p {
        margin-left: 5vw;
        margin-right: 5vw;
      }
    }
    .logo {
      justify-self: flex-end;
      max-height: 449px;
    }
    h6 {
      font-size: 64px;
      font-weight: 300;
    }
  }

  @media (min-width: 768) and (orientation: landscape) {
  }

  @media (min-width: 320) and (max-width: 1024px) and (orientation: landscape) {
  }

  @media (min-width: 320px) and (max-width: 767px) {
    .wrapper {
      display: flex;
      flex-direction: column-reverse;
      .logo {
        height: 60vh;
      }
    }
    .wrapper2 {
      display: flex;
      flex-direction: column-reverse;
      h1,
      h4,
      p {
        margin-left: 5vw;
        margin-right: 5vw;
        max-width: 80%;
      }
      .firstImg {
        height: 50vh;
        width: 100vw;
        background: url('https://i.ibb.co/k42yQCz/img1.png" alt="img1"');
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
  const [partners, setPartners] = useState(null);

  useEffect(() => {
    fetchPartners();
    fetchContent();
  }, []);

  const fetchPartners = () => {
    fetch(`http://wordplate.test/wp-json/wp/v2/partners`)
      .then(response => response.json())
      .then(data => {
        setPartners(data);
      })
      .catch(error => console.error(error));
  };

  // Fetch Who-we-are from API and set all custom-field-content to content-hook
  const [content, setContent] = useState(null);
  //   {
  //     content && console.log(content.header);
  //   }
  const fetchContent = () => {
    fetch(`http://wordplate.test/wp-json/wp/v2/pages?slug=who-we-are`)
      .then(response => response.json())
      .then(data => {
        // console.log(data[0].acf);
        setContent(data[0].acf);
      })
      .catch(error => console.error(error));
  };

  return (
    <StyledWhoWeAre>
    <Header />
      <div className="wrapper">
        <PageHeaderText content={content ? content.header : ""} />
        <img
          className="logo"
          src="https://i.ibb.co/1mk4H7L/who-we-are.png"
          alt="who-we-are"
        />
      </div>
      <div className="wrapper2">
        <Text content={content ? content.our_cause : ""} />
        <div className="firstImg">
          <h1>{content ? content.our_cause.quote : "Some text"}</h1>
        </div>
      </div>
      <div className="wrapper2">
        <Text content={content ? content.our_history : ""} />
        <div className="secondImg">
          <h1>{content ? content.our_history.quote : "Some text"}</h1>
        </div>
      </div>
    </StyledWhoWeAre>
  );
};

export default WhoWeAre;
