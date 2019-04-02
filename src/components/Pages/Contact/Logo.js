import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';


const StlyedLogo = styled.div`
	display: grid;
	align-self: center;
	justify-self: center;
`;

const Logo = props => {
    return (
        <StlyedLogo>
        	<img src={props.image} />
        </StlyedLogo>
    );
};

Logo.propTypes = {
    image: PropTypes.string, 
}

export default Logo;
