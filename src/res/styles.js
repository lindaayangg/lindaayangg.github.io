import styled from "styled-components";
import {Header} from "semantic-ui-react";

export const Container1280 = styled.div`
  &&& {
    max-width: 1280px;
    margin: auto;
  }
`;

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
    font-family: Karla;
    // Laptop(L)+
    @media (min-width: 1440px) {
      font-size: 32px;
    }
    // Laptop - Laptop(L)
    @media (min-width: 1024px) and (max-width: 1439px) {
      font-size: 30px;
    }
    // Tablet -
    @media (max-width: 767px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

export const StyledDate = styled.p`
  &&& {
    margin: 0;
    font-size: 13px;
    color: rgba(0,0,0,.4);
    // Laptop(L)+
    @media (min-width: 1440px) {
      font-size: 15px;
    }
  }
`;

export const StyledDescription = styled.p`
  &&& {
    margin-top: 5px;
    font-size: 14px;
    color: rgba(0,0,0,.68);
    // Laptop(L)+
    @media (min-width: 1440px) {
      font-size: 15px;
    }
  }
`;