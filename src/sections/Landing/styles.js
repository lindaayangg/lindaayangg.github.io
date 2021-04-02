import styled from "styled-components";
import {Header} from "semantic-ui-react";

export const StyledLandingWrapper = styled.div`
  &&& {
    background-color: #f5f2ea;
  }
`;

export const StyledContentWrapper = styled.div`
  &&& {
    height: calc(75vh - 80px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 20px;
  }
`;

export const StyledHeader = styled(Header)`
  &&& {
    color: #000000;
    font-size: 30px;
    font-family: "Karla Bold";
    // Mobile(S) - Tablet
    @media (min-width: 320px) and (max-width: 767px) {
      font-size: 18px;
    }
  }
`;

export const StyledSubHeader = styled.div`
  &&& {
    margin-top: 40px;
  }
`;

export const StyledRole = styled.div`
  &&& {
    font-size: 16px;
    &:not(:last-child) {
      margin-bottom: 16px;
    }

    // Mobile(S) - Tablet
    @media (min-width: 320px) and (max-width: 767px) {
      font-size: 14px;
    }
  }
`;
