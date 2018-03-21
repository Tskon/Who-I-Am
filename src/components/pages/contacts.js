import React from 'react';

export default class Contacts extends React.Component{
  render() {
    return (
      <div className='content'>
        <h1>Контакты</h1>
        <ul>
          <li>Мобильный: +7-963-323-33-83</li>
          <li>Telegram: @beatxd</li>
          <li>E-mail: tsekhmeister.k@gmail.com</li>
        </ul>
      </div>
    );
  }
}