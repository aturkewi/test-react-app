import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
// const {Router, browserHistory } = require('react-router')
import Routes from './Routes';
import './index.css';

ReactDOM.render(
  <Router
    history={browserHistory}
    routes={Routes} />,
  document.getElementById('root')
);
