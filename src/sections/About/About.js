import React, {Component} from 'react';
import {StyledSectionTitle, StyledSectionWrapper} from "../../res/styles";
import {
  StyledAboutWrapper,
  StyledDescription,
  StyledImage,
  StyledImageContainer,
  StyledLine,
  StyledResumeButton,
  StyledSocialButtons,
  StyledSocialContainer
} from "./styles";
import strings from "../../res/strings";
import profile from '../../res/images/profile.jpg';

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
        <StyledSocialButtons icon='linkedin' size='big' href="https://www.linkedin.com/in/lindaayangg/"
                             target="_blank"/>
        <StyledSocialButtons icon='github alternate' size='big' href="https://github.com/lindaayangg"
                             target="_blank"/>
        <StyledSocialButtons icon='mail' size='big' href='mailto:xiaoling.yang@uwaterloo.ca'
                             target="_blank"/>
        <StyledResumeButton
          // href={resume}
          target='_blank'>
          {strings.about.resume}
        </StyledResumeButton>
      </StyledSocialContainer>
    )
  };

  render() {
    return (
      <StyledSectionWrapper id="about" name="about">
        <StyledAboutWrapper>
          <StyledSectionTitle>
            <StyledLine/>{strings.section.about}<StyledLine/>
          </StyledSectionTitle>
          <StyledImageContainer>
            <StyledImage src={profile}/>
          </StyledImageContainer>
          {this.renderDescription()}
          {this.renderSocial()}
        </StyledAboutWrapper>
      </StyledSectionWrapper>
    )
  }
}

export default About;