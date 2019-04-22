import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledPartners = styled.div`
  width: 50%;
  height: 100vh;
  ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    margin: 10px;
    padding: 0;

    li {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
      padding: 0;
    }

    img {
      margin: 5px;
      padding: 0;
      max-width: 120px;
      max-height: 110px;
    }
  }
`;

const Partners = props => {
  const [partners, setPartners] = useState(null);

  useEffect(() => {
    fetchPartners();
  }, []);

  const fetchPartners = () => {
    fetch(`http://wordplate.test/wp-json/wp/v2/partners?per_page=40`)
      .then(response => response.json())
      .then(data => {
        setPartners(data);
      })
      .catch(error => console.error(error));
  };
  return (
    <StyledPartners>
      {partners && (
        <ul>
          {partners.map(partner => {
            return (
              <li key={partner.id}>
                <a
                  href={
                    partner.acf ? partner.acf.partners_information.link : ""
                  }
                >
                  <img
                    src={
                      partner.acf.partners_information
                        ? partner.acf.partners_information.logo.sizes.medium
                        : ""
                    }
                    alt="partner-logo"
                  />
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </StyledPartners>
  );
};

export default Partners;
