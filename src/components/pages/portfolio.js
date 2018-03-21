import React from 'react';
import {contentHeight} from '../../lib/content';

export default class Skills extends React.Component {
  componentDidMount(){
    contentHeight('.content');
  }

  render() {
    return (
      <div className="content">
        <h1>Портфолио</h1>
        <h2>Текущий проект:</h2>
        <a href="http://bredik.space/">
          <h3>Bredik</h3>
        </a>
        <p>
          Проект представляет собой ресурс для готовых решений для разработчиков, которые можно легко
          внедрить. Развивают три человека.
        </p>
        <div className="content__row">
          <ul>
            <b>Технологии:</b>
            <li>
              BackEnd
              <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>Passport (регистрация через google)</li>
                <li>MySQL</li>
              </ul>
            </li>
            <li>
              FrontEnd
              <ul>
                <li>JavaScript (es6/2015)</li>
                <li>React</li>
                <li>Redux</li>
                <li>SCSS</li>
              </ul>
            </li>
            <li>
              Cборка
              <ul>
                <li>Webpack 3</li>
                <li>Babel</li>
                <li>Uglify</li>
              </ul>
            </li>
          </ul>
          <ul>
            <b>Мой вклад:</b>
            <li>Организация процесса разработки</li>
            <li>Создание и разработка архитектуры</li>
            <li>Backend (весь)</li>
            <li>
              FrontEnd
              <ul>
                <li>Перевод верстки на React</li>
                <li>React router + его синхронизация с BackEnd</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}