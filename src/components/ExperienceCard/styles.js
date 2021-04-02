import styled from "styled-components";
import {GridColumn, Header, Image, Label, Segment} from "semantic-ui-react";

export const StyledSegment = styled(Segment)`
  &&& {
    box-shadow: none;
    border: none;
    padding: 50px 100px;
    
    &:not(:first-child) {
      margin-top: 10px;
    }

    // Mobile(S) - Tablet
    @media (min-width: 320px) and (max-width: 767px) {
      padding: 32px 0;
    }
  }
`;

export const StyledCompanyColumn = styled(GridColumn)`
  &&&&& {
    font-family: Karla;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledCompanyLogo = styled(Image)`
  &&& {
    width: 110px;
  }
`;

export const StyledNameLocationContainer = styled.div`
  &&& {
    margin-top: 16px;
    text-align: center;
  }
`;

export const StyledCompanyName = styled(Header)`
  &&& {
    font-family: Karla;
    color: rgba(0,0,0,.6);
    font-size: 18px;
    margin: 0;
  }
`;

export const StyledLocation = styled.p`
  &&& {
    font-size: 14px;
    color: rgba(0,0,0,.6);
  }
`;

export const StyledWorkDescriptionColumn = styled(GridColumn)`
  &&& {
    text-align: left;
    font-family: Karla;
    // Laptop -
    @media (max-width: 1023px) {
      text-align: center;
    }
  }
`;

export const StyledPosition = styled(Header)`
  &&& {
    font-family: Karla;
    color: #c3b282;
    font-size: 18px;
    margin: 0;
    // Mobile(S) - Tablet
    @media (min-width: 320px) and (max-width: 767px) {
      font-size: 16px;
    }
  }
`;

export const StyledDate = styled.p`
  &&& {
    margin: 0;
    font-size: 14px;
    color: rgba(0,0,0,.4);
  }
`;

export const StyledDescription = styled.p`
  &&& {
    margin-top: 16px;
    margin-bottom: 16px;
    font-size: 15px;
    color: rgba(0,0,0,.68);
  }
`;

export const StyledSkill = styled(Label)`
  &&& {
    background-color: #f5f2ea;
    border-radius: 15px;
    color: rgba(0,0,0,.68);
    font-size: 12px;
    font-weight: normal;
    margin: 0 5px 5px 0;
  }
`;
