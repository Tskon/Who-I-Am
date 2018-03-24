import React from 'react';

export default class Bredik extends React.Component {
  render() {
    return (
      <div className="portfolio-item">
        <h1 className="portfolio-item__title">
          Git-Hub аккаунт
        </h1>
        <a href="https://github.com/Tskon" target="_blank">
          <img src="../../img/svg/github.svg" alt="github" title="github" className="portfolio-item__git-img-big"/>
        </a>
      </div>
    )
  }
}