import React from 'react';

export default class Bredik extends React.Component {
  render() {
    return (
      <div className="portfolio-item">
        <h2>Текущий проект:</h2>
        <b>
          <a href="http://bredik.space/" target="_blank">Bredik</a>
        </b>
        <p>
          Проект представляет собой ресурс для готовых решений для разработчиков, которые можно легко
          внедрить. Развивают три человека.
        </p>
        <div>
          <h3>Технологии:</h3>
          <div className="content__row">
            <ul>
              <b>BackEnd</b><br/>
              <li>Node.js</li>
              <li>Express</li>
              <li>Passport</li>
              <li>MySQL</li>
            </ul>
            <ul>
              <b>FrontEnd</b><br/>
              <li>JavaScript (es6)</li>
              <li>React</li>
              <li>Redux</li>
              <li>SCSS</li>
              <li>Bootstrap 4</li>
            </ul>
            <ul>
              <b>Cборка</b><br/>
              <li>Webpack 3</li>
              <li>Babel</li>
              <li>Uglify</li>
            </ul>
          </div>
          <hr/>
          <ul>
            <h3>Мой вклад:</h3>
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
    )
  }
}