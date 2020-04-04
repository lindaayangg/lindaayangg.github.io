import styled from "styled-components";
import {Segment} from "semantic-ui-react";

export const StyledWorkWrapper = styled(Segment)`
  &&& {
    background-color: #ffffff;
    padding: 60px 150px;
    // Need adjustment for smaller screen laptops
    border-radius: 15px;
    border: none;
  }
`;

export const StyledLine = styled.hr`
  &&& {
    display: inline-block;
    width: 60px;
    margin: 0px 15px 10px 15px;
    border: 2px solid #BF9BBD;
  }
`;