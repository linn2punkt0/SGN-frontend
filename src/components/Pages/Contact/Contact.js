import React from "react";
import styled from "styled-components";
import PageHeaderText from "../../Global/PageHeaderText";
import ImageContainer from "../../Global/ImageContainer";
import Person from "./Person";
import Text from "./Text";
import Form from "./Form";
import Footer from "../../Global/Footer";


const StyledContact = styled.div`

@media (min-width: 1281px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, 100vh);
}
@media (min-width: 1025px) and (max-width: 1280px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, 100vh);
}
@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 100vh);
}
@media (min-width: 481px) and (max-width: 767px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 100vh);
}
@media (min-width: 320px) and (max-width: 480px) { 
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 100vh);
}
img {
    justify-self: center;
    height: 500px;
}


`;

const Contact = props => {
    return (
        <StyledContact>
            <Text />
            <img src="https://www.designevo.com/res/templates/thumb_small/brown-circle-and-chocolate-coffee.png" />
            <Person 
            header="Jane Doe"
            image="http://ekora.fr/WordPress3/wp-content/uploads/2012/07/picto_user.png" 
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum magnam, sapiente. Animi natus, dicta placeat. Earum nihil, libero consectetur ad facilis et est optio, recusandae dolor commodi consequatur molestias harum." 
            email="jane@mail.com"
            phone="070707070"
            />
            <Person 
            header="John Doe"
            image="http://ekora.fr/WordPress3/wp-content/uploads/2012/07/picto_user.png" 
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum magnam, sapiente. Animi natus, dicta placeat. Earum nihil, libero consectetur ad facilis et est optio, recusandae dolor commodi consequatur molestias harum." 
            email="john@mail.com"
            phone="070707070"
            />
            <Footer />
        </StyledContact>
        );
};

export default Contact;
