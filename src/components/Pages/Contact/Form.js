import React from "react";
import styled from "styled-components";

const StyledForm = styled.div`
div {
	display: grid;
	justify-content: center;
}
input {
	padding-bottom: 2%;
	margin-bottom: 10%;
	border: none;
	border-bottom: 1px solid lightgrey;
	width: 100%;
	font-size: 1.4em;
	font-weight: 100;
}
input:focus {
	outline:none;
}
form {
	padding: 5%;
	margin-left: 10%;
	justify-self: center;
}
form:focus-within {
  box-shadow: 0px 0.2em 0.5em #c4c4c4;
  -webkit-transform: scale(1.025);
          transform: scale(1.025);
}
.inline {
	display: inline-flex;
	width: 100%;
}
button {
	border:none;
	padding: 2px;
	border-bottom: 1px solid grey;
	color: black;
	font-size 1.7em;
	font-weight: 600;
}
button:hover {
	color:blue;
	transform: scale(1.1)
}

`;
const Form = () => {
	return(
		<StyledForm>
			<div>
				<form action="#">
					<input type="text" name="dropdown" placeholder="I'm interested in.." />
					<div class="inline">
						<input type="text" name="name" placeholder="Your name.." />
						<input type="email" name="email" placeholder="E-mail"/>
					</div>
					<input type="text" name="subject" placeholder="Describe your errand.." />
					<button type="submit">Send</button>
				</form>
			</div>
		</StyledForm>
	)
}

export default Form;