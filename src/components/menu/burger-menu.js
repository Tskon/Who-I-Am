import React from 'react';

import {setBurger} from '../../lib/burger-btn';
import {menuItems} from '../../data/data';
import Item from './menu-item';

export default class Burger extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      isOpen: false
    }
  }

  componentDidMount() {
    setBurger('.burger-container', () => {
      this.setState({
        isOpen: !this.state.isOpen
      })
    }, menuItems);
  }

  render() {
    let items;

    if (this.state.isOpen) {
      items = menuItems.map((item, i) => {
        return <Item data={item} key={i}/>;
      });
    }

    return (
      <div className="burger-container">
        <div className="burger-menu">
          <div className="burger-click-region">
            <span className="burger-menu-piece"/>
            <span className="burger-menu-piece"/>
            <span className="burger-menu-piece"/>
          </div>
          <span className="burger-menu-txt">Меню</span>
        </div>
        <ul className="burger-menu-list">
          {items}
        </ul>
      </div>
    )
  }
}