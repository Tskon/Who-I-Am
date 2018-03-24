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
    link: '/portfolio/'
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
    title: 'Bredik',
    link: '/portfolio/bredik'
  },
  {
    title: 'GitHub',
    link: '/portfolio/git'
  }
];

exports.menuItems = mainMenuItems;
exports.portfolioMenuItems = portfolioMenuItems;