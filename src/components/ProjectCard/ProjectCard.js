import React, {Component} from 'react';
import {
  StyledDate,
  StyledDescription,
  StyledDescriptionRowWrapper,
  StyledImageRowWrapper,
  StyledProjectCard,
  StyledProjectImage,
  StyledProjectName,
  StyledTool
} from "./styles";
import {Grid} from "semantic-ui-react";

class ProjectCard extends Component {

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
            </StyledProjectName>
            <StyledDate>{this.props.date}</StyledDate>
            <StyledDescription>{this.props.description}</StyledDescription>
            <div>
              {this.props.tools.map((tool) => <StyledTool>{tool}</StyledTool>)}
            </div>
          </StyledDescriptionRowWrapper>
        </Grid>
      </StyledProjectCard>
    )
  }
}

export default ProjectCard;