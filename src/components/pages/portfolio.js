import React from 'react';
import {contentHeight} from '../../lib/content';
import {Switch, Route} from 'react-router-dom';
import libPortfolio from '../../lib/portfolio';

import PortfolioMenu from '../menu/portfolio-menu';
import Bredik from '../portfolio/bredik';
import Resume from '../portfolio/resume';
import Git from '../portfolio/git';
import Examples from '../portfolio/examples';

export default class Skills extends React.Component {
  componentDidMount() {
    contentHeight('.content');
    libPortfolio();
  }
  render() {
    return (
      <div className="content">
        <div className="portfolio-menu">
          <h2 className="portfolio-menu__title">Мой код</h2>
          <PortfolioMenu/>
        </div>
        <div className="portfolio-content">
          <Switch>
            <Route path="/portfolio/bredik" component={Bredik}/>
            <Route path="/portfolio/resume" component={Resume}/>
            <Route path="/portfolio/git" component={Git}/>
            <Route path="/portfolio/examples" component={Examples}/>
          </Switch>
        </div>
      </div>
    );
  }
}