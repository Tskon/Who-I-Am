import React from 'react';
import {contentHeight} from '../../lib/content';

export default class Header extends React.Component {
  componentDidMount() {
    contentHeight('.content');
  }

  render() {
    return (
      <div className='content'>
        <h1>Константин Цехмейстер</h1>
        <div className="my-photo-wrapper"/>
        <h2>Frontend-developer</h2>
        <p>Санкт-Петербург</p>
      </div>
    )
  }
}