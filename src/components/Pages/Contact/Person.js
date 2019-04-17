import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';


const StlyedPerson = styled.div`
img {
    width: 100%;
}
p {
    max-width: 80%;
    font-weight: 300;
    font-size: 24px;
}
h1 {
    font-weight: 300;
    text-transform: uppercase;
    font-size: 48px;
}
h4 {
    font-weight: 400;
    font-size: 24px;
}

`;

const Person = props => {
    return (
        <StlyedPerson>
        		<img src={props.contactImage} />
	        	<h1>{props.contactName}</h1>
	        	<p>{props.contactDescription}</p>
	        	<h4>{props.contactEmail}</h4>
	        	<h4>{props.contactPhone}</h4>
        </StlyedPerson>
    );
};

export default Person;
