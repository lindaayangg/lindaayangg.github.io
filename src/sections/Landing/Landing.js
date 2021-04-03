import React, {Component} from 'react';
import strings from "../../res/strings";
import Typical from "react-typical";
import {StyledContentWrapper, StyledHeader, StyledLandingWrapper, StyledRole, StyledSubHeader} from "./styles";
import Navbar from "../../components/Navbar/Navbar";
import {Container1040} from "../../res/styles";


class Landing extends Component {

  renderLanding = () => {
    return (
      <StyledLandingWrapper id="home" name="home">
        <Navbar/>
        <Container1040>
          <StyledContentWrapper>
            <div>
              <StyledHeader>
                {strings.landing.intro}
              </StyledHeader>
              <StyledHeader>
                {strings.landing.whatIAm}
                <Typical
                  steps={[
                    strings.landing.backend, 1500,
                    strings.landing.frontend, 1500,
                    strings.landing.hackathon, 1500,
                    strings.landing.pharmacy, 1500,
                    strings.landing.musician, 1500,
                  ]}
                  loop={Infinity}
                  wrapper="span"
                />
              </StyledHeader>
            </div>
            <StyledSubHeader>
              <StyledRole>{strings.landing.currentRole}</StyledRole>
              <StyledRole>{strings.landing.previousRole}</StyledRole>
            </StyledSubHeader>
          </StyledContentWrapper>
        </Container1040>
      </StyledLandingWrapper>
    )
  };

  render() {
    return (
      <React.Fragment>
        {this.renderLanding()}
      </React.Fragment>
    )
  }
}

export default Landing;