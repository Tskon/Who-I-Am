import React from 'react';
import {contentHeight} from '../../lib/content';

export default class Header extends React.Component {
  componentDidMount(){
    contentHeight('.content');
  }

  render() {
    return (
      <div className='content'>
        <h1>Привет, меня зовут<br/>Константин Цехмейстер</h1>
        <h2>Frontend-developer</h2>
      </div>
    )
  }
}