import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PageHeaderText from "../../Global/PageHeaderText";
import ImageContainer from "../../Global/ImageContainer";
import Person from "./Person";
import Text from "./Text";
import Form from "./Form";
// import Logo from "../../assets/logo.png"; // works locally atm
import Footer from "../../Global/Footer";

const StyledContact = styled.div`

@media (min-width: 769px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, 100vh);
}

@media (min-width: 320) and (max-width: 1024px) and (orientation: landscape) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 100vh);
}
@media (min-width: 768) and (orientation: landscape) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, 100vh);
}

@media (min-width: 320px) and (max-width: 767px) { 
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 100vh);
}
img {
    justify-self: center;
    width: 716px;
    height: 449px;
}
p {
    height: 106px;
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
            <Text />

     
            {contacts.map((person) => {
                // console.log(person.acf)
                return(
                    <Person 
                        header={person.title.rendered}
                        image={person.acf.contactinfo.ima.url}
                        text={person.acf.contactinfo.description}
                        email={person.acf.contactinfo.email}
                        phone={person.acf.contactinfo.phone}
                    />
                );
            })}
          <Footer />
        </StyledContact>
    );
};

export default Contact;

