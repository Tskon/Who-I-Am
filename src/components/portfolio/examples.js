import React from 'react';

export default class Bredik extends React.Component {
  render() {
    return (
      <div className="portfolio-item">
        <h1 className="portfolio-item__title">Примеры работ</h1>
        <p>(не размещены на хостинге)</p>
        <div className="example">
          <h2 className="example__title">Frontend часть корзины по PSD макету</h2>
          <b>Техническое задание:</b>
          <p> Из функционала необходимо реализовать:</p>
          <ol>
            <li>
              Счетчик количества с возможностью добавления, отнимания количества. При количестве "1" - декремент
              сделать opacity: 0.5, запретить клик по элементу.
            </li>
            <li>
              Возможность удаления товара. При нажатии кнопки "Удалить", кнопка меняет свое состояние на "Вернуть".
              Сама строка становится полупрозрачной, за исключением кнопки "Вернуть".
            </li>
            <li>
              Клик на "Вернуть" возвращает строку в исходное состояние прозрачности и меняет кнопку на "Удалить"
            </li>
            <li>
              Прогресс бар реализуется при взаимодействии с бэкендом. Бэкенд делать не надо, механика шкалы
              следующая: в атрибут data-progress передается значение, например "50". Значение из атрибута определяет
              длину заполненного бара в процентном эквиваленте - 50%. Цифровое обозначение прогресса тоже берется
              из data-progress, к нему добавляется символ %. Значение выводится в конце заполненного прогресс-бара.
              Сделать самостоятельно без подключения плагинов и готовых решений.
            </li>
          </ol>
          <div className="portfolio-item__row">
            <div className="portfolio-item__block_space">
              <b>Стек технологий:</b>
              <p>React/SCSS/Webpack/Flex</p>
            </div>
            <div className="portfolio-item__block_space">
              <a href="./examples/busket/index.html" target="_blank">Показать демо</a>
            </div>
            <div className="portfolio-item__block_space">
              Исходник на <a href="https://github.com/Tskon/pizza-busket" target="_blank">github
              <img src="../../img/svg/github.svg" alt="github" title="github" className="portfolio-item__git-img"/>
            </a>
            </div>
          </div>
        </div>
        <div className="example">
          <h2 className="example__title">Лист строй-товаров из JSON</h2>
          <div className="portfolio-item__row">
            <div className="portfolio-item__block_space">
              <b>Стек технологий:</b>
              <p>React/SCSS/Webpack/Flex</p>
            </div>
            <div className="portfolio-item__block_space">
              <a href="./examples/products-list/index.html" target="_blank">Показать демо</a>
            </div>
            <div className="portfolio-item__block_space">
              Исходник на <a href="https://github.com/Tskon/Test-tasks/tree/master/product-card" target="_blank">github
              <img src="../../img/svg/github.svg" alt="github" title="github" className="portfolio-item__git-img"/>
            </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}