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
import Navbar from './components/Navbar'


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
	  </Router>
  </Provider>,
  document.getElementById('app') // make sure this is the same as the id of the div in your index.html
);


// <Route path='/landing' component = {Landing} />
// <Route path='/' component = {AppContainer} onEnter={onAppEnter}>
// </Route>
