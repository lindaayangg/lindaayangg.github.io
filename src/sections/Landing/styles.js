import styled from "styled-components";
import {Button, Header} from "semantic-ui-react";

export const StyledLandingWrapper = styled.div`
  &&& {
    background-color: #000000;
  }
`;

export const StyledContentWrapper = styled.div`
  &&& {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    color: #FFFFFF;
    text-align: -webkit-center;
  }
`;

export const StyledHeader = styled(Header)`
  &&& {
    color: #fff;
    margin-top: 15px;
    font-size: 42px;
    font-family:  "Bradley Hand", "Comic Sans MS", Roboto;
    @media (max-width: 450px) {
      font-size: 30px;
    }
    @media (max-width: 400px) {
      font-size: 25px;
    }
  }
`;

export const StyledDownIcon = styled(Button)`
  &&& {
    background-color: transparent;
    color: #ffffff;
    width: 50px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -25px;
    margin-bottom: 30px;
  }
`;
