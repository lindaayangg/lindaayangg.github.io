import React, {Component} from 'react';
import {Container1040, StyledSectionTitle, StyledSectionWrapper} from "../../res/styles";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import {GridColumn} from "semantic-ui-react";
import {StyledProjectGrid} from "./styles";
import strings from "../../res/strings";
import wave from "../../res/images/wave.png"
import budgetbuddy from "../../res/images/budgetbuddy.png"
import distractic from "../../res/images/distractic.jpg"
import covid19 from "../../res/images/covid19.jpg"
import wics from "../../res/images/wics.png"
import coderintuition from "../../res/images/coderintuition.png"

class Project extends Component {

  renderProjects() {
    const coderTools = ["Java", "Spring", "ReactJS", "JS/TS", "NextJS", "MySQL"];
    const wicsTools = ["ReactJS"];
    const covid19Tools = ["Java", "Spring", "Flyway", "MySQL"];
    // const toolsbucketTools = ["ReactJS", "JS"];
    const waveTools = ["Flutter", "Chirp API", "Ruby", "Ruby On Rails", "ReactJS", "MySQL", "JS"];
    const budgetbuddyTools = ["Java", "TD Da Vinci API", "Yelp Fusion API", "Android Studio"];
    const distracticTools = ["Java", "Google ML Kit API", "AI", "Android Studio"];
    // const safemeTools = ["MongoDB", "NodeJS", "HTML | CSS (Bootstrap)", "HERE Maps API", "Google Places"];
    // const groshareTools = ["HTML | CSS (Bootstrap)", "JS", "jQuery", "LAMP"];
    return (
      <StyledProjectGrid columns={3} stackable doubling>
        {/*Image size : 44 x 25 cm*/}
        <GridColumn>
          <ProjectCard
            image={coderintuition}
            name={strings.project.coderintuition.name}
            date={strings.project.coderintuition.date}
            description={strings.project.coderintuition.description}
            github={"https://coderintuition.com/"}
            tools={coderTools}
          />
        </GridColumn>
        <GridColumn>
          <ProjectCard
            image={wics}
            name={strings.project.wics.name}
            date={strings.project.wics.date}
            description={strings.project.wics.description}
            github={"http://wics.uwaterloo.ca/"}
            tools={wicsTools}
          />
        </GridColumn>
        <GridColumn>
          <ProjectCard
            image={covid19}
            name={strings.project.covid19.name}
            date={strings.project.covid19.date}
            description={strings.project.covid19.description}
            github={"https://github.com/lindaayangg/covid19-api"}
            tools={covid19Tools}
          />
        </GridColumn>
        <GridColumn>
          <ProjectCard
            image={wave}
            name={strings.project.wave.name}
            date={strings.project.wave.date}
            description={strings.project.wave.description}
            github={"https://github.com/lindaayangg/Wave-Web"}
            tools={waveTools}
          />
        </GridColumn>
        <GridColumn>
          <ProjectCard
            image={budgetbuddy}
            name={strings.project.budgetbuddy.name}
            date={strings.project.budgetbuddy.date}
            description={strings.project.budgetbuddy.description}
            github={"https://github.com/lindaayangg/BudgetBuddy"}
            tools={budgetbuddyTools}
          />
        </GridColumn>
        <GridColumn>
          <ProjectCard
            image={distractic}
            name={strings.project.distractic.name}
            date={strings.project.distractic.date}
            description={strings.project.distractic.description}
            github={"https://github.com/davidhqr/Distractic"}
            tools={distracticTools}
          />
        </GridColumn>
        {/*<GridColumn>*/}
        {/*  <ProjectCard*/}
        {/*    image={toolsbucket}*/}
        {/*    name={strings.project.toolsbucket.name}*/}
        {/*    date={strings.project.toolsbucket.date}*/}
        {/*    description={strings.project.toolsbucket.description}*/}
        {/*    github={"https://github.com/lindaayangg/ToolsBucket"}*/}
        {/*    tools={toolsbucketTools}*/}
        {/*  />*/}
        {/*</GridColumn>*/}
        {/*<GridColumn>*/}
        {/*  <ProjectCard*/}
        {/*    image={safeme}*/}
        {/*    name={strings.project.safeme.name}*/}
        {/*    date={strings.project.safeme.date}*/}
        {/*    description={strings.project.safeme.description}*/}
        {/*    github={"https://github.com/davidhqr/SafeMe"}*/}
        {/*    tools={safemeTools}*/}
        {/*  />*/}
        {/*</GridColumn>*/}
        {/*<GridColumn>*/}
        {/*  <ProjectCard*/}
        {/*    image={groshare}*/}
        {/*    name={strings.project.groshare.name}*/}
        {/*    date={strings.project.groshare.date}*/}
        {/*    description={strings.project.groshare.description}*/}
        {/*    github={"https://github.com/davidhqr/GroShare"}*/}
        {/*    tools={groshareTools}*/}
        {/*  />*/}
        {/*</GridColumn>*/}
      </StyledProjectGrid>
    )
  }

  render() {
    return (
      <StyledSectionWrapper id="project" name="project">
        <Container1040>
          <StyledSectionTitle>
            {strings.section.project}
          </StyledSectionTitle>
          {this.renderProjects()}
        </Container1040>
      </StyledSectionWrapper>
    )
  }
}

export default Project;