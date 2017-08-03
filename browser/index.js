import React from 'react';
import ReactDOM from 'react-dom';
import scss from '../index.scss';

import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import store from './store';

import Home from './components/Home';
import Reading from './components/Reading';
import About from './components/About';
import Writing from './components/Writing';
import Projects from './components/Projects';
import Travel from './components/Travel';
import Navbar from './components/Navbar';
import CentralAmerica from './components/CentralAmerica';
import SouthAmerica from './components/SouthAmerica';
import Europe from './components/Europe';
import Mexico from './components/Mexico';
import Nicaragua from './components/Nicaragua';
import Costarica from './components/Costarica';
import Panama from './components/Panama';



ReactDOM.render(
  <Provider store={store}>
  	<Router history = {hashHistory}>
        <IndexRoute path='/home' component={Home} />
        <Route path='/' component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/reading" component={Reading} />
        <Route path="/reading/:year" component={Reading} />
        <Route path="/writing" component={Writing} />
        <Route path="/projects" component={Projects} />
        <Route path="/travel" component={Travel} />
          <Route path="/travel/central-america" component={CentralAmerica} />
          <Route path="/travel/central-america/mexico" component={Mexico} />
          <Route path="/travel/central-america/nicaragua" component={Nicaragua} />
          <Route path="/travel/central-america/costarica" component={Costarica} />
          <Route path="/travel/central-america/panama" component={Panama} />


          <Route path="/travel/south-america" component={SouthAmerica} />
          <Route path="/travel/europe" component={Europe} />
	  </Router>
  </Provider>,
  document.getElementById('app') // make sure this is the same as the id of the div in your index.html
);
