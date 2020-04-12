import React, {Component} from 'react';
import {StyledSectionTitle, StyledSectionWrapper} from "../../res/styles";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import {GridColumn} from "semantic-ui-react";
import {StyledLine, StyledProjectGrid, StyledProjectWrapper} from "./styles";
import strings from "../../res/strings";
import wave from "../../res/images/wave.jpg"
import budgetbuddy from "../../res/images/budgetbuddy.png"
import distractic from "../../res/images/distractic.jpg"
import safeme from "../../res/images/safeme.jpg"
import groshare from "../../res/images/groshare.jpg"
import toolsbucket from "../../res/images/toolsbucket.jpg"

class Project extends Component {

  renderProjects() {
    return (
      <StyledProjectGrid columns={3} stackable doubling>
        <GridColumn>
          <ProjectCard
            image={toolsbucket}
            name={strings.project.toolsbucket.name}
            date={strings.project.toolsbucket.date}
            description={strings.project.toolsbucket.description}
            github={"https://github.com/lindaayangg/ToolsBucket"}
            tools={strings.project.toolsbucket.name}
          />
        </GridColumn>
        <GridColumn>
          <ProjectCard
            image={wave}
            name={strings.project.wave.name}
            date={strings.project.wave.date}
            description={strings.project.wave.description}
            github={"https://github.com/lindaayangg/Wave-Web"}
            tools={strings.project.wave.name}
          />
        </GridColumn>
        <GridColumn>
          <ProjectCard
            image={budgetbuddy}
            name={strings.project.budgetbuddy.name}
            date={strings.project.budgetbuddy.date}
            description={strings.project.budgetbuddy.description}
            github={"https://github.com/lindaayangg/BudgetBuddy"}
            tools={strings.project.budgetbuddy.name}
          />
        </GridColumn>
        <GridColumn>
          <ProjectCard
            image={distractic}
            name={strings.project.distractic.name}
            date={strings.project.distractic.date}
            description={strings.project.distractic.description}
            github={"https://github.com/davidhqr/Distractic"}
            tools={strings.project.distractic.name}
          />
        </GridColumn>
        <GridColumn>
          <ProjectCard
            image={safeme}
            name={strings.project.safeme.name}
            date={strings.project.safeme.date}
            description={strings.project.safeme.description}
            github={"https://github.com/davidhqr/SafeMe"}
            tools={strings.project.safeme.name}
          />
        </GridColumn>
        <GridColumn>
          <ProjectCard
            image={groshare}
            name={strings.project.groshare.name}
            date={strings.project.groshare.date}
            description={strings.project.groshare.description}
            github={"https://github.com/davidhqr/GroShare"}
            tools={strings.project.groshare.name}
          />
        </GridColumn>
      </StyledProjectGrid>
    )
  }

  render() {
    return (
      <StyledSectionWrapper id="project" name="project">
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