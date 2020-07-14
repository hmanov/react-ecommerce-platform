import React from 'react';
import { NavContainer, NavLink } from '../../Styled/Header';
const HeaderNav = () => {
  return (
    <NavContainer>
      <NavLink>Home</NavLink>
      <NavLink>Shop</NavLink>
      <NavLink>Contacts</NavLink>
      <NavLink>About</NavLink>
    </NavContainer>
  );
};

export default HeaderNav;
