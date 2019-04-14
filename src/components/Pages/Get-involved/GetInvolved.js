import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Find from "./Find";
import PageHeaderText from "../../Global/PageHeaderText";
import ImageContainer from "../../Global/ImageContainer";

const StyledGetInvolved = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(5, 100vh);
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
      {content && <PageHeaderText content={content.header} />}
      <ImageContainer background="lightpink" />
      {content && <Find content={content.locations} />}
      <ImageContainer background="blue" />
      {content && <Find content={content.activities} />}
      <ImageContainer background="green" />
    </StyledGetInvolved>
  );
};

export default GetInvolved;
