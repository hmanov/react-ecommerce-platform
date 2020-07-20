import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import './App.css';
import { ContainerBody, Container } from './Styled/Container';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import About from './pages/About';

const App = () => (
  <Router>
    <ContainerBody>
      <Navbar />
      <Container>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
        </Switch>
      </Container>
    </ContainerBody>
  </Router>
);
export default App;
