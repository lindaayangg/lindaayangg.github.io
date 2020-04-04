import styled from "styled-components";
import {Button, Image, Segment} from "semantic-ui-react";

export const StyledAboutWrapper = styled(Segment)`
  &&& {
    background-color: #ffffff;
    padding: 60px 150px;
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

export const StyledLine = styled.hr`
  &&& {
    display: inline-block;
    width: 60px;
    margin: 0px 15px 10px 15px;
    border: 2px solid #C5D9F5;
  }
`;

export const StyledImageContainer = styled.div`
  &&& {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
  }
`;

export const StyledImage = styled(Image)`
  &&& {
    width: 40%;
    height: auto;
    border-radius: 10px;
  }
`;

export const StyledDescription = styled.div`
  &&& {
    margin-top: 50px;
    text-align: center;
    color: #4f4f4f;
    line-height: 1.5;
    font-size: 18px;
  }
`;

export const StyledSocialContainer = styled.div`
  &&& {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 35px;
  }
`;

export const StyledSocialButtons = styled(Button)`
  &&& {
    margin: 0px 12px;
    background-color: #C5D9F5;
  }
`;