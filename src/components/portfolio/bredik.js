import React from 'react';

export default class Bredik extends React.Component {
  render() {
    return (
      <div className="portfolio-item">
        <h1 className="portfolio-item__title">
          Bredik
        </h1>
        <p>
          Это текущий проект на ранней стадии представляющий собой ресурс для разработчиков, содержащий готовые
          решения,
          которые можно легко внедрить. Развивают данный ресурс три человека.
        </p>
        <a href="http://bredik.space/" target="_blank">http://bredik.space</a>
        <p>
          Исходник на <a href="https://github.com/Tskon/Bredik" target="_blank">github
          <img src="../../img/svg/github.svg" alt="github" title="github" className="portfolio-item__git-img"/></a>
        </p>
        <div>
          <h2>Технологии:</h2>
          <div className="portfolio-item__row">
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
          <h2>Мой вклад:</h2>
          <div className="portfolio-item__list_center">
            <ul>
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
          <b>Реализовано:</b>
          <p>
            Авторизация через Goggle, полноценный реакт-роутинг
            (и на клиенте и на сервере).
          </p>
          <b>Ближайшие планы:</b>
          <p>
            Перевод верстки с Bootstrap на адаптивную верстку flex'ами. Добавить карточку
            (страницу) контента и реализовать корректный вывод материала на страницы со списком материалов. Добавить
            CRUD функционал для пользователей и материалов в админ-панель. На этапе разработки админ-панель доступна без
            проверки на пользователя,
            сам функционал данной проверки уже реализован.
          </p>
        </div>
      </div>
    )
  }
}