import React from "react";
import styled from "styled-components";

const StyledForm = styled.div`

input, select {
	margin-bottom: 85px;
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
	margin-top: 82px;
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
	return(
		<StyledForm>
				<form action="#">
					<select>
						<option value="user">I'm interested in..</option>
						<option value="user">Users</option>
						<option value="user">Users</option>
					</select>
					<div className="inline">
						<input type="text" name="name" placeholder="Your name.." />
						<input type="email" name="email" placeholder="E-mail"/>
					</div>
					<input type="text" name="subject" placeholder="Describe your errand.." />
					<button type="submit">Send</button>
				</form>
		</StyledForm>
	)
}

export default Form;