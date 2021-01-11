import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import useEffect from './useEffect'
import useEffect2 from './LearnUE2'
import useRef from './LearnUseRef'
import useMemo from './LearnUseMemo'
import useReducer from './LearnUseReducer'
import useReducer2 from './LearnUseReducer2'
import useContext from './LearnUseContext'
import customHooks from './CustomHooks'
import useCallback from './LearnUseCallback'
import TodoApp from './TodoApp'


import {BrowserRouter, Switch, Route} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route exact path="/" component={App}/>
    <Route exact path="/ue" component={useEffect}/>
    <Route exact path="/ue2" component={useEffect2}/>
    <Route exact path="/ur" component={useRef}/>
    <Route exact path="/um" component={useMemo}/>
    <Route exact path="/ured" component={useReducer}/>
    <Route exact path="/ured2" component={useReducer2}/>
    <Route exact path="/uc" component={useContext}/>
    <Route exact path="/ch" component={customHooks}/>
    <Route exact path="/ucb" component={useCallback}/>
    <Route exact path="/times" component={TodoApp}/>


  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);