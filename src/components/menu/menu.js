import React from 'react';
import {menuItems} from '../../data/data';
import {setBurger} from '../../lib/burger-btn';

import Item from './menu-item';
import BurgerBtn from './burger-btn';

export default class Menu extends React.Component {
  componentDidMount(){
    setBurger('.main-menu', 'menu-hidden');
  }
  render() {
    let items = menuItems.map((item, i) => {
      return <Item data={item} key={i}/>;
    });

    return (
      <div>
        <div className="main-menu__burger">
          <BurgerBtn/>
        </div>
        <ul className="main-menu menu-hidden">
          {items}
        </ul>
      </div>
    );
  }
}