import React, {Component} from 'react';
import {StyledSectionTitle, StyledSectionWrapper} from "../../res/styles";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import {GridColumn} from "semantic-ui-react";
import {StyledLine, StyledProjectGrid, StyledProjectWrapper} from "./styles";
import strings from "../../res/strings";
import wave from "../../res/images/wave.png"
import budgetbuddy from "../../res/images/budgetbuddy.png"

class Project extends Component {

  renderProjects() {
    return (
      <div>
        <StyledProjectGrid columns={3}>
          <GridColumn>
            <ProjectCard
              image={wave}
              name={strings.project.toolsbucket.name}
              date={strings.project.toolsbucket.date}
              description={strings.project.toolsbucket.description}
              github={"https://github.com/lindaayangg"}
              tools={strings.project.toolsbucket.name}
            />
          </GridColumn>
          <GridColumn>
            <ProjectCard
              image={wave}
              name={strings.project.wave.name}
              date={strings.project.wave.date}
              description={strings.project.wave.description}
              github={"https://github.com/lindaayangg"}
              tools={strings.project.wave.name}
            />
          </GridColumn>
          <GridColumn>
            <ProjectCard
              image={budgetbuddy}
              name={strings.project.budgetbuddy.name}
              date={strings.project.budgetbuddy.date}
              description={strings.project.budgetbuddy.description}
              github={"https://github.com/lindaayangg"}
              tools={strings.project.budgetbuddy.name}
            />
          </GridColumn>
        </StyledProjectGrid>

        <StyledProjectGrid columns={3}>
          <GridColumn>
            <ProjectCard
              image={wave}
              name={strings.project.distractic.name}
              date={strings.project.distractic.date}
              description={strings.project.distractic.description}
              github={"https://github.com/lindaayangg"}
              tools={strings.project.distractic.name}
            />
          </GridColumn>
          <GridColumn>
            <ProjectCard
              image={wave}
              name={strings.project.safeme.name}
              date={strings.project.safeme.date}
              description={strings.project.safeme.description}
              github={"https://github.com/lindaayangg"}
              tools={strings.project.safeme.name}
            />
          </GridColumn>
          <GridColumn>
            <ProjectCard
              image={budgetbuddy}
              name={strings.project.groshare.name}
              date={strings.project.groshare.date}
              description={strings.project.groshare.description}
              github={"https://github.com/lindaayangg"}
              tools={strings.project.groshare.name}
            />
          </GridColumn>
        </StyledProjectGrid>
      </div>
    )
  }

  render() {
    return (
      <StyledSectionWrapper>
        <StyledProjectWrapper>
          <StyledSectionTitle>
            <StyledLine/>{strings.section.project}<StyledLine/>
          </StyledSectionTitle>
          {this.renderProjects()}
        </StyledProjectWrapper>
      </StyledSectionWrapper>
    )
  }
}

export default Project;