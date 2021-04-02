import styled from "styled-components";
import {GridRow, Header, Image, Label, Segment} from "semantic-ui-react";

export const StyledProjectCard = styled(Segment)`
  &&& {
    background-color: #fff;
    border-radius: 15px;
    border: none;
  }
`;

export const StyledProjectImage = styled(Image)`
  &&& {
    width: 100%;
    &:hover {
      opacity:0.5;
      -moz-transition: all 0.7s;
      -webkit-transition: all 0.7s;
      transition: all 0.7s;
    }
  }
`;

export const StyledImageRowWrapper = styled(GridRow)`
  &&& {
    padding: 0;
  }
`;

export const StyledDescriptionRowWrapper = styled(GridRow)`
  &&& {
    padding: 20px;
    display: flex;
    flex-direction: column;
    font-family: Karla;
  }
`;

export const StyledProjectName = styled(Header)`
  &&& {
    font-family: Karla;
    color: #c3b282;
    font-size: 16px;
    margin: 0;
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
    margin-top: 8px;
    font-size: 15px;
    color: rgba(0,0,0,.68);
  }
`;

export const StyledTool = styled(Label)`
  &&& {
    background-color: #f5f2ea;
    border-radius: 15px;
    color: rgba(0,0,0,.68);
    font-size: 12px;
    font-weight: normal;
    margin: 0 5px 5px 0;
  }
`;


