import React from "react";
import styled from "styled-components";
import PageHeaderText from "../../Global/PageHeaderText";
import ImageContainer from "../../Global/ImageContainer";
import Logo from "./Logo";



const StyledContact = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, 100vh);
`;

const Contact = props => {
    return (
        <StyledContact>
            <PageHeaderText />
            <Logo image="https://www.designevo.com/res/templates/thumb_small/brown-circle-and-chocolate-coffee.png" />
            <Logo image="http://ekora.fr/WordPress3/wp-content/uploads/2012/07/picto_user.png" />
            <Logo image="http://ekora.fr/WordPress3/wp-content/uploads/2012/07/picto_user.png" />
            <PageHeaderText />
            <ImageContainer background="tomato" />  
        </StyledContact>
        );
};

export default Contact;
