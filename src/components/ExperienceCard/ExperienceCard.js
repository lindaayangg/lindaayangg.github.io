import React, {Component} from 'react';
import {
  StyledCompanyColumn,
  StyledCompanyLogo,
  StyledCompanyName,
  StyledDate,
  StyledDescription,
  StyledLocation,
  StyledNameLocationContainer,
  StyledPosition,
  StyledSegment,
  StyledSkill,
  StyledWorkDescriptionColumn
} from "./styles";
import {Grid} from "semantic-ui-react";

class ExperienceCard extends Component {

  render() {
    return (
      <StyledSegment>
        <Grid columns={2} stackable>
          <StyledCompanyColumn width={7}>
            <StyledCompanyLogo
              circular
              size='small'
              src={this.props.image}
            />
            <StyledNameLocationContainer>
              <StyledCompanyName>{this.props.company}</StyledCompanyName>
              <StyledLocation>{this.props.location}</StyledLocation>
            </StyledNameLocationContainer>
          </StyledCompanyColumn>
          <StyledWorkDescriptionColumn width={9}>
            <StyledPosition>{this.props.position}</StyledPosition>
            <StyledDate>{this.props.date}</StyledDate>
            <StyledDescription>{this.props.description}</StyledDescription>
            {this.props.skill.map((skill) => <StyledSkill>{skill}</StyledSkill>)}
          </StyledWorkDescriptionColumn>
        </Grid>
      </StyledSegment>
    )
  }
}

export default ExperienceCard;