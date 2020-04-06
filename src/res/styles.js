import styled from "styled-components";
import {Header} from "semantic-ui-react";

export const StyledContentWrapper = styled.div`
  &&& {
    align-items: center;
    display: flex;
    flex-direction: column;
    background-color: #fafafa;
  }
`;

export const StyledSectionWrapper = styled.div`
  &&& {
    margin: 60px 0px 0px 0px;
    width: 85%;
    // Laptop(L)+
    @media (min-width: 1440px) {
      width: 75%;
    }
    // Mobile(M) - Tablet
    @media (min-width: 375px) and (max-width: 767px) {
      width: 90%;
    }
    // Mobile(S) - Mobile(M)
    @media (min-width: 320px) and (max-width: 374px) {
      width: 95%;
    }
  }
`;

export const StyledSectionTitle = styled(Header)`
  &&& {
    font-size: 25px;
    text-align: center;
    font-weight: normal;
    color: #4f4f4f;
    font-family: "Comic Sans MS", Roboto;
    // Laptop(L)+
    @media (min-width: 1440px) {
      font-size: 32px;
    }
    // Laptop - Laptop(L)
    @media (min-width: 1024px) and (max-width: 1439px) {
      font-size: 30px;
    }
  }
`;