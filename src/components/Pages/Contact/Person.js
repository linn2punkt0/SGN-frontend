import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';


const StlyedPerson = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	img {
		justify-self: center;
		height: 40%;
	}
	h1, p, h3 {
		margin-left: 5rem
	}
	h3 {
		font-weight: 400;
	}
`;

const Person = props => {
    return (
        <StlyedPerson>
	        	<img src={props.image} />
	        	<h1>{props.header}</h1>
	        	<p>{props.text}</p>
	        	<h3>{props.email}</h3>
	        	<h3>{props.phone}</h3>
        </StlyedPerson>
    );
};

Person.propTypes = {
	header: PropTypes.string,
    image: PropTypes.string, 
    text: PropTypes.string, 
    email: PropTypes.string, 
    phone: PropTypes.string, 
}

export default Person;
