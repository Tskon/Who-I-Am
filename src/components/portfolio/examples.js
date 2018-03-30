import React from 'react';

export default class Bredik extends React.Component {
  render() {
    return (
      <div className="portfolio-item">
        <h1 className="portfolio-item__title">Примеры работ</h1>
        <p>(не размещены на хостинге)</p>
        <div className="example">
          <h2 className="example__title">Лист строй-товаров из JSON</h2>
          <b>Техническое задание:</b>
          <p>
            Необходимо отобразить на странице список товаров в момент загрузки страницы. Данные для каждого товара
            можно получить из файла product.json.
          </p>
          <p>Пример шаблона товара:</p>
          <a href="./examples/products-list/product-card.jpg" target="_blank">
            <img src="./examples/products-list/product-card.jpg" alt="Пример верстки" title="Пример верстки"
                 className="example__big-img"/>
          </a>
          <p> Из функционала необходимо реализовать:</p>
          <ol>
            <li>
              У кнопки купить должен быть атрибут «data-product-id» с уникальным «id» товара.
            </li>
            <li>
              Для картинок использовать строковый модификатор ‘_220x220_1’.
              (т.е. этот модификатор должен появиться перед расширением файла)
            </li>
            <li>
              По клику изменяется количество товара.
            </li>
            <li>
              Должен работать переключатель стоимости товара
            </li>
            <li>
              Требования к браузерам: MS Internet Explorer 10+, Google Chrome 35+, Mozilla Firefox 30+, Opera 20+,
              Safari 8+

            </li>
          </ol>
          <p> Помимо основных требований реализовано:</p>
          <ol>
            <li>
              Адаптив: для мобильных (резиновый макет, крупные кнопки и отступы), для маленьких экранов фиксированный
              размер узкой карточки (убраны лишние блоки данных для компактности), для средних и больших мониторов
              горизонтальный макет (резиновый в определенных границах)
            </li>
            <li>
              Количество товара: вводить либо цифрами в окошко ввода, либо кнопками увеличить/уменьшить.
              Меньше нуля ограничение и проверка на число
            </li>
            <li>
              Из JSON изначально при загрузке страницы забирается весь список товаров, выводятся по 4 элемента, есть
              кнопка «загрузить еще» (без перезагрузки страницы)
            </li>
            <li>
              Цвет слова «наличие» зависит от доступности товара в JSON, для теста изменил значение у третьего товара
            </li>
            <li>
              Подсчеты количества квадратных метров в упаковке и стоимость в баллах автоматическая
            </li>
            <li>
              Парсинг JSON: Учтены недоработки списков (убраны лишние знаки и разделители), раздел "могут понадобится"
              оформлен в виде ссылок на дополнительные товары
            </li>
          </ol>
          <div className="portfolio-item__row">
            <div className="portfolio-item__block_space">
              <b>Стек технологий:</b>
              <p>React/SCSS/Webpack+Babel/Flex</p>
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
              <p>React/SCSS/Webpack+Babel/Flex</p>
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
      </div>
    )
  }
}