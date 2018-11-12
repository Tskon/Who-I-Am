import 'scss/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import 'lib/main';

import Index from 'layouts/index-page';

ReactDOM.render(
  <HashRouter>
    <Index/>
  </HashRouter>
  , document.querySelector('.main')
);