import React from 'react';

const mainMenuItems = [
  {
    title: 'Приветствую!',
    link: '/'
  },
  {
    title: 'Навыки',
    link: '/skills'
  },
  {
    title: 'Портфолио',
    link: '/portfolio'
  },
  {
    title: 'Контакты',
    link: '/contacts'
  }
];

const portfolioMenuItems = [
  {
    title: 'Bredik',
    link: '/portfolio/bredik'
  },
  {
    title: 'Этот сайт',
    link: '/portfolio/resume'
  }
];

exports.menuItems = mainMenuItems;
exports.portfolioMenuItems = portfolioMenuItems;