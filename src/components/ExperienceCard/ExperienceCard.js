import React, {Component} from 'react';
import {
  StyledCompanyColumn,
  StyledCompanyLogo,
  StyledCompanyName,
  StyledDate,
  StyledDescription,
  StyledExperienceCardGrid,
  StyledLocation,
  StyledNameLocationContainer,
  StyledPosition,
  StyledSkill,
  StyledWorkDescriptionColumn
} from "./styles";
import strings from "../../res/strings";

class ExperienceCard extends Component {

  renderSkills() {
    const skip = ['Java 8', 'Spark', 'ReactJS', 'JS', 'TS', 'Redux', 'AWS', 'SQL', 'REST API', 'Jooq', 'Memcached',
      'Redis', 'ElasticSearch'];
    const formlabs = ['ReactJS', 'D3.js', 'Python', 'Django', 'DjangoCMS', 'PostgreSQL', 'REST API', 'JS', 'jQuery', 'GraphQL' ];
    const sydney = ['HTML| CSS', 'JS', 'jQuery', 'Magento', 'PHP', 'Photoshop'];
    const shoppers = ['HealthWatch', 'MMS Software System'];
    return (
      <div>
        {this.props.skill === strings.work.skip.company ? skip.map((skill) => <StyledSkill>{skill}</StyledSkill>)
          : this.props.skill === strings.work.formlabs.company ? formlabs.map((skill) => <StyledSkill>{skill}</StyledSkill>)
            : this.props.skill === strings.work.sydney.company ? sydney.map((skill) => <StyledSkill>{skill}</StyledSkill>)
              : this.props.skill === strings.work.shoppers.company ? shoppers.map((skill) => <StyledSkill>{skill}</StyledSkill>)
                : null
        }
      </div>
    )
  }

  render() {
    return (
      <StyledExperienceCardGrid columns={2}>
        <StyledCompanyColumn>
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
        <StyledWorkDescriptionColumn>
          <StyledPosition>{this.props.position}</StyledPosition>
          <StyledDate>{this.props.date}</StyledDate>
          <StyledDescription>{this.props.description}</StyledDescription>
          {this.renderSkills()}
        </StyledWorkDescriptionColumn>
      </StyledExperienceCardGrid>
    )
  }
}

export default ExperienceCard;