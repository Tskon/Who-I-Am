import React from 'react';
import {contentHeight} from '../../lib/content';

export default class Contacts extends React.Component{
  componentDidMount(){
    contentHeight('.content');
  }

  render() {
    return (
      <div className="content">
        <ul className="contacts">
          <li>Мобильный: +7-963-323-33-83</li>
          <li>Telegram: @beatxd</li>
          <li>E-mail: tsekhmeister.k@gmail.com</li>
        </ul>
      </div>
    );
  }
}