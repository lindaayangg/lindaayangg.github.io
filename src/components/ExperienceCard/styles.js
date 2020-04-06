import styled from "styled-components";
import {Grid, GridColumn, Header, Image, Label} from "semantic-ui-react";

export const StyledExperienceCardGrid = styled(Grid)`
  &&& {
    margin-top: 50px;
    text-align: center;
  }
`;

export const StyledCompanyColumn = styled(GridColumn)`
  &&& {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
  }
`;

export const StyledWorkDescriptionColumn = styled(GridColumn)`
  &&& {
    text-align: left;
    // Laptop -
    @media (max-width: 1023px) {
      text-align: center;
    }
  }
`;

export const StyledCompanyLogo = styled(Image)`
  &&& {
    width: 100px;
    // Laptop(L)+
    @media (min-width: 1440px) {
      width: 120px;
    }
  }
`;

export const StyledNameLocationContainer = styled.div`
  &&& {
    margin-top: 15px;
    text-align: center;
  }
`;

export const StyledCompanyName = styled(Header)`
  &&& {
    color: #BF9BBD;
    font-size: 18px;
    margin: 0;
  }
`;

export const StyledLocation = styled.p`
  &&& {
    font-size: 15px;
    color: rgba(0,0,0,.6);
  }
`;

export const StyledPosition = styled(Header)`
  &&& {
    color: #BF9BBD;
    font-size: 16px;
    margin: 0;    
    // Laptop(L)+
    @media (min-width: 1440px) {
      font-size: 18px;
    }
  }
`;

export const StyledSkill = styled(Label)`
  &&& {
    background-color: #ffffff;
    border: 1px solid #BF9BBD;
    color: rgba(0,0,0,.68);
    font-family: "Verdana", "Comic Sans MS", Roboto;
    font-size: 10px;
    font-weight: normal;
    margin: 0px 5px 5px 0px;
    // Laptop(L)+
    @media (min-width: 1440px) {
      font-size: 12px;
    }
  }
`;


