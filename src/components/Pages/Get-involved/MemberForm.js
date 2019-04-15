import React from "react";
import styled from "styled-components";

const StyledMemberForm = styled.div`
  grid-row: 4/6;
  grid-column: 1 / 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .container {
    max-width: 500px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h4 {
      text-align: center;
      font-weight: 300;
      font-size: 4vh;
      margin: 0;
    }
    .grey {
      margin: 0;
      color: rgba(31, 31, 31, 0.45);
    }
    p {
      text-align: center;
    }
    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }
    .row {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
    .wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

const MemberForm = props => {
  return (
    <StyledMemberForm>
      <div className="container">
        <h4>{props.content.title ? props.content.title : "Title"}</h4>
        <h4 className="grey">
          {props.content.title_2 ? props.content.title_2 : "Title2"}
        </h4>
        <p>{props.content.description ? props.content.description : "Text"}</p>
        <form>
          <div className="row">
            <div className="wrapper">
              <label for="name">Name</label>
              <input name="name" type="text" />
            </div>
            <div className="wrapper">
              <label for="surname">Surname</label>
              <input name="surname" type="text" />
            </div>
          </div>
          <label for="adress1">Adress 1</label>
          <input name="adress1" type="text" />
          <label for="adress2">Adress 2</label>
          <input name="adress2" type="text" />
          <div>
            <div className="wrapper">
              <label for="city">City</label>
              <input name="city" type="text" />
            </div>
            <div className="wrapper">
              <label for="postal-code">Postal code</label>
              <input name="postal-code" type="text" />
            </div>
          </div>
          <div className="row">
            <div className="wrapper">
              <label for="phone">Phone number</label>
              <input name="phone" type="text" />
            </div>
            <div className="wrapper">
              <label for="email">Email</label>
              <input name="email" type="text" />
            </div>
          </div>
          <label for="refugee">Refugee</label>
          <input name="refugee" type="checkbox" />
          <label for="volunter">Volunter</label>
          <input name="volunter" type="checkbox" />
          <label for="offer">
            This is what i can offer (knowledge, materials, locales etc.)
          </label>
          <input name="offer" type="text" />
          <label for="background">Education and occupation</label>
          <input name="background" type="text" />
          <label for="match">
            {" "}
            Yes, I would like for you to match my competence with suitable
            available jobs
          </label>
          <input name="match" type="checkbox" />
        </form>
      </div>
    </StyledMemberForm>
  );
};

export default MemberForm;
