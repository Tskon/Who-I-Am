import React from 'react';
import {Switch, Route} from 'react-router-dom';

// components for blog layout
import Menu from '../components/menu/menu';
import Hello from '../components/pages/hello';
import Contacts from '../components/pages/contacts';
import Skills from '../components/pages/skills';
import Portfolio from '../components/pages/portfolio';

//data
import data from '../data/data';

export default class Blog extends React.Component {
  constructor() {
    super(...arguments);
  }

  render() {
    return (
      <div className="container">
        <Menu/>
        <Switch>
          <Route exact path='/' component={Hello}/>
          <Route path='/hello' component={Hello}/>
          <Route path='/contacts' component={Contacts}/>
          <Route path='/skills' component={Skills}/>
          <Route path='/portfolio' component={Portfolio}/>
        </Switch>
      </div>
    )
  }
}