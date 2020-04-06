import styled from "styled-components";
import {Segment} from "semantic-ui-react";

export const StyledWorkWrapper = styled(Segment)`
  &&& {
    background-color: #ffffff;
    padding: 60px 50px;
    border-radius: 15px;
    border: none;
    // Laptop(L)+
    @media (min-width: 1440px) {
      padding: 60px 150px;
    }
    // Laptop - Laptop(L)
    @media (min-width: 1024px) and (max-width: 1439px) {
      padding: 60px 80px;
    }
    // Mobile(L) - Tablet
    @media (min-width: 425px) and (max-width: 767px) {
      padding: 60px 40px;
    }
    // Mobile(S) - Mobile(L)
    @media (min-width: 320px) and (max-width: 424px) {
      padding: 60px 20px;
    }
  }
`;

export const StyledLine = styled.hr`
  &&& {
    display: inline-block;
    width: 60px;
    margin: 0px 15px 10px 15px;
    border: 2px solid #BF9BBD;
    // Tablet - Laptop
    @media (min-width: 768px) and (max-width: 1023px) {
      width: 40px;
    }
    // Tablet -
    @media (max-width: 767px) {
      margin: 10px 15px 10px 15px;
      width: 250px;
    }
  }
`;