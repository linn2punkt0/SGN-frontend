import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledForm = styled.div`

input, select {
	margin-bottom: 10vh;
	border: none;
	border-bottom: 1px solid lightgrey;
	width: 100%;
	font-size: 24px;
	font-weight: 100;
}
input:focus, select:focus {
	outline:none;
}
form {
	margin-top: 10vh;
}

.inline {
	display: inline-flex;
	width: 100%;
}
button {
	border: none;
	border-bottom: 1px solid grey;
	font-size 24px;
	font-weight: 500;
	background-color: #FDFDFD;
	padding-left: 0px;
}
button:hover {
	color:blue;
	transform: scale(1.1)
}
select {
	background-color: #FDFDFD;
}

`;

const Form = props => {

  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetchActivities();
  }, []);

  const fetchActivities = () => {
    fetch(`http://wordplate.test/wp-json/wp/v2/activities`)
      .then(response => response.json())
      .then(data => {
        setActivities(data);
      })
      .catch(error => console.error(error));
  };
	return(
		<StyledForm>
				<form action="#">
		            <select>
						<option>I'm interested in..</option>
							{activities.map((element, i) => {
								// console.log(element)
						  		return (
									<option key={i}>{element.title.rendered}</option>
						  		);
				        	})}
					</select>
					<div className="inline">
						<input type="text" name="name" placeholder="Your name.." />
						<input type="email" name="email" placeholder="E-mail"/>
					</div>
					<input type="text" name="subject" placeholder="Message" />
					<button type="submit">Send</button>
				</form>
		</StyledForm>
	)
}

export default Form;