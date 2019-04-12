import React from "react";
import styled from "styled-components";


const StyledHeader = styled.div`
// div {
//   display:grid;
//   justify-items: center;

// }
.header {

  height:10px;
  background-color: #e3e3e3;
  width: 100%;
}
`;

const Header = props => {
  return (
    <StyledHeader>
      <div className="header">
      </div>
    </StyledHeader>
  );
};

export default Header;
