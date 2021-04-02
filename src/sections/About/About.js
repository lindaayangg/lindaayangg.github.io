import React, {Component} from 'react';
import {Container1040, StyledSectionWrapper} from "../../res/styles";
import {StyledDescription, StyledImage, StyledSocialButtons, StyledSocialContainer} from "./styles";
import strings from "../../res/strings";
import profile1 from '../../res/images/profile1.JPG';
import resume from "../../res/Resume_Linda_Yang.pdf";
import {Grid, GridColumn} from "semantic-ui-react";

class About extends Component {

  renderDescription = () => {
    return (
      <StyledDescription>
        {strings.about.introduction}<br/><br/>
        {strings.about.experience}<br/><br/>
        {strings.about.hobby}
      </StyledDescription>
    )
  };

  renderSocial = () => {
    return (
      <StyledSocialContainer>
        <StyledSocialButtons
          icon='linkedin'
          href="https://www.linkedin.com/in/lindaayangg/"
          target="_blank"/>
        <StyledSocialButtons
          icon='github alternate'
          href="https://github.com/lindaayangg"
          target="_blank"/>
        <StyledSocialButtons
          icon='mail'
          href='mailto:xiaoling.yang@uwaterloo.ca'
          target="_blank"/>
        <StyledSocialButtons
          href={resume}
          target='_blank'>
          {strings.about.resume}
        </StyledSocialButtons>
      </StyledSocialContainer>
    )
  };

  render() {
    return (
      <StyledSectionWrapper id="about" name="about">
        <Container1040>
          <Grid columns={2} stackable relaxed="very">
            <GridColumn verticalAlign="middle" width={7}>
              <StyledImage size="large" src={profile1}/>
              {this.renderSocial()}
            </GridColumn>
            <GridColumn width={9}>
              {this.renderDescription()}
            </GridColumn>
          </Grid>
        </Container1040>
      </StyledSectionWrapper>
    )
  }
}

export default About;