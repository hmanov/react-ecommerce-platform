import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Container } from '../../Styled/Container';
import Header from './Header';
import HeaderNav from './HeaderNav';

const Navbar = () => {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <HeaderNav />
      </Container>
      <Switch></Switch>
    </BrowserRouter>
  );
};

export default Navbar;
