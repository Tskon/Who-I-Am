import React from 'react';
import {contentHeight} from '../../lib/content';

export default class Skills extends React.Component {
  componentDidMount() {
    contentHeight('.content');
  }

  render() {
    return (
      <div className="content">
        <h1>Портфолио</h1>
        <div className="content__row">
          <div className="portfolio-item">
            <h2>Этот сайт</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque blanditiis delectus ducimus eveniet
              facere hic incidunt inventore laudantium, necessitatibus non quae reiciendis rem, repellendus
              reprehenderit sunt velit veniam voluptas voluptatem.
            </p>
          </div>
          <div className="portfolio-item">
            <h2>Текущий проект:</h2>
            <a href="http://bredik.space/" target="_blank">
              <h3>Bredik</h3>
            </a>
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
        </div>
      </div>
    );
  }
}