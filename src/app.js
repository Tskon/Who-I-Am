import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import './lib/main';

// layout
import Index from './layouts/index-page';
// components


ReactDOM.render(
  <HashRouter>
    <Index/>
  </HashRouter>
  , document.querySelector('main')
);