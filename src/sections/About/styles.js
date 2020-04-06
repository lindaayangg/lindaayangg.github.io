import styled from "styled-components";
import {Button, Image, Segment} from "semantic-ui-react";

export const StyledAboutWrapper = styled(Segment)`
  &&& {
    background-color: #ffffff;
    padding: 60px 80px;
    border-radius: 15px;
    border: none;
    // Laptop(L)+
    @media (min-width: 1440px) {
      padding: 60px 150px;
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
    border: 2px solid #C5D9F5;
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
    width: 60%;
    height: auto;
    border-radius: 10px;
    // Laptop+
    @media (min-width: 1024px) {
      width: 40%;
    }
    // Mobile(L) - Tablet
    @media (min-width: 425px) and (max-width: 767px) {
      width: 80%;
    }
    // Mobile(S) - Mobile(L)
    @media (min-width: 320px) and (max-width: 424px) {
      width: 90%;
    }
  }
`;

export const StyledDescription = styled.div`
  &&& {
    margin-top: 50px;
    text-align: center;
    color: #4f4f4f;
    line-height: 1.5;
    font-size: 16px;
    // Laptop+
    @media (min-width: 1024px) {
      font-size: 18px;
    }
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
    background-color: #fff;
    border: 2px solid #C5D9F5;
    // Mobile(L) - Tablet
    @media (min-width: 425px) and (max-width: 767px) {
      margin: 0px 10px;
    }
    // Mobile(S) - Mobile(M)
    @media (min-width: 320px) and (max-width: 424px) {
      margin: 0px 8px;
    }
  }
`;

export const StyledResumeButton = styled(Button)`
  &&& {
    margin: 0px 12px;
    background-color: #ffffff;
    border: 2px solid #C5D9F5;
    font-family: "Comic Sans MS", Roboto;
    // Mobile(L) - Tablet
    @media (min-width: 425px) and (max-width: 767px) {
      margin: 0px 10px;
      font-size: 12px;
    }
    // Mobile(S) - Mobile(L)
    @media (min-width: 320px) and (max-width: 424px) {
      margin: 0px 8px;
      font-size: 12px;
    }
  }
`;