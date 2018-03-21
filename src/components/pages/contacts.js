import React from 'react';
import {contentHeight} from '../../lib/content';

export default class Contacts extends React.Component{
  componentDidMount(){
    contentHeight('.content');
  }

  render() {
    return (
      <div className='content'>
        <h1>Контакты</h1>
        <ul>
          <li>Мобильный: +7-963-323-33-83</li>
          <li>Telegram: @beatxd</li>
          <li>E-mail: tsekhmeister.k@gmail.com</li>
        </ul>
        <p>
          Живу в Санкт-Петербурге, спокойно отношусь к командировкам.
        </p>
      </div>
    );
  }
}