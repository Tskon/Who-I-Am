import React from 'react';
import {menuItems} from '../../data/data';
import {Link} from 'react-router-dom';

import Item from './menu-item';

export default class Menu extends React.Component {
  render() {
    let items = menuItems.map((item) => {
        <Item data={item}/>
    });

    return (
      <nav>
        {items}
      </nav>
    );
  }
}