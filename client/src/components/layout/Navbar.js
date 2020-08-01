import React from 'react';
import { Container } from '../../Styled/Container';
import Header from './Header';
import HeaderNav from './HeaderNav';

const Navbar = () => {
  return (
    <Container>
      <Header />
      <HeaderNav />
    </Container>
  );
};

export default Navbar;
