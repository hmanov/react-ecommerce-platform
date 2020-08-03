import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { ContainerBody, Container } from './Styled/Container';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Shop from './components/pages/Shop';
import Contact from './components/pages/Contact';
import Register from './components/pages/Register';
import Admin from './components/pages/Admin';
import { ThemeProvider } from 'styled-components';
import { theme } from './Styled/theme';

//context

import AuthProvider from './context/AuthProvider';
import ProductProvider from './context/ProductProvider';

const App = () => (
  <AuthProvider>
    <ProductProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <ContainerBody>
            <Navbar />
            <Container>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/shop' component={Shop} />
                <Route exact path='/contact' component={Contact} />
                <Route exact path='/about' component={About} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/admin' component={Admin} />
              </Switch>
            </Container>
          </ContainerBody>
        </Router>
      </ThemeProvider>
    </ProductProvider>
  </AuthProvider>
);
export default App;
