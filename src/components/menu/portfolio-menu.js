import React from 'react';
import {portfolioMenuItems} from '../../data/data';

import MenuItem from '../menu/portfolio-menu-item';

export default class Menu extends React.Component{
  render(){
    const menuItems = portfolioMenuItems.map((item, i) => {
      return <MenuItem data={item} key={i}/>;
    });
    return (
      <ul className="portfolio-menu__list">
        {menuItems}
      </ul>
    )
  }
}