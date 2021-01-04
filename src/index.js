import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import useEffect from './useEffect'
import useEffect2 from './LearnUE2'
import useRef from './LearnUseRef'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route exact path="/" component={App}/>
    <Route exact path="/ue" component={useEffect}/>
    <Route exact path="/ue2" component={useEffect2}/>
    <Route exact path ="/ur" component={useRef}/>

  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);