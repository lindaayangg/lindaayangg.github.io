import styled from "styled-components";
import {Button, Image} from "semantic-ui-react";

export const StyledImage = styled(Image)`
  &&& {
    border-radius: 10px;
  }
`;

export const StyledDescription = styled.div`
  &&& {
    color: #4f4f4f;
    line-height: 1.5;
    font-size: 16px;
    font-family: Karla;
  }
`;

export const StyledSocialContainer = styled.div`
  &&& {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 24px;
  }
`;

export const StyledSocialButtons = styled(Button)`
  &&& {
    margin: 0 12px;
    background-color: #f5f2ea;
  }
`;