import styled from "styled-components";
import {Button, Header} from "semantic-ui-react";

export const StyledContentWrapper = styled.div`
  &&& {
    align-items: center;
    display: flex;
    flex-direction: column;
    background-color: #fafafa;
  }
`;

export const StyledSectionWrapper = styled.div`
  &&& {
    margin: 60px 0px 0px 0px;
    width: 75%;
  }
`;

export const StyledSectionTitle = styled(Header)`
  &&& {
    font-size: 32px;
    text-align: center;
    font-weight: normal;
    color: #4f4f4f;
    font-family: "Comic Sans MS", Roboto;
  }
`;

export const StyledButton = styled(Button)`
  &&& {
    margin: 0px 12px;
    background-color: #ffffff;
    border: 2px solid #C5D9F5;
    font-family: "Comic Sans MS", Roboto;
  }
`;