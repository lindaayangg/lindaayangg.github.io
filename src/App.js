import React, {Component} from 'react';
import Landing from "./sections/Landing/Landing";
import About from "./sections/About/About";
import {StyledContentWrapper} from "./res/styles";
import Work from "./sections/Work/Work";
import Project from "./sections/Project/Project";
import CopyRight from "./sections/CopyRight/CopyRight";
import {Dots} from "react-preloaders";

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
        <Dots
          background="#000000"
          color="#ffffff"
          time={650}
        />
      </div>
    )
  }
}

export default App;