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
  }
`;

export const StyledCompanyLogo = styled(Image)`
  &&& {
    width: 120px;
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
  }
`;

export const StyledPosition = styled(Header)`
  &&& {
    color: #BF9BBD;
    font-size: 18px;
    margin: 0;
  }
`;

export const StyledDate = styled.p`
  &&& {
    margin: 0;
    font-size: 15px;
    color: rgba(0,0,0,.4);
  }
`;

export const StyledDescription = styled.p`
  &&& {
    margin-top: 5px;
    font-size: 15px;
    color: rgba(0,0,0,.68);
  }
`;

export const StyledSkill = styled(Label)`
  &&& {
    background-color: #ffffff;
    border: 1px solid #BF9BBD;
    color: rgba(0,0,0,.68);
    font-family: Roboto;
    font-size: 12px;
    margin: 0px 5px 5px 0px;
  }
`;


