import styled from "styled-components";
import {Header} from "semantic-ui-react";

export const Container1040 = styled.div`
  &&& {
    max-width: 1040px;
    margin: auto;

    // Mobile(S) - Tablet
    @media (min-width: 320px) and (max-width: 767px) {
      padding-left: 24px;
      padding-right: 24px;
    }
  }
`;

export const StyledContentWrapper = styled.div`
  &&& {
    display: flex;
    flex-direction: column;
  }
`;

export const StyledSectionWrapper = styled.div`
  &&& {
    margin-top: 120px;

    // Mobile(S) - Tablet
    @media (min-width: 320px) and (max-width: 767px) {
      margin-top: 60px;
    }
  }
`;

export const StyledSectionTitle = styled(Header)`
  &&& {
    font-size: 22px;
    font-weight: normal;
    color: #4f4f4f;
    margin-bottom: 24px;
    font-family: "Karla Bold";
  }
`;
