import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

// layout
import Blog from './layouts/index-page';
// components


ReactDOM.render(

    <Router history={browserHistory}>
      <Route path="/" component={Blog}>
        <IndexRoute component={Marketing}/>
        <Route path="followers" component={Followers}/>
        <Route path="*" component={PageNotFound}/>
      </Route>
    </Router>
  </Provider>
  , document.querySelector('main')
);