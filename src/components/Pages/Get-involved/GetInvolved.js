import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Find from "./Find";
import PageHeaderText from "../../Global/PageHeaderText";
import ImageContainer from "../../Global/ImageContainer";
import MemberForm from "./MemberForm";
import Gathering from "./Gathering";
import Map from "./Map";
import Footer from "../../Global/Footer";
import Container from "../../Global/Container";
import Map2 from "./Map2.js";

const StyledGetInvolved = styled.div``;

const GetInvolved = props => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    fetchContent();
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
        <ImageContainer background="lightpink" />
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
