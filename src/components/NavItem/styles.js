import styled from "styled-components";
import {Menu} from "semantic-ui-react";

export const StyledNavItem = styled(Menu.Item)`
  &&& {
    color: #ffffff;
    text-align: center;
    cursor: pointer;
    font-size: 15px;
    margin: 0px 15px;
    font-family: Karla;
    // Laptop - Laptop(L)
    @media (min-width: 1024px) {
      margin: 0px 20px;
      font-size: 17px;
    }
    // Mobile(S) - Mobile(M)
    @media (min-width: 320px) and (max-width: 374px) {
      margin: 0px 10px;
    }
  }
`;
