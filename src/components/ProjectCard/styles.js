import styled from "styled-components";
import {Button, GridRow, Header, Image, Label, Segment} from "semantic-ui-react";

export const StyledProjectCard = styled(Segment)`
  &&& {
    background-color: #fff;
    border-radius: 15px;
    border: none;
    //box-shadow:   
    //0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    //0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    //0 12.5px 10px rgba(0, 0, 0, 0.06),
    //0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    //0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    //0 100px 80px rgba(0, 0, 0, 0.12);
  }
`;

export const StyledProjectImage = styled(Image)`
  &&& {
    width: 100%;
    border-radius: 15px 15px 0px 0px;
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
  }
`;

export const StyledProjectName = styled(Header)`
  &&& {
    color: #68BAF0;
    font-size: 18px;
    margin: 0;
  }
`;

export const StyledGithubIcon = styled(Button)`
  &&& {
    background-color: transparent;
    color: #68BAF0;
    margin: -3px 0px 0px 5px;
    font-size: 1.3em;
    &:hover{
      opacity: 0.7;
    }
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

export const StyledTool = styled(Label)`
  &&& {
    background-color: #ffffff;
    border: 1px solid #68BAF0;
    color: rgba(0,0,0,.68);
    font-family: "Verdana", "Comic Sans MS", Roboto;
    font-size: 12px;
    font-weight: normal;
    margin: 0px 5px 5px 0px;
  }
`;


