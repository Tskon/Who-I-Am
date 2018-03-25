import React from 'react';
import {contentHeight} from '../../lib/content';
import {portfolioMenuItems} from '../../data/data';
import {Switch, Route} from 'react-router-dom';
import libPortfolio from '../../lib/portfolio';

import MenuItem from '../menu/portfolio-menu-item';
import Bredik from '../portfolio/bredik';
import Resume from '../portfolio/resume';
import Git from '../portfolio/git';

export default class Skills extends React.Component {
  componentDidMount() {
    contentHeight('.content');
    libPortfolio();
  }

  render() {
    const menuItems = portfolioMenuItems.map((item, i) => {
      return <MenuItem data={item} key={i}/>;
    });
    return (
      <div className="content">
        <div className="portfolio-menu">
          <h2 className="portfolio-menu__title">Мой код</h2>
          <ul className="portfolio-menu__list">
            {menuItems}
          </ul>
        </div>
        <div className="portfolio-content">
          <Switch>
            <Route path="/portfolio/bredik" component={Bredik}/>
            <Route path="/portfolio/resume" component={Resume}/>
            <Route path="/portfolio/git" component={Git}/>
          </Switch>
        </div>
      </div>
    );
  }
}