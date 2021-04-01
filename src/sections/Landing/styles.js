import styled from "styled-components";
import {Header, Image} from "semantic-ui-react";

export const StyledLandingWrapper = styled.div`
  &&& {
    background-color: #f5f2ea;
  }
`;

export const StyledContentWrapper = styled.div`
  &&& {
    height: calc(80vh - 80px);
  }
`;

export const StyledHeader = styled(Header)`
  &&& {
    color: #000000;
    margin-top: 15px;
    font-size: 25px;
    font-family: "Karla Bold";
    // Laptop(L)+
    @media (min-width: 1440px) {
      font-size: 35px;
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

export const StyledImage = styled(Image)`
  &&& {
    border-radius: 20px;
  }
`;

