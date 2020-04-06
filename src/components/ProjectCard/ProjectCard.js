import React, {Component} from 'react';
import {
  StyledDescriptionRowWrapper,
  StyledGithubIcon,
  StyledImageRowWrapper,
  StyledProjectCard,
  StyledProjectImage,
  StyledProjectName, StyledTool
} from "./styles";
import {Grid} from "semantic-ui-react";
import strings from "../../res/strings";
import {StyledDate, StyledDescription} from "../../res/styles";

class ProjectCard extends Component {

  renderTools() {
    const toolsbucket = ["ReactJS", "JS"];
    const wave = ["Flutter", "Chirp API", "Ruby", "Ruby On Rails", "ReactJS", "MySQL", "JS"];
    const budgetbuddy = ["Java", "TD Da Vinci API", "Yelp Fusion API", "Android Studio"];
    const distractic = ["Java", "Google ML Kit API", "AI", "Android Studio"];
    const safeme = ["MongoDB", "NodeJS", "HTML | CSS (Bootstrap)", "HERE Maps API", "Google Places"];
    const groshare = ["HTML | CSS (Bootstrap)", "JS", "jQuery", "LAMP"];
    return (
      <div>
        {this.props.tools === strings.project.toolsbucket.name ? toolsbucket.map((tool) => <StyledTool>{tool}</StyledTool>)
          : this.props.tools === strings.project.wave.name ? wave.map((tool) => <StyledTool>{tool}</StyledTool>)
            : this.props.tools === strings.project.budgetbuddy.name ? budgetbuddy.map((skill) => <StyledTool>{skill}</StyledTool>)
              : this.props.tools === strings.project.distractic.name ? distractic.map((skill) => <StyledTool>{skill}</StyledTool>)
                : this.props.tools === strings.project.safeme.name ? safeme.map((skill) => <StyledTool>{skill}</StyledTool>)
                  : this.props.tools === strings.project.groshare.name ? groshare.map((skill) => <StyledTool>{skill}</StyledTool>)
                    : null
        }
      </div>
    )
  }

  render() {
    return (
      <StyledProjectCard>
        <Grid columns={2}>
          <StyledImageRowWrapper>
            <StyledProjectImage
              href={this.props.github}
              target="_blank"
              src={this.props.image}
            />
          </StyledImageRowWrapper>
          <StyledDescriptionRowWrapper>
            <StyledProjectName>
              {this.props.name}
              <StyledGithubIcon
                href={this.props.github}
                target="_blank"
                icon={"github"}/>
            </StyledProjectName>
            <StyledDate>{this.props.date}</StyledDate>
            <StyledDescription>{this.props.description}</StyledDescription>
            {this.renderTools()}
          </StyledDescriptionRowWrapper>
        </Grid>
      </StyledProjectCard>
    )
  }
}

export default ProjectCard;