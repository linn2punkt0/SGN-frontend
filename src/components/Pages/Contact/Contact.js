import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PageHeaderText from "../../Global/PageHeaderText";
import ImageContainer from "../../Global/ImageContainer";
import Person from "./Person";
import Text from "./Text";
import Form from "./Form";
import Header from "./Header";
// import Logo from "../../assets/logo.png"; // works locally atm
import Footer from "../../Global/Footer";

const StyledContact = styled.div`

@media (min-width: 769px) {
    .wrapper {
        display: grid;
        margin-left: 82px;
        margin-right: 82px;
        grid-template-columns: 1.7fr 1.7fr;
        // grid-template-rows: 0.3fr 2.5fr 0.2fr;
        grid-template-rows: repeat(1, 100vh);
        margin-bottom: 100px;
    }
    .wrapper2 {
        display: grid;
        grid-template-columns: 1.7fr 1.7fr;
        h1, h4, p {
            margin-left: 82px;
            margin-right: 82px;
        }
    }
    .row {
        width: 100%;
        // height: 150px;
        margin-left: 82px;
        margin-right: 82px;
    }
}

@media (min-width: 768) and (orientation: landscape) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, 100vh);
}

@media (min-width: 320) and (max-width: 1024px) and (orientation: landscape) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 100vh);
}

@media (min-width: 320px) and (max-width: 767px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 100vh); 
}
img {
    justify-self: flex-end;
    max-height: 449px;
}
p {
    height: 106px;
}
h6 {
    font-size: 64px;
    font-weight: 300;
}
.row2  {
    display:flex;
    justify-content: center;
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
            <div className="row">
                <Header />
            </div>
            <div className="wrapper">
                <Text />
                <img src="https://i.ibb.co/dc55VRx/logo.png" alt="logo" /> 
            </div>
            <div className="wrapper2">
                {contacts.map((person) => {
                    // console.log(person.acf)
                    return(
                        <Person key={person.id}
                            contactName={person.title.rendered}
                            contactImage="https://i.ibb.co/8PPtrcY/person1.png" alt="person1"
                            contactDescription={person.acf.contactinfo.description}
                            contactEmail={person.acf.contactinfo.email}
                            contactPhone={person.acf.contactinfo.phone}
                        />
                    );
                })}
            </div>
            <div className="row2">
                <h6>info@supportgroup.com</h6>
            </div>
                <div className="row">
                    <Footer />
                </div>
        </StyledContact>
    );
};

export default Contact;

