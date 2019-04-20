import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PageHeaderText from "../../Global/PageHeaderText";
import ImageContainer from "../../Global/ImageContainer";
import Person from "./Person";
import Text from "./Text";
import Form from "./Form";
import Header from "./Header";
import Footer from "../../Global/Footer";

const StyledContact = styled.div`

@media (min-width: 769px) {
    .wrapper {
        display: grid;
        margin-left: 5vw;
        margin-right: 5vw;
        grid-template-columns: 1.7fr 1.7fr;
        grid-template-rows: repeat(1, 100vh);
        margin-top: 20vh;
        margin-bottom: 10vh;
        
    }
    .personContainerBig {
      margin-left: 5vw;
      margin-right: 5vw;
      display: grid;
      grid-template-columns: 1.7fr 1.7fr;
    }
    .personContainerSmall {
        margin-top: 20vh;
        margin-left: 4vw;
        margin-right: 4vw;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        
        img {
            margin-left: 1vw;
            margin-right: 1vw
            height: 300px !important;
            justify-self: center;
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

@media (min-width: 768) and (orientation: landscape) {
}

@media (min-width: 320) and (max-width: 1024px) and (orientation: landscape) {
}

@media (min-width: 320px) and (max-width: 767px) {
    .wrapper {
        display: flex;
        flex-direction: column-reverse;
        margin-right: 5vw;
        margin-left: 5vw;
        margin-bottom: 10vh;
        .inline {
            display:block;
            width: 100%;
        }
        img {
            height: 400px;
            margin-bottom: 5vh;
        }
    }
    .personContainerBig, .personContainerSmall {
        h1, h4, p {
            margin-left: 5vw;
            margin-right: 5vw;
            max-width: 80%;
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
        height: 30vh;
        h6 {
            font-size: 24px;
            font-weight: 300;
        }
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
  const displayContacts = () => {};

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
