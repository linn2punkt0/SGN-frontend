import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./../Contact/Header";
import Text from "./Text";

const StyledWhoWeAre = styled.div`

@media (min-width: 769px) {
    .wrapper {
        display: grid;
        margin-left: 82px;
        margin-right: 82px;
        grid-template-columns: 1.7fr 1.7fr;
        height: 100vh;
        margin-bottom: 100px;		
    }
    .wrapper2 {
        display: grid;
        grid-template-columns: 1.7fr 1.7fr;
        .firstImg {
			height: 100vh;
			width: 50vw;
			background: url('https://i.ibb.co/k42yQCz/img1.png" alt="img1"');
		}
		.secondImg {
			height: 100vh;
			width: 50vw;
			background: url('https://i.ibb.co/1qycyjY/img2.png" alt="img2"');
		}
        h1, h4, p {
            margin-left: 82px;
            margin-right: 82px;
        }
    }
    .logo {
        justify-self: flex-end;
        max-height: 449px;
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
        .logo {
            height: 200px;
        }
    }
    .wrapper2 {
    	display: flex;
    	flex-direction: column-reverse;
        h1, h4, p {
            margin-left: 24px;
            margin-right: 24px;
            max-width: 80%;
        }
        .firstImg {
			height: 50vh;
			width: 100vw;
			background: url('https://i.ibb.co/k42yQCz/img1.png" alt="img1"');
		}
		.secondImg {
			height: 50vw;
			width: 100vw;
			background: url('https://i.ibb.co/1qycyjY/img2.png" alt="img2"');
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

const WhoWeAre = props => {
    const [partners, setPartners] = useState([]);

    // console.log(partners);

    useEffect(() => {
        fetchPartners();
    }, []);

    const fetchPartners = () => {
        fetch(`http://wordplate.test/wp-json/wp/v2/partners`)
            .then(response => response.json())
            .then(data => {
            setPartners(data);
        })
        .catch(error => console.error(error));
    };


	  return (
	    <StyledWhoWeAre>
	       <div className="row">
	            <Header />
	        </div>
	        <div className="wrapper">
	        	<Text />
				<img className="logo" src="https://i.ibb.co/1mk4H7L/who-we-are.png" alt="who-we-are" /> 
	        </div>
			<div className="wrapper2">
				<Text />
				<div className="firstImg">
					<h1>Some text</h1>
				</div>
			</div>
	        <div className="wrapper2">
				<Text />
				<div className="secondImg">
					<h1>Some text </h1>
				</div>
			</div>
	        <div className="row">

	        </div>
	    </StyledWhoWeAre>
	  );
};

export default WhoWeAre;
