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
    title: 'Demo\'s',
    link: '/portfolio/examples'
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