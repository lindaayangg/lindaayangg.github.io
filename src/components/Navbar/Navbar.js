import React, {Component} from 'react';
import {StyledNavbarWrapper} from "./styles";
import NavItem from "../NavItem/NavItem";
import strings from "../../res/strings";
import {Container1040} from "../../res/styles";

class Navbar extends Component {

  render() {
    return (
      <Container1040>
        <StyledNavbarWrapper>
          <NavItem link={'home'} item={strings.navbar.home}/>
          <NavItem link={'about'} item={strings.navbar.about}/>
          <NavItem link={'experience'} item={strings.navbar.experience}/>
          <NavItem link={'project'} item={strings.navbar.project}/>
        </StyledNavbarWrapper>
      </Container1040>
    )
  }
}

export default Navbar;