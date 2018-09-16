import React from 'react';
import LandingPage from './landingpage';
import About from './aboutme';
import Contact from './contact';
import Resume from './resume';
import Projects from './projects';
import {Link} from "react-router-dom";
import {Switch, Route} from 'react-router-dom';

const Main = () => (
  <Switch>
  <Route exact path = "/" component = {LandingPage} />
  <Route exact path = "/aboutme" component = {About} />
  <Route exact path = "/contact" component = {Contact} />
  <Route exact path = "/projects" component = {Projects} />
  <Route exact path = "/resume" component = {Resume} />

  </Switch>
)

export default Main;
