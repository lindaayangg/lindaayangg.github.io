import React, {Component} from 'react';
import Landing from "./sections/Landing/Landing";
import About from "./sections/About/About";
import {StyledContentWrapper} from "./res/styles";
import Work from "./sections/Work/Work";
import Project from "./sections/Project/Project";
import CopyRight from "./sections/CopyRight/CopyRight";

class App extends Component {

  render() {
    return (
      <div>
        <Landing/>
        <StyledContentWrapper>
          <About/>
          <Work/>
          <Project/>
          <CopyRight/>
        </StyledContentWrapper>
      </div>
    )
  }
}

export default App;