import React, {Component} from 'react';
import Particles from "react-particles-js";
import strings from "../../res/strings";
import Typical from "react-typical";
import {StyledContentWrapper, StyledHeader, StyledLandingWrapper} from "./styles";

class Landing extends Component {

  renderLanding = () => {
    return (
      <StyledLandingWrapper>
        <Particles
          height='100vh'
          params={{
            "particles": {
              "number": {
                "value": 160,
                "density": {
                  "enable": false
                }
              },
              "size": {
                "value": 5,
                "random": true,
                "anim": {
                  "speed": 4,
                  "size_min": 0.3
                }
              },
              "line_linked": {
                "enable": false
              },
              "move": {
                "random": true,
                "speed": 1,
                "direction": "top",
                "out_mode": "out"
              }
            },
            "interactivity": {
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "bubble"
                },
                "onclick": {
                  "enable": true,
                  "mode": "repulse"
                }
              },
              "modes": {
                "bubble": {
                  "distance": 250,
                  "duration": 2,
                  "size": 0,
                  "opacity": 0
                },
                "repulse": {
                  "distance": 400,
                  "duration": 4
                }
              }
            }
          }}
          // particles
          // params={{
          //   "particles": {
          //     "number": {
          //       "value": 50
          //     },
          //     "size": {
          //       "value": 3
          //     }
          //   },
          //   "interactivity": {
          //     "events": {
          //       "onhover": {
          //         "enable": true,
          //         "mode": "repulse"
          //       }
          //     }
          //   }
          // }}
        />
        <StyledContentWrapper>
          <StyledHeader>
            {strings.landing.intro}
          </StyledHeader>
          <StyledHeader>
            {strings.landing.whatIAm}
            <Typical
              steps={[
                strings.landing.backend, 1500,
                strings.landing.frontend, 1500,
                strings.landing.hackathon, 1500,
                strings.landing.pharmacy, 1500
              ]}
              loop={Infinity}
              wrapper="span"
            />
          </StyledHeader>
        </StyledContentWrapper>
      </StyledLandingWrapper>
    )
  };

  render() {
    return (
      <React.Fragment>
        {this.renderLanding()}
      </React.Fragment>
    )
  }
}

export default Landing;