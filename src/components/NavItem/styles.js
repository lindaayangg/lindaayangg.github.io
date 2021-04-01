import styled from "styled-components";
import {Menu} from "semantic-ui-react";

export const StyledNavItem = styled(Menu.Item)`
  &&& {
    color: #000000;
    text-align: center;
    cursor: pointer;
    font-size: 15px;
    margin: 0 15px;
    font-family: Karla;

    &::after {
      content: "";
      display: block;
      margin: auto;
      height: 2px;
      width: 0;
      background: transparent;
      transition: width 500ms ease;
    }

    &:hover {
      color: #4c4c4c;
    }

    &:hover::after {
      width: 100%;
      background: #4c4c4c;
    }

    // Laptop - Laptop(L)
    @media (min-width: 1024px) {
      margin: 0 20px;
      font-size: 17px;
    }
    // Mobile(S) - Mobile(M)
    @media (min-width: 320px) and (max-width: 374px) {
      margin: 0px 10px;
    }
  }
`;
