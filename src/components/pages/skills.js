import React from 'react';
import {contentHeight} from '../../lib/content';

export default class Skills extends React.Component{
  componentDidMount(){
    contentHeight('.content');
  }

  render(){
    return(
      <div className="content">
        {/*<h1>Навыки</h1>*/}
        <div className="content__row skills-wrapper">
          <div>
            <h3>FrontEnd</h3>
            <img src="../../img/frontend.png"/>
            <p>JavaScript (es6), HTML5, CSS3, препроцессоры Sass/Scss, современная верстка с React, Redux</p>
          </div>
          <div>
            <h3>BackEnd</h3>
            <img src="../../img/backend.png"/>
            <p>Есть опыт работы с бекендом: Node.js, Express, PHP, MySQL. Не будет проблемы найти общий язык с
              программистами backend. Пишу готовый для подключения к серверной части код.</p>
          </div>
          <div>
            <h3>Сборка</h3>
            <img src="../../img/compile.png"/>
            <p>Webpack + Babel + плагины для оптимизации картинок и кода, проставления префиксов. Получается
              кроссбраузерный, чистый и простой в поддержке код</p>
          </div>
          <div>
            <h3>Тестирование и адаптивность</h3>
            <img src="../../img/browsers.png"/>
            <p>Всегда тестирую свой код на разных устройствах и браузерах</p>
          </div>
        </div>
      </div>
    );
  }
}