import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Find from "./Find";
import PageHeaderText from "../../Global/PageHeaderText";
import MemberForm from "./MemberForm";
import Gathering from "./Gathering";
import Footer from "../../Global/Footer";
import Container from "../../Global/Container";
import Map2 from "./Map2.js";
import HeaderImage from "../../../images/get-involved_hero.png";

const StyledGetInvolved = styled.div`
  max-width: 100vw;

  .header-image {
    height: 100vh;
    width: 50%;
    max-height: 449px;
    margin-top: 10vh;
    background: url(${HeaderImage});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

const GetInvolved = props => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    fetchContent();
    window.scrollTo(0, 0);
  }, []);

  const fetchContent = () => {
    fetch(`http://wordplate.test/wp-json/wp/v2/pages?slug=get-involved`)
      .then(response => response.json())
      .then(data => {
        setContent(data[0].acf);
      })
      .catch(error => console.error(error));
  };

  return (
    <StyledGetInvolved>
      <Container>
        <PageHeaderText content={content ? content.header : ""} />
        <div className="header-image" />
      </Container>
      <Container>
        <Find content={content ? content.locations : ""} />
        <Map2 content={content ? content.locations : ""} />
      </Container>
      <Container>
        <Find content={content ? content.activities : ""} />
        <Gathering />
      </Container>
      <MemberForm content={content ? content.membership : ""} />
      <Footer className="last" />
    </StyledGetInvolved>
  );
};

export default GetInvolved;
