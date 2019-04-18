import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledPartners = styled.div`
  width: 50%;
  height: 100vh;
  ul {
    list-style: none;
  }
`;

const Partners = props => {
  const [partners, setPartners] = useState(null);

  useEffect(() => {
    fetchPartners();
  }, []);

  const fetchPartners = () => {
    fetch(`http://wordplate.test/wp-json/wp/v2/partners`)
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
