import React from 'react';
import { NavContainer, NavigationLink, NavLogo, NavLinksContainer } from '../../Styled/Header';
const HeaderNav = () => {
  return (
    <NavContainer>
      <NavLinksContainer>
        <NavLogo to='/'>MKS</NavLogo>
      </NavLinksContainer>
      <NavLinksContainer>
        <NavigationLink to='/'>Home</NavigationLink>
        <NavigationLink to='/shop'>Shop</NavigationLink>
        <NavigationLink to='/contact'>Contacts</NavigationLink>
        <NavigationLink to='/about'>About</NavigationLink>
        <NavigationLink to='/admin'>admin</NavigationLink>
      </NavLinksContainer>
    </NavContainer>
  );
};

export default HeaderNav;
