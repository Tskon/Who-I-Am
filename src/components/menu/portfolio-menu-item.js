import React from 'react';
import {NavLink} from 'react-router-dom';

export default class MenuItem extends React.Component {
  isActiveFunc(link){
    return link === document.location.hash.slice(1);
  }
  render() {
    return (
      <NavLink isActive={()=>{return this.isActiveFunc(this.props.data.link)}}
               activeClassName="portfolio-menu__item_active" to={this.props.data.link}>
        <li>
          {this.props.data.title}
        </li>
      </NavLink>
    );
  }
}