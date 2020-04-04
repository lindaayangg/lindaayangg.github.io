import React, {Component} from 'react';
import Landing from "./sections/Landing/Landing";
import About from "./sections/About/About";
import {StyledContentWrapper} from "./res/styles";
import Work from "./sections/Work/Work";

class App extends Component {

  render() {
    return (
      <div>
        <Landing/>
        <StyledContentWrapper>
          <About/>
          <Work/>
        </StyledContentWrapper>
      </div>
    )
  }
}

export default App;