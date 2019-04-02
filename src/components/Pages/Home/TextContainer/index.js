import React, {Component} from "react";
import styled from "styled-components"

const StyledTextContainer = styled.div`
background-color: white;
`
class TextContainer extends Component {

  render() {
    return (
        <StyledTextContainer>
            <p>hej</p>
        </StyledTextContainer>

    );
  }
}

export default TextContainer;
