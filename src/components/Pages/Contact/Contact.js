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
        grid-template-rows: repeat(1, 100vh);
        margin-bottom: 100px;
        p {

        }
    }
    .wrapper2 {
        display: grid;
        grid-template-columns: 1.7fr 1.7fr;
        h1, h4, p {
            margin-left: 82px;
            margin-right: 82px;
        }
    }
    .row2  {
        display: flex;
        justify-content: center;
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
}

@media (min-width: 768) and (orientation: landscape) {
    .wrapper {
        display: flex;
        margin-right: 24px;
        margin-left: 24px;
    }
    .wrapper2 {
        h1, h4, p {
            margin-left: 24px;
            margin-right: 24px;
        }
    }
    .row {
        width: 100%;
        margin-left: 24px;
        margin-right: 24px;
    }
    .row2  {
        display: flex;
        justify-content: center;
        h6 {
            font-size: 30px;
            font-weight: 300;
        }
    }
}

@media (min-width: 320) and (max-width: 1024px) and (orientation: landscape) {
}

@media (min-width: 320px) and (max-width: 767px) {
    .wrapper {
        display: flex;
        flex-direction: column-reverse;
        margin-right: 24px;
        margin-left: 24px;
        img {
            height: 200px;
        }
    }
    .wrapper2 {
        h1, h4, p {
            margin-left: 24px;
            margin-right: 24px;
            max-width: 80%;
        }
    }
    .row {
        width: 100%;
        margin-left: 24px;
        margin-right: 24px;
    }
    .row2  {
        display:flex;
        justify-content: center;
        h6 {
            font-size: 30px;
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
                            contactImage="http://i.ibb.co/8PPtrcY/person1.png" alt="person1"
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

