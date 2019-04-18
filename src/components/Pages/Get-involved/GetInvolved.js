import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Find from "./Find";
import PageHeaderText from "../../Global/PageHeaderText";
import ImageContainer from "../../Global/ImageContainer";
import MemberForm from "./MemberForm";
import Gathering from "./Gathering";
import Map from "./Map";
import Footer from "../../Global/Footer";

const StyledGetInvolved = styled.div`
  /* Desktop styling done */
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(6, 100vh);

  .last {
    grid-row: 6 / 7;
  }
`;

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
      <PageHeaderText content={content ? content.header : ""} />
      <ImageContainer background="lightpink" />
      <Find content={content ? content.locations : ""} />
      <Map content={content ? content.locations : ""} />
    {/* <ImageContainer background="blue" /> */}
      <Find content={content ? content.activities : ""} />
      <Gathering />
      {/* <ImageContainer background="red" /> */}
      <MemberForm content={content ? content.membership : ""} />
      <Footer className="last" />
    </StyledGetInvolved>
  );
};

export default GetInvolved;
