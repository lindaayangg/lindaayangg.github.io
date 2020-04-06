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
import resume from "../../res/Resume_Linda_Yang.pdf";

class About extends Component {

  constructor(props) {
    super(props);
    this.state = {screenWidth: null};
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions)
  }

  updateWindowDimensions = () => {
    this.setState({screenWidth: window.innerWidth});
  };

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
    const {screenWidth} = this.state;
    return (
      <StyledSocialContainer>
        <StyledSocialButtons
          icon='linkedin'
          size={screenWidth < 425 ? 'small' : 'medium'}
          href="https://www.linkedin.com/in/lindaayangg/"
          target="_blank"/>
        <StyledSocialButtons
          icon='github alternate'
          size={screenWidth < 425 ? 'small' : 'medium'}
          href="https://github.com/lindaayangg"
          target="_blank"/>
        <StyledSocialButtons
          icon='mail'
          size={screenWidth < 425 ? 'small' : 'medium'}
          href='mailto:xiaoling.yang@uwaterloo.ca'
          target="_blank"/>
        <StyledResumeButton
          href={resume}
          size={screenWidth < 425 ? 'small' : 'medium'}
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