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
    link: '/portfolio/resume'
  },
  {
    title: 'Контакты',
    link: '/contacts'
  }
];

const portfolioMenuItems = [
  {
    title: 'Этот сайт',
    link: '/portfolio/resume'
  },
  {
    title: 'Git',
    link: '/portfolio/git'
  },
  {
    title: 'Bredik',
    link: '/portfolio/bredik'
  }
];

exports.menuItems = mainMenuItems;
exports.portfolioMenuItems = portfolioMenuItems;