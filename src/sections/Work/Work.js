import React, {Component} from 'react';
import {StyledSectionTitle, StyledSectionWrapper} from "../../res/styles";
import {StyledLine, StyledWorkWrapper} from "./styles";
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";
import strings from "../../res/strings";
import skip from "../../res/images/skip.jpg"
import formlabs from "../../res/images/formlabs.png"
import shoppers from "../../res/images/shoppers.png"
import sydney_stone from "../../res/images/sydney_stone.jpeg"

class Work extends Component {

  render() {
    return (
      <StyledSectionWrapper id="experience" name="experience">
        <StyledWorkWrapper>
          <StyledSectionTitle>
            <StyledLine/>{strings.section.work}<StyledLine/>
          </StyledSectionTitle>
          <ExperienceCard
            image={skip}
            company={strings.work.skip.company}
            location={strings.work.skip.location}
            description={strings.work.skip.description}
            position={strings.work.skip.position}
            date={strings.work.skip.date}
            skill={strings.work.skip.company}
          />
          <ExperienceCard
            image={formlabs}
            company={strings.work.formlabs.company}
            location={strings.work.formlabs.location}
            description={strings.work.formlabs.description}
            position={strings.work.formlabs.position}
            date={strings.work.formlabs.date}
            skill={strings.work.formlabs.company}
          />
          <ExperienceCard
            image={sydney_stone}
            company={strings.work.sydney.company}
            location={strings.work.sydney.location}
            description={strings.work.sydney.description}
            position={strings.work.sydney.position}
            date={strings.work.sydney.date}
            skill={strings.work.sydney.company}
          />
          <ExperienceCard
            image={shoppers}
            company={strings.work.shoppers.company}
            location={strings.work.shoppers.location}
            description={strings.work.shoppers.description}
            position={strings.work.shoppers.position}
            date={strings.work.shoppers.date}
            skill={strings.work.shoppers.company}
          />
        </StyledWorkWrapper>
      </StyledSectionWrapper>
    )
  }
}

export default Work;