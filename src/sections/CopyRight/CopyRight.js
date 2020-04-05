import React, {Component} from 'react';
import {StyledCopyRightWrapper} from "./styles";
import strings from "../../res/strings";

class CopyRight extends Component {
  render() {
    return(
      <StyledCopyRightWrapper>
        {strings.copyRight}
      </StyledCopyRightWrapper>
    )
  }
}

export default CopyRight;