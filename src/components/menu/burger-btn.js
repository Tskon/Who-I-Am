import React from 'react';

export default class Burger extends React.Component{
  render(){
    return(
      <div className="burger-container">
        <div className="burger-menu">
          <div className="burger-click-region">
            <span className="burger-menu-piece"/>
            <span className="burger-menu-piece"/>
            <span className="burger-menu-piece"/>
          </div>
          <span className="burger-menu-txt">Меню</span>
        </div>
      </div>
    )
  }
}