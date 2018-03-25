import React from 'react';

export default class Bredik extends React.Component {
  render() {
    return (
      <div className="portfolio-item">
        <h1 className="portfolio-item__title">
          Сайт-портфолио
        </h1>
        <p>
          Это текущий проект, который представляет собой ресурс для разработчиков, содержащий готовые решения,
          которые можно легко внедрить.
        </p>
        <p>
          Исходник на <a href="https://github.com/Tskon/Who-I-Am" target="_blank">github
          <img src="../../img/svg/github.svg" alt="github" title="github" className="portfolio-item__git-img"/>
        </a>
        </p>
        <div>
          <h2>Технологии:</h2>
          <div className="portfolio-item__row">
            <ul>
              <b>BackEnd</b><br/>
              <li>Отсутствует. Навигация реализована на react HashRouter</li>
            </ul>
            <ul>
              <b>FrontEnd</b><br/>
              <li>JavaScript (es6)</li>
              <li>React</li>
              <li>SCSS</li>
              <li>Без библиотек</li>
              <li>Адаптив на flex</li>
            </ul>
            <ul>
              <b>Cборка</b><br/>
              <li>Webpack 3</li>
              <li>Babel</li>
              <li>SVG превращается в CSS</li>
              <li>Uglify</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}