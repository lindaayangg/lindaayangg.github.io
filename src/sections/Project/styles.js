import styled from "styled-components";
import {Grid, Segment} from "semantic-ui-react";

export const StyledProjectGrid = styled(Grid)`
  &&& {
    margin-top: 50px;
  }
`;

export const StyledProjectWrapper = styled(Segment)`
  &&& {
    background-color: #ffffff;
    padding: 60px;
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
    border: 2px solid #68BAF0;
  }
`;