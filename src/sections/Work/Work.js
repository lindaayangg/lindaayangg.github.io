import React, {Component} from 'react';
import {Container1040, StyledSectionTitle, StyledSectionWrapper} from "../../res/styles";
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";
import strings from "../../res/strings";
import skip from "../../res/images/skip.jpg"
import formlabs from "../../res/images/formlabs.png"
import shoppers from "../../res/images/shoppers.png"
import sydney_stone from "../../res/images/sydney_stone.jpeg"
import meter from "../../res/images/meter.png"

class Work extends Component {

  render() {
    const meterSkills = ['Python', 'ReactJS', 'JS/TS', 'Electron', 'WebSocket'];
    const skipSkills = ['Java 8', 'Spark', 'ReactJS', 'JS/TS', 'AWS', 'SQL', 'REST API', 'Jooq', 'Memcached',
      'Redis', 'ElasticSearch'];
    const formlabsSkills = ['ReactJS', 'D3.js', 'Python', 'Django', 'DjangoCMS', 'PostgreSQL', 'JS', 'jQuery', 'GraphQL'];
    const sydneySkills = ['HTML | CSS', 'JS', 'jQuery', 'Magento', 'PHP', 'Photoshop'];
    const shoppersSkills = ['HealthWatch', 'MMS Software System'];

    return (
      <StyledSectionWrapper id="experience" name="experience">
        <Container1040>
          <StyledSectionTitle>{strings.section.work}</StyledSectionTitle>
          <ExperienceCard
            image={meter}
            company={strings.work.meter.company}
            location={strings.work.meter.location}
            description={strings.work.meter.description}
            position={strings.work.meter.position}
            date={strings.work.meter.date}
            skill={meterSkills}
          />
          <ExperienceCard
            image={skip}
            company={strings.work.skip.company}
            location={strings.work.skip.location}
            description={strings.work.skip.description}
            position={strings.work.skip.position}
            date={strings.work.skip.date}
            skill={skipSkills}
          />
          <ExperienceCard
            image={formlabs}
            company={strings.work.formlabs.company}
            location={strings.work.formlabs.location}
            description={strings.work.formlabs.description}
            position={strings.work.formlabs.position}
            date={strings.work.formlabs.date}
            skill={formlabsSkills}
          />
          <ExperienceCard
            image={sydney_stone}
            company={strings.work.sydney.company}
            location={strings.work.sydney.location}
            description={strings.work.sydney.description}
            position={strings.work.sydney.position}
            date={strings.work.sydney.date}
            skill={sydneySkills}
          />
          <ExperienceCard
            image={shoppers}
            company={strings.work.shoppers.company}
            location={strings.work.shoppers.location}
            description={strings.work.shoppers.description}
            position={strings.work.shoppers.position}
            date={strings.work.shoppers.date}
            skill={shoppersSkills}
          />
        </Container1040>
      </StyledSectionWrapper>
    )
  }
}

export default Work;