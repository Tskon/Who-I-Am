import React from 'react';
import {contentHeight} from '../../lib/content';

export default class Skills extends React.Component{
  componentDidMount(){
    contentHeight('.content');
  }

  render(){
    return(
      <div className="content">
        <h1>Навыки</h1>
        <div className="skills-wrapper">
          <ul>
            <b>FrontEnd</b>
            <li>JavaScript (es6)</li>
            <li>React</li>
            <li>Redux</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Sass/Scss</li>
          </ul>
          <ul>
            <b>BackEnd</b>
            <li>Node.js</li>
            <li>Express</li>
            <li>PHP (синтаксис)</li>
          </ul>
          <ul>
            <b>Сборка</b>
            <li>Webpack</li>
            <li>Babel</li>
          </ul>
        </div>
      </div>
    );
  }
}