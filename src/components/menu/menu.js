import React from 'react';
import {menuItems} from '../../data/data';

import Item from './menu-item';

export default class Menu extends React.Component {
  render() {
    let items = menuItems.map((item, i) => {
        return <Item data={item} key={i}/>;
    });

    return (
      <ul className="main-menu">
        {items}
      </ul>
    );
  }
}