import styled from "styled-components";
import {Header, Icon} from "semantic-ui-react";

export const StyledLandingWrapper = styled.div`
  &&& {
    background-color: #000000;
  }
`;

export const StyledContentWrapper = styled.div`
  &&& {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    color: #FFFFFF;
    text-align: -webkit-center;
    width: 100%;
  }
`;

export const StyledHeader = styled(Header)`
  &&& {
    color: #fff;
    margin-top: 15px;
    font-size: 25px;
    font-family:  "Bradley Hand", "Comic Sans MS", Roboto;
    // Laptop(L)+
    @media (min-width: 1440px) {
      font-size: 42px;
    }
    // Laptop - Laptop(L)
    @media (min-width: 1024px) and (max-width: 1439px) {
      font-size: 30px;
    }
    // Mobile(S) - Mobile(M)
    @media (min-width: 320px) and (max-width: 374px) {
      font-size: 20px;
    }
  }
`;

export const StyledDownIcon = styled(Icon)`
  &&& {
    background-color: transparent;
    color: #ffffff;
    font-size: 1.6em;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -25px;
    margin-bottom: 30px;
    // Laptop(L)+
    @media (min-width: 1440px) {
      font-size: 2em;
    }
    // Laptop - Laptop(L)
    @media (min-width: 1024px) and (max-width: 1439px) {
      font-size: 1.7em;
    }
    // Mobile(M) - Mobile(L)
    @media (min-width: 375px) and (max-width: 424px) {
      margin-left: -15px;
    }
    // Mobile(S) - Mobile(M)
    @media (min-width: 320px) and (max-width: 374px) {
      font-size: 1.3em;
      margin-left: -10px;
    }
  }
`;
