import React from 'react';
import {mainMenuItems as menuItems} from 'data/data';
import {setBurgerWidth} from 'lib/burger-btn';

import Item from 'components/menu/menu-item';
import Burger from 'components/menu/burger-menu';

export default class Menu extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      isBurgerShow: false
    };

    this.setState = this.setState.bind(this);
  }

  componentDidMount() {
    setBurgerWidth(800,
      () => {
        this.setState({
          isBurgerShow: true
        })
      },
      () => {
        this.setState({
          isBurgerShow: false
        });
      })
  }

  render() {
    let items = menuItems.map((item, i) => {
        return <Item data={item} key={i}/>;
      });

    let menu = (
        <ul className="main-menu">
          {items}
        </ul>
    );

    if (this.state.isBurgerShow) {
      menu = (
        <Burger/>
      );
    }

    return (
      <div>
        {menu}
      </div>
    );
  }
}