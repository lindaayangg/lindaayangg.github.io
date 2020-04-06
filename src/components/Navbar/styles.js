import styled from "styled-components";
import {Menu} from "semantic-ui-react";

export const StyledNavbarWrapper = styled(Menu)`
  &&& {
    background-color: #000000;
    padding: 30px;
    box-shadow: none;
    border: none;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    // Mobile(S) - Tablet
    @media (min-width: 320px) and (max-width: 767px) {
      justify-content: center;
      padding: 20px;
    }
  }
`;