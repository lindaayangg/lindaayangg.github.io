import React, {Component} from 'react';
import {StyledNavbarWrapper} from "./styles";
import NavItem from "../NavItem/NavItem";
import strings from "../../res/strings";
import {Container1280} from "../../res/styles";

class Navbar extends Component {

  render() {
    return (
      <Container1280>
        <StyledNavbarWrapper>
          <NavItem link={'home'} item={strings.navbar.home}/>
          <NavItem link={'about'} item={strings.navbar.about}/>
          <NavItem link={'experience'} item={strings.navbar.experience}/>
          <NavItem link={'project'} item={strings.navbar.project}/>
        </StyledNavbarWrapper>
      </Container1280>
    )
  }
}

export default Navbar;