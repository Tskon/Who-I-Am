import React from 'react';
import {contentHeight} from '../../lib/content';
import {portfolioMenuItems} from '../../data/data';
import {Switch, Route} from 'react-router-dom';

import MenuItem from '../menu/portfolio-menu-item';
import Bredik from '../portfolio/bredik';
import Resume from '../portfolio/resume';

export default class Skills extends React.Component {
  componentDidMount() {
    contentHeight('.content');
  }

  render() {
    const menuItems = portfolioMenuItems.map((item, i)=>{
      return <MenuItem data={item} key={i}/>;
    });
    return (
      <div className="content portfolio">
        <ul className="portfolio-menu">
          {menuItems}
          <Switch>
            <Route path="/portfolio/bredik" component={Bredik}/>
            <Route path="/portfolio/resume" component={Resume}/>
          </Switch>
        </ul>
      </div>
    );
  }
}