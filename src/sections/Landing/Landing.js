import React, {Component} from 'react';
import strings from "../../res/strings";
import Typical from "react-typical";
import {StyledContentWrapper, StyledHeader, StyledImage, StyledLandingWrapper} from "./styles";
import Navbar from "../../components/Navbar/Navbar";
import {Grid, GridColumn} from "semantic-ui-react";
import profile1 from "../../res/images/profile1.JPG";
import {Container1280} from "../../res/styles";


class Landing extends Component {

  renderLanding = () => {
    return (
      <StyledLandingWrapper id="home" name="home">
        <Navbar/>
        <Container1280>
          <StyledContentWrapper>
            <Grid columns={2} padded style={{height: '100%'}}>
              <GridColumn verticalAlign="middle">
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
              </GridColumn>
              <GridColumn verticalAlign="middle">
                <StyledImage size="big" src={profile1}/>
              </GridColumn>
            </Grid>
          </StyledContentWrapper>
        </Container1280>
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