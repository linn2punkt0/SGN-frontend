import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Person from "./Person";
import Text from "./Text";
import Header from "./Header";
import Footer from "../../Global/Footer";

const StyledContact = styled.div`
  .contactLogo {
    padding-left: 5vw;
  }
    .wrapper {
        padding-right: 5vw;
        padding-left: 5vw;
        display: flex;
        flex-direction: column-reverse;
        margin-bottom: 10vh;
        .inline {
            display:block;
            max-width: 100%;
        }
        img {
            position: relative;
            left: 40vh;
            max-width: 50%;
            margin-bottom: 5vh;
        }
    }
    .personContainerBig, .personContainerSmall {

      margin-top: 30vh;
          
        h1, h4, p {
          margin-right: 5vw;
          margin-left: 5vw;
          margin-bottom: 5vh;
        }
        h1 {
            margin-bottom: 0;
        }
    }
    .row  {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 60vh;

        h6 {
            font-size: 24px;
            font-weight: 300;
        }
    }

@media (min-width: 769px) {
    .wrapper {
        display: grid;
        grid-template-columns: 1.7fr 1.7fr;
        grid-template-rows: repeat(1, 100vh);
        margin-top: 20vh;
        margin-bottom: 10vh;
        img {
          position: unset;
        }
        
    }
    .personContainerBig {

      display: grid;
      grid-template-columns: 1.7fr 1.7fr;
    }
    .personContainerSmall {
        margin-top: 20vh;

        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        
        img {
            margin-left: 1vw;
            margin-right: 1vw;
            justify-self: center;
            position: unset;
        }
    }
    .row {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        h6 {
            font-size: 64px;
            font-weight: 300;
        }
    }
    img {
        justify-self: flex-end;
        max-height: 449px;
    }
    
}
`;

const Contact = props => {
  const [contacts, setContacts] = useState([]);

  // console.log(contacts);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = () => {
    fetch(`http://wordplate.test/wp-json/wp/v2/contacts`)
      .then(response => response.json())
      .then(data => {
        setContacts(data);
      })
      .catch(error => console.error(error));
  };

  return (
    <StyledContact>
      <div>
        <Header />
      </div>
      <div className="wrapper">
        <Text />
        <img src="https://i.ibb.co/dc55VRx/logo.png" alt="logo" />
      </div>
      <div className="personContainerBig">
        {contacts.slice(0, 2).map(person => {
          // console.log(person.acf.information.image);
          // console.log(person.id)
          return (
            <Person
              key={person.id ? person.id : ""}
              contactName={person.title.rendered ? person.title.rendered : ""}
              contactImage={
                person.acf.information.image
                  ? person.acf.information.image.sizes.large
                  : ""
              }
              contactDescription={
                person.acf.information.description
                  ? person.acf.information.description
                  : ""
              }
              contactEmail={
                person.acf.information.email ? person.acf.information.email : ""
              }
              contactPhone={
                person.acf.information.phone ? person.acf.information.phone : ""
              }
            />
          );
        })}
      </div>
      <div className="personContainerSmall">
        {contacts.slice(2).map(person => {
          // console.log(person.id)
          return (
            <Person
              key={person.id ? person.id : ""}
              contactName={person.title.rendered ? person.title.rendered : ""}
              contactImage={
                person.acf.information.image
                  ? person.acf.information.image.sizes.large
                  : ""
              }
              contactDescription={
                person.acf.information.description
                  ? person.acf.information.description
                  : ""
              }
              contactEmail={
                person.acf.information.email ? person.acf.information.email : ""
              }
              contactPhone={
                person.acf.information.phone ? person.acf.information.phone : ""
              }
            />
          );
        })}
      </div>
      <div className="row">
        <h6>info@supportgroup.com</h6>
      </div>
      <div>
        <Footer />
      </div>
    </StyledContact>
  );
};

export default Contact;
